import { ImageIcon } from "lucide-react";

/**
 * Reusable placeholder for media that will later be replaced with
 * next/image <Image /> components. Renders a premium empty state so
 * the layout carries visual weight even without real assets.
 */
export default function MediaPlaceholder({
  aspectRatio = "4/3",
  label = "Media",
  dark = true,
  className = "",
}) {
  return (
    <div
      className={`relative flex w-full items-center justify-center overflow-hidden border ${
        dark
          ? "border-gold/20 bg-gradient-to-br from-ink-soft to-ink"
          : "border-ink/10 bg-gradient-to-br from-bone to-white"
      } ${className}`}
      style={{ aspectRatio }}
    >
      <div className="line-field opacity-40">
        <svg viewBox="0 0 400 300" preserveAspectRatio="none">
          <path
            d="M-20 220 C 80 180, 140 260, 240 200 S 380 140, 440 180"
            fill="none"
            stroke="#C99A3D"
            strokeWidth="0.6"
          />
          <path
            d="M-20 100 C 100 60, 160 140, 260 90 S 360 40, 440 90"
            fill="none"
            stroke="#C99A3D"
            strokeWidth="0.4"
          />
        </svg>
      </div>
      <div
        className={`relative z-10 flex flex-col items-center gap-3 ${
          dark ? "text-text-muted" : "text-ink/40"
        }`}
      >
        <div
          className={`flex h-12 w-12 items-center justify-center rounded-full border ${
            dark ? "border-gold/30" : "border-ink/15"
          }`}
        >
          <ImageIcon size={18} strokeWidth={1.5} />
        </div>
        <span className="text-[11px] tracking-[0.14em] uppercase">{label}</span>
      </div>
    </div>
  );
}
