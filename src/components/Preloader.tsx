"use client";

import { useState, useEffect, useRef } from "react";
import { m, AnimatePresence, useReducedMotion } from "framer-motion";

export default function Preloader() {
  const shouldReduce = useReducedMotion();
  const [loading, setLoading] = useState(() => {
    if (typeof window === "undefined") return false;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return false;
    // Only show on first session visit
    try {
      if (sessionStorage.getItem("webihned_visited")) return false;
    } catch {}
    return true;
  });

  const [count, setCount] = useState(0);
  const rafRef = useRef<number | null>(null);
  const startRef = useRef<number | null>(null);
  const DURATION = 1300; // ms

  useEffect(() => {
    if (!loading) return;

    // Mark as visited
    try {
      sessionStorage.setItem("webihned_visited", "1");
    } catch {}

    // Animate counter 0→100 with easeOutExpo
    function easeOutExpo(t: number) {
      return t === 1 ? 1 : 1 - Math.pow(2, -10 * t);
    }

    function tick(timestamp: number) {
      if (!startRef.current) startRef.current = timestamp;
      const elapsed = timestamp - startRef.current;
      const progress = Math.min(elapsed / DURATION, 1);
      const value = Math.round(easeOutExpo(progress) * 100);
      setCount(value);

      if (progress < 1) {
        rafRef.current = requestAnimationFrame(tick);
      } else {
        // Small delay after reaching 100 before hiding
        setTimeout(() => setLoading(false), 120);
      }
    }

    rafRef.current = requestAnimationFrame(tick);

    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [loading]);

  if (shouldReduce) return null;

  return (
    <AnimatePresence>
      {loading && (
        <m.div
          initial={{ clipPath: "inset(0 0 0% 0)" }}
          exit={{ clipPath: "inset(0 0 100% 0)" }}
          transition={{ duration: 0.65, ease: [0.76, 0, 0.24, 1] }}
          className="fixed inset-0 z-[100000] flex items-end justify-start bg-bg overflow-hidden"
          aria-hidden="true"
          aria-label="Načítám"
        >
          {/* Counter */}
          <div className="p-8 sm:p-12">
            <span
              className="font-[var(--font-space)] text-[clamp(4rem,12vw,9rem)] font-bold leading-none tracking-[-0.05em] text-text tabular-nums select-none"
              style={{ fontVariantNumeric: "tabular-nums" }}
            >
              {count}
            </span>
          </div>

          {/* Progress line at bottom */}
          <m.div
            className="absolute bottom-0 left-0 h-[2px] bg-accent"
            style={{ width: `${count}%` }}
            transition={{ ease: "linear" }}
          />

          {/* Brand label top-right */}
          <div className="absolute top-8 right-8 sm:top-12 sm:right-12">
            <span className="text-xs font-medium tracking-[0.15em] uppercase text-text-secondary/60 select-none">
              webihned.cz
            </span>
          </div>
        </m.div>
      )}
    </AnimatePresence>
  );
}
