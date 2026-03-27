import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";

export const metadata: Metadata = {
  title: "Roadmap | webihned.cz",
  description:
    "Transparentní plán vývoje platformy webihned.cz. Sledujte, na čem pracujeme, hlasujte o funkcích a sledujte, co jsme už dokončili.",
  alternates: {
    canonical: "/roadmap",
  },
  openGraph: {
    title: "Roadmap | webihned.cz",
    description:
      "Transparentní plán vývoje platformy webihned.cz. Hlasujte o funkcích, které chcete.",
    url: "https://webihned.cz/roadmap",
    siteName: "webihned.cz",
    type: "website",
    locale: "cs_CZ",
  },
};

// ── Roadmap data ──────────────────────────────────────────────────────────────

type RoadmapStatus = "planned" | "in-progress" | "done";

interface RoadmapItem {
  title: string;
  votes?: number;
}

const roadmapData: Record<RoadmapStatus, RoadmapItem[]> = {
  planned: [
    { title: "Mobilní aplikace (iOS/Android)", votes: 284 },
    { title: "A/B testování framework", votes: 197 },
    { title: "White-label řešení", votes: 156 },
    { title: "Multi-agent architektura", votes: 143 },
  ],
  "in-progress": [
    { title: "Anglická verze platformy", votes: 321 },
    { title: "Webhooks a serverless funkce", votes: 208 },
    { title: "Staging prostředí", votes: 179 },
  ],
  done: [
    { title: "Tmavý režim" },
    { title: "GitHub integrace" },
    { title: "Rychlejší AI generování" },
    { title: "Bezpečnostní sken" },
    { title: "Týmové workspace" },
  ],
};

const columnConfig: Record<
  RoadmapStatus,
  { label: string; accent: string; bg: string; border: string; dot: string }
> = {
  planned: {
    label: "Plánujeme",
    accent: "text-text-secondary",
    bg: "bg-surface/60",
    border: "border-border/40",
    dot: "bg-text-secondary/40",
  },
  "in-progress": {
    label: "Pracujeme na tom",
    accent: "text-accent",
    bg: "bg-accent/5",
    border: "border-accent/20",
    dot: "bg-accent",
  },
  done: {
    label: "Hotovo",
    accent: "text-emerald-500",
    bg: "bg-emerald-500/5",
    border: "border-emerald-500/20",
    dot: "bg-emerald-500",
  },
};

// ── Page ──────────────────────────────────────────────────────────────────────

