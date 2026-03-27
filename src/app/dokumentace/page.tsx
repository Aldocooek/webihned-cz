import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";

export const metadata: Metadata = {
  title: "Dokumentace | webihned.cz",
  description:
    "Průvodce krok za krokem — od registrace k první aplikaci. Zjistěte, jak rychle začít s webihned.cz.",
  alternates: {
    canonical: "/dokumentace",
  },
  openGraph: {
    title: "Dokumentace | webihned.cz",
    description:
      "Průvodce krok za krokem — od registrace k první aplikaci. Vytvořte svůj první projekt za pár minut.",
    url: "https://webihned.cz/dokumentace",
    siteName: "webihned.cz",
    type: "website",
    locale: "cs_CZ",
  },
};

// ── Data ──────────────────────────────────────────────────────────────────────

const steps = [
  {
    number: "01",
    title: "Vytvo\u0159te si \u00fa\u010det",
    description:
      "Registrace je zdarma a zabere m\u00e9n\u011b ne\u017e minutu. \u017d\u00e1dn\u00e1 kreditn\u00ed karta.",
    detail:
      "P\u0159ejd\u011bte na webihned.cz, klikn\u011bte na Za\u010d\u00edt zdarma a zadejte e-mail nebo se p\u0159ihla\u0161te p\u0159es Google.",
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden="true">
        <circle cx="16" cy="11" r="5" stroke="currentColor" strokeWidth="1.8" />
        <path d="M7 27c0-4.418 4.03-8 9-8s9 3.582 9 8" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
        <path d="M22 15l1.5 1.5L27 13" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    number: "02",
    title: "Popi\u0161te sv\u016fj n\u00e1pad",
    description:
      "Napi\u0161te do chatu, co chcete vytvo\u0159it. \u010c\u00edm detailn\u011bj\u0161\u00ed popis, t\u00edm lep\u0161\u00ed v\u00fdsledek.",
    detail:
      "Pou\u017e\u00edvejte p\u0159irozen\u00fd jazyk. Nap\u0159\u00edklad: Chci aplikaci pro spr\u00e1vu \u00fakol\u016f s p\u0159ihl\u00e1\u0161en\u00edm u\u017eivatel\u016f.",
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden="true">
        <rect x="4" y="6" width="24" height="20" rx="3" stroke="currentColor" strokeWidth="1.8" />
        <path d="M9 12h14M9 16h10M9 20h7" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
        <circle cx="25" cy="7" r="4" fill="var(--color-bg)" stroke="currentColor" strokeWidth="1.6" />
        <path d="M23.5 7h3M25 5.5v3" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    number: "03",
    title: "Upravte a p\u0159izp\u016fsobte",
    description:
      "Pou\u017eijte vizuln\u00ed editor nebo chat pro \u00fapravy. M\u011b\u0148te design, p\u0159id\u00e1vejte funkce.",
    detail:
      "Klikejte na prvky a m\u011b\u0148te je, nebo napi\u0161te do chatu co chcete zm\u011bnit.",
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden="true">
        <rect x="4" y="4" width="14" height="14" rx="2.5" stroke="currentColor" strokeWidth="1.8" />
        <rect x="14" y="14" width="14" height="14" rx="2.5" stroke="currentColor" strokeWidth="1.8" />
        <path d="M4 19h8M13 4v8" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    number: "04",
    title: "Publikujte a sd\u00edlejte",
    description:
      "Klikn\u011bte na Publikovat. Va\u0161e aplikace je okam\u017eit\u011b online s vlastn\u00ed URL.",
    detail:
      "Aplikace b\u011b\u017e\u00ed na na\u0161\u00ed infrastruktu\u0159e s SSL certifik\u00e1tem.",
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden="true">
        <path d="M16 4l-8 8h5v10h6V12h5l-8-8z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
        <path d="M6 26h20" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    ),
  },
];

