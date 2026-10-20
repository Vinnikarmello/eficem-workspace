import { useRef, useState, type ChangeEvent, type FormEvent, type ReactNode } from "react";
import { ArrowRight, Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";
import { CONTACT, CONTACT_CONTENT, getContactChannels } from "@/data/contact";
import { ChannelIcon } from "@/components/site/SocialIcons";

type FieldName = "name" | "organization" | "email" | "subject" | "message";
type Values = Record<FieldName, string>;
type Errors = Partial<Record<FieldName, string>>;
type Status = "idle" | "sending" | "success" | "error" | "mailto" | "unavailable";

const EMPTY: Values = { name: "", organization: "", email: "", subject: "", message: "" };
const FIELD_ORDER: FieldName[] = ["name", "organization", "email", "subject", "message"];
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

const inputClass =
  "block w-full border border-white/20 bg-ink px-4 py-3 text-base text-white placeholder:text-white/40 transition-colors hover:border-white/40 focus:border-lime focus:outline-none focus-visible:ring-2 focus-visible:ring-lime aria-[invalid=true]:border-white";

function validate(values: Values): Errors {
  const { errors } = CONTACT_CONTENT.form;
  const result: Errors = {};
  if (values.name.trim().length < 2) result.name = errors.name;
  if (!EMAIL_RE.test(values.email.trim())) result.email = errors.email;
  if (values.subject.trim().length < 3) result.subject = errors.subject;
  if (values.message.trim().length < 10) result.message = errors.message;
  return result;
}

function Field({
  id,
  label,
  required,
  error,
  children,
}: {
  id: string;
  label: string;
  required?: boolean;
  error?: string;
  children: ReactNode;
}) {
  return (
    <div>
      <label htmlFor={id} className="mb-2 flex items-baseline justify-between gap-3">
        <span className="font-sport text-xs uppercase tracking-[0.2em] text-white">
          {label}
          {required && <span className="text-lime"> *</span>}
        </span>
        {!required && (
          <span className="text-xs text-white/50">{CONTACT_CONTENT.form.optional}</span>
        )}
      </label>
      {children}
      {error && (
        <p id={`${id}-error`} className="mt-2 flex items-center gap-2 text-sm text-white">
          <span className="h-1.5 w-1.5 shrink-0 bg-lime" aria-hidden="true" />
          {error}
        </p>
      )}
    </div>
  );
}

export function ContactSection() {
  const channels = getContactChannels();
  const { form } = CONTACT_CONTENT;
  const formRef = useRef<HTMLFormElement>(null);
  const [values, setValues] = useState<Values>(EMPTY);
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<Status>("idle");

  const configured = Boolean(CONTACT.formEndpoint || CONTACT.email);

  const onChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const name = e.target.name as FieldName;
    const value = e.target.value;
    setValues((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: undefined }));
    if (status !== "idle" && status !== "sending") setStatus("idle");
  };

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (status === "sending") return;

    const found = validate(values);
    setErrors(found);
    const firstInvalid = FIELD_ORDER.find((key) => found[key]);
    if (firstInvalid) {
      formRef.current
        ?.querySelector<HTMLElement>(`[name="${firstInvalid}"]`)
        ?.focus();
      return;
    }

    if (CONTACT.formEndpoint) {
      setStatus("sending");
      try {
        const res = await fetch(CONTACT.formEndpoint, {
          method: "POST",
          headers: { "Content-Type": "application/json", Accept: "application/json" },
          body: JSON.stringify(values),
        });
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        setStatus("success");
        setValues(EMPTY);
      } catch {
        setStatus("error");
      }
      return;
    }

    if (CONTACT.email) {
      const body = [
        values.message.trim(),
        "",
        `${form.fields.name.label}: ${values.name.trim()}`,
        values.organization.trim()
          ? `${form.fields.organization.label}: ${values.organization.trim()}`
          : "",
        `${form.fields.email.label}: ${values.email.trim()}`,
      ]
        .filter((line, i, arr) => line !== "" || i === 1 || arr[i - 1] !== "")
        .join("\n");
      const url = `mailto:${CONTACT.email}?subject=${encodeURIComponent(
        values.subject.trim(),
      )}&body=${encodeURIComponent(body)}`;
      setStatus("mailto");
      window.location.href = url;
      return;
    }

    setStatus("unavailable");
  };

  const feedbackText =
    status === "success"
      ? form.feedback.success
      : status === "error"
        ? form.feedback.error
        : status === "mailto"
          ? form.feedback.mailto
          : status === "unavailable"
            ? form.feedback.unavailable
            : "";

  const describe = (name: FieldName) => (errors[name] ? `${name}-error` : undefined);

  return (
    <section id="contato" className="relative overflow-hidden bg-graphite text-white">
      <div className="h-px w-full bg-lime" aria-hidden="true" />
      <svg
        aria-hidden="true"
        viewBox="0 0 400 400"
        className="pointer-events-none absolute -left-32 bottom-0 hidden h-[520px] w-[520px] lg:block"
      >
        <polygon
          points="200,20 380,350 20,350"
          fill="none"
          stroke="#65D91F"
          strokeOpacity="0.12"
          strokeWidth="1.5"
        />
      </svg>

      <div className="relative mx-auto max-w-7xl px-5 py-20 lg:px-8 lg:py-28">
        <div className="grid gap-14 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <p className="mb-5 flex items-center gap-3 font-sport text-xs uppercase tracking-[0.3em] text-white/70">
              <span className="h-px w-10 bg-lime" aria-hidden="true" />
              {CONTACT_CONTENT.eyebrow}
            </p>
            <h2 className="font-display text-4xl font-bold uppercase leading-[0.95] tracking-tight sm:text-5xl lg:text-6xl">
              {CONTACT_CONTENT.title}
            </h2>
            <p className="mt-8 max-w-xl border-l-2 border-lime pl-5 text-base leading-relaxed text-white/75 sm:text-lg">
              {CONTACT_CONTENT.text}
            </p>

            <h3 className="mt-12 font-sport text-xs uppercase tracking-[0.3em] text-white/70">
              {CONTACT_CONTENT.channelsTitle}
            </h3>
            <ul className="mt-4 divide-y divide-white/10 border-y border-white/10">
              {channels.map((channel) => {
                const inner = (
                  <>
                    <span
                      className={cn(
                        "inline-flex h-11 w-11 shrink-0 items-center justify-center border",
                        channel.href
                          ? "border-lime text-lime transition-colors group-hover:bg-lime group-hover:text-ink"
                          : "border-dashed border-white/20 text-white/30",
                      )}
                    >
                      <ChannelIcon channel={channel.key} className="h-5 w-5" />
                    </span>
                    <span className="min-w-0 flex-1">
                      <span className="block font-sport text-[11px] uppercase tracking-[0.2em] text-white/60">
                        {channel.label}
                      </span>
                      <span
                        className={cn(
                          "mt-0.5 block truncate text-base",
                          channel.href ? "text-white" : "text-white/40",
                        )}
                      >
                        {channel.display ?? CONTACT_CONTENT.channelPending}
                      </span>
                    </span>
                    {channel.href && (
                      <ArrowRight className="h-4 w-4 shrink-0 text-white/50 transition-all group-hover:translate-x-1 group-hover:text-lime" />
                    )}
                  </>
                );
                return (
                  <li key={channel.key}>
                    {channel.href ? (
                      <a
                        href={channel.href}
                        {...(channel.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                        className="group flex items-center gap-4 py-4 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-lime"
                      >
                        {inner}
                      </a>
                    ) : (
                      <div className="flex items-center gap-4 py-4">{inner}</div>
                    )}
                  </li>
                );
              })}
            </ul>
          </div>

          <div className="lg:col-span-7">
            <form
              ref={formRef}
              onSubmit={onSubmit}
              noValidate
              className="relative border border-white/10 bg-ink p-6 sm:p-10"
            >
              <span className="absolute left-6 top-0 h-0.5 w-16 bg-lime sm:left-10" aria-hidden="true" />
              <h3 className="font-display text-2xl font-bold uppercase tracking-tight">
                {form.title}
              </h3>
              <p className="mt-2 text-sm text-white/60">{form.requiredHint}</p>

              {!configured && (
                <p className="mt-5 border border-dashed border-white/25 px-4 py-3 text-sm text-white/70">
                  {form.notConfigured}
                </p>
              )}

              <div className="mt-8 grid gap-6 sm:grid-cols-2">
                <Field id="name" label={form.fields.name.label} required error={errors.name}>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    autoComplete="name"
                    value={values.name}
                    onChange={onChange}
                    placeholder={form.fields.name.placeholder}
                    aria-invalid={Boolean(errors.name)}
                    aria-describedby={describe("name")}
                    className={inputClass}
                  />
                </Field>
                <Field
                  id="organization"
                  label={form.fields.organization.label}
                  error={errors.organization}
                >
                  <input
                    id="organization"
                    name="organization"
                    type="text"
                    autoComplete="organization"
                    value={values.organization}
                    onChange={onChange}
                    placeholder={form.fields.organization.placeholder}
                    className={inputClass}
                  />
                </Field>
                <Field id="email" label={form.fields.email.label} required error={errors.email}>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    inputMode="email"
                    autoComplete="email"
                    value={values.email}
                    onChange={onChange}
                    placeholder={form.fields.email.placeholder}
                    aria-invalid={Boolean(errors.email)}
                    aria-describedby={describe("email")}
                    className={inputClass}
                  />
                </Field>
                <Field id="subject" label={form.fields.subject.label} required error={errors.subject}>
                  <input
                    id="subject"
                    name="subject"
                    type="text"
                    value={values.subject}
                    onChange={onChange}
                    placeholder={form.fields.subject.placeholder}
                    aria-invalid={Boolean(errors.subject)}
                    aria-describedby={describe("subject")}
                    className={inputClass}
                  />
                </Field>
                <div className="sm:col-span-2">
                  <Field
                    id="message"
                    label={form.fields.message.label}
                    required
                    error={errors.message}
                  >
                    <textarea
                      id="message"
                      name="message"
                      rows={6}
                      value={values.message}
                      onChange={onChange}
                      placeholder={form.fields.message.placeholder}
                      aria-invalid={Boolean(errors.message)}
                      aria-describedby={describe("message")}
                      className={cn(inputClass, "resize-y")}
                    />
                  </Field>
                </div>
              </div>

              <div className="mt-8 flex flex-col gap-5 sm:flex-row sm:items-center">
                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="group inline-flex h-14 w-full items-center justify-center gap-3 bg-lime px-8 font-display text-sm font-bold uppercase tracking-[0.12em] text-ink transition-colors hover:bg-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-lime disabled:cursor-not-allowed disabled:opacity-70 sm:w-auto"
                >
                  {status === "sending" ? (
                    <>
                      <Loader2 className="h-4 w-4 animate-spin" />
                      {form.sending}
                    </>
                  ) : (
                    <>
                      {form.submit}
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </>
                  )}
                </button>
                <div role="status" aria-live="polite" className="text-sm leading-relaxed text-white/80">
                  {feedbackText && (
                    <p className="flex items-start gap-2 border-l-2 border-lime pl-3">{feedbackText}</p>
                  )}
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
