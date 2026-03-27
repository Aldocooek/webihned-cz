import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import Logo from "@/components/Logo";

export const metadata: Metadata = {
  title: "Pro média | webihned.cz",
  description:
    "Loga, barvy, fonty a informace o webihned.cz pro novináře a partnery.",
  alternates: {
    canonical: "/media-kit",
  },
  openGraph: {
    title: "Pro média | webihned.cz",
    description:
      "Loga, barvy, fonty a informace o webihned.cz pro novináře a partnery.",
    url: "https://webihned.cz/media-kit",
    siteName: "webihned.cz",
    type: "website",
    locale: "cs_CZ",
  },
};

// ── Data ───────────────────────────────────────────────────────────────────────

const colors = [
  {
    hex: "#E11D48",
    name: "Accent",
    desc: "Primární akcentová barva",
    textClass: "text-white",
  },
  {
    hex: "#1a1a1a",
    name: "Text",
    desc: "Hlavní textová barva",
    textClass: "text-white",
  },
  {
    hex: "#FAFAFA",
    name: "Pozadí",
    desc: "Barva pozadí",
    textClass: "text-[#1a1a1a]",
    border: true,
  },
];

const keyFacts = [
  { label: "Založeno", value: "2026" },
  { label: "Sídlo", value: "Praha, ČR" },
  { label: "Uživatelé", value: "4 700+" },
  { label: "Aplikace", value: "10 000+" },
];

// ── Page ───────────────────────────────────────────────────────────────────────

