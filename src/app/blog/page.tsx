import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";

function safeJsonLd(data: unknown): string {
  return JSON.stringify(data).replace(/</g, "\\u003c");
}

const blogJsonLd = {
  "@context": "https://schema.org",
  "@type": "Blog",
  name: "Blog webihned.cz",
  description: "Novinky, návody a tipy pro tvorbu aplikací s AI.",
  url: "https://webihned.cz/blog",
};

export const metadata: Metadata = {
  title: "Blog | webihned.cz",
  description:
    "Novinky, návody a tipy pro tvorbu aplikací s AI. Sledujte nejnovější trendy a naučte se tvořit lepší aplikace rychleji.",
  alternates: {
    canonical: "/blog",
  },
  openGraph: {
    title: "Blog | webihned.cz",
    description:
      "Novinky, návody a tipy pro tvorbu aplikací s AI.",
    url: "https://webihned.cz/blog",
    siteName: "webihned.cz",
    type: "website",
    locale: "cs_CZ",
  },
};

// ── Data ───────────────────────────────────────────────────────────────────────

type CategoryType = "Návod" | "Novinka" | "Tipy" | "Případová studie";

const posts: {
  slug: string;
  date: string;
  category: CategoryType;
  title: string;
  excerpt: string;
  featured?: boolean;
}[] = [
  {
    slug: "jak-vytvorit-eshop-za-10-minut",
    date: "25. března 2026",
    category: "Návod",
    title: "Jak vytvořit e-shop za 10 minut s AI",
    excerpt:
      "Podrobný návod jak od nápadu k funkčnímu e-shopu s platbami, košíkem a správou objednávek.",
    featured: true,
  },
  {
    slug: "predstavujeme-tmavy-rezim",
    date: "20. března 2026",
    category: "Novinka",
    title: "Představujeme tmavý režim",
    excerpt:
      "Nový tmavý režim pro pohodlnější práci. Přepněte jedním kliknutím.",
  },
  {
    slug: "5-tipu-pro-lepsi-ai-prompty",
    date: "15. března 2026",
    category: "Tipy",
    title: "5 tipů pro lepší AI prompty",
    excerpt:
      "Jak formulovat požadavky na AI, abyste dostali přesně to, co potřebujete.",
  },
  {
    slug: "jak-techflow-usetril-6-mesicu-vyvoje",
    date: "10. března 2026",
    category: "Případová studie",
    title: "Jak TechFlow ušetřil 6 měsíců vývoje",
    excerpt:
      "Český startup TechFlow přestavěl svůj interní systém za víkend.",
  },
  {
    slug: "rezervacni-system-pro-vasi-firmu",
    date: "5. března 2026",
    category: "Návod",
    title: "Rezervační systém pro vaši firmu",
    excerpt:
      "Krok za krokem: od jednoduchého formuláře po plnohodnotný booking systém.",
  },
  {
    slug: "github-integrace-je-tady",
    date: "1. března 2026",
    category: "Novinka",
    title: "GitHub integrace je tady",
    excerpt:
      "Synchronizujte projekty s GitHubem automaticky. Plný přístup ke kódu.",
  },
];

const categoryStyles: Record<CategoryType, string> = {
  Návod:
    "bg-accent/10 text-accent border border-accent/20",
  Novinka:
    "bg-blue-500/10 text-blue-600 dark:text-blue-400 border border-blue-500/20",
  Tipy: "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20",
  "Případová studie":
    "bg-amber-500/10 text-amber-600 dark:text-amber-400 border border-amber-500/20",
};

// ── Sub-components ─────────────────────────────────────────────────────────────

function CategoryBadge({ category }: { category: CategoryType }) {
  return (
    <span
      className={`inline-flex items-center text-xs font-medium px-2.5 py-1 rounded-full ${categoryStyles[category]}`}
    >
      {category}
    </span>
  );
}

