"use client";

import { useScroll, useTransform, m, useReducedMotion } from "framer-motion";

export default function ScrollRing() {
  const shouldReduce = useReducedMotion();
  const { scrollYProgress } = useScroll();

  const circumference = 2 * Math.PI * 16; // radius = 16
  const strokeDashoffset = useTransform(
    scrollYProgress,
    [0, 1],
    [circumference, 0]
  );

  if (shouldReduce) return null;

  return (
    <m.div
      className="fixed bottom-6 left-6 z-40 w-10 h-10"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 2 }}
      aria-hidden="true"
    >
      <svg viewBox="0 0 36 36" className="w-full h-full -rotate-90">
        {/* Background circle */}
        <circle
          cx="18"
          cy="18"
          r="16"
          fill="none"
          stroke="var(--color-border)"
          strokeWidth="2"
        />
        {/* Progress circle */}
        <m.circle
          cx="18"
          cy="18"
          r="16"
          fill="none"
          stroke="var(--color-accent)"
          strokeWidth="2"
          strokeLinecap="round"
          style={{
            strokeDasharray: circumference,
            strokeDashoffset,
          }}
        />
      </svg>
    </m.div>
  );
}
