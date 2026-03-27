"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";

// ── Types ─────────────────────────────────────────────────────────────────────

type VideoCategory = "Vše" | "Začínáme" | "Pokročilé" | "Tips & Tricks";

interface Video {
  id: number;
  title: string;
  duration: string;
  category: Exclude<VideoCategory, "Vše">;
  gradientLight: string;
  gradientDark: string;
}

// ── Data ──────────────────────────────────────────────────────────────────────

const videos: Video[] = [
  {
    id: 1,
    title: "Úvod do webihned.cz",
    duration: "5:30",
    category: "Začínáme",
    gradientLight: "linear-gradient(135deg, #fce7f3 0%, #fdf2f8 50%, #ede9fe 100%)",
    gradientDark: "linear-gradient(135deg, rgba(190,24,93,0.2) 0%, rgba(131,24,67,0.12) 50%, rgba(76,29,149,0.12) 100%)",
  },
  {
    id: 2,
    title: "Váš první projekt za 5 minut",
    duration: "7:15",
    category: "Začínáme",
    gradientLight: "linear-gradient(135deg, #d1fae5 0%, #ecfdf5 50%, #cffafe 100%)",
    gradientDark: "linear-gradient(135deg, rgba(6,78,59,0.2) 0%, rgba(6,95,70,0.12) 50%, rgba(8,51,68,0.12) 100%)",
  },
  {
    id: 3,
    title: "E-shop od nuly",
    duration: "12:40",
    category: "Začínáme",
    gradientLight: "linear-gradient(135deg, #fff7ed 0%, #fef3c7 50%, #fef9c3 100%)",
    gradientDark: "linear-gradient(135deg, rgba(124,45,18,0.2) 0%, rgba(146,64,14,0.12) 50%, rgba(113,63,18,0.12) 100%)",
  },
  {
    id: 4,
    title: "Práce s databází",
    duration: "9:20",
    category: "Pokročilé",
    gradientLight: "linear-gradient(135deg, #ede9fe 0%, #f5f3ff 50%, #dbeafe 100%)",
    gradientDark: "linear-gradient(135deg, rgba(76,29,149,0.2) 0%, rgba(91,33,182,0.12) 50%, rgba(30,58,138,0.12) 100%)",
  },
  {
    id: 5,
    title: "GitHub integrace",
    duration: "6:45",
    category: "Pokročilé",
    gradientLight: "linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 50%, #dbeafe 100%)",
    gradientDark: "linear-gradient(135deg, rgba(8,47,73,0.2) 0%, rgba(12,74,110,0.12) 50%, rgba(30,58,138,0.12) 100%)",
  },
  {
    id: 6,
    title: "Vlastní doména a SSL",
    duration: "4:10",
    category: "Pokročilé",
    gradientLight: "linear-gradient(135deg, #ecfdf5 0%, #d1fae5 50%, #a7f3d0 100%)",
    gradientDark: "linear-gradient(135deg, rgba(6,78,59,0.2) 0%, rgba(5,46,22,0.15) 50%, rgba(2,44,34,0.12) 100%)",
  },
  {
    id: 7,
    title: "5 tipů pro lepší prompty",
    duration: "3:50",
    category: "Tips & Tricks",
    gradientLight: "linear-gradient(135deg, #fce7f3 0%, #fee2e2 50%, #fef3c7 100%)",
    gradientDark: "linear-gradient(135deg, rgba(190,24,93,0.18) 0%, rgba(127,29,29,0.12) 50%, rgba(146,64,14,0.1) 100%)",
  },
  {
    id: 8,
    title: "Jak využít šablony naplno",
    duration: "5:15",
    category: "Tips & Tricks",
    gradientLight: "linear-gradient(135deg, #fef9c3 0%, #fef3c7 50%, #fde68a 100%)",
    gradientDark: "linear-gradient(135deg, rgba(113,63,18,0.2) 0%, rgba(146,64,14,0.12) 50%, rgba(120,53,15,0.12) 100%)",
  },
];

const categories: VideoCategory[] = ["Vše", "Začínáme", "Pokročilé", "Tips & Tricks"];

const categoryColors: Record<Exclude<VideoCategory, "Vše">, string> = {
  "Začínáme": "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/20",
  "Pokročilé": "bg-accent/10 text-accent border-accent/20",
  "Tips & Tricks": "bg-amber-500/10 text-amber-600 dark:text-amber-400 border-amber-500/20",
};

// ── Play button SVG ───────────────────────────────────────────────────────────

function PlayButton() {
  return (
    <div className="w-12 h-12 rounded-full bg-surface/90 dark:bg-surface/95 backdrop-blur-sm shadow-md flex items-center justify-center border border-white/20 dark:border-white/8 transition-transform duration-200 group-hover:scale-110">
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M8 5l11 7-11 7V5z" fill="currentColor" className="text-accent" />
      </svg>
    </div>
  );
}

// ── Page ──────────────────────────────────────────────────────────────────────