const tips = [
  {
    title: "Bu\u010fte konkr\u00e9tn\u00ed",
    description:
      "\u010c\u00edm p\u0159esn\u011bj\u0161\u00ed popis, t\u00edm lep\u0161\u00ed v\u00fdsledek. Zmi\u0148ujte typ aplikace, c\u00edlov\u00e9ho u\u017eivatele i kl\u00ed\u010dov\u00e9 funkce.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.6" />
        <path d="M12 8v4l3 3" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: "Iterujte po kroc\u00edch",
    description:
      "Neza\u010d\u00ednejte velkou aplikac\u00ed najednou. P\u0159id\u00e1vejte funkce postupn\u011b \u2014 je to rychlej\u0161\u00ed a m\u00e9n\u011b chyb.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M4 12a8 8 0 0 1 14-5.29" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
        <path d="M20 12a8 8 0 0 1-14 5.29" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
        <path d="M18 6.5l-0.5 2-2-0.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M6 17.5l0.5-2 2 0.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: "Pou\u017e\u00edvejte p\u0159\u00edklady",
    description:
      "Odkaz na podobnou aplikaci nebo screenshot v\u00fdrazn\u011b pom\u016f\u017ee AI porozum\u011bt va\u0161\u00ed vizi.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <rect x="3" y="5" width="18" height="14" rx="2" stroke="currentColor" strokeWidth="1.6" />
        <path d="M3 9h18" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
        <path d="M7 13h4M7 16h2" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "Ukl\u00e1dejte verze",
    description:
      "P\u0159ed ka\u017edou v\u011bt\u0161\u00ed zm\u011bnou ulo\u017ete verzi. Kdykoliv se m\u016f\u017eete vr\u00e1tit k p\u0159edchoz\u00edmu stavu.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.6" />
        <path d="M12 7v5l3 3" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M5 6l-2 2 2 2" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M3 8h3" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      </svg>
    ),
  },
];

// ── Page ──────────────────────────────────────────────────────────────────────

