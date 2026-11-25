export default function StatItem({ icon: Icon, value, label, dark = true }) {
  return (
    <div className="flex items-center gap-3.5">
      <div
        className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-full border ${
          dark ? "border-gold/40 text-gold" : "border-ink/15 text-gold"
        }`}
      >
        <Icon size={18} strokeWidth={1.6} />
      </div>
      <div className="flex flex-col leading-tight">
        <span
          className={`font-display text-2xl font-semibold ${
            dark ? "text-text-light" : "text-ink"
          }`}
        >
          {value}
        </span>
        <span className={`text-[13px] ${dark ? "text-text-muted" : "text-ink/55"}`}>
          {label}
        </span>
      </div>
    </div>
  );
}