export default function MediaKitPage() {
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
                  <path d="M4 22h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16a2 2 0 0 1-2 2Zm0 0a2 2 0 0 1-2-2v-9c0-1.1.9-2 2-2h2" />
                  <path d="M18 14h-8" />
                  <path d="M15 18h-5" />
                  <path d="M10 6h8v4h-8V6Z" />
                </svg>
                Pro média
              </div>
            </ScrollReveal>

            <ScrollReveal delay={60}>
              <h1 className="text-4xl sm:text-5xl lg:text-[64px] font-semibold text-text tracking-[-0.035em] leading-[1.05] mb-6">
                Pro{" "}
                <em
                  style={{ fontFamily: "var(--font-serif)", fontStyle: "italic" }}
                >
                  média
                </em>
              </h1>
            </ScrollReveal>

            <ScrollReveal delay={120}>
              <p className="text-lg text-text-secondary leading-relaxed tracking-[-0.01em] max-w-2xl mx-auto">
                Vše co potřebujete pro psaní o&nbsp;webihned.cz
              </p>
            </ScrollReveal>
          </div>
        </section>

        {/* ── Brand assets ─────────────────────────────────────────────── */}
        <section
          className="py-20 px-6 lg:px-10"
          aria-labelledby="brand-heading"
        >
          <div className="max-w-7xl mx-auto">
            <ScrollReveal className="text-center mb-14">
              <h2
                id="brand-heading"
                className="text-3xl sm:text-4xl font-semibold text-text tracking-[-0.03em] mb-4"
              >
                Brand assets
              </h2>
              <p className="text-text-secondary tracking-[-0.01em] max-w-xl mx-auto">
                Oficiální loga a barvy pro použití v médiích.
              </p>
            </ScrollReveal>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

              {/* Logo card */}
              <ScrollReveal direction="left">
                <div className="bg-surface rounded-2xl border border-border/40 p-8 sm:p-10 h-full flex flex-col gap-6">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 flex items-center justify-center rounded-xl bg-accent/10 text-accent flex-shrink-0">
                      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                        <rect x="3" y="3" width="18" height="18" rx="4" stroke="currentColor" strokeWidth="1.8" />
                        <path d="M7 14l3-3 2 2 3-4 2 3" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-semibold text-text tracking-[-0.02em]">
                      Logo
                    </h3>
                  </div>

                  {/* Logo preview area */}
                  <div className="flex-1 flex flex-col gap-4">
                    {/* Light bg preview */}
                    <div className="rounded-xl bg-[#FAFAFA] border border-border/40 p-8 flex items-center justify-center">
                      <Logo className="text-2xl" />
                    </div>
                    {/* Dark bg preview */}
                    <div className="rounded-xl bg-[#1a1a1a] p-8 flex items-center justify-center">
                      <Logo className="text-2xl" />
                    </div>
                  </div>

                  <div className="flex flex-col gap-2 pt-2 border-t border-border/30">
                    <p className="text-sm text-text-secondary tracking-[-0.01em]">
                      <span className="font-medium text-text">Formát:</span> SVG (vektorový)
                    </p>
                    <p className="text-sm text-text-secondary tracking-[-0.01em]">
                      <span className="font-medium text-text">Provedení:</span> červeno-černé, světlé i tmavé pozadí
                    </p>
                    <p className="text-sm text-text-secondary tracking-[-0.01em]">
                      <span className="font-medium text-text">Použití:</span> Pro tiskové účely kontaktujte press@webihned.cz
                    </p>
                  </div>
                </div>
              </ScrollReveal>

              {/* Colors card */}
              <ScrollReveal direction="right" delay={60}>
                <div className="bg-surface rounded-2xl border border-border/40 p-8 sm:p-10 h-full flex flex-col gap-6">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 flex items-center justify-center rounded-xl bg-accent/10 text-accent flex-shrink-0">
                      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                        <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.8" />
                        <path d="M12 3v9l4.5 4.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                        <circle cx="12" cy="12" r="2" fill="currentColor" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-semibold text-text tracking-[-0.02em]">
                      Barvy
                    </h3>
                  </div>

                  <div className="flex flex-col gap-4 flex-1">
                    {colors.map((color) => (
                      <div
                        key={color.hex}
                        className="flex items-center gap-4"
                      >
                        <div
                          className={`w-16 h-16 rounded-xl flex-shrink-0 flex items-center justify-center text-xs font-mono font-bold ${color.textClass} ${color.border ? "border border-border/40" : ""}`}
                          style={{ backgroundColor: color.hex }}
                          aria-label={`Barva ${color.name}: ${color.hex}`}
                        >
                          {color.hex}
                        </div>
                        <div>
                          <p className="font-semibold text-text tracking-[-0.02em] text-sm">
                            {color.name}
                          </p>
                          <p className="text-xs text-text-secondary tracking-[-0.01em] mb-1">
                            {color.desc}
                          </p>
                          <code className="text-xs font-mono bg-accent/5 text-accent px-2 py-0.5 rounded border border-accent/20">
                            {color.hex}
                          </code>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </ScrollReveal>

            </div>
          </div>
        </section>

        {/* ── Typography ───────────────────────────────────────────────── */}
        <section
          className="py-20 px-6 lg:px-10 border-t border-border/30"
          aria-labelledby="typography-heading"
        >
          <div className="max-w-7xl mx-auto">
            <ScrollReveal className="text-center mb-14">
              <h2
                id="typography-heading"
                className="text-3xl sm:text-4xl font-semibold text-text tracking-[-0.03em] mb-4"
              >
                Typografie
              </h2>
              <p className="text-text-secondary tracking-[-0.01em] max-w-xl mx-auto">
                Dvojice fontů tvořící vizuální identitu značky.
              </p>
            </ScrollReveal>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <ScrollReveal direction="left">
                <div className="bg-surface rounded-2xl border border-border/40 p-8 card-hover">
                  <span className="inline-flex items-center text-xs font-medium px-2.5 py-1 rounded-full bg-accent/10 text-accent border border-accent/20 mb-4">
                    Nadpisy
                  </span>
                  <p
                    className="text-4xl font-semibold text-text tracking-[-0.035em] mb-4"
                    style={{ fontFamily: "var(--font-heading)" }}
                  >
                    Space Grotesk
                  </p>
                  <p className="text-sm text-text-secondary tracking-[-0.01em] leading-relaxed">
                    Moderní geometric sans-serif. Používá se pro nadpisy, tlačítka a UI prvky.
                    Charakteristická negativní kerning a geometrické tvary.
                  </p>
                </div>
              </ScrollReveal>

              <ScrollReveal direction="right" delay={60}>
                <div className="bg-surface rounded-2xl border border-border/40 p-8 card-hover">
                  <span className="inline-flex items-center text-xs font-medium px-2.5 py-1 rounded-full bg-accent/10 text-accent border border-accent/20 mb-4">
                    Akcenty
                  </span>
                  <p
                    className="text-4xl text-text mb-4"
                    style={{ fontFamily: "var(--font-serif)", fontStyle: "italic", fontWeight: 400 }}
                  >
                    Instrument Serif
                  </p>
                  <p className="text-sm text-text-secondary tracking-[-0.01em] leading-relaxed">
                    Elegantní serif používaný pro akcentované části nadpisů.
                    Přidává teplo a osobitost ke geometrickému sans-serife.
                  </p>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* ── Boilerplate + key facts ───────────────────────────────────── */}
        <section
          className="py-20 px-6 lg:px-10 border-t border-border/30"
          aria-labelledby="boilerplate-heading"
        >
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

              {/* Boilerplate */}
              <ScrollReveal direction="left">
                <div className="bg-surface rounded-2xl border border-border/40 p-8 sm:p-10 h-full flex flex-col gap-5">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 flex items-center justify-center rounded-xl bg-accent/10 text-accent flex-shrink-0">
                      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
                        <path d="M14 2v6h6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M16 13H8M16 17H8M10 9H8" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-semibold text-text tracking-[-0.02em]">
                      Popis společnosti
                    </h3>
                  </div>
                  <blockquote className="flex-1 text-text-secondary leading-relaxed tracking-[-0.01em] border-l-2 border-accent/40 pl-4">
                    webihned.cz je česká AI platforma pro tvorbu webových aplikací.
                    Založena v roce 2026, pomáhá tisícům tvůrců proměnit nápady v realitu
                    bez programování. Platforma podporuje celý životní cyklus aplikace —
                    od prvního nápadu přes prototyp až po produkční nasazení.
                  </blockquote>
                  <p className="text-xs text-text-secondary tracking-[-0.01em] opacity-70">
                    Doporučujeme použít tento text beze změn pro konzistentní prezentaci značky.
                  </p>
                </div>
              </ScrollReveal>

              {/* Key facts */}
              <ScrollReveal direction="right" delay={60}>
                <div className="bg-surface rounded-2xl border border-border/40 p-8 sm:p-10 h-full flex flex-col gap-5">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 flex items-center justify-center rounded-xl bg-accent/10 text-accent flex-shrink-0">
                      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                        <path d="M9 11l3 3L22 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-semibold text-text tracking-[-0.02em]">
                      Klíčové údaje
                    </h3>
                  </div>
                  <dl className="flex flex-col gap-4 flex-1">
                    {keyFacts.map((fact) => (
                      <div
                        key={fact.label}
                        className="flex items-center justify-between py-3 border-b border-border/30 last:border-0"
                      >
                        <dt className="text-sm text-text-secondary tracking-[-0.01em]">
                          {fact.label}
                        </dt>
                        <dd className="font-semibold text-text tracking-[-0.02em] text-sm">
                          {fact.value}
                        </dd>
                      </div>
                    ))}
                  </dl>
                </div>
              </ScrollReveal>

            </div>
          </div>
        </section>

        {/* ── Press contact ─────────────────────────────────────────────── */}
        <section
          className="py-20 px-6 lg:px-10 border-t border-border/30"
          aria-labelledby="press-contact-heading"
        >
          <div className="max-w-7xl mx-auto">
            <ScrollReveal>
              <div className="bg-surface rounded-2xl border border-border/40 p-8 sm:p-12 flex flex-col md:flex-row md:items-center gap-8">
                <div className="flex-1">
                  <h2
                    id="press-contact-heading"
                    className="text-2xl font-semibold text-text tracking-[-0.03em] mb-3"
                  >
                    Tiskové dotazy
                  </h2>
                  <p className="text-text-secondary tracking-[-0.01em] leading-relaxed mb-4">
                    Pro interview, citace, tiskové zprávy nebo doplňující informace
                    nás kontaktujte na dedikované tiskové adrese. Odpovídáme do 24 hodin.
                  </p>
                  <a
                    href="mailto:press@webihned.cz"
                    className="inline-flex items-center gap-2 text-accent font-medium tracking-[-0.01em] text-sm hover:underline"
                  >
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
                      <rect width="20" height="16" x="2" y="4" rx="2" />
                      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                    </svg>
                    press@webihned.cz
                  </a>
                </div>
                <div className="flex-shrink-0">
                  <a
                    href="/kontakt"
                    className="inline-flex items-center gap-2 text-white text-sm font-medium px-8 py-3.5 rounded-full tracking-[-0.01em] transition-colors duration-200"
                    style={{ backgroundColor: "var(--color-accent)" }}
                  >
                    Kontaktujte nás
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
              </div>
            </ScrollReveal>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
