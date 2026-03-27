"use client";

import React, { useEffect, useRef, useState } from "react";
import dynamic from "next/dynamic";
import VisitorCount from "./VisitorCount";
import { trackEvent } from "@/lib/track";
import { useMagneticButton } from "@/hooks/useMagneticButton";
import { useScroll, useTransform, m, useReducedMotion } from "framer-motion";

const HeroGL = dynamic(() => import("./HeroGL"), { ssr: false, loading: () => null });

const suggestions = [
  "Dashboard pro firmu",
  "E-shop aplikace",
  "Rezervační systém",
  "CRM pro tým",
  "Analytický portál",
];

const phrases = [
  "Popište aplikaci, kterou chcete vytvořit...",
  "Vytvořte dashboard pro správu objednávek...",
  "Postavte CRM systém pro váš tým...",
  "Navrhněte e-shop s platebním systémem...",
];

function TypewriterPlaceholder() {
  const [displayedText, setDisplayedText] = useState("");
  const phraseIndex = useRef(0);
  const charIndex = useRef(0);
  const isDeleting = useRef(false);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const tick = () => {
      const currentPhrase = phrases[phraseIndex.current];

      if (!isDeleting.current) {
        // Typing
        charIndex.current += 1;
        setDisplayedText(currentPhrase.slice(0, charIndex.current));

        if (charIndex.current === currentPhrase.length) {
          // Full phrase typed — pause 2s then start deleting
          timeoutRef.current = setTimeout(() => {
            isDeleting.current = true;
            tick();
          }, 2000);
          return;
        }
        timeoutRef.current = setTimeout(tick, 40);
      } else {
        // Deleting
        charIndex.current -= 1;
        setDisplayedText(currentPhrase.slice(0, charIndex.current));

        if (charIndex.current === 0) {
          // Done deleting — pause 300ms then move to next phrase
          isDeleting.current = false;
          phraseIndex.current = (phraseIndex.current + 1) % phrases.length;
          timeoutRef.current = setTimeout(tick, 300);
          return;
        }
        timeoutRef.current = setTimeout(tick, 25);
      }
    };

    timeoutRef.current = setTimeout(tick, 800);

    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  return (
    <span
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 flex items-center px-4 sm:px-7 text-base text-text-secondary/40 tracking-[-0.01em] whitespace-nowrap overflow-hidden"
    >
      {displayedText}
      <span className="inline-block w-[1.5px] h-[1em] bg-text-secondary/30 ml-[1px] animate-[blink_1s_step-end_infinite]" />
    </span>
  );
}

function TextScramble({ text, delay = 0 }: { text: string; delay?: number }) {
  const [displayed, setDisplayed] = useState(text); // start with final for SSR
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) return;

    const timer = setTimeout(() => setStarted(true), delay);
    return () => clearTimeout(timer);
  }, [delay]);

  useEffect(() => {
    if (!started) return;
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%";
    let resolved = 0;
    const targetLen = text.length;
    const interval = setInterval(() => {
      resolved += 1;
      const result =
        text.slice(0, resolved) +
        Array.from({ length: targetLen - resolved }, () =>
          chars[Math.floor(Math.random() * chars.length)]
        ).join("");
      setDisplayed(result);
      if (resolved >= targetLen) clearInterval(interval);
    }, 30);
    return () => clearInterval(interval);
  }, [started, text]);

  return <>{displayed}</>;
}

