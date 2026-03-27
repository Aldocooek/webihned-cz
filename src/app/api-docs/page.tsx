import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";

// ── Metadata ──────────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  title: "API dokumentace | webihned.cz",
  description:
    "RESTful API pro integraci webihned.cz do vašeho workflow. Autentizace, endpointy a rate limiting.",
  alternates: {
    canonical: "/api-docs",
  },
  openGraph: {
    title: "API dokumentace | webihned.cz",
    description:
      "RESTful API pro integraci webihned.cz do vašeho workflow.",
    url: "https://webihned.cz/api-docs",
    siteName: "webihned.cz",
    type: "website",
    locale: "cs_CZ",
  },
};

// ── Types ─────────────────────────────────────────────────────────────────────

type HttpMethod = "GET" | "POST" | "PUT" | "DELETE";

interface Endpoint {
  method: HttpMethod;
  path: string;
  description: string;
}

// ── Data ───────────────────────────────────────────────────────────────────────

const endpoints: Endpoint[] = [
  { method: "GET",    path: "/api/v1/apps",      description: "Seznam vašich aplikací" },
  { method: "POST",   path: "/api/v1/apps",      description: "Vytvoření nové aplikace" },
  { method: "GET",    path: "/api/v1/apps/:id",  description: "Detail aplikace" },
  { method: "PUT",    path: "/api/v1/apps/:id",  description: "Aktualizace aplikace" },
  { method: "DELETE", path: "/api/v1/apps/:id",  description: "Smazání aplikace" },
];

const methodStyles: Record<HttpMethod, string> = {
  GET:    "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20",
  POST:   "bg-blue-500/10 text-blue-600 dark:text-blue-400 border border-blue-500/20",
  PUT:    "bg-amber-500/10 text-amber-600 dark:text-amber-400 border border-amber-500/20",
  DELETE: "bg-red-500/10 text-red-600 dark:text-red-400 border border-red-500/20",
};

// ── Sub-components ─────────────────────────────────────────────────────────────

function MethodBadge({ method }: { method: HttpMethod }) {
  return (
    <span
      className={`inline-flex items-center text-[11px] font-bold px-2.5 py-1 rounded font-mono tracking-wide w-16 justify-center flex-shrink-0 ${methodStyles[method]}`}
    >
      {method}
    </span>
  );
}

function SectionCard({
  id,
  icon,
  title,
  children,
  delay,
}: {
  id: string;
  icon: React.ReactNode;
  title: string;
  children: React.ReactNode;
  delay?: number;
}) {
  return (
    <ScrollReveal delay={delay ?? 0}>
      <section
        id={id}
        className="bg-surface rounded-2xl border border-border/40 p-7 flex flex-col gap-5"
        aria-labelledby={`${id}-heading`}
      >
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center text-accent flex-shrink-0">
            {icon}
          </div>
          <h2
            id={`${id}-heading`}
            className="text-lg font-semibold text-text tracking-[-0.025em]"
          >
            {title}
          </h2>
        </div>
        {children}
      </section>
    </ScrollReveal>
  );
}

// ── Page ───────────────────────────────────────────────────────────────────────

