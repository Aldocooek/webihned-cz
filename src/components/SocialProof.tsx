"use client";

import ScrollReveal from "./ScrollReveal";
import { useRef } from "react";

const LOGOS = [
  "TechFlow",
  "DataPeak",
  "CloudNova",
  "AppForge",
  "NexGen",
  "CyberPulse",
  "ByteWorks",
  "DigiCraft",
  "SmartHub",
  "CodeVibe",
];

function LogoItem({ name }: { name: string }) {
  return (
    <div
      className="flex-shrink-0 flex items-center justify-center px-8 py-3 mx-3 rounded-lg border border-[var(--color-border)] bg-[var(--color-surface)] grayscale opacity-50 hover:opacity-75 hover:grayscale-0 transition-all duration-300"
      aria-label={name}
    >
      <span
        className="text-sm font-semibold tracking-[-0.01em] text-[var(--color-text)] whitespace-nowrap select-none"
        style={{ fontFamily: "var(--font-heading)" }}
      >
        {name}
      </span>
    </div>
  );
}

function MarqueeRow({ reverse = false, opacity = 1 }: { reverse?: boolean; opacity?: number }) {
  const rowRef = useRef<HTMLDivElement>(null);

  function handleMouseEnter() {
    if (rowRef.current) rowRef.current.style.animationPlayState = "paused";
  }
  function handleMouseLeave() {
    if (rowRef.current) rowRef.current.style.animationPlayState = "running";
  }

  return (
    <div
      ref={rowRef}
      className={`flex ${reverse ? "animate-marquee-reverse" : "animate-marquee"}`}
      style={{ animationDuration: reverse ? "38s" : "30s", opacity }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {LOGOS.map((name) => (
        <LogoItem key={`a-${name}`} name={name} />
      ))}
      {LOGOS.map((name) => (
        <LogoItem key={`b-${name}`} name={name} />
      ))}
    </div>
  );
}

export default function SocialProof() {
  return (
    <section
      className="w-full py-14 overflow-hidden bg-[var(--color-bg)]"
      aria-label="Zákazníci a důvěryhodnost"
    >
      <ScrollReveal direction="up">
        <p
          className="text-center text-sm font-medium tracking-[-0.01em] text-[var(--color-text-secondary)] mb-8"
          style={{ fontFamily: "var(--font-body)" }}
        >
          Důvěřuje nám přes{" "}
          <span className="text-[var(--color-text)] font-semibold">
            4&nbsp;700
          </span>{" "}
          lidí
        </p>
      </ScrollReveal>

      {/* Marquee strips — forward + reverse rows */}
      <div className="relative w-full overflow-hidden flex flex-col gap-3" aria-hidden="true">
        {/* Left fade */}
        <div
          className="absolute left-0 top-0 bottom-0 w-24 z-10 pointer-events-none"
          style={{ background: "linear-gradient(to right, var(--color-bg) 0%, transparent 100%)" }}
        />
        {/* Right fade */}
        <div
          className="absolute right-0 top-0 bottom-0 w-24 z-10 pointer-events-none"
          style={{ background: "linear-gradient(to left, var(--color-bg) 0%, transparent 100%)" }}
        />

        <MarqueeRow />
        <MarqueeRow reverse opacity={0.38} />
      </div>

      <ScrollReveal direction="up" delay={100}>
        <p
          className="text-center text-xs tracking-[-0.01em] text-[var(--color-text-secondary)] mt-6 opacity-70"
          style={{ fontFamily: "var(--font-body)" }}
        >
          A tisíce dalších po celém světě
        </p>
      </ScrollReveal>
    </section>
  );
}
