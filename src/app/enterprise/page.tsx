import type { Metadata } from "next";
import EnterpriseClient from "./EnterpriseClient";

export const metadata: Metadata = {
  title: "Enterprise řešení | webihned.cz",
  description: "Škálujte tvorbu aplikací s SSO, SAML, audit logy a dedicovanou podporou.",
  alternates: { canonical: "/enterprise" },
  openGraph: {
    title: "Enterprise řešení | webihned.cz",
    description: "Škálujte tvorbu aplikací s SSO, SAML, audit logy a dedicovanou podporou.",
    url: "https://webihned.cz/enterprise",
    siteName: "webihned.cz",
    type: "website",
    locale: "cs_CZ",
  },
};

export default function EnterprisePage() {
  return <EnterpriseClient />;
}
