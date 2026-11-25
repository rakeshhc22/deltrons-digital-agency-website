import Link from "next/link";
import { ArrowRight } from "lucide-react";

const variants = {
  primary:
    "bg-gold text-ink hover:bg-gold-soft border border-gold hover:border-gold-soft",
  secondary:
    "bg-transparent text-text-light border border-white/25 hover:border-gold hover:text-gold",
  dark: "bg-ink text-text-light border border-ink hover:border-gold hover:text-gold",
};

export default function Button({
  href,
  children,
  variant = "primary",
  showArrow = true,
  className = "",
  onClick,
  type = "button",
}) {
  const classes = `group inline-flex items-center gap-2.5 px-7 py-3.5 text-[13px] font-medium tracking-[0.08em] uppercase transition-colors duration-300 ${variants[variant]} ${className}`;

  const content = (
    <>
      <span>{children}</span>
      {showArrow && (
        <ArrowRight
          size={15}
          className="transition-transform duration-300 group-hover:translate-x-1"
        />
      )}
    </>
  );

  if (href) {
    return (
      <Link href={href} className={classes}>
        {content}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={classes}>
      {content}
    </button>
  );
}
