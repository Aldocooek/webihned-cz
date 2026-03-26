import type { Metadata } from "next";
import { Space_Grotesk, Instrument_Serif } from "next/font/google";
import SmoothScroll from "@/components/SmoothScroll";
import ThemeProvider from "@/components/ThemeProvider";
import StickyCTA from "@/components/StickyCTA";
import CookieConsent from "@/components/CookieConsent";
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
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: "Webovou aplikaci za minuty s AI | webihned.cz",
  description:
    "Popište svůj nápad a získejte funkční aplikaci během minut. webihned.cz postaví backend, hosting i autentizaci automaticky. Začněte zdarma — žádné programování.",
  metadataBase: new URL("https://webihned.cz"),
  alternates: {
    canonical: "/",
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
        url: "/og-image.png",
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
    images: ["/og-image.png"],
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
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var d=document.documentElement;var c=localStorage.getItem('theme');if(c==='dark'||(c!=='light'&&window.matchMedia('(prefers-color-scheme:dark)').matches)){d.classList.add('dark')}else{d.classList.remove('dark')}}catch(e){}})()`,
          }}
        />
      </head>
      <body className="antialiased">
        <ThemeProvider />
        <SmoothScroll />
        {children}
        <StickyCTA />
        <CookieConsent />
      </body>
    </html>
  );
}
