import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";

function safeJsonLd(data: unknown): string {
  return JSON.stringify(data).replace(/</g, "\\u003c");
}

const orgJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "webihned.cz s.r.o.",
  url: "https://webihned.cz",
  description: "Český tým tvořící AI platformu pro rychlou tvorbu webových aplikací.",
  address: { "@type": "PostalAddress", streetAddress: "Václavské náměstí 1", addressLocality: "Praha", postalCode: "110 00", addressCountry: "CZ" },
  contactPoint: { "@type": "ContactPoint", email: "info@webihned.cz", contactType: "customer service", availableLanguage: "Czech" },
};

export const metadata: Metadata = {
  title: "O nás | webihned.cz",
  description:
    "Jsme český tým, který věří, že tvorba aplikací by měla být dostupná všem. Demokratizujeme vývoj softwaru.",
  alternates: {
    canonical: "/o-nas",
  },
  openGraph: {
    title: "O nás | webihned.cz",
    description:
      "Jsme český tým, který věří, že tvorba aplikací by měla být dostupná všem.",
    url: "https://webihned.cz/o-nas",
    siteName: "webihned.cz",
    type: "website",
    locale: "cs_CZ",
  },
};

// ── Data ───────────────────────────────────────────────────────────────────────

const team = [
  {
    initials: "JP",
    name: "Jan Procházka",
    role: "CEO & Co-founder",
    bio: "Buduje webihned.cz od prvního řádku kódu.",
  },
  {
    initials: "MK",
    name: "Markéta Králová",
    role: "CTO",
    bio: "10 let zkušeností s AI a machine learning.",
  },
  {
    initials: "TV",
    name: "Tomáš Veselý",
    role: "Head of Product",
    bio: "Produktový designér s vášní pro jednoduchost.",
  },
  {
    initials: "EN",
    name: "Eva Němcová",
    role: "Head of Customer Success",
    bio: "Zajišťuje, že každý zákazník uspěje.",
  },
];

const stats = [
  { value: "10 000+", label: "aplikací vytvořeno" },
  { value: "50+", label: "zemí světa" },
  { value: "99.9%", label: "uptime platformy" },
  { value: "< 60s", label: "průměrný build" },
];

// ── Page ───────────────────────────────────────────────────────────────────────

