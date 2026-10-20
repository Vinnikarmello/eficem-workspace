import { useState } from "react";
import { ArrowRight, Image as ImageIcon, Maximize2 } from "lucide-react";
import { cn } from "@/lib/utils";
import { GALLERY, GALLERY_CONTENT, type GalleryItem } from "@/data/gallery";
import { GalleryLightbox } from "@/components/site/GalleryLightbox";

function TileContent({ item, interactive }: { item: GalleryItem; interactive: boolean }) {
  return (
    <>
      {item.src ? (
        <img
          src={item.src}
          alt={item.alt}
          loading="lazy"
          decoding="async"
          className="absolute inset-0 h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
        />
      ) : (
        <div className="tech-grid absolute inset-0 flex flex-col items-center justify-center gap-2">
          <ImageIcon className="h-10 w-10 text-white/25" strokeWidth={1.25} aria-hidden="true" />
          <span className="font-sport text-[11px] uppercase tracking-[0.2em] text-white/40">
            {GALLERY_CONTENT.placeholderLabel}
          </span>
        </div>
      )}

      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 h-2/5 bg-gradient-to-t from-ink/90 to-transparent"
        aria-hidden="true"
      />
      <span
        className="pointer-events-none absolute left-3 top-3 h-6 w-6 border-l border-t border-white/40"
        aria-hidden="true"
      />
      <span
        className="pointer-events-none absolute bottom-3 right-3 h-6 w-6 border-b border-r border-white/40"
        aria-hidden="true"
      />

      <span className="absolute left-5 top-5 bg-lime px-2.5 py-1 font-sport text-[11px] font-semibold uppercase tracking-[0.2em] text-ink">
        {item.tag}
      </span>
      {interactive && (
        <span
          className="absolute right-5 top-5 inline-flex h-8 w-8 items-center justify-center border border-white/30 bg-ink/60 text-white opacity-0 transition-opacity group-hover:opacity-100 group-focus-visible:opacity-100"
          aria-hidden="true"
        >
          <Maximize2 className="h-4 w-4" />
        </span>
      )}
      <span className="absolute inset-x-5 bottom-5 text-left font-display text-base font-semibold leading-tight text-white sm:text-lg">
        {item.title}
      </span>
    </>
  );
}

export function GallerySection() {
  const viewable = GALLERY.filter((item) => item.src);
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="na-pratica" className="relative overflow-hidden bg-ink text-white">
      <div className="tech-grid absolute inset-0 opacity-40" aria-hidden="true" />
      <div className="relative mx-auto max-w-7xl px-5 py-20 lg:px-8 lg:py-28">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-3xl">
            <p className="mb-5 flex items-center gap-3 font-sport text-xs uppercase tracking-[0.3em] text-white/70">
              <span className="h-px w-10 bg-lime" aria-hidden="true" />
              {GALLERY_CONTENT.eyebrow}
            </p>
            <h2 className="font-display text-4xl font-bold uppercase leading-[0.95] tracking-tight sm:text-5xl lg:text-7xl">
              {GALLERY_CONTENT.title}
              <span className="text-lime">.</span>
            </h2>
            <p className="mt-6 text-base leading-relaxed text-white/75 sm:text-lg">
              {GALLERY_CONTENT.subtitle}
            </p>
          </div>
          <a
            href={GALLERY_CONTENT.cta.href}
            className="group inline-flex h-12 items-center justify-center gap-3 self-start bg-lime px-7 font-display text-sm font-bold uppercase tracking-[0.12em] text-ink transition-colors hover:bg-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-lime lg:self-auto"
          >
            {GALLERY_CONTENT.cta.label}
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </a>
        </div>

        <div className="mt-14 grid grid-cols-2 gap-4 md:auto-rows-[88px] md:grid-cols-12 md:gap-5 md:[grid-auto-flow:dense]">
          {GALLERY.map((item) => {
            const base = cn("group relative block overflow-hidden border border-white/10 bg-graphite", item.layout);
            if (!item.src) {
              return (
                <figure key={item.id} className={base}>
                  <TileContent item={item} interactive={false} />
                </figure>
              );
            }
            const viewIndex = viewable.findIndex((v) => v.id === item.id);
            return (
              <button
                key={item.id}
                type="button"
                onClick={() => setOpenIndex(viewIndex)}
                aria-label={`${GALLERY_CONTENT.openLabel}: ${item.title}`}
                className={cn(
                  base,
                  "cursor-zoom-in transition-colors hover:border-lime focus-visible:border-lime focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-lime",
                )}
              >
                <TileContent item={item} interactive />
              </button>
            );
          })}
        </div>
      </div>

      {openIndex !== null && viewable.length > 0 && (
        <GalleryLightbox
          items={viewable}
          index={openIndex}
          onClose={() => setOpenIndex(null)}
          onChange={setOpenIndex}
        />
      )}
    </section>
  );
}
