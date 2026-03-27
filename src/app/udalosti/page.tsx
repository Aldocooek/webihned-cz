import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";

// ── Metadata ──────────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  title: "Události a webináře | webihned.cz",
  description:
    "Připojte se k živým ukázkám, workshopům a meetupům. Naučte se tvoři webové aplikace s AI od odborníků.",
  alternates: {
    canonical: "/udalosti",
  },
  openGraph: {
    title: "Události a webináře | webihned.cz",
    description:
      "Připojte se k živým ukázkám, workshopům a meetupům.",
    url: "https://webihned.cz/udalosti",
    siteName: "webihned.cz",
    type: "website",
    locale: "cs_CZ",
  },
};

// ── Types ─────────────────────────────────────────────────────────────────────

type EventType = "Online" | "Osobně";

interface UpcomingEvent {
  title: string;
  date: string;
  type: EventType;
  description: string;
}

interface PastEvent {
  title: string;
  recordingUrl: string;
}

// ── Data ───────────────────────────────────────────────────────────────────────

const upcomingEvents: UpcomingEvent[] = [
  {
    title: "Webinář: Jak vytvořit SaaS za víkend",
    date: "2. dubna 2026, 18:00",
    type: "Online",
    description:
      "Živá ukázka tvorby kompletní SaaS aplikace od nápadu po deploy.",
  },
  {
    title: "Workshop: AI prompty pro pokročilé",
    date: "10. dubna 2026, 14:00",
    type: "Online",
    description:
      "Naučte se formulovat prompty, které generují přesně to, co potřebujete.",
  },
  {
    title: "Meetup Praha: webihned.cz komunita",
    date: "18. dubna 2026, 19:00",
    type: "Osobně",
    description:
      "Networking, ukázky projektů a pizza. Kapacita: 50 míst.",
  },
];

const pastEvents: PastEvent[] = [
  {
    title: "Webinář: Úvod do webihned.cz (březen 2026)",
    recordingUrl: "#",
  },
  {
    title: "Workshop: No-code e-shop za 60 minut (únor 2026)",
    recordingUrl: "#",
  },
];

const typeStyles: Record<EventType, { badge: string; dot: string }> = {
  Online: {
    badge:
      "bg-blue-500/10 text-blue-600 dark:text-blue-400 border border-blue-500/20",
    dot: "bg-blue-500",
  },
  Osobně: {
    badge:
      "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20",
    dot: "bg-emerald-500",
  },
};

// ── Sub-components ─────────────────────────────────────────────────────────────

function TypeBadge({ type }: { type: EventType }) {
  return (
    <span
      className={`inline-flex items-center gap-1.5 text-xs font-medium px-2.5 py-1 rounded-full ${typeStyles[type].badge}`}
    >
      <span
        className={`w-1.5 h-1.5 rounded-full ${typeStyles[type].dot}`}
        aria-hidden="true"
      />
      {type === "Osobně" ? "Osobně — Praha" : type}
    </span>
  );
}

function EventCard({ event, index }: { event: UpcomingEvent; index: number }) {
  return (
    <ScrollReveal delay={index * 80}>
      <article className="bg-surface rounded-2xl border border-border/40 p-7 card-hover flex flex-col gap-5">
        {/* Date badge + type */}
        <div className="flex items-start justify-between gap-3 flex-wrap">
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-accent/5 border border-accent/20">
            <svg
              width="13"
              height="13"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-accent flex-shrink-0"
              aria-hidden="true"
            >
              <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
              <line x1="16" y1="2" x2="16" y2="6" />
              <line x1="8" y1="2" x2="8" y2="6" />
              <line x1="3" y1="10" x2="21" y2="10" />
            </svg>
            <time className="text-xs font-medium text-accent tracking-[-0.01em]">
              {event.date}
            </time>
          </div>
          <TypeBadge type={event.type} />
        </div>

        {/* Content */}
        <div className="flex flex-col gap-2">
          <h2 className="text-lg font-semibold text-text tracking-[-0.025em] leading-snug">
            {event.title}
          </h2>
          <p className="text-sm text-text-secondary leading-relaxed tracking-[-0.01em]">
            {event.description}
          </p>
        </div>

        {/* CTA */}
        <Link
          href="/pricing"
          className="mt-auto inline-flex items-center justify-center gap-2 text-sm font-medium px-6 py-2.5 rounded-full bg-accent text-white hover:opacity-90 transition-opacity duration-200 tracking-[-0.01em] self-start"
          style={{ backgroundColor: "var(--color-accent)" }}
          aria-label={`Zaregistrovat se na: ${event.title}`}
        >
          Zaregistrovat se
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
            <path d="M5 12h14" />
            <path d="m12 5 7 7-7 7" />
          </svg>
        </Link>
      </article>
    </ScrollReveal>
  );
}

