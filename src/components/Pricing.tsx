import Link from "next/link";
import ScrollReveal from "./ScrollReveal";

const freeFeatures = [
  "Všechny základní funkce",
  "Vestavěné integrace",
  "Autentizační systém",
  "Databázová funkcionalita",
];

export default function Pricing() {
  return (
    <section className="pricing-gradient py-20 md:py-32" aria-label="Cenové plány">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <ScrollReveal>
          <h2 className="text-3xl sm:text-4xl md:text-[56px] font-bold text-center leading-[1.08] tracking-[-0.035em] mb-4">
            Cenové plány pro{" "}
            <span className="font-[var(--font-serif)] italic font-normal">
              každou potřebu
            </span>
          </h2>
          <p className="text-text-secondary text-center text-base md:text-lg mb-16 max-w-md mx-auto leading-relaxed tracking-[-0.01em]">
            Škálujte podle potřeby s plány navrženými pro váš růst.
          </p>
        </ScrollReveal>

        <div className="pricing-cards max-w-4xl mx-auto grid md:grid-cols-2 gap-6 mb-12">
          <ScrollReveal delay={100}>
            <div className="card-hover bg-surface rounded-3xl p-8 border border-border/40 shadow-[0_1px_3px_rgba(0,0,0,0.04)] h-full">
              <div className="w-full aspect-[16/6] rounded-2xl mb-7" style={{ background: "linear-gradient(to bottom right, var(--color-accent-light), var(--color-surface))" }} />
              <h3 className="text-xl font-bold mb-4 tracking-[-0.02em]">
                Začněte zdarma
              </h3>
              <p className="text-sm text-text-secondary mb-6 tracking-[-0.01em]">
                Získáte přístup k:
              </p>
              <ul className="space-y-3.5 mb-9">
                {freeFeatures.map((f) => (
                  <li key={f} className="flex items-center gap-3 text-sm tracking-[-0.01em]">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" className="text-accent flex-shrink-0" aria-hidden="true">
                      <path d="M20 6L9 17L4 12" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    {f}
                  </li>
                ))}
              </ul>
              <Link href="/pricing" className="btn-primary block w-full text-center bg-accent text-white font-medium py-3.5 rounded-full text-sm tracking-[-0.01em]">
                Začít tvořit
              </Link>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={200}>
            <div className="card-hover bg-surface rounded-3xl p-8 border border-border/40 shadow-[0_1px_3px_rgba(0,0,0,0.04)] flex flex-col h-full relative">
              {/* Nejoblíbenější badge */}
              <div className="absolute top-6 right-6">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold tracking-[-0.01em]" style={{ backgroundColor: "var(--color-accent)", color: "#fff" }}>
                  <svg width="10" height="10" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                  Nejoblíbenější
                </span>
              </div>
              <h3 className="text-xl font-bold mb-3 tracking-[-0.02em]">
                Placené plány od
              </h3>
              <div className="flex items-baseline gap-1 mb-5">
                <span className="text-[56px] font-bold leading-none tracking-[-0.04em]" style={{ color: "var(--color-accent)" }}>
                  490 Kč
                </span>
                <span className="text-text-secondary text-base">/měs.</span>
              </div>
              <p className="text-sm text-text-secondary mb-10 flex-1 leading-relaxed tracking-[-0.01em]">
                Upgradujte za více kreditů, funkcí a podpory.
              </p>
              <Link href="/pricing" className="btn-secondary flex items-center justify-center gap-2 w-full text-center border border-border text-text font-medium py-3.5 rounded-full text-sm tracking-[-0.01em]">
                Zobrazit všechny plány
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M5 12h14" /><path d="m12 5 7 7-7 7" />
                </svg>
              </Link>
            </div>
          </ScrollReveal>
        </div>

        <ScrollReveal delay={300}>
          <div className="text-center">
            <p className="text-sm text-text-secondary mb-2 tracking-[-0.01em]">
              Hledáte enterprise řešení?
            </p>
            <a href="/kontakt" className="link-arrow inline-flex items-center gap-2 text-sm font-medium text-text hover:text-accent transition-colors duration-300 tracking-[-0.01em]">
              Kontaktujte nás
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M5 12h14" />
                <path d="m12 5 7 7-7 7" />
              </svg>
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
