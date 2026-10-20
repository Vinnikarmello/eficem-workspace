import { useEffect, useRef } from "react";
import { ArrowLeft, ArrowRight, X } from "lucide-react";
import { GALLERY_CONTENT, type GalleryItem } from "@/data/gallery";

type Props = {
  items: GalleryItem[];
  index: number;
  onClose: () => void;
  onChange: (index: number) => void;
};

export function GalleryLightbox({ items, index, onClose, onChange }: Props) {
  const dialogRef = useRef<HTMLDivElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const touchX = useRef<number | null>(null);
  const total = items.length;
  const item = items[index];

  const go = (dir: 1 | -1) => onChange((index + dir + total) % total);

  // Keep latest handlers available to the keyboard listener.
  const handlers = useRef({ go, onClose });
  handlers.current = { go, onClose };

  useEffect(() => {
    const previouslyFocused = document.activeElement as HTMLElement | null;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();

    const onKey = (e: globalThis.KeyboardEvent) => {
      if (e.key === "Escape") {
        e.preventDefault();
        handlers.current.onClose();
      } else if (e.key === "ArrowLeft") {
        e.preventDefault();
        handlers.current.go(-1);
      } else if (e.key === "ArrowRight") {
        e.preventDefault();
        handlers.current.go(1);
      } else if (e.key === "Tab" && dialogRef.current) {
        const focusables = Array.from(dialogRef.current.querySelectorAll<HTMLElement>("button"));
        if (focusables.length === 0) return;
        const first = focusables[0];
        const last = focusables[focusables.length - 1];
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };
    window.addEventListener("keydown", onKey);
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = previousOverflow;
      previouslyFocused?.focus?.();
    };
  }, []);

  if (!item) return null;

  const navClass =
    "inline-flex h-12 w-12 items-center justify-center border border-white/25 bg-ink/80 text-white transition-colors hover:border-lime hover:bg-lime hover:text-ink focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-lime";

  return (
    <div
      ref={dialogRef}
      role="dialog"
      aria-modal="true"
      aria-label={GALLERY_CONTENT.dialogLabel}
      className="fixed inset-0 z-[60] flex flex-col bg-ink/95 backdrop-blur-sm"
      onClick={onClose}
      onTouchStart={(e) => {
        touchX.current = e.touches[0]?.clientX ?? null;
      }}
      onTouchEnd={(e) => {
        if (touchX.current === null) return;
        const dx = (e.changedTouches[0]?.clientX ?? touchX.current) - touchX.current;
        touchX.current = null;
        if (Math.abs(dx) > 50 && total > 1) go(dx < 0 ? 1 : -1);
      }}
    >
      <div className="flex items-center justify-between gap-4 px-5 py-4 lg:px-8">
        <span className="font-sport text-xs uppercase tracking-[0.2em] text-white/60">
          {String(index + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
        </span>
        <button
          ref={closeRef}
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            onClose();
          }}
          aria-label={GALLERY_CONTENT.closeLabel}
          className={navClass}
        >
          <X className="h-5 w-5" />
        </button>
      </div>

      <div className="relative flex min-h-0 flex-1 items-center justify-center px-5 lg:px-24">
        {total > 1 && (
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              go(-1);
            }}
            aria-label={GALLERY_CONTENT.prevLabel}
            className={`${navClass} absolute left-2 z-10 lg:left-6`}
          >
            <ArrowLeft className="h-5 w-5" />
          </button>
        )}
        <img
          key={item.id}
          src={item.src}
          alt={item.alt}
          decoding="async"
          onClick={(e) => e.stopPropagation()}
          className="max-h-full max-w-full select-none object-contain"
        />
        {total > 1 && (
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              go(1);
            }}
            aria-label={GALLERY_CONTENT.nextLabel}
            className={`${navClass} absolute right-2 z-10 lg:right-6`}
          >
            <ArrowRight className="h-5 w-5" />
          </button>
        )}
      </div>

      <div className="px-5 py-5 text-center lg:px-8" onClick={(e) => e.stopPropagation()}>
        <span className="inline-block bg-lime px-2.5 py-1 font-sport text-[11px] font-semibold uppercase tracking-[0.2em] text-ink">
          {item.tag}
        </span>
        <p className="mt-3 font-display text-lg font-semibold text-white">{item.title}</p>
      </div>
    </div>
  );
}
