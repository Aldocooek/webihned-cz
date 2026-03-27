import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import { caseStudies as caseStudiesData } from "@/data/case-studies";

// ── Metadata ──────────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  title: "Případové studie | webihned.cz",
  description:
    "Jak čeští podnikatelé využívají webihned.cz — příběhy úspěchu, výsledky a čísla od skutečných zákazníků.",
  alternates: {
    canonical: "/pripadove-studie",
  },
  openGraph: {
    title: "Případové studie | webihned.cz",
    description:
      "Jak čeští podnikatelé využívají webihned.cz — příběhy úspěchu, výsledky a čísla.",
    url: "https://webihned.cz/pripadove-studie",
    siteName: "webihned.cz",
    type: "website",
    locale: "cs_CZ",
  },
};

// ── Types ─────────────────────────────────────────────────────────────────────

interface Stat {
  value: string;
  label: string;
}

interface CaseStudy {
  id: number;
  slug: string;
  company: string;
  initials: string;
  industry: string;
  title: string;
  quote: string;
  stats: Stat[];
  avatarColor: string;
  avatarTextColor: string;
}

// ── Data — derived from shared data file ──────────────────────────────────────

const caseStudies: CaseStudy[] = caseStudiesData.map((cs, i) => ({
  id: i + 1,
  slug: cs.slug,
  company: cs.company,
  initials: cs.initials,
  industry: cs.industry,
  title: cs.title,
  quote: cs.quote,
  stats: cs.results,
  avatarColor: cs.avatarColor,
  avatarTextColor: cs.avatarTextColor,
}));

const industryColors: Record<string, string> = {
  SaaS: "bg-accent/10 text-accent border-accent/20",
  "Interní nástroje": "bg-violet-500/10 text-violet-600 dark:text-violet-400 border-violet-500/20",
  "E-commerce": "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/20",
};

// ── Page ──────────────────────────────────────────────────────────────────────