// ── Page ───────────────────────────────────────────────────────────────────────

export default function UdalostiPage() {
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
                  <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                  <line x1="16" y1="2" x2="16" y2="6" />
                  <line x1="8" y1="2" x2="8" y2="6" />
                  <line x1="3" y1="10" x2="21" y2="10" />
                </svg>
                Události
              </div>
            </ScrollReveal>

            <ScrollReveal delay={60}>
              <h1 className="text-4xl sm:text-5xl lg:text-[64px] font-semibold text-text tracking-[-0.035em] leading-[1.05] mb-6">
                Události a{" "}
                <em
                  style={{ fontFamily: "var(--font-serif)", fontStyle: "italic" }}
                >
                  webináře
                </em>
              </h1>
            </ScrollReveal>

            <ScrollReveal delay={120}>
              <p className="text-lg text-text-secondary leading-relaxed tracking-[-0.01em] max-w-xl mx-auto">
                Připojte se k&nbsp;živým ukázkám, workshopům a&nbsp;meetupům.
              </p>
            </ScrollReveal>
          </div>
        </section>

        {/* ── Upcoming events ───────────────────────────────────────────── */}
        <section className="py-16 px-6 lg:px-10" aria-labelledby="upcoming-heading">
          <div className="max-w-7xl mx-auto">
            <ScrollReveal>
              <h2
                id="upcoming-heading"
                className="text-2xl font-semibold text-text tracking-[-0.03em] mb-8"
              >
                Nadcházející události
              </h2>
            </ScrollReveal>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {upcomingEvents.map((event, i) => (
                <EventCard key={event.title} event={event} index={i} />
              ))}
            </div>
          </div>
        </section>

        {/* ── Past events ───────────────────────────────────────────────── */}
        <section className="py-16 px-6 lg:px-10 border-t border-border/30" aria-labelledby="past-heading">
          <div className="max-w-7xl mx-auto">
            <ScrollReveal>
              <h2
                id="past-heading"
                className="text-2xl font-semibold text-text tracking-[-0.03em] mb-8"
              >
                Záznamy z&nbsp;minulých akcí
              </h2>
            </ScrollReveal>

            <div className="flex flex-col gap-3 max-w-2xl">
              {pastEvents.map((event, i) => (
                <ScrollReveal key={event.title} delay={i * 60}>
                  <div className="bg-surface rounded-2xl border border-border/40 px-6 py-4 flex items-center justify-between gap-4 card-hover">
                    <p className="text-sm font-medium text-text tracking-[-0.02em]">
                      {event.title}
                    </p>
                    <a
                      href={event.recordingUrl}
                      className="flex-shrink-0 text-sm font-medium text-accent hover:text-accent/80 transition-colors duration-200 tracking-[-0.01em] whitespace-nowrap"
                      aria-label={`Sledovat záznam: ${event.title}`}
                    >
                      Sledovat záznam →
                    </a>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* ── Bottom CTA ────────────────────────────────────────────────── */}
        <section className="py-24 px-6 lg:px-10 text-center" aria-labelledby="udalosti-cta">
          <ScrollReveal>
            <div className="max-w-xl mx-auto">
              <h2
                id="udalosti-cta"
                className="text-3xl sm:text-4xl font-semibold text-text tracking-[-0.03em] mb-5"
              >
                Nepropásněte žádnou akci
              </h2>
              <p className="text-text-secondary tracking-[-0.01em] mb-8">
                Odebírejte newsletter a&nbsp;dostanete pozvánky předem.
              </p>
              <a
                href="/newsletter"
                className="inline-flex items-center gap-2 bg-accent text-white text-sm font-medium px-8 py-3.5 rounded-full tracking-[-0.01em] hover:opacity-90 transition-opacity duration-200"
                style={{ backgroundColor: "var(--color-accent)" }}
              >
                Odebírat newsletter
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
