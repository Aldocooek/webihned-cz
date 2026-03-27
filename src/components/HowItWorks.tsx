"use client";

import { useRef, useState } from "react";
import { useScroll, useTransform, useMotionValueEvent, m, useReducedMotion, AnimatePresence } from "framer-motion";

// ─── Step data (unchanged) ────────────────────────────────────────────────────

const steps = [
  {
    number: "01",
    title: "Popište svůj nápad",
    description:
      "Napište, co chcete vytvořit. Stačí pár vět — nebo nahrajte snímek obrazovky či Figma design.",
    icon: (
      <svg
        width="28"
        height="28"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
        className="svg-draw"
      >
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
        <path d="M8 10h8" />
        <path d="M8 14h5" />
      </svg>
    ),
  },
  {
    number: "02",
    title: "Sledujte, jak vzniká",
    description:
      "Naše AI vytvoří funkční aplikaci v reálném čase. Frontend, backend, databáze — vše automaticky.",
    icon: (
      <svg
        width="28"
        height="28"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
        className="svg-draw"
      >
        <polyline points="16 18 22 12 16 6" />
        <polyline points="8 6 2 12 8 18" />
        <line x1="19" y1="12" x2="5" y2="12" strokeDasharray="3 3" />
      </svg>
    ),
  },
  {
    number: "03",
    title: "Publikujte jedním klikem",
    description:
      "Hosting, doména a SSL jsou připraveny. Stačí kliknout a vaše aplikace je online.",
    icon: (
      <svg
        width="28"
        height="28"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
        className="svg-draw"
      >
        <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
        <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
        <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" />
        <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
      </svg>
    ),
  },
];

// ─── Reduced-motion fallback: plain static grid ───────────────────────────────

