import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";

export const metadata: Metadata = {
  title: "Kariéra | webihned.cz",
  description:
    "Hledáme lidi, kteří chtějí měnit způsob, jakým se tvoří software. Přidejte se k českému týmu webihned.cz.",
  alternates: {
    canonical: "/kariera",
  },
  openGraph: {
    title: "Kariéra | webihned.cz",
    description:
      "Hledáme lidi, kteří chtějí měnit způsob, jakým se tvoří software.",
    url: "https://webihned.cz/kariera",
    siteName: "webihned.cz",
    type: "website",
    locale: "cs_CZ",
  },
};

// ── Data ───────────────────────────────────────────────────────────────────────

const benefits = [
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
        <circle cx="14" cy="14" r="10" stroke="currentColor" strokeWidth="1.8" />
        <path d="M10 14l2 2 4-4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M14 4v3M14 21v3M4 14h3M21 14h3" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    ),
    title: "Práce odkudkoli",
    description: "Plně remote tým. Pracujte odkud chcete.",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
        <rect x="4" y="4" width="20" height="20" rx="4" stroke="currentColor" strokeWidth="1.8" />
        <path d="M9 14l2 2 4-4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M9 9h6M9 19h4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    ),
    title: "Moderní stack",
    description: "Next.js, React, TypeScript, AI — nejnovější technologie.",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
        <path d="M14 4l2.5 6.5H23l-5.5 4 2 6.5L14 17l-5.5 4 2-6.5L5 10.5h6.5L14 4z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
      </svg>
    ),
    title: "Vliv na produkt",
    description: "Malý tým = velký dopad. Vaše rozhodnutí se počítají.",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
        <path d="M4 20l5-5 4 4 5-7 6 8H4z" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="9" cy="9" r="3" stroke="currentColor" strokeWidth="1.8" />
      </svg>
    ),
    title: "Růst a vzdělávání",
    description: "Konferenční budget, knihy, kurzy — investujeme do vašeho rozvoje.",
  },
];

const positions = [
  {
    title: "Senior Frontend Developer",
    tags: ["Remote", "Plný úvazek"],
    description: "React, Next.js, TypeScript. Remote. Plný úvazek.",
  },
  {
    title: "AI/ML Engineer",
    tags: ["Remote", "Plný úvazek"],
    description: "LLM, fine-tuning, prompt engineering. Remote. Plný úvazek.",
  },
  {
    title: "Customer Success Manager",
    tags: ["Remote", "Plný úvazek"],
    description: "Podpora zákazníků, onboarding, CZ/SK trh. Remote.",
  },
];

// ── Page ───────────────────────────────────────────────────────────────────────

