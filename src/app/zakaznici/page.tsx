import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";

export const metadata: Metadata = {
  title: "Naši zákazníci | webihned.cz",
  description:
    "Přes 4 700 tvůrců důvěřuje webihned.cz. Podívejte se na jejich příběhy.",
  alternates: {
    canonical: "/zakaznici",
  },
  openGraph: {
    title: "Naši zákazníci | webihned.cz",
    description:
      "Přes 4 700 tvůrců důvěřuje webihned.cz. Podívejte se na jejich příběhy.",
    url: "https://webihned.cz/zakaznici",
    siteName: "webihned.cz",
    type: "website",
    locale: "cs_CZ",
  },
};

// ── Data ───────────────────────────────────────────────────────────────────────

const LOGOS = [
  "TechFlow",
  "DataPeak",
  "CloudNova",
  "AppForge",
  "NexGen",
  "CyberPulse",
  "ByteWorks",
  "DigiCraft",
  "SmartHub",
  "CodeVibe",
];

const stats = [
  { value: "4 700+", label: "tvůrců" },
  { value: "50+", label: "firem" },
  { value: "12", label: "odvětví" },
  { value: "99.9%", label: "spokojenost" },
];

const testimonials = [
  {
    initials: "MN",
    name: "Martin Novák",
    role: "CEO",
    company: "TechFlow",
    industry: "SaaS",
    quote:
      "webihned.cz nám ušetřil měsíce vývoje. Prototyp, který by normálně trval 3 měsíce, jsme měli hotový za 4 dny. Tým se mohl soustředit na byznys, ne na kód. Nasadili jsme první verzi produktu dřív, než konkurence vůbec začala hledat vývojáře. Pro nás je to kompetitivní výhoda, kterou nechceme sdílet.",
  },
  {
    initials: "PS",
    name: "Petra Svobodová",
    role: "Product Manager",
    company: "DataPeak",
    industry: "E-commerce",
    quote:
      "Konečně platforma, která rozumí českému trhu. Všechno je v češtině, podpora reaguje do hodiny a rozumí našim potřebám. Žádné překlady z angličtiny, žádné americké vzory, které tu nefungují. Propojení s českými platebními branami bylo hotové za odpoledne. To je jiný svět oproti zahraničním alternativám.",
  },
  {
    initials: "JD",
    name: "Jakub Dvořák",
    role: "Zakladatel",
    company: "SmartHub",
    industry: "SaaS",
    quote:
      "Zkoušel jsem Lovable i Bolt. webihned.cz je prostě jiná liga. Rychlejší, intuitivnější a hlavně — výsledky fungují v produkci, ne jen v demu. Přešel jsem permanentně. Moje startup komunita mi začala závidět. Teď jim doporučuji webihned.cz a všichni říkají totéž — proč jsme to neznali dřív?",
  },
  {
    initials: "KH",
    name: "Kateřina Horáková",
    role: "CTO",
    company: "NexGen",
    industry: "Agentury",
    quote:
      "Naši vývojáři teď prototypují 5× rychleji. Ale co mě nejvíc překvapilo: i netechničtí kolegové z obchodu si umí sami postavit interní nástroje. Product manageři přestali čekat ve frontě na sprint. Snížili jsme backlog o 60 %. Tím jsme uvolnili kapacity pro skutečně složité technické výzvy. Tohle je leverage.",
  },
  {
    initials: "TP",
    name: "Tomáš Procházka",
    role: "CEO",
    company: "AppForge",
    industry: "Vzdělávání",
    quote:
      "Od prvního dne jsme věděli, že je to ten pravý nástroj. Onboarding trval 20 minut. Za týden jsme měli funkční MVP vzdělávací platformy. Investoři se ptali, jak jsme to tak rychle zvládli. Odpověď je jednoduchá — webihned.cz. Teď stavíme celé produktové portfolio na této platformě bez zadrhnutí.",
  },
  {
    initials: "EM",
    name: "Eva Malá",
    role: "Marketing Manager",
    company: "ByteWorks",
    industry: "Agentury",
    quote:
      "Landing pages děláme za hodiny místo týdnů. A/B testy spouštíme sami bez čekání na vývojáře. Conversion rate nám vzrostl o 34 %, protože iterujeme rychle. Marketing tým se stal autonomním. Žádné tikety, žádné čekání, žádná frustrace. Prostě navrhnu, kliknu, spustím. Tohle je svoboda.",
  },
];

