"use client";

import { useState } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";

// ── Types ─────────────────────────────────────────────────────────────────────

type CompetitorId = "lovable" | "bolt" | "v0";

interface ComparisonRow {
  feature: string;
  us: string;
  them: string;
  usWins: boolean;
}

interface Competitor {
  id: CompetitorId;
  name: string;
  rows: ComparisonRow[];
}

// ── Data ──────────────────────────────────────────────────────────────────────

const competitors: Competitor[] = [
  {
    id: "lovable",
    name: "Lovable",
    rows: [
      { feature: "Cena od", us: "0 Kč", them: "$0 (cca 580 Kč)", usWins: true },
      { feature: "Český jazyk", us: "Plná podpora", them: "Pouze angličtina", usWins: true },
      { feature: "EU hosting", us: "Ano", them: "Ano", usWins: false },
      { feature: "GitHub sync", us: "Ano", them: "Ano", usWins: false },
      { feature: "Vlastní doména", us: "Od Starter", them: "Od Pro ($25/měs)", usWins: true },
      { feature: "Česká podpora", us: "Ano", them: "Ne", usWins: true },
    ],
  },
  {
    id: "bolt",
    name: "Bolt.new",
    rows: [
      { feature: "Cena od", us: "0 Kč", them: "$0", usWins: false },
      { feature: "Český jazyk", us: "Plná podpora", them: "Ne", usWins: true },
      { feature: "Backend generování", us: "Ano", them: "Ano", usWins: false },
      { feature: "Vestavěná DB", us: "Ano", them: "Ano", usWins: false },
      { feature: "Custom doména", us: "Od Starter", them: "Od Pro ($25/měs)", usWins: true },
      { feature: "EU data residency", us: "Ano", them: "Ne", usWins: true },
    ],
  },
  {
    id: "v0",
    name: "v0.dev",
    rows: [
      { feature: "Cena od", us: "0 Kč", them: "$0", usWins: false },
      { feature: "Full-stack", us: "Ano", them: "Pouze frontend", usWins: true },
      { feature: "Databáze", us: "Vestavěná", them: "Vyžaduje externí", usWins: true },
      { feature: "Hosting", us: "Vestavěný", them: "Pouze Vercel", usWins: true },
      { feature: "Český jazyk", us: "Ano", them: "Ne", usWins: true },
    ],
  },
];

// ── Sub-components ────────────────────────────────────────────────────────────

function CheckIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M20 6L9 17L4 12" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function ComparisonCard({ competitor }: { competitor: Competitor }) {
  const usWinsCount = competitor.rows.filter((r) => r.usWins).length;

  return (
    <ScrollReveal>
      <div className="bg-surface rounded-3xl border border-border/40 overflow-hidden shadow-[0_1px_3px_rgba(0,0,0,0.04)]">
        {/* Card header */}
        <div className="px-8 py-6 border-b border-border/40 flex items-center justify-between gap-4">
          <h2 className="text-lg font-semibold text-text tracking-[-0.025em]">
            webihned.cz vs{" "}
            <span className="text-text-secondary font-normal">{competitor.name}</span>
          </h2>
          <div
            className="flex-shrink-0 inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-full text-white"
            style={{ backgroundColor: "var(--color-accent)" }}
          >
            <CheckIcon />
            {usWinsCount} naše výhod{usWinsCount === 1 ? "a" : usWinsCount < 5 ? "y" : ""}
          </div>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full min-w-[480px]" aria-label={`Srovnání webihned.cz a ${competitor.name}`}>
            <thead>
              <tr className="border-b border-border/40">
                <th scope="col" className="py-3.5 px-8 text-left text-xs font-semibold text-text-secondary tracking-[0.04em] uppercase w-1/3">
                  Funkce
                </th>
                <th scope="col" className="py-3.5 px-6 text-left text-xs font-semibold tracking-[0.04em] uppercase w-1/3" style={{ color: "var(--color-accent)" }}>
                  webihned.cz
                </th>
                <th scope="col" className="py-3.5 px-6 text-left text-xs font-semibold text-text-secondary tracking-[0.04em] uppercase w-1/3">
                  {competitor.name}
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border/30">
              {competitor.rows.map((row, i) => (
                <tr
                  key={row.feature}
                  className={i % 2 === 0 ? "bg-transparent" : "bg-border/5"}
                >
                  <td className="py-4 px-8 text-sm text-text-secondary tracking-[-0.01em]">
                    {row.feature}
                  </td>
                  <td className="py-4 px-6">
                    <div className="flex items-center gap-2">
                      <span
                        className="text-sm font-medium tracking-[-0.01em]"
                        style={{ color: "var(--color-accent)" }}
                      >
                        {row.us}
                      </span>
                      {row.usWins && (
                        <span
                          className="inline-flex items-center gap-1 text-[10px] font-semibold px-2 py-0.5 rounded-full text-white whitespace-nowrap"
                          style={{ backgroundColor: "var(--color-accent)" }}
                        >
                          <CheckIcon />
                          Naše výhoda
                        </span>
                      )}
                    </div>
                  </td>
                  <td className="py-4 px-6 text-sm text-text-secondary tracking-[-0.01em]">
                    {row.them}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </ScrollReveal>
  );
}

// ── Page ──────────────────────────────────────────────────────────────────────

export default function PorovnaniClient() {
  const [activeTab, setActiveTab] = useState<CompetitorId>("lovable");

  const activeCompetitor = competitors.find((c) => c.id === activeTab)!;

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
                  <path d="M18 20V10M12 20V4M6 20v-6" />
                </svg>
                Porovnání
              </div>
            </ScrollReveal>

            <ScrollReveal delay={60}>
              <h1 className="text-4xl sm:text-5xl lg:text-[64px] font-semibold text-text tracking-[-0.035em] leading-[1.05] mb-6">
                Jak si stojíme{" "}
                <em style={{ fontFamily: "var(--font-serif)", fontStyle: "italic" }}>
                  v porovnání
                </em>
              </h1>
            </ScrollReveal>

            <ScrollReveal delay={120}>
              <p className="text-lg text-text-secondary leading-relaxed tracking-[-0.01em] max-w-xl mx-auto">
                Objektivní srovnání s předními AI platformami.
              </p>
            </ScrollReveal>
          </div>
        </section>

        {/* ── Tabs ──────────────────────────────────────────────────────── */}
        <section className="px-6 lg:px-10 pb-0" aria-label="Výběr konkurenta pro porovnání">
          <div className="max-w-5xl mx-auto">
            <ScrollReveal>
              <div
                className="flex items-center gap-2 justify-center py-4"
                role="tablist"
                aria-label="Porovnání s konkurenty"
              >
                {competitors.map((c) => (
                  <button
                    key={c.id}
                    role="tab"
                    aria-selected={activeTab === c.id}
                    aria-controls={`panel-${c.id}`}
                    id={`tab-${c.id}`}
                    onClick={() => setActiveTab(c.id)}
                    className={`px-5 py-2 rounded-full text-sm font-medium tracking-[-0.01em] transition-all duration-200 border ${
                      activeTab === c.id
                        ? "bg-accent text-white border-accent"
                        : "bg-surface text-text-secondary border-border/40 hover:text-text hover:border-border"
                    }`}
                    style={activeTab === c.id ? { backgroundColor: "var(--color-accent)" } : undefined}
                  >
                    vs {c.name}
                  </button>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* ── Active comparison ─────────────────────────────────────────── */}
        <section
          className="py-10 px-6 lg:px-10"
          id={`panel-${activeTab}`}
          role="tabpanel"
          aria-labelledby={`tab-${activeTab}`}
        >
          <div className="max-w-5xl mx-auto">
            <ComparisonCard competitor={activeCompetitor} />
          </div>
        </section>

        {/* ── Trust bar ─────────────────────────────────────────────────── */}
        <section className="py-16 px-6 lg:px-10 border-t border-border/30" aria-label="Klíčové výhody">
          <div className="max-w-5xl mx-auto">
            <ScrollReveal>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                {[
                  {
                    icon: (
                      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <path d="M12 2L2 7l10 5 10-5-10-5z" />
                        <path d="M2 17l10 5 10-5" />
                        <path d="M2 12l10 5 10-5" />
                      </svg>
                    ),
                    title: "Česky od základu",
                    desc: "Celá platforma, dokumentace i podpora v češtině. Žádné překlady, žádné překvapení.",
                  },
                  {
                    icon: (
                      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <rect x="3" y="11" width="18" height="11" rx="2" />
                        <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                      </svg>
                    ),
                    title: "EU data residency",
                    desc: "Vaše data v EU. GDPR compliance bez kompromisů — žádný přenos do USA.",
                  },
                  {
                    icon: (
                      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <circle cx="12" cy="12" r="10" />
                        <path d="M12 6v6l4 2" />
                      </svg>
                    ),
                    title: "Levnější od dne 1",
                    desc: "Free tier bez skrytých limitů. Platíte méně než u zahraniční konkurence — v korunách.",
                  },
                ].map((item) => (
                  <div key={item.title} className="bg-surface rounded-2xl border border-border/40 p-6 flex flex-col gap-4">
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center"
                      style={{ backgroundColor: "var(--color-accent-light)", color: "var(--color-accent)" }}
                    >
                      {item.icon}
                    </div>
                    <div>
                      <h3 className="text-sm font-semibold text-text tracking-[-0.02em] mb-1.5">
                        {item.title}
                      </h3>
                      <p className="text-xs text-text-secondary leading-relaxed tracking-[-0.01em]">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* ── Bottom CTA ────────────────────────────────────────────────── */}
        <section className="py-24 px-6 lg:px-10 text-center border-t border-border/30" aria-labelledby="porovnani-cta">
          <ScrollReveal>
            <div className="max-w-xl mx-auto">
              <h2
                id="porovnani-cta"
                className="text-3xl sm:text-4xl font-semibold text-text tracking-[-0.03em] mb-5"
              >
                Přesvědčte se sami
              </h2>
              <p className="text-text-secondary tracking-[-0.01em] mb-8">
                Zdarma. Česky. První aplikace za minuty.
              </p>
              <Link
                href="/pricing"
                className="inline-flex items-center gap-2 bg-accent text-white text-sm font-medium px-8 py-3.5 rounded-full tracking-[-0.01em] hover:opacity-90 transition-opacity duration-200"
                style={{ backgroundColor: "var(--color-accent)" }}
              >
                Začít zdarma
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
