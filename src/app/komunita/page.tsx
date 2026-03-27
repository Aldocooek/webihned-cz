import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";

export const metadata: Metadata = {
  title: "Komunita | webihned.cz",
  description:
    "Přidejte se ke komunitě tisíců tvůrců na webihned.cz. Discord, GitHub, online meetupy a workshopy. 5 000+ členů, kteří si pomáhají a inspirují se navzájem.",
  alternates: {
    canonical: "/komunita",
  },
  openGraph: {
    title: "Komunita | webihned.cz",
    description:
      "Tisíce tvůrců, kteří si pomáhají a inspirují se navzájem. Přidejte se na Discord, GitHub a události.",
    url: "https://webihned.cz/komunita",
    siteName: "webihned.cz",
    type: "website",
    locale: "cs_CZ",
  },
};

// ── Community channels ────────────────────────────────────────────────────────

const channels = [
  {
    id: "discord",
    title: "Discord",
    description:
      "Hlavní hub komunity. Diskuze, pomoc, sdílení projektů. 5 000+ členů.",
    cta: "Připojit se na Discord",
    href: "https://discord.gg/webihned",
    icon: (
      <svg
        width="48"
        height="48"
        viewBox="0 0 48 48"
        fill="none"
        aria-hidden="true"
      >
        <path
          d="M38.56 10.37A36.1 36.1 0 0 0 29.78 8c-.36.64-.78 1.51-1.07 2.2a33.73 33.73 0 0 0-9.42 0C18.99 9.51 18.56 8.64 18.2 8a36.03 36.03 0 0 0-8.79 2.38C3.97 18.95 2.48 27.32 3.22 35.57A36.33 36.33 0 0 0 14.28 40c.88-1.16 1.66-2.4 2.34-3.71a23.55 23.55 0 0 1-3.69-1.74c.31-.22.61-.45.9-.69 7.12 3.23 14.84 3.23 21.88 0 .29.24.59.47.9.69a23.6 23.6 0 0 1-3.7 1.74c.68 1.31 1.46 2.55 2.34 3.71a36.26 36.26 0 0 0 11.07-4.44c.9-9.34-1.54-17.64-6.76-25.19zM17.35 30.75c-2.03 0-3.7-1.83-3.7-4.06s1.63-4.07 3.7-4.07c2.06 0 3.74 1.84 3.7 4.07 0 2.23-1.63 4.06-3.7 4.06zm13.3 0c-2.03 0-3.7-1.83-3.7-4.06s1.63-4.07 3.7-4.07c2.07 0 3.74 1.84 3.7 4.07 0 2.23-1.63 4.06-3.7 4.06z"
          fill="currentColor"
        />
      </svg>
    ),
  },
  {
    id: "github",
    title: "GitHub",
    description:
      "Open-source příspěvky, feature requesty a bug reporty.",
    cta: "Navštívit GitHub",
    href: "https://github.com/webihned",
    icon: (
      <svg
        width="48"
        height="48"
        viewBox="0 0 48 48"
        fill="none"
        aria-hidden="true"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M24 4C12.95 4 4 12.95 4 24c0 8.84 5.73 16.33 13.68 18.98.99.18 1.36-.43 1.36-.96 0-.47-.02-2.03-.03-3.69-5.54 1.2-6.7-2.38-6.7-2.38-.91-2.3-2.22-2.91-2.22-2.91-1.82-1.24.14-1.22.14-1.22 2.01.14 3.07 2.06 3.07 2.06 1.79 3.06 4.69 2.18 5.83 1.66.18-1.29.7-2.17 1.27-2.67-4.42-.5-9.07-2.21-9.07-9.84 0-2.17.78-3.95 2.05-5.34-.2-.51-.89-2.52.2-5.26 0 0 1.67-.54 5.47 2.04A19.04 19.04 0 0 1 24 14.9c1.69.01 3.39.23 4.98.67 3.8-2.58 5.46-2.04 5.46-2.04 1.09 2.74.4 4.75.2 5.26 1.28 1.39 2.05 3.17 2.05 5.34 0 7.65-4.66 9.33-9.1 9.82.72.62 1.36 1.83 1.36 3.69 0 2.67-.02 4.82-.02 5.47 0 .53.36 1.15 1.37.96C38.28 40.32 44 32.83 44 24 44 12.95 35.05 4 24 4z"
          fill="currentColor"
        />
      </svg>
    ),
  },
  {
    id: "udalosti",
    title: "Události",
    description:
      "Online meetupy, workshopy a hackathony. Každý měsíc nové akce.",
    cta: "Zobrazit události",
    href: "/udalosti",
    icon: (
      <svg
        width="48"
        height="48"
        viewBox="0 0 48 48"
        fill="none"
        aria-hidden="true"
      >
        <rect
          x="6"
          y="10"
          width="36"
          height="32"
          rx="4"
          stroke="currentColor"
          strokeWidth="2.4"
        />
        <path
          d="M6 20h36"
          stroke="currentColor"
          strokeWidth="2.4"
          strokeLinecap="round"
        />
        <path
          d="M16 6v8M32 6v8"
          stroke="currentColor"
          strokeWidth="2.4"
          strokeLinecap="round"
        />
        <rect x="14" y="27" width="6" height="6" rx="1.5" fill="currentColor" />
        <rect x="28" y="27" width="6" height="6" rx="1.5" fill="currentColor" />
      </svg>
    ),
  },
];

