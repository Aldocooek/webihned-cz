import type { Metadata } from "next";
import PorovnaniClient from "./PorovnaniClient";

export const metadata: Metadata = {
  title: "Porovnání s konkurencí | webihned.cz",
  description: "Jak si webihned.cz stojí proti Lovable, Bolt.new a v0.dev. Objektivní srovnání.",
  alternates: { canonical: "/porovnani" },
  openGraph: {
    title: "Porovnání s konkurencí | webihned.cz",
    description: "Jak si webihned.cz stojí proti Lovable, Bolt.new a v0.dev. Objektivní srovnání.",
    url: "https://webihned.cz/porovnani",
    siteName: "webihned.cz",
    type: "website",
    locale: "cs_CZ",
  },
};

export default function PorovnaniPage() {
  return <PorovnaniClient />;
}
