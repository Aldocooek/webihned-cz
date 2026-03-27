import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";

export const metadata: Metadata = {
  title: "Pro studenty | webihned.cz",
  description: "50% sleva na Pro plán pro studenty a učitele. Učte se tvorbou reálných aplikací.",
  alternates: { canonical: "/studenti" },
  openGraph: {
    title: "Pro studenty | webihned.cz",
    description: "50% sleva na Pro plán pro studenty a učitele. Učte se tvorbou reálných aplikací.",
    url: "https://webihned.cz/studenti",
    siteName: "webihned.cz",
    type: "website",
    locale: "cs_CZ",
  },
};

// ── Data ───────────────────────────────────────────────────────────────────────

const steps = [
  {
    number: "01",
    title: "Zaregistrujte se",
    description: "Vytvořte si účet na webihned.cz. Stačí e-mail, žádná kreditní karta.",
  },
  {
    number: "02",
    title: "Ověřte studentský status",
    description: "Odešlete nám potvrzení ze školy nebo ISIC kartu. Ověření do 24 hodin.",
  },
  {
    number: "03",
    title: "Aktivujte slevu",
    description: "Po ověření obdržíte kód a Pro plán vám odemkneme za 495 Kč/měs.",
  },
];

const benefits = [
  {
    title: "Reálné projekty místo teorie",
    description: "Stavte aplikace, které skutečně fungují — ne jen cvičení z učebnice.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <polyline points="16 18 22 12 16 6" />
        <polyline points="8 6 2 12 8 18" />
      </svg>
    ),
  },
  {
    title: "Portfolio pro budoucí kariéru",
    description: "Každý projekt, který vytvoříte, je důkaz vašich schopností pro zaměstnavatele.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect x="2" y="7" width="20" height="14" rx="2" />
        <path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" />
      </svg>
    ),
  },
  {
    title: "Přístup ke všem funkcím Pro plánu",
    description: "GitHub integrace, vlastní doména, prioritní podpora — plná sada nástrojů.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M12 2L2 7l10 5 10-5-10-5z" />
        <path d="M2 17l10 5 10-5" />
        <path d="M2 12l10 5 10-5" />
      </svg>
    ),
  },
  {
    title: "Platí po celou dobu studia",
    description: "Sleva se automaticky obnoví každý rok, dokud jste studentem nebo učitelem.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
      </svg>
    ),
  },
];

const faqs = [
  {
    question: "Kdo může využít studentskou slevu?",
    answer: "Studenti středních škol, vysokých škol a učitelé. Stačí doklad totožnosti se studentským statusem nebo ISIC karta.",
  },
  {
    question: "Jak dlouho sleva platí?",
    answer: "Po celou dobu studia. Každý rok stačí znovu ověřit studentský status — proces trvá méně než 5 minut.",
  },
  {
    question: "Co se stane po ukončení studia?",
    answer: "Plán přejde na standardní cenu Pro plánu 990 Kč/měs. S předstihem vás upozorníme e-mailem.",
  },
  {
    question: "Mohu upgradovat na Business plán?",
    answer: "Ano. Kdykoliv přejdete na Business plán, standardní cena 1 990 Kč/měs. Studentská sleva se vztahuje pouze na Pro plán.",
  },
];

// ── Page ───────────────────────────────────────────────────────────────────────