// ── Testimonials ──────────────────────────────────────────────────────────────

const testimonials = [
  {
    quote:
      "Za jeden víkend jsem postavil CRM pro celou firmu. Ještě rok zpátky bych to musel zadávat agentuře.",
    name: "Marek V.",
    role: "Majitel e-shopu",
  },
  {
    quote:
      "Komunita na Discordu mi pomohla vyřešit integraci s API během 20 minut. Neuvěřitelný.",
    name: "Petra K.",
    role: "Freelance konzultantka",
  },
  {
    quote:
      "Sdílel jsem svůj projekt a dostal jsem 50 upvotů. Tenhle feedback stojí za zlato.",
    name: "Jakub N.",
    role: "Produktový manažer",
  },
];

// ── Stats ─────────────────────────────────────────────────────────────────────

const stats = [
  { value: "5 000+", label: "členů" },
  { value: "500+", label: "projektů sdíleno" },
  { value: "24/7", label: "aktivní komunita" },
];

// ── Page ──────────────────────────────────────────────────────────────────────

export default function KomunitaPage() {
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
                Komunita
              </div>
            </ScrollReveal>

            <ScrollReveal delay={60}>
              <h1 className="text-4xl sm:text-5xl lg:text-[64px] font-semibold text-text tracking-[-0.035em] leading-[1.05] mb-6">
                Přidejte se ke{" "}
                <em
                  style={{ fontFamily: "var(--font-serif)", fontStyle: "italic" }}
                >
                  komunitě
                </em>
              </h1>
            </ScrollReveal>

            <ScrollReveal delay={120}>
              <p className="text-lg text-text-secondary leading-relaxed tracking-[-0.01em] max-w-2xl mx-auto">
                Tisíce tvůrců, kteří si pomáhají a inspirují se navzájem.
              </p>
            </ScrollReveal>
          </div>
        </section>

        {/* ── Stats ────────────────────────────────────────────────────── */}
        <section className="py-12 px-6 lg:px-10 border-y border-border/40" aria-label="Statistiky komunity">
          <div className="max-w-3xl mx-auto">
            <ScrollReveal>
              <dl className="grid grid-cols-3 gap-6 text-center">
                {stats.map((stat) => (
                  <div key={stat.label}>
                    <dt className="text-3xl sm:text-4xl font-semibold text-text tracking-[-0.03em]">
                      {stat.value}
                    </dt>
                    <dd className="text-sm text-text-secondary mt-1 tracking-[-0.01em]">
                      {stat.label}
                    </dd>
                  </div>
                ))}
              </dl>
            </ScrollReveal>
          </div>
        </section>

        {/* ── Channels ─────────────────────────────────────────────────── */}
        <section
          className="py-20 px-6 lg:px-10"
          aria-labelledby="channels-heading"
        >
          <div className="max-w-7xl mx-auto">
            <ScrollReveal className="text-center mb-14">
              <h2
                id="channels-heading"
                className="text-3xl sm:text-4xl font-semibold text-text tracking-[-0.03em] mb-4"
              >
                Kde nás najdete
              </h2>
              <p className="text-text-secondary tracking-[-0.01em] max-w-xl mx-auto">
                Vyberte si kanál, který vám vyhovuje nejlépe.
              </p>
            </ScrollReveal>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {channels.map((channel, i) => (
                <ScrollReveal key={channel.id} delay={i * 80}>
                  <div className="bg-surface rounded-2xl border border-border/40 p-8 card-hover h-full flex flex-col gap-6">
                    <div className="text-accent">{channel.icon}</div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-text tracking-[-0.02em] mb-3">
                        {channel.title}
                      </h3>
                      <p className="text-sm text-text-secondary leading-relaxed tracking-[-0.01em]">
                        {channel.description}
                      </p>
                    </div>
                    <a
                      href={channel.href}
                      target={channel.href.startsWith("http") ? "_blank" : undefined}
                      rel={channel.href.startsWith("http") ? "noopener noreferrer" : undefined}
                      className="inline-flex items-center justify-center gap-2 w-full text-sm font-medium px-5 py-3 rounded-xl border border-border text-text hover:border-accent hover:text-accent transition-colors duration-200 tracking-[-0.01em]"
                    >
                      {channel.cta}
                      <svg
                        width="14"
                        height="14"
                        viewBox="0 0 14 14"
                        fill="none"
                        aria-hidden="true"
                      >
                        <path
                          d="M2.5 7h9M8 3l4 4-4 4"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </a>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* ── Testimonials ─────────────────────────────────────────────── */}
        <section
          className="py-20 px-6 lg:px-10 bg-surface/50"
          aria-labelledby="testimonials-heading"
        >
          <div className="max-w-7xl mx-auto">
            <ScrollReveal className="text-center mb-14">
              <h2
                id="testimonials-heading"
                className="text-3xl sm:text-4xl font-semibold text-text tracking-[-0.03em] mb-4"
              >
                Co říká komunita
              </h2>
            </ScrollReveal>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {testimonials.map((t, i) => (
                <ScrollReveal key={t.name} delay={i * 70}>
                  <figure className="bg-surface rounded-2xl border border-border/40 p-7 card-hover h-full flex flex-col gap-4">
                    {/* Quote icon */}
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      aria-hidden="true"
                      className="text-accent flex-shrink-0"
                    >
                      <path
                        d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z"
                        fill="currentColor"
                        opacity="0.15"
                      />
                      <path
                        d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z"
                        fill="currentColor"
                        opacity="0.15"
                      />
                    </svg>

                    <blockquote className="flex-1">
                      <p className="text-text leading-relaxed tracking-[-0.01em] text-sm">
                        {t.quote}
                      </p>
                    </blockquote>

                    <figcaption className="flex flex-col gap-0.5 mt-2 pt-4 border-t border-border/40">
                      <span className="text-sm font-semibold text-text tracking-[-0.02em]">
                        {t.name}
                      </span>
                      <span className="text-xs text-text-secondary tracking-[-0.01em]">
                        {t.role}
                      </span>
                    </figcaption>
                  </figure>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* ── Bottom CTA ───────────────────────────────────────────────── */}
        <section className="py-20 px-6 lg:px-10 text-center" aria-labelledby="cta-heading">
          <ScrollReveal>
            <div className="max-w-xl mx-auto">
              <h2
                id="cta-heading"
                className="text-2xl sm:text-3xl font-semibold text-text tracking-[-0.03em] mb-4"
              >
                Připraveni se přidat?
              </h2>
              <p className="text-text-secondary tracking-[-0.01em] mb-8">
                Komunita je zdarma pro všechny uživatele webihned.cz.
              </p>
              <a
                href="https://discord.gg/webihned"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-medium px-8 py-3.5 rounded-full text-white tracking-[-0.01em] transition-colors duration-200"
                style={{ backgroundColor: "var(--color-accent)" }}
              >
                Připojit se na Discord
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  aria-hidden="true"
                >
                  <path
                    d="M3 8h10M9 4l4 4-4 4"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
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