export default function KarieraPage() {
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
                  <rect x="2" y="7" width="20" height="14" rx="2" />
                  <path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" />
                  <line x1="12" y1="12" x2="12" y2="17" />
                  <line x1="9" y1="14.5" x2="15" y2="14.5" />
                </svg>
                Kariéra
              </div>
            </ScrollReveal>

            <ScrollReveal delay={60}>
              <h1 className="text-4xl sm:text-5xl lg:text-[64px] font-semibold text-text tracking-[-0.035em] leading-[1.05] mb-6">
                Přidejte se k{" "}
                <em
                  style={{ fontFamily: "var(--font-serif)", fontStyle: "italic" }}
                >
                  nám
                </em>
              </h1>
            </ScrollReveal>

            <ScrollReveal delay={120}>
              <p className="text-lg text-text-secondary leading-relaxed tracking-[-0.01em] max-w-2xl mx-auto">
                Hledáme lidi, kteří chtějí měnit způsob, jakým se tvoří software.
              </p>
            </ScrollReveal>
          </div>
        </section>

        {/* ── Proč u nás ───────────────────────────────────────────────── */}
        <section className="py-20 px-6 lg:px-10" aria-labelledby="benefits-heading">
          <div className="max-w-7xl mx-auto">
            <ScrollReveal className="text-center mb-14">
              <h2
                id="benefits-heading"
                className="text-3xl sm:text-4xl font-semibold text-text tracking-[-0.03em] mb-4"
              >
                Proč u&nbsp;nás?
              </h2>
              <p className="text-text-secondary tracking-[-0.01em] max-w-xl mx-auto">
                Nabízíme prostředí, kde vaše práce má skutečný dopad.
              </p>
            </ScrollReveal>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {benefits.map((benefit, i) => (
                <ScrollReveal key={benefit.title} delay={i * 60}>
                  <div className="bg-surface rounded-2xl border border-border/40 p-7 card-hover h-full flex flex-col gap-4">
                    <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-accent/10 text-accent flex-shrink-0">
                      {benefit.icon}
                    </div>
                    <div>
                      <h3 className="font-semibold text-text tracking-[-0.02em] mb-2 text-base">
                        {benefit.title}
                      </h3>
                      <p className="text-sm text-text-secondary leading-relaxed tracking-[-0.01em]">
                        {benefit.description}
                      </p>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* ── Otevřené pozice ──────────────────────────────────────────── */}
        <section
          className="py-20 px-6 lg:px-10 border-t border-border/30"
          aria-labelledby="positions-heading"
        >
          <div className="max-w-4xl mx-auto">
            <ScrollReveal className="text-center mb-14">
              <h2
                id="positions-heading"
                className="text-3xl sm:text-4xl font-semibold text-text tracking-[-0.03em] mb-4"
              >
                Otevřené pozice
              </h2>
              <p className="text-text-secondary tracking-[-0.01em] max-w-xl mx-auto">
                Právě hledáme tyto talenty. Vidíte se v některé roli?
              </p>
            </ScrollReveal>

            <div className="flex flex-col gap-4">
              {positions.map((position, i) => (
                <ScrollReveal key={position.title} delay={i * 80}>
                  <div className="bg-surface rounded-2xl border border-border/40 p-7 card-hover">
                    <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6">
                      {/* Info */}
                      <div className="flex-1 flex flex-col gap-3">
                        <div className="flex flex-wrap items-center gap-3">
                          <h3 className="text-lg font-semibold text-text tracking-[-0.02em]">
                            {position.title}
                          </h3>
                          <div className="flex flex-wrap gap-1.5">
                            {position.tags.map((tag) => (
                              <span
                                key={tag}
                                className="inline-flex items-center text-xs font-medium px-2.5 py-1 rounded-full bg-accent/10 text-accent border border-accent/20"
                              >
                                {tag}
                              </span>
                            ))}
                          </div>
                        </div>
                        <p className="text-sm text-text-secondary tracking-[-0.01em]">
                          {position.description}
                        </p>
                      </div>

                      {/* CTA */}
                      <div className="flex-shrink-0">
                        <a
                          href="/kontakt"
                          className="inline-flex items-center gap-2 bg-accent text-white text-sm font-medium px-5 py-2.5 rounded-xl tracking-[-0.01em] hover:bg-accent-hover transition-colors duration-200 whitespace-nowrap"
                          style={{ backgroundColor: "var(--color-accent)" }}
                          aria-label={`Přihlásit se na pozici ${position.title}`}
                        >
                          Přihlásit se
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
                            <path d="M5 12h14" />
                            <path d="m12 5 7 7-7 7" />
                          </svg>
                        </a>
                      </div>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* ── Spontánní přihláška ───────────────────────────────────────── */}
        <section className="py-24 px-6 lg:px-10 text-center" aria-labelledby="kariera-cta">
          <ScrollReveal>
            <div className="max-w-xl mx-auto">
              <h2
                id="kariera-cta"
                className="text-3xl sm:text-4xl font-semibold text-text tracking-[-0.03em] mb-5"
              >
                Nevidíte vhodnou pozici?
              </h2>
              <p className="text-text-secondary tracking-[-0.01em] mb-8">
                Pošlete nám spontánní přihlášku. Vždy hledáme skvělé lidi.
              </p>
              <a
                href="/kontakt"
                className="btn-primary inline-flex items-center gap-2 bg-accent text-white text-sm font-medium px-8 py-3.5 rounded-full tracking-[-0.01em] hover:bg-accent-hover transition-colors duration-200"
                style={{ backgroundColor: "var(--color-accent)" }}
              >
                Napsat nám
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
              </a>
            </div>
          </ScrollReveal>
        </section>

      </main>
      <Footer />
    </>
  );
}
