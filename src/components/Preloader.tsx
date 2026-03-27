"use client";

import { useState, useEffect } from "react";
import { m, AnimatePresence } from "framer-motion";
import Logo from "./Logo";

export default function Preloader() {
  // Start as false if reduced motion, true otherwise (lazy init)
  const [loading, setLoading] = useState(() => {
    if (typeof window === "undefined") return true;
    return !window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  });

  useEffect(() => {
    if (!loading) return; // Already skipped via reduced motion
    const timer = setTimeout(() => setLoading(false), 1200);
    return () => clearTimeout(timer);
  }, [loading]);

  return (
    <AnimatePresence>
      {loading && (
        <m.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="fixed inset-0 z-[100000] flex items-center justify-center bg-bg"
          aria-hidden="true"
        >
          <m.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          >
            <Logo className="h-10" />
          </m.div>
        </m.div>
      )}
    </AnimatePresence>
  );
}
