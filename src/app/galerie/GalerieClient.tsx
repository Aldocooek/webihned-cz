"use client";

import { useState } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";

// ── Types ─────────────────────────────────────────────────────────────────────

type AppCategory = "Vše" | "SaaS" | "E-commerce" | "Interní nástroje" | "Portfolio";

interface AppProject {
  id: number;
  name: string;
  author: string;
  category: Exclude<AppCategory, "Vše">;
  description: string;
  hearts: number;
  gradientLight: string;
  gradientDark: string;
}

// ── Data ──────────────────────────────────────────────────────────────────────

const apps: AppProject[] = [
  {
    id: 1,
    name: "TaskFlow",
    author: "Jan Novák",
    category: "SaaS",
    description: "Správa projektů a úkolů pro týmy",
    hearts: 247,
    gradientLight: "linear-gradient(135deg, #fce7f3 0%, #fdf2f8 50%, #ede9fe 100%)",
    gradientDark: "linear-gradient(135deg, rgba(190,24,93,0.18) 0%, rgba(131,24,67,0.1) 50%, rgba(76,29,149,0.1) 100%)",
  },
  {
    id: 2,
    name: "FitTrack",
    author: "Petra Králová",
    category: "SaaS",
    description: "Fitness tracking s AI trenérem",
    hearts: 183,
    gradientLight: "linear-gradient(135deg, #d1fae5 0%, #ecfdf5 50%, #cffafe 100%)",
    gradientDark: "linear-gradient(135deg, rgba(6,78,59,0.2) 0%, rgba(6,95,70,0.1) 50%, rgba(8,51,68,0.1) 100%)",
  },
  {
    id: 3,
    name: "Kvěťák",
    author: "Tomáš Veselý",
    category: "E-commerce",
    description: "Online květinářství s doručením",
    hearts: 312,
    gradientLight: "linear-gradient(135deg, #fce7f3 0%, #fee2e2 50%, #fff7ed 100%)",
    gradientDark: "linear-gradient(135deg, rgba(190,24,93,0.18) 0%, rgba(127,29,29,0.1) 50%, rgba(124,45,18,0.1) 100%)",
  },
  {
    id: 4,
    name: "InvoicePro",
    author: "Eva Němcová",
    category: "SaaS",
    description: "Fakturace a účetnictví pro OSVČ",
    hearts: 95,
    gradientLight: "linear-gradient(135deg, #ede9fe 0%, #f5f3ff 50%, #dbeafe 100%)",
    gradientDark: "linear-gradient(135deg, rgba(76,29,149,0.2) 0%, rgba(91,33,182,0.1) 50%, rgba(30,58,138,0.1) 100%)",
  },
  {
    id: 5,
    name: "BookNow",
    author: "Martin Dvořák",
    category: "SaaS",
    description: "Rezervační systém pro služby",
    hearts: 271,
    gradientLight: "linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 50%, #dbeafe 100%)",
    gradientDark: "linear-gradient(135deg, rgba(8,47,73,0.2) 0%, rgba(12,74,110,0.1) 50%, rgba(30,58,138,0.1) 100%)",
  },
  {
    id: 6,
    name: "DesignPortfolio",
    author: "Karolína Šimková",
    category: "Portfolio",
    description: "Designérské portfolio",
    hearts: 156,
    gradientLight: "linear-gradient(135deg, #fff7ed 0%, #fef3c7 50%, #fef9c3 100%)",
    gradientDark: "linear-gradient(135deg, rgba(124,45,18,0.18) 0%, rgba(146,64,14,0.1) 50%, rgba(113,63,18,0.1) 100%)",
  },
  {
    id: 7,
    name: "StockManager",
    author: "Lukáš Procházka",
    category: "Interní nástroje",
    description: "Správa skladu a inventáře",
    hearts: 88,
    gradientLight: "linear-gradient(135deg, #ecfdf5 0%, #d1fae5 50%, #a7f3d0 100%)",
    gradientDark: "linear-gradient(135deg, rgba(6,78,59,0.2) 0%, rgba(5,46,22,0.15) 50%, rgba(2,44,34,0.1) 100%)",
  },
  {
    id: 8,
    name: "LearnCzech",
    author: "Anna Horáková",
    category: "SaaS",
    description: "Výuka češtiny pro cizince",
    hearts: 204,
    gradientLight: "linear-gradient(135deg, #fce7f3 0%, #fdf2f8 50%, #fee2e2 100%)",
    gradientDark: "linear-gradient(135deg, rgba(190,24,93,0.18) 0%, rgba(131,24,67,0.1) 50%, rgba(127,29,29,0.1) 100%)",
  },
  {
    id: 9,
    name: "GreenShop",
    author: "David Černý",
    category: "E-commerce",
    description: "Bio potraviny s doručením",
    hearts: 139,
    gradientLight: "linear-gradient(135deg, #d1fae5 0%, #a7f3d0 50%, #6ee7b7 100%)",
    gradientDark: "linear-gradient(135deg, rgba(6,78,59,0.25) 0%, rgba(5,46,22,0.15) 50%, rgba(2,44,34,0.1) 100%)",
  },
  {
    id: 10,
    name: "TeamBoard",
    author: "Markéta Svobodová",
    category: "Interní nástroje",
    description: "Kanban board pro marketing",
    hearts: 67,
    gradientLight: "linear-gradient(135deg, #fef9c3 0%, #fef3c7 50%, #fde68a 100%)",
    gradientDark: "linear-gradient(135deg, rgba(113,63,18,0.2) 0%, rgba(146,64,14,0.1) 50%, rgba(120,53,15,0.1) 100%)",
  },
  {
    id: 11,
    name: "PetCare",
    author: "Jakub Kučera",
    category: "SaaS",
    description: "Veterinární správa pacientů",
    hearts: 118,
    gradientLight: "linear-gradient(135deg, #ede9fe 0%, #e0e7ff 50%, #dbeafe 100%)",
    gradientDark: "linear-gradient(135deg, rgba(76,29,149,0.2) 0%, rgba(49,46,129,0.15) 50%, rgba(30,58,138,0.1) 100%)",
  },
  {
    id: 12,
    name: "MyBlog",
    author: "Tereza Pokorná",
    category: "Portfolio",
    description: "Osobní blog o cestování",
    hearts: 293,
    gradientLight: "linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 50%, #cffafe 100%)",
    gradientDark: "linear-gradient(135deg, rgba(8,47,73,0.2) 0%, rgba(8,51,68,0.1) 50%, rgba(8,51,68,0.1) 100%)",
  },
];

