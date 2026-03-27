"use client";

import { useState } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import { templates as templateData } from "@/data/templates";

// ── Types ─────────────────────────────────────────────────────────────────────

type Category = "Vše" | "SaaS" | "E-commerce" | "Interní nástroje" | "Portfolio" | "Blog";

interface Template {
  id: number;
  slug: string;
  name: string;
  category: Exclude<Category, "Vše">;
  description: string;
  gradientLight: string;
  gradientDark: string;
}

// ── Data — derived from shared data file ──────────────────────────────────────

const templates: Template[] = templateData.map((t, i) => ({
  id: i + 1,
  slug: t.slug,
  name: t.name,
  category: t.category,
  description: t.description,
  gradientLight: t.gradientLight,
  gradientDark: t.gradientDark,
}));

const categories: Category[] = ["Vše", "SaaS", "E-commerce", "Interní nástroje", "Portfolio", "Blog"];

const categoryColors: Record<Exclude<Category, "Vše">, string> = {
  SaaS: "bg-accent/10 text-accent border-accent/20",
  "E-commerce": "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/20",
  "Interní nástroje": "bg-violet-500/10 text-violet-600 dark:text-violet-400 border-violet-500/20",
  Portfolio: "bg-amber-500/10 text-amber-600 dark:text-amber-400 border-amber-500/20",
  Blog: "bg-sky-500/10 text-sky-600 dark:text-sky-400 border-sky-500/20",
};

// ── Page ──────────────────────────────────────────────────────────────────────

export default function SablonyClient() {
  const [activeCategory, setActiveCategory] = useState<Category>("Vše");

  const filtered =
    activeCategory === "Vše"
      ? templates
      : templates.filter((t) => t.category === activeCategory);

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
                  <rect x="3" y="3" width="7" height="7" rx="1" />
                  <rect x="14" y="3" width="7" height="7" rx="1" />
                  <rect x="3" y="14" width="7" height="7" rx="1" />
                  <rect x="14" y="14" width="7" height="7" rx="1" />
                </svg>
                Šablony
              </div>
            </ScrollReveal>

            <ScrollReveal delay={60}>
              <h1 className="text-4xl sm:text-5xl lg:text-[64px] font-semibold text-text tracking-[-0.035em] leading-[1.05] mb-6">
                Začněte z{" "}
                <em style={{ fontFamily: "var(--font-serif)", fontStyle: "italic" }}>
                  šablony
                </em>
              </h1>
            </ScrollReveal>

            <ScrollReveal delay={120}>
              <p className="text-lg text-text-secondary leading-relaxed tracking-[-0.01em] max-w-xl mx-auto">
                Vyberte si z připravených šablon a přizpůsobte ji svým potřebám.
              </p>
            </ScrollReveal>
          </div>
        </section>

        {/* ── Filter tabs ───────────────────────────────────────────────── */}
        <section className="px-6 lg:px-10 pb-4 sticky top-16 z-10 bg-bg/80 backdrop-blur-sm border-b border-border/30">
          <div className="max-w-7xl mx-auto">
            <ScrollReveal>
              <div
                className="flex items-center gap-2 py-4 overflow-x-auto scrollbar-hide"
                role="tablist"
                aria-label="Filtrovat šablony podle kategorie"
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
            </ScrollReveal>
          </div>
        </section>

        {/* ── Grid ──────────────────────────────────────────────────────── */}
        <section
          className="py-14 px-6 lg:px-10"
          aria-label="Galerie šablon"
          role="tabpanel"
        >
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filtered.map((template, i) => (
                <ScrollReveal key={template.id} delay={i * 60}>
                  <article className="card-hover bg-surface rounded-3xl border border-border/40 dark:border-border/80 overflow-hidden flex flex-col shadow-[0_1px_3px_rgba(0,0,0,0.04)] dark:shadow-[0_1px_4px_rgba(0,0,0,0.35)]">
                    {/* Gradient top */}
                    <style>{`
                      .template-gradient-${template.id} {
                        background: ${template.gradientLight};
                      }
                      .dark .template-gradient-${template.id} {
                        background: ${template.gradientDark};
                      }
                    `}</style>
                    <div
                      className={`h-40 w-full flex items-center justify-center template-gradient-${template.id}`}
                      aria-hidden="true"
                    >
                      <div className="w-12 h-12 rounded-2xl bg-surface/80 dark:bg-surface/90 backdrop-blur-sm shadow-sm dark:shadow-[0_2px_8px_rgba(0,0,0,0.5)] flex items-center justify-center border border-white/10 dark:border-white/5">
                        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-text-secondary" aria-hidden="true">
                          <rect x="3" y="3" width="18" height="18" rx="3" />
                          <path d="M3 9h18M9 21V9" />
                        </svg>
                      </div>
                    </div>

                    {/* Card body */}
                    <div className="p-6 flex flex-col flex-1">
                      <div className="flex items-start justify-between gap-3 mb-3">
                        <h2 className="text-base font-semibold text-text tracking-[-0.02em] leading-tight">
                          {template.name}
                        </h2>
                        <span
                          className={`flex-shrink-0 inline-flex items-center text-[11px] font-medium px-2 py-0.5 rounded-full border ${categoryColors[template.category]}`}
                        >
                          {template.category}
                        </span>
                      </div>

                      <p className="text-sm text-text-secondary leading-relaxed tracking-[-0.01em] flex-1 mb-5">
                        {template.description}
                      </p>

                      <Link
                        href={`/sablony/${template.slug}`}
                        className="block w-full text-center text-sm font-medium py-2.5 rounded-full border border-border/60 dark:border-border text-text hover:border-accent hover:text-accent transition-all duration-200 tracking-[-0.01em]"
                        aria-label={`Použít šablonu ${template.name}`}
                      >
                        Použít šablonu
                      </Link>
                    </div>
                  </article>
                </ScrollReveal>
              ))}
            </div>

            {filtered.length === 0 && (
              <div className="text-center py-20">
                <p className="text-text-secondary text-sm tracking-[-0.01em]">
                  Žádné šablony v této kategorii.
                </p>
              </div>
            )}
          </div>
        </section>

        {/* ── Bottom CTA ────────────────────────────────────────────────── */}
        <section className="py-24 px-6 lg:px-10 text-center border-t border-border/30" aria-labelledby="sablony-cta">
          <ScrollReveal>
            <div className="max-w-xl mx-auto">
              <h2
                id="sablony-cta"
                className="text-3xl sm:text-4xl font-semibold text-text tracking-[-0.03em] mb-5"
              >
                Nenašli jste vhodnou šablonu?
              </h2>
              <p className="text-text-secondary tracking-[-0.01em] mb-8">
                Popište svůj projekt AI asistentovi a on vytvoří aplikaci přesně na míru.
              </p>
              <Link
                href="/pricing"
                className="inline-flex items-center gap-2 bg-accent text-white text-sm font-medium px-8 py-3.5 rounded-full tracking-[-0.01em] hover:opacity-90 transition-opacity duration-200"
                style={{ backgroundColor: "var(--color-accent)" }}
              >
                Začít od nuly
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