export default function DokumentacePage() {
  return (
    <>
      <Navbar />
      <main id="main-content">

        {/* ── Hero ─────────────────────────────────────────────────────── */}
        <section className="hero-gradient pt-24 pb-20 px-6 lg:px-10 text-center">
          <div className="max-w-3xl mx-auto">
            <h1 className="animate-hero-title text-4xl sm:text-5xl lg:text-6xl font-semibold text-text tracking-[-0.03em] leading-[1.08] mb-6">
              {"Za\u010d\u00edn\u00e1me s\u00a0"}
              <em
                className="not-italic"
                style={{ fontFamily: "var(--font-serif)", fontStyle: "italic" }}
              >
                webihned.cz
              </em>
            </h1>
            <p className="animate-hero-subtitle text-lg text-text-secondary leading-relaxed tracking-[-0.01em] max-w-2xl mx-auto">
              {"Pr\u016fvodce krok za krokem \u2014 od registrace k\u00a0prvn\u00ed aplikaci."}
            </p>
          </div>
        </section>

        {/* ── Steps ────────────────────────────────────────────────────── */}
        <section
          className="py-16 px-6 lg:px-10"
          aria-labelledby="steps-heading"
        >
          <div className="max-w-4xl mx-auto">
            <ScrollReveal className="text-center mb-14">
              <h2
                id="steps-heading"
                className="text-3xl sm:text-4xl font-semibold text-text tracking-[-0.03em] mb-4"
              >
                {"St\u011bpov\u00fd pr\u016fvodce"}
              </h2>
              <p className="text-text-secondary tracking-[-0.01em]">
                {"Od n\u00e1padu k hotov\u00e9 aplikaci za m\u00e9n\u011b ne\u017e hodinu."}
              </p>
            </ScrollReveal>

            <div className="flex flex-col gap-6">
              {steps.map((step, i) => (
                <ScrollReveal key={step.number} delay={i * 80}>
                  <div className="bg-surface rounded-2xl border border-border/40 p-6 sm:p-8 card-hover flex flex-col sm:flex-row gap-6">
                    {/* Number + icon column */}
                    <div className="flex items-center gap-4 sm:flex-col sm:items-center sm:gap-3 sm:w-20 flex-shrink-0">
                      <span
                        className="text-4xl font-bold tracking-[-0.04em] leading-none"
                        style={{ color: "var(--color-accent)", opacity: 0.25 }}
                        aria-hidden="true"
                      >
                        {step.number}
                      </span>
                      <div className="text-accent">{step.icon}</div>
                    </div>

                    {/* Content column */}
                    <div className="flex-1 flex flex-col gap-2">
                      <h3 className="text-lg font-semibold text-text tracking-[-0.02em]">
                        {step.title}
                      </h3>
                      <p className="text-text-secondary tracking-[-0.01em] font-medium">
                        {step.description}
                      </p>
                      <p className="text-sm text-text-secondary leading-relaxed tracking-[-0.01em] border-t border-border/30 pt-3 mt-1">
                        {step.detail}
                      </p>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* ── Tips ─────────────────────────────────────────────────────── */}
        <section
          className="py-16 px-6 lg:px-10"
          aria-labelledby="tips-heading"
        >
          <div className="max-w-7xl mx-auto">
            <ScrollReveal className="text-center mb-12">
              <h2
                id="tips-heading"
                className="text-3xl sm:text-4xl font-semibold text-text tracking-[-0.03em] mb-4"
              >
                {"Tipy pro lep\u0161\u00ed v\u00fdsledky"}
              </h2>
              <p className="text-text-secondary tracking-[-0.01em] max-w-xl mx-auto">
                {"Zku\u0161enosti z tis\u00edc\u016f projekt\u016f shrnut\u00e9 do \u010dty\u0159 rad."}
              </p>
            </ScrollReveal>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {tips.map((tip, i) => (
                <ScrollReveal key={tip.title} delay={i * 70}>
                  <div className="bg-surface rounded-2xl border border-border/40 p-6 card-hover h-full flex flex-col gap-4">
                    <div className="text-accent">{tip.icon}</div>
                    <div>
                      <h3 className="font-semibold text-text tracking-[-0.02em] mb-2">
                        {tip.title}
                      </h3>
                      <p className="text-sm text-text-secondary leading-relaxed tracking-[-0.01em]">
                        {tip.description}
                      </p>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* ── Help CTA ─────────────────────────────────────────────────── */}
        <section
          className="py-20 px-6 lg:px-10 text-center border-t border-border/40"
          aria-labelledby="help-heading"
        >
          <ScrollReveal>
            <div className="max-w-xl mx-auto">
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-accent/10 text-accent mb-6">
                <svg
                  width="28"
                  height="28"
                  viewBox="0 0 28 28"
                  fill="none"
                  aria-hidden="true"
                >
                  <circle cx="14" cy="14" r="11" stroke="currentColor" strokeWidth="1.8" />
                  <path
                    d="M10.5 10.5a3.5 3.5 0 0 1 7 0c0 2-3.5 3.5-3.5 5"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <circle cx="14" cy="20" r="1.2" fill="currentColor" />
                </svg>
              </div>
              <h2
                id="help-heading"
                className="text-2xl sm:text-3xl font-semibold text-text tracking-[-0.03em] mb-4"
              >
                {"Pot\u0159ebujete pomoc?"}
              </h2>
              <p className="text-text-secondary tracking-[-0.01em] mb-8 leading-relaxed">
                {"N\u00e1\u0161 t\u00fdm je p\u0159ipraven odpov\u011bd\u011bt na va\u0161e dotazy a pomoci v\u00e1m za\u010d\u00edt."}
              </p>
              <a
                href="/kontakt"
                className="inline-flex items-center gap-2 font-medium text-sm px-8 py-3.5 rounded-full text-white transition-opacity duration-300 hover:opacity-90"
                style={{ backgroundColor: "var(--color-accent)" }}
              >
                {"Kontaktovat podporu"}
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
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
        </section>

      </main>
      <Footer />
    </>
  );
}
