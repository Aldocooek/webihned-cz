import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";

export const metadata: Metadata = {
  title: "Funkce platformy | webihned.cz",
  description:
    "Od generování aplikací z textu přes automatickou databázi až po týmovou spolupráci — vše na jednom místě. Žádný kód, žádné kompromisy.",
  alternates: {
    canonical: "/funkce",
  },
  openGraph: {
    title: "Funkce platformy | webihned.cz",
    description:
      "Od generování aplikací z textu přes automatickou databázi až po týmovou spolupráci — vše na jednom místě.",
    url: "https://webihned.cz/funkce",
    siteName: "webihned.cz",
    type: "website",
    locale: "cs_CZ",
  },
};

// ── Data ──────────────────────────────────────────────────────────────────────

const categories = [
  {
    id: "tvorba",
    heading: "Tvorba aplikací",
    features: [
      {
        title: "Generování z textu",
        description:
          "Popište svůj nápad běžným jazykem a sledujte, jak AI vytvoří kompletní aplikaci.",
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
        title: "Vizuální editor",
        description:
          "Upravujte design drag-and-drop metodou. Žádný kód, jen intuitivní rozhraní.",
        icon: (
          <svg width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden="true">
            <rect x="4" y="4" width="14" height="14" rx="2.5" stroke="currentColor" strokeWidth="1.8" />
            <rect x="14" y="14" width="14" height="14" rx="2.5" stroke="currentColor" strokeWidth="1.8" />
            <path d="M4 19h8M13 4v8" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
          </svg>
        ),
      },
      {
        title: "Figma import",
        description:
          "Nahrajte screenshot nebo Figma design a AI ho promění v funkční kód.",
        icon: (
          <svg width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden="true">
            <rect x="6" y="4" width="20" height="24" rx="3" stroke="currentColor" strokeWidth="1.8" />
            <circle cx="16" cy="16" r="4" stroke="currentColor" strokeWidth="1.8" />
            <path d="M16 4v8M16 20v8M6 16h6M20 16h6" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
          </svg>
        ),
      },
      {
        title: "Výběr AI modelu",
        description:
          "Claude, GPT-4, Gemini — vyberte si model, který nejlépe sedí vašemu projektu.",
        icon: (
          <svg width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden="true">
            <circle cx="16" cy="16" r="11" stroke="currentColor" strokeWidth="1.8" />
            <circle cx="16" cy="16" r="5" stroke="currentColor" strokeWidth="1.8" />
            <path d="M16 5v3M16 24v3M5 16h3M24 16h3" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
          </svg>
        ),
      },
    ],
  },
  {
    id: "backend",
    heading: "Backend a infrastruktura",
    features: [
      {
        title: "Automatická databáze",
        description:
          "Schema se vytvoří automaticky z vašeho popisu. PostgreSQL připravený k použití.",
        icon: (
          <svg width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden="true">
            <ellipse cx="16" cy="9" rx="10" ry="4" stroke="currentColor" strokeWidth="1.8" />
            <path d="M6 9v14c0 2.21 4.477 4 10 4s10-1.79 10-4V9" stroke="currentColor" strokeWidth="1.8" />
            <path d="M6 16c0 2.21 4.477 4 10 4s10-1.79 10-4" stroke="currentColor" strokeWidth="1.8" />
          </svg>
        ),
      },
      {
        title: "Vestavěná autentizace",
        description:
          "Přihlášení přes e-mail, Google, GitHub — vše nakonfigurované od začátku.",
        icon: (
          <svg width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden="true">
            <circle cx="16" cy="11" r="5" stroke="currentColor" strokeWidth="1.8" />
            <path d="M7 26c0-4.418 4.03-8 9-8s9 3.582 9 8" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
            <path d="M22 15l1.5 1.5L27 13" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        ),
      },
      {
        title: "One-click deploy",
        description:
          "Hosting, SSL a vlastní doména. Publikujte jedním kliknutím.",
        icon: (
          <svg width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden="true">
            <path d="M16 4l-8 8h5v10h6V12h5l-8-8z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
            <path d="M6 26h20" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
          </svg>
        ),
      },
      {
        title: "API integrace",
        description:
          "Stripe, Zapier, e-mail, SMS — připojte se k čemukoli přes vestavěné konektory.",
        icon: (
          <svg width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden="true">
            <circle cx="8" cy="16" r="4" stroke="currentColor" strokeWidth="1.8" />
            <circle cx="24" cy="16" r="4" stroke="currentColor" strokeWidth="1.8" />
            <path d="M12 16h8" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
            <path d="M16 12v-4M16 24v-4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
          </svg>
        ),
      },
    ],
  },
  {
    id: "spoluprace",
    heading: "Spolupráce a správa",
    features: [
      {
        title: "Týmové workspace",
        description:
          "Pracujte společně v reálném čase. Komentáře, role a oprávnění.",
        icon: (
          <svg width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden="true">
            <circle cx="10" cy="12" r="4" stroke="currentColor" strokeWidth="1.8" />
            <circle cx="22" cy="12" r="4" stroke="currentColor" strokeWidth="1.8" />
            <path d="M2 26c0-3.866 3.582-7 8-7s8 3.134 8 7" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
            <path d="M22 19c2.21 0 4.2.672 5.657 1.757" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
          </svg>
        ),
      },
      {
        title: "GitHub sync",
        description:
          "Automatická synchronizace s GitHubem. Plný přístup ke kódu.",
        icon: (
          <svg width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden="true">
            <circle cx="16" cy="16" r="11" stroke="currentColor" strokeWidth="1.8" />
            <path d="M13 22c0-2 1-3 1-3s-3-.5-3-4c0-2.5 1.5-3.5 1.5-3.5S12 9 13 9c0 0 1 0 2 1 .667-.167 2-.5 2-.5s1 0 2-.5c1 1 1 2.5 1 2.5S21.5 12.5 21.5 15c0 3.5-3 4-3 4s1 1 1 3v1" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        ),
      },
      {
        title: "Version history",
        description:
          "Kompletní historie změn s možností návratu k libovolné verzi.",
        icon: (
          <svg width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden="true">
            <circle cx="16" cy="16" r="11" stroke="currentColor" strokeWidth="1.8" />
            <path d="M16 10v6l4 2" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M7 8l-3 3 3 3" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M4 11h4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
          </svg>
        ),
      },
      {
        title: "Security scan",
        description:
          "Automatická kontrola zranitelností před každým publikováním.",
        icon: (
          <svg width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden="true">
            <path d="M16 4L6 8v8c0 6.627 4.477 12 10 14 5.523-2 10-7.373 10-14V8L16 4z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
            <path d="M12 16l2.5 2.5L20 13" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        ),
      },
    ],
  },
];

