import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";

// ── Metadata ──────────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  title: "Zdroje a materiály | webihned.cz",
  description:
    "Průvodci, šablony a materiály pro váš úspěch. Stáhněte si zdarma a nastartujte svůj projekt.",
  alternates: {
    canonical: "/zdroje",
  },
  openGraph: {
    title: "Zdroje a materiály | webihned.cz",
    description:
      "Průvodci, šablony a materiály pro váš úspěch.",
    url: "https://webihned.cz/zdroje",
    siteName: "webihned.cz",
    type: "website",
    locale: "cs_CZ",
  },
};

// ── Types ─────────────────────────────────────────────────────────────────────

type ResourceFormat = "PDF" | "XLSX" | "MP4";
type ResourceAction = "Stáhnout" | "Sledovat";

interface Resource {
  title: string;
  format: ResourceFormat;
  action: ResourceAction;
}

interface ResourceCategory {
  heading: string;
  description: string;
  icon: React.ReactNode;
  items: Resource[];
}

// ── Data ───────────────────────────────────────────────────────────────────────

const formatStyles: Record<ResourceFormat, string> = {
  PDF: "bg-red-500/10 text-red-600 dark:text-red-400 border border-red-500/20",
  XLSX: "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20",
  MP4: "bg-violet-500/10 text-violet-600 dark:text-violet-400 border border-violet-500/20",
};

const DocumentIcon = (
  <svg
    width="22"
    height="22"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
    <polyline points="14 2 14 8 20 8" />
    <line x1="16" y1="13" x2="8" y2="13" />
    <line x1="16" y1="17" x2="8" y2="17" />
    <polyline points="10 9 9 9 8 9" />
  </svg>
);

const TemplateIcon = (
  <svg
    width="22"
    height="22"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <rect x="3" y="3" width="18" height="18" rx="2" />
    <path d="M3 9h18M9 21V9" />
  </svg>
);

const VideoIcon = (
  <svg
    width="22"
    height="22"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <polygon points="23 7 16 12 23 17 23 7" />
    <rect x="1" y="5" width="15" height="14" rx="2" ry="2" />
  </svg>
);

const categories: ResourceCategory[] = [
  {
    heading: "Průvodci",
    description: "Podrobné návody krok za krokem.",
    icon: DocumentIcon,
    items: [
      { title: "Jak začít s webihned.cz", format: "PDF", action: "Stáhnout" },
      { title: "Průvodce cenovou strategií pro SaaS", format: "PDF", action: "Stáhnout" },
      { title: "Bezpečnost vašich aplikací", format: "PDF", action: "Stáhnout" },
    ],
  },
  {
    heading: "Šablony ke stažení",
    description: "Připravené soubory, které rovnou použijete.",
    icon: TemplateIcon,
    items: [
      { title: "Šablona business plánu pro SaaS", format: "XLSX", action: "Stáhnout" },
      { title: "Checklist před spuštěním aplikace", format: "PDF", action: "Stáhnout" },
      { title: "Marketingový plán pro launch", format: "XLSX", action: "Stáhnout" },
    ],
  },
  {
    heading: "Videa",
    description: "Naučte se vizuálně.",
    icon: VideoIcon,
    items: [
      { title: "Úvod do platformy (5 min)", format: "MP4", action: "Sledovat" },
      { title: "Pokročilé funkce (12 min)", format: "MP4", action: "Sledovat" },
      { title: "Customer success příběhy (8 min)", format: "MP4", action: "Sledovat" },
    ],
  },
];

// ── Sub-components ─────────────────────────────────────────────────────────────

function FormatBadge({ format }: { format: ResourceFormat }) {
  return (
    <span
      className={`inline-flex items-center text-[10px] font-semibold px-2 py-0.5 rounded tracking-wide uppercase ${formatStyles[format]}`}
    >
      {format}
    </span>
  );
}

