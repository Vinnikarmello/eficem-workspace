import { ArrowRight } from "lucide-react";
import { FOCUS_AREAS, PROJECT_CONTENT } from "@/data/content";

function PhotoPlaceholder() {
  return (
    <div className="relative flex h-full w-full items-center justify-center bg-graphite">
      <div className="tech-grid absolute inset-0" aria-hidden="true" />
      <svg
        aria-hidden="true"
        viewBox="0 0 400 400"
        className="absolute -right-10 top-1/2 h-[120%] w-auto -translate-y-1/2"
      >
        <polygon
          points="200,20 380,350 20,350"
          fill="none"
          stroke="#65D91F"
          strokeOpacity="0.3"
          strokeWidth="1.5"
        />
        <polygon
          points="200,120 300,310 100,310"
          fill="none"
          stroke="#FFFFFF"
          strokeOpacity="0.15"
          strokeWidth="1"
        />
      </svg>
      <p className="relative mx-6 max-w-xs border border-white/15 bg-ink/70 px-4 py-2 text-center text-[10px] font-semibold uppercase tracking-[0.2em] text-white/60">
        {PROJECT_CONTENT.photo.placeholderLabel}
      </p>
    </div>
  );
}

export function ProjectSection() {
  const { photo } = PROJECT_CONTENT;

  return (
    <section id="projeto" className="overflow-hidden bg-white text-ink">
      <div className="mx-auto max-w-7xl px-5 py-20 lg:px-8 lg:py-28">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <p className="mb-5 flex items-center gap-3 font-sport text-xs uppercase tracking-[0.3em] text-ink/70">
              <span className="h-px w-10 bg-lime" aria-hidden="true" />
              {PROJECT_CONTENT.eyebrow}
            </p>
            <h2 className="font-display text-4xl font-bold uppercase leading-[0.95] tracking-tight sm:text-5xl lg:text-6xl">
              {PROJECT_CONTENT.title}
            </h2>
            <p className="mt-8 max-w-xl border-l-2 border-lime pl-5 text-base leading-relaxed text-ink/75 sm:text-lg">
              {PROJECT_CONTENT.text}
            </p>
            <a
              href={PROJECT_CONTENT.cta.href}
              className="group mt-10 inline-flex h-12 items-center justify-center gap-3 bg-ink px-7 font-display text-sm font-bold uppercase tracking-[0.12em] text-white transition-colors hover:bg-lime hover:text-ink focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink"
            >
              {PROJECT_CONTENT.cta.label}
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
          </div>

          <div className="relative">
            <div className="relative aspect-[4/3] w-full overflow-hidden bg-graphite">
              {photo.src ? (
                <img
                  src={photo.src}
                  alt={photo.alt}
                  loading="lazy"
                  decoding="async"
                  className="h-full w-full object-cover object-center"
                />
              ) : (
                <PhotoPlaceholder />
              )}
            </div>
            <span
              className="pointer-events-none absolute -bottom-3 -left-3 hidden h-16 w-16 border-b-2 border-l-2 border-lime sm:block"
              aria-hidden="true"
            />
            <span
              className="pointer-events-none absolute -right-3 -top-3 hidden h-16 w-16 border-r-2 border-t-2 border-lime sm:block"
              aria-hidden="true"
            />
          </div>
        </div>

        <ul className="mt-20 grid gap-10 md:grid-cols-3 md:gap-8 lg:mt-24">
          {FOCUS_AREAS.map((area) => {
            const Icon = area.icon;
            return (
              <li key={area.n} className="border-t border-ink/15 pt-6">
                <div className="flex items-center justify-between">
                  <span className="inline-flex h-12 w-12 items-center justify-center bg-ink text-lime">
                    <Icon className="h-6 w-6" strokeWidth={1.75} aria-hidden="true" />
                  </span>
                  <span className="font-sport text-sm tracking-[0.2em] text-ink/50">{area.n}</span>
                </div>
                <h3 className="mt-6 flex items-center gap-3 font-display text-2xl font-bold uppercase tracking-tight">
                  <span className="h-1.5 w-1.5 bg-lime" aria-hidden="true" />
                  {area.title}
                </h3>
                <p className="mt-3 max-w-sm text-base leading-relaxed text-ink/70">
                  {area.description}
                </p>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
