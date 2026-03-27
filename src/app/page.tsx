import Navbar from "@/components/Navbar";
import ScrollBackground from "@/components/ScrollBackground";
import SuperagentBanner from "@/components/SuperagentBanner";
import Hero from "@/components/Hero";
import SocialProof from "@/components/SocialProof";
import HowItWorks from "@/components/HowItWorks";
import FeaturesCarousel from "@/components/FeaturesCarousel";
import Stats from "@/components/Stats";
import AppShowcase from "@/components/AppShowcase";
import UseCases from "@/components/UseCases";
import Testimonials from "@/components/Testimonials";
import Comparison from "@/components/Comparison";
import Pricing from "@/components/Pricing";
import FAQ from "@/components/FAQ";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

function safeJsonLd(data: unknown): string {
  return JSON.stringify(data).replace(/</g, "\\u003c");
}

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: "webihned.cz",
  url: "https://webihned.cz",
  description:
    "AI platforma pro tvorbu webových aplikací. Popište svůj nápad a získejte funkční aplikaci během minut.",
  applicationCategory: "DeveloperApplication",
  operatingSystem: "Web",
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "CZK",
    description: "Zdarma se všemi základními funkcemi",
  },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Co je webihned.cz?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "webihned.cz je AI platforma, která vám umožní proměnit jakýkoli nápad v plně funkční aplikaci — bez jediného řádku kódu.",
      },
    },
    {
      "@type": "Question",
      name: "Potřebuji umět programovat?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Ne. Platforma je navržena pro netechnické uživatele. Stačí popsat své potřeby běžným jazykem a naše AI se postará o technickou realizaci.",
      },
    },
    {
      "@type": "Question",
      name: "Jaké typy aplikací mohu vytvořit?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "webihned.cz je všestranný. Můžete tvořit produktivní aplikace, back-office nástroje, zákaznické portály, automatizaci procesů, nebo rychlé prototypy a MVP.",
      },
    },
    {
      "@type": "Question",
      name: "Jak probíhá nasazení aplikací?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "O vše se postaráme automaticky. webihned.cz zahrnuje vestavěný hosting, takže žádný deployment není potřeba.",
      },
    },
    {
      "@type": "Question",
      name: "Vlastním aplikace, které vytvořím?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Rozhodně. Všechny aplikace a obsah vytvořený prostřednictvím webihned.cz patří zcela vám.",
      },
    },
  ],
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: safeJsonLd(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: safeJsonLd(faqJsonLd) }}
      />
      <Navbar />
      <ScrollBackground>
        <SuperagentBanner />
        <Hero />
        <SocialProof />
        <HowItWorks />
        <div className="wave-divider" aria-hidden="true">
          <svg viewBox="0 0 1200 40" preserveAspectRatio="none" fill="var(--color-border)" opacity="0.3">
            <path d="M0 20 Q150 0 300 20 T600 20 T900 20 T1200 20 T1500 20 T1800 20 T2100 20 T2400 20 V40 H0 Z" />
          </svg>
        </div>
        <FeaturesCarousel />
        <Stats />
        <div className="section-divider" aria-hidden="true" />
        <AppShowcase />
        <UseCases />
        <Testimonials />
        <Comparison />
        <Pricing />
        <div className="py-10 text-center" aria-label="Statistiky platformy">
          <p className="text-sm text-text-secondary tracking-wide">
            Více než 10 000 aplikací vytvořeno na webihned.cz
          </p>
        </div>
        <FAQ />
        <FinalCTA />
      </ScrollBackground>
      <Footer />
    </>
  );
}