function StaticGrid() {
  return (
    <section className="py-16 md:py-24 bg-surface border-y border-border/30 dark:border-border/60">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Heading */}
        <div className="text-center mb-16 md:mb-20">
          <h2 className="text-3xl sm:text-4xl md:text-[56px] font-bold leading-[1.08] tracking-[-0.035em] mb-4">
            Jak to{" "}
            <span className="font-[var(--font-serif)] italic font-normal">
              funguje
            </span>
          </h2>
          <p className="text-text-secondary text-base md:text-lg max-w-md mx-auto leading-relaxed tracking-[-0.01em]">
            Od nápadu k hotové aplikaci ve třech krocích
          </p>
        </div>

        {/* Cards grid */}
        <div className="relative grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {/* Dashed connector */}
          <div
            className="hidden md:block absolute top-[72px] left-[calc(33.333%+16px)] right-[calc(33.333%+16px)] h-px border-t-2 border-dashed border-border"
            aria-hidden="true"
          />
          {steps.map((step) => (
            <article
              key={step.number}
              className="step-card relative bg-surface rounded-3xl p-8 border border-border/40 dark:border-border/80 shadow-[0_1px_3px_rgba(0,0,0,0.04)] dark:shadow-[0_1px_3px_rgba(0,0,0,0.3)] flex flex-col h-full overflow-hidden"
            >
              <div className="absolute top-5 right-6 text-[72px] font-bold leading-none select-none pointer-events-none tracking-[-0.05em] opacity-10"
                style={{ color: "var(--color-accent)" }}
                aria-hidden="true"
              >
                {step.number}
              </div>
              <div className="flex items-center gap-3 mb-6">
                <span className="text-sm font-bold tracking-wide tabular-nums" style={{ color: "var(--color-accent)" }}>
                  {step.number}
                </span>
                <span className="w-px h-4 bg-border" aria-hidden="true" />
                <span className="flex-shrink-0" style={{ color: "var(--color-accent)" }}>
                  {step.icon}
                </span>
              </div>
              <h3 className="text-lg font-bold mb-3 leading-[1.25] tracking-[-0.02em]">
                {step.title}
              </h3>
              <p className="text-sm text-text-secondary leading-[1.8] tracking-[-0.01em]">
                {step.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Sticky scroll sequence ───────────────────────────────────────────────────

function StickyScrollSequence() {
  const sectionRef = useRef<HTMLElement>(null);
  const [activeCard, setActiveCard] = useState(0);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  // State-based card switching — drives AnimatePresence re-mount
  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const newCard = latest < 0.33 ? 0 : latest < 0.66 ? 1 : 2;
    if (newCard !== activeCard) setActiveCard(newCard);
  });

  // Scroll hint fades out after first card transition
  const scrollHintOpacity = useTransform(
    scrollYProgress,
    [0, 0.12, 0.18],
    [1, 1, 0]
  );

  const step = steps[activeCard];

  return (
    <section
      ref={sectionRef}
      style={{ height: "300vh" }}
      className="relative bg-surface border-y border-border/30 dark:border-border/60"
      aria-label="Jak to funguje — tři kroky"
    >
      {/* Sticky viewport */}
      <div className="sticky top-0 h-screen flex flex-col items-center justify-center overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 w-full">

          {/* Heading — always visible */}
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-[56px] font-bold leading-[1.08] tracking-[-0.035em] mb-4">
              Jak to{" "}
              <span className="font-[var(--font-serif)] italic font-normal">
                funguje
              </span>
            </h2>
            <p className="text-text-secondary text-base md:text-lg max-w-md mx-auto leading-relaxed tracking-[-0.01em]">
              Od nápadu k hotové aplikaci ve třech krocích
            </p>
          </div>

          {/* Card stage — 3D perspective container */}
          <div
            className="relative mx-auto"
            style={{
              perspective: "1200px",
              minHeight: "320px",
              maxWidth: "640px",
            }}
          >
            <AnimatePresence mode="wait">
              <m.div
                key={activeCard}
                initial={{ opacity: 0, scale: 0.95, rotateY: 5 }}
                animate={{ opacity: 1, scale: 1, rotateY: 0 }}
                exit={{ opacity: 0, scale: 0.95, rotateY: -5 }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                style={{ willChange: "opacity, transform" }}
              >
                <article
                  className="step-card relative bg-surface rounded-3xl p-10 md:p-12 border border-border/40 dark:border-border/80 shadow-[0_4px_24px_rgba(0,0,0,0.06)] dark:shadow-[0_4px_32px_rgba(0,0,0,0.4)] flex flex-col overflow-hidden"
                  aria-label={`Krok ${step.number}: ${step.title}`}
                >
                  {/* Subtle accent glow top-right */}
                  <div
                    className="pointer-events-none absolute top-0 right-0 w-64 h-64 rounded-full opacity-[0.07]"
                    style={{
                      background:
                        "radial-gradient(circle at center, var(--color-accent), transparent 70%)",
                      transform: "translate(30%, -30%)",
                    }}
                    aria-hidden="true"
                  />

                  {/* Large background step number */}
                  <div
                    className="absolute top-6 right-8 text-[80px] font-bold leading-none select-none pointer-events-none tracking-[-0.05em]"
                    style={{
                      color: "var(--color-accent)",
                      opacity: 0.08,
                    }}
                    aria-hidden="true"
                  >
                    {step.number}
                  </div>

                  {/* Step number + icon row */}
                  <div className="flex items-center gap-3 mb-8">
                    <span
                      className="text-sm font-bold tracking-wide tabular-nums"
                      style={{ color: "var(--color-accent)" }}
                    >
                      {step.number}
                    </span>
                    <span className="w-px h-4 bg-border" aria-hidden="true" />
                    <span
                      className="flex-shrink-0"
                      style={{ color: "var(--color-accent)" }}
                    >
                      {step.icon}
                    </span>
                  </div>

                  {/* Text */}
                  <h3 className="text-2xl md:text-3xl font-bold mb-4 leading-[1.2] tracking-[-0.03em]">
                    {step.title}
                  </h3>
                  <p className="text-base text-text-secondary leading-[1.8] tracking-[-0.01em]">
                    {step.description}
                  </p>
                </article>
              </m.div>
            </AnimatePresence>
          </div>

          {/* Progress dots */}
          <div
            className="flex gap-3 justify-center mt-10"
            role="tablist"
            aria-label="Aktuální krok"
          >
            {steps.map((_, i) => (
              <div
                key={i}
                role="tab"
                aria-label={`Krok ${i + 1}`}
                aria-selected={i === activeCard}
                className="w-2.5 h-2.5 rounded-full transition-all duration-300"
                style={{
                  backgroundColor: "var(--color-accent)",
                  transform: `scale(${i === activeCard ? 1.3 : 0.6})`,
                  opacity: i === activeCard ? 1 : 0.4,
                }}
              />
            ))}
          </div>

          {/* Scroll hint — fades out after first card transition */}
          <m.p
            className="text-center text-xs text-text-secondary mt-6 tracking-wide uppercase"
            style={{ opacity: scrollHintOpacity }}
            aria-hidden="true"
          >
            Posouvejte dolů
          </m.p>

        </div>
      </div>
    </section>
  );
}

// ─── Default export — picks variant by reduced-motion preference ──────────────

export default function HowItWorks() {
  const shouldReduce = useReducedMotion();
  if (shouldReduce) return <StaticGrid />;
  return <StickyScrollSequence />;
}
