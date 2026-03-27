"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";

const MailIcon = () => (
  <svg
    width="22"
    height="22"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.75"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <rect x="2" y="4" width="20" height="16" rx="3" />
    <path d="m2 7 10 7 10-7" />
  </svg>
);

const HeadsetIcon = () => (
  <svg
    width="22"
    height="22"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.75"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="M3 11a9 9 0 1 1 18 0" />
    <path d="M3 11v4a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z" />
    <path d="M16 11v3a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-4" />
  </svg>
);

const DiscordIcon = () => (
  <svg
    width="22"
    height="22"
    viewBox="0 0 24 24"
    fill="currentColor"
    aria-hidden="true"
  >
    <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057c.002.022.015.043.03.056a19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" />
  </svg>
);

interface ContactCard {
  icon: React.ReactNode;
  label: string;
  value: string;
  href: string;
}

const contactCards: ContactCard[] = [
  {
    icon: <MailIcon />,
    label: "E-mail",
    value: "info@webihned.cz",
    href: "mailto:info@webihned.cz",
  },
  {
    icon: <HeadsetIcon />,
    label: "Podpora",
    value: "podpora@webihned.cz",
    href: "mailto:podpora@webihned.cz",
  },
  {
    icon: <DiscordIcon />,
    label: "Discord",
    value: "Připojte se k naší komunitě",
    href: "#",
  },
];

interface FormState {
  jmeno: string;
  email: string;
  firma: string;
  zprava: string;
}

const emptyForm: FormState = {
  jmeno: "",
  email: "",
  firma: "",
  zprava: "",
};

export default function KontaktClient() {
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
    "w-full bg-bg border border-border rounded-xl px-4 pt-6 pb-2 text-sm text-text placeholder:text-transparent tracking-[-0.01em] focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent/50 transition-colors duration-200";

  const labelClass = "text-sm font-medium text-text tracking-[-0.01em]";

  return (
    <>
      <Navbar />
      <main id="main-content" className="min-h-[calc(100vh-4rem)] bg-bg">
        {/* Hero strip */}
        <section className="max-w-7xl mx-auto px-6 lg:px-10 pt-20 pb-16 lg:pt-28 lg:pb-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">

            {/* Left column */}
            <div className="flex flex-col gap-10">
              <ScrollReveal direction="up">
                <div className="flex flex-col gap-5">
                  <h1 className="text-4xl lg:text-5xl font-semibold text-text leading-[1.1] tracking-[-0.03em]">
                    Pojďme si{" "}
                    <em
                      className="not-italic"
                      style={{ fontFamily: "var(--font-serif)" }}
                    >
                      promluvit
                    </em>
                  </h1>
                  <p className="text-base text-text-secondary leading-relaxed tracking-[-0.01em] max-w-md">
                    Máte otázky, potřebujete demo, nebo chcete enterprise
                    řešení? Ozvěte se nám.
                  </p>
                </div>
              </ScrollReveal>

              {/* Contact cards */}
              <ScrollReveal direction="up" delay={80}>
                <div className="flex flex-col gap-4">
                  {contactCards.map((card) => (
                    <a
                      key={card.label}
                      href={card.href}
                      className="group flex items-center gap-4 bg-surface border border-border/40 rounded-2xl px-5 py-4 hover:border-accent/30 transition-all duration-300"
                    >
                      <span className="flex-shrink-0 w-10 h-10 flex items-center justify-center rounded-xl bg-accent/10 text-accent group-hover:bg-accent/15 transition-colors duration-300">
                        {card.icon}
                      </span>
                      <div className="flex flex-col gap-0.5 min-w-0">
                        <span className="text-xs text-text-secondary tracking-[-0.01em] uppercase font-medium">
                          {card.label}
                        </span>
                        <span className="text-sm font-medium text-text tracking-[-0.01em] truncate">
                          {card.value}
                        </span>
                      </div>
                    </a>
                  ))}
                </div>
              </ScrollReveal>
            </div>

            {/* Right column — form */}
            <ScrollReveal direction="up" delay={120}>
              <div className="bg-surface border border-border/40 rounded-3xl p-8">
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
                    <h2 className="text-xl font-semibold text-text tracking-[-0.02em]">
                      Děkujeme!
                    </h2>
                    <p className="text-sm text-text-secondary tracking-[-0.01em]">
                      Ozveme se vám do 24 hodin.
                    </p>
                  </div>
                ) : (
                  <form
                    onSubmit={handleSubmit}
                    className="flex flex-col gap-5"
                    noValidate
                    aria-label="Kontaktní formulář"
                  >
                    <h2 className="text-lg font-semibold text-text tracking-[-0.02em] mb-1">
                      Napište nám
                    </h2>

                    {/* Jméno */}
                    <div className="float-label">
                      <input
                        id="jmeno"
                        name="jmeno"
                        type="text"
                        autoComplete="name"
                        required
                        value={form.jmeno}
                        onChange={handleChange}
                        placeholder=" "
                        className={inputClass}
                      />
                      <label htmlFor="jmeno" className={labelClass}>
                        Jméno
                      </label>
                    </div>

                    {/* E-mail */}
                    <div className="float-label">
                      <input
                        id="email"
                        name="email"
                        type="email"
                        autoComplete="email"
                        required
                        value={form.email}
                        onChange={handleChange}
                        placeholder=" "
                        className={inputClass}
                      />
                      <label htmlFor="email" className={labelClass}>
                        E-mail
                      </label>
                    </div>

                    {/* Firma (optional) */}
                    <div className="float-label">
                      <input
                        id="firma"
                        name="firma"
                        type="text"
                        autoComplete="organization"
                        value={form.firma}
                        onChange={handleChange}
                        placeholder=" "
                        className={inputClass}
                      />
                      <label htmlFor="firma" className={labelClass}>
                        Firma{" "}
                        <span className="text-text-secondary/60 font-normal">
                          (nepovinné)
                        </span>
                      </label>
                    </div>

                    {/* Zpráva */}
                    <div className="float-label">
                      <textarea
                        id="zprava"
                        name="zprava"
                        required
                        rows={5}
                        value={form.zprava}
                        onChange={handleChange}
                        placeholder=" "
                        className={`${inputClass} resize-none`}
                      />
                      <label htmlFor="zprava" className={labelClass}>
                        Zpráva
                      </label>
                    </div>

                    {/* Submit */}
                    <button
                      type="submit"
                      className="w-full btn-primary bg-accent text-white text-sm font-medium px-6 py-3.5 rounded-xl tracking-[-0.01em] hover:bg-accent-hover transition-colors duration-200 mt-1"
                      style={{ backgroundColor: "var(--color-accent)" }}
                    >
                      Odeslat zprávu
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
