import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import { templates } from "@/data/templates";

// ── Static params ──────────────────────────────────────────────────────────────

export function generateStaticParams() {
  return templates.map((t) => ({ slug: t.slug }));
}

// ── Metadata ───────────────────────────────────────────────────────────────────

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const template = templates.find((t) => t.slug === slug);
  if (!template) return {};

  return {
    title: `${template.name} — šablona | webihned.cz`,
    description: template.longDescription,
    alternates: { canonical: `/sablony/${template.slug}` },
    openGraph: {
      title: `${template.name} — šablona | webihned.cz`,
      description: template.longDescription,
      url: `https://webihned.cz/sablony/${template.slug}`,
      siteName: "webihned.cz",
      type: "website",
      locale: "cs_CZ",
    },
  };
}

// ── Category color map ─────────────────────────────────────────────────────────

const categoryColors: Record<string, string> = {
  SaaS: "bg-accent/10 text-accent border-accent/20",
  "E-commerce": "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/20",
  "Interní nástroje": "bg-violet-500/10 text-violet-600 dark:text-violet-400 border-violet-500/20",
  Portfolio: "bg-amber-500/10 text-amber-600 dark:text-amber-400 border-amber-500/20",
  Blog: "bg-sky-500/10 text-sky-600 dark:text-sky-400 border-sky-500/20",
};

// ── Page ───────────────────────────────────────────────────────────────────────

