import type { Metadata } from "next";
import KalkulackaClient from "./KalkulackaClient";

export const metadata: Metadata = {
  title: "ROI kalkulačka | webihned.cz",
  description: "Porovnejte náklady tradičního vývoje s webihned.cz. Interaktivní kalkulačka úspor.",
  alternates: { canonical: "/kalkulacka" },
  openGraph: {
    title: "ROI kalkulačka | webihned.cz",
    description: "Porovnejte náklady tradičního vývoje s webihned.cz. Interaktivní kalkulačka úspor.",
    url: "https://webihned.cz/kalkulacka",
    siteName: "webihned.cz",
    type: "website",
    locale: "cs_CZ",
  },
};

export default function KalkulackaPage() {
  return <KalkulackaClient />;
}
