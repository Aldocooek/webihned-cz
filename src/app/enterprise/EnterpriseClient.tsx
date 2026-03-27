"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";

// ── Enterprise features ────────────────────────────────────────────────────────

const enterpriseFeatures = [
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
        <rect x="4" y="4" width="20" height="20" rx="4" stroke="currentColor" strokeWidth="1.8" />
        <path d="M9 14h10M14 9v10" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
        <circle cx="14" cy="14" r="3" stroke="currentColor" strokeWidth="1.8" />
      </svg>
    ),
    title: "SSO/SAML",
    description:
      "Jednotné přihlášení přes Okta, Azure AD nebo Google Workspace.",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
        <circle cx="14" cy="9" r="4" stroke="currentColor" strokeWidth="1.8" />
        <path d="M6 23c0-4.418 3.582-8 8-8s8 3.582 8 8" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
        <path d="M20 13l1.5 1.5L25 11" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: "SCIM provisioning",
    description:
      "Automatická správa uživatelů — přidávání a odebírání přes váš identity provider.",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
        <path d="M5 7h18v17a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V7z" stroke="currentColor" strokeWidth="1.8" />
        <path d="M3 7h22" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
        <path d="M9 7V5a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v2" stroke="currentColor" strokeWidth="1.8" />
        <path d="M10 14h8M10 18h6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    ),
    title: "Audit logy",
    description:
      "Kompletní záznamy všech akcí. Kdo co kdy změnil — vždy máte přehled.",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
        <path d="M14 3L4 7v9c0 5.523 4.477 10 10 10s10-4.477 10-10V7L14 3z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
        <path d="M10 14l2.5 2.5L18 11" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: "Dedicovaná podpora",
    description:
      "Prioritní SLA s garantovanými časy odezvy a osobní account manažer.",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
        <rect x="3" y="3" width="22" height="22" rx="4" stroke="currentColor" strokeWidth="1.8" />
        <path d="M9 14l3 3 7-7" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: "Vlastní onboarding",
    description:
      "White-glove nastavení workspace, školení a migrace stávajících projektů.",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
        <circle cx="14" cy="14" r="10" stroke="currentColor" strokeWidth="1.8" />
        <path d="M14 9v5l3 3" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M9 23.5l1.5-1.5M17 23.5l1.5-1.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    ),
    title: "SLA garance",
    description:
      "99.9% dostupnost platformy s kompenzací při výpadku.",
  },
];

// ── Logo strip — same companies as SocialProof ────────────────────────────────

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

// ── Form state ─────────────────────────────────────────────────────────────────

interface FormState {
  jmeno: string;
  email: string;
  firma: string;
  zprava: string;
}

const emptyForm: FormState = { jmeno: "", email: "", firma: "", zprava: "" };

// ── Page ──────────────────────────────────────────────────────────────────────

