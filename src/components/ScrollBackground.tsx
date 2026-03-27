"use client";

import { useScroll, useTransform, m } from "framer-motion";

// Overlay layers: one warm (accent-tinted), one cool (indigo-tinted).
// We animate their opacity based on scroll progress instead of trying to
// interpolate CSS color-mix() strings — Framer can't parse those.
export default function ScrollBackground({ children }: { children: React.ReactNode }) {
  const { scrollYProgress } = useScroll();

  // Warm overlay (accent red) — peaks at 20% and 80% scroll
  const warmOpacity = useTransform(
    scrollYProgress,
    [0, 0.1, 0.25, 0.5, 0.7, 0.85, 1],
    [0,   0.04, 0,   0,   0.06, 0.03, 0]
  );

  // Cool overlay (indigo) — peaks at 60% scroll
  const coolOpacity = useTransform(
    scrollYProgress,
    [0, 0.4, 0.55, 0.7, 1],
    [0, 0,   0.04, 0,   0]
  );

  return (
    <m.main
      id="main-content"
      // relative so the absolute overlay divs stay contained
      style={{ position: "relative" }}
    >
      {/* Warm overlay */}
      <m.div
        aria-hidden="true"
        data-scroll-overlay="warm"
        style={{
          opacity: warmOpacity,
          position: "fixed",
          inset: 0,
          background: "var(--color-accent)",
          pointerEvents: "none",
          zIndex: 0,
        }}
      />

      {/* Cool overlay */}
      <m.div
        aria-hidden="true"
        data-scroll-overlay="cool"
        style={{
          opacity: coolOpacity,
          position: "fixed",
          inset: 0,
          background: "#6366f1",
          pointerEvents: "none",
          zIndex: 0,
        }}
      />

      {/* Page content sits above overlays */}
      <div style={{ position: "relative", zIndex: 1 }}>
        {children}
      </div>
    </m.main>
  );
}
