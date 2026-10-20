import { useEffect } from "react";
import { LanguageSelector, type Locale } from "@/components/site/LanguageSelector";

type Props = {
  open: boolean;
  onClose: () => void;
  links: { label: string; href: string }[];
  locale: Locale;
  onLocaleChange: (locale: Locale) => void;
};

export function MobileMenu({ open, onClose, links, locale, onLocaleChange }: Props) {
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div
      id="mobile-menu"
      className="absolute inset-x-0 top-full max-h-[calc(100svh-4rem)] overflow-y-auto border-b border-white/10 bg-ink/95 backdrop-blur-md xl:hidden"
    >
      <nav aria-label="Menu principal" className="mx-auto max-w-7xl px-5 py-6">
        <ul className="divide-y divide-white/10">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={onClose}
                className="flex items-center justify-between py-4 font-display text-2xl font-semibold text-white transition-colors hover:text-lime focus-visible:outline-none focus-visible:text-lime"
              >
                {link.label}
                <span className="h-px w-6 bg-lime" aria-hidden="true" />
              </a>
            </li>
          ))}
        </ul>

        <div className="mt-6">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-white/50">Idioma</p>
          <LanguageSelector value={locale} onChange={onLocaleChange} showLabels />
        </div>

        <a
          href="#contato"
          onClick={onClose}
          className="mt-6 inline-flex h-12 w-full items-center justify-center bg-lime px-6 font-display text-sm font-bold uppercase tracking-[0.14em] text-ink transition-colors hover:bg-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-lime"
        >
          Seja um parceiro
        </a>
      </nav>
    </div>
  );
}
