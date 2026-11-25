export default function CapabilityCard({ capability, active, onSelect }) {
  const { number, Icon, title, description } = capability;

  return (
    <button
      type="button"
      onClick={onSelect}
      aria-pressed={active}
      className={`group flex w-full flex-col gap-3 border p-5 text-left transition-all duration-300 hover:-translate-y-0.5 ${
        active
          ? "border-gold bg-white/[0.04]"
          : "border-white/10 hover:border-white/25"
      }`}
    >
      <div className="flex items-center justify-between">
        <span
          className={`text-[11px] tracking-[0.14em] ${
            active ? "text-gold" : "text-text-muted"
          }`}
        >
          {number}
        </span>
        <div
          className={`flex h-9 w-9 items-center justify-center rounded-full border transition-colors duration-300 ${
            active ? "border-gold text-gold" : "border-white/15 text-text-muted"
          }`}
        >
          <Icon size={16} strokeWidth={1.6} />
        </div>
      </div>
      <h3
        className={`font-display text-base font-semibold transition-colors duration-300 ${
          active ? "text-text-light" : "text-text-light/85"
        }`}
      >
        {title}
      </h3>
      <p className="text-[12.5px] leading-relaxed text-text-muted line-clamp-2">
        {description}
      </p>
    </button>
  );
}