export default function PripadoveStudiePage() {
  return (
    <>
      <Navbar />
      <main id="main-content">

        {/* ── Hero ──────────────────────────────────────────────────────── */}
        <section className="hero-gradient pt-24 pb-20 px-6 lg:px-10 text-center">
          <div className="max-w-3xl mx-auto">
            <ScrollReveal>
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-accent/30 bg-accent/5 text-accent text-xs font-medium tracking-[-0.01em] mb-8">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                  <circle cx="9" cy="7" r="4" />
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                  <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                </svg>
                Případové studie
              </div>
            </ScrollReveal>

            <ScrollReveal delay={60}>
              <h1 className="text-4xl sm:text-5xl lg:text-[64px] font-semibold text-text tracking-[-0.035em] leading-[1.05] mb-6">
                Příběhy{" "}
                <em style={{ fontFamily: "var(--font-serif)", fontStyle: "italic" }}>
                  úspěchu
                </em>
              </h1>
            </ScrollReveal>

            <ScrollReveal delay={120}>
              <p className="text-lg text-text-secondary leading-relaxed tracking-[-0.01em] max-w-xl mx-auto">
                Jak čeští podnikatelé využívají webihned.cz.
              </p>
            </ScrollReveal>
          </div>
        </section>

        {/* ── Case study cards ──────────────────────────────────────────── */}
        <section
          className="py-16 px-6 lg:px-10"
          aria-label="Příběhy zákazníků"
        >
          <div className="max-w-5xl mx-auto flex flex-col gap-10">
            {caseStudies.map((cs, index) => {
              const isEven = index % 2 === 0;
              return (
                <ScrollReveal key={cs.id} delay={index * 100}>
                  <article
                    className="bg-surface rounded-3xl border border-border/40 overflow-hidden shadow-[0_1px_3px_rgba(0,0,0,0.04)]"
                    aria-labelledby={`cs-title-${cs.id}`}
                  >
                    <div className={`grid grid-cols-1 lg:grid-cols-5 ${isEven ? "" : "lg:flex-row-reverse"}`}>

                      {/* Visual side */}
                      <div
                        className={`lg:col-span-2 p-8 flex flex-col items-center justify-center gap-6 border-b lg:border-b-0 border-border/40 ${
                          isEven ? "lg:border-r" : "lg:border-l lg:order-2"
                        }`}
                        style={{
                          background: "var(--cs-bg)",
                        } as React.CSSProperties & { "--cs-bg": string }}
                      >
                        <style>{`
                          .cs-visual-${cs.id} {
                            background: linear-gradient(135deg, rgba(var(--accent-rgb, 225 29 72) / 0.04) 0%, transparent 100%);
                          }
                        `}</style>
                        <div className={`cs-visual-${cs.id} w-full h-full flex flex-col items-center justify-center gap-6 py-8`}>
                          {/* Company logo placeholder */}
                          <div className="flex flex-col items-center gap-3">
                            <div
                              className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${cs.avatarColor} flex items-center justify-center shadow-md`}
                              aria-hidden="true"
                            >
                              <span className={`text-lg font-bold tracking-tight ${cs.avatarTextColor}`}>
                                {cs.initials}
                              </span>
                            </div>
                            <div className="text-center">
                              <p className="text-sm font-semibold text-text tracking-[-0.02em]">
                                {cs.company}
                              </p>
                              <span
                                className={`inline-flex items-center text-[11px] font-medium px-2 py-0.5 rounded-full border mt-1.5 ${
                                  industryColors[cs.industry] ?? "bg-border/20 text-text-secondary border-border/40"
                                }`}
                              >
                                {cs.industry}
                              </span>
                            </div>
                          </div>

                          {/* Stats */}
                          <div className="grid grid-cols-3 gap-3 w-full max-w-[280px]">
                            {cs.stats.map((stat) => (
                              <div
                                key={stat.label}
                                className="bg-bg/70 dark:bg-surface/70 backdrop-blur-sm rounded-xl p-3 text-center border border-border/30"
                              >
                                <p
                                  className="text-base font-bold tracking-[-0.03em] leading-none mb-1"
                                  style={{ color: "var(--color-accent)" }}
                                >
                                  {stat.value}
                                </p>
                                <p className="text-[10px] text-text-secondary tracking-[-0.01em] leading-tight">
                                  {stat.label}
                                </p>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>

                      {/* Content side */}
                      <div className={`lg:col-span-3 p-8 lg:p-10 flex flex-col justify-center gap-5 ${isEven ? "" : "lg:order-1"}`}>
                        <h2
                          id={`cs-title-${cs.id}`}
                          className="text-xl sm:text-2xl font-semibold text-text tracking-[-0.03em] leading-[1.2]"
                        >
                          {cs.title}
                        </h2>

                        {/* Quote */}
                        <blockquote className="relative">
                          {/* Quote mark */}
                          <svg
                            className="absolute -top-2 -left-1 w-6 h-6 opacity-20"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            style={{ color: "var(--color-accent)" }}
                            aria-hidden="true"
                          >
                            <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                          </svg>
                          <p className="pl-5 text-base sm:text-lg italic text-text leading-relaxed tracking-[-0.01em]" style={{ fontFamily: "var(--font-serif)" }}>
                            {cs.quote}
                          </p>
                        </blockquote>

                        <div className="flex items-center gap-3 pt-2">
                          <div
                            className={`w-8 h-8 rounded-xl bg-gradient-to-br ${cs.avatarColor} flex items-center justify-center flex-shrink-0`}
                            aria-hidden="true"
                          >
                            <span className={`text-xs font-bold ${cs.avatarTextColor}`}>
                              {cs.initials}
                            </span>
                          </div>
                          <div>
                            <p className="text-sm font-medium text-text tracking-[-0.02em]">
                              Tým {cs.company}
                            </p>
                            <p className="text-xs text-text-secondary tracking-[-0.01em]">
                              {cs.industry}
                            </p>
                          </div>
                        </div>

                        <div className="pt-2">
                          <Link
                            href={`/pripadove-studie/${cs.slug}`}
                            className="link-arrow inline-flex items-center gap-2 text-sm font-medium text-text hover:text-accent transition-colors duration-300 tracking-[-0.01em]"
                            aria-label={`Číst celou případovou studii ${cs.company}`}
                          >
                            Číst celou studii
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                              <path d="M5 12h14" />
                              <path d="m12 5 7 7-7 7" />
                            </svg>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </article>
                </ScrollReveal>
              );
            })}
          </div>
        </section>

        {/* ── Aggregate stats bar ───────────────────────────────────────── */}
        <section
          className="py-16 px-6 lg:px-10 border-t border-border/30"
          aria-label="Souhrnné statistiky"
        >
          <div className="max-w-5xl mx-auto">
            <ScrollReveal>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">
                {[
                  { value: "2 500+", label: "aktivních projektů" },
                  { value: "48 hodin", label: "průměrný čas do launch" },
                  { value: "94%", label: "zákazníků doporučuje" },
                  { value: "73%", label: "průměrná úspora nákladů" },
                ].map((stat) => (
                  <div key={stat.label} className="flex flex-col gap-1.5">
                    <p
                      className="text-3xl sm:text-4xl font-bold tracking-[-0.04em]"
                      style={{ color: "var(--color-accent)" }}
                    >
                      {stat.value}
                    </p>
                    <p className="text-xs text-text-secondary tracking-[-0.01em] leading-relaxed">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* ── Bottom CTA ────────────────────────────────────────────────── */}
        <section className="py-24 px-6 lg:px-10 text-center border-t border-border/30" aria-labelledby="studie-cta">
          <ScrollReveal>
            <div className="max-w-xl mx-auto">
              <h2
                id="studie-cta"
                className="text-3xl sm:text-4xl font-semibold text-text tracking-[-0.03em] mb-5"
              >
                Napište svůj příběh úspěchu
              </h2>
              <p className="text-text-secondary tracking-[-0.01em] mb-8">
                Přidejte se k tisícům českých podnikatelů, kteří budují rychleji.
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
