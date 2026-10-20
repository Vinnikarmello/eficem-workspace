import { ArrowRight } from "lucide-react";

// To use the official photo, set `src` to the image path (e.g. "/images/eficem-hero.jpg").
// While `src` is empty, a clearly provisional technical illustration is shown.
const HERO_PHOTO = {
  src: "" as string,
  alt: "Veículo de competição da EFICEM em pista",
};

const INDICATORS = [
  { n: "01", label: "Projeto" },
  { n: "02", label: "Desenvolvimento" },
  { n: "03", label: "Competição" },
];

function VehiclePlaceholder() {
  return (
    <div className="relative flex h-full w-full items-center justify-center">
      <svg
        viewBox="0 0 800 360"
        role="img"
        aria-label="Ilustração provisória de veículo de eficiência energética"
        className="w-full max-w-4xl"
      >
        <g fill="none" stroke="#FFFFFF" strokeOpacity="0.75" strokeWidth="2" strokeLinejoin="round">
          <path
            d="M50 262 C 110 228, 210 188, 340 166 C 420 152, 520 156, 610 196 C 680 226, 730 244, 752 262 Z"
            fill="#151719"
          />
          <path d="M300 176 C 360 140, 450 140, 520 172" />
          <path d="M180 238 H 640" strokeOpacity="0.35" />
          <circle cx="190" cy="266" r="46" fill="#050505" />
          <circle cx="190" cy="266" r="18" />
          <circle cx="610" cy="266" r="46" fill="#050505" />
          <circle cx="610" cy="266" r="18" />
        </g>
        <path d="M60 312 H 740" stroke="#65D91F" strokeWidth="2" />
        <g stroke="#65D91F" strokeWidth="2">
          <path d="M50 120 V 140 M50 130 H 90" />
          <path d="M752 120 V 140 M752 130 H 712" />
        </g>
      </svg>
      <p className="absolute bottom-2 right-2 border border-white/15 bg-ink/70 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.2em] text-white/60">
        Imagem provisória · substituir pela foto oficial
      </p>
    </div>
  );
}

export function Hero() {
  return (
    <section id="inicio" className="relative flex min-h-[100svh] flex-col overflow-hidden bg-ink">
      {/* Background layers */}
      <div className="tech-grid absolute inset-0" aria-hidden="true" />
      <svg
        aria-hidden="true"
        viewBox="0 0 400 400"
        className="pointer-events-none absolute -right-24 top-1/2 hidden h-[760px] w-[760px] -translate-y-1/2 lg:block"
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

      <div className="animate-slide-in absolute inset-x-0 bottom-24 top-24 opacity-40 sm:opacity-60 lg:inset-x-auto lg:right-0 lg:w-[62%] lg:opacity-100">
        {HERO_PHOTO.src ? (
          <img
            src={HERO_PHOTO.src}
            alt={HERO_PHOTO.alt}
            fetchPriority="high"
            className="h-full w-full object-cover object-center"
          />
        ) : (
          <VehiclePlaceholder />
        )}
      </div>

      {/* Dark overlays for contrast */}
      <div
        className="absolute inset-0 bg-gradient-to-r from-ink via-ink/80 to-ink/10"
        aria-hidden="true"
      />
      <div
        className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-ink to-transparent"
        aria-hidden="true"
      />

      {/* Content */}
      <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-1 items-center px-5 pb-12 pt-28 lg:px-8">
        <div className="max-w-2xl">
          <p
            className="animate-rise mb-6 flex items-center gap-3 font-sport text-xs font-medium uppercase tracking-[0.3em] text-white/70 sm:text-sm"
            style={{ animationDelay: "0.05s" }}
          >
            <span className="h-px w-10 bg-lime" aria-hidden="true" />
            UFSC Joinville · Eficiência veicular
          </p>

          <h1
            className="animate-rise font-display text-[clamp(3.75rem,13vw,9.5rem)] font-bold leading-[0.85] tracking-tight text-white"
            style={{ animationDelay: "0.15s" }}
          >
            EFICEM
            <span className="text-lime">.</span>
          </h1>

          <h2
            className="animate-rise mt-8 font-display text-2xl font-semibold leading-tight text-white sm:text-3xl"
            style={{ animationDelay: "0.3s" }}
          >
            Eficiência energética.
            <br />
            Engenharia em movimento.
          </h2>

          <p
            className="animate-rise mt-6 max-w-xl text-base leading-relaxed text-white/75 sm:text-lg"
            style={{ animationDelay: "0.42s" }}
          >
            Somos a equipe de eficiência energética veicular da UFSC Joinville. Unimos conhecimento,
            desenvolvimento tecnológico e trabalho em equipe para projetar, construir e evoluir
            soluções de mobilidade eficiente.
          </p>

          <div
            className="animate-rise mt-10 flex flex-col gap-4 sm:flex-row"
            style={{ animationDelay: "0.56s" }}
          >
            <a
              href="#projeto"
              className="group inline-flex h-12 items-center justify-center gap-3 bg-lime px-7 font-display text-sm font-bold uppercase tracking-[0.12em] text-ink transition-colors hover:bg-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-lime"
            >
              Conheça nosso projeto
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#conquistas"
              className="inline-flex h-12 items-center justify-center border border-white/30 bg-transparent px-7 font-display text-sm font-bold uppercase tracking-[0.12em] text-white transition-colors hover:border-lime hover:text-lime focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-lime"
            >
              Nossa trajetória
            </a>
          </div>
        </div>
      </div>

      {/* Bottom indicators */}
      <div className="relative z-10 border-t border-white/10 bg-ink/60 backdrop-blur-sm">
        <ul className="mx-auto grid max-w-7xl grid-cols-3 px-5 lg:px-8">
          {INDICATORS.map((item, i) => (
            <li
              key={item.n}
              className={
                "flex flex-col gap-1 py-4 sm:flex-row sm:items-center sm:gap-4 " +
                (i > 0 ? "border-l border-white/10 pl-4 sm:pl-8" : "")
              }
            >
              <span className="flex items-center gap-2 font-sport text-xs tracking-[0.2em] text-lime">
                <span className="h-1.5 w-1.5 bg-lime" aria-hidden="true" />
                {item.n}
              </span>
              <span className="font-display text-[11px] font-semibold uppercase tracking-[0.14em] text-white sm:text-sm sm:tracking-[0.2em]">
                {item.label}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