export default function RoadmapPage() {
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
                  <circle cx="12" cy="12" r="10" />
                  <polyline points="12 6 12 12 16 14" />
                </svg>
                Roadmap
              </div>
            </ScrollReveal>

            <ScrollReveal delay={60}>
              <h1 className="text-4xl sm:text-5xl lg:text-[64px] font-semibold text-text tracking-[-0.035em] leading-[1.05] mb-6">
                Kam{" "}
                <em
                  style={{ fontFamily: "var(--font-serif)", fontStyle: "italic" }}
                >
                  směřujeme
                </em>
              </h1>
            </ScrollReveal>

            <ScrollReveal delay={120}>
              <p className="text-lg text-text-secondary leading-relaxed tracking-[-0.01em] max-w-2xl mx-auto">
                Transparentní plán vývoje platformy. Hlasujte o funkcích, které chcete.
              </p>
            </ScrollReveal>
          </div>
        </section>

        {/* ── Kanban board ─────────────────────────────────────────────── */}
        <section
          className="py-16 px-6 lg:px-10"
          aria-labelledby="roadmap-heading"
        >
          <h2 id="roadmap-heading" className="sr-only">
            Přehled vývoje
          </h2>
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {(["planned", "in-progress", "done"] as RoadmapStatus[]).map(
                (status, colIdx) => {
                  const col = columnConfig[status];
                  const items = roadmapData[status];
                  return (
                    <ScrollReveal key={status} delay={colIdx * 80}>
                      <div className="flex flex-col gap-3">
                        {/* Column header */}
                        <div className="flex items-center gap-2.5 mb-1">
                          <span
                            className={`w-2.5 h-2.5 rounded-full flex-shrink-0 ${col.dot}`}
                            aria-hidden="true"
                          />
                          <h3
                            className={`text-sm font-semibold tracking-[-0.02em] ${col.accent}`}
                          >
                            {col.label}
                          </h3>
                          <span className="ml-auto text-xs text-text-secondary bg-surface border border-border/40 rounded-full px-2 py-0.5">
                            {items.length}
                          </span>
                        </div>

                        {/* Items */}
                        <div className="flex flex-col gap-2.5">
                          {items.map((item, i) => (
                            <ScrollReveal
                              key={item.title}
                              delay={colIdx * 80 + i * 50}
                            >
                              <div
                                className={`rounded-xl border px-4 py-3.5 flex items-center justify-between gap-3 ${col.bg} ${col.border}`}
                              >
                                <div className="flex items-center gap-2.5 min-w-0">
                                  {status === "done" ? (
                                    <span
                                      className="flex-shrink-0 flex items-center justify-center w-5 h-5 rounded-full bg-emerald-500/15"
                                      aria-label="Hotovo"
                                    >
                                      <svg
                                        width="10"
                                        height="10"
                                        viewBox="0 0 10 10"
                                        fill="none"
                                        aria-hidden="true"
                                      >
                                        <path
                                          d="M2 5l2 2 4-4"
                                          stroke="var(--color-check)"
                                          strokeWidth="1.5"
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                        />
                                      </svg>
                                    </span>
                                  ) : (
                                    <span
                                      className={`flex-shrink-0 w-1.5 h-1.5 rounded-full ${col.dot}`}
                                      aria-hidden="true"
                                    />
                                  )}
                                  <span className="text-sm text-text tracking-[-0.01em] font-medium truncate">
                                    {item.title}
                                  </span>
                                </div>

                                {item.votes !== undefined && (
                                  <button
                                    type="button"
                                    className="flex-shrink-0 inline-flex items-center gap-1 text-xs text-text-secondary hover:text-accent transition-colors duration-150 bg-bg border border-border/40 rounded-lg px-2 py-1"
                                    aria-label={`Hlasovat pro ${item.title}. Aktuálně ${item.votes} hlasů.`}
                                  >
                                    <svg
                                      width="10"
                                      height="10"
                                      viewBox="0 0 10 10"
                                      fill="none"
                                      aria-hidden="true"
                                    >
                                      <path
                                        d="M5 8V2M2 5l3-3 3 3"
                                        stroke="currentColor"
                                        strokeWidth="1.4"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                      />
                                    </svg>
                                    {item.votes}
                                  </button>
                                )}
                              </div>
                            </ScrollReveal>
                          ))}
                        </div>
                      </div>
                    </ScrollReveal>
                  );
                }
              )}
            </div>
          </div>
        </section>

        {/* ── Bottom CTA ───────────────────────────────────────────────── */}
        <section
          className="py-16 px-6 lg:px-10"
          aria-labelledby="suggest-heading"
        >
          <div className="max-w-2xl mx-auto">
            <ScrollReveal>
              <div className="bg-surface rounded-2xl border border-border/40 p-8 sm:p-10 text-center">
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-accent/10 text-accent mb-6">
                  <svg
                    width="28"
                    height="28"
                    viewBox="0 0 28 28"
                    fill="none"
                    aria-hidden="true"
                  >
                    <path
                      d="M14 4v10M14 18v2"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                    />
                    <circle
                      cx="14"
                      cy="14"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="1.8"
                    />
                  </svg>
                </div>
                <h2
                  id="suggest-heading"
                  className="text-2xl sm:text-3xl font-semibold text-text tracking-[-0.03em] mb-4"
                >
                  Chybí vám nějaká funkce?
                </h2>
                <p className="text-text-secondary leading-relaxed tracking-[-0.01em] mb-8 max-w-md mx-auto">
                  Napište nám svůj nápad nebo hlasujte pro stávající položky na
                  GitHubu.
                </p>
                <a
                  href="https://github.com/webihned"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-medium px-7 py-3 rounded-full border border-border text-text hover:border-accent hover:text-accent transition-colors duration-300 tracking-[-0.01em]"
                >
                  Navrhnout funkci na GitHubu
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
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
