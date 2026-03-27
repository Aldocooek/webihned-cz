"use client";
import { useRef } from "react";
import Link from "next/link";
import { m, useScroll, useTransform, useReducedMotion } from "framer-motion";
import ScrollReveal from "./ScrollReveal";

export default function FinalCTA() {
  const ctaRef = useRef<HTMLElement>(null);
  const prefersReduced = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: ctaRef,
    offset: ["start end", "end start"],
  });

  // Heading scale + letter-spacing
  const textScale = useTransform(
    scrollYProgress,
    [0.2, 0.6],
    prefersReduced ? [1, 1] : [0.85, 1.15]
  );
  const letterSpacing = useTransform(
    scrollYProgress,
    [0.2, 0.6],
    prefersReduced ? ["-0.05em", "-0.05em"] : ["-0.05em", "0.01em"]
  );

  // Blob scale (replaces old manual rAF parallax)
  const blobScale1 = useTransform(
    scrollYProgress,
    [0.1, 0.7],
    prefersReduced ? [1, 1] : [0.8, 1.5]
  );
  const blobScale2 = useTransform(
    scrollYProgress,
    [0.1, 0.7],
    prefersReduced ? [1, 1] : [0.9, 1.3]
  );

  return (
    <section
      ref={ctaRef}
      className="relative overflow-hidden py-28 md:py-40"
      aria-label="Začněte zdarma"
    >
      <div className="absolute inset-0 cta-gradient" />

      {/* Blob 1 */}
      <m.div
        style={{ scale: blobScale1 }}
        className="absolute top-1/4 left-1/4 w-80 h-80 bg-accent/10 rounded-full blur-[100px]"
      />

      {/* Blob 2 */}
      <m.div
        style={{ scale: blobScale2 }}
        className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-rose-200/20 dark:bg-rose-800/10 rounded-full blur-[120px]"
      />

      <ScrollReveal className="relative z-10">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <m.h2
            style={{ scale: textScale, letterSpacing }}
            className="text-4xl sm:text-5xl md:text-[80px] lg:text-[120px] font-bold leading-[1.05] mb-10 will-change-transform"
          >
            <span className="gradient-text">Co dnes</span>{" "}
            <span className="font-[var(--font-serif)] italic font-normal">
              vytvoříme?
            </span>
          </m.h2>
          <Link
            href="/pricing"
            className="btn-primary magnetic-btn inline-block bg-accent text-white font-medium px-12 py-4.5 rounded-full text-base tracking-[-0.01em]"
          >
            Začít zdarma
          </Link>
          <p className="mt-5 text-sm text-text-secondary">
            nebo si{" "}
            <Link
              href="/kontakt"
              className="underline underline-offset-2 hover:text-text-primary transition-colors"
            >
              domluvte demo
            </Link>
          </p>
        </div>
      </ScrollReveal>
    </section>
  );
}
