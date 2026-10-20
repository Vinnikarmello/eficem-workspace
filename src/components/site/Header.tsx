import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { Logo } from "@/components/site/Logo";
import { LanguageSelector, type Locale } from "@/components/site/LanguageSelector";
import { MobileMenu } from "@/components/site/MobileMenu";

export const NAV_LINKS = [
  { label: "Início", href: "#inicio" },
  { label: "O projeto", href: "#projeto" },
  { label: "A equipe", href: "#equipe" },
  { label: "Conquistas", href: "#conquistas" },
  { label: "Na prática", href: "#na-pratica" },
  { label: "Patrocinadores", href: "#patrocinadores" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  // Visual state only — full translations arrive in a later stage.
  const [locale, setLocale] = useState<Locale>("pt-BR");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const solid = scrolled || open;

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 border-b transition-all duration-300",
        solid
          ? "border-white/10 bg-ink/80 backdrop-blur-md"
          : "border-transparent bg-transparent",
      )}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-6 px-5 lg:px-8">
        <a
          href="#inicio"
          aria-label="EFICEM — voltar ao início"
          className="rounded-sm outline-none focus-visible:ring-2 focus-visible:ring-lime"
        >
          <Logo />
        </a>

        <nav aria-label="Menu principal" className="hidden xl:block">
          <ul className="flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="group relative py-2 text-sm font-medium text-white/80 outline-none transition-colors hover:text-white focus-visible:text-white"
                >
                  {link.label}
                  <span className="absolute inset-x-0 -bottom-0.5 h-px origin-left scale-x-0 bg-lime transition-transform duration-300 group-hover:scale-x-100 group-focus-visible:scale-x-100" />
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-5">
          <div className="hidden xl:block">
            <LanguageSelector value={locale} onChange={setLocale} />
          </div>
          <a
            href="#contato"
            className="hidden h-10 items-center bg-lime px-5 font-display text-xs font-bold uppercase tracking-[0.14em] text-ink transition-colors hover:bg-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-lime xl:inline-flex"
          >
            Seja um parceiro
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Fechar menu" : "Abrir menu"}
            className="inline-flex h-10 w-10 items-center justify-center border border-white/15 text-white transition-colors hover:border-lime hover:text-lime focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-lime xl:hidden"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      <MobileMenu
        open={open}
        onClose={() => setOpen(false)}
        links={NAV_LINKS}
        locale={locale}
        onLocaleChange={setLocale}
      />
    </header>
  );
}
