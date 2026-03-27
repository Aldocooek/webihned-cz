import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";

export const metadata: Metadata = {
  title: "Stav systému | webihned.cz",
  description:
    "Aktuální stav platformy webihned.cz — dostupnost API, hostingu a databáze v reálném čase.",
  alternates: {
    canonical: "/status",
  },
  openGraph: {
    title: "Stav systému | webihned.cz",
    description:
      "Aktuální stav platformy webihned.cz — dostupnost API, hostingu a databáze v reálném čase.",
    url: "https://webihned.cz/status",
    siteName: "webihned.cz",
    type: "website",
    locale: "cs_CZ",
  },
};

// ── Data ───────────────────────────────────────────────────────────────────────

const services = [
  { name: "Platforma", status: "Funkční" },
  { name: "API", status: "Funkční" },
  { name: "Hosting", status: "Funkční" },
  { name: "Databáze", status: "Funkční" },
] as const;

// ── Page ───────────────────────────────────────────────────────────────────────

export default function StatusPage() {
  return (
    <>
      <Navbar />
      <main id="main-content">

        {/* ── Hero ─────────────────────────────────────────────────────── */}
        <section className="hero-gradient pt-24 pb-20 px-6 lg:px-10 text-center">
          <div className="max-w-3xl mx-auto">
            <h1 className="animate-hero-title text-4xl sm:text-5xl lg:text-6xl font-semibold text-text tracking-[-0.03em] leading-[1.08] mb-6">
              Stav{" "}
              <em
                style={{ fontFamily: "var(--font-serif)", fontStyle: "italic" }}
              >
                systému
              </em>
            </h1>

            {/* Overall status badge */}
            <div className="animate-hero-subtitle flex justify-center">
              <span className="inline-flex items-center gap-2 text-sm font-medium px-4 py-2 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
                {/* Animated pulse dot */}
                <span className="relative flex h-2.5 w-2.5" aria-hidden="true">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-60" />
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
                </span>
                Vše v pořádku
              </span>
            </div>
          </div>
        </section>

        {/* ── Services ─────────────────────────────────────────────────── */}
        <section
          className="py-16 px-6 lg:px-10"
          aria-labelledby="services-heading"
        >
          <h2 id="services-heading" className="sr-only">
            Stav služeb
          </h2>
          <div className="max-w-2xl mx-auto">
            <ScrollReveal>
              <div className="bg-surface rounded-2xl border border-border/40 overflow-hidden">
                {services.map((service, i) => (
                  <div
                    key={service.name}
                    className={`flex items-center justify-between px-6 py-4 ${
                      i < services.length - 1 ? "border-b border-border/30" : ""
                    }`}
                  >
                    {/* Service name */}
                    <span className="text-sm font-medium text-text tracking-[-0.01em]">
                      {service.name}
                    </span>

                    {/* Status */}
                    <span className="inline-flex items-center gap-2 text-sm text-emerald-600 dark:text-emerald-400 font-medium">
                      <span className="relative flex h-2 w-2" aria-hidden="true">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-60" />
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                      </span>
                      {service.status}
                    </span>
                  </div>
                ))}

                {/* Updated timestamp */}
                <div className="px-6 py-3 bg-bg/40 border-t border-border/30">
                  <p className="text-xs text-text-secondary/60 tracking-[-0.01em]">
                    Aktualizováno: právě teď
                  </p>
                </div>
              </div>
            </ScrollReveal>

            {/* Incident history */}
            <ScrollReveal delay={100}>
              <div className="mt-8">
                <h3 className="text-base font-semibold text-text tracking-[-0.02em] mb-4">
                  Historie incidentů
                </h3>
                <div className="bg-surface rounded-2xl border border-border/40 px-6 py-8 flex flex-col items-center gap-3 text-center">
                  {/* Checkmark icon */}
                  <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      aria-hidden="true"
                    >
                      <path
                        d="M4 10l4 4 8-8"
                        stroke="currentColor"
                        strokeWidth="1.8"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <p className="text-sm text-text-secondary tracking-[-0.01em]">
                    Žádné nedávné incidenty
                  </p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
