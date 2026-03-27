import type { Metadata } from "next";
import GalerieClient from "./GalerieClient";

export const metadata: Metadata = {
  title: "Galerie aplikací | webihned.cz",
  description: "Podívejte se co lidé tvoří s webihned.cz. Inspirujte se hotovými projekty.",
  alternates: { canonical: "/galerie" },
  openGraph: {
    title: "Galerie aplikací | webihned.cz",
    description: "Podívejte se co lidé tvoří s webihned.cz. Inspirujte se hotovými projekty.",
    url: "https://webihned.cz/galerie",
    siteName: "webihned.cz",
    type: "website",
    locale: "cs_CZ",
  },
};

export default function GaleriePage() {
  return <GalerieClient />;
}
