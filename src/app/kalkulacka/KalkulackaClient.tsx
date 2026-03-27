"use client";

import { useState, useMemo } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";

// ── Cost matrix ───────────────────────────────────────────────────────────────

type Complexity = "simple" | "medium" | "complex";
type TeamType = "internal" | "agency";

const COMPLEXITY_COST: Record<Complexity, number> = {
  simple: 200_000,
  medium: 500_000,
  complex: 1_000_000,
};

const COMPLEXITY_LABELS: Record<Complexity, string> = {
  simple: "Jednoduchá",
  medium: "Střední",
  complex: "Komplexní",
};

const TEAM_MULTIPLIER: Record<TeamType, number> = {
  internal: 1.0,
  agency: 1.5,
};

const WEBIHNED_MONTHLY = 990; // Kč/měsíc per app

// ── Helpers ───────────────────────────────────────────────────────────────────

function formatKc(value: number): string {
  return new Intl.NumberFormat("cs-CZ", {
    style: "currency",
    currency: "CZK",
    maximumFractionDigits: 0,
  }).format(value);
}

// ── Page ──────────────────────────────────────────────────────────────────────

export default function KalkulackaClient() {
  const [appCount, setAppCount] = useState(5);
  const [complexity, setComplexity] = useState<Complexity>("medium");
  const [teamType, setTeamType] = useState<TeamType>("internal");

  const { traditionalCost, webIhnedCost, savings, ratio } = useMemo(() => {
    const traditionalCost =
      appCount *
      COMPLEXITY_COST[complexity] *
      TEAM_MULTIPLIER[teamType];
    const webIhnedCost = appCount * WEBIHNED_MONTHLY * 12;
    const savings = traditionalCost - webIhnedCost;
    const ratio = Math.round(traditionalCost / webIhnedCost);
    return { traditionalCost, webIhnedCost, savings, ratio };
  }, [appCount, complexity, teamType]);

  return (
    <>
      <Navbar />
      <main id="main-content">

        {/* ── Hero ─────────────────────────────────────────────────────── */}
        <section className="hero-gradient pt-24 pb-20 px-6 lg:px-10 text-center">
          <div className="max-w-3xl mx-auto">
            <ScrollReveal>
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-accent/30 bg-accent/5 text-accent text-xs font-medium tracking-[-0.01em] mb-8">
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <rect x="2" y="3" width="20" height="14" rx="2" />
                  <path d="M8 21h8M12 17v4" />
                </svg>
                ROI kalkulačka
              </div>
            </ScrollReveal>

            <ScrollReveal delay={60}>
              <h1 className="text-4xl sm:text-5xl lg:text-[64px] font-semibold text-text tracking-[-0.035em] leading-[1.05] mb-6">
                Kolik{" "}
                <em
                  style={{ fontFamily: "var(--font-serif)", fontStyle: "italic" }}
                >
                  ušetříte?
                </em>
              </h1>
            </ScrollReveal>

            <ScrollReveal delay={120}>
              <p className="text-lg text-text-secondary leading-relaxed tracking-[-0.01em] max-w-2xl mx-auto">
                Porovnejte náklady tradičního vývoje s webihned.cz.
              </p>
            </ScrollReveal>
          </div>
        </section>

        {/* ── Calculator ───────────────────────────────────────────────── */}
        <section
          className="py-16 px-6 lg:px-10"
          aria-labelledby="calculator-heading"
        >
          <h2 id="calculator-heading" className="sr-only">
            Kalkulačka úspor
          </h2>
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">

              {/* ── Inputs ─────────────────────────────────────────── */}
              <ScrollReveal>
                <div className="bg-surface rounded-3xl border border-border/40 p-8 flex flex-col gap-8">
                  <h3 className="text-lg font-semibold text-text tracking-[-0.02em]">
                    Nastavte parametry
                  </h3>

                  {/* Slider: počet aplikací */}
                  <div>
                    <div className="flex justify-between items-baseline mb-3">
                      <label
                        htmlFor="app-count"
                        className="text-sm font-medium text-text tracking-[-0.01em]"
                      >
                        Počet aplikací ročně
                      </label>
                      <span className="text-2xl font-semibold text-accent tracking-[-0.03em]">
                        {appCount}
                      </span>
                    </div>
                    <input
                      id="app-count"
                      type="range"
                      min={1}
                      max={20}
                      step={1}
                      value={appCount}
                      onChange={(e) => setAppCount(Number(e.target.value))}
                      className="w-full h-2 rounded-full appearance-none cursor-pointer bg-border accent-[var(--color-accent)]"
                      aria-valuemin={1}
                      aria-valuemax={20}
                      aria-valuenow={appCount}
                      aria-valuetext={`${appCount} aplikací`}
                    />
                    <div className="flex justify-between text-xs text-text-secondary mt-1.5">
                      <span>1</span>
                      <span>20</span>
                    </div>
                  </div>

                  {/* Select: složitost */}
                  <div>
                    <p
                      className="text-sm font-medium text-text tracking-[-0.01em] mb-3"
                      id="complexity-label"
                    >
                      Průměrná složitost
                    </p>
                    <div
                      className="grid grid-cols-3 gap-2"
                      role="radiogroup"
                      aria-labelledby="complexity-label"
                    >
                      {(
                        Object.entries(COMPLEXITY_LABELS) as [
                          Complexity,
                          string,
                        ][]
                      ).map(([key, label]) => (
                        <button
                          key={key}
                          type="button"
                          role="radio"
                          aria-checked={complexity === key}
                          onClick={() => setComplexity(key)}
                          className={`py-2.5 px-3 rounded-xl text-sm font-medium tracking-[-0.01em] border transition-all duration-150 ${
                            complexity === key
                              ? "bg-accent/10 border-accent/40 text-accent"
                              : "bg-bg border-border/40 text-text-secondary hover:border-border"
                          }`}
                        >
                          {label}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Toggle: tým */}
                  <div>
                    <p
                      className="text-sm font-medium text-text tracking-[-0.01em] mb-3"
                      id="team-label"
                    >
                      Interní tým nebo agentura?
                    </p>
                    <div
                      className="grid grid-cols-2 gap-2"
                      role="radiogroup"
                      aria-labelledby="team-label"
                    >
                      {(
                        [
                          ["internal", "Interní tým"],
                          ["agency", "Agentura"],
                        ] as [TeamType, string][]
                      ).map(([key, label]) => (
                        <button
                          key={key}
                          type="button"
                          role="radio"
                          aria-checked={teamType === key}
                          onClick={() => setTeamType(key)}
                          className={`py-2.5 px-4 rounded-xl text-sm font-medium tracking-[-0.01em] border transition-all duration-150 ${
                            teamType === key
                              ? "bg-accent/10 border-accent/40 text-accent"
                              : "bg-bg border-border/40 text-text-secondary hover:border-border"
                          }`}
                        >
                          {label}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </ScrollReveal>

              {/* ── Results ────────────────────────────────────────── */}
              <ScrollReveal delay={80}>
                <div className="bg-surface rounded-3xl border border-border/40 p-8 flex flex-col gap-6">
                  <h3 className="text-lg font-semibold text-text tracking-[-0.02em]">
                    Váš výsledek
                  </h3>

                  {/* Traditional cost */}
                  <div className="bg-bg rounded-2xl border border-border/40 px-6 py-5">
                    <p className="text-xs font-medium text-text-secondary tracking-[-0.01em] uppercase mb-1">
                      Tradiční vývoj
                    </p>
                    <p className="text-2xl font-semibold text-text tracking-[-0.03em]">
                      {formatKc(traditionalCost)}
                      <span className="text-sm font-normal text-text-secondary ml-1">
                        /rok
                      </span>
                    </p>
                  </div>

                  {/* webihned cost */}
                  <div className="bg-bg rounded-2xl border border-border/40 px-6 py-5">
                    <p className="text-xs font-medium text-text-secondary tracking-[-0.01em] uppercase mb-1">
                      S webihned.cz
                    </p>
                    <p className="text-2xl font-semibold text-text tracking-[-0.03em]">
                      {formatKc(webIhnedCost)}
                      <span className="text-sm font-normal text-text-secondary ml-1">
                        /rok
                      </span>
                    </p>
                  </div>

                  {/* Savings — highlighted */}
                  <div
                    className="bg-accent/8 rounded-2xl border border-accent/20 px-6 py-6 text-center"
                    aria-live="polite"
                    aria-atomic="true"
                  >
                    <p className="text-xs font-medium text-accent tracking-[-0.01em] uppercase mb-2">
                      Ušetříte
                    </p>
                    <p className="text-4xl sm:text-5xl font-semibold tracking-[-0.04em] mb-1.5" style={{ color: "var(--color-accent)" }}>
                      {formatKc(savings)}
                    </p>
                    <p className="text-sm text-text-secondary tracking-[-0.01em]">
                      /rok — to je{" "}
                      <strong className="text-text font-semibold">
                        {ratio}x méně
                      </strong>{" "}
                      než tradiční vývoj
                    </p>
                  </div>

                  {/* CTA */}
                  <a
                    href="/pricing"
                    className="inline-flex items-center justify-center gap-2 w-full text-sm font-medium px-6 py-3.5 rounded-xl text-white tracking-[-0.01em] transition-colors duration-200 mt-1"
                    style={{ backgroundColor: "var(--color-accent)" }}
                  >
                    Začít šetřit
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      aria-hidden="true"
                    >
                      <path
                        d="M3 8h10M9 4l4 4-4 4"
                        stroke="currentColor"
                        strokeWidth="1.6"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </a>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* ── Disclaimer ───────────────────────────────────────────────── */}
        <section className="pb-16 px-6 lg:px-10">
          <div className="max-w-5xl mx-auto">
            <ScrollReveal>
              <p className="text-xs text-text-secondary text-center tracking-[-0.01em] leading-relaxed">
                Odhady jsou orientační. Tradiční ceny vývoje vycházejí z průměrných sazeb na českém trhu
                (interní tým: 200–1 000 Kč/h; agentura: 1,5× násobek). Cena webihned.cz{" "}
                {formatKc(WEBIHNED_MONTHLY)}/měsíc za aplikaci.
              </p>
            </ScrollReveal>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
