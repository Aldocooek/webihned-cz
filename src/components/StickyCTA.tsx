"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";

export default function StickyCTA() {
  const [visible, setVisible] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  const handleScroll = useCallback(() => {
    if (dismissed) return;
    const scrollY = window.scrollY;
    const docHeight =
      document.documentElement.scrollHeight - window.innerHeight;
    const threshold = docHeight * 0.3;
    setVisible(scrollY >= threshold);
  }, [dismissed]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  const dismiss = useCallback(() => {
    setDismissed(true);
    setVisible(false);
  }, []);

  return (
    <div
      role="complementary"
      aria-label="Výzva k akci"
      aria-hidden={!visible}
      className={[
        "fixed bottom-0 left-0 right-0 z-40",
        "bg-surface border-t border-border/40",
        "shadow-[0_-4px_20px_-4px_rgba(0,0,0,0.1)]",
        "dark:shadow-[0_-4px_20px_-4px_rgba(0,0,0,0.35)]",
        "transition-transform duration-500",
        "will-change-transform",
        visible && !dismissed ? "translate-y-0" : "translate-y-full",
      ]
        .filter(Boolean)
        .join(" ")}
      style={{ transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)" }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-4 flex items-center justify-between gap-4">
        {/* Text — hidden on mobile, shown on sm+ */}
        <p className="hidden sm:block text-sm tracking-[-0.01em] text-text-secondary font-medium">
          Začněte tvořit aplikace s AI
        </p>

        <div className="flex items-center gap-3 flex-1 sm:flex-none justify-between sm:justify-end">
          <Link
            href="/pricing"
            tabIndex={visible && !dismissed ? 0 : -1}
            className="btn-primary bg-accent text-white text-sm font-medium px-6 py-2.5 rounded-full tracking-[-0.01em] whitespace-nowrap"
          >
            Začít zdarma
          </Link>

          <button
            onClick={dismiss}
            tabIndex={visible && !dismissed ? 0 : -1}
            aria-label="Zavřít"
            className="w-8 h-8 rounded-full border border-border flex items-center justify-center text-text-secondary hover:text-text hover:border-text/40 transition-colors duration-300 flex-shrink-0"
          >
            <svg
              width="14"
              height="14"
              viewBox="0 0 14 14"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              aria-hidden="true"
            >
              <path d="M2 2l10 10M12 2L2 12" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