function ResourceCard({
  item,
  delay,
}: {
  item: Resource;
  delay: number;
}) {
  return (
    <ScrollReveal delay={delay}>
      <div className="bg-surface rounded-xl border border-border/40 px-5 py-4 flex items-center justify-between gap-4 card-hover">
        <div className="flex items-center gap-3 min-w-0">
          <FormatBadge format={item.format} />
          <p className="text-sm font-medium text-text tracking-[-0.02em] truncate">
            {item.title}
          </p>
        </div>
        <Link
          href="/dokumentace"
          className="flex-shrink-0 inline-flex items-center gap-1.5 text-xs font-medium text-accent hover:text-accent/80 transition-colors duration-200 tracking-[-0.01em]"
          aria-label={`${item.action}: ${item.title}`}
        >
          {item.action}
          <svg
            width="12"
            height="12"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            {item.action === "Stáhnout" ? (
              <>
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                <polyline points="7 10 12 15 17 10" />
                <line x1="12" y1="15" x2="12" y2="3" />
              </>
            ) : (
              <>
                <path d="M5 12h14" />
                <path d="m12 5 7 7-7 7" />
              </>
            )}
          </svg>
        </Link>
      </div>
    </ScrollReveal>
  );
}

// ── Page ───────────────────────────────────────────────────────────────────────

export default function ZdrojePage() {
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
                  <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
                  <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
                </svg>
                Zdroje
              </div>
            </ScrollReveal>

            <ScrollReveal delay={60}>
              <h1 className="text-4xl sm:text-5xl lg:text-[64px] font-semibold text-text tracking-[-0.035em] leading-[1.05] mb-6">
                Zdroje a{" "}
                <em
                  style={{ fontFamily: "var(--font-serif)", fontStyle: "italic" }}
                >
                  materiály
                </em>
              </h1>
            </ScrollReveal>

            <ScrollReveal delay={120}>
              <p className="text-lg text-text-secondary leading-relaxed tracking-[-0.01em] max-w-xl mx-auto">
                Průvodci, šablony a&nbsp;materiály pro váš úspěch.
              </p>
            </ScrollReveal>
          </div>
        </section>

        {/* ── Resource categories ───────────────────────────────────────── */}
        <section className="py-16 px-6 lg:px-10" aria-labelledby="zdroje-heading">
          <h2 id="zdroje-heading" className="sr-only">
            Kategorie zdrojů
          </h2>
          <div className="max-w-7xl mx-auto flex flex-col gap-14">
            {categories.map((cat, catIndex) => (
              <div key={cat.heading}>
                <ScrollReveal delay={catIndex * 40}>
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-9 h-9 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center text-accent flex-shrink-0">
                      {cat.icon}
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-text tracking-[-0.025em]">
                        {cat.heading}
                      </h3>
                      <p className="text-xs text-text-secondary tracking-[-0.01em]">
                        {cat.description}
                      </p>
                    </div>
                  </div>
                </ScrollReveal>

                <div className="flex flex-col gap-3">
                  {cat.items.map((item, itemIndex) => (
                    <ResourceCard
                      key={item.title}
                      item={item}
                      delay={catIndex * 40 + itemIndex * 60}
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── Bottom CTA ────────────────────────────────────────────────── */}
        <section className="py-24 px-6 lg:px-10 text-center border-t border-border/30" aria-labelledby="zdroje-cta">
          <ScrollReveal>
            <div className="max-w-xl mx-auto">
              <h2
                id="zdroje-cta"
                className="text-3xl sm:text-4xl font-semibold text-text tracking-[-0.03em] mb-5"
              >
                Připraveni začít?
              </h2>
              <p className="text-text-secondary tracking-[-0.01em] mb-8">
                Vyzkoušejte webihned.cz a&nbsp;vytvořte svou první aplikaci dnes.
              </p>
              <Link
                href="/pricing"
                className="inline-flex items-center gap-2 bg-accent text-white text-sm font-medium px-8 py-3.5 rounded-full tracking-[-0.01em] hover:opacity-90 transition-opacity duration-200"
                style={{ backgroundColor: "var(--color-accent)" }}
              >
                Začít zdarma
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
