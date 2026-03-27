import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";

export const metadata: Metadata = {
  title: "Integrace | webihned.cz",
  description:
    "Stripe, Zapier, Google Sheets, Slack, SendGrid a další — vestavěné integrace pro nejběžnější služby. Žádná složitá konfigurace.",
  alternates: {
    canonical: "/integrace",
  },
  openGraph: {
    title: "Integrace | webihned.cz",
    description:
      "Propojte svou aplikaci s nejběžnějšími službami. Stripe, Zapier, Google Sheets, Slack a dalších 8 integrací v ceně.",
    url: "https://webihned.cz/integrace",
    siteName: "webihned.cz",
    type: "website",
    locale: "cs_CZ",
  },
};

// ── Data ──────────────────────────────────────────────────────────────────────

const integrations = [
  {
    name: "Stripe",
    description: "Platby a předplatné",
    color: "#6772E5",
    letter: "S",
    category: "Platby",
  },
  {
    name: "Zapier",
    description: "Automatizace workflow",
    color: "#FF4A00",
    letter: "Z",
    category: "Automatizace",
  },
  {
    name: "Google Sheets",
    description: "Import a export dat",
    color: "#0F9D58",
    letter: "G",
    category: "Data",
  },
  {
    name: "Slack",
    description: "Notifikace a upozornění",
    color: "#4A154B",
    letter: "S",
    category: "Komunikace",
  },
  {
    name: "SendGrid",
    description: "Transakční e-maily",
    color: "#1A82E2",
    letter: "S",
    category: "E-mail",
  },
  {
    name: "Twilio",
    description: "SMS a komunikace",
    color: "#F22F46",
    letter: "T",
    category: "Komunikace",
  },
  {
    name: "GitHub",
    description: "Synchronizace kódu",
    color: "#24292E",
    letter: "G",
    category: "Vývoj",
  },
  {
    name: "Google Analytics",
    description: "Sledování návštěvnosti",
    color: "#E37400",
    letter: "G",
    category: "Analytika",
  },
  {
    name: "Supabase",
    description: "Databáze a auth",
    color: "#3ECF8E",
    letter: "S",
    category: "Databáze",
  },
  {
    name: "OpenAI",
    description: "AI funkce v aplikaci",
    color: "#10A37F",
    letter: "O",
    category: "AI",
  },
  {
    name: "Webhooks",
    description: "Vlastní integrace",
    color: "#64748B",
    letter: "W",
    category: "Vlastní",
  },
  {
    name: "REST API",
    description: "Připojení k čemukoli",
    color: "#7C3AED",
    letter: "R",
    category: "API",
  },
];

// ── Page ──────────────────────────────────────────────────────────────────────

