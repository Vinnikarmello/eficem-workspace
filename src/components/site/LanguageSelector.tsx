import { cn } from "@/lib/utils";

export type Locale = "pt-BR" | "es" | "en" | "de";

export const LANGUAGES: { code: Locale; label: string }[] = [
  { code: "pt-BR", label: "Português" },
  { code: "es", label: "Español" },
  { code: "en", label: "English" },
  { code: "de", label: "Deutsch" },
];

function FlagArt({ code }: { code: Locale }) {
  switch (code) {
    case "pt-BR":
      return (
        <>
          <rect width="60" height="60" fill="#009C3B" />
          <polygon points="30,9 55,30 30,51 5,30" fill="#FFDF00" />
          <circle cx="30" cy="30" r="11" fill="#002776" />
        </>
      );
    case "es":
      return (
        <>
          <rect width="60" height="60" fill="#AA151B" />
          <rect y="15" width="60" height="30" fill="#F1BF00" />
        </>
      );
    case "en":
      return (
        <>
          <rect width="60" height="60" fill="#012169" />
          <path d="M0 0L60 60M60 0L0 60" stroke="#FFFFFF" strokeWidth="10" />
          <path d="M0 0L60 60M60 0L0 60" stroke="#C8102E" strokeWidth="4" />
          <path d="M30 0V60M0 30H60" stroke="#FFFFFF" strokeWidth="16" />
          <path d="M30 0V60M0 30H60" stroke="#C8102E" strokeWidth="9" />
        </>
      );
    case "de":
      return (
        <>
          <rect width="60" height="20" fill="#000000" />
          <rect y="20" width="60" height="20" fill="#DD0000" />
          <rect y="40" width="60" height="20" fill="#FFCE00" />
        </>
      );
  }
}

function Flag({ code }: { code: Locale }) {
  return (
    <svg viewBox="0 0 60 60" className="h-full w-full" aria-hidden="true">
      <FlagArt code={code} />
    </svg>
  );
}

type Props = {
  value: Locale;
  onChange: (locale: Locale) => void;
  showLabels?: boolean;
  className?: string;
};

export function LanguageSelector({ value, onChange, showLabels = false, className }: Props) {
  return (
    <div
      role="group"
      aria-label="Idioma"
      className={cn(showLabels ? "grid grid-cols-2 gap-3" : "flex items-center gap-2.5", className)}
    >
      {LANGUAGES.map(({ code, label }) => {
        const active = value === code;
        return (
          <button
            key={code}
            type="button"
            onClick={() => onChange(code)}
            aria-pressed={active}
            aria-label={label}
            title={label}
            className={cn(
              "group flex items-center gap-3 rounded-full text-sm text-white/80 outline-none transition-colors hover:text-white focus-visible:ring-2 focus-visible:ring-lime",
              showLabels && "border border-white/10 bg-graphite p-2 pr-4",
              showLabels && active && "border-lime text-white",
            )}
          >
            <span
              className={cn(
                "block h-8 w-8 shrink-0 overflow-hidden rounded-full ring-2 ring-offset-2 ring-offset-ink transition-all",
                active ? "ring-lime" : "opacity-70 ring-transparent group-hover:opacity-100",
              )}
            >
              <Flag code={code} />
            </span>
            {showLabels && <span className="font-medium">{label}</span>}
          </button>
        );
      })}
    </div>
  );
}