export default function Hero() {
  const [isFocused, setIsFocused] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const magnetic = useMagneticButton(0.3);
  const magneticRef = magnetic.ref as React.RefObject<HTMLButtonElement>;
  const magneticMouseMove = magnetic.onMouseMove;
  const magneticMouseLeave = magnetic.onMouseLeave;
  const orbRef = useRef<HTMLDivElement>(null);
  const heroRef = useRef<HTMLElement>(null);
  const shouldReduce = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const headingScale = useTransform(scrollYProgress, [0, 0.5], [1, 0.65]);
  const headingY = useTransform(scrollYProgress, [0, 0.5], [0, -60]);
  const headingOpacity = useTransform(scrollYProgress, [0.3, 0.5], [1, 0]);
  const subtitleOpacity = useTransform(scrollYProgress, [0.2, 0.4], [1, 0]);

  useEffect(() => {
    let ticking = false;
    const handler = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          if (orbRef.current) {
            orbRef.current.style.transform = `translateY(${window.scrollY * 0.15}px)`;
          }
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <section ref={heroRef} className="hero-gradient pt-8 pb-20 md:pt-14 md:pb-28 relative overflow-hidden" aria-label="Hero — vytvořte aplikaci s AI">
      <HeroGL />
      {/* Animated gradient orb — decorative, behind all content */}
      {/* Outer wrapper handles scroll parallax via rAF (no re-renders) */}
      <div
        ref={orbRef}
        className="absolute top-[-80px] left-1/2 -translate-x-1/2 pointer-events-none select-none z-0"
        aria-hidden="true"
      >
        {/* Inner div carries the float animation so both effects compose cleanly */}
        <div
          className="animate-float w-[560px] h-[560px] rounded-full"
          style={{
            background: "radial-gradient(circle at center, rgba(225,29,72,0.18) 0%, rgba(244,63,94,0.10) 40%, transparent 70%)",
            filter: "blur(60px)",
          }}
        />
      </div>
      {/* Morphing blob — second decorative shape, organic feel */}
      <div
        className="absolute top-[20%] right-[-10%] w-[400px] h-[400px] animate-morph pointer-events-none select-none z-0 opacity-[0.07]"
        style={{
          background: "linear-gradient(135deg, var(--color-accent), transparent)",
          filter: "blur(40px)",
        }}
        aria-hidden="true"
      />
      <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-medium mb-6 tracking-[-0.01em]" style={{ backgroundColor: "var(--color-accent-light)", color: "var(--color-accent)" }}>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/>
          </svg>
          Poháněno umělou inteligencí
        </div>
        <m.div
          style={shouldReduce ? {} : { scale: headingScale, y: headingY, opacity: headingOpacity }}
        >
          <h1 className="animate-hero-title text-4xl sm:text-5xl md:text-[72px] lg:text-[84px] font-bold leading-[1.05] tracking-[-0.035em] mb-6">
            <span className="gradient-text">Webovou aplikaci</span>
            <br />
            <span className="font-[var(--font-serif)] italic font-normal text-text-secondary">
              za minuty
            </span>
          </h1>
        </m.div>

        <m.p
          className="animate-hero-subtitle text-base md:text-lg text-text-secondary max-w-lg mx-auto mb-12 leading-relaxed tracking-[-0.01em]"
          style={shouldReduce ? {} : { opacity: subtitleOpacity }}
        >
          <TextScramble
            text="webihned.cz vám postaví funkční aplikaci během minut. Stačí popsat nápad. Žádné programování."
            delay={1400}
          />
        </m.p>

        <div className="animate-hero-input max-w-2xl mx-auto mb-10">
          <div className="relative flex items-center bg-surface rounded-[28px] shadow-[0_0_0_1px_rgba(0,0,0,0.04),0_2px_8px_rgba(0,0,0,0.04),0_12px_40px_-8px_rgba(0,0,0,0.06)] dark:shadow-[0_0_0_1px_rgba(255,255,255,0.06),0_2px_8px_rgba(0,0,0,0.3),0_12px_40px_-8px_rgba(0,0,0,0.5)] border border-border/40 dark:border-border/80">
            <div className="relative flex-1">
              {/* Animated placeholder — only shown when not focused and no value */}
              {!isFocused && !inputValue && (
                <TypewriterPlaceholder />
              )}
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onFocus={() => setIsFocused(true)}
                onBlur={() => setIsFocused(false)}
                aria-label="Popište aplikaci, kterou chcete vytvořit"
                className="w-full bg-transparent px-4 sm:px-7 py-4 sm:py-5 text-input-text text-base outline-none rounded-[28px] tracking-[-0.01em]"
              />
            </div>
            <button
              ref={magneticRef}
              onMouseMove={magneticMouseMove} // eslint-disable-line react-hooks/refs
              onMouseLeave={magneticMouseLeave} // eslint-disable-line react-hooks/refs
              className="btn-primary bg-accent text-white font-medium px-4 sm:px-7 py-3.5 rounded-full mr-2 text-sm whitespace-nowrap tracking-[-0.01em] min-w-[80px]"
              onClick={() => trackEvent("click", "cta", "hero_create")}
              aria-label="Vytvořit aplikaci"
            >
              Vytvořit
            </button>
          </div>
        </div>

        <div className="animate-hero-chips max-w-2xl mx-auto">
          <p className="text-sm text-text-secondary mb-4 tracking-[-0.01em]">
            Nevíte, kde začít? Zkuste třeba:
          </p>
          <div className="flex flex-wrap justify-center gap-2.5">
            {suggestions.map((s) => (
              <button
                key={s}
                className="chip px-5 py-3 rounded-full border border-border text-sm text-text tracking-[-0.01em]"
                aria-label={`Použít návrh: ${s}`}
                onClick={() => setInputValue(s)}
              >
                {s}
              </button>
            ))}
          </div>
          <VisitorCount />
        </div>
      </div>
    </section>
  );
}
