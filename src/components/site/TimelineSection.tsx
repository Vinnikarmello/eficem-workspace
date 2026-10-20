import { useCallback, useEffect, useState, type KeyboardEvent } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ArrowLeft, ArrowRight, Image as ImageIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { TIMELINE, TIMELINE_CONTENT, type TimelineItem } from "@/data/timeline";

function TimelineCard({ item, index, total }: { item: TimelineItem; index: number; total: number }) {
  const number = String(index + 1).padStart(2, "0");

  return (
    <article
      className={cn(
        "flex h-full flex-col overflow-hidden border bg-graphite text-white",
        item.highlight ? "border-lime" : "border-white/10",
      )}
    >
      <div className="relative aspect-[16/10] w-full overflow-hidden bg-ink">
        {item.photo?.src ? (
          <img
            src={item.photo.src}
            alt={item.photo.alt}
            loading="lazy"
            decoding="async"
            draggable={false}
            className="h-full w-full select-none object-cover object-center"
          />
        ) : (
          <div className="tech-grid flex h-full w-full flex-col items-center justify-center gap-2">
            <ImageIcon className="h-10 w-10 text-white/25" strokeWidth={1.25} aria-hidden="true" />
            <span className="font-sport text-[11px] uppercase tracking-[0.2em] text-white/40">
              {TIMELINE_CONTENT.photoPlaceholder}
            </span>
          </div>
        )}
        <div
          className="pointer-events-none absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-graphite/80 to-transparent"
          aria-hidden="true"
        />
      </div>

      <div className="relative flex flex-1 flex-col p-5">
        <span className="absolute left-5 top-0 h-0.5 w-10 bg-lime" aria-hidden="true" />
        <div className="mt-2 flex items-center justify-between gap-3">
          <span className="inline-flex items-center bg-lime px-2.5 py-1 font-sport text-xs font-semibold uppercase tracking-[0.18em] text-ink">
            {item.period}
          </span>
          <span className="font-sport text-xs tracking-[0.2em] text-white/50">
            {number} / {String(total).padStart(2, "0")}
          </span>
        </div>

        <h3 className="mt-4 font-display text-xl font-bold uppercase leading-tight tracking-tight text-white">
          {item.title}
        </h3>
        <p className="mt-3 text-sm leading-relaxed text-white/70">{item.description}</p>

        {(item.highlight || item.placeholder) && (
          <div className="mt-5 flex flex-wrap gap-2 pt-1">
            {item.highlight && (
              <span className="border border-lime px-2 py-0.5 font-sport text-[10px] uppercase tracking-[0.2em] text-lime">
                {TIMELINE_CONTENT.highlightLabel}
              </span>
            )}
            {item.placeholder && (
              <span className="border border-dashed border-white/25 px-2 py-0.5 font-sport text-[10px] uppercase tracking-[0.2em] text-white/50">
                {TIMELINE_CONTENT.placeholderBadge}
              </span>
            )}
          </div>
        )}
      </div>
    </article>
  );
}

export function TimelineSection() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "start", duration: 28 });
  const [selected, setSelected] = useState(0);
  const [snapCount, setSnapCount] = useState(TIMELINE.length);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    const update = () => {
      setSelected(emblaApi.selectedScrollSnap());
      setSnapCount(emblaApi.scrollSnapList().length);
    };
    update();
    emblaApi.on("select", update);
    emblaApi.on("reInit", update);
    return () => {
      emblaApi.off("select", update);
      emblaApi.off("reInit", update);
    };
  }, [emblaApi]);

  const onKeyDown = (e: KeyboardEvent<HTMLDivElement>) => {
    if (e.key === "ArrowLeft") {
      e.preventDefault();
      scrollPrev();
    } else if (e.key === "ArrowRight") {
      e.preventDefault();
      scrollNext();
    } else if (e.key === "Home") {
      e.preventDefault();
      emblaApi?.scrollTo(0);
    } else if (e.key === "End") {
      e.preventDefault();
      emblaApi?.scrollTo(snapCount - 1);
    }
  };

  const controlClass =
    "inline-flex h-12 w-12 items-center justify-center border border-ink bg-ink text-white transition-colors hover:border-lime hover:bg-lime hover:text-ink focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-lime";

  return (
    <section id="conquistas" className="overflow-hidden bg-white text-ink">
      <div className="mx-auto max-w-7xl px-5 py-20 lg:px-8 lg:py-28">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-3xl">
            <p className="mb-5 flex items-center gap-3 font-sport text-xs uppercase tracking-[0.3em] text-ink/70">
              <span className="h-px w-10 bg-lime" aria-hidden="true" />
              {TIMELINE_CONTENT.eyebrow}
            </p>
            <h2 className="font-display text-4xl font-bold uppercase leading-[0.95] tracking-tight sm:text-5xl lg:text-6xl">
              {TIMELINE_CONTENT.title}
            </h2>
            <p className="mt-6 max-w-xl border-l-2 border-lime pl-5 text-base leading-relaxed text-ink/75 sm:text-lg">
              {TIMELINE_CONTENT.subtitle}
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={scrollPrev}
              aria-label={TIMELINE_CONTENT.prevLabel}
              className={controlClass}
            >
              <ArrowLeft className="h-5 w-5" />
            </button>
            <button
              type="button"
              onClick={scrollNext}
              aria-label={TIMELINE_CONTENT.nextLabel}
              className={controlClass}
            >
              <ArrowRight className="h-5 w-5" />
            </button>
          </div>
        </div>

        <div
          role="region"
          aria-roledescription="carousel"
          aria-label={TIMELINE_CONTENT.regionLabel}
          tabIndex={0}
          onKeyDown={onKeyDown}
          className="mt-14 outline-none focus-visible:outline-2 focus-visible:outline-offset-8 focus-visible:outline-lime"
        >
          <div ref={emblaRef} className="cursor-grab overflow-hidden active:cursor-grabbing">
            <div className="-ml-5 flex touch-pan-y">
              {TIMELINE.map((item, i) => (
                <div
                  key={item.id}
                  role="group"
                  aria-roledescription="slide"
                  aria-label={`${i + 1} / ${TIMELINE.length}`}
                  className="relative min-w-0 shrink-0 grow-0 basis-[85%] pl-5 sm:basis-[46%] lg:basis-[30%]"
                >
                  <span
                    className="pointer-events-none absolute inset-x-0 top-[11px] h-0.5 bg-lime"
                    aria-hidden="true"
                  />
                  <span
                    className="pointer-events-none absolute left-10 top-1.5 h-3 w-3 rounded-full bg-lime ring-4 ring-white"
                    aria-hidden="true"
                  />
                  <div className="h-full pt-8">
                    <TimelineCard item={item} index={i} total={TIMELINE.length} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-10 flex items-center gap-2" role="group" aria-label={TIMELINE_CONTENT.regionLabel}>
          {Array.from({ length: snapCount }, (_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => emblaApi?.scrollTo(i)}
              aria-label={`${TIMELINE_CONTENT.goToLabel} ${i + 1}`}
              aria-current={i === selected ? "true" : undefined}
              className="group flex h-6 items-center focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-lime"
            >
              <span
                className={cn(
                  "block h-1 transition-all duration-300",
                  i === selected ? "w-10 bg-ink" : "w-5 bg-ink/20 group-hover:bg-ink/50",
                )}
              />
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
