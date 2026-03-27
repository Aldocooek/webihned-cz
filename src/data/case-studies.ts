export interface CaseStudyStat {
  value: string;
  label: string;
}

export interface CaseStudy {
  slug: string;
  company: string;
  initials: string;
  industry: string;
  title: string;
  quote: string;
  fullQuote: string;
  challenge: string[];
  solution: string[];
  results: CaseStudyStat[];
  avatarColor: string;
  avatarTextColor: string;
}

export const caseStudies: CaseStudy[] = [
  {
    slug: "techflow",
    company: "TechFlow",
    initials: "TF",
    industry: "SaaS",
    title: "Z nápadu k 1 000 uživatelům za 30 dní",
    quote: "Díky webihned.cz jsme spustili MVP za víkend. Za měsíc jsme měli první platící zákazníky.",
    fullQuote:
      "Díky webihned.cz jsme spustili MVP za víkend a za měsíc jsme měli první platící zákazníky. Nikdy jsem si nemyslel, že dokážeme validovat business model tak rychle bez vlastního vývojáře. webihned.cz změnil náš způsob myšlení o produktovém vývoji.",
    challenge: [
      "TechFlow byl startup s jasnou vizí — SaaS nástroj pro automatizaci reportingu v malých firmách. Problém byl jediný: žádný vývojář v týmu a omezený rozpočet. Klasická cesta by znamenala 6 měsíců hledání vhodného dodavatele, 400 000 Kč za MVP a nejistota, zda produkt vůbec někdo koupí.",
      "Zakladatel Tomáš Novák potřeboval rychle ověřit, zda má jeho nápad tržní potenciál. Každý měsíc čekání znamenal spalování úspor bez jediného zákazníka. Potřeboval dostat produkt do rukou uživatelů co nejdříve — ale bez kompromisů na kvalitě.",
    ],
    solution: [
      "Po doporučení od jiného zakladatele Tomáš vyzkoušel webihned.cz. Za jeden víkend popsal svůj produkt AI asistentovi a první verze reportingového nástroje byla hotová. Iterace na základě zpětné vazby probíhaly v hodinách, ne v týdnech.",
      "Do 30 dní od spuštění měl TechFlow 1 000 registrovaných uživatelů a prvních 15 platících zákazníků. Celkové náklady na vývoj MVP byly 990 Kč měsíčně — tedy 400x méně než původně plánoval utratit za agenturní řešení.",
    ],
    results: [
      { value: "3 dny", label: "do funkčního MVP" },
      { value: "1 000+", label: "uživatelů za 30 dní" },
      { value: "85%", label: "úspora nákladů" },
    ],
    avatarColor: "from-rose-400 to-pink-600",
    avatarTextColor: "text-white",
  },
  {
    slug: "datapeak",
    company: "DataPeak",
    initials: "DP",
    industry: "Interní nástroje",
    title: "Interní dashboard za odpoledne místo za kvartál",
    quote: "Náš tým analytiků už nemusí čekat na vývojáře. Dashboard si postaví sami.",
    fullQuote:
      "Náš tým analytiků už nemusí čekat na vývojáře. Dashboard si postaví sami — a to za odpoledne. Přestali jsme mít backlog žádostí na IT oddělení a každý analytik má přesně ta data, která potřebuje. webihned.cz nám vrátil kontrolu nad naší prací.",
    challenge: [
      "DataPeak je analytická agentura pracující s daty pro střední a velké české firmy. Jejich největší bolest nebyl nedostatek dat — naopak. Měli příliš mnoho dat a příliš málo způsobů, jak je prezentovat klientům. Každá žádost o nový dashboard šla přes IT oddělení s čekací dobou 6–12 týdnů.",
      "Analytici byli frustrovaní. Klienti čekali na přehledy, které by zvládli udělat za den — kdyby jen měli nástroj. Hledat vývojáře pro interní dashboardy dávalo ekonomicky nulový smysl. Potřebovali způsob, jak dát analytikům superschopnosti bez programování.",
    ],
    solution: [
      "DataPeak implementoval webihned.cz jako self-service platformu pro celý analytický tým. Za první týden si každý analytik vytvořil vlastní dashboard pro své klienty. IT backlog se vyprázdnil ze 47 žádostí na 0 v průběhu jednoho měsíce.",
      "Dnes má DataPeak 12 aktivních dashboardů napojených na živá data. Analytici iterují a přidávají nové vizualizace bez jediného řádku kódu. Klienti dostávají aktualizované přehledy každé ráno automaticky, bez manuálního zasílání reportů.",
    ],
    results: [
      { value: "4 hodiny", label: "průměrný build time" },
      { value: "12", label: "aktivních dashboardů" },
      { value: "0 řádků", label: "napsaného kódu" },
    ],
    avatarColor: "from-violet-400 to-indigo-600",
    avatarTextColor: "text-white",
  },
  {
    slug: "smarthub",
    company: "SmartHub",
    initials: "SH",
    industry: "E-commerce",
    title: "E-shop s AI doporučováním za 2 dny",
    quote: "Konkurence platí miliony za custom řešení. My jsme to měli za 2 dny a 990 Kč měsíčně.",
    fullQuote:
      "Konkurence platí miliony za custom řešení s AI doporučováním. My jsme to měli za 2 dny a 990 Kč měsíčně. Konverzní poměr vzrostl o 37 % v prvním měsíci. Tohle je způsob, jak se dnes staví e-commerce — rychle, chytře a bez zbytečných nákladů.",
    challenge: [
      "SmartHub prodával prémiové elektronické doplňky přes starý e-shop na pronajatém řešení. Konverzní poměr stagnoval pod 1,8 % a personalizace produktových doporučení byla sen — funkce dostupná jen v enterprise řešeních za stovky tisíc korun ročně.",
      "Majitelka Lucie Kovářová věděla, že zákazníci odcházejí kvůli špatné relevanci doporučení a pomalému nákupnímu procesu. Přejít na custom řešení s AI dávalo smysl, ale nabídky od agentur začínaly na 800 000 Kč za implementaci plus 15 000 Kč měsíčně za provoz.",
    ],
    solution: [
      "Lucie vyzkoušela webihned.cz a za 2 dny měla nový e-shop s integrovaným AI doporučovacím systémem. Šablona e-shopu pokryla základní funkce a AI asistent pomohl přidat personalizaci doporučení přesně dle potřeb produktového katalogu SmartHubu.",
      "Výsledky přišly okamžitě. Konverzní poměr vzrostl z 1,8 % na 2,5 % v prvním měsíci — nárůst o 37 %. Průměrná hodnota objednávky vzrostla o 22 % díky relevantním doporučením doplňkových produktů. Vše za 990 Kč měsíčně místo plánovaných 800 000 Kč vstupní investice.",
    ],
    results: [
      { value: "2 dny", label: "do spuštění" },
      { value: "37%", label: "vyšší konverze" },
      { value: "990 Kč", label: "měsíčně" },
    ],
    avatarColor: "from-emerald-400 to-teal-600",
    avatarTextColor: "text-white",
  },
];
