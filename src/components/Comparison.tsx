"use client";

import { useRef, useState } from "react";
import { m, useScroll, useMotionValueEvent, useReducedMotion } from "framer-motion";
import ScrollReveal from "./ScrollReveal";

const rows = [
  {
    label: "Čas do spuštění",
    traditional: "3–6 měsíců",
    webihned: "Minuty",
  },
  {
    label: "Náklady",
    traditional: "500 000+ Kč",
    webihned: "Od 0 Kč",
  },
  {
    label: "Potřeba programátora",
    traditional: "Ano, celý tým",
    webihned: "Ne, stačí popsat nápad",
  },
  {
    label: "Údržba a hosting",
    traditional: "Vlastní správa serverů",
    webihned: "Vše automaticky",
  },
  {
    label: "Změny a iterace",
    traditional: "Týdny čekání",
    webihned: "Okamžitě, v chatu",
  },
  {
    label: "Bezpečnost",
    traditional: "Vlastní zodpovědnost",
    webihned: "Vestavěná, automatická",
  },
];

function CheckIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      className="flex-shrink-0 mt-0.5"
    >
      <circle cx="8" cy="8" r="8" className="fill-accent/15" />
      <path
        d="M5 8.5L7 10.5L11 6"
        stroke="var(--color-check)"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function CrossIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      className="flex-shrink-0 mt-0.5"
    >
      <circle cx="8" cy="8" r="8" className="fill-border" />
      <path
        d="M5.5 5.5L10.5 10.5M10.5 5.5L5.5 10.5"
        stroke="var(--color-cross)"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

export default function Comparison() {
  const [activeRow, setActiveRow] = useState<number | null>(null);
  const prefersReducedMotion = useReducedMotion() ?? false;

  const tableRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: tableRef,
    offset: ["start end", "end start"],
  });

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    if (prefersReducedMotion) return;
    const index = Math.floor(latest * rows.length);
    setActiveRow(Math.min(index, rows.length - 1));
  });

  return (
    <section className="py-20 md:py-32" aria-label="Porovnání s tradičním vývojem">
      <div className="max-w-4xl mx-auto px-6 lg:px-10">
        {/* Heading */}
        <ScrollReveal direction="clip">
          <div className="text-center mb-14">
            <h2 className="scroll-sharpen text-3xl sm:text-4xl md:text-[48px] font-bold leading-[1.08] tracking-[-0.035em] mb-4">
              Proč{" "}
              <span className="font-[var(--font-serif)] italic font-normal">
                webihned.cz
              </span>
              ?
            </h2>
            <p className="text-base text-text-secondary tracking-[-0.01em]">
              Porovnání s tradičním vývojem
            </p>
          </div>
        </ScrollReveal>

        {/* Desktop table */}
        <div className="hidden md:block" ref={tableRef}>
          <div className="bg-surface rounded-3xl border border-border/40 overflow-hidden">
            {/* Table header */}
            <div className="grid grid-cols-[1fr_1fr_1fr] border-b border-border/40">
              <div className="px-7 py-4 text-xs font-semibold text-text-secondary uppercase tracking-[0.08em]">
                Parametr
              </div>
              <div className="px-7 py-4 text-xs font-semibold text-text-secondary uppercase tracking-[0.08em] border-l border-border/40">
                Tradiční vývoj
              </div>
              <div className="px-7 py-4 text-xs font-semibold text-accent uppercase tracking-[0.08em] border-l border-border/40">
                webihned.cz
              </div>
            </div>

            {/* Table rows */}
            {rows.map((row, i) => {
              const isActive = !prefersReducedMotion && activeRow === i;
              return (
                <ScrollReveal key={row.label} delay={i * 60}>
                  <m.div
                    initial={{ opacity: 0, x: -15 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, ease: "easeOut", delay: i * 0.06 }}
                    animate={
                      prefersReducedMotion
                        ? {}
                        : {
                            opacity: isActive ? 1 : 0.6,
                            scale: isActive ? 1.01 : 1,
                            backgroundColor: isActive
                              ? "color-mix(in srgb, var(--color-accent) 5%, transparent)"
                              : "transparent",
                          }
                    }
                    className={`grid grid-cols-[1fr_1fr_1fr] ${
                      i % 2 === 0 ? "" : "bg-bg"
                    }`}
                  >
                    {/* Label */}
                    <div className="px-7 py-5 text-sm font-medium text-text tracking-[-0.01em]">
                      {row.label}
                    </div>

                    {/* Traditional */}
                    <div className="px-7 py-5 border-l border-border/40 flex items-start gap-2.5">
                      <CrossIcon />
                      <span className="text-sm text-text-secondary tracking-[-0.01em]">
                        {row.traditional}
                      </span>
                    </div>

                    {/* webihned.cz */}
                    <div className="px-7 py-5 border-l border-border/40 flex items-start gap-2.5">
                      <CheckIcon />
                      <span className="text-sm font-semibold text-accent tracking-[-0.01em]">
                        {row.webihned}
                      </span>
                    </div>
                  </m.div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>

        {/* Mobile cards */}
        <div className="md:hidden space-y-4">
          {rows.map((row, i) => (
            <ScrollReveal key={row.label} delay={i * 60}>
              <m.div
                initial={{ opacity: 0, x: -15 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1], delay: i * 0.06 }}
                className="bg-surface rounded-2xl border border-border/40 overflow-hidden"
              >
                {/* Card label */}
                <div className="px-5 py-3 border-b border-border/40 bg-bg">
                  <span className="text-xs font-semibold text-text-secondary uppercase tracking-[0.08em]">
                    {row.label}
                  </span>
                </div>

                {/* Card body */}
                <div className="grid grid-cols-2 divide-x divide-border/40">
                  {/* Traditional */}
                  <div className="px-5 py-4 flex flex-col gap-2">
                    <span className="text-[10px] font-semibold text-text-secondary uppercase tracking-[0.06em]">
                      Tradiční vývoj
                    </span>
                    <div className="flex items-start gap-2">
                      <CrossIcon />
                      <span className="text-sm text-text-secondary tracking-[-0.01em] leading-snug">
                        {row.traditional}
                      </span>
                    </div>
                  </div>

                  {/* webihned.cz */}
                  <div className="px-5 py-4 flex flex-col gap-2">
                    <span className="text-[10px] font-semibold text-accent uppercase tracking-[0.06em]">
                      webihned.cz
                    </span>
                    <div className="flex items-start gap-2">
                      <CheckIcon />
                      <span className="text-sm font-semibold text-accent tracking-[-0.01em] leading-snug">
                        {row.webihned}
                      </span>
                    </div>
                  </div>
                </div>
              </m.div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
