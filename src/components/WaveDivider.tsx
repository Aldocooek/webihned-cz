"use client";
import { useEffect, useRef } from "react";
import { useReducedMotion } from "framer-motion";

interface WaveDividerProps {
  flip?: boolean;
  className?: string;
}

export default function WaveDivider({ flip = false, className = "" }: WaveDividerProps) {
  const prefersReduced = useReducedMotion();
  const pathRef = useRef<SVGPathElement>(null);
  const path2Ref = useRef<SVGPathElement>(null);

  useEffect(() => {
    if (prefersReduced) return;

    let t = 0;
    let rafId: number;

    function tick() {
      t += 0.008;

      if (pathRef.current) {
        const c1y = 40 + Math.sin(t) * 8;
        const c2y = 40 + Math.sin(t + Math.PI) * 8;
        const c3y = 40 + Math.sin(t + Math.PI * 0.5) * 6;
        pathRef.current.setAttribute(
          "d",
          `M0,${c1y} C360,${c2y} 720,${c3y} 1080,${c1y} C1260,${c2y} 1440,${c3y} 1440,40 L1440,80 L0,80 Z`
        );
      }

      if (path2Ref.current) {
        // Phase-offset second wave for overlap effect
        const c1y = 40 + Math.sin(t + Math.PI * 0.3) * 6;
        const c2y = 40 + Math.sin(t + Math.PI * 1.3) * 6;
        const c3y = 40 + Math.sin(t + Math.PI * 0.8) * 4;
        path2Ref.current.setAttribute(
          "d",
          `M0,${c1y} C360,${c2y} 720,${c3y} 1080,${c1y} C1260,${c2y} 1440,${c3y} 1440,40 L1440,80 L0,80 Z`
        );
      }

      rafId = requestAnimationFrame(tick);
    }

    rafId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafId);
  }, [prefersReduced]);

  // Static fallback paths for reduced motion
  const staticD1 = "M0,40 C360,48 720,34 1080,40 C1260,46 1440,38 1440,40 L1440,80 L0,80 Z";
  const staticD2 = "M0,44 C360,36 720,50 1080,44 C1260,38 1440,48 1440,44 L1440,80 L0,80 Z";

  return (
    <svg
      viewBox="0 0 1440 80"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="none"
      aria-hidden="true"
      className={[
        "w-full block",
        flip ? "rotate-180" : "",
        className,
      ].join(" ")}
      style={{ height: "80px" }}
    >
      {/* Second wave — slightly behind */}
      <path
        ref={path2Ref}
        d={staticD2}
        fill="var(--color-border)"
        fillOpacity="0.25"
      />
      {/* Primary wave — front */}
      <path
        ref={pathRef}
        d={staticD1}
        fill="var(--color-border)"
        fillOpacity="0.4"
      />
    </svg>
  );
}
