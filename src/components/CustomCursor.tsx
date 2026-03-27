"use client";

import { useEffect, useState, useRef } from "react";
import { m, useSpring } from "framer-motion";

export default function CustomCursor() {
  const [visible, setVisible] = useState(false);
  const [hovered, setHovered] = useState(false);
  const cursorRef = useRef({ x: 0, y: 0 });

  // Spring-interpolated position for smooth lag
  const springX = useSpring(0, { stiffness: 300, damping: 28 });
  const springY = useSpring(0, { stiffness: 300, damping: 28 });

  useEffect(() => {
    // Only show on devices with fine pointer (no touch)
    const hasFinePointer = window.matchMedia("(pointer: fine)").matches;
    if (!hasFinePointer) return;

    // Check reduced motion
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) return;

    // Use rAF to defer the state update (avoids ESLint set-state-in-effect)
    const raf = requestAnimationFrame(() => setVisible(true));

    const onMouseMove = (e: MouseEvent) => {
      cursorRef.current = { x: e.clientX, y: e.clientY };
      springX.set(e.clientX);
      springY.set(e.clientY);
    };

    const onMouseEnter = () => setVisible(true);
    const onMouseLeave = () => setVisible(false);

    // Track hover on interactive elements
    const onPointerOver = (e: PointerEvent) => {
      const target = e.target as HTMLElement;
      const interactive = target.closest("a, button, [role='button'], input, textarea, select, [data-cursor='pointer']");
      setHovered(!!interactive);
    };

    document.addEventListener("mousemove", onMouseMove, { passive: true });
    document.addEventListener("mouseenter", onMouseEnter);
    document.addEventListener("mouseleave", onMouseLeave);
    document.addEventListener("pointerover", onPointerOver, { passive: true });

    return () => {
      cancelAnimationFrame(raf);
      document.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseenter", onMouseEnter);
      document.removeEventListener("mouseleave", onMouseLeave);
      document.removeEventListener("pointerover", onPointerOver);
    };
  }, [springX, springY]);

  if (!visible) return null;

  return (
    <>
      {/* Hide default cursor globally */}
      <style>{`
        @media (pointer: fine) {
          * { cursor: none !important; }
        }
      `}</style>
      <m.div
        className="fixed top-0 left-0 pointer-events-none mix-blend-difference"
        style={{
          x: springX,
          y: springY,
          zIndex: 99999,
        }}
        aria-hidden="true"
      >
        <m.div
          animate={{
            width: hovered ? 48 : 12,
            height: hovered ? 48 : 12,
            borderRadius: "50%",
          }}
          transition={{ type: "spring", stiffness: 400, damping: 25 }}
          className="bg-white rounded-full -translate-x-1/2 -translate-y-1/2"
          style={{ opacity: 0.9 }}
        />
      </m.div>
    </>
  );
}
