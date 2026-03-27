import type { Metadata } from "next";
import KontaktClient from "./KontaktClient";

function safeJsonLd(data: unknown): string {
  return JSON.stringify(data).replace(/</g, "\\u003c");
}

const contactJsonLd = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  name: "Kontakt — webihned.cz",
  description: "Kontaktujte nás s dotazy, požadavky na demo nebo enterprise řešení.",
  url: "https://webihned.cz/kontakt",
};

export const metadata: Metadata = {
  title: "Kontakt – webihned.cz",
  description:
    "Máte otázky, potřebujete demo, nebo chcete enterprise řešení? Ozvěte se nám — odpovíme do 24 hodin.",
  openGraph: {
    title: "Kontakt – webihned.cz",
    description:
      "Máte otázky, potřebujete demo, nebo chcete enterprise řešení? Ozvěte se nám.",
    url: "https://webihned.cz/kontakt",
    siteName: "webihned.cz",
    locale: "cs_CZ",
    type: "website",
  },
};

export default function KontaktPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: safeJsonLd(contactJsonLd) }}
      />
      <KontaktClient />
    </>
  );
}
