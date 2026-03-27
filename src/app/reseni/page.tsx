import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";

export const metadata: Metadata = {
  title: "Řešení pro každý tým | webihned.cz",
  description:
    "Startupy, product manažeři, marketéři, agentury i vzdělávání — webihned.cz pomáhá každému tvořit webové aplikace rychleji.",
  alternates: {
    canonical: "/reseni",
  },
  openGraph: {
    title: "Řešení pro každý tým | webihned.cz",
    description:
      "Startupy, product manažeři, marketéři, agentury i vzdělávání — webihned.cz pomáhá každému tvořit webové aplikace rychleji.",
    url: "https://webihned.cz/reseni",
    siteName: "webihned.cz",
    type: "website",
    locale: "cs_CZ",
  },
};

// ── Use case data ──────────────────────────────────────────────────────────────

const useCases = [
  {
    tag: "Startupy",
    heading: "Pro zakladatele a startupy",
    description:
      "Validujte nápady rychle. MVP za hodiny.",
    bullets: [
      "Rychlý prototyp bez vývojářského týmu",
      "Iterace na základě zpětné vazby uživatelů",
      "Od nápadu k platícím zákazníkům za dny",
    ],
    icon: (
      <svg width="44" height="44" viewBox="0 0 44 44" fill="none" aria-hidden="true">
        <path d="M22 8L10 18v18h24V18L22 8z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
        <path d="M17 36V26h10v10" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
        <path d="M22 8v5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <circle cx="22" cy="21" r="3" stroke="currentColor" strokeWidth="2" />
      </svg>
    ),
    visual: {
      bg: "from-rose-100 via-pink-50 to-orange-50",
      darkBg: "from-rose-950/30 via-pink-950/20 to-orange-950/20",
      label: "MVP za hodiny",
    },
  },
  {
    tag: "Product management",
    heading: "Pro product manažery",
    description:
      "Prototypujte funkce nezávisle.",
    bullets: [
      "Interaktivní prototypy místo wireframů",
      "Testování hypotéz bez čekání na sprint",
      "Sdílení s týmem jedním odkazem",
    ],
    icon: (
      <svg width="44" height="44" viewBox="0 0 44 44" fill="none" aria-hidden="true">
        <rect x="8" y="8" width="28" height="28" rx="5" stroke="currentColor" strokeWidth="2" />
        <path d="M15 20h14M15 26h9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <circle cx="22" cy="15" r="2.5" stroke="currentColor" strokeWidth="2" />
      </svg>
    ),
    visual: {
      bg: "from-violet-100 via-purple-50 to-indigo-50",
      darkBg: "from-violet-950/30 via-purple-950/20 to-indigo-950/20",
      label: "Prototyp za minuty",
    },
  },
  {
    tag: "Marketing",
    heading: "Pro marketingové týmy",
    description:
      "Landing pages a nástroje okamžitě.",
    bullets: [
      "Kampaňové stránky za minuty",
      "A/B testování bez developera",
      "Formuláře a lead magnety na míru",
    ],
    icon: (
      <svg width="44" height="44" viewBox="0 0 44 44" fill="none" aria-hidden="true">
        <path d="M8 32L18 18l8 8 6-10 8 16H8z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="36" cy="12" r="4" stroke="currentColor" strokeWidth="2" />
      </svg>
    ),
    visual: {
      bg: "from-emerald-100 via-teal-50 to-cyan-50",
      darkBg: "from-emerald-950/30 via-teal-950/20 to-cyan-950/20",
      label: "Konverze nahoru",
    },
  },
  {
    tag: "Agentury",
    heading: "Pro agentury",
    description:
      "Dodávejte projekty 10× rychleji.",
    bullets: [
      "Konzistentní kvalita napříč projekty",
      "Rychlé prototypy pro klientské prezentace",
      "Škálovatelný workflow pro celý tým",
    ],
    icon: (
      <svg width="44" height="44" viewBox="0 0 44 44" fill="none" aria-hidden="true">
        <rect x="8" y="14" width="28" height="20" rx="3" stroke="currentColor" strokeWidth="2" />
        <path d="M14 14V11a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v3" stroke="currentColor" strokeWidth="2" />
        <path d="M22 22v4M18 24h8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
    visual: {
      bg: "from-amber-100 via-orange-50 to-yellow-50",
      darkBg: "from-amber-950/30 via-orange-950/20 to-yellow-950/20",
      label: "10× rychleji",
    },
  },
  {
    tag: "Vzdělávání",
    heading: "Pro vzdělávání",
    description:
      "Učte se tvorbou.",
    bullets: [
      "Studenti si staví reálné aplikace",
      "50% sleva pro školy a učitele",
      "Žádné technické bariéry pro začátečníky",
    ],
    icon: (
      <svg width="44" height="44" viewBox="0 0 44 44" fill="none" aria-hidden="true">
        <path d="M22 10L6 18l16 8 16-8-16-8z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
        <path d="M10 22v8c0 3.314 5.373 6 12 6s12-2.686 12-6v-8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <path d="M36 18v10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
    visual: {
      bg: "from-sky-100 via-blue-50 to-indigo-50",
      darkBg: "from-sky-950/30 via-blue-950/20 to-indigo-950/20",
      label: "50% pro školy",
    },
  },
];

// ── Page ──────────────────────────────────────────────────────────────────────

export default function ReseniPage() {
  return (
    <>
      <Navbar />
      <main id="main-content">

        {/* ── Hero ─────────────────────────────────────────────────────── */}
        <section className="hero-gradient pt-24 pb-20 px-6 lg:px-10 text-center">
          <div className="max-w-3xl mx-auto">
            <ScrollReveal>
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-accent/30 bg-accent/5 text-accent text-xs font-medium tracking-[-0.01em] mb-8">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
                </svg>
                Řešení
              </div>
            </ScrollReveal>

            <ScrollReveal delay={60}>
              <h1 className="text-4xl sm:text-5xl lg:text-[64px] font-semibold text-text tracking-[-0.035em] leading-[1.05] mb-6">
                Pro každý{" "}
                <em
                  style={{ fontFamily: "var(--font-serif)", fontStyle: "italic" }}
                >
                  tým
                </em>
              </h1>
            </ScrollReveal>

            <ScrollReveal delay={120}>
              <p className="text-lg text-text-secondary leading-relaxed tracking-[-0.01em] max-w-2xl mx-auto">
                Ať jste startup, agentura nebo velká firma — webihned.cz vám pomůže
                budovat rychleji.
              </p>
            </ScrollReveal>
          </div>
        </section>

        {/* ── Use case sections ─────────────────────────────────────────── */}
        {useCases.map((uc, index) => {
          const isEven = index % 2 === 0;
          return (
            <section
              key={uc.heading}
              className="py-20 px-6 lg:px-10"
              aria-labelledby={`uc-heading-${index}`}
            >
              {/* Section divider (not first) */}
              {index > 0 && (
                <div className="max-w-7xl mx-auto mb-20">
                  <div className="border-t border-border/30" />
                </div>
              )}

              <div className="max-w-7xl mx-auto">
                <div
                  className={`grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-center ${
                    isEven ? "" : "lg:[&>*:first-child]:order-2"
                  }`}
                >
                  {/* Text */}
                  <ScrollReveal
                    direction={isEven ? "left" : "right"}
                    delay={0}
                  >
                    <div className="flex flex-col gap-6">
                      {/* Tag */}
                      <span className="inline-flex items-center self-start px-3 py-1 rounded-full bg-accent/10 text-accent text-xs font-medium tracking-[-0.01em]">
                        {uc.tag}
                      </span>

                      <h2
                        id={`uc-heading-${index}`}
                        className="text-3xl sm:text-4xl md:text-[42px] font-semibold text-text tracking-[-0.03em] leading-[1.1]"
                      >
                        {uc.heading}
                      </h2>

                      <p className="text-lg text-text-secondary tracking-[-0.01em] leading-relaxed">
                        {uc.description}
                      </p>

                      <ul className="flex flex-col gap-3" role="list">
                        {uc.bullets.map((bullet) => (
                          <li
                            key={bullet}
                            className="flex items-start gap-3 text-sm text-text-secondary tracking-[-0.01em]"
                          >
                            <span
                              className="flex-shrink-0 mt-0.5 w-5 h-5 rounded-full bg-accent/10 text-accent flex items-center justify-center"
                              aria-hidden="true"
                            >
                              <svg
                                width="10"
                                height="10"
                                viewBox="0 0 10 10"
                                fill="none"
                              >
                                <path
                                  d="M2 5l2 2 4-4"
                                  stroke="currentColor"
                                  strokeWidth="1.5"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                />
                              </svg>
                            </span>
                            {bullet}
                          </li>
                        ))}
                      </ul>

                      <div className="mt-2">
                        <Link
                          href="/pricing"
                          className="link-arrow inline-flex items-center gap-2.5 text-sm font-medium text-text hover:text-accent transition-colors duration-300 tracking-[-0.01em]"
                        >
                          Začít zdarma
                          <svg
                            width="16"
                            height="16"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            aria-hidden="true"
                          >
                            <path d="M5 12h14" />
                            <path d="m12 5 7 7-7 7" />
                          </svg>
                        </Link>
                      </div>
                    </div>
                  </ScrollReveal>

                  {/* Visual placeholder */}
                  <ScrollReveal
                    direction={isEven ? "right" : "left"}
                    delay={120}
                  >
                    <div
                      className="w-full aspect-[4/3] rounded-3xl flex flex-col items-center justify-center border border-border/20 shadow-sm"
                      style={{
                        background: `linear-gradient(135deg, var(--uc-grad-start, #f3f4f6), var(--uc-grad-end, #e5e7eb))`,
                      }}
                    >
                      {/* Inline style for theme-aware gradient */}
                      <style>{`
                        [data-uc-index="${index}"] {
                          background: linear-gradient(135deg, var(--uc-${index}-start), var(--uc-${index}-end));
                        }
                      `}</style>
                      <div
                        data-uc-index={index}
                        className={`w-full h-full rounded-3xl flex flex-col items-center justify-center bg-gradient-to-br ${uc.visual.bg} dark:bg-none`}
                        style={undefined}
                      >
                        <div className="w-16 h-16 rounded-2xl bg-white/70 dark:bg-surface/70 shadow-sm flex items-center justify-center backdrop-blur-sm mb-4 text-accent">
                          {uc.icon}
                        </div>
                        <p className="text-sm font-semibold text-text-secondary tracking-[-0.01em]">
                          {uc.visual.label}
                        </p>
                      </div>
                    </div>
                  </ScrollReveal>
                </div>
              </div>
            </section>
          );
        })}

        {/* ── Bottom CTA ───────────────────────────────────────────────── */}
        <section className="py-24 px-6 lg:px-10 text-center" aria-labelledby="reseni-cta">
          <ScrollReveal>
            <div className="max-w-xl mx-auto">
              <h2
                id="reseni-cta"
                className="text-3xl sm:text-4xl font-semibold text-text tracking-[-0.03em] mb-5"
              >
                Připraveni začít?
              </h2>
              <p className="text-text-secondary tracking-[-0.01em] mb-8">
                Zdarma. Bez kreditní karty. První aplikace hotová za minuty.
              </p>
              <Link
                href="/pricing"
                className="btn-primary inline-flex items-center gap-2 bg-accent text-white text-sm font-medium px-8 py-3.5 rounded-full tracking-[-0.01em] hover:bg-accent-hover transition-colors duration-200"
                style={{ backgroundColor: "var(--color-accent)" }}
              >
                Začít zdarma
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
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
