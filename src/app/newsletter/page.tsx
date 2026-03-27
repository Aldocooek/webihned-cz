import type { Metadata } from "next";
import NewsletterClient from "./NewsletterClient";

export const metadata: Metadata = {
  title: "Newsletter | webihned.cz",
  description: "Novinky, tipy a aktualizace přímo do vašeho inboxu. Přihlaste se k odběru.",
  alternates: { canonical: "/newsletter" },
  openGraph: {
    title: "Newsletter | webihned.cz",
    description: "Novinky, tipy a aktualizace přímo do vašeho inboxu. Přihlaste se k odběru.",
    url: "https://webihned.cz/newsletter",
    siteName: "webihned.cz",
    type: "website",
    locale: "cs_CZ",
  },
};

export default function NewsletterPage() {
  return <NewsletterClient />;
}
