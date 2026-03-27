"use client";

import ScrollReveal from "./ScrollReveal";

const useCases = [
  {
    title: "Pro zakladatele",
    description:
      "Validujte svůj nápad za hodiny, ne měsíce. MVP bez vývojářského týmu.",
    icon: (
      <svg
        width="32"
        height="32"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5" />
        <path d="M9 18h6" />
        <path d="M10 22h4" />
      </svg>
    ),
  },
  {
    title: "Pro product manažery",
    description:
      "Prototypujte funkce a testujte hypotézy bez čekání na vývojáře.",
    icon: (
      <svg
        width="32"
        height="32"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <line x1="18" y1="20" x2="18" y2="10" />
        <line x1="12" y1="20" x2="12" y2="4" />
        <line x1="6" y1="20" x2="6" y2="14" />
        <line x1="2" y1="20" x2="22" y2="20" />
      </svg>
    ),
  },
  {
    title: "Pro marketéry",
    description:
      "Landing pages, formuláře a nástroje pro kampaně — hotové za minuty.",
    icon: (
      <svg
        width="32"
        height="32"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="m3 11 19-9-9 19-2-8-8-2z" />
      </svg>
    ),
  },
  {
    title: "Pro agentury",
    description:
      "Dodávejte klientské projekty 10× rychleji s konzistentní kvalitou.",
    icon: (
      <svg
        width="32"
        height="32"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
        <polyline points="9 22 9 12 15 12 15 22" />
      </svg>
    ),
  },
  {
    title: "Pro studenty",
    description:
      "Učte se tvorbou. 50% sleva pro studenty a učitele.",
    icon: (
      <svg
        width="32"
        height="32"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
        <path d="M6 12v5c3 3 9 3 12 0v-5" />
      </svg>
    ),
  },
];

export default function UseCases() {
  return (
    <section className="py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Heading */}
        <ScrollReveal>
          <div className="text-center mb-14 md:mb-18">
            <h2 className="text-3xl sm:text-4xl md:text-[56px] font-bold leading-[1.08] tracking-[-0.035em] mb-4">
              Pro koho{" "}
              <span className="font-[var(--font-serif)] italic font-normal">
                je webihned.cz
              </span>
            </h2>
            <p className="text-text-secondary text-base md:text-lg max-w-md mx-auto leading-relaxed tracking-[-0.01em]">
              Platforma pro každého, kdo chce tvořit bez technických bariér
            </p>
          </div>
        </ScrollReveal>

        {/* Cards — row 1: 3 cards, row 2: 2 cards centered */}
        <div className="usecases-grid max-w-4xl mx-auto">
          {/* Row 1 */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5 mb-4 md:mb-5">
            {useCases.slice(0, 3).map((item, i) => (
              <ScrollReveal key={item.title} delay={i * 100} direction="blur">
                <article
                  className="group card-hover bg-surface rounded-2xl border border-border/40 p-6 flex flex-col gap-4 h-full shadow-[0_1px_3px_rgba(0,0,0,0.04)] overflow-hidden"
                  style={{
                    transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
                    borderTop: "2px solid rgba(225,29,72,0.20)",
                  }}
                >
                  <div
                    className="w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0 shadow-[0_4px_14px_-4px_var(--color-accent)]"
                    style={{ backgroundColor: "var(--color-accent-light)", color: "var(--color-accent)" }}
                  >
                    {item.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-base leading-[1.25] tracking-[-0.02em] mb-2">{item.title}</h3>
                    <p className="text-sm text-text-secondary leading-[1.7] tracking-[-0.01em]">{item.description}</p>
                  </div>
                </article>
              </ScrollReveal>
            ))}
          </div>
          {/* Row 2 — 2 cards centered under row 1 */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-5 max-w-[calc(66.666%+10px)] lg:max-w-[calc(66.666%+14px)] mx-auto">
            {useCases.slice(3, 5).map((item, i) => (
              <ScrollReveal key={item.title} delay={(i + 3) * 100} direction="blur">
                <article
                  className="group card-hover bg-surface rounded-2xl border border-border/40 p-6 flex flex-col gap-4 h-full shadow-[0_1px_3px_rgba(0,0,0,0.04)] overflow-hidden"
                  style={{
                    transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
                    borderTop: "2px solid rgba(225,29,72,0.20)",
                  }}
                >
                  <div
                    className="w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0 shadow-[0_4px_14px_-4px_var(--color-accent)]"
                    style={{ backgroundColor: "var(--color-accent-light)", color: "var(--color-accent)" }}
                  >
                    {item.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-base leading-[1.25] tracking-[-0.02em] mb-2">{item.title}</h3>
                    <p className="text-sm text-text-secondary leading-[1.7] tracking-[-0.01em]">{item.description}</p>
                  </div>
                </article>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
