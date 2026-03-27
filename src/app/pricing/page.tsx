import type { Metadata } from "next";
import PricingClient from "./PricingClient";

function safeJsonLd(data: unknown): string {
  return JSON.stringify(data).replace(/</g, "\\u003c");
}

const pricingJsonLd = {
  "@context": "https://schema.org",
  "@type": "Product",
  name: "webihned.cz",
  description: "AI platforma pro tvorbu webových aplikací",
  offers: [
    { "@type": "Offer", name: "Zdarma", price: "0", priceCurrency: "CZK", description: "Všechny základní funkce" },
    { "@type": "Offer", name: "Starter", price: "490", priceCurrency: "CZK", description: "Neomezené aplikace, vlastní doména" },
    { "@type": "Offer", name: "Pro", price: "990", priceCurrency: "CZK", description: "GitHub sync, prioritní podpora" },
    { "@type": "Offer", name: "Business", price: "1990", priceCurrency: "CZK", description: "Týmový workspace, RBAC" },
  ],
};

export const metadata: Metadata = {
  title: "Ceník — plány pro každou potřebu | webihned.cz",
  description: "Začněte zdarma. Upgradujte podle potřeb vašeho týmu. 5 cenových plánů od 0 Kč.",
  alternates: { canonical: "/pricing" },
  openGraph: {
    title: "Ceník | webihned.cz",
    description: "Začněte zdarma. 5 cenových plánů od 0 Kč.",
    url: "https://webihned.cz/pricing",
    siteName: "webihned.cz",
    type: "website",
    locale: "cs_CZ",
  },
};

export default function PricingPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: safeJsonLd(pricingJsonLd) }}
      />
      <PricingClient />
    </>
  );
}