export default function VidClient() {
  const [activeCategory, setActiveCategory] = useState<VideoCategory>("Vše");

  const filtered =
    activeCategory === "Vše"
      ? videos
      : videos.filter((v) => v.category === activeCategory);

  return (
    <>
      <Navbar />
      <main id="main-content">

        {/* ── Hero ──────────────────────────────────────────────────────── */}
        <section className="hero-gradient pt-24 pb-16 px-6 lg:px-10 text-center">
          <div className="max-w-3xl mx-auto">
            <ScrollReveal>
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-accent/30 bg-accent/5 text-accent text-xs font-medium tracking-[-0.01em] mb-8">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <polygon points="23 7 16 12 23 17 23 7" />
                  <rect x="1" y="5" width="15" height="14" rx="2" />
                </svg>
                Video tutoriály
              </div>
            </ScrollReveal>

            <ScrollReveal delay={60}>
              <h1 className="text-4xl sm:text-5xl lg:text-[64px] font-semibold text-text tracking-[-0.035em] leading-[1.05] mb-6">
                Naučte se{" "}
                <em style={{ fontFamily: "var(--font-serif)", fontStyle: "italic" }}>
                  vizuálně
                </em>
              </h1>
            </ScrollReveal>

            <ScrollReveal delay={120}>
              <p className="text-lg text-text-secondary leading-relaxed tracking-[-0.01em] max-w-2xl mx-auto">
                Video návody pro každou úroveň — od prvního projektu po pokročilé techniky.
              </p>
            </ScrollReveal>
          </div>
        </section>

        {/* ── Filter tabs ───────────────────────────────────────────────── */}
        <section className="px-6 lg:px-10 pb-4 sticky top-16 z-10 bg-bg/80 backdrop-blur-sm border-b border-border/30">
          <div className="max-w-7xl mx-auto">
            <div
              className="flex items-center gap-2 py-4 overflow-x-auto scrollbar-hide"
              role="tablist"
              aria-label="Filtrovat videa podle kategorie"
            >
              {categories.map((cat) => (
                <button
                  key={cat}
                  role="tab"
                  aria-selected={activeCategory === cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`flex-shrink-0 px-4 py-1.5 rounded-full text-sm font-medium tracking-[-0.01em] transition-all duration-200 border ${
                    activeCategory === cat
                      ? "bg-accent text-white border-accent"
                      : "bg-surface text-text-secondary border-border/40 hover:text-text hover:border-border"
                  }`}
                  style={activeCategory === cat ? { backgroundColor: "var(--color-accent)" } : undefined}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* ── Video grid ───────────────────────────────────────────────── */}
        <section
          className="py-14 px-6 lg:px-10"
          aria-label="Video tutoriály"
          role="tabpanel"
        >
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {filtered.map((video, i) => (
                <ScrollReveal key={video.id} delay={i * 50}>
                  <style>{`
                    .vid-gradient-${video.id} { background: ${video.gradientLight}; }
                    .dark .vid-gradient-${video.id} { background: ${video.gradientDark}; }
                  `}</style>
                  <article className="group bg-surface rounded-3xl border border-border/40 dark:border-border/80 overflow-hidden flex flex-col card-hover shadow-[0_1px_3px_rgba(0,0,0,0.04)] dark:shadow-[0_1px_4px_rgba(0,0,0,0.35)]">
                    {/* Thumbnail */}
                    <div
                      className={`h-36 w-full flex items-center justify-center relative vid-gradient-${video.id}`}
                      aria-hidden="true"
                    >
                      <PlayButton />
                      {/* Duration badge */}
                      <span className="absolute bottom-2.5 right-3 text-[11px] font-semibold text-white bg-black/50 backdrop-blur-sm px-1.5 py-0.5 rounded-md tracking-[-0.01em]">
                        {video.duration}
                      </span>
                    </div>

                    {/* Card body */}
                    <div className="p-5 flex flex-col flex-1 gap-3">
                      <div className="flex items-start justify-between gap-2">
                        <h2 className="text-sm font-semibold text-text tracking-[-0.02em] leading-tight flex-1">
                          {video.title}
                        </h2>
                        <span className={`flex-shrink-0 inline-flex items-center text-[10px] font-medium px-2 py-0.5 rounded-full border ${categoryColors[video.category]}`}>
                          {video.category}
                        </span>
                      </div>
                    </div>
                  </article>
                </ScrollReveal>
              ))}
            </div>

            {filtered.length === 0 && (
              <div className="text-center py-20">
                <p className="text-text-secondary text-sm tracking-[-0.01em]">
                  Žádná videa v této kategorii.
                </p>
              </div>
            )}
          </div>
        </section>

        {/* ── YouTube CTA ───────────────────────────────────────────────── */}
        <section className="py-24 px-6 lg:px-10 text-center border-t border-border/30" aria-labelledby="videa-cta">
          <ScrollReveal>
            <div className="max-w-xl mx-auto">
              <h2
                id="videa-cta"
                className="text-3xl sm:text-4xl font-semibold text-text tracking-[-0.03em] mb-5"
              >
                Nová videa každý týden
              </h2>
              <p className="text-text-secondary tracking-[-0.01em] mb-8">
                Odebírejte náš YouTube kanál a dostávejte notifikace o nových tutoriálech.
              </p>
              <a
                href="https://youtube.com/@webihned"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 text-sm font-medium px-8 py-3.5 rounded-full text-white tracking-[-0.01em] transition-opacity duration-200 hover:opacity-90"
                style={{ backgroundColor: "var(--color-accent)" }}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.6 12 3.6 12 3.6s-7.5 0-9.4.5A3 3 0 0 0 .5 6.2 31.2 31.2 0 0 0 0 12a31.2 31.2 0 0 0 .5 5.8 3 3 0 0 0 2.1 2.1c1.9.5 9.4.5 9.4.5s7.5 0 9.4-.5a3 3 0 0 0 2.1-2.1A31.2 31.2 0 0 0 24 12a31.2 31.2 0 0 0-.5-5.8zM9.7 15.5V8.5l6.3 3.5-6.3 3.5z" />
                </svg>
                Odebírat na YouTube
              </a>
            </div>
          </ScrollReveal>
        </section>

      </main>
      <Footer />
    </>
  );
}
