import type { Metadata } from "next";
import { Space_Grotesk, Instrument_Serif } from "next/font/google";
import ThemeProvider from "@/components/ThemeProvider";
import SkipLink from "@/components/SkipLink";
import StickyCTA from "@/components/StickyCTA";
import CookieConsent from "@/components/CookieConsent";
import BackToTop from "@/components/BackToTop";
import ScrollRing from "@/components/ScrollRing";
import Analytics from "@/components/Analytics";
import Clarity from "@/components/Clarity";
import ScrollProgress from "@/components/ScrollProgress";
import NavigationProgress from "@/components/NavigationProgress";
import { MotionProvider } from "@/lib/framer";
import Preloader from "@/components/Preloader";
import ClientOnlyWidgets from "@/components/ClientOnlyWidgets";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin", "latin-ext"],
  variable: "--font-space",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
  weight: "400",
  style: ["italic"],
});

export const metadata: Metadata = {
  title: "Webovou aplikaci za minuty s AI | webihned.cz",
  description:
    "Popište svůj nápad a získejte funkční aplikaci během minut. webihned.cz postaví backend, hosting i autentizaci automaticky. Začněte zdarma — žádné programování.",
  metadataBase: new URL("https://webihned.cz"),
  alternates: {
    canonical: "/",
    languages: {
      cs: "/",
    },
  },
  openGraph: {
    title: "Webovou aplikaci za minuty s AI | webihned.cz",
    description:
      "Popište svůj nápad a získejte funkční aplikaci během minut. Backend, hosting i auth automaticky. Začněte zdarma.",
    url: "https://webihned.cz",
    siteName: "webihned.cz",
    type: "website",
    locale: "cs_CZ",
    images: [
      {
        url: "/og-image.svg",
        width: 1200,
        height: 630,
        alt: "webihned.cz — Aplikaci za minuty s AI",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Webovou aplikaci za minuty s AI | webihned.cz",
    description:
      "Popište svůj nápad a získejte funkční aplikaci během minut. Začněte zdarma.",
    images: ["/og-image.svg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="cs"
      className={`${spaceGrotesk.variable} ${instrumentSerif.variable}`}
      suppressHydrationWarning
    >
      <body className="antialiased overflow-x-hidden" suppressHydrationWarning>
        <MotionProvider>
          <Preloader />
          <ClientOnlyWidgets />
          <ScrollProgress />
          <NavigationProgress />
          <SkipLink />
          <ThemeProvider />
          {children}
          <ScrollRing />
          <BackToTop />
          <StickyCTA />
          <CookieConsent />
          <Analytics />
          <Clarity />
        </MotionProvider>
      </body>
    </html>
  );
}