const industries = [
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
        <rect x="4" y="4" width="20" height="20" rx="4" stroke="currentColor" strokeWidth="1.8" />
        <path d="M9 14l2 2 4-4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M9 9h10M9 18h6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    ),
    name: "SaaS",
    count: "1 200+",
    desc: "zákazníků",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
        <path d="M5 8h18v14a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V8z" stroke="currentColor" strokeWidth="1.8" />
        <path d="M3 8h22M10 8V5a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v3" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
        <path d="M11 14h6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    ),
    name: "E-commerce",
    count: "900+",
    desc: "zákazníků",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
        <path d="M14 4l2.5 6.5H23l-5.5 4 2 6.5L14 17l-5.5 4 2-6.5L5 10.5h6.5L14 4z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
      </svg>
    ),
    name: "Agentury",
    count: "1 500+",
    desc: "zákazníků",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
        <circle cx="14" cy="10" r="4" stroke="currentColor" strokeWidth="1.8" />
        <path d="M6 24c0-4.4 3.6-8 8-8s8 3.6 8 8" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
        <path d="M20 6l2 2-2 2" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    name: "Vzdělávání",
    count: "1 100+",
    desc: "zákazníků",
  },
];

// ── Page ───────────────────────────────────────────────────────────────────────

export default function ZakazniciPage() {
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
                Zákazníci
              </div>
            </ScrollReveal>

            <ScrollReveal delay={60}>
              <h1 className="text-4xl sm:text-5xl lg:text-[64px] font-semibold text-text tracking-[-0.035em] leading-[1.05] mb-6">
                Naši{" "}
                <em
                  style={{ fontFamily: "var(--font-serif)", fontStyle: "italic" }}
                >
                  zákazníci
                </em>
              </h1>
            </ScrollReveal>

            <ScrollReveal delay={120}>
              <p className="text-lg text-text-secondary leading-relaxed tracking-[-0.01em] max-w-2xl mx-auto">
                Přes 4&nbsp;700 tvůrců z celého Česka a&nbsp;Slovenska
              </p>
            </ScrollReveal>
          </div>
        </section>

        {/* ── Logo wall marquee ────────────────────────────────────────── */}
        <section
          className="w-full py-14 overflow-hidden bg-[var(--color-bg)] border-t border-border/20"
          aria-label="Firmy používající webihned.cz"
        >
          <div
            className="relative w-full overflow-hidden"
            aria-hidden="true"
          >
            {/* Left fade */}
            <div
              className="absolute left-0 top-0 bottom-0 w-24 z-10 pointer-events-none"
              style={{
                background:
                  "linear-gradient(to right, var(--color-bg) 0%, transparent 100%)",
              }}
            />
            {/* Right fade */}
            <div
              className="absolute right-0 top-0 bottom-0 w-24 z-10 pointer-events-none"
              style={{
                background:
                  "linear-gradient(to left, var(--color-bg) 0%, transparent 100%)",
              }}
            />

            <div className="flex animate-marquee">
              {LOGOS.map((name) => (
                <div
                  key={`a-${name}`}
                  className="flex-shrink-0 flex items-center justify-center px-8 py-3 mx-3 rounded-lg border border-[var(--color-border)] bg-[var(--color-surface)] grayscale opacity-50 hover:opacity-75 hover:grayscale-0 transition-all duration-300"
                  aria-label={name}
                >
                  <span
                    className="text-sm font-semibold tracking-[-0.01em] text-[var(--color-text)] whitespace-nowrap select-none"
                    style={{ fontFamily: "var(--font-heading)" }}
                  >
                    {name}
                  </span>
                </div>
              ))}
              {LOGOS.map((name) => (
                <div
                  key={`b-${name}`}
                  className="flex-shrink-0 flex items-center justify-center px-8 py-3 mx-3 rounded-lg border border-[var(--color-border)] bg-[var(--color-surface)] grayscale opacity-50 hover:opacity-75 hover:grayscale-0 transition-all duration-300"
                  aria-label={name}
                >
                  <span
                    className="text-sm font-semibold tracking-[-0.01em] text-[var(--color-text)] whitespace-nowrap select-none"
                    style={{ fontFamily: "var(--font-heading)" }}
                  >
                    {name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Stats row ────────────────────────────────────────────────── */}
        <section
          className="py-16 px-6 lg:px-10 border-t border-border/30"
          aria-labelledby="stats-heading"
        >
          <div className="max-w-7xl mx-auto">
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

        {/* ── Testimonials ─────────────────────────────────────────────── */}
        <section
          className="py-20 px-6 lg:px-10 border-t border-border/30"
          aria-labelledby="testimonials-heading"
        >
          <div className="max-w-7xl mx-auto">
            <ScrollReveal className="text-center mb-14">
              <h2
                id="testimonials-heading"
                className="text-3xl sm:text-4xl font-semibold text-text tracking-[-0.03em] mb-4"
              >
                Co říkají naši zákazníci
              </h2>
              <p className="text-text-secondary tracking-[-0.01em] max-w-xl mx-auto">
                Skutečné příběhy od skutečných tvůrců z Česka a Slovenska.
              </p>
            </ScrollReveal>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {testimonials.map((t, i) => (
                <ScrollReveal key={t.name} delay={i * 60}>
                  <article className="bg-surface rounded-2xl border border-border/40 p-8 card-hover h-full flex flex-col gap-6">
                    {/* Quote */}
                    <blockquote className="flex-1">
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        className="text-accent mb-4 opacity-60"
                        aria-hidden="true"
                      >
                        <path
                          d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z"
                          fill="currentColor"
                        />
                        <path
                          d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z"
                          fill="currentColor"
                        />
                      </svg>
                      <p className="text-text-secondary leading-relaxed tracking-[-0.01em] text-sm">
                        {t.quote}
                      </p>
                    </blockquote>

                    {/* Author */}
                    <footer className="flex items-center gap-4 pt-4 border-t border-border/30">
                      <div
                        className="w-12 h-12 rounded-full flex items-center justify-center text-white text-sm font-semibold tracking-[-0.02em] flex-shrink-0"
                        style={{ backgroundColor: "var(--color-accent)" }}
                        aria-hidden="true"
                      >
                        {t.initials}
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="font-semibold text-text tracking-[-0.02em] text-sm">
                          {t.name}
                        </p>
                        <p className="text-xs text-text-secondary tracking-[-0.01em]">
                          {t.role}, {t.company}
                        </p>
                      </div>
                      <span className="flex-shrink-0 inline-flex items-center text-xs font-medium px-2.5 py-1 rounded-full bg-accent/10 text-accent border border-accent/20">
                        {t.industry}
                      </span>
                    </footer>
                  </article>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* ── Industry grid ────────────────────────────────────────────── */}
        <section
          className="py-20 px-6 lg:px-10 border-t border-border/30"
          aria-labelledby="industries-heading"
        >
          <div className="max-w-7xl mx-auto">
            <ScrollReveal className="text-center mb-14">
              <h2
                id="industries-heading"
                className="text-3xl sm:text-4xl font-semibold text-text tracking-[-0.03em] mb-4"
              >
                Napříč odvětvími
              </h2>
              <p className="text-text-secondary tracking-[-0.01em] max-w-xl mx-auto">
                webihned.cz funguje ve 12 odvětvích. Čtyři největší komunity.
              </p>
            </ScrollReveal>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {industries.map((ind, i) => (
                <ScrollReveal key={ind.name} delay={i * 60}>
                  <div className="bg-surface rounded-2xl border border-border/40 p-7 card-hover flex flex-col gap-4">
                    <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-accent/10 text-accent flex-shrink-0">
                      {ind.icon}
                    </div>
                    <div>
                      <h3 className="font-semibold text-text tracking-[-0.02em] mb-1 text-base">
                        {ind.name}
                      </h3>
                      <p className="text-2xl font-semibold text-text tracking-[-0.03em]">
                        {ind.count}
                      </p>
                      <p className="text-sm text-text-secondary tracking-[-0.01em]">
                        {ind.desc}
                      </p>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA ──────────────────────────────────────────────────────── */}
        <section className="py-24 px-6 lg:px-10 text-center" aria-labelledby="zakaznici-cta">
          <ScrollReveal>
            <div className="max-w-xl mx-auto">
              <h2
                id="zakaznici-cta"
                className="text-3xl sm:text-4xl font-semibold text-text tracking-[-0.03em] mb-5"
              >
                Přidejte se k&nbsp;nim
              </h2>
              <p className="text-text-secondary tracking-[-0.01em] mb-8">
                Začněte zdarma. Váš první projekt může být hotový ještě dnes.
              </p>
              <a
                href="/pricing"
                className="inline-flex items-center gap-2 text-white text-sm font-medium px-8 py-3.5 rounded-full tracking-[-0.01em] transition-colors duration-200"
                style={{ backgroundColor: "var(--color-accent)" }}
              >
                Zobrazit plány
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
