import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";

export const metadata: Metadata = {
  title: "Obchodní podmínky | webihned.cz",
  description:
    "Obchodní podmínky platformy webihned.cz. Platné od 1. března 2026.",
  alternates: {
    canonical: "/podminky",
  },
  openGraph: {
    title: "Obchodní podmínky | webihned.cz",
    description: "Obchodní podmínky platformy webihned.cz. Platné od 1. března 2026.",
    url: "https://webihned.cz/podminky",
    siteName: "webihned.cz",
    type: "website",
    locale: "cs_CZ",
  },
};

const sections = [
  {
    heading: "Úvodní ustanovení",
    body: "webihned.cz je AI platforma provozovaná společností webihned.cz s.r.o., IČO: 12345678, se sídlem Václavské náměstí 1, 110 00 Praha 1. Tyto obchodní podmínky upravují vzájemná práva a povinnosti mezi provozovatelem a uživateli platformy. Používáním platformy uživatel vyjadřuje souhlas s těmito podmínkami. Podmínky jsou platné a účinné od 1. března 2026.",
  },
  {
    heading: "Registrace a účet",
    body: "Pro plné využívání platformy je nutná registrace uživatelského účtu. Uživatel je povinen uvést pravdivé a aktuální údaje. Uživatel je plně odpovědný za bezpečnost přístupových údajů ke svému účtu a za veškeré aktivity, které jsou z jeho účtu provedeny. V případě podezření na neoprávněný přístup je uživatel povinen tuto skutečnost neprodleně nahlásit provozovateli.",
  },
  {
    heading: "Využívání služeb",
    body: "Platforma slouží k tvorbě webových aplikací pomocí umělé inteligence. Uživatel nesmí platformu ani její výstupy využívat v rozporu s platnými právními předpisy, k poškozování třetích osob nebo k šíření nezákonného obsahu. Provozovatel si vyhrazuje právo omezit nebo zrušit přístup uživatele, který poruší tyto podmínky.",
  },
  {
    heading: "Platební podmínky",
    body: "Ceny za využívání platformy jsou uvedeny v českých korunách (CZK) a jsou platné v aktuálním ceníku zveřejněném na stránce /pricing. Fakturace probíhá měsíčně nebo ročně dle zvoleného tarifu. Platba je splatná předem. V případě nezaplacení ve lhůtě splatnosti si provozovatel vyhrazuje právo omezit přístup ke službám.",
  },
  {
    heading: "Duševní vlastnictví",
    body: "Veškeré aplikace, kód a obsah vytvořené uživatelem prostřednictvím platformy patří výhradně uživateli. webihned.cz si nenárokuje žádná vlastnická ani licenční práva k výstupům vytvořeným uživatelem. Provozovatel si vyhrazuje práva k samotnému softwaru platformy, jejímu designu a veškerým komponentám provozované služby.",
  },
  {
    heading: "Ochrana osobních údajů",
    body: "Zpracování osobních údajů se řídí Zásadami ochrany soukromí dostupnými na stránce /soukromi a v souladu s nařízením GDPR (EU) 2016/679. Uživatel bere na vědomí, že pro poskytování služeb je nezbytné zpracování určitých osobních údajů.",
  },
  {
    heading: "Omezení odpovědnosti",
    body: "Služba je poskytována ve stavu, v jakém se nachází. Provozovatel nezaručuje nepřetržitý ani bezchybný provoz platformy. Provozovatel nenese odpovědnost za škody vzniklé v důsledku výpadků služby, ztráty dat nebo jiných technických problémů mimo přiměřenou kontrolu provozovatele. Odpovědnost provozovatele je v každém případě omezena na výši uhrazených poplatků za příslušné fakturační období.",
  },
  {
    heading: "Závěrečná ustanovení",
    body: "Tyto podmínky se řídí právním řádem České republiky. Veškeré spory vzniklé v souvislosti s těmito podmínkami budou řešeny příslušnými soudy České republiky. Provozovatel si vyhrazuje právo tyto podmínky kdykoli změnit. O změnách bude uživatel informován e-mailem nebo prostřednictvím platformy. Pokračování v užívání platformy po oznámení změn se považuje za souhlas s novým zněním podmínek.",
  },
];

export default function PodminkyPage() {
  return (
    <>
      <Navbar />
      <main id="main-content">

        {/* ── Hero ──────────────────────────────────────────────────────── */}
        <section className="hero-gradient pt-24 pb-16 px-6 lg:px-10 text-center">
          <div className="max-w-3xl mx-auto">
            <h1 className="animate-hero-title text-4xl sm:text-5xl lg:text-6xl font-semibold text-text tracking-[-0.03em] leading-[1.08] mb-4">
              Obchodní{" "}
              <em
                style={{ fontFamily: "var(--font-serif)", fontStyle: "italic" }}
              >
                podmínky
              </em>
            </h1>
            <p className="animate-hero-subtitle text-base text-text-secondary tracking-[-0.01em]">
              Platné od 1. března 2026
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

        {/* ── Contact note ──────────────────────────────────────────────── */}
        <section className="py-16 px-6 lg:px-10 text-center">
          <ScrollReveal>
            <div className="max-w-xl mx-auto">
              <p className="text-text-secondary tracking-[-0.01em]">
                Máte dotazy k obchodním podmínkám?{" "}
                <a
                  href="mailto:info@webihned.cz"
                  className="text-accent hover:underline underline-offset-4 transition-colors duration-300"
                >
                  info@webihned.cz
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
