import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";

export const metadata: Metadata = {
  title: "Partnerský program | webihned.cz",
  description:
    "Vydělávejte doporučováním webihned.cz. 20% opakující se provize z každého přivedeného zákazníka. Vlastní dashboard, marketingové materiály a dedicovaná podpora.",
  alternates: {
    canonical: "/partneri",
  },
  openGraph: {
    title: "Partnerský program | webihned.cz",
    description:
      "Vydělávejte doporučováním webihned.cz svým klientům. 20% provize, opakovaně každý měsíc.",
    url: "https://webihned.cz/partneri",
    siteName: "webihned.cz",
    type: "website",
    locale: "cs_CZ",
  },
};

// ── Benefits ──────────────────────────────────────────────────────────────────

const benefits = [
  {
    icon: (
      <svg
        width="28"
        height="28"
        viewBox="0 0 28 28"
        fill="none"
        aria-hidden="true"
      >
        <circle cx="14" cy="14" r="10" stroke="currentColor" strokeWidth="1.8" />
        <path
          d="M14 8v6l4 2"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M10 19.5l1.5-1.5M17.5 19.5l-1.5-1.5"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
        />
      </svg>
    ),
    title: "20% provize",
    description:
      "Z každého platícího zákazníka, kterého přivedete. Opakovaně, každý měsíc.",
  },
  {
    icon: (
      <svg
        width="28"
        height="28"
        viewBox="0 0 28 28"
        fill="none"
        aria-hidden="true"
      >
        <rect
          x="3"
          y="5"
          width="22"
          height="18"
          rx="3"
          stroke="currentColor"
          strokeWidth="1.8"
        />
        <path
          d="M3 10h22"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
        />
        <path
          d="M8 15h5M8 18.5h3"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
        />
        <rect
          x="17"
          y="14"
          width="5"
          height="5"
          rx="1"
          stroke="currentColor"
          strokeWidth="1.8"
        />
      </svg>
    ),
    title: "Vlastní dashboard",
    description:
      "Sledujte své konverze, výdělky a výkonnost v reálném čase.",
  },
  {
    icon: (
      <svg
        width="28"
        height="28"
        viewBox="0 0 28 28"
        fill="none"
        aria-hidden="true"
      >
        <rect
          x="4"
          y="4"
          width="20"
          height="16"
          rx="3"
          stroke="currentColor"
          strokeWidth="1.8"
        />
        <path
          d="M8 10h12M8 14h8"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
        />
        <path
          d="M14 20v4M10 24h8"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
        />
      </svg>
    ),
    title: "Marketingové materiály",
    description:
      "Bannery, texty a šablony připravené k použití.",
  },
  {
    icon: (
      <svg
        width="28"
        height="28"
        viewBox="0 0 28 28"
        fill="none"
        aria-hidden="true"
      >
        <circle cx="14" cy="10" r="4.5" stroke="currentColor" strokeWidth="1.8" />
        <path
          d="M6 24c0-4.418 3.582-8 8-8s8 3.582 8 8"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
        />
        <path
          d="M21 12l1.5 1.5L26 10"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    title: "Dedicovaný partner manažer",
    description:
      "Osobní podpora pro váš úspěch.",
  },
];

// ── Steps ─────────────────────────────────────────────────────────────────────

const steps = [
  {
    num: "01",
    title: "Zaregistrujte se",
    description:
      "Vyplňte jednoduchý formulář a do 24 hodin dostanete přístup do partnerského programu.",
  },
  {
    num: "02",
    title: "Sdílejte svůj odkaz",
    description:
      "Získáte unikátní affiliate odkaz a marketingové materiály připravené k okamžitému použití.",
  },
  {
    num: "03",
    title: "Vydělávejte",
    description:
      "Za každého přivedeného zákazníka dostanete 20% provizi — každý měsíc, dokud platí.",
  },
];

// ── Target audiences ──────────────────────────────────────────────────────────

const audiences = [
  { label: "Agentury" },
  { label: "Freelanceři" },
  { label: "Konzultanti" },
  { label: "Influenceři" },
  { label: "Školy" },
];

// ── Page ──────────────────────────────────────────────────────────────────────

export default function PartneriPage() {
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
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                  <circle cx="9" cy="7" r="4" />
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                  <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                </svg>
                Partnerský program
              </div>
            </ScrollReveal>

            <ScrollReveal delay={60}>
              <h1 className="text-4xl sm:text-5xl lg:text-[64px] font-semibold text-text tracking-[-0.035em] leading-[1.05] mb-6">
                Partnerský{" "}
                <em
                  style={{ fontFamily: "var(--font-serif)", fontStyle: "italic" }}
                >
                  program
                </em>
              </h1>
            </ScrollReveal>

            <ScrollReveal delay={120}>
              <p className="text-lg text-text-secondary leading-relaxed tracking-[-0.01em] max-w-2xl mx-auto">
                Vydělávejte doporučováním webihned.cz svým klientům.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={180}>
              <div className="mt-8">
                <a
                  href="/kontakt"
                  className="inline-flex items-center gap-2 text-sm font-medium px-8 py-3.5 rounded-full text-white tracking-[-0.01em] transition-colors duration-200"
                  style={{ backgroundColor: "var(--color-accent)" }}
                >
                  Přihlásit se do programu
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
        </section>

        {/* ── Benefits grid ─────────────────────────────────────────────── */}
        <section
          className="py-20 px-6 lg:px-10"
          aria-labelledby="benefits-heading"
        >
          <div className="max-w-7xl mx-auto">
            <ScrollReveal className="text-center mb-14">
              <h2
                id="benefits-heading"
                className="text-3xl sm:text-4xl font-semibold text-text tracking-[-0.03em] mb-4"
              >
                Co získáte jako partner
              </h2>
              <p className="text-text-secondary tracking-[-0.01em] max-w-xl mx-auto">
                Program je navržen pro maximální výdělek s minimálním úsilím.
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

        {/* ── How it works ─────────────────────────────────────────────── */}
        <section
          className="py-20 px-6 lg:px-10 bg-surface/50"
          aria-labelledby="how-heading"
        >
          <div className="max-w-4xl mx-auto">
            <ScrollReveal className="text-center mb-14">
              <h2
                id="how-heading"
                className="text-3xl sm:text-4xl font-semibold text-text tracking-[-0.03em] mb-4"
              >
                Jak to funguje
              </h2>
              <p className="text-text-secondary tracking-[-0.01em]">
                Tři kroky k prvnímu výdělku.
              </p>
            </ScrollReveal>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
              {/* Connector line — desktop only */}
              <div
                className="hidden md:block absolute top-8 left-[calc(33.33%+1rem)] right-[calc(33.33%+1rem)] h-px bg-border/50"
                aria-hidden="true"
              />

              {steps.map((step, i) => (
                <ScrollReveal key={step.num} delay={i * 80}>
                  <div className="flex flex-col items-center text-center gap-4">
                    <div className="w-16 h-16 rounded-2xl bg-accent/10 border border-accent/20 flex items-center justify-center flex-shrink-0 relative z-10">
                      <span className="text-xl font-semibold text-accent tracking-[-0.02em]">
                        {step.num}
                      </span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-text tracking-[-0.02em] mb-2">
                        {step.title}
                      </h3>
                      <p className="text-sm text-text-secondary leading-relaxed tracking-[-0.01em]">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* ── Target audience ───────────────────────────────────────────── */}
        <section
          className="py-20 px-6 lg:px-10"
          aria-labelledby="audience-heading"
        >
          <div className="max-w-3xl mx-auto text-center">
            <ScrollReveal className="mb-10">
              <h2
                id="audience-heading"
                className="text-3xl sm:text-4xl font-semibold text-text tracking-[-0.03em] mb-4"
              >
                Pro koho je program určen?
              </h2>
              <p className="text-text-secondary tracking-[-0.01em]">
                Program funguje pro každého, kdo má klienty nebo publikum.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={80}>
              <div className="flex flex-wrap justify-center gap-3">
                {audiences.map((a) => (
                  <span
                    key={a.label}
                    className="inline-flex items-center px-5 py-2.5 rounded-full bg-surface border border-border/40 text-sm font-medium text-text tracking-[-0.01em]"
                  >
                    {a.label}
                  </span>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* ── CTA ──────────────────────────────────────────────────────── */}
        <section
          className="py-16 px-6 lg:px-10"
          aria-labelledby="cta-heading"
        >
          <div className="max-w-2xl mx-auto">
            <ScrollReveal>
              <div className="bg-surface rounded-3xl border border-border/40 p-8 sm:p-12 text-center">
                <h2
                  id="cta-heading"
                  className="text-2xl sm:text-3xl font-semibold text-text tracking-[-0.03em] mb-4"
                >
                  Připraveni začít vydělávat?
                </h2>
                <p className="text-text-secondary leading-relaxed tracking-[-0.01em] mb-8 max-w-md mx-auto">
                  Registrace je zdarma a trvá méně než 5 minut. Provize
                  dostanete každý měsíc přímo na účet.
                </p>
                <a
                  href="/kontakt"
                  className="inline-flex items-center gap-2 text-sm font-medium px-8 py-3.5 rounded-full text-white tracking-[-0.01em] transition-colors duration-200"
                  style={{ backgroundColor: "var(--color-accent)" }}
                >
                  Přihlásit se do programu
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
        </section>

      </main>
      <Footer />
    </>
  );
}
