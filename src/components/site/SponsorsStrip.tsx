import { ArrowUpRight } from "lucide-react";

type Sponsor = { name: string; logo: string; href?: string };

// Add official sponsors here (logo path + name). Empty slots are shown as placeholders.
const SPONSORS: Sponsor[] = [];
const MIN_SLOTS = 6;

export function SponsorsStrip() {
  const slots = Array.from(
    { length: Math.max(MIN_SLOTS, SPONSORS.length) },
    (_, i) => SPONSORS[i] as Sponsor | undefined,
  );

  return (
    <section id="patrocinadores" className="bg-graphite">
      <div className="h-px w-full bg-lime" aria-hidden="true" />
      <div className="mx-auto max-w-7xl px-5 py-14 lg:px-8 lg:py-16">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="mb-3 flex items-center gap-3 font-sport text-xs uppercase tracking-[0.3em] text-white/60">
              <span className="h-px w-8 bg-lime" aria-hidden="true" />
              Parceiros oficiais
            </p>
            <h2 className="font-display text-2xl font-bold uppercase leading-tight tracking-tight text-white sm:text-3xl lg:text-4xl">
              Quem acredita na nossa engenharia
            </h2>
          </div>
          <a
            href="#contato"
            className="group inline-flex items-center gap-2 self-start border-b border-lime pb-1 text-sm font-medium text-white transition-colors hover:text-lime focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-lime lg:self-auto"
          >
            Sua empresa pode fazer parte dessa trajetória.
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </a>
        </div>

        <ul className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
          {slots.map((sponsor, i) => (
            <li
              key={sponsor ? sponsor.name : `slot-${i}`}
              className="flex aspect-[3/2] items-center justify-center border border-dashed border-white/15 bg-ink/40 p-4 transition-colors hover:border-lime/60"
            >
              {sponsor ? (
                <a
                  href={sponsor.href}
                  className="flex h-full w-full items-center justify-center"
                  aria-label={sponsor.name}
                >
                  <img
                    src={sponsor.logo}
                    alt={sponsor.name}
                    loading="lazy"
                    className="max-h-full max-w-full object-contain"
                  />
                </a>
              ) : (
                <span className="text-center font-sport text-[11px] uppercase tracking-[0.2em] text-white/35">
                  Logo do parceiro
                  <span className="mt-1 block text-white/25">{String(i + 1).padStart(2, "0")}</span>
                </span>
              )}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
