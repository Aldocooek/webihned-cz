"use client";

import { useState, useRef, useSyncExternalStore } from "react";
import { m, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion";
import Link from "next/link";
import ScrollReveal from "./ScrollReveal";

// Gradient stops defined as [lightFrom, lightVia, lightTo, darkFrom, darkVia, darkTo]
// Using explicit color values so they work in both light and dark mode regardless
// of Tailwind's dark: prefix class-based detection.
const gradientStyles: Record<string, string> = {
  "01": "linear-gradient(135deg, #ffe4e6 0%, #fdf2f8 50%, #fee2e2 100%)",
  "02": "linear-gradient(135deg, #d1fae5 0%, #f0fdf4 50%, #cffafe 100%)",
  "03": "linear-gradient(135deg, #fef3c7 0%, #fff7ed 50%, #ffe4e6 100%)",
  "04": "linear-gradient(135deg, #ede9fe 0%, #faf5ff 50%, #e0e7ff 100%)",
};

const gradientStylesDark: Record<string, string> = {
  "01": "linear-gradient(135deg, rgba(190,18,57,0.35) 0%, rgba(150,24,67,0.22) 50%, rgba(185,28,28,0.30) 100%)",
  "02": "linear-gradient(135deg, rgba(6,120,70,0.35) 0%, rgba(19,100,90,0.22) 50%, rgba(21,110,130,0.30) 100%)",
  "03": "linear-gradient(135deg, rgba(180,70,9,0.35) 0%, rgba(175,55,18,0.22) 50%, rgba(190,18,57,0.30) 100%)",
  "04": "linear-gradient(135deg, rgba(120,50,230,0.35) 0%, rgba(140,40,215,0.22) 50%, rgba(79,70,229,0.30) 100%)",
};

const features = [
  {
    step: "01",
    title: "Tvořte rychlostí myšlení",
    description:
      "Popište svůj nápad a sledujte, jak se promění ve funkční aplikaci. Stránky, uživatelské toky i integrace — vše je připravené od začátku.",
  },
  {
    step: "02",
    title: "Backend, který roste s vámi",
    description:
      "Zatímco tvoříte, webihned.cz automaticky nastaví logiku a infrastrukturu. Přihlášení uživatelů, autentizace, databáze i role — vše funguje hned.",
  },
  {
    step: "03",
    title: "Připraveno k použití, okamžitě",
    description:
      "Platforma zahrnuje hosting, analytiku a vlastní doménu. Když je vaše aplikace hotová, stačí kliknout na publikovat.",
  },
  {
    step: "04",
    title: "Jedna platforma. Jakýkoli AI model.",
    description:
      "Získejte přístup k nejnovějším AI modelům. webihned.cz automaticky vybere nejlepší model pro váš projekt, nebo si zvolte sami.",
  },
];

function subscribeDark(callback: () => void) {
  const observer = new MutationObserver(callback);
  observer.observe(document.documentElement, { attributes: true, attributeFilter: ["class"] });
  return () => observer.disconnect();
}

function getDarkSnapshot() {
  return document.documentElement.classList.contains("dark");
}

function getDarkServerSnapshot() {
  return false;
}

function useIsDark() {
  return useSyncExternalStore(subscribeDark, getDarkSnapshot, getDarkServerSnapshot);
}

function useReducedMotion() {
  return useSyncExternalStore(
    (cb) => {
      const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
      mq.addEventListener("change", cb);
      return () => mq.removeEventListener("change", cb);
    },
    () => window.matchMedia("(prefers-reduced-motion: reduce)").matches,
    () => false,
  );
}

export default function FeaturesCarousel() {
  const [active, setActive] = useState(0);
  const isDark = useIsDark();
  const shouldReduce = useReducedMotion();

  const featuresRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: featuresRef,
    offset: ["start center", "end center"],
  });

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    if (shouldReduce) return;
    const newIndex = Math.min(3, Math.floor(latest * 4));
    if (newIndex !== active) setActive(newIndex);
  });

  return (
    <section ref={featuresRef} className="min-h-[200vh] py-16 md:py-24">
      <div className="sticky top-0 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <ScrollReveal>
            <h2 className="text-3xl sm:text-4xl md:text-[56px] font-bold text-center leading-[1.08] tracking-[-0.035em] mb-14">
              Žádné{" "}
              <span className="font-[var(--font-serif)] italic font-normal">
                limity
              </span>
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={150}>
            <div className="max-w-5xl mx-auto">
              <AnimatePresence mode="wait">
                <m.div
                  key={active}
                  initial={{ opacity: 0, x: 30, rotateY: -3 }}
                  animate={{ opacity: 1, x: 0, rotateY: 0 }}
                  exit={{ opacity: 0, x: -30, rotateY: 3 }}
                  transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                  style={{ perspective: "1000px" }}
                  className="flex flex-col md:flex-row gap-10 md:gap-16 items-stretch"
                >
                  <div className="flex-1 flex flex-col justify-center py-6">
                    <div className="text-sm text-text-secondary mb-8 tracking-wide uppercase">
                      <span className="text-text font-semibold">
                        {features[active].step}
                      </span>
                      <span className="mx-2 text-border">/</span>
                      <span>04</span>
                    </div>
                    <h3 className="text-2xl md:text-[32px] font-bold mb-5 leading-[1.15] tracking-[-0.02em]">
                      {features[active].title}
                    </h3>
                    <p className="text-text-secondary text-base leading-[1.7] mb-10 tracking-[-0.01em]">
                      {features[active].description}
                    </p>
                    <Link
                      href="/pricing"
                      className="link-arrow inline-flex items-center gap-2.5 text-text font-medium text-sm hover:text-accent transition-colors duration-300 tracking-[-0.01em]"
                    >
                      Začít tvořit
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <path d="M5 12h14" />
                        <path d="m12 5 7 7-7 7" />
                      </svg>
                    </Link>
                  </div>

                  <div className="flex-1">
                    <div
                      className="group relative w-full aspect-[420/544] rounded-3xl flex items-center justify-center border border-border/20 dark:border-border/60 shadow-sm overflow-hidden"
                      style={{
                        background: isDark
                          ? gradientStylesDark[features[active].step]
                          : gradientStyles[features[active].step],
                      }}
                      onMouseMove={(e) => {
                        const rect = e.currentTarget.getBoundingClientRect();
                        e.currentTarget.style.setProperty('--mouse-x', `${e.clientX - rect.left}px`);
                        e.currentTarget.style.setProperty('--mouse-y', `${e.clientY - rect.top}px`);
                      }}
                    >
                      {/* Cursor-following glow overlay */}
                      <div
                        className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                        style={{ background: `radial-gradient(circle at var(--mouse-x, 50%) var(--mouse-y, 50%), var(--color-accent-light), transparent 60%)` }}
                      />
                      <div className="relative text-center px-8">
                        <div className="w-20 h-20 rounded-2xl bg-surface/80 shadow-sm mx-auto mb-5 flex items-center justify-center backdrop-blur-sm">
                          <span className="text-3xl font-bold text-accent">
                            {features[active].step}
                          </span>
                        </div>
                        <p className="text-sm text-text-secondary font-medium tracking-[-0.01em]">
                          {features[active].title}
                        </p>
                      </div>
                    </div>
                  </div>
                </m.div>
              </AnimatePresence>

              {/* Click tabs — always available as fallback */}
              <div className="flex gap-2 sm:gap-3 mt-10 justify-center">
                {features.map((f, i) => (
                  <button
                    key={i}
                    onClick={() => setActive(i)}
                    aria-label={`Krok ${f.step}: ${f.title}`}
                    aria-pressed={i === active}
                    className={`w-16 sm:w-28 h-12 sm:h-16 rounded-xl transition-all duration-400 flex items-center justify-center text-xs font-medium tracking-wide ${
                      i === active
                        ? "bg-surface shadow-[0_4px_20px_-4px_rgba(0,0,0,0.1)] dark:shadow-[0_4px_20px_-4px_rgba(0,0,0,0.5)] border border-border/40 dark:border-border/80 text-text scale-105"
                        : "bg-surface/40 dark:bg-surface/80 border border-border/20 dark:border-border/60 text-text-secondary hover:bg-surface/70 dark:hover:bg-surface hover:scale-[1.02]"
                    }`}
                    style={{
                      transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
                    }}
                  >
                    <span className="font-bold mr-1">{f.step}</span>/04
                  </button>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