const categories: AppCategory[] = ["Vše", "SaaS", "E-commerce", "Interní nástroje", "Portfolio"];

const categoryColors: Record<Exclude<AppCategory, "Vše">, string> = {
  SaaS: "bg-accent/10 text-accent border-accent/20",
  "E-commerce": "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/20",
  "Interní nástroje": "bg-violet-500/10 text-violet-600 dark:text-violet-400 border-violet-500/20",
  Portfolio: "bg-amber-500/10 text-amber-600 dark:text-amber-400 border-amber-500/20",
};

// ── Page ──────────────────────────────────────────────────────────────────────

export default function GalerieClient() {
  const [activeCategory, setActiveCategory] = useState<AppCategory>("Vše");

  const filtered =
    activeCategory === "Vše"
      ? apps
      : apps.filter((a) => a.category === activeCategory);

  // Split into 3 columns for masonry-like layout on desktop
  const col1 = filtered.filter((_, i) => i % 3 === 0);
  const col2 = filtered.filter((_, i) => i % 3 === 1);
  const col3 = filtered.filter((_, i) => i % 3 === 2);

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
                  <rect x="3" y="3" width="18" height="18" rx="2" />
                  <circle cx="8.5" cy="8.5" r="1.5" />
                  <polyline points="21 15 16 10 5 21" />
                </svg>
                Galerie aplikací
              </div>
            </ScrollReveal>

            <ScrollReveal delay={60}>
              <h1 className="text-4xl sm:text-5xl lg:text-[64px] font-semibold text-text tracking-[-0.035em] leading-[1.05] mb-6">
                Co lidé{" "}
                <em style={{ fontFamily: "var(--font-serif)", fontStyle: "italic" }}>
                  tvoří
                </em>
              </h1>
            </ScrollReveal>

            <ScrollReveal delay={120}>
              <p className="text-lg text-text-secondary leading-relaxed tracking-[-0.01em] max-w-2xl mx-auto">
                Inspirujte se projekty vytvořenými na webihned.cz
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
              aria-label="Filtrovat aplikace podle kategorie"
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

        {/* ── Masonry grid ─────────────────────────────────────────────── */}
        <section
          className="py-14 px-6 lg:px-10"
          aria-label="Galerie aplikací"
          role="tabpanel"
        >
          <div className="max-w-7xl mx-auto">
            {/* Mobile: single column | Tablet: 2 cols | Desktop: 3 cols masonry */}
            <div className="hidden lg:grid lg:grid-cols-3 gap-5 items-start">
              {[col1, col2, col3].map((col, colIdx) => (
                <div key={colIdx} className="flex flex-col gap-5">
                  {col.map((app, i) => (
                    <AppCard key={app.id} app={app} delay={(colIdx + i) * 40} />
                  ))}
                </div>
              ))}
            </div>

            {/* Mobile / tablet fallback: regular grid */}
            <div className="lg:hidden grid grid-cols-1 sm:grid-cols-2 gap-5">
              {filtered.map((app, i) => (
                <AppCard key={app.id} app={app} delay={i * 50} />
              ))}
            </div>

            {filtered.length === 0 && (
              <div className="text-center py-20">
                <p className="text-text-secondary text-sm tracking-[-0.01em]">
                  Žádné aplikace v této kategorii.
                </p>
              </div>
            )}
          </div>
        </section>

        {/* ── Bottom CTA ────────────────────────────────────────────────── */}
        <section className="py-24 px-6 lg:px-10 text-center border-t border-border/30" aria-labelledby="galerie-cta">
          <ScrollReveal>
            <div className="max-w-xl mx-auto">
              <h2
                id="galerie-cta"
                className="text-3xl sm:text-4xl font-semibold text-text tracking-[-0.03em] mb-5"
              >
                Přidejte se k nim
              </h2>
              <p className="text-text-secondary tracking-[-0.01em] mb-8">
                Vytvořte svou aplikaci za méně než hodinu. Žádné zkušenosti s kódováním nejsou potřeba.
              </p>
              <Link
                href="/pricing"
                className="inline-flex items-center gap-2 text-sm font-medium px-8 py-3.5 rounded-full text-white tracking-[-0.01em] transition-opacity duration-200 hover:opacity-90"
                style={{ backgroundColor: "var(--color-accent)" }}
              >
                Vytvořte svou aplikaci
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M5 12h14" />
                  <path d="m12 5 7 7-7 7" />
                </svg>
              </Link>
            </div>
          </ScrollReveal>
        </section>

      </main>
      <Footer />
    </>
  );
}

