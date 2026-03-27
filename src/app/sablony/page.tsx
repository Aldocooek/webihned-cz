import type { Metadata } from "next";
import SablonyClient from "./SablonyClient";

export const metadata: Metadata = {
  title: "Šablony aplikací | webihned.cz",
  description: "12 připravených šablon. CRM, e-shop, dashboard, booking a další. Začněte z šablony.",
  alternates: { canonical: "/sablony" },
  openGraph: {
    title: "Šablony aplikací | webihned.cz",
    description: "12 připravených šablon. CRM, e-shop, dashboard, booking a další. Začněte z šablony.",
    url: "https://webihned.cz/sablony",
    siteName: "webihned.cz",
    type: "website",
    locale: "cs_CZ",
  },
};

export default function SablonyPage() {
  return <SablonyClient />;
}
