import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";

export const metadata: Metadata = {
  title: "Zásady ochrany soukromí | webihned.cz",
  description:
    "Zásady ochrany soukromí a zpracování osobních údajů platformy webihned.cz v souladu s GDPR.",
  alternates: {
    canonical: "/soukromi",
  },
  openGraph: {
    title: "Zásady ochrany soukromí | webihned.cz",
    description:
      "Zásady ochrany soukromí a zpracování osobních údajů platformy webihned.cz v souladu s GDPR.",
    url: "https://webihned.cz/soukromi",
    siteName: "webihned.cz",
    type: "website",
    locale: "cs_CZ",
  },
};

const subprocessors = [
  { name: "Vercel", purpose: "Hosting a CDN" },
  { name: "Supabase", purpose: "Databáze a autentizace" },
  { name: "Stripe", purpose: "Platby" },
  { name: "SendGrid", purpose: "E-mailová komunikace" },
  { name: "Google Analytics", purpose: "Analytika" },
  { name: "Microsoft Clarity", purpose: "Heatmapy" },
];

const sections = [
  {
    heading: "Správce osobních údajů",
    body: "Správcem osobních údajů je webihned.cz s.r.o., IČO: 12345678, se sídlem Václavské náměstí 1, 110 00 Praha 1. Správce je plně odpovědný za zákonné a bezpečné zpracování vašich osobních údajů v souladu s nařízením GDPR (EU) 2016/679. Kontakt: soukromi@webihned.cz.",
  },
  {
    heading: "Jaké údaje shromažďujeme",
    body: "Shromažďujeme následující kategorie osobních údajů: identifikační údaje (jméno, e-mailová adresa), fakturační údaje (adresa, IČO, DIČ pro firemní zákazníky), údaje o používání platformy (přihlašovací záznamy, aktivita v rámci služby, technické informace o zařízení a prohlížeči) a komunikaci s naší podporou.",
  },
  {
    heading: "Účel zpracování",
    body: "Vaše osobní údaje zpracováváme za účelem poskytování a správy služeb platformy, vyřizování fakturace a plateb, komunikace s vámi v zákaznické podpoře, zasílání provozních oznámení a aktualizací a průběžného zlepšování kvality a funkčnosti platformy.",
  },
  {
    heading: "Právní základ",
    body: "Zpracování vašich osobních údajů je opřeno o tyto právní základy: plnění smlouvy uzavřené registrací a používáním platformy, oprávněný zájem provozovatele na zabezpečení a rozvoji služby a váš souhlas v případech, kde je vyžadován (např. marketingová komunikace).",
  },
  {
    heading: "Sdílení údajů",
    body: "Vaše osobní údaje nesdílíme s třetími stranami pro jejich vlastní marketingové nebo obchodní účely. Předáváme je výhradně nezbytným zpracovatelům, kteří nám pomáhají provozovat platformu — zejména poskytovateli hostingových služeb a platební bráně. Všichni zpracovatelé jsou vázáni smlouvami o zpracování údajů a jsou povinni zajistit odpovídající úroveň ochrany.",
  },
  {
    heading: "Doba uchovávání",
    body: "Osobní údaje uchováváme po dobu trvání vašeho uživatelského účtu a ještě 3 roky po jeho zrušení. Fakturační a účetní záznamy jsou uchovávány po dobu 10 let v souladu se zákonem o účetnictví. Záznamy o komunikaci se zákaznickou podporou uchováváme 2 roky. Cookies a analytická data jsou anonymizována po 26 měsících. Po uplynutí příslušných lhůt jsou veškerá data bezpečně vymazána nebo nevratně anonymizována.",
  },
  {
    heading: "Vaše práva",
    body: "V souladu s GDPR máte tato práva: právo na přístup k vašim osobním údajům, právo na opravu nepřesných údajů, právo na výmaz (právo být zapomenut), právo na přenositelnost údajů, právo vznést námitku proti zpracování a právo podat stížnost u Úřadu pro ochranu osobních údajů (ÚOOÚ), Pplk. Sochora 27, 170 00 Praha 7. Pro uplatnění vašich práv nás kontaktujte na soukromi@webihned.cz.",
  },
  {
    heading: "Cookies",
    body: "Používáme nezbytné cookies, které zajišťují správné fungování platformy, a analytické cookies, které nám pomáhají pochopit, jak jsou naše služby využívány. Analytické cookies jsou nasazovány pouze s vaším souhlasem. Podrobnější informace naleznete v naší cookie policy.",
  },
  {
    heading: "Kontakt",
    body: "Pro veškeré dotazy, žádosti nebo stížnosti týkající se ochrany vašich osobních údajů nás prosím kontaktujte na e-mailové adrese soukromi@webihned.cz. Na vaši žádost odpovíme nejpozději do 30 dnů.",
  },
];

export default function SoukromiPage() {
  return (
    <>
      <Navbar />
      <main id="main-content">

        {/* ── Hero ──────────────────────────────────────────────────────── */}
        <section className="hero-gradient pt-24 pb-16 px-6 lg:px-10 text-center">
          <div className="max-w-3xl mx-auto">
            <h1 className="animate-hero-title text-4xl sm:text-5xl lg:text-6xl font-semibold text-text tracking-[-0.03em] leading-[1.08] mb-4">
              Zásady ochrany{" "}
              <em
                style={{ fontFamily: "var(--font-serif)", fontStyle: "italic" }}
              >
                soukromí
              </em>
            </h1>
            <p className="animate-hero-subtitle text-base text-text-secondary tracking-[-0.01em]">
              Jak zpracováváme vaše osobní údaje v souladu s GDPR
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

            {/* Zpracovatelé (subprocessors) */}
            <ScrollReveal delay={sections.length * 50}>
              <div className="border-b border-border/40 pb-10">
                <h2 className="text-xl sm:text-2xl font-semibold text-text tracking-[-0.03em] mb-4">
                  Zpracovatelé
                </h2>
                <p className="text-text-secondary leading-relaxed tracking-[-0.01em] mb-5">
                  Pro provoz platformy využíváme následující ověřené zpracovatele osobních údajů. Všichni jsou vázáni smlouvami o zpracování dat (DPA) a zajišťují odpovídající úroveň ochrany.
                </p>
                <div className="overflow-hidden rounded-xl border border-border/40">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="bg-surface border-b border-border/40">
                        <th className="text-left px-5 py-3 font-semibold text-text tracking-[-0.01em]">
                          Zpracovatel
                        </th>
                        <th className="text-left px-5 py-3 font-semibold text-text tracking-[-0.01em]">
                          Účel
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {subprocessors.map((sp, i) => (
                        <tr
                          key={sp.name}
                          className={`border-b border-border/40 last:border-b-0 ${i % 2 === 0 ? "" : "bg-surface/50"}`}
                        >
                          <td className="px-5 py-3 font-medium text-text tracking-[-0.01em]">
                            {sp.name}
                          </td>
                          <td className="px-5 py-3 text-text-secondary tracking-[-0.01em]">
                            {sp.purpose}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* ── Contact note ──────────────────────────────────────────────── */}
        <section className="py-16 px-6 lg:px-10 text-center">
          <ScrollReveal>
            <div className="max-w-xl mx-auto">
              <p className="text-text-secondary tracking-[-0.01em]">
                Dotazy ke zpracování osobních údajů:{" "}
                <a
                  href="mailto:soukromi@webihned.cz"
                  className="text-accent hover:underline underline-offset-4 transition-colors duration-300"
                >
                  soukromi@webihned.cz
                </a>
              </p>
            </div>
          </ScrollReveal>
        </section>

      </main>
      <Footer />
    </>
  );
}
