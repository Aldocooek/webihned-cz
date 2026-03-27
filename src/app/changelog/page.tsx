import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";

export const metadata: Metadata = {
  title: "Changelog | webihned.cz",
  description:
    "Sledujte vývoj platformy webihned.cz — nové funkce, vylepšení a opravy. Přehled všech změn na jednom místě.",
  alternates: {
    canonical: "/changelog",
  },
  openGraph: {
    title: "Changelog | webihned.cz",
    description:
      "Sledujte vývoj platformy webihned.cz — nové funkce, vylepšení a opravy.",
    url: "https://webihned.cz/changelog",
    siteName: "webihned.cz",
    type: "website",
    locale: "cs_CZ",
  },
};

// ── Data ───────────────────────────────────────────────────────────────────────

type TagType = "Nová funkce" | "Vylepšení" | "Oprava";

const changelogEntries: {
  date: string;
  tag: TagType;
  title: string;
  description: string;
}[] = [
  {
    date: "25. března 2026",
    tag: "Nová funkce",
    title: "Tmavý režim",
    description:
      "Přidali jsme plnou podporu tmavého režimu napříč celou platformou. Přepínejte jedním kliknutím v navigaci.",
  },
  {
    date: "18. března 2026",
    tag: "Vylepšení",
    title: "Rychlejší generování aplikací",
    description:
      "Optimalizovali jsme AI pipeline pro 2× rychlejší tvorbu aplikací. Průměrný čas buildu klesl pod 60 sekund.",
  },
  {
    date: "10. března 2026",
    tag: "Nová funkce",
    title: "GitHub integrace",
    description:
      "Nově můžete synchronizovat své projekty s GitHubem. Automatický push kódu po každé změně.",
  },
];

const tagStyles: Record<TagType, string> = {
  "Nová funkce":
    "bg-accent/10 text-accent border border-accent/20",
  "Vylepšení":
    "bg-blue-500/10 text-blue-600 dark:text-blue-400 border border-blue-500/20",
  "Oprava":
    "bg-amber-500/10 text-amber-600 dark:text-amber-400 border border-amber-500/20",
};

// ── Page ───────────────────────────────────────────────────────────────────────

export default function ChangelogPage() {
  return (
    <>
      <Navbar />
      <main id="main-content">

        {/* ── Hero ─────────────────────────────────────────────────────── */}
        <section className="hero-gradient pt-24 pb-20 px-6 lg:px-10 text-center">
          <div className="max-w-3xl mx-auto">
            <h1 className="animate-hero-title text-4xl sm:text-5xl lg:text-6xl font-semibold text-text tracking-[-0.03em] leading-[1.08] mb-6">
              Co je{" "}
              <em
                style={{ fontFamily: "var(--font-serif)", fontStyle: "italic" }}
              >
                nového
              </em>
            </h1>
            <p className="animate-hero-subtitle text-lg text-text-secondary leading-relaxed tracking-[-0.01em] max-w-xl mx-auto">
              Sledujte vývoj platformy webihned.cz
            </p>
          </div>
        </section>

        {/* ── Timeline ─────────────────────────────────────────────────── */}
        <section
          className="py-16 px-6 lg:px-10"
          aria-labelledby="changelog-heading"
        >
          <h2 id="changelog-heading" className="sr-only">
            Historie změn
          </h2>
          <div className="max-w-3xl mx-auto">
            {/* Timeline container */}
            <div className="relative">
              {/* Vertical line */}
              <div
                className="absolute left-0 sm:left-[120px] top-0 bottom-0 w-px bg-border/50"
                aria-hidden="true"
              />

              <div className="flex flex-col gap-10">
                {changelogEntries.map((entry, i) => (
                  <ScrollReveal key={entry.title} delay={i * 80}>
                    <div className="relative flex flex-col sm:flex-row gap-4 sm:gap-8">
                      {/* Date — left column */}
                      <div className="sm:w-[120px] sm:flex-shrink-0 sm:text-right pt-1 pl-5 sm:pl-0">
                        <span className="text-xs text-text-secondary tracking-[-0.01em] leading-relaxed">
                          {entry.date}
                        </span>
                      </div>

                      {/* Dot on the line */}
                      <div
                        className="absolute left-[-4px] sm:left-[116px] top-[6px] w-2.5 h-2.5 rounded-full bg-accent ring-2 ring-bg flex-shrink-0"
                        aria-hidden="true"
                      />

                      {/* Card — right column */}
                      <div className="flex-1 sm:pl-8 pl-5">
                        <div className="bg-surface rounded-2xl border border-border/40 p-6 card-hover">
                          {/* Tag */}
                          <span
                            className={`inline-flex items-center text-xs font-medium px-2.5 py-1 rounded-full mb-3 ${tagStyles[entry.tag as TagType] ?? tagStyles["Nová funkce"]}`}
                          >
                            {entry.tag}
                          </span>

                          <h3 className="text-base font-semibold text-text tracking-[-0.02em] mb-2">
                            {entry.title}
                          </h3>

                          <p className="text-sm text-text-secondary leading-relaxed tracking-[-0.01em]">
                            {entry.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  </ScrollReveal>
                ))}
              </div>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
