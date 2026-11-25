import Link from "next/link";
import { Instagram, Linkedin, Dribbble } from "lucide-react";
import Container from "./Container";

const NAV = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Capabilities", href: "/capabilities" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

const SERVICES = [
  "Websites",
  "Apps",
  "Web Applications",
  "UI/UX",
  "Branding",
  "eCommerce",
  "Creative Design",
  "Digital Marketing",
];

const SOCIALS = [
  { label: "Instagram", href: "#", Icon: Instagram },
  { label: "LinkedIn", href: "#", Icon: Linkedin },
  { label: "Behance", href: "#", Icon: Dribbble },
  { label: "Dribbble", href: "#", Icon: Dribbble },
];

export default function Footer() {
  return (
    <footer className="relative border-t border-white/10 bg-ink-soft">
      <Container className="grid gap-14 py-20 md:grid-cols-[1.4fr_1fr_1fr]">
        <div className="flex flex-col gap-5">
          <span className="font-display text-xl font-semibold tracking-[0.06em] text-text-light">
            DELTRONS
          </span>
          <p className="max-w-[38ch] text-[14px] leading-relaxed text-text-muted">
            Premium digital experiences built for ambitious businesses.
          </p>
          <div className="flex gap-3 pt-1">
            {SOCIALS.map(({ label, href, Icon }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 text-text-muted transition-colors duration-300 hover:border-gold hover:text-gold"
              >
                <Icon size={15} strokeWidth={1.6} />
              </a>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <span className="text-[12px] font-medium tracking-[0.14em] uppercase text-text-muted">
            Navigation
          </span>
          <ul className="flex flex-col gap-3">
            {NAV.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-[14px] text-text-light/80 transition-colors duration-300 hover:text-gold"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-col gap-4">
          <span className="text-[12px] font-medium tracking-[0.14em] uppercase text-text-muted">
            Services
          </span>
          <ul className="flex flex-col gap-3">
            {SERVICES.map((item) => (
              <li key={item} className="text-[14px] text-text-light/80">
                {item}
              </li>
            ))}
          </ul>
        </div>
      </Container>

      <div className="border-t border-white/10">
        <Container className="flex flex-col items-center justify-between gap-3 py-6 text-[12.5px] text-text-muted md:flex-row">
          <span>© 2026 Deltrons. All rights reserved.</span>
          <div className="flex gap-6">
            <span className="cursor-default hover:text-gold">Privacy Policy</span>
            <span className="cursor-default hover:text-gold">Terms of Service</span>
          </div>
        </Container>
      </div>
    </footer>
  );
}