export default async function TemplatePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const template = templates.find((t) => t.slug === slug);

  if (!template) notFound();

  const related = templates.filter((t) => t.slug !== slug).slice(0, 3);

  return (
    <>
      <Navbar />
      <main id="main-content">

        {/* ── Hero ──────────────────────────────────────────────────────── */}
        <section className="hero-gradient pt-24 pb-16 px-6 lg:px-10">
          <div className="max-w-5xl mx-auto">
            <ScrollReveal>
              <Link
                href="/sablony"
                className="inline-flex items-center gap-1.5 text-sm text-text-secondary hover:text-text transition-colors duration-200 tracking-[-0.01em] mb-8"
                aria-label="Zpět na šablony"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="m15 18-6-6 6-6" />
                </svg>
                Všechny šablony
              </Link>
            </ScrollReveal>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <ScrollReveal delay={40}>
                  <span
                    className={`inline-flex items-center text-xs font-medium px-3 py-1 rounded-full border mb-6 ${
                      categoryColors[template.category] ?? "bg-border/20 text-text-secondary border-border/40"
                    }`}
                  >
                    {template.category}
                  </span>
                </ScrollReveal>

                <ScrollReveal delay={80}>
                  <h1 className="text-4xl sm:text-5xl font-semibold text-text tracking-[-0.035em] leading-[1.05] mb-6">
                    {template.name}
                  </h1>
                </ScrollReveal>

                <ScrollReveal delay={120}>
                  <p className="text-lg text-text-secondary leading-relaxed tracking-[-0.01em] mb-8">
                    {template.longDescription}
                  </p>
                </ScrollReveal>

                <ScrollReveal delay={160}>
                  <div className="flex flex-wrap gap-3">
                    <Link
                      href="/pricing"
                      className="inline-flex items-center gap-2 text-sm font-medium px-6 py-3 rounded-full text-white tracking-[-0.01em] hover:opacity-90 transition-opacity duration-200"
                      style={{ backgroundColor: "var(--color-accent)" }}
                    >
                      Použít tuto šablonu
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <path d="M5 12h14" />
                        <path d="m12 5 7 7-7 7" />
                      </svg>
                    </Link>
                  </div>
                </ScrollReveal>
              </div>

              {/* Preview placeholder */}
              <ScrollReveal delay={100}>
                <style>{`
                  .template-hero-preview {
                    background: ${template.gradientLight};
                  }
                  .dark .template-hero-preview {
                    background: ${template.gradientDark};
                  }
                `}</style>
                <div
                  className="template-hero-preview rounded-3xl aspect-[4/3] flex items-center justify-center border border-border/20"
                  aria-label={`Náhled šablony ${template.name}`}
                  role="img"
                >
                  <div className="text-center">
                    <div className="w-16 h-16 rounded-2xl bg-surface/80 dark:bg-surface/90 backdrop-blur-sm shadow-sm flex items-center justify-center border border-white/10 dark:border-white/5 mx-auto mb-4">
                      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-text-secondary" aria-hidden="true">
                        <rect x="3" y="3" width="18" height="18" rx="3" />
                        <path d="M3 9h18M9 21V9" />
                      </svg>
                    </div>
                    <p className="text-sm text-text-secondary tracking-[-0.01em]">Náhled šablony</p>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* ── Features grid ─────────────────────────────────────────────── */}
        <section className="py-20 px-6 lg:px-10 border-t border-border/30" aria-labelledby="features-heading">
          <div className="max-w-5xl mx-auto">
            <ScrollReveal>
              <h2
                id="features-heading"
                className="text-2xl sm:text-3xl font-semibold text-text tracking-[-0.03em] mb-10"
              >
                Co šablona obsahuje
              </h2>
            </ScrollReveal>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {template.features.map((feature, i) => (
                <ScrollReveal key={feature} delay={i * 60}>
                  <div className="bg-surface rounded-2xl border border-border/40 p-5 flex items-start gap-4">
                    <div
                      className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                      style={{ backgroundColor: "rgba(var(--accent-rgb, 225 29 72) / 0.1)" }}
                      aria-hidden="true"
                    >
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ color: "var(--color-accent)" }} aria-hidden="true">
                        <path d="M20 6 9 17l-5-5" />
                      </svg>
                    </div>
                    <p className="text-sm font-medium text-text tracking-[-0.01em] leading-relaxed">
                      {feature}
                    </p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* ── Tech stack ────────────────────────────────────────────────── */}
        <section className="py-12 px-6 lg:px-10 border-t border-border/30" aria-labelledby="tech-heading">
          <div className="max-w-5xl mx-auto">
            <ScrollReveal>
              <h2
                id="tech-heading"
                className="text-xl font-semibold text-text tracking-[-0.025em] mb-6"
              >
                Technologie
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={60}>
              <div className="flex flex-wrap gap-3">
                {template.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="inline-flex items-center text-sm font-medium px-4 py-2 rounded-full bg-surface border border-border/60 text-text-secondary tracking-[-0.01em]"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* ── CTA ───────────────────────────────────────────────────────── */}
        <section className="py-20 px-6 lg:px-10 border-t border-border/30" aria-labelledby="template-cta">
          <div className="max-w-5xl mx-auto">
            <ScrollReveal>
              <div className="bg-surface rounded-3xl border border-border/40 p-10 sm:p-14 text-center">
                <h2
                  id="template-cta"
                  className="text-2xl sm:text-3xl font-semibold text-text tracking-[-0.03em] mb-4"
                >
                  Připraveni začít s <em style={{ fontFamily: "var(--font-serif)", fontStyle: "italic" }}>{template.name}</em>?
                </h2>
                <p className="text-text-secondary tracking-[-0.01em] mb-8 max-w-md mx-auto">
                  Spusťte aplikaci za hodiny, ne za měsíce. Bez kódu, bez komplikací.
                </p>
                <Link
                  href="/pricing"
                  className="inline-flex items-center gap-2 text-sm font-medium px-8 py-3.5 rounded-full text-white tracking-[-0.01em] hover:opacity-90 transition-opacity duration-200"
                  style={{ backgroundColor: "var(--color-accent)" }}
                >
                  Použít tuto šablonu
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M5 12h14" />
                    <path d="m12 5 7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* ── Related templates ─────────────────────────────────────────── */}
        <section className="py-20 px-6 lg:px-10 border-t border-border/30" aria-labelledby="related-heading">
          <div className="max-w-5xl mx-auto">
            <ScrollReveal>
              <h2
                id="related-heading"
                className="text-2xl font-semibold text-text tracking-[-0.03em] mb-8"
              >
                Další šablony
              </h2>
            </ScrollReveal>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
              {related.map((rel, i) => (
                <ScrollReveal key={rel.slug} delay={i * 80}>
                  <style>{`
                    .related-gradient-${rel.slug.replace(/[^a-z0-9]/g, "")} {
                      background: ${rel.gradientLight};
                    }
                    .dark .related-gradient-${rel.slug.replace(/[^a-z0-9]/g, "")} {
                      background: ${rel.gradientDark};
                    }
                  `}</style>
                  <Link
                    href={`/sablony/${rel.slug}`}
                    className="card-hover bg-surface rounded-2xl border border-border/40 overflow-hidden flex flex-col group"
                    aria-label={`Šablona ${rel.name}`}
                  >
                    <div
                      className={`h-28 w-full flex items-center justify-center related-gradient-${rel.slug.replace(/[^a-z0-9]/g, "")}`}
                      aria-hidden="true"
                    >
                      <div className="w-8 h-8 rounded-xl bg-surface/80 backdrop-blur-sm shadow-sm flex items-center justify-center border border-white/10">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-text-secondary" aria-hidden="true">
                          <rect x="3" y="3" width="18" height="18" rx="3" />
                          <path d="M3 9h18M9 21V9" />
                        </svg>
                      </div>
                    </div>
                    <div className="p-5">
                      <div className="flex items-center justify-between gap-2 mb-2">
                        <h3 className="text-sm font-semibold text-text tracking-[-0.02em]">
                          {rel.name}
                        </h3>
                        <span
                          className={`flex-shrink-0 inline-flex items-center text-[10px] font-medium px-2 py-0.5 rounded-full border ${
                            categoryColors[rel.category] ?? "bg-border/20 text-text-secondary border-border/40"
                          }`}
                        >
                          {rel.category}
                        </span>
                      </div>
                      <p className="text-xs text-text-secondary leading-relaxed tracking-[-0.01em]">
                        {rel.description}
                      </p>
                    </div>
                  </Link>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