// ── Page ──────────────────────────────────────────────────────────────────────

export default function FunkcePage() {
  return (
    <>
      <Navbar />
      <main id="main-content">

        {/* ── Hero ─────────────────────────────────────────────────────── */}
        <section className="hero-gradient pt-24 pb-20 px-6 lg:px-10 text-center">
          <div className="max-w-3xl mx-auto">
            <h1 className="animate-hero-title text-4xl sm:text-5xl lg:text-6xl font-semibold text-text tracking-[-0.03em] leading-[1.08] mb-6">
              Všechno, co{" "}
              <em
                className="not-italic"
                style={{ fontFamily: "var(--font-serif)", fontStyle: "italic" }}
              >
                potřebujete
              </em>
            </h1>
            <p className="animate-hero-subtitle text-lg text-text-secondary leading-relaxed tracking-[-0.01em] max-w-2xl mx-auto">
              Od nápadu k hotové aplikaci — vše na jednom místě.
            </p>
          </div>
        </section>

        {/* ── Feature categories ───────────────────────────────────────── */}
        {categories.map((category, catIndex) => (
          <section
            key={category.id}
            className="py-16 px-6 lg:px-10"
            aria-labelledby={`category-${category.id}`}
          >
            <div className="max-w-7xl mx-auto">
              <ScrollReveal className="mb-10">
                <h2
                  id={`category-${category.id}`}
                  className="text-2xl sm:text-3xl font-semibold text-text tracking-[-0.03em]"
                >
                  {category.heading}
                </h2>
              </ScrollReveal>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {category.features.map((feature, i) => (
                  <ScrollReveal key={feature.title} delay={i * 70 + catIndex * 30}>
                    <div className="bg-surface rounded-2xl border border-border/40 dark:border-border/80 p-6 card-hover flex flex-col gap-4 h-full dark:shadow-[0_1px_4px_rgba(0,0,0,0.4)]">
                      <div className="text-accent">{feature.icon}</div>
                      <div>
                        <h3 className="font-bold text-text tracking-[-0.02em] mb-2">
                          {feature.title}
                        </h3>
                        <p className="text-sm text-text-secondary leading-relaxed tracking-[-0.01em]">
                          {feature.description}
                        </p>
                      </div>
                    </div>
                  </ScrollReveal>
                ))}
              </div>
            </div>
          </section>
        ))}

        {/* ── Bottom CTA ───────────────────────────────────────────────── */}
        <section className="py-20 px-6 lg:px-10 text-center border-t border-border/40" aria-labelledby="funkce-cta-heading">
          <ScrollReveal>
            <div className="max-w-xl mx-auto">
              <h2
                id="funkce-cta-heading"
                className="text-2xl sm:text-3xl font-semibold text-text tracking-[-0.03em] mb-4"
              >
                Připraveni začít?
              </h2>
              <p className="text-text-secondary tracking-[-0.01em] mb-8">
                Vyzkoušejte platformu zdarma — bez kreditní karty, bez závazků.
              </p>
              <Link
                href="/pricing"
                className="inline-flex items-center gap-2 font-medium text-sm px-8 py-3.5 rounded-full text-white transition-opacity duration-300 hover:opacity-90"
                style={{ backgroundColor: "var(--color-accent)" }}
              >
                Začít zdarma
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                  <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
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
