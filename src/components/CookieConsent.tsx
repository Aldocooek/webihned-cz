"use client";

import { useState, useEffect } from "react";

const STORAGE_KEY = "cookie-consent";

interface ConsentData {
  necessary: true;
  analytics: boolean;
}

export default function CookieConsent() {
  const [visible, setVisible] = useState(false);
  const [expanded, setExpanded] = useState(false);
  const [analytics, setAnalytics] = useState(false);

  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (!stored) {
        const timer = setTimeout(() => setVisible(true), 800);
        return () => clearTimeout(timer);
      }
    } catch {
      // localStorage not available — silently skip
    }
  }, []);

  // Push page content up so the fixed banner never overlaps the footer/last section
  useEffect(() => {
    const body = document.body;
    if (visible) {
      body.style.paddingBottom = "96px";
    } else {
      body.style.paddingBottom = "";
    }
    return () => {
      body.style.paddingBottom = "";
    };
  }, [visible]);

  function saveConsent(data: ConsentData) {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
      window.dispatchEvent(new Event("consent-updated"));
    } catch {
      // ignore
    }
    setVisible(false);
    setExpanded(false);
  }

  function acceptAll() {
    saveConsent({ necessary: true, analytics: true });
  }

  function rejectAll() {
    saveConsent({ necessary: true, analytics: false });
  }

  function saveSettings() {
    saveConsent({ necessary: true, analytics });
  }

  return (
    <div
      role="dialog"
      aria-modal="true"
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
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-5">
        {/* Main row */}
        <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-8">
          {/* Text */}
          <p className="text-sm tracking-[-0.01em] text-text-secondary leading-relaxed flex-1">
            Používáme cookies pro zlepšení vašeho zážitku. Více informací v
            našich{" "}
            <a
              href="/soukromi"
              tabIndex={visible ? 0 : -1}
              className="text-text underline underline-offset-2 hover:text-accent transition-colors duration-200"
            >
              zásadách ochrany soukromí
            </a>
            .
          </p>

          {/* Actions */}
          <div className="flex items-center gap-3 flex-shrink-0 flex-wrap">
            <button
              onClick={acceptAll}
              tabIndex={visible ? 0 : -1}
              className="btn-primary bg-accent text-white text-sm font-medium px-5 py-2.5 rounded-full tracking-[-0.01em] whitespace-nowrap"
            >
              Přijmout vše
            </button>

            <button
              onClick={() => setExpanded((prev) => !prev)}
              tabIndex={visible ? 0 : -1}
              aria-expanded={expanded}
              aria-controls="cookie-settings-panel"
              className="btn-secondary text-sm font-medium px-5 py-2.5 rounded-full border border-border text-text tracking-[-0.01em] whitespace-nowrap"
            >
              Nastavení
            </button>

            <button
              onClick={rejectAll}
              tabIndex={visible ? 0 : -1}
              className="text-sm text-text-secondary hover:text-text transition-colors duration-200 tracking-[-0.01em] underline underline-offset-2"
            >
              Odmítnout vše
            </button>
          </div>
        </div>

        {/* Expandable settings panel */}
        <div
          id="cookie-settings-panel"
          className={[
            "overflow-hidden transition-all duration-400",
            expanded ? "max-h-64 mt-5 opacity-100" : "max-h-0 opacity-0",
          ]
            .filter(Boolean)
            .join(" ")}
          style={{ transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)" }}
          aria-hidden={!expanded}
        >
          <div className="border-t border-border/40 pt-5 flex flex-col gap-3.5">
            {/* Necessary — always on */}
            <label className="flex items-start gap-3 cursor-not-allowed">
              <input
                type="checkbox"
                checked
                disabled
                aria-label="Nezbytné cookies — vždy zapnuto"
                className="mt-0.5 w-4 h-4 rounded accent-accent cursor-not-allowed opacity-60"
              />
              <div>
                <span className="text-sm font-medium text-text tracking-[-0.01em]">
                  Nezbytné cookies
                </span>
                <span className="ml-2 text-xs text-text-secondary/60 tracking-[-0.01em]">
                  (vždy zapnuto)
                </span>
                <p className="text-xs text-text-secondary tracking-[-0.01em] mt-0.5">
                  Pro základní funkčnost webu
                </p>
              </div>
            </label>

            {/* Analytics */}
            <label className="flex items-start gap-3 cursor-pointer">
              <input
                type="checkbox"
                checked={analytics}
                onChange={(e) => setAnalytics(e.target.checked)}
                tabIndex={visible && expanded ? 0 : -1}
                aria-label="Analytické cookies"
                className="mt-0.5 w-4 h-4 rounded accent-accent cursor-pointer"
              />
              <div>
                <span className="text-sm font-medium text-text tracking-[-0.01em]">
                  Analytické cookies
                </span>
                <p className="text-xs text-text-secondary tracking-[-0.01em] mt-0.5">
                  Pomáhají nám zlepšovat web
                </p>
              </div>
            </label>

            <button
              onClick={saveSettings}
              tabIndex={visible && expanded ? 0 : -1}
              className="self-start btn-primary bg-accent text-white text-sm font-medium px-5 py-2.5 rounded-full tracking-[-0.01em] mt-1"
            >
              Uložit nastavení
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
