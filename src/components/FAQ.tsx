"use client";

import { useState } from "react";
import ScrollReveal from "./ScrollReveal";

const faqs = [
  {
    q: "Co je webihned.cz?",
    a: "webihned.cz je AI platforma, která vám umožní proměnit jakýkoli nápad v plně funkční aplikaci — bez jediného řádku kódu.",
  },
  {
    q: "Potřebuji umět programovat?",
    a: "Ne. Platforma je navržena pro netechnické uživatele. Stačí popsat své potřeby běžným jazykem a naše AI se postará o technickou realizaci.",
  },
  {
    q: "Jaké typy aplikací mohu vytvořit?",
    a: "webihned.cz je všestranný. Můžete tvořit produktivní aplikace, back-office nástroje, zákaznické portály, automatizaci procesů, nebo rychlé prototypy a MVP.",
  },
  {
    q: "Jaké integrace platforma podporuje?",
    a: "Nejběžnější integrace jsou vestavěné. Můžete přímo odesílat e-maily, používat SMS, připojit se k libovolnému API a dotazovat databáze — bez složité konfigurace.",
  },
  {
    q: "Jak probíhá nasazení aplikací?",
    a: "O vše se postaráme automaticky. webihned.cz zahrnuje vestavěný hosting, takže žádný deployment není potřeba. Když je aplikace hotová, je okamžitě aktivní.",
  },
  {
    q: "Jak funguje tvorba pomocí přirozeného jazyka?",
    a: "Stačí napsat svůj nápad — ať už je to obecná myšlenka nebo konkrétní požadavek. Naše AI interpretuje vaše instrukce a vygeneruje kód a strukturu aplikace.",
  },
  {
    q: "Jsou moje data v bezpečí?",
    a: "Ano. Bereme bezpečnost dat velmi vážně. Správa uživatelů a autentizace jsou vestavěné s použitím šifrování a bezpečnostních postupů na úrovni průmyslového standardu.",
  },
  {
    q: "Vlastním aplikace, které vytvořím?",
    a: "Rozhodně. Všechny aplikace a obsah vytvořený prostřednictvím webihned.cz patří zcela vám. Na nic, co vytvoříte, si nenárokujeme vlastnictví.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-16 md:py-24" aria-label="Časté dotazy">
      <div className="max-w-3xl mx-auto px-6 lg:px-10">
        <ScrollReveal>
          <h2 className="scroll-sharpen text-3xl sm:text-4xl md:text-[48px] font-bold leading-[1.08] tracking-[-0.035em] mb-14">
            Časté{" "}
            <span className="font-[var(--font-serif)] italic font-normal">
              dotazy
            </span>
          </h2>
        </ScrollReveal>

        <div className="divide-y divide-border">
          {faqs.map((faq, i) => (
            <ScrollReveal key={i} delay={i * 50}>
              <div>
                <button
                  onClick={() => setOpenIndex(openIndex === i ? null : i)}
                  aria-expanded={openIndex === i}
                  aria-controls={`faq-answer-${i}`}
                  className="w-full flex items-center justify-between py-6 text-left group"
                >
                  <span className="text-base font-medium pr-6 tracking-[-0.01em] group-hover:text-accent transition-colors duration-300">
                    {faq.q}
                  </span>
                  <div
                    className={`w-8 h-8 rounded-full border border-border flex items-center justify-center flex-shrink-0 transition-all duration-400 ${
                      openIndex === i
                        ? "bg-accent border-accent rotate-180"
                        : "group-hover:border-text"
                    }`}
                    style={{ transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)" }}
                  >
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke={openIndex === i ? "white" : "currentColor"}
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-text-secondary"
                      aria-hidden="true"
                    >
                      <path d="m6 9 6 6 6-6" />
                    </svg>
                  </div>
                </button>
                <div id={`faq-answer-${i}`} className={`faq-content ${openIndex === i ? "open" : ""}`}>
                  <div>
                    <p className="text-sm text-text-secondary leading-[1.8] pb-6 tracking-[-0.01em]">
                      {faq.a}
                    </p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
