"use client";

import { useState, useEffect } from "react";

const STORAGE_KEY = "cookie-consent";

export default function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (!stored) {
        // Small delay so it doesn't compete with page load animations
        const timer = setTimeout(() => setVisible(true), 800);
        return () => clearTimeout(timer);
      }
    } catch {
      // localStorage not available — silently skip
    }
  }, []);

  const accept = (value: "all" | "necessary") => {
    try {
      localStorage.setItem(STORAGE_KEY, value);
    } catch {
      // ignore
    }
    setVisible(false);
  };

  return (
    <div
      role="dialog"
      aria-modal="false"
      aria-label="Souhlas s cookies"
      aria-hidden={!visible}
      className={[
        "fixed bottom-0 left-0 right-0 z-30",
        "bg-surface border-t border-border/40",
        "shadow-[0_-4px_24px_-4px_rgba(0,0,0,0.1)]",
        "dark:shadow-[0_-4px_24px_-4px_rgba(0,0,0,0.4)]",
        "rounded-t-2xl sm:rounded-t-none",
        "transition-transform duration-500",
        "will-change-transform",
        visible ? "translate-y-0" : "translate-y-full",
      ]
        .filter(Boolean)
        .join(" ")}
      style={{ transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)" }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-5 flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-8">
        {/* Text */}
        <p className="text-sm tracking-[-0.01em] text-text-secondary leading-relaxed flex-1">
          Používáme cookies pro zlepšení vašeho zážitku. Více informací v
          našich{" "}
          <a
            href="#"
            tabIndex={visible ? 0 : -1}
            className="text-text underline underline-offset-2 hover:text-accent transition-colors duration-200"
          >
            zásadách ochrany soukromí
          </a>
          .
        </p>

        {/* Actions */}
        <div className="flex items-center gap-3 flex-shrink-0">
          <button
            onClick={() => accept("necessary")}
            tabIndex={visible ? 0 : -1}
            className="btn-secondary text-sm font-medium px-5 py-2.5 rounded-full border border-border text-text tracking-[-0.01em] whitespace-nowrap"
          >
            Pouze nezbytné
          </button>

          <button
            onClick={() => accept("all")}
            tabIndex={visible ? 0 : -1}
            className="btn-primary bg-accent text-white text-sm font-medium px-5 py-2.5 rounded-full tracking-[-0.01em] whitespace-nowrap"
          >
            Přijmout vše
          </button>
        </div>
      </div>
    </div>
  );
}
