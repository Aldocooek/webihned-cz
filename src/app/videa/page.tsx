import type { Metadata } from "next";
import VidClient from "./VidClient";

export const metadata: Metadata = {
  title: "Video tutoriály | webihned.cz",
  description: "Naučte se vizuálně. Video návody pro začátečníky i pokročilé.",
  alternates: { canonical: "/videa" },
  openGraph: {
    title: "Video tutoriály | webihned.cz",
    description: "Naučte se vizuálně. Video návody pro začátečníky i pokročilé.",
    url: "https://webihned.cz/videa",
    siteName: "webihned.cz",
    type: "website",
    locale: "cs_CZ",
  },
};

export default function VidPage() {
  return <VidClient />;
}
