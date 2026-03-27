import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import {
  blogPosts,
  getBlogPostBySlug,
  getRelatedPosts,
} from "@/data/blog-posts";

// ── Helpers ────────────────────────────────────────────────────────────────────

function safeJsonLd(data: unknown): string {
  return JSON.stringify(data).replace(/</g, "\\u003c");
}

// ── Static generation ──────────────────────────────────────────────────────────

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

// ── Metadata ───────────────────────────────────────────────────────────────────

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  if (!post) {
    return {
      title: "Článek nenalezen | webihned.cz",
    };
  }

  return {
    title: `${post.title} | webihned.cz`,
    description: post.excerpt,
    alternates: {
      canonical: `/blog/${post.slug}`,
    },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      url: `https://webihned.cz/blog/${post.slug}`,
      siteName: "webihned.cz",
      type: "article",
      locale: "cs_CZ",
      publishedTime: post.dateISO,
    },
  };
}

// ── Page ───────────────────────────────────────────────────────────────────────

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const related = getRelatedPosts(slug);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    datePublished: post.dateISO,
    dateModified: post.dateISO,
    author: {
      "@type": "Organization",
      name: "webihned.cz",
      url: "https://webihned.cz",
    },
    publisher: {
      "@type": "Organization",
      name: "webihned.cz",
      url: "https://webihned.cz",
    },
    url: `https://webihned.cz/blog/${post.slug}`,
    inLanguage: "cs",
    articleBody: post.content.join(" "),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: safeJsonLd(jsonLd) }}
      />
      <Navbar />
      <main id="main-content">

        {/* ── Article header ────────────────────────────────────────────── */}
        <section className="hero-gradient pt-24 pb-16 px-6 lg:px-10">
          <div className="max-w-3xl mx-auto">

            {/* Back link */}
            <ScrollReveal>
              <Link
                href="/blog"
                className="inline-flex items-center gap-2 text-sm text-text-secondary hover:text-text transition-colors duration-200 tracking-[-0.01em] mb-8"
              >
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
                  <path d="M19 12H5" />
                  <path d="m12 19-7-7 7-7" />
                </svg>
                Zpět na blog
              </Link>
            </ScrollReveal>

            {/* Meta row */}
            <ScrollReveal delay={40}>
              <div className="flex items-center gap-3 flex-wrap mb-6">
                <span
                  className={`inline-flex items-center text-xs font-medium px-2.5 py-1 rounded-full ${post.categoryColor}`}
                >
                  {post.category}
                </span>
                <time
                  dateTime={post.dateISO}
                  className="text-xs text-text-secondary tracking-[-0.01em]"
                >
                  {post.date}
                </time>
                <span
                  className="text-xs text-text-secondary tracking-[-0.01em]"
                  aria-label={`Doba čtení: ${post.readTime}`}
                >
                  · {post.readTime} čtení
                </span>
              </div>
            </ScrollReveal>

            {/* Title */}
            <ScrollReveal delay={80}>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-text tracking-[-0.035em] leading-[1.08]">
                {post.title}
              </h1>
            </ScrollReveal>

            {/* Excerpt */}
            <ScrollReveal delay={120}>
              <p className="mt-5 text-lg text-text-secondary leading-relaxed tracking-[-0.01em]">
                {post.excerpt}
              </p>
            </ScrollReveal>

          </div>
        </section>

        {/* ── Divider ───────────────────────────────────────────────────── */}
        <div className="max-w-3xl mx-auto px-6 lg:px-10">
          <hr className="border-border/40" />
        </div>

        {/* ── Article body ──────────────────────────────────────────────── */}
        <article
          className="py-14 px-6 lg:px-10"
          aria-label={post.title}
        >
          <div className="max-w-3xl mx-auto flex flex-col gap-6">
            {post.content.map((paragraph, index) => (
              <ScrollReveal key={index} delay={index * 60}>
                <p className="text-base sm:text-lg text-text-secondary leading-relaxed tracking-[-0.01em]">
                  {paragraph}
                </p>
              </ScrollReveal>
            ))}
          </div>
        </article>

        {/* ── Related posts ─────────────────────────────────────────────── */}
        {related.length > 0 && (
          <section
            className="py-16 px-6 lg:px-10 border-t border-border/40"
            aria-labelledby="related-heading"
          >
            <div className="max-w-7xl mx-auto">
              <ScrollReveal>
                <h2
                  id="related-heading"
                  className="text-2xl sm:text-3xl font-semibold text-text tracking-[-0.03em] mb-10"
                >
                  Další{" "}
                  <em
                    style={{
                      fontFamily: "var(--font-serif)",
                      fontStyle: "italic",
                    }}
                  >
                    články
                  </em>
                </h2>
              </ScrollReveal>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {related.map((relPost, i) => (
                  <ScrollReveal key={relPost.slug} delay={i * 60}>
                    <article className="bg-surface rounded-2xl border border-border/40 p-6 card-hover flex flex-col gap-4 h-full">
                      <div className="flex items-center gap-3 flex-wrap">
                        <span
                          className={`inline-flex items-center text-xs font-medium px-2.5 py-1 rounded-full ${relPost.categoryColor}`}
                        >
                          {relPost.category}
                        </span>
                        <time
                          dateTime={relPost.dateISO}
                          className="text-xs text-text-secondary tracking-[-0.01em]"
                        >
                          {relPost.date}
                        </time>
                      </div>
                      <div className="flex flex-col gap-2 flex-1">
                        <h3 className="text-base font-semibold text-text tracking-[-0.02em] leading-snug">
                          {relPost.title}
                        </h3>
                        <p className="text-sm text-text-secondary leading-relaxed tracking-[-0.01em]">
                          {relPost.excerpt}
                        </p>
                      </div>
                      <Link
                        href={`/blog/${relPost.slug}`}
                        className="inline-flex items-center gap-1.5 text-sm font-medium text-accent hover:text-accent/80 transition-colors duration-200 tracking-[-0.01em] mt-auto self-start"
                        aria-label={`Číst více: ${relPost.title}`}
                      >
                        Číst více →
                      </Link>
                    </article>
                  </ScrollReveal>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* ── Newsletter CTA ────────────────────────────────────────────── */}
        <section
          className="py-24 px-6 lg:px-10 text-center"
          aria-labelledby="post-cta"
        >
          <ScrollReveal>
            <div className="max-w-xl mx-auto">
              <h2
                id="post-cta"
                className="text-3xl sm:text-4xl font-semibold text-text tracking-[-0.03em] mb-5"
              >
                Nenechte si ujít novinky
              </h2>
              <p className="text-text-secondary tracking-[-0.01em] mb-8">
                Každý týden nové tipy, návody a aktualizace platformy přímo do emailu.
              </p>
              <Link
                href="/newsletter"
                className="btn-primary inline-flex items-center gap-2 bg-accent text-white text-sm font-medium px-8 py-3.5 rounded-full tracking-[-0.01em] hover:bg-accent-hover transition-colors duration-200"
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
              </Link>
            </div>
          </ScrollReveal>
        </section>

      </main>
      <Footer />
    </>
  );
}
