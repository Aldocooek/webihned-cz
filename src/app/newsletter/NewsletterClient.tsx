"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";

// ── Data ───────────────────────────────────────────────────────────────────────

const benefits = [
  {
    icon: (
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
      </svg>
    ),
    text: "Nové funkce a aktualizace",
  },
  {
    icon: (
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <circle cx="12" cy="12" r="10" />
        <path d="M12 6v6l4 2" />
      </svg>
    ),
    text: "Tipy pro lepší využití platformy",
  },
  {
    icon: (
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
    text: "Exkluzivní pozvánky na události",
  },
];

// ── Page ───────────────────────────────────────────────────────────────────────

export default function NewsletterClient() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email.trim()) return;
    setLoading(true);
    setTimeout(() => {
      setSubmitted(true);
      setLoading(false);
    }, 800);
  }

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
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
                Newsletter
              </div>
            </ScrollReveal>

            <ScrollReveal delay={60}>
              <h1 className="text-4xl sm:text-5xl lg:text-[64px] font-semibold text-text tracking-[-0.035em] leading-[1.05] mb-6">
                Buďte v{" "}
                <em
                  style={{ fontFamily: "var(--font-serif)", fontStyle: "italic" }}
                >
                  obraze
                </em>
              </h1>
            </ScrollReveal>

            <ScrollReveal delay={120}>
              <p className="text-lg text-text-secondary leading-relaxed tracking-[-0.01em] max-w-xl mx-auto">
                Novinky, tipy a&nbsp;aktualizace přímo do vašeho inboxu. Žádný spam, slibujeme.
              </p>
            </ScrollReveal>
          </div>
        </section>

        {/* ── Signup form ───────────────────────────────────────────────── */}
        <section className="py-16 px-6 lg:px-10" aria-labelledby="newsletter-form-heading">
          <div className="max-w-xl mx-auto text-center">
            <h2 id="newsletter-form-heading" className="sr-only">
              Přihlásit se k odběru newsletteru
            </h2>

            <ScrollReveal>
              {submitted ? (
                <div
                  className="bg-surface border border-border/40 rounded-3xl p-12 flex flex-col items-center gap-5"
                  role="status"
                  aria-live="polite"
                >
                  <div className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center">
                    <svg
                      width="28"
                      height="28"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-emerald-500"
                      aria-hidden="true"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xl font-semibold text-text tracking-[-0.03em] mb-2">
                      Hotovo, jste přihlášeni!
                    </p>
                    <p className="text-text-secondary tracking-[-0.01em] text-sm leading-relaxed">
                      Brzy se ozveme s&nbsp;první várkou novinek.
                    </p>
                  </div>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  className="flex flex-col sm:flex-row gap-3"
                  aria-label="Formulář odběru newsletteru"
                  noValidate
                >
                  <label htmlFor="newsletter-email" className="sr-only">
                    Váš e-mail
                  </label>
                  <input
                    id="newsletter-email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="vas@email.cz"
                    required
                    autoComplete="email"
                    className="flex-1 text-base px-5 py-3.5 rounded-full border border-border bg-surface text-text placeholder:text-text-secondary/50 tracking-[-0.01em] focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent/50 transition-colors duration-200"
                    aria-required="true"
                  />
                  <button
                    type="submit"
                    disabled={loading}
                    className="flex-shrink-0 text-sm font-medium px-7 py-3.5 rounded-full bg-accent text-white hover:opacity-90 transition-opacity duration-200 tracking-[-0.01em] disabled:opacity-60"
                    style={{ backgroundColor: "var(--color-accent)" }}
                  >
                    {loading ? "Přihlašuji…" : "Odebírat"}
                  </button>
                </form>
              )}
            </ScrollReveal>
          </div>
        </section>

        {/* ── Benefits ──────────────────────────────────────────────────── */}
        <section className="py-16 px-6 lg:px-10 border-t border-border/30" aria-labelledby="benefits-heading">
          <div className="max-w-3xl mx-auto">
            <ScrollReveal>
              <h2
                id="benefits-heading"
                className="text-xl font-semibold text-text tracking-[-0.03em] mb-8 text-center"
              >
                Co dostanete:
              </h2>
            </ScrollReveal>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
              {benefits.map((benefit, i) => (
                <ScrollReveal key={benefit.text} delay={i * 80}>
                  <div className="bg-surface rounded-2xl border border-border/40 p-6 flex flex-col items-center text-center gap-4 card-hover">
                    <div className="w-11 h-11 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center text-accent">
                      {benefit.icon}
                    </div>
                    <p className="text-sm font-medium text-text tracking-[-0.02em] leading-snug">
                      {benefit.text}
                    </p>
                  </div>
                </ScrollReveal>
              ))}
            </div>

            <ScrollReveal delay={300}>
              <p className="text-center text-xs text-text-secondary/60 tracking-[-0.01em] mt-10">
                Posíláme 1–2× měsíčně. Kdykoli se můžete odhlásit.
              </p>
            </ScrollReveal>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