export default function IntegracePage() {
  return (
    <>
      <Navbar />
      <main id="main-content">

        {/* ── Hero ─────────────────────────────────────────────────────── */}
        <section className="hero-gradient pt-24 pb-20 px-6 lg:px-10 text-center">
          <div className="max-w-3xl mx-auto">
            <h1 className="animate-hero-title text-4xl sm:text-5xl lg:text-6xl font-semibold text-text tracking-[-0.03em] leading-[1.08] mb-6">
              Propojte se s{" "}
              <em
                className="not-italic"
                style={{ fontFamily: "var(--font-serif)", fontStyle: "italic" }}
              >
                čímkoli
              </em>
            </h1>
            <p className="animate-hero-subtitle text-lg text-text-secondary leading-relaxed tracking-[-0.01em] max-w-2xl mx-auto">
              Vestavěné integrace pro nejběžnější služby. Žádná složitá konfigurace.
            </p>
          </div>
        </section>

        {/* ── Integrations grid ────────────────────────────────────────── */}
        <section className="py-16 px-6 lg:px-10" aria-labelledby="integrace-heading">
          <div className="max-w-7xl mx-auto">
            <ScrollReveal className="text-center mb-12">
              <h2
                id="integrace-heading"
                className="text-3xl sm:text-4xl font-semibold text-text tracking-[-0.03em] mb-4"
              >
                Dostupné integrace
              </h2>
              <p className="text-text-secondary tracking-[-0.01em] max-w-xl mx-auto">
                Každá integrace je předkonfigurovaná a připravená k použití. Stačí ji aktivovat.
              </p>
            </ScrollReveal>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
              {integrations.map((integration, i) => (
                <ScrollReveal key={integration.name} delay={i * 50}>
                  <div className="bg-surface rounded-2xl border border-border/40 p-6 card-hover flex items-start gap-4 h-full">
                    {/* Colored circle with first letter */}
                    <div
                      className="flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center text-white font-bold text-lg leading-none"
                      style={{ backgroundColor: integration.color }}
                      aria-hidden="true"
                    >
                      {integration.letter}
                    </div>

                    {/* Name + description */}
                    <div className="min-w-0">
                      <div className="flex items-center gap-2 mb-1">
                        <h3 className="font-bold text-text tracking-[-0.02em] truncate">
                          {integration.name}
                        </h3>
                        <span
                          className="flex-shrink-0 text-xs font-medium px-2 py-0.5 rounded-full tracking-[-0.01em]"
                          style={{
                            backgroundColor: "var(--color-accent-light)",
                            color: "var(--color-accent)",
                          }}
                        >
                          {integration.category}
                        </span>
                      </div>
                      <p className="text-sm text-text-secondary tracking-[-0.01em]">
                        {integration.description}
                      </p>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* ── How it works ─────────────────────────────────────────────── */}
        <section className="py-16 px-6 lg:px-10 border-t border-border/40" aria-labelledby="jak-heading">
          <div className="max-w-4xl mx-auto">
            <ScrollReveal className="text-center mb-12">
              <h2
                id="jak-heading"
                className="text-3xl sm:text-4xl font-semibold text-text tracking-[-0.03em] mb-4"
              >
                Jak integrace fungují
              </h2>
              <p className="text-text-secondary tracking-[-0.01em] max-w-xl mx-auto">
                Tři kroky od výběru k fungující integraci.
              </p>
            </ScrollReveal>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
              {[
                {
                  step: "1",
                  title: "Vyberte integraci",
                  description: "V nastavení projektu otevřete záložku Integrace a vyberte ze seznamu.",
                  icon: (
                    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
                      <rect x="4" y="4" width="9" height="9" rx="2" stroke="currentColor" strokeWidth="1.8" />
                      <rect x="15" y="4" width="9" height="9" rx="2" stroke="currentColor" strokeWidth="1.8" />
                      <rect x="4" y="15" width="9" height="9" rx="2" stroke="currentColor" strokeWidth="1.8" />
                      <rect x="15" y="15" width="9" height="9" rx="2" stroke="currentColor" strokeWidth="1.8" />
                    </svg>
                  ),
                },
                {
                  step: "2",
                  title: "Zadejte API klíč",
                  description: "Zkopírujte API klíč z dané služby a vložte do konfigurace. Hotovo.",
                  icon: (
                    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
                      <circle cx="11" cy="14" r="5" stroke="currentColor" strokeWidth="1.8" />
                      <path d="M16 14h8M21 11v6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                    </svg>
                  ),
                },
                {
                  step: "3",
                  title: "Používejte v aplikaci",
                  description: "Integrace je okamžitě dostupná v chatu. Řekněte AI, co s ní má udělat.",
                  icon: (
                    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
                      <path d="M14 4L7 10v10h14V10L14 4z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
                      <path d="M10 20v-5h8v5" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
                    </svg>
                  ),
                },
              ].map((item, i) => (
                <ScrollReveal key={item.step} delay={i * 80}>
                  <div className="bg-surface rounded-2xl border border-border/40 p-6 card-hover text-center flex flex-col items-center gap-4">
                    <div className="text-accent">{item.icon}</div>
                    <div>
                      <h3 className="font-semibold text-text tracking-[-0.02em] mb-2">
                        {item.title}
                      </h3>
                      <p className="text-sm text-text-secondary leading-relaxed tracking-[-0.01em]">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* ── Bottom CTA ───────────────────────────────────────────────── */}
        <section className="py-20 px-6 lg:px-10 border-t border-border/40 text-center" aria-labelledby="integrace-cta-heading">
          <ScrollReveal>
            <div className="max-w-xl mx-auto">
              <h2
                id="integrace-cta-heading"
                className="text-2xl sm:text-3xl font-semibold text-text tracking-[-0.03em] mb-4"
              >
                Nenašli jste svou integraci?
              </h2>
              <p className="text-text-secondary tracking-[-0.01em] mb-8 leading-relaxed">
                Pracujeme na dalších integracích. Napište nám, co potřebujete — pokud
                to chybí více uživatelům, přidáme to jako první.
              </p>
              <Link
                href="/kontakt"
                className="inline-flex items-center gap-2 font-medium text-sm px-8 py-3.5 rounded-full text-white transition-opacity duration-300 hover:opacity-90"
                style={{ backgroundColor: "var(--color-accent)" }}
              >
                Napište nám
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
