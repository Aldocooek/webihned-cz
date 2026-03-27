import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";

export const metadata: Metadata = {
  title: "Smlouva o zpracování dat (DPA) | webihned.cz",
  description:
    "Smlouva o zpracování osobních údajů v souladu s článkem 28 GDPR pro zákazníky platformy webihned.cz.",
  alternates: {
    canonical: "/dpa",
  },
  openGraph: {
    title: "Smlouva o zpracování dat (DPA) | webihned.cz",
    description:
      "Smlouva o zpracování osobních údajů v souladu s článkem 28 GDPR pro zákazníky platformy webihned.cz.",
    url: "https://webihned.cz/dpa",
    siteName: "webihned.cz",
    type: "website",
    locale: "cs_CZ",
  },
};

const sections = [
  {
    heading: "Předmět a doba zpracování",
    body: "Tato smlouva o zpracování osobních údajů (DPA) upravuje podmínky, za nichž webihned.cz s.r.o. (zpracovatel) zpracovává osobní údaje jménem zákazníků platformy (správců) v souladu s článkem 28 nařízení GDPR (EU) 2016/679. Zpracování probíhá po celou dobu platnosti předplatného a skončí nejpozději do 30 dnů od ukončení smluvního vztahu, kdy budou veškerá data bezpečně smazána nebo vrácena správci.",
  },
  {
    heading: "Povaha a účel zpracování",
    body: "Zpracování slouží výhradně k provozování platformy webihned.cz — konkrétně ke generování webových aplikací pomocí AI, ukládání projektů a souborů uživatelů, správě uživatelských účtů, fakturaci a poskytování zákaznické podpory. Zpracovatel nezpracovává osobní údaje pro vlastní účely ani je nepředává třetím stranám nad rámec stanovený touto smlouvou.",
  },
  {
    heading: "Typ osobních údajů",
    body: "V rámci poskytování služeb jsou zpracovávány zejména tyto kategorie osobních údajů: identifikační údaje (jméno, e-mailová adresa), fakturační údaje (adresa, IČO, DIČ), technické provozní záznamy (IP adresy, identifikátory relací, logy aktivity), obsah nahraný uživatelem v rámci jeho projektů a komunikace se zákaznickou podporou. Citlivé osobní údaje ve smyslu čl. 9 GDPR nejsou záměrně shromažďovány.",
  },
  {
    heading: "Kategorie subjektů údajů",
    body: "Subjekty údajů jsou registrovaní uživatelé platformy webihned.cz — podnikatelé, zaměstnanci firem a fyzické osoby, kteří uzavřeli s provozovatelem smluvní vztah. Dále mohou být dotčeny osoby, jejichž údaje správce (zákazník platformy) zpracovává prostřednictvím svých aplikací vytvořených na platformě — v takovém případě nese plnou odpovědnost správce.",
  },
  {
    heading: "Práva a povinnosti správce",
    body: "Správce (zákazník platformy) je povinen zajistit platný právní základ pro zpracování osobních údajů, které do platformy vkládá nebo prostřednictvím ní zpracovává. Správce je oprávněn kdykoli požádat o přístup k uchovávaným datům, jejich opravu, přenos nebo výmaz. Správce je povinen neprodleně informovat zpracovatele o jakýchkoli pokynech týkajících se zpracování údajů a o uplatnění práv subjektů údajů.",
  },
  {
    heading: "Bezpečnostní opatření (čl. 32 GDPR)",
    body: "Zpracovatel implementuje technická a organizační opatření odpovídající povaze rizika: šifrování přenášených i uložených dat (TLS 1.3, AES-256), řízení přístupu na principu nejnižšího oprávnění, pravidelné bezpečnostní audity a penetrační testy, zálohy s geografickým oddělením, monitorování incidentů a plán reakce na narušení bezpečnosti. V případě porušení zabezpečení bude správce informován do 72 hodin v souladu s čl. 33 GDPR.",
  },
  {
    heading: "Podmínky zapojení dalších zpracovatelů",
    body: "Zpracovatel využívá ověřené sub-zpracovatele (Vercel pro hosting, Supabase pro databázi, Stripe pro platby, SendGrid pro e-maily). Se všemi sub-zpracovateli jsou uzavřeny smlouvy o zpracování dat zaručující minimálně stejnou úroveň ochrany, jakou stanoví tato DPA. Správce bude informován o každé změně v seznamu sub-zpracovatelů s předstihem minimálně 14 dnů, během nichž může správce vznést odůvodněné námitky.",
  },
];