// ── AppCard component ─────────────────────────────────────────────────────────

function AppCard({ app, delay }: { app: AppProject; delay: number }) {
  return (
    <ScrollReveal delay={delay}>
      <style>{`
        .app-gradient-${app.id} { background: ${app.gradientLight}; }
        .dark .app-gradient-${app.id} { background: ${app.gradientDark}; }
      `}</style>
      <article className="bg-surface rounded-3xl border border-border/40 dark:border-border/80 overflow-hidden card-hover shadow-[0_1px_3px_rgba(0,0,0,0.04)] dark:shadow-[0_1px_4px_rgba(0,0,0,0.35)]">
        {/* Gradient placeholder */}
        <div
          className={`h-40 w-full flex items-center justify-center app-gradient-${app.id}`}
          aria-hidden="true"
        >
          <div className="w-14 h-14 rounded-2xl bg-surface/80 dark:bg-surface/90 backdrop-blur-sm shadow-sm dark:shadow-[0_2px_8px_rgba(0,0,0,0.5)] flex items-center justify-center border border-white/10 dark:border-white/5">
            <span className="text-xl font-semibold text-text-secondary tracking-[-0.02em]">
              {app.name.slice(0, 2)}
            </span>
          </div>
        </div>

        {/* Card body */}
        <div className="p-5">
          <div className="flex items-start justify-between gap-3 mb-2">
            <div>
              <h2 className="text-base font-semibold text-text tracking-[-0.02em] leading-tight">
                {app.name}
              </h2>
              <p className="text-xs text-text-secondary tracking-[-0.01em] mt-0.5">
                od {app.author}
              </p>
            </div>
            <span className={`flex-shrink-0 inline-flex items-center text-[10px] font-medium px-2 py-0.5 rounded-full border ${categoryColors[app.category]}`}>
              {app.category}
            </span>
          </div>

          <p className="text-sm text-text-secondary leading-relaxed tracking-[-0.01em] mb-4">
            {app.description}
          </p>

          {/* Hearts */}
          <div className="flex items-center gap-1.5 text-xs text-text-secondary tracking-[-0.01em]">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="text-accent">
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
            </svg>
            <span>
              <span className="font-medium text-text">{app.hearts}</span> lidem se líbí
            </span>
          </div>
        </div>
      </article>
    </ScrollReveal>
  );
}
