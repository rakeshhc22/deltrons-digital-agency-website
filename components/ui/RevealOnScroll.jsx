"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Reusable scroll-reveal wrapper used across the site for a single,
 * consistent premium animation language: opacity 0 -> 1, translateY 24px -> 0,
 * scale 0.985 -> 1, on a slow ease-out curve. See `.reveal` in globals.css.
 *
 * Usage:
 *   <RevealOnScroll><h2>Heading</h2></RevealOnScroll>
 *   <RevealOnScroll delay={120} as="li">Item</RevealOnScroll>
 *
 * Respects prefers-reduced-motion globally (see globals.css media query),
 * which collapses the transition duration to ~0 for users who need it.
 */
export default function RevealOnScroll({
  children,
  as: Tag = "div",
  className = "",
  delay = 0,
  once = true,
  threshold = 0.15,
}) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return undefined;

    // If IntersectionObserver isn't available for some reason, just show it.
    if (typeof IntersectionObserver === "undefined") {
      setVisible(true);
      return undefined;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            if (once) observer.unobserve(node);
          } else if (!once) {
            setVisible(false);
          }
        });
      },
      { threshold, rootMargin: "0px 0px -60px 0px" }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [once, threshold]);

  return (
    <Tag
      ref={ref}
      className={`reveal ${visible ? "is-visible" : ""} ${className}`}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
    >
      {children}
    </Tag>
  );
}
