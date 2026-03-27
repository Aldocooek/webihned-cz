import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import { caseStudies } from "@/data/case-studies";

// ── Static params ──────────────────────────────────────────────────────────────

export function generateStaticParams() {
  return caseStudies.map((cs) => ({ slug: cs.slug }));
}

// ── Metadata ───────────────────────────────────────────────────────────────────

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const cs = caseStudies.find((c) => c.slug === slug);
  if (!cs) return {};

  return {
    title: `${cs.company}: ${cs.title} | webihned.cz`,
    description: cs.quote,
    alternates: { canonical: `/pripadove-studie/${cs.slug}` },
    openGraph: {
      title: `${cs.company}: ${cs.title} | webihned.cz`,
      description: cs.quote,
      url: `https://webihned.cz/pripadove-studie/${cs.slug}`,
      siteName: "webihned.cz",
      type: "article",
      locale: "cs_CZ",
    },
  };
}

// ── Industry color map ─────────────────────────────────────────────────────────

const industryColors: Record<string, string> = {
  SaaS: "bg-accent/10 text-accent border-accent/20",
  "Interní nástroje": "bg-violet-500/10 text-violet-600 dark:text-violet-400 border-violet-500/20",
  "E-commerce": "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/20",
};

// ── Page ───────────────────────────────────────────────────────────────────────

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const cs = caseStudies.find((c) => c.slug === slug);

  if (!cs) notFound();

  const related = caseStudies.filter((c) => c.slug !== slug).slice(0, 2);

  return (
    <>
      <Navbar />
      <main id="main-content">

        {/* ── Hero ──────────────────────────────────────────────────────── */}
        <section className="hero-gradient pt-24 pb-20 px-6 lg:px-10">
          <div className="max-w-4xl mx-auto">
            <ScrollReveal>
              <Link
                href="/pripadove-studie"
                className="inline-flex items-center gap-1.5 text-sm text-text-secondary hover:text-text transition-colors duration-200 tracking-[-0.01em] mb-8"
                aria-label="Zpět na případové studie"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="m15 18-6-6 6-6" />
                </svg>
                Všechny případové studie
              </Link>
            </ScrollReveal>

            <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-8">
              <ScrollReveal delay={40}>
                <div className="flex items-center gap-3">
                  <div
                    className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${cs.avatarColor} flex items-center justify-center shadow-md`}
                    aria-hidden="true"
                  >
                    <span className={`text-sm font-bold tracking-tight ${cs.avatarTextColor}`}>
                      {cs.initials}
                    </span>
                  </div>
                  <div>
                    <p className="text-lg font-semibold text-text tracking-[-0.02em]">
                      {cs.company}
                    </p>
                    <span
                      className={`inline-flex items-center text-[11px] font-medium px-2.5 py-0.5 rounded-full border mt-1 ${
                        industryColors[cs.industry] ?? "bg-border/20 text-text-secondary border-border/40"
                      }`}
                    >
                      {cs.industry}
                    </span>
                  </div>
                </div>
              </ScrollReveal>
            </div>

            <ScrollReveal delay={80}>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-text tracking-[-0.035em] leading-[1.1] mb-6">
                {cs.title}
              </h1>
            </ScrollReveal>

            <ScrollReveal delay={120}>
              <p className="text-xl text-text-secondary leading-relaxed tracking-[-0.01em] italic" style={{ fontFamily: "var(--font-serif)" }}>
                &ldquo;{cs.quote}&rdquo;
              </p>
            </ScrollReveal>
          </div>
        </section>

        {/* ── KPI stats ─────────────────────────────────────────────────── */}
        <section className="py-14 px-6 lg:px-10 border-t border-border/30" aria-labelledby="results-heading">
          <div className="max-w-4xl mx-auto">
            <ScrollReveal>
              <h2
                id="results-heading"
                className="text-xs font-semibold text-text-secondary uppercase tracking-widest mb-8"
              >
                Výsledky
              </h2>
            </ScrollReveal>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
              {cs.results.map((stat, i) => (
                <ScrollReveal key={stat.label} delay={i * 80}>
                  <div className="bg-surface rounded-2xl border border-border/40 p-6 text-center">
                    <p
                      className="text-3xl sm:text-4xl font-bold tracking-[-0.04em] mb-2"
                      style={{ color: "var(--color-accent)" }}
                    >
                      {stat.value}
                    </p>
                    <p className="text-sm text-text-secondary tracking-[-0.01em]">
                      {stat.label}
                    </p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* ── Challenge ─────────────────────────────────────────────────── */}
        <section className="py-14 px-6 lg:px-10 border-t border-border/30" aria-labelledby="challenge-heading">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 lg:gap-12">
              <ScrollReveal>
                <div className="lg:col-span-1">
                  <div className="inline-flex items-center gap-2 mb-3" aria-hidden="true">
                    <div
                      className="w-6 h-6 rounded-full flex items-center justify-center"
                      style={{ backgroundColor: "rgba(var(--accent-rgb, 225 29 72) / 0.1)" }}
                    >
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ color: "var(--color-accent)" }}>
                        <circle cx="12" cy="12" r="10" />
                        <path d="M12 8v4" />
                        <path d="M12 16h.01" />
                      </svg>
                    </div>
                  </div>
                  <h2
                    id="challenge-heading"
                    className="text-xl font-semibold text-text tracking-[-0.025em]"
                  >
                    Výzva
                  </h2>
                </div>
              </ScrollReveal>
              <div className="lg:col-span-3 flex flex-col gap-5">
                {cs.challenge.map((paragraph, i) => (
                  <ScrollReveal key={i} delay={i * 60}>
                    <p className="text-base text-text-secondary leading-relaxed tracking-[-0.01em]">
                      {paragraph}
                    </p>
                  </ScrollReveal>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── Solution ──────────────────────────────────────────────────── */}
        <section className="py-14 px-6 lg:px-10 border-t border-border/30" aria-labelledby="solution-heading">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 lg:gap-12">
              <ScrollReveal>
                <div className="lg:col-span-1">
                  <div className="inline-flex items-center gap-2 mb-3" aria-hidden="true">
                    <div
                      className="w-6 h-6 rounded-full flex items-center justify-center"
                      style={{ backgroundColor: "rgba(var(--accent-rgb, 225 29 72) / 0.1)" }}
                    >
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ color: "var(--color-accent)" }}>
                        <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
                        <path d="m9 12 2 2 4-4" />
                      </svg>
                    </div>
                  </div>
                  <h2
                    id="solution-heading"
                    className="text-xl font-semibold text-text tracking-[-0.025em]"
                  >
                    Řešení
                  </h2>
                </div>
              </ScrollReveal>
              <div className="lg:col-span-3 flex flex-col gap-5">
                {cs.solution.map((paragraph, i) => (
                  <ScrollReveal key={i} delay={i * 60}>
                    <p className="text-base text-text-secondary leading-relaxed tracking-[-0.01em]">
                      {paragraph}
                    </p>
                  </ScrollReveal>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── Full quote ────────────────────────────────────────────────── */}
        <section className="py-14 px-6 lg:px-10 border-t border-border/30" aria-label="Citát zákazníka">
          <div className="max-w-4xl mx-auto">
            <ScrollReveal>
              <figure className="bg-surface rounded-3xl border border-border/40 p-8 sm:p-12">
                <svg
                  className="w-8 h-8 mb-6 opacity-30"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  style={{ color: "var(--color-accent)" }}
                  aria-hidden="true"
                >
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
                <blockquote>
                  <p
                    className="text-lg sm:text-xl text-text italic leading-relaxed tracking-[-0.01em] mb-8"
                    style={{ fontFamily: "var(--font-serif)" }}
                  >
                    {cs.fullQuote}
                  </p>
                </blockquote>
                <figcaption className="flex items-center gap-3">
                  <div
                    className={`w-10 h-10 rounded-xl bg-gradient-to-br ${cs.avatarColor} flex items-center justify-center flex-shrink-0`}
                    aria-hidden="true"
                  >
                    <span className={`text-xs font-bold ${cs.avatarTextColor}`}>
                      {cs.initials}
                    </span>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-text tracking-[-0.02em]">
                      Tým {cs.company}
                    </p>
                    <p className="text-xs text-text-secondary tracking-[-0.01em]">
                      {cs.industry}
                    </p>
                  </div>
                </figcaption>
              </figure>
            </ScrollReveal>
          </div>
        </section>

        {/* ── CTA ───────────────────────────────────────────────────────── */}
        <section className="py-20 px-6 lg:px-10 border-t border-border/30" aria-labelledby="studie-cta">
          <div className="max-w-4xl mx-auto text-center">
            <ScrollReveal>
              <h2
                id="studie-cta"
                className="text-2xl sm:text-3xl font-semibold text-text tracking-[-0.03em] mb-4"
              >
                Začněte svůj příběh
              </h2>
              <p className="text-text-secondary tracking-[-0.01em] mb-8 max-w-md mx-auto">
                Přidejte se k tisícům českých podnikatelů, kteří budují rychleji.
              </p>
              <Link
                href="/pricing"
                className="inline-flex items-center gap-2 text-sm font-medium px-8 py-3.5 rounded-full text-white tracking-[-0.01em] hover:opacity-90 transition-opacity duration-200"
                style={{ backgroundColor: "var(--color-accent)" }}
              >
                Začněte svůj příběh
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M5 12h14" />
                  <path d="m12 5 7 7-7 7" />
                </svg>
              </Link>
            </ScrollReveal>
          </div>
        </section>

        {/* ── Related case studies ───────────────────────────────────────── */}
        {related.length > 0 && (
          <section className="py-20 px-6 lg:px-10 border-t border-border/30" aria-labelledby="related-cs-heading">
            <div className="max-w-4xl mx-auto">
              <ScrollReveal>
                <h2
                  id="related-cs-heading"
                  className="text-2xl font-semibold text-text tracking-[-0.03em] mb-8"
                >
                  Další příběhy
                </h2>
              </ScrollReveal>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {related.map((rel, i) => (
                  <ScrollReveal key={rel.slug} delay={i * 100}>
                    <Link
                      href={`/pripadove-studie/${rel.slug}`}
                      className="card-hover bg-surface rounded-2xl border border-border/40 p-6 flex flex-col gap-4 group"
                      aria-label={`Číst případovou studii ${rel.company}`}
                    >
                      <div className="flex items-center gap-3">
                        <div
                          className={`w-10 h-10 rounded-xl bg-gradient-to-br ${rel.avatarColor} flex items-center justify-center flex-shrink-0`}
                          aria-hidden="true"
                        >
                          <span className={`text-xs font-bold ${rel.avatarTextColor}`}>
                            {rel.initials}
                          </span>
                        </div>
                        <div>
                          <p className="text-sm font-semibold text-text tracking-[-0.02em]">
                            {rel.company}
                          </p>
                          <span
                            className={`inline-flex items-center text-[10px] font-medium px-2 py-0.5 rounded-full border mt-0.5 ${
                              industryColors[rel.industry] ?? "bg-border/20 text-text-secondary border-border/40"
                            }`}
                          >
                            {rel.industry}
                          </span>
                        </div>
                      </div>

                      <h3 className="text-sm font-semibold text-text tracking-[-0.02em] leading-snug">
                        {rel.title}
                      </h3>

                      <p className="text-xs text-text-secondary leading-relaxed tracking-[-0.01em] italic" style={{ fontFamily: "var(--font-serif)" }}>
                        &ldquo;{rel.quote}&rdquo;
                      </p>

                      <div className="grid grid-cols-3 gap-2 pt-1">
                        {rel.results.map((stat) => (
                          <div
                            key={stat.label}
                            className="bg-bg/60 dark:bg-surface/60 rounded-xl p-2.5 text-center border border-border/30"
                          >
                            <p
                              className="text-sm font-bold tracking-[-0.03em] leading-none mb-0.5"
                              style={{ color: "var(--color-accent)" }}
                            >
                              {stat.value}
                            </p>
                            <p className="text-[9px] text-text-secondary leading-tight tracking-[-0.01em]">
                              {stat.label}
                            </p>
                          </div>
                        ))}
                      </div>

                      <div className="flex items-center gap-1.5 text-xs font-medium text-text group-hover:text-accent transition-colors duration-200 tracking-[-0.01em]" aria-hidden="true">
                        Číst celou studii
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M5 12h14" />
                          <path d="m12 5 7 7-7 7" />
                        </svg>
                      </div>
                    </Link>
                  </ScrollReveal>
                ))}
              </div>
            </div>
          </section>
        )}

      </main>
      <Footer />
    </>
  );
}
