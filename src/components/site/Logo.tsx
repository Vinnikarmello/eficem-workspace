import { cn } from "@/lib/utils";

// Provisional mark inspired by the EFICEM triangular symbol.
// Replace the <svg> below with the official logo file when available.
export function Logo({ className }: { className?: string }) {
  return (
    <span className={cn("inline-flex items-center gap-2.5", className)}>
      <svg viewBox="0 0 40 40" className="h-8 w-8" aria-hidden="true">
        <polygon
          points="20,3 38,35 2,35"
          fill="none"
          stroke="#65D91F"
          strokeWidth="3"
          strokeLinejoin="round"
        />
        <polygon points="20,15 29,31 11,31" fill="#FFFFFF" />
      </svg>
      <span className="font-display text-xl font-bold tracking-[0.18em] text-white">EFICEM</span>
    </span>
  );
}
