import { ArrowUp } from "lucide-react";
import { NAV_LINKS } from "@/components/site/Header";
import { Logo } from "@/components/site/Logo";
import { ChannelIcon } from "@/components/site/SocialIcons";
import { CONTACT, FOOTER_CONTENT, getContactChannels } from "@/data/contact";

const FOOTER_LINKS = [...NAV_LINKS, FOOTER_CONTENT.contactLink];

export function Footer() {
  const socials = getContactChannels().filter((c) => c.key !== "email" && c.href);
  const year = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden bg-ink text-white">
      <div className="h-0.5 w-full bg-lime" aria-hidden="true" />
      <svg
        aria-hidden="true"
        viewBox="0 0 400 400"
        className="pointer-events-none absolute -right-16 -top-10 h-[360px] w-[360px]"
      >
        <polygon
          points="200,20 380,350 20,350"
          fill="none"
          stroke="#65D91F"
          strokeOpacity="0.18"
          strokeWidth="1.5"
        />
        <polygon
          points="200,120 300,310 100,310"
          fill="none"
          stroke="#FFFFFF"
          strokeOpacity="0.08"
          strokeWidth="1"
        />
      </svg>

      <div className="relative mx-auto max-w-7xl px-5 py-14 lg:px-8">
        <div className="grid gap-10 md:grid-cols-12">
          <div className="md:col-span-5">
            <a
              href="#inicio"
              aria-label="EFICEM — voltar ao início"
              className="inline-block rounded-sm focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-lime"
            >
              <Logo />
            </a>
            <p className="mt-5 max-w-md text-sm leading-relaxed text-white/70">
              {FOOTER_CONTENT.description}
            </p>
          </div>

          <nav aria-label={FOOTER_CONTENT.linksTitle} className="md:col-span-4">
            <h2 className="font-sport text-xs uppercase tracking-[0.3em] text-white/60">
              {FOOTER_CONTENT.linksTitle}
            </h2>
            <ul className="mt-4 grid grid-cols-2 gap-x-6 gap-y-2.5">
              {FOOTER_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-white/80 transition-colors hover:text-lime focus-visible:text-lime focus-visible:outline-none"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {(CONTACT.email || socials.length > 0) && (
            <div className="md:col-span-3">
              <h2 className="font-sport text-xs uppercase tracking-[0.3em] text-white/60">
                {FOOTER_CONTENT.contactTitle}
              </h2>
              {CONTACT.email && (
                <a
                  href={`mailto:${CONTACT.email}`}
                  className="mt-4 block break-all text-sm text-white/80 transition-colors hover:text-lime focus-visible:text-lime focus-visible:outline-none"
                >
                  {CONTACT.email}
                </a>
              )}
              {socials.length > 0 && (
                <ul className="mt-5 flex items-center gap-3" aria-label={FOOTER_CONTENT.socialTitle}>
                  {socials.map((social) => (
                    <li key={social.key}>
                      <a
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={social.label}
                        title={social.label}
                        className="inline-flex h-10 w-10 items-center justify-center border border-white/20 text-white transition-colors hover:border-lime hover:bg-lime hover:text-ink focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-lime"
                      >
                        <ChannelIcon channel={social.key} className="h-4 w-4" />
                      </a>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          )}
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-white/10 pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-white/60">
            © {year} {FOOTER_CONTENT.copyright}
          </p>
          <a
            href="#inicio"
            className="group inline-flex items-center gap-2 self-start font-sport text-xs uppercase tracking-[0.2em] text-white/70 transition-colors hover:text-lime focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-lime sm:self-auto"
          >
            {FOOTER_CONTENT.backToTop}
            <ArrowUp className="h-3.5 w-3.5 transition-transform group-hover:-translate-y-0.5" />
          </a>
        </div>
      </div>
    </footer>
  );
}