export default function ApiDocsPage() {
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
                  <polyline points="16 18 22 12 16 6" />
                  <polyline points="8 6 2 12 8 18" />
                </svg>
                API
              </div>
            </ScrollReveal>

            <ScrollReveal delay={60}>
              <h1 className="text-4xl sm:text-5xl lg:text-[64px] font-semibold text-text tracking-[-0.035em] leading-[1.05] mb-6">
                API{" "}
                <em
                  style={{ fontFamily: "var(--font-serif)", fontStyle: "italic" }}
                >
                  dokumentace
                </em>
              </h1>
            </ScrollReveal>

            <ScrollReveal delay={120}>
              <p className="text-lg text-text-secondary leading-relaxed tracking-[-0.01em] max-w-xl mx-auto">
                RESTful API pro integraci webihned.cz do&nbsp;vašeho workflow.
              </p>
            </ScrollReveal>
          </div>
        </section>

        {/* ── Docs sections ─────────────────────────────────────────────── */}
        <section className="py-16 px-6 lg:px-10" aria-label="API dokumentace sekce">
          <div className="max-w-3xl mx-auto flex flex-col gap-6">

            {/* Autentizace */}
            <SectionCard
              id="autentizace"
              delay={0}
              title="Autentizace"
              icon={
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                  <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                </svg>
              }
            >
              <p className="text-sm text-text-secondary leading-relaxed tracking-[-0.01em]">
                Použijte API klíč v&nbsp;hlavičce každého požadavku:
              </p>
              <div className="bg-bg rounded-xl border border-border/60 px-5 py-4 overflow-x-auto">
                <code className="text-sm font-mono text-accent tracking-tight whitespace-nowrap">
                  Authorization: Bearer YOUR_API_KEY
                </code>
              </div>
              <p className="text-xs text-text-secondary/70 tracking-[-0.01em]">
                API klíč najdete v&nbsp;nastavení účtu pod záložkou <span className="font-medium text-text-secondary">Integrace</span>.
              </p>
            </SectionCard>

            {/* Endpointy */}
            <SectionCard
              id="endpointy"
              delay={80}
              title="Endpointy"
              icon={
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <polyline points="16 18 22 12 16 6" />
                  <polyline points="8 6 2 12 8 18" />
                </svg>
              }
            >
              <div
                className="flex flex-col gap-2"
                role="list"
                aria-label="Seznam API endpointů"
              >
                {endpoints.map((ep, i) => (
                  <ScrollReveal key={`${ep.method}-${ep.path}`} delay={80 + i * 50}>
                    <div
                      className="flex items-center gap-4 px-4 py-3 rounded-xl bg-bg border border-border/50 hover:border-border transition-colors duration-200"
                      role="listitem"
                    >
                      <MethodBadge method={ep.method} />
                      <code className="text-sm font-mono text-text tracking-tight flex-1 min-w-0 truncate">
                        {ep.path}
                      </code>
                      <span className="text-xs text-text-secondary tracking-[-0.01em] hidden sm:block flex-shrink-0">
                        {ep.description}
                      </span>
                    </div>
                    {/* Description on mobile */}
                    <p className="text-xs text-text-secondary tracking-[-0.01em] px-4 pt-1 sm:hidden">
                      {ep.description}
                    </p>
                  </ScrollReveal>
                ))}
              </div>
            </SectionCard>

            {/* Rate limiting */}
            <SectionCard
              id="rate-limiting"
              delay={160}
              title="Rate limiting"
              icon={
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <circle cx="12" cy="12" r="10" />
                  <polyline points="12 6 12 12 16 14" />
                </svg>
              }
            >
              <p className="text-sm text-text-secondary leading-relaxed tracking-[-0.01em]">
                100 požadavků za minutu na API klíč.
              </p>
              <div className="bg-amber-500/5 border border-amber-500/20 rounded-xl px-5 py-4">
                <p className="text-xs text-amber-600 dark:text-amber-400 tracking-[-0.01em] leading-relaxed">
                  Při překročení limitu vrátíme HTTP&nbsp;429. Backoff: počkejte 60&nbsp;sekund, pak zopakujte požadavek.
                </p>
              </div>
            </SectionCard>

            {/* Podpora */}
            <SectionCard
              id="podpora"
              delay={240}
              title="Podpora"
              icon={
                <svg
                  width="18"
                  height="18"
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
              }
            >
              <p className="text-sm text-text-secondary leading-relaxed tracking-[-0.01em]">
                Pro dotazy k&nbsp;API kontaktujte náš tým:
              </p>
              <a
                href="mailto:api@webihned.cz"
                className="inline-flex items-center gap-2 text-sm font-medium text-accent hover:text-accent/80 transition-colors duration-200 tracking-[-0.01em]"
              >
                api@webihned.cz
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
              </a>
            </SectionCard>

          </div>
        </section>

        {/* ── Bottom CTA ────────────────────────────────────────────────── */}
        <section className="py-24 px-6 lg:px-10 text-center border-t border-border/30" aria-labelledby="api-cta">
          <ScrollReveal>
            <div className="max-w-xl mx-auto">
              <h2
                id="api-cta"
                className="text-3xl sm:text-4xl font-semibold text-text tracking-[-0.03em] mb-5"
              >
                Integrujte webihned.cz dnes
              </h2>
              <p className="text-text-secondary tracking-[-0.01em] mb-8">
                API klíč získáte po registraci — zdarma, žádná platební karta.
              </p>
              <Link
                href="/pricing"
                className="inline-flex items-center gap-2 bg-accent text-white text-sm font-medium px-8 py-3.5 rounded-full tracking-[-0.01em] hover:opacity-90 transition-opacity duration-200"
                style={{ backgroundColor: "var(--color-accent)" }}
              >
                Vytvořit účet zdarma
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
              </Link>
            </div>
          </ScrollReveal>
        </section>

      </main>
      <Footer />
    </>
  );
}
