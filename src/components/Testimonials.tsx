"use client";

import ScrollReveal from "./ScrollReveal";

const testimonials = [
  {
    name: "Martin Novák",
    role: "CEO, TechFlow",
    initials: "MN",
    quote:
      "webihned.cz nám ušetřil měsíce vývoje. Aplikaci pro správu objednávek jsme měli hotovou za odpoledne. Kvalita kódu je na úrovni seniorního vývojáře.",
  },
  {
    name: "Petra Svobodová",
    role: "Product Manager, DataPeak",
    initials: "PS",
    quote:
      "Konečně platforma, která rozumí českému trhu. Naše interní nástroje jsme přestavěli za víkend — bez jediného řádku kódu.",
  },
  {
    name: "Jakub Dvořák",
    role: "Zakladatel, SmartHub",
    initials: "JD",
    quote:
      "Zkoušel jsem Lovable i Bolt. webihned.cz je první platforma, kde se cítím jako doma. Česká podpora a lokalizace jsou obrovský plus.",
  },
];

function StarRating() {
  return (
    <div className="flex items-center gap-0.5 mb-5" aria-label="Hodnocení 5 z 5 hvězd">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          width="14"
          height="14"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="text-accent"
          aria-hidden="true"
        >
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      ))}
    </div>
  );
}

function QuoteMark() {
  return (
    <svg
      width="36"
      height="28"
      viewBox="0 0 36 28"
      fill="none"
      className="text-accent opacity-20 mb-4 flex-shrink-0"
      aria-hidden="true"
    >
      <path
        d="M0 28V17.2C0 13.067 0.933 9.6 2.8 6.8C4.667 4 7.467 1.867 11.2 0.4L13.6 4C11.333 5.067 9.667 6.467 8.6 8.2C7.533 9.867 7 11.8 7 14H13.6V28H0ZM22.4 28V17.2C22.4 13.067 23.333 9.6 25.2 6.8C27.067 4 29.867 1.867 33.6 0.4L36 4C33.733 5.067 32.067 6.467 31 8.2C29.933 9.867 29.4 11.8 29.4 14H36V28H22.4Z"
        fill="currentColor"
      />
    </svg>
  );
}

export default function Testimonials() {
  return (
    <section className="section-bg-cool py-20 md:py-32" aria-labelledby="testimonials-heading">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <ScrollReveal>
          <h2
            id="testimonials-heading"
            className="scroll-sharpen text-3xl sm:text-4xl md:text-[56px] font-bold text-center leading-[1.08] tracking-[-0.035em] mb-14"
          >
            Co říkají naši{" "}
            <span className="font-[var(--font-serif)] italic font-normal">
              uživatelé
            </span>
          </h2>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <ScrollReveal key={t.name} delay={i * 120} direction="blur">
              <article
                className="card-hover bg-surface rounded-3xl p-8 border border-border/40 shadow-[0_1px_3px_rgba(0,0,0,0.04)] flex flex-col h-full relative overflow-hidden"
                style={{
                  borderTop: "2px solid var(--color-accent)",
                }}
              >
                {/* Subtle accent glow at top */}
                <div
                  className="absolute top-0 left-0 right-0 h-px pointer-events-none"
                  aria-hidden="true"
                  style={{
                    background:
                      "linear-gradient(90deg, transparent 0%, var(--color-accent) 50%, transparent 100%)",
                  }}
                />

                <StarRating />

                <QuoteMark />

                <blockquote className="flex-1 mb-6">
                  <p
                    className="text-base italic leading-[1.75] tracking-[-0.01em] text-[var(--color-text)]"
                    style={{ transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)" }}
                  >
                    {t.quote}
                  </p>
                </blockquote>

                <footer className="flex items-center gap-4 pt-4 border-t border-border/30">
                  <div
                    className="w-14 h-14 rounded-full bg-accent flex items-center justify-center flex-shrink-0 ring-2 ring-offset-2"
                    style={{
                      outline: "2px solid rgba(225,29,72,0.30)",
                      outlineOffset: "2px",
                      boxShadow: "0 0 20px -4px var(--color-accent)",
                    }}
                    aria-hidden="true"
                  >
                    <span className="text-white text-sm font-bold tracking-wide select-none">
                      {t.initials}
                    </span>
                  </div>
                  <div>
                    <p className="font-bold text-sm tracking-[-0.02em] text-[var(--color-text)]">
                      {t.name}
                    </p>
                    <p className="text-sm text-[var(--color-text-secondary)] tracking-[-0.01em]">
                      {t.role}
                    </p>
                  </div>
                </footer>
              </article>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