export default function DpaPage() {
  return (
    <>
      <Navbar />
      <main id="main-content">

        {/* ── Hero ──────────────────────────────────────────────────────── */}
        <section className="hero-gradient pt-24 pb-16 px-6 lg:px-10 text-center">
          <div className="max-w-3xl mx-auto">
            <h1 className="animate-hero-title text-4xl sm:text-5xl lg:text-6xl font-semibold text-text tracking-[-0.03em] leading-[1.08] mb-4">
              Smlouva o zpracování dat{" "}
              <em
                style={{ fontFamily: "var(--font-serif)", fontStyle: "italic" }}
              >
                (DPA)
              </em>
            </h1>
            <p className="animate-hero-subtitle text-base text-text-secondary tracking-[-0.01em]">
              Zpracování osobních údajů dle čl. 28 GDPR — přehled klíčových podmínek
            </p>
          </div>
        </section>

        {/* ── Content ───────────────────────────────────────────────────── */}
        <section className="py-16 px-6 lg:px-10">
          <div className="max-w-3xl mx-auto flex flex-col gap-10">
            {sections.map((section, i) => (
              <ScrollReveal key={section.heading} delay={i * 50}>
                <div className="border-b border-border/40 pb-10 last:border-b-0 last:pb-0">
                  <h2 className="text-xl sm:text-2xl font-semibold text-text tracking-[-0.03em] mb-4">
                    {section.heading}
                  </h2>
                  <p className="text-text-secondary leading-relaxed tracking-[-0.01em]">
                    {section.body}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </section>

        {/* ── CTA ───────────────────────────────────────────────────────── */}
        <section className="py-16 px-6 lg:px-10">
          <div className="max-w-3xl mx-auto">
            <ScrollReveal>
              <div className="bg-surface rounded-2xl border border-border/40 p-8 sm:p-10 text-center">
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-accent/10 text-accent mb-6">
                  <svg
                    width="28"
                    height="28"
                    viewBox="0 0 28 28"
                    fill="none"
                    aria-hidden="true"
                  >
                    <rect
                      x="5"
                      y="3"
                      width="18"
                      height="22"
                      rx="2.5"
                      stroke="currentColor"
                      strokeWidth="1.8"
                    />
                    <path
                      d="M9 9h10M9 13h10M9 17h6"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                    />
                  </svg>
                </div>

                <h2 className="text-xl font-semibold text-text tracking-[-0.03em] mb-3">
                  Potřebujete kompletní DPA?
                </h2>
                <p className="text-text-secondary leading-relaxed tracking-[-0.01em] mb-8 max-w-lg mx-auto">
                  Tato stránka představuje přehled klíčových ustanovení. Pro získání
                  kompletní, právně závazné Smlouvy o zpracování dat (DPA) kontaktujte
                  náš tým na{" "}
                  <a
                    href="mailto:dpa@webihned.cz"
                    className="text-accent hover:underline underline-offset-4 transition-colors duration-300"
                  >
                    dpa@webihned.cz
                  </a>
                  .
                </p>

                <Link
                  href="/kontakt"
                  className="btn-primary inline-flex items-center gap-2 bg-accent text-white text-sm font-medium px-7 py-3 rounded-full tracking-[-0.01em] hover:opacity-90 transition-opacity duration-300"
                >
                  Kontaktujte nás
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    aria-hidden="true"
                  >
                    <path
                      d="M3 8h10M9 4l4 4-4 4"
                      stroke="currentColor"
                      strokeWidth="1.6"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </Link>
              </div>
            </ScrollReveal>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
