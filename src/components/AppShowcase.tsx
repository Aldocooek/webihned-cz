"use client";

import { useRef, useState, useSyncExternalStore } from "react";
import { m, useScroll, useTransform, useReducedMotion } from "framer-motion";
import ScrollReveal from "./ScrollReveal";

function subscribeDark(cb: () => void) {
  const observer = new MutationObserver(cb);
  observer.observe(document.documentElement, { attributes: true, attributeFilter: ["class"] });
  return () => observer.disconnect();
}
function getDarkSnapshot() { return document.documentElement.classList.contains("dark"); }
function getDarkServerSnapshot() { return false; }
function useIsDark() {
  return useSyncExternalStore(subscribeDark, getDarkSnapshot, getDarkServerSnapshot);
}

const apps = [
  {
    name: "Streamovací platforma",
    desc: "Video streaming s doporučováním obsahu",
    lightGradient: "linear-gradient(135deg, #fda4af 0%, #f87171 100%)",
    darkGradient: "linear-gradient(135deg, rgba(190,18,57,0.75) 0%, rgba(185,28,28,0.65) 100%)",
  },
  {
    name: "Vzdělávací portál",
    desc: "Kurzy, kvízy a sledování pokroku",
    lightGradient: "linear-gradient(135deg, #6ee7b7 0%, #2dd4bf 100%)",
    darkGradient: "linear-gradient(135deg, rgba(6,120,70,0.75) 0%, rgba(15,100,90,0.65) 100%)",
  },
  {
    name: "Finanční dashboard",
    desc: "Přehledy příjmů, výdajů a prognózy",
    lightGradient: "linear-gradient(135deg, #93c5fd 0%, #818cf8 100%)",
    darkGradient: "linear-gradient(135deg, rgba(37,99,235,0.75) 0%, rgba(79,70,229,0.65) 100%)",
  },
  {
    name: "Jídelní plánovač",
    desc: "Recepty, nákupní seznam a kalorie",
    lightGradient: "linear-gradient(135deg, #fcd34d 0%, #fb923c 100%)",
    darkGradient: "linear-gradient(135deg, rgba(180,83,9,0.75) 0%, rgba(194,65,12,0.65) 100%)",
  },
  {
    name: "Cestovní průvodce",
    desc: "Trasy, ubytování a tipy na výlety",
    lightGradient: "linear-gradient(135deg, #86efac 0%, #6ee7b7 100%)",
    darkGradient: "linear-gradient(135deg, rgba(22,101,52,0.75) 0%, rgba(6,120,70,0.65) 100%)",
  },
];