export default function ONasPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: safeJsonLd(orgJsonLd) }}
      />
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
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                  <circle cx="9" cy="7" r="4" />
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                  <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                </svg>
                O nás
              </div>
            </ScrollReveal>

            <ScrollReveal delay={60}>
              <h1 className="text-4xl sm:text-5xl lg:text-[64px] font-semibold text-text tracking-[-0.035em] leading-[1.05] mb-6">
                Tvoříme budoucnost{" "}
                <em
                  style={{ fontFamily: "var(--font-serif)", fontStyle: "italic" }}
                >
                  webu
                </em>
              </h1>
            </ScrollReveal>

            <ScrollReveal delay={120}>
              <p className="text-lg text-text-secondary leading-relaxed tracking-[-0.01em] max-w-2xl mx-auto">
                Jsme český tým, který věří, že tvorba aplikací by měla být dostupná&nbsp;všem.
              </p>
            </ScrollReveal>
          </div>
        </section>

        {/* ── Mise + Proč ──────────────────────────────────────────────── */}
        <section className="py-20 px-6 lg:px-10" aria-labelledby="mise-heading">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

              {/* Naše mise */}
              <ScrollReveal direction="left">
                <div className="bg-surface rounded-2xl border border-border/40 p-8 sm:p-10 h-full flex flex-col gap-5">
                  <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-accent/10 text-accent flex-shrink-0">
                    <svg
                      width="28"
                      height="28"
                      viewBox="0 0 28 28"
                      fill="none"
                      aria-hidden="true"
                    >
                      <circle cx="14" cy="14" r="10" stroke="currentColor" strokeWidth="1.8" />
                      <path d="M14 9v5l3 3" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                      <circle cx="14" cy="14" r="2" fill="currentColor" />
                    </svg>
                  </div>
                  <div>
                    <h2
                      id="mise-heading"
                      className="text-xl font-semibold text-text tracking-[-0.02em] mb-3"
                    >
                      Naše mise
                    </h2>
                    <p className="text-text-secondary leading-relaxed tracking-[-0.01em]">
                      Demokratizujeme vývoj softwaru. Věříme, že každý by měl mít možnost
                      proměnit svůj nápad v realitu — bez ohledu na technické znalosti.
                    </p>
                  </div>
                </div>
              </ScrollReveal>

              {/* Proč webihned */}
              <ScrollReveal direction="right" delay={60}>
                <div className="bg-surface rounded-2xl border border-border/40 p-8 sm:p-10 h-full flex flex-col gap-5">
                  <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-accent/10 text-accent flex-shrink-0">
                    <svg
                      width="28"
                      height="28"
                      viewBox="0 0 28 28"
                      fill="none"
                      aria-hidden="true"
                    >
                      <path d="M14 4L4 9l10 5 10-5-10-5z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
                      <path d="M4 14l10 5 10-5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M4 19l10 5 10-5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <div>
                    <h2 className="text-xl font-semibold text-text tracking-[-0.02em] mb-3">
                      Proč webihned.cz?
                    </h2>
                    <p className="text-text-secondary leading-relaxed tracking-[-0.01em]">
                      Vznikli jsme z frustrace. Viděli jsme, jak skvělé nápady umírají,
                      protože jejich autoři nemohli najít vývojáře nebo zaplatit statisíce
                      za vývoj. To jsme chtěli změnit.
                    </p>
                  </div>
                </div>
              </ScrollReveal>

            </div>
          </div>
        </section>

        {/* ── Tým ──────────────────────────────────────────────────────── */}
        <section
          className="py-20 px-6 lg:px-10 border-t border-border/30"
          aria-labelledby="team-heading"
        >
          <div className="max-w-7xl mx-auto">
            <ScrollReveal className="text-center mb-14">
              <h2
                id="team-heading"
                className="text-3xl sm:text-4xl font-semibold text-text tracking-[-0.03em] mb-4"
              >
                Náš tým
              </h2>
              <p className="text-text-secondary tracking-[-0.01em] max-w-xl mx-auto">
                Malý tým s velkým dopadem. Každý z nás přináší jiný pohled.
              </p>
            </ScrollReveal>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {team.map((member, i) => (
                <ScrollReveal key={member.name} delay={i * 60}>
                  <div className="bg-surface rounded-2xl border border-border/40 p-7 card-hover flex flex-col items-center text-center gap-4">
                    {/* Avatar */}
                    <div
                      className="w-16 h-16 rounded-full flex items-center justify-center text-white text-lg font-semibold tracking-[-0.02em] flex-shrink-0"
                      style={{ backgroundColor: "var(--color-accent)" }}
                      aria-hidden="true"
                    >
                      {member.initials}
                    </div>
                    <div>
                      <h3 className="font-semibold text-text tracking-[-0.02em] text-base mb-0.5">
                        {member.name}
                      </h3>
                      <p className="text-xs font-medium text-accent tracking-[-0.01em] mb-2">
                        {member.role}
                      </p>
                      <p className="text-sm text-text-secondary leading-relaxed tracking-[-0.01em]">
                        {member.bio}
                      </p>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* ── V číslech ────────────────────────────────────────────────── */}
        <section
          className="py-20 px-6 lg:px-10 border-t border-border/30"
          aria-labelledby="stats-heading"
        >
          <div className="max-w-7xl mx-auto">
            <ScrollReveal className="text-center mb-14">
              <h2
                id="stats-heading"
                className="text-3xl sm:text-4xl font-semibold text-text tracking-[-0.03em] mb-4"
              >
                V číslech
              </h2>
            </ScrollReveal>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
              {stats.map((stat, i) => (
                <ScrollReveal key={stat.label} delay={i * 60}>
                  <div className="bg-surface rounded-2xl border border-border/40 p-7 card-hover text-center flex flex-col gap-2">
                    <span className="text-3xl sm:text-4xl font-semibold text-text tracking-[-0.04em]">
                      {stat.value}
                    </span>
                    <span className="text-sm text-text-secondary tracking-[-0.01em]">
                      {stat.label}
                    </span>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA kariera ──────────────────────────────────────────────── */}
        <section
          className="py-24 px-6 lg:px-10 text-center"
          aria-labelledby="onas-cta"
        >
          <ScrollReveal>
            <div className="max-w-xl mx-auto">
              <h2
                id="onas-cta"
                className="text-3xl sm:text-4xl font-semibold text-text tracking-[-0.03em] mb-5"
              >
                Přidejte se k&nbsp;nám
              </h2>
              <p className="text-text-secondary tracking-[-0.01em] mb-8">
                Hledáme talentované lidi, kteří chtějí měnit způsob, jakým se tvoří software.
              </p>
              <a
                href="/kariera"
                className="btn-primary inline-flex items-center gap-2 bg-accent text-white text-sm font-medium px-8 py-3.5 rounded-full tracking-[-0.01em] hover:bg-accent-hover transition-colors duration-200"
                style={{ backgroundColor: "var(--color-accent)" }}
              >
                Otevřené pozice
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