export default function StudentiPage() {
  return (
    <>
      <Navbar />
      <main id="main-content">

        {/* ── Hero ─────────────────────────────────────────────────────── */}
        <section className="hero-gradient pt-24 pb-20 px-6 lg:px-10 text-center">
          <div className="max-w-3xl mx-auto">
            <ScrollReveal>
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-accent/30 bg-accent/5 text-accent text-xs font-medium tracking-[-0.01em] mb-8">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
                  <path d="M6 12v5c3 3 9 3 12 0v-5" />
                </svg>
                Pro studenty a učitele
              </div>
            </ScrollReveal>

            <ScrollReveal delay={60}>
              <h1 className="text-4xl sm:text-5xl lg:text-[64px] font-semibold text-text tracking-[-0.035em] leading-[1.05] mb-6">
                Vzdělávejte se{" "}
                <em style={{ fontFamily: "var(--font-serif)", fontStyle: "italic" }}>
                  tvorbou
                </em>
              </h1>
            </ScrollReveal>

            <ScrollReveal delay={120}>
              <p className="text-lg text-text-secondary leading-relaxed tracking-[-0.01em] max-w-2xl mx-auto mb-10">
                50% sleva na Pro plán pro studenty a učitele. Protože tvorba je nejlepší způsob učení.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={180}>
              <p className="text-sm text-text-secondary tracking-[-0.01em]">
                Používá přes{" "}
                <span className="font-semibold text-text">500 studentů</span>{" "}
                na{" "}
                <span className="font-semibold text-text">12 českých univerzitách</span>
              </p>
            </ScrollReveal>
          </div>
        </section>

        {/* ── Offer card ───────────────────────────────────────────────── */}
        <section className="py-16 px-6 lg:px-10" aria-labelledby="offer-heading">
          <div className="max-w-md mx-auto">
            <ScrollReveal>
              <div className="bg-surface rounded-3xl border border-border/40 p-8 sm:p-10 relative overflow-hidden shadow-[0_2px_12px_rgba(0,0,0,0.06)] dark:shadow-[0_2px_12px_rgba(0,0,0,0.4)]">
                {/* Background accent glow */}
                <div className="absolute inset-0 pointer-events-none" aria-hidden="true"
                  style={{ background: "radial-gradient(ellipse at 50% 0%, rgba(225,29,72,0.06) 0%, transparent 70%)" }}
                />

                <div className="relative">
                  {/* Badge */}
                  <span
                    className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold text-white mb-6"
                    style={{ backgroundColor: "var(--color-accent)" }}
                  >
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                    </svg>
                    50% sleva
                  </span>

                  <h2 id="offer-heading" className="text-2xl font-semibold text-text tracking-[-0.03em] mb-2">
                    Pro plán za 495 Kč/měs
                  </h2>
                  <p className="text-text-secondary tracking-[-0.01em] mb-6">
                    Místo{" "}
                    <span className="line-through">990 Kč/měs</span>
                    {" "}— platné po celou dobu studia.
                  </p>

                  <ul className="space-y-3 mb-8" aria-label="Co je zahrnuto">
                    {["Neomezené aplikace", "GitHub sync", "Vlastní doména + SSL", "Prioritní podpora", "Všechny šablony"].map((item) => (
                      <li key={item} className="flex items-center gap-3 text-sm text-text tracking-[-0.01em]">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true" className="flex-shrink-0 text-accent">
                          <path d="M20 6L9 17l-5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        {item}
                      </li>
                    ))}
                  </ul>

                  <a
                    href="/kontakt"
                    className="block w-full text-center text-sm font-medium px-6 py-3.5 rounded-full text-white tracking-[-0.01em] transition-opacity duration-200 hover:opacity-90"
                    style={{ backgroundColor: "var(--color-accent)" }}
                  >
                    Ověřit studentský status
                  </a>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* ── Steps ────────────────────────────────────────────────────── */}
        <section className="py-20 px-6 lg:px-10 border-t border-border/30" aria-labelledby="steps-heading">
          <div className="max-w-7xl mx-auto">
            <ScrollReveal className="text-center mb-14">
              <h2 id="steps-heading" className="text-3xl sm:text-4xl font-semibold text-text tracking-[-0.03em] mb-4">
                Jak na to
              </h2>
              <p className="text-text-secondary tracking-[-0.01em] max-w-md mx-auto">
                Tři kroky a sleva je vaše. Celý proces trvá méně než 5 minut.
              </p>
            </ScrollReveal>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {steps.map((step, i) => (
                <ScrollReveal key={step.number} delay={i * 80}>
                  <div className="bg-surface rounded-2xl border border-border/40 p-7 card-hover h-full flex flex-col gap-4">
                    <span
                      className="text-4xl font-semibold tracking-[-0.04em] leading-none"
                      style={{ color: "var(--color-accent)", opacity: 0.25 }}
                      aria-hidden="true"
                    >
                      {step.number}
                    </span>
                    <div>
                      <h3 className="text-base font-semibold text-text tracking-[-0.02em] mb-2">
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

        {/* ── Benefits ─────────────────────────────────────────────────── */}
        <section className="py-20 px-6 lg:px-10 border-t border-border/30" aria-labelledby="benefits-heading">
          <div className="max-w-7xl mx-auto">
            <ScrollReveal className="text-center mb-14">
              <h2 id="benefits-heading" className="text-3xl sm:text-4xl font-semibold text-text tracking-[-0.03em] mb-4">
                Proč tvorba = nejlepší výuka
              </h2>
              <p className="text-text-secondary tracking-[-0.01em] max-w-xl mx-auto">
                Teorie vám práci nedá. Portfolio ano.
              </p>
            </ScrollReveal>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {benefits.map((benefit, i) => (
                <ScrollReveal key={benefit.title} delay={i * 70}>
                  <div className="bg-surface rounded-2xl border border-border/40 p-7 card-hover flex gap-5 h-full">
                    <div className="w-10 h-10 flex items-center justify-center rounded-xl bg-accent/10 text-accent flex-shrink-0 mt-0.5">
                      {benefit.icon}
                    </div>
                    <div>
                      <h3 className="text-base font-semibold text-text tracking-[-0.02em] mb-2">
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

        {/* ── FAQ ──────────────────────────────────────────────────────── */}
        <section className="py-20 px-6 lg:px-10 border-t border-border/30" aria-labelledby="faq-heading">
          <div className="max-w-2xl mx-auto">
            <ScrollReveal className="text-center mb-14">
              <h2 id="faq-heading" className="text-3xl sm:text-4xl font-semibold text-text tracking-[-0.03em] mb-4">
                Časté dotazy
              </h2>
            </ScrollReveal>

            <dl className="space-y-4">
              {faqs.map((faq, i) => (
                <ScrollReveal key={faq.question} delay={i * 60}>
                  <div className="bg-surface rounded-2xl border border-border/40 p-6">
                    <dt className="text-base font-semibold text-text tracking-[-0.02em] mb-2">
                      {faq.question}
                    </dt>
                    <dd className="text-sm text-text-secondary leading-relaxed tracking-[-0.01em]">
                      {faq.answer}
                    </dd>
                  </div>
                </ScrollReveal>
              ))}
            </dl>
          </div>
        </section>

        {/* ── Bottom CTA ───────────────────────────────────────────────── */}
        <section className="py-24 px-6 lg:px-10 text-center" aria-labelledby="studenti-cta">
          <ScrollReveal>
            <div className="max-w-xl mx-auto">
              <h2
                id="studenti-cta"
                className="text-3xl sm:text-4xl font-semibold text-text tracking-[-0.03em] mb-5"
              >
                Začněte budovat portfolio dnes
              </h2>
              <p className="text-text-secondary tracking-[-0.01em] mb-8">
                500+ studentů už tvoří reálné aplikace. Přidejte se k nim.
              </p>
              <a
                href="/kontakt"
                className="inline-flex items-center gap-2 text-sm font-medium px-8 py-3.5 rounded-full text-white tracking-[-0.01em] transition-opacity duration-200 hover:opacity-90"
                style={{ backgroundColor: "var(--color-accent)" }}
              >
                Ověřit studentský status
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
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
