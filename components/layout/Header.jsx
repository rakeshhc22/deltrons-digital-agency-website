"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu } from "lucide-react";
import Container from "./Container";
import MobileMenu from "./MobileMenu";

const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "About Us", href: "/about" },
  { label: "Capabilities", href: "/capabilities" },
  { label: "Contact", href: "/contact" },
];

export default function Header() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  return (
    <header
      className={`sticky top-0 z-50 border-b transition-colors duration-300 ${
        scrolled
          ? "border-white/10 bg-ink/90 backdrop-blur-md"
          : "border-transparent bg-ink"
      }`}
    >
      <Container className="flex h-[76px] items-center justify-between">
        <Link
          href="/"
          className="font-display text-xl font-semibold tracking-[0.06em] text-text-light"
        >
          DELTRONS
        </Link>

        <nav className="hidden items-center gap-9 lg:flex" aria-label="Primary">
          {NAV_LINKS.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`relative py-1.5 text-[12.5px] font-medium tracking-[0.1em] uppercase transition-colors duration-300 ${
                  active ? "text-text-light" : "text-text-muted hover:text-text-light"
                }`}
              >
                {link.label}
                {active && (
                  <span className="absolute -bottom-[2px] left-0 h-[1.5px] w-full bg-gold" />
                )}
              </Link>
            );
          })}
        </nav>

        <div className="hidden lg:block">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 border border-gold px-5 py-2.5 text-[12px] font-medium tracking-[0.1em] uppercase text-gold transition-colors duration-300 hover:bg-gold hover:text-ink"
          >
            Let&rsquo;s Talk →
          </Link>
        </div>

        <button
          type="button"
          onClick={() => setMenuOpen(true)}
          aria-label="Open menu"
          aria-expanded={menuOpen}
          className="flex h-10 w-10 items-center justify-center text-text-light lg:hidden"
        >
          <Menu size={22} strokeWidth={1.6} />
        </button>
      </Container>

      <MobileMenu
        open={menuOpen}
        onClose={() => setMenuOpen(false)}
        links={NAV_LINKS}
        pathname={pathname}
      />
    </header>
  );
}
