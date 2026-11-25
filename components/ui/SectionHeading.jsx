export default function SectionHeading({
  eyebrow,
  heading,
  goldWord,
  description,
  align = "left",
  dark = false,
  className = "",
}) {
  const alignClass = align === "center" ? "text-center items-center mx-auto" : "text-left";
  const muted = dark ? "text-text-muted" : "text-ink/60";
  const headingColor = dark ? "text-text-light" : "text-ink";

  return (
    <div className={`flex flex-col gap-5 ${alignClass} ${className}`}>
      {eyebrow && (
        <span className="text-[12px] tracking-[0.18em] uppercase text-gold font-medium">
          {eyebrow}
        </span>
      )}
      <h2
        className={`font-display font-semibold text-[clamp(2rem,4.2vw,3.4rem)] leading-[1.08] ${headingColor}`}
      >
        {heading}
        {goldWord && (
          <span className="italic text-gold"> {goldWord}</span>
        )}
      </h2>
      {description && (
        <p className={`max-w-[52ch] text-[15px] md:text-base leading-relaxed ${muted}`}>
          {description}
        </p>
      )}
    </div>
  );
}
