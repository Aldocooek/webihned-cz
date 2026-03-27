"use client";

import { useRef, useState, useSyncExternalStore } from "react";
import { m, useScroll, useTransform, useMotionValueEvent } from "framer-motion";
import ScrollReveal from "./ScrollReveal";
import WordReveal from "./WordReveal";

interface Stat {
  label: string;
  from: number;
  to: number;
  decimals?: number;
  prefix?: string;
  suffix?: string;
}

const STATS: Stat[] = [
  { label: "Vytvořených aplikací", from: 0, to: 10000, suffix: "+" },
  { label: "Dostupnost platformy", from: 0, to: 99.9, decimals: 1, suffix: "%" },
  { label: "Průměrný čas buildu", from: 120, to: 60, prefix: "< ", suffix: "s" },
  { label: "Hodnocení uživatelů", from: 0, to: 4.9, decimals: 1, suffix: "/5" },
];

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

interface ScrollStatProps {
  stat: Stat;
  index: number;
  scrollYProgress: ReturnType<typeof useScroll>["scrollYProgress"];
}

function ScrollStat({ stat, index, scrollYProgress }: ScrollStatProps) {
  const shouldReduce = useReducedMotion();

  // Map [0.2, 0.7] of section scroll to [from, to] — scrubs up and down
  const motionValue = useTransform(scrollYProgress, [0.2, 0.7], [stat.from, stat.to]);
  const [displayValue, setDisplayValue] = useState(shouldReduce ? stat.to : stat.from);

  useMotionValueEvent(motionValue, "change", (latest) => {
    if (shouldReduce) return;
    setDisplayValue(latest);
  });

  const formatted =
    stat.decimals && stat.decimals > 0
      ? displayValue.toFixed(stat.decimals)
      : Math.round(displayValue).toLocaleString("cs-CZ");

  return (
    <ScrollReveal direction="up" delay={index * 100}>
      <div className="group flex flex-col items-center text-center p-6 sm:p-8 rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] card-hover h-full">
        <m.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: index * 0.1 }}
          className="flex flex-col items-center"
        >
          <span
            className="text-5xl sm:text-6xl font-bold tracking-[-0.035em] text-[var(--color-accent)] leading-none mb-3 tabular-nums"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            {stat.prefix}{formatted}{stat.suffix}
          </span>
          <span
            className="text-sm font-medium tracking-[-0.01em] text-[var(--color-text-secondary)] leading-snug"
            style={{ fontFamily: "var(--font-body)" }}
          >
            {stat.label}
          </span>
        </m.div>
      </div>
    </ScrollReveal>
  );
}

export default function Stats() {
  const statsRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: statsRef,
    offset: ["start end", "end start"],
  });

  return (
    <section
      ref={statsRef}
      className="section-bg-warm w-full py-20 sm:py-24 px-4 sm:px-6 lg:px-8"
      aria-label="Klíčové statistiky platformy"
    >
      <div className="max-w-5xl mx-auto">
        <WordReveal
          tag="h2"
          className="text-center text-sm font-semibold tracking-[0.08em] uppercase text-[var(--color-text-secondary)] mb-12"
          stagger={120}
        >
          Platforma v číslech
        </WordReveal>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {STATS.map((stat, i) => (
            <ScrollStat
              key={stat.label}
              stat={stat}
              index={i}
              scrollYProgress={scrollYProgress}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
