import { ArrowRight } from "lucide-react";
import { CONTACT, SPONSORS_CTA } from "@/data/contact";

export function SponsorsCta() {
  const { photo } = SPONSORS_CTA;
  const external = /^https?:\/\//.test(CONTACT.sponsorHref);

  return (
    <section id="seja-patrocinador" className="relative overflow-hidden bg-ink text-white">
      {/* Background: official photo when available, technical composition otherwise */}
      {photo.src ? (
        <img
          src={photo.src}
          alt={photo.alt}
          loading="lazy"
          decoding="async"
          className="absolute inset-0 h-full w-full object-cover object-center"
        />
      ) : (
        <>
          <div className="tech-grid absolute inset-0" aria-hidden="true" />
          <svg
            aria-hidden="true"
            viewBox="0 0 400 400"
            className="pointer-events-none absolute -right-24 top-1/2 h-[640px] w-[640px] -translate-y-1/2"
          >
            <polygon
              points="200,20 380,350 20,350"
              fill="none"
              stroke="#65D91F"
              strokeOpacity="0.25"
              strokeWidth="1.5"
            />
            <polygon
              points="200,120 300,310 100,310"
              fill="none"
              stroke="#FFFFFF"
              strokeOpacity="0.12"
              strokeWidth="1"
            />
          </svg>
        </>
      )}
      <div
        className="absolute inset-0 bg-gradient-to-r from-ink via-ink/85 to-ink/60"
        aria-hidden="true"
      />
      <div className="absolute inset-0 bg-ink/40" aria-hidden="true" />

      <div className="relative mx-auto max-w-7xl px-5 py-24 lg:px-8 lg:py-32">
        <div className="max-w-3xl">
          <p className="mb-5 flex items-center gap-3 font-sport text-xs uppercase tracking-[0.3em] text-white/70">
            <span className="h-px w-10 bg-lime" aria-hidden="true" />
            {SPONSORS_CTA.eyebrow}
          </p>
          <h2 className="font-display text-4xl font-bold uppercase leading-[0.95] tracking-tight sm:text-5xl lg:text-7xl">
            {SPONSORS_CTA.title}
          </h2>
          <p className="mt-8 max-w-2xl border-l-2 border-lime pl-5 text-base leading-relaxed text-white/80 sm:text-lg">
            {SPONSORS_CTA.text}
          </p>
        </div>

        <ol className="mt-16 grid gap-10 md:grid-cols-3 md:gap-8">
          {SPONSORS_CTA.fronts.map((front) => (
            <li key={front.n} className="border-t border-white/20 pt-6">
              <span className="flex items-center gap-2 font-sport text-sm tracking-[0.2em] text-lime">
                <span className="h-1.5 w-1.5 bg-lime" aria-hidden="true" />
                {front.n}
              </span>
              <h3 className="mt-4 font-display text-xl font-bold uppercase leading-tight tracking-tight sm:text-2xl">
                {front.title}
              </h3>
              <p className="mt-3 max-w-sm text-base leading-relaxed text-white/75">
                {front.description}
              </p>
            </li>
          ))}
        </ol>

        <div className="mt-14">
          <a
            href={CONTACT.sponsorHref}
            {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
            className="group inline-flex h-14 items-center justify-center gap-3 bg-lime px-8 font-display text-sm font-bold uppercase tracking-[0.12em] text-ink transition-colors hover:bg-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-lime"
          >
            {SPONSORS_CTA.cta}
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </a>
        </div>
      </div>
    </section>
  );
}
