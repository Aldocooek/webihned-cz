import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";

function safeJsonLd(data: unknown): string {
  return JSON.stringify(data).replace(/</g, "\\u003c");
}

const securityJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Bezpečnost — webihned.cz",
  description: "Bezpečnostní standardy, GDPR compliance a certifikace platformy webihned.cz.",
  url: "https://webihned.cz/bezpecnost",
};

export const metadata: Metadata = {
  title: "Bezpečnost a ochrana dat | webihned.cz",
  description:
    "Vaše data a aplikace jsou chráněny průmyslovými standardy šifrování. GDPR, TLS 1.3, EU hosting a nepřetržité monitorování — bezpečnost je u nás na prvním místě.",
  alternates: {
    canonical: "/bezpecnost",
  },
  openGraph: {
    title: "Bezpečnost a ochrana dat | webihned.cz",
    description:
      "Vaše data a aplikace jsou chráněny průmyslovými standardy šifrování. GDPR, TLS 1.3, EU hosting a nepřetržité monitorování.",
    url: "https://webihned.cz/bezpecnost",
    siteName: "webihned.cz",
    type: "website",
    locale: "cs_CZ",
  },
};

// ── Trust badges ──────────────────────────────────────────────────────────────

const trustBadges = [
  {
    icon: (
      <svg
        width="32"
        height="32"
        viewBox="0 0 32 32"
        fill="none"
        aria-hidden="true"
      >
        <rect x="6" y="4" width="20" height="24" rx="3" stroke="currentColor" strokeWidth="1.8" />
        <path d="M11 12h10M11 16h10M11 20h6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
        <circle cx="23" cy="22" r="5" fill="var(--color-bg)" stroke="currentColor" strokeWidth="1.8" />
        <path d="M21 22l1.5 1.5L25 20.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: "GDPR",
    description: "Plně v souladu s GDPR a evropskými standardy ochrany dat",
  },
  {
    icon: (
      <svg
        width="32"
        height="32"
        viewBox="0 0 32 32"
        fill="none"
        aria-hidden="true"
      >
        <path d="M16 4L6 8v8c0 6.627 4.477 12 10 14 5.523-2 10-7.373 10-14V8L16 4z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
        <path d="M12 16l2.5 2.5L20 13" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: "SSL/TLS",
    description: "Veškerá komunikace šifrována protokolem TLS 1.3",
  },
  {
    icon: (
      <svg
        width="32"
        height="32"
        viewBox="0 0 32 32"
        fill="none"
        aria-hidden="true"
      >
        <circle cx="16" cy="16" r="11" stroke="currentColor" strokeWidth="1.8" />
        <path d="M16 5v2M16 25v2M5 16H7M25 16h2" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
        <path d="M10 10c1.5 2 2.5 3.8 6 6-3.5 2.2-4.5 4-6 6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
        <path d="M22 10c-1.5 2-2.5 3.8-6 6 3.5 2.2 4.5 4 6 6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    ),
    title: "EU hosting",
    description: "Data uložena výhradně na serverech v Evropské unii",
  },
  {
    icon: (
      <svg
        width="32"
        height="32"
        viewBox="0 0 32 32"
        fill="none"
        aria-hidden="true"
      >
        <circle cx="16" cy="16" r="11" stroke="currentColor" strokeWidth="1.8" />
        <path d="M16 10v6l4 2" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M7 27l2-2M23 27l2-2" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    ),
    title: "24/7 monitoring",
    description: "Nepřetržité sledování infrastruktury a automatické zálohy",
  },
];

// ── Security features ─────────────────────────────────────────────────────────

const securityFeatures = [
  {
    icon: (
      <svg
        width="32"
        height="32"
        viewBox="0 0 32 32"
        fill="none"
        aria-hidden="true"
      >
        <rect x="9" y="13" width="14" height="13" rx="2" stroke="currentColor" strokeWidth="1.8" />
        <path d="M12 13v-3a4 4 0 0 1 8 0v3" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
        <circle cx="16" cy="19" r="1.5" fill="currentColor" />
        <path d="M16 20.5v2" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    ),
    title: "Šifrování dat",
    description:
      "AES-256 šifrování v klidu, TLS 1.3 při přenosu. Vaše data jsou chráněna vždy.",
  },
  {
    icon: (
      <svg
        width="32"
        height="32"
        viewBox="0 0 32 32"
        fill="none"
        aria-hidden="true"
      >
        <circle cx="16" cy="11" r="5" stroke="currentColor" strokeWidth="1.8" />
        <path d="M7 26c0-4.418 4.03-8 9-8s9 3.582 9 8" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
        <path d="M22 15l1.5 1.5L27 13" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: "Autentizace",
    description:
      "Vestavěný systém správy uživatelů s podporou OAuth, SAML a dvoufaktorového ověření.",
  },
  {
    icon: (
      <svg
        width="32"
        height="32"
        viewBox="0 0 32 32"
        fill="none"
        aria-hidden="true"
      >
        <rect x="4" y="4" width="11" height="11" rx="2" stroke="currentColor" strokeWidth="1.8" />
        <rect x="17" y="4" width="11" height="11" rx="2" stroke="currentColor" strokeWidth="1.8" />
        <rect x="4" y="17" width="11" height="11" rx="2" stroke="currentColor" strokeWidth="1.8" />
        <rect x="17" y="17" width="11" height="11" rx="2" stroke="currentColor" strokeWidth="1.8" />
      </svg>
    ),
    title: "Izolace prostředí",
    description:
      "Každý workspace a projekt je logicky izolován. Žádné sdílení dat mezi účty.",
  },
  {
    icon: (
      <svg
        width="32"
        height="32"
        viewBox="0 0 32 32"
        fill="none"
        aria-hidden="true"
      >
        <path d="M8 20c0 4 2.5 6 8 6s8-2 8-6V12c0-4-2.5-6-8-6S8 8 8 12v8z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
        <path d="M8 15h16M12 6v3M20 6v3" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
        <path d="M13 20l2 2 4-4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: "Automatické zálohy",
    description:
      "Denní zálohy databáze s možností obnovy. Žádná ztráta dat.",
  },
  {
    icon: (
      <svg
        width="32"
        height="32"
        viewBox="0 0 32 32"
        fill="none"
        aria-hidden="true"
      >
        <path d="M6 8h20v18a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V8z" stroke="currentColor" strokeWidth="1.8" />
        <path d="M4 8h24" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
        <path d="M10 8V6a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v2" stroke="currentColor" strokeWidth="1.8" />
        <path d="M11 15h10M11 19h7" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    ),
    title: "Audit logy",
    description:
      "Kompletní záznamy všech akcí. Kdo, co a kdy změnil — vždy máte přehled.",
  },
  {
    icon: (
      <svg
        width="32"
        height="32"
        viewBox="0 0 32 32"
        fill="none"
        aria-hidden="true"
      >
        <circle cx="16" cy="16" r="11" stroke="currentColor" strokeWidth="1.8" />
        <path d="M16 10v6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
        <circle cx="16" cy="20.5" r="1.2" fill="currentColor" />
        <path d="M12 8.5c1.1-.9 2.5-1.5 4-1.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    ),
    title: "Bezpečnostní sken",
    description:
      "Automatická kontrola zranitelností před každým publikováním aplikace.",
  },
];

// ── Compliance items ──────────────────────────────────────────────────────────

const complianceItems = [
  {
    name: "GDPR",
    detail: "Nařízení EU 2016/679 o ochraně osobních údajů",
    status: "done" as const,
  },
  {
    name: "ISO 27001",
    detail: "Mezinárodní standard pro řízení bezpečnosti informací",
    status: "pending" as const,
  },
  {
    name: "SOC 2 Type II",
    detail: "Audit bezpečnostních kontrolních mechanismů",
    status: "pending" as const,
  },
  {
    name: "EU AI Act",
    detail: "Nízké riziko — plná shoda s požadavky nařízení",
    status: "done" as const,
  },
];

// ── Page ──────────────────────────────────────────────────────────────────────

export default function BezpecnostPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: safeJsonLd(securityJsonLd) }}
      />
      <Navbar />
      <main id="main-content">

        {/* ── Hero ─────────────────────────────────────────────────────── */}
        <section className="hero-gradient pt-24 pb-20 px-6 lg:px-10 text-center">
          <div className="max-w-3xl mx-auto">
            {/* Shield icon */}
            <div className="animate-hero-title flex justify-center mb-8">
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-accent/10 text-accent">
                <svg
                  width="44"
                  height="44"
                  viewBox="0 0 44 44"
                  fill="none"
                  aria-hidden="true"
                >
                  <path
                    d="M22 4L7 10v12c0 9.389 6.299 17.177 15 19 8.701-1.823 15-9.611 15-19V10L22 4z"
                    stroke="currentColor"
                    strokeWidth="2.2"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M15.5 22l4.5 4.5L29.5 17"
                    stroke="currentColor"
                    strokeWidth="2.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </div>

            <h1 className="animate-hero-title text-4xl sm:text-5xl lg:text-6xl font-semibold text-text tracking-[-0.03em] leading-[1.08] mb-6">
              Bezpečnost na{" "}
              <em
                className="not-italic"
                style={{ fontFamily: "var(--font-serif)", fontStyle: "italic" }}
              >
                prvním místě
              </em>
            </h1>

            <p className="animate-hero-subtitle text-lg text-text-secondary leading-relaxed tracking-[-0.01em] max-w-2xl mx-auto">
              Vaše data a aplikace jsou chráněny průmyslovými standardy šifrování
              a bezpečnostními postupy.
            </p>
          </div>
        </section>

        {/* ── Trust badges ─────────────────────────────────────────────── */}
        <section
          className="py-16 px-6 lg:px-10"
          aria-labelledby="trust-heading"
        >
          <h2 id="trust-heading" className="sr-only">
            Bezpečnostní záruky
          </h2>
          <div className="max-w-7xl mx-auto">
            <ScrollReveal>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                {trustBadges.map((badge) => (
                  <div
                    key={badge.title}
                    className="bg-surface rounded-2xl border border-border/40 p-6 card-hover flex flex-col gap-3"
                  >
                    <div className="text-accent">{badge.icon}</div>
                    <p className="font-semibold text-text tracking-[-0.02em]">
                      {badge.title}
                    </p>
                    <p className="text-sm text-text-secondary leading-relaxed tracking-[-0.01em]">
                      {badge.description}
                    </p>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* ── Security features grid ────────────────────────────────────── */}
        <section
          className="py-16 px-6 lg:px-10"
          aria-labelledby="features-heading"
        >
          <div className="max-w-7xl mx-auto">
            <ScrollReveal className="text-center mb-12">
              <h2
                id="features-heading"
                className="text-3xl sm:text-4xl font-semibold text-text tracking-[-0.03em] mb-4"
              >
                Vícevrstvá ochrana
              </h2>
              <p className="text-text-secondary tracking-[-0.01em] max-w-xl mx-auto">
                Každá vrstva aplikace je navržena s bezpečností jako první
                prioritou.
              </p>
            </ScrollReveal>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {securityFeatures.map((feature, i) => (
                <ScrollReveal key={feature.title} delay={i * 60}>
                  <div className="bg-surface rounded-2xl border border-border/40 p-6 card-hover h-full flex flex-col gap-4">
                    <div className="text-accent">{feature.icon}</div>
                    <div>
                      <h3 className="font-semibold text-text tracking-[-0.02em] mb-2">
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

        {/* ── Compliance ───────────────────────────────────────────────── */}
        <section
          className="py-16 px-6 lg:px-10"
          aria-labelledby="compliance-heading"
        >
          <div className="max-w-3xl mx-auto">
            <ScrollReveal className="text-center mb-12">
              <h2
                id="compliance-heading"
                className="text-3xl sm:text-4xl font-semibold text-text tracking-[-0.03em] mb-4"
              >
                Certifikace a standardy
              </h2>
              <p className="text-text-secondary tracking-[-0.01em]">
                Dodržujeme přísné mezinárodní bezpečnostní normy a aktivně
                pracujeme na dalších certifikacích.
              </p>
            </ScrollReveal>

            <div className="flex flex-col gap-3">
              {complianceItems.map((item, i) => (
                <ScrollReveal key={item.name} delay={i * 70}>
                  <div className="bg-surface rounded-2xl border border-border/40 px-5 py-4 sm:px-6 sm:py-5 card-hover flex items-start sm:items-center justify-between gap-3">
                    <div className="flex flex-col gap-0.5">
                      <span className="font-semibold text-text tracking-[-0.02em]">
                        {item.name}
                      </span>
                      <span className="text-sm text-text-secondary tracking-[-0.01em]">
                        {item.detail}
                      </span>
                    </div>
                    {item.status === "done" ? (
                      <span className="flex-shrink-0 inline-flex items-center gap-1.5 text-xs font-medium px-3 py-1.5 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
                        <svg
                          width="12"
                          height="12"
                          viewBox="0 0 12 12"
                          fill="none"
                          aria-hidden="true"
                        >
                          <path
                            d="M2 6l2.5 2.5L10 3.5"
                            stroke="currentColor"
                            strokeWidth="1.6"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                        Splněno
                      </span>
                    ) : (
                      <span className="flex-shrink-0 inline-flex items-center gap-1.5 text-xs font-medium px-3 py-1.5 rounded-full bg-amber-500/10 text-amber-600 dark:text-amber-400 border border-amber-500/20">
                        <svg
                          width="12"
                          height="12"
                          viewBox="0 0 12 12"
                          fill="none"
                          aria-hidden="true"
                        >
                          <circle
                            cx="6"
                            cy="6"
                            r="4.5"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            strokeDasharray="3 2"
                          />
                        </svg>
                        V přípravě
                      </span>
                    )}
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* ── DPA section ──────────────────────────────────────────────── */}
        <section
          className="py-16 px-6 lg:px-10"
          aria-labelledby="dpa-heading"
        >
          <div className="max-w-3xl mx-auto">
            <ScrollReveal>
              <div className="bg-surface rounded-2xl border border-border/40 p-8 sm:p-10 text-center">
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-accent/10 text-accent mb-6">
                  <svg
                    width="28"
                    height="28"
                    viewBox="0 0 28 28"
                    fill="none"
                    aria-hidden="true"
                  >
                    <rect
                      x="5"
                      y="3"
                      width="18"
                      height="22"
                      rx="2.5"
                      stroke="currentColor"
                      strokeWidth="1.8"
                    />
                    <path
                      d="M9 9h10M9 13h10M9 17h6"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                    />
                  </svg>
                </div>
                <h2
                  id="dpa-heading"
                  className="text-2xl sm:text-3xl font-semibold text-text tracking-[-0.03em] mb-4"
                >
                  Smlouva o zpracování dat (DPA)
                </h2>
                <p className="text-text-secondary leading-relaxed tracking-[-0.01em] mb-8 max-w-lg mx-auto">
                  Pro enterprise zákazníky poskytujeme DPA v souladu s GDPR.
                  Kontaktujte nás pro více informací.
                </p>
                <Link
                  href="/dpa"
                  className="btn-secondary inline-flex items-center gap-2 text-sm font-medium px-7 py-3 rounded-full border border-border text-text hover:border-text transition-colors duration-300 tracking-[-0.01em]"
                  aria-label="Stáhnout DPA dokument"
                >
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    aria-hidden="true"
                  >
                    <path
                      d="M8 2v8M5 8l3 3 3-3"
                      stroke="currentColor"
                      strokeWidth="1.6"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M3 13h10"
                      stroke="currentColor"
                      strokeWidth="1.6"
                      strokeLinecap="round"
                    />
                  </svg>
                  Stáhnout DPA
                </Link>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* ── Bottom CTA ───────────────────────────────────────────────── */}
        <section className="py-20 px-6 lg:px-10 text-center" aria-labelledby="cta-heading">
          <ScrollReveal>
            <div className="max-w-xl mx-auto">
              <h2
                id="cta-heading"
                className="text-2xl sm:text-3xl font-semibold text-text tracking-[-0.03em] mb-4"
              >
                Máte otázky k bezpečnosti?
              </h2>
              <a
                href="mailto:security@webihned.cz"
                className="link-arrow inline-flex items-center gap-2 text-accent font-medium tracking-[-0.01em] hover:underline underline-offset-4 transition-colors duration-300"
              >
                Kontaktujte náš bezpečnostní tým
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
        </section>

      </main>
      <Footer />
    </>
  );
}
