"use client";

import { useEffect } from "react";
import Link from "next/link";
import { X } from "lucide-react";

export default function MobileMenu({ open, onClose, links, pathname }) {
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[60] lg:hidden">
      <button
        type="button"
        aria-label="Close menu"
        onClick={onClose}
        className="absolute inset-0 bg-ink/80 backdrop-blur-sm animate-fade-up"
        style={{ animationDuration: "0.3s" }}
      />
      <div className="absolute inset-x-0 top-0 flex flex-col bg-ink-soft border-b border-white/10 animate-menu-in">
        <div className="flex h-[76px] items-center justify-between px-6">
          <span className="font-display text-xl font-semibold tracking-[0.06em] text-text-light">
            DELTRONS
          </span>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close menu"
            className="flex h-10 w-10 items-center justify-center text-text-light"
          >
            <X size={22} strokeWidth={1.6} />
          </button>
        </div>

        <nav className="flex flex-col px-6 pb-10 pt-4" aria-label="Mobile primary">
          {links.map((link, i) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={onClose}
                style={{ animationDelay: `${80 + i * 60}ms` }}
                className={`animate-fade-up border-b border-white/5 py-4 text-lg font-medium tracking-wide ${
                  active ? "text-gold" : "text-text-light"
                }`}
              >
                {link.label}
              </Link>
            );
          })}

          <Link
            href="/contact"
            onClick={onClose}
            style={{ animationDelay: `${80 + links.length * 60}ms` }}
            className="animate-fade-up mt-7 inline-flex w-fit items-center gap-2 border border-gold px-6 py-3 text-[12px] font-medium tracking-[0.1em] uppercase text-gold"
          >
            Let&rsquo;s Talk →
          </Link>
        </nav>
      </div>
    </div>
  );
}
