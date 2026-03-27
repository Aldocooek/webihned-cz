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
    w: 380,
  },
  {
    name: "Vzdělávací portál",
    desc: "Kurzy, kvízy a sledování pokroku",
    lightGradient: "linear-gradient(135deg, #6ee7b7 0%, #2dd4bf 100%)",
    darkGradient: "linear-gradient(135deg, rgba(6,120,70,0.75) 0%, rgba(15,100,90,0.65) 100%)",
    w: 420,
  },
  {
    name: "Finanční dashboard",
    desc: "Přehledy příjmů, výdajů a prognózy",
    lightGradient: "linear-gradient(135deg, #93c5fd 0%, #818cf8 100%)",
    darkGradient: "linear-gradient(135deg, rgba(37,99,235,0.75) 0%, rgba(79,70,229,0.65) 100%)",
    w: 400,
  },
  {
    name: "Jídelní plánovač",
    desc: "Recepty, nákupní seznam a kalorie",
    lightGradient: "linear-gradient(135deg, #fcd34d 0%, #fb923c 100%)",
    darkGradient: "linear-gradient(135deg, rgba(180,83,9,0.75) 0%, rgba(194,65,12,0.65) 100%)",
    w: 340,
  },
  {
    name: "Cestovní průvodce",
    desc: "Trasy, ubytování a tipy na výlety",
    lightGradient: "linear-gradient(135deg, #86efac 0%, #6ee7b7 100%)",
    darkGradient: "linear-gradient(135deg, rgba(22,101,52,0.75) 0%, rgba(6,120,70,0.65) 100%)",
    w: 320,
  },
];

const speeds = [-100, -200, -150, -80, -180];

function ParallaxCard({
  app,
  i,
  scrollYProgress,
  isDark,
  prefersReducedMotion,
}: {
  app: (typeof apps)[number];
  i: number;
  scrollYProgress: import("framer-motion").MotionValue<number>;
  isDark: boolean;
  prefersReducedMotion: boolean;
}) {
  const x = useTransform(
    scrollYProgress,
    [0, 1],
    prefersReducedMotion ? [0, 0] : [0, speeds[i]]
  );

  return (
    <m.div
      key={app.name}
      initial={{ opacity: 0, y: 30, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1], delay: i * 0.08 }}
      style={{
        x,
        width: app.w,
        minWidth: app.w,
        background: isDark ? app.darkGradient : app.lightGradient,
      }}
      className="group flex-shrink-0 h-[280px] md:h-[420px] rounded-3xl flex items-end p-7 relative overflow-hidden card-hover"
    >
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
      {/* Hover overlay — slides up from bottom */}
      <div className="card-overlay absolute inset-0 rounded-3xl bg-black/60 backdrop-blur-sm flex flex-col justify-end p-7">
        <p className="text-white font-bold text-sm tracking-[-0.01em] mb-1">
          {app.name}
        </p>
        <p className="text-white/80 text-xs leading-relaxed">
          {app.desc}
        </p>
      </div>
      <p className="relative z-10 text-white font-semibold text-sm tracking-[-0.01em]">
        {app.name}
      </p>
    </m.div>
  );
}

export default function AppShowcase() {
  const [tab, setTab] = useState<"application" | "prompt">("application");
  const isDark = useIsDark();
  const prefersReducedMotion = useReducedMotion() ?? false;

  const showcaseRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: showcaseRef,
    offset: ["start end", "end start"],
  });

  return (
    <section
      ref={showcaseRef}
      className="py-10 md:py-20 overflow-hidden"
      aria-label="Ukázky aplikací"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <ScrollReveal>
          <div className="flex justify-center mb-12">
            <div className="inline-flex rounded-full border border-border p-1 bg-surface/60 backdrop-blur-sm">
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
          </div>
        </ScrollReveal>

        <div className="flex gap-5 overflow-x-auto hide-scrollbar pb-6 -mx-6 px-6">
          {apps.map((app, i) => (
            <ParallaxCard
              key={app.name}
              app={app}
              i={i}
              scrollYProgress={scrollYProgress}
              isDark={isDark}
              prefersReducedMotion={prefersReducedMotion}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