function FeaturedCard({
  post,
}: {
  post: (typeof posts)[0];
}) {
  return (
    <article className="col-span-1 sm:col-span-2 bg-surface rounded-2xl border border-border/40 p-8 sm:p-10 card-hover flex flex-col gap-5">
      <div className="flex items-center gap-3 flex-wrap">
        <CategoryBadge category={post.category} />
        <time
          dateTime={post.date}
          className="text-xs text-text-secondary tracking-[-0.01em]"
        >
          {post.date}
        </time>
      </div>
      <div className="flex flex-col gap-3">
        <h2 className="text-2xl sm:text-3xl font-semibold text-text tracking-[-0.03em] leading-[1.1]">
          {post.title}
        </h2>
        <p className="text-text-secondary leading-relaxed tracking-[-0.01em] text-base max-w-2xl">
          {post.excerpt}
        </p>
      </div>
      <a
        href={`/blog/${post.slug}`}
        className="inline-flex items-center gap-2 text-sm font-medium text-accent hover:text-accent/80 transition-colors duration-200 tracking-[-0.01em] self-start mt-auto"
        aria-label={`Číst více: ${post.title}`}
      >
        Číst více
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
    </article>
  );
}

function PostCard({ post }: { post: (typeof posts)[0] }) {
  return (
    <article className="bg-surface rounded-2xl border border-border/40 p-6 card-hover flex flex-col gap-4 h-full">
      <div className="flex items-center gap-3 flex-wrap">
        <CategoryBadge category={post.category} />
        <time
          dateTime={post.date}
          className="text-xs text-text-secondary tracking-[-0.01em]"
        >
          {post.date}
        </time>
      </div>
      <div className="flex flex-col gap-2 flex-1">
        <h2 className="text-lg font-bold text-text tracking-[-0.02em] leading-snug">
          {post.title}
        </h2>
        <p className="text-sm text-text-secondary leading-relaxed tracking-[-0.01em]">
          {post.excerpt}
        </p>
      </div>
      <a
        href={`/blog/${post.slug}`}
        className="inline-flex items-center gap-1.5 text-sm font-medium text-accent hover:text-accent/80 transition-colors duration-200 tracking-[-0.01em] mt-auto self-start"
        aria-label={`Číst více: ${post.title}`}
      >
        Číst více →
      </a>
    </article>
  );
}

// ── Page ───────────────────────────────────────────────────────────────────────

export default function BlogPage() {
  const featured = posts.find((p) => p.featured);
  const rest = posts.filter((p) => !p.featured);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: safeJsonLd(blogJsonLd) }}
      />
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
                  <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
                  <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
                </svg>
                Blog
              </div>
            </ScrollReveal>

            <ScrollReveal delay={60}>
              <h1 className="text-4xl sm:text-5xl lg:text-[64px] font-semibold text-text tracking-[-0.035em] leading-[1.05] mb-6">
                Blog{" "}
                <em
                  style={{ fontFamily: "var(--font-serif)", fontStyle: "italic" }}
                >
                  &nbsp;webihned.cz
                </em>
              </h1>
            </ScrollReveal>

            <ScrollReveal delay={120}>
              <p className="text-lg text-text-secondary leading-relaxed tracking-[-0.01em] max-w-2xl mx-auto">
                Novinky, návody a tipy pro tvorbu aplikací s&nbsp;AI.
              </p>
            </ScrollReveal>
          </div>
        </section>

        {/* ── Posts grid ───────────────────────────────────────────────── */}
        <section
          className="py-16 px-6 lg:px-10"
          aria-labelledby="blog-heading"
        >
          <h2 id="blog-heading" className="sr-only">
            Všechny příspěvky
          </h2>
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {/* Featured card — spans full width */}
              {featured && (
                <ScrollReveal delay={0}>
                  <FeaturedCard post={featured} />
                </ScrollReveal>
              )}

              {/* Remaining cards */}
              {rest.map((post, i) => (
                <ScrollReveal key={post.title} delay={(i + 1) * 60}>
                  <PostCard post={post} />
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* ── Newsletter CTA ────────────────────────────────────────────── */}
        <section className="py-24 px-6 lg:px-10 text-center" aria-labelledby="blog-cta">
          <ScrollReveal>
            <div className="max-w-xl mx-auto">
              <h2
                id="blog-cta"
                className="text-3xl sm:text-4xl font-semibold text-text tracking-[-0.03em] mb-5"
              >
                Nenechte si ujít novinky
              </h2>
              <p className="text-text-secondary tracking-[-0.01em] mb-8">
                Každý týden nové tipy, návody a aktualizace platformy přímo do emailu.
              </p>
              <a
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
              </a>
            </div>
          </ScrollReveal>
        </section>

      </main>
      <Footer />
    </>
  );
}