function AppCard({
  app,
  isDark,
}: {
  app: (typeof apps)[number];
  isDark: boolean;
}) {
  return (
    <m.div
      whileHover={{ scale: 1.02 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      style={{
        width: "min(80vw, 560px)",
        minWidth: "min(80vw, 560px)",
        height: "min(70vh, 600px)",
        background: isDark ? app.darkGradient : app.lightGradient,
        flexShrink: 0,
      }}
      className="rounded-3xl relative overflow-hidden group"
    >
      {/* Glassmorphism inner panel */}
      <div className="absolute inset-5 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20">
        <div className="flex gap-1.5 p-4">
          <div className="w-2.5 h-2.5 rounded-full bg-white/30" />
          <div className="w-2.5 h-2.5 rounded-full bg-white/30" />
          <div className="w-2.5 h-2.5 rounded-full bg-white/30" />
        </div>
        <div className="px-5 pt-2 space-y-2.5">
          <div className="h-3 bg-white/15 rounded-full w-3/4" />
          <div className="h-3 bg-white/15 rounded-full w-1/2" />
          <div className="h-10 bg-white/10 rounded-xl w-full mt-5" />
          <div className="h-10 bg-white/10 rounded-xl w-full" />
          <div className="h-10 bg-white/10 rounded-xl w-2/3" />
        </div>
      </div>

      {/* Hover overlay */}
      <div className="card-overlay absolute inset-0 rounded-3xl bg-black/60 backdrop-blur-sm flex flex-col justify-end p-7">
        <p className="text-white font-bold text-sm tracking-[-0.01em] mb-1">
          {app.name}
        </p>
        <p className="text-white/80 text-xs leading-relaxed">
          {app.desc}
        </p>
      </div>

      {/* Default label */}
      <p className="absolute bottom-7 left-7 z-10 text-white font-semibold text-sm tracking-[-0.01em]">
        {app.name}
      </p>
    </m.div>
  );
}

export default function AppShowcase() {
  const [tab, setTab] = useState<"application" | "prompt">("application");
  const isDark = useIsDark();
  const prefersReducedMotion = useReducedMotion() ?? false;

  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  // Translate from 0% to -80% across the full scroll range
  const x = useTransform(
    scrollYProgress,
    [0, 1],
    prefersReducedMotion ? ["0%", "0%"] : ["0%", "-80%"]
  );

  return (
    <section aria-label="Ukázky aplikací">
      {/* Sticky header with tab toggle — stays visible during horizontal scroll */}
      <div
        className="sticky top-20 z-20 flex justify-center py-6 pointer-events-none"
        aria-hidden="false"
      >
        <ScrollReveal>
          <div className="inline-flex rounded-full border border-border p-1 bg-surface/60 backdrop-blur-sm pointer-events-auto">
            <button
              onClick={() => setTab("application")}
              aria-pressed={tab === "application"}
              className={`px-7 py-3 rounded-full text-sm font-medium transition-all duration-400 tracking-[-0.01em] ${
                tab === "application"
                  ? "bg-text text-bg shadow-sm"
                  : "text-text-secondary hover:text-text"
              }`}
              style={{ transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)" }}
            >
              Aplikace
            </button>
            <button
              onClick={() => setTab("prompt")}
              aria-pressed={tab === "prompt"}
              className={`px-7 py-3 rounded-full text-sm font-medium transition-all duration-400 tracking-[-0.01em] ${
                tab === "prompt"
                  ? "bg-text text-bg shadow-sm"
                  : "text-text-secondary hover:text-text"
              }`}
              style={{ transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)" }}
            >
              Prompt
            </button>
          </div>
        </ScrollReveal>
      </div>

      {/* Tall parent creates scroll space — desktop only horizontal scroll */}
      <div
        ref={sectionRef}
        className="relative hidden md:block"
        style={{ height: `${apps.length * 100}vh` }}
        aria-hidden="false"
      >
        {/* Sticky viewport — pins at top:0 while parent scrolls */}
        <div
          className="sticky top-0 h-screen overflow-hidden"
          data-cursor-text="drag →"
        >
          <m.div
            style={{ x }}
            className="flex h-full items-center gap-8 pl-16 will-change-transform"
          >
            {apps.map((app) => (
              <AppCard key={app.name} app={app} isDark={isDark} />
            ))}
            {/* Extra trailing space so last card can fully come into view */}
            <div style={{ minWidth: "10vw", flexShrink: 0 }} />
          </m.div>
        </div>
      </div>

      {/* Mobile fallback — regular horizontal scroll */}
      <div className="md:hidden py-8">
        <div
          className="flex gap-5 overflow-x-auto hide-scrollbar pb-6 px-6"
          style={{ WebkitOverflowScrolling: "touch" }}
        >
          {apps.map((app) => (
            <div
              key={app.name}
              style={{
                minWidth: "min(80vw, 320px)",
                height: 280,
                background: isDark ? app.darkGradient : app.lightGradient,
                flexShrink: 0,
                borderRadius: 24,
                position: "relative",
                overflow: "hidden",
              }}
            >
              <div
                style={{
                  position: "absolute",
                  inset: 20,
                  borderRadius: 16,
                  background: "rgba(255,255,255,0.1)",
                  backdropFilter: "blur(8px)",
                  border: "1px solid rgba(255,255,255,0.2)",
                }}
              >
                <div style={{ display: "flex", gap: 6, padding: 16 }}>
                  <div style={{ width: 10, height: 10, borderRadius: "50%", background: "rgba(255,255,255,0.3)" }} />
                  <div style={{ width: 10, height: 10, borderRadius: "50%", background: "rgba(255,255,255,0.3)" }} />
                  <div style={{ width: 10, height: 10, borderRadius: "50%", background: "rgba(255,255,255,0.3)" }} />
                </div>
              </div>
              <p
                style={{
                  position: "absolute",
                  bottom: 24,
                  left: 24,
                  zIndex: 10,
                  color: "white",
                  fontWeight: 600,
                  fontSize: 14,
                }}
              >
                {app.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
