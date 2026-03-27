"use client";

import { useEffect, useState, useRef } from "react";
import { m, useSpring, AnimatePresence } from "framer-motion";

export default function CustomCursor() {
  const [visible, setVisible] = useState(false);
  const [hovered, setHovered] = useState(false);
  const [cursorText, setCursorText] = useState("");
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

      // Check for cursor text label first
      const cursorTextEl = target.closest("[data-cursor-text]");
      if (cursorTextEl) {
        setCursorText(cursorTextEl.getAttribute("data-cursor-text") ?? "");
        setHovered(false);
        return;
      }

      setCursorText("");

      // Then check for interactive elements
      const interactive = target.closest(
        "a, button, [role='button'], input, textarea, select, [data-cursor='pointer']"
      );
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

  // Determine cursor mode
  const isTextMode = cursorText.length > 0;
  const isHoverMode = !isTextMode && hovered;

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
            width: isTextMode ? "auto" : isHoverMode ? 48 : 12,
            height: isTextMode ? 40 : isHoverMode ? 48 : 12,
            borderRadius: isTextMode ? 20 : "50%",
            minWidth: isTextMode ? 80 : 0,
          }}
          transition={{ type: "spring", stiffness: 400, damping: 25 }}
          className="bg-white -translate-x-1/2 -translate-y-1/2 flex items-center justify-center overflow-hidden"
          style={{ opacity: 0.9 }}
        >
          <AnimatePresence mode="wait">
            {isTextMode && (
              <m.span
                key="cursor-text"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.15 }}
                style={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontSize: 11,
                  fontWeight: 500,
                  letterSpacing: "0.05em",
                  color: "#000",
                  whiteSpace: "nowrap",
                  mixBlendMode: "normal",
                  paddingLeft: 12,
                  paddingRight: 12,
                  userSelect: "none",
                }}
              >
                {cursorText}
              </m.span>
            )}
          </AnimatePresence>
        </m.div>
      </m.div>
    </>
  );
}