export default function EnterpriseClient() {
  const [form, setForm] = useState<FormState>(emptyForm);
  const [submitted, setSubmitted] = useState(false);

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  const inputClass =
    "w-full bg-bg border border-border rounded-xl px-4 py-3 text-sm text-text placeholder:text-text-secondary/50 tracking-[-0.01em] focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent/50 transition-colors duration-200";

  const labelClass =
    "block text-sm font-medium text-text mb-2 tracking-[-0.01em]";

  return (
    <>
      <Navbar />
      <main id="main-content">

        {/* ── Hero ─────────────────────────────────────────────────────── */}
        <section className="hero-gradient pt-24 pb-20 px-6 lg:px-10 text-center">
          <div className="max-w-3xl mx-auto">
            {/* Badge */}
            <ScrollReveal>
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-accent/30 bg-accent/5 text-accent text-xs font-medium tracking-[-0.01em] mb-8">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M12 2L2 7l10 5 10-5-10-5z" />
                  <path d="M2 17l10 5 10-5" />
                  <path d="M2 12l10 5 10-5" />
                </svg>
                Enterprise
              </div>
            </ScrollReveal>

            <ScrollReveal delay={60}>
              <h1 className="text-4xl sm:text-5xl lg:text-[64px] font-semibold text-text tracking-[-0.035em] leading-[1.05] mb-6">
                Pro velké{" "}
                <em
                  style={{ fontFamily: "var(--font-serif)", fontStyle: "italic" }}
                >
                  týmy
                </em>
              </h1>
            </ScrollReveal>

            <ScrollReveal delay={120}>
              <p className="text-lg text-text-secondary leading-relaxed tracking-[-0.01em] max-w-2xl mx-auto">
                Škálujte tvorbu aplikací napříč celou organizací s&nbsp;enterprise funkcemi.
              </p>
            </ScrollReveal>
          </div>
        </section>

        {/* ── Feature grid ─────────────────────────────────────────────── */}
        <section className="py-20 px-6 lg:px-10" aria-labelledby="features-heading">
          <div className="max-w-7xl mx-auto">
            <ScrollReveal className="text-center mb-14">
              <h2
                id="features-heading"
                className="text-3xl sm:text-4xl font-semibold text-text tracking-[-0.03em] mb-4"
              >
                Vše, co velký tým potřebuje
              </h2>
              <p className="text-text-secondary tracking-[-0.01em] max-w-xl mx-auto">
                Bezpečnost, správa uživatelů a podpora na podnikové úrovni.
              </p>
            </ScrollReveal>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {enterpriseFeatures.map((feature, i) => (
                <ScrollReveal key={feature.title} delay={i * 60}>
                  <div className="bg-surface rounded-2xl border border-border/40 p-7 card-hover h-full flex flex-col gap-4 overflow-hidden">
                    <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-accent/10 text-accent flex-shrink-0">
                      {feature.icon}
                    </div>
                    <div>
                      <h3 className="font-semibold text-text tracking-[-0.02em] mb-2 text-base">
                        {feature.title}
                      </h3>
                      <p className="text-sm text-text-secondary leading-relaxed tracking-[-0.01em]">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* ── Trusted by ───────────────────────────────────────────────── */}
        <section className="py-16 px-6 lg:px-10 overflow-hidden" aria-label="Důvěřují nám">
          <div className="max-w-7xl mx-auto">
            <ScrollReveal className="text-center mb-10">
              <p className="text-sm font-medium tracking-[-0.01em] text-text-secondary">
                Důvěřují nám{" "}
                <span className="text-text font-semibold">5&nbsp;000+</span>{" "}
                týmů
              </p>
            </ScrollReveal>

            <div className="relative w-full overflow-hidden" aria-hidden="true">
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
                {[...LOGOS, ...LOGOS].map((name, i) => (
                  <div
                    key={i}
                    className="flex-shrink-0 flex items-center justify-center px-8 py-3 mx-3 rounded-lg border border-[var(--color-border)] bg-[var(--color-surface)] grayscale opacity-50 hover:opacity-75 hover:grayscale-0 transition-all duration-300"
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
          </div>
        </section>

        {/* ── Contact form ─────────────────────────────────────────────── */}
        <section
          className="py-20 px-6 lg:px-10"
          aria-labelledby="demo-heading"
        >
          <div className="max-w-2xl mx-auto">
            <ScrollReveal className="text-center mb-12">
              <h2
                id="demo-heading"
                className="text-3xl sm:text-4xl font-semibold text-text tracking-[-0.03em] mb-4"
              >
                Domluvte si demo
              </h2>
              <p className="text-text-secondary tracking-[-0.01em]">
                Ukážeme vám, jak webihned.cz funguje pro vaši organizaci.
                Odpovíme do 24&nbsp;hodin.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={80}>
              <div className="bg-surface border border-border/40 rounded-3xl p-8 sm:p-10">
                {submitted ? (
                  <div
                    className="flex flex-col items-center justify-center gap-4 py-16 text-center"
                    role="status"
                    aria-live="polite"
                  >
                    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" className="mx-auto mb-4" aria-hidden="true">
                      <circle cx="24" cy="24" r="22" stroke="var(--color-accent)" strokeWidth="2" className="checkmark-circle" />
                      <path d="M14 24L22 32L34 16" stroke="var(--color-accent)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="checkmark-path" />
                    </svg>
                    <h3 className="text-xl font-semibold text-text tracking-[-0.02em]">
                      Děkujeme!
                    </h3>
                    <p className="text-sm text-text-secondary tracking-[-0.01em]">
                      Ozveme se vám do 24 hodin.
                    </p>
                  </div>
                ) : (
                  <form
                    onSubmit={handleSubmit}
                    className="flex flex-col gap-5"
                    noValidate
                    aria-label="Demo formulář"
                  >
                    <h3 className="text-lg font-semibold text-text tracking-[-0.02em] mb-1">
                      Zanechte nám kontakt
                    </h3>

                    {/* Jméno */}
                    <div>
                      <label htmlFor="ent-jmeno" className={labelClass}>
                        Jméno
                      </label>
                      <input
                        id="ent-jmeno"
                        name="jmeno"
                        type="text"
                        autoComplete="name"
                        required
                        value={form.jmeno}
                        onChange={handleChange}
                        placeholder="Jana Nováková"
                        className={inputClass}
                      />
                    </div>

                    {/* E-mail */}
                    <div>
                      <label htmlFor="ent-email" className={labelClass}>
                        E-mail
                      </label>
                      <input
                        id="ent-email"
                        name="email"
                        type="email"
                        autoComplete="email"
                        required
                        value={form.email}
                        onChange={handleChange}
                        placeholder="jana@firma.cz"
                        className={inputClass}
                      />
                    </div>

                    {/* Firma */}
                    <div>
                      <label htmlFor="ent-firma" className={labelClass}>
                        Firma
                      </label>
                      <input
                        id="ent-firma"
                        name="firma"
                        type="text"
                        autoComplete="organization"
                        required
                        value={form.firma}
                        onChange={handleChange}
                        placeholder="Vaše firma s.r.o."
                        className={inputClass}
                      />
                    </div>

                    {/* Zpráva */}
                    <div>
                      <label htmlFor="ent-zprava" className={labelClass}>
                        Zpráva
                      </label>
                      <textarea
                        id="ent-zprava"
                        name="zprava"
                        required
                        rows={4}
                        value={form.zprava}
                        onChange={handleChange}
                        placeholder="Popište váš tým a co potřebujete..."
                        className={`${inputClass} resize-none`}
                      />
                    </div>

                    {/* Submit */}
                    <button
                      type="submit"
                      className="w-full btn-primary bg-accent text-white text-sm font-medium px-6 py-3.5 rounded-xl tracking-[-0.01em] hover:bg-accent-hover transition-colors duration-200 mt-1"
                      style={{ backgroundColor: "var(--color-accent)" }}
                    >
                      Domluvit demo
                    </button>
                  </form>
                )}
              </div>
            </ScrollReveal>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
