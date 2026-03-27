"use client";

import { useState, useEffect, useCallback, useSyncExternalStore } from "react";

function subscribeMotion(callback: () => void) {
  const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
  mq.addEventListener("change", callback);
  return () => mq.removeEventListener("change", callback);
}

function getMotionSnapshot() {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

function getMotionServerSnapshot() {
  return false;
}

export default function BackToTop() {
  const [visible, setVisible] = useState(false);
  const reducedMotion = useSyncExternalStore(subscribeMotion, getMotionSnapshot, getMotionServerSnapshot);

  const handleScroll = useCallback(() => {
    setVisible(window.scrollY > 500);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  const scrollToTop = useCallback(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  if (reducedMotion) {
    return visible ? (
      <button
        onClick={scrollToTop}
        aria-label="Zpět nahoru"
        className={[
          "fixed bottom-6 right-6 z-35",
          "w-9 h-9 sm:w-10 sm:h-10 rounded-full",
          "bg-surface border border-border shadow-md",
          "flex items-center justify-center",
          "text-text-secondary hover:bg-accent hover:text-white",
          "transition-colors duration-300",
          "cursor-pointer",
        ]
          .filter(Boolean)
          .join(" ")}
      >
        <ArrowUpIcon />
      </button>
    ) : null;
  }

  return (
    <button
      onClick={scrollToTop}
      aria-label="Zpět nahoru"
      aria-hidden={!visible}
      tabIndex={visible ? 0 : -1}
      className={[
        "fixed bottom-6 right-6 z-35",
        "w-9 h-9 sm:w-10 sm:h-10 rounded-full",
        "bg-surface border border-border shadow-md",
        "flex items-center justify-center",
        "text-text-secondary hover:bg-accent hover:text-white",
        "transition-all duration-300",
        "cursor-pointer",
        visible
          ? "opacity-100 scale-100 pointer-events-auto"
          : "opacity-0 scale-75 pointer-events-none",
      ]
        .filter(Boolean)
        .join(" ")}
      style={{ transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)" }}
    >
      <ArrowUpIcon />
    </button>
  );
}

function ArrowUpIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M8 12V4M4 8l4-4 4 4" />
    </svg>
  );
}
