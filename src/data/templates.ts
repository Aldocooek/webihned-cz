export interface Template {
  slug: string;
  name: string;
  category: "SaaS" | "E-commerce" | "Interní nástroje" | "Portfolio" | "Blog";
  description: string;
  features: string[];
  techStack: string[];
  longDescription: string;
  gradientLight: string;
  gradientDark: string;
}

export const templates: Template[] = [
  {
    slug: "crm-system",
    name: "CRM systém",
    category: "SaaS",
    description: "Správa kontaktů, obchodních příležitostí a pipeline.",
    features: [
      "Správa kontaktů a firem",
      "Pipeline obchodních příležitostí",
      "Aktivitní log a poznámky",
      "Export do CSV",
      "Týmová spolupráce",
      "Dashboard s přehledy",
    ],
    techStack: ["React", "PostgreSQL", "REST API", "Autentizace"],
    longDescription:
      "Kompletní CRM systém pro malé a střední firmy. Spravujte kontakty, sledujte obchodní příležitosti a analyzujte výkon vašeho prodejního týmu. Vše na jednom místě — od prvního kontaktu přes uzavření obchodu až po péči o zákazníka. Systém podporuje týmovou spolupráci, přiřazování úkolů a detailní reporty.",
    gradientLight: "linear-gradient(135deg, #fce7f3 0%, #fdf2f8 50%, #fef3c7 100%)",
    gradientDark: "linear-gradient(135deg, rgba(190,24,93,0.15) 0%, rgba(131,24,67,0.1) 50%, rgba(146,64,14,0.1) 100%)",
  },
  {
    slug: "e-shop",
    name: "E-shop",
    category: "E-commerce",
    description: "Kompletní obchod s košíkem, platbami a správou objednávek.",
    features: [
      "Katalog produktů s variantami",
      "Nákupní košík a objednávky",
      "Integrace platební brány",
      "Správa skladu a zásob",
      "Slevové kódy a akce",
      "Analytika prodeje",
    ],
    techStack: ["React", "PostgreSQL", "Stripe", "Autentizace"],
    longDescription:
      "Plnohodnotný e-shop připravený k prodeji od prvního dne. Obsahuje vše od správy produktů přes nákupní košík až po automatické potvrzovací e-maily. Integrovaná platební brána, správa skladu a přehledné reporty prodeje vám dají kontrolu nad celým obchodem.",
    gradientLight: "linear-gradient(135deg, #d1fae5 0%, #ecfdf5 50%, #cffafe 100%)",
    gradientDark: "linear-gradient(135deg, rgba(6,78,59,0.2) 0%, rgba(6,95,70,0.1) 50%, rgba(8,51,68,0.1) 100%)",
  },
  {
    slug: "dashboard",
    name: "Dashboard",
    category: "SaaS",
    description: "Analytický dashboard s grafy, tabulkami a filtry.",
    features: [
      "Interaktivní grafy a vizualizace",
      "Filtrovatelné datové tabulky",
      "Exporty do PDF a Excel",
      "Vlastní widgety a metriky",
      "Napojení na externí API",
      "Automatické reporty e-mailem",
    ],
    techStack: ["React", "PostgreSQL", "REST API", "Recharts"],
    longDescription:
      "Profesionální analytický dashboard pro vizualizaci dat z různých zdrojů. Zobrazujte klíčové metriky v reálném čase, tvořte vlastní přehledy a automaticky rozesílejte reporty celému týmu. Intuitivní drag-and-drop editor widgetů nevyžaduje žádné programování.",
    gradientLight: "linear-gradient(135deg, #ede9fe 0%, #f5f3ff 50%, #dbeafe 100%)",
    gradientDark: "linear-gradient(135deg, rgba(76,29,149,0.2) 0%, rgba(91,33,182,0.1) 50%, rgba(30,58,138,0.1) 100%)",
  },
  {
    slug: "booking-system",
    name: "Booking systém",
    category: "SaaS",
    description: "Rezervace termínů, kalendář a správa klientů.",
    features: [
      "Online rezervační formulář",
      "Synchronizace s Google Calendar",
      "Automatické připomínky SMS/e-mail",
      "Správa kapacity a dostupnosti",
      "Platby při rezervaci",
      "Historie a statistiky",
    ],
    techStack: ["React", "PostgreSQL", "REST API", "Autentizace"],
    longDescription:
      "Booking systém, který pracuje za vás 24/7. Klienti si rezervují termíny online, systém automaticky odesílá připomínky a synchronizuje kalendář. Ideální pro kadeřnictví, ordinace, poradce nebo jakoukoliv službu pracující s termíny.",
    gradientLight: "linear-gradient(135deg, #fce7f3 0%, #fdf2f8 50%, #ede9fe 100%)",
    gradientDark: "linear-gradient(135deg, rgba(190,24,93,0.15) 0%, rgba(131,24,67,0.1) 50%, rgba(76,29,149,0.1) 100%)",
  },
  {
    slug: "portfolio",
    name: "Portfolio",
    category: "Portfolio",
    description: "Osobní portfolio s projekty a kontaktním formulářem.",
    features: [
      "Galerie projektů s filtry",
      "Stránka O mně s časovou osou",
      "Kontaktní formulář",
      "Blog nebo novinky",
      "Přepínač světlý/tmavý režim",
      "SEO optimalizace",
    ],
    techStack: ["React", "REST API", "Nodemailer", "Animace"],
    longDescription:
      "Elegantní osobní portfolio, které udělá dojem. Prezentujte své projekty ve stylové galerii, sdílejte svůj příběh a nechte klienty kontaktovat vás přímo přes formulář. Plně responzivní, rychlé a připravené pro vyhledávače.",
    gradientLight: "linear-gradient(135deg, #fff7ed 0%, #fef3c7 50%, #fef9c3 100%)",
    gradientDark: "linear-gradient(135deg, rgba(124,45,18,0.15) 0%, rgba(146,64,14,0.1) 50%, rgba(113,63,18,0.1) 100%)",
  },
  {
    slug: "blog",
    name: "Blog",
    category: "Blog",
    description: "Publikační platforma s editorem a kategoriemi.",
    features: [
      "WYSIWYG editor článků",
      "Kategorie a tagy",
      "Komentáře a reakce",
      "RSS feed",
      "Fulltextové vyhledávání",
      "Newsletter integrace",
    ],
    techStack: ["React", "PostgreSQL", "REST API", "Autentizace"],
    longDescription:
      "Kompletní publikační platforma pro sdílení obsahu. Pište články v přehledném editoru, spravujte kategorie a budujte komunitu čtenářů. Integrovaný newsletter vám pomůže udržet čtenáře v kontaktu a zvýšit návratnost.",
    gradientLight: "linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 50%, #dbeafe 100%)",
    gradientDark: "linear-gradient(135deg, rgba(8,47,73,0.2) 0%, rgba(12,74,110,0.1) 50%, rgba(30,58,138,0.1) 100%)",
  },
  {
    slug: "projektovy-management",
    name: "Projektový management",
    category: "Interní nástroje",
    description: "Kanban, úkoly, týmy a deadliny.",
    features: [
      "Kanban board s drag-and-drop",
      "Správa úkolů a podúkolů",
      "Týmová spolupráce a role",
      "Deadliny a Ganttův diagram",
      "Časové záznamy",
      "Notifikace a komentáře",
    ],
    techStack: ["React", "PostgreSQL", "WebSocket", "Autentizace"],
    longDescription:
      "Projektový management nástroj, který váš tým skutečně použije. Přehledný Kanban board, sdílené úkoly a reálné termíny. Sledujte postup projektů v reálném čase a zajistěte, aby nic nespadlo pod radar.",
    gradientLight: "linear-gradient(135deg, #ecfdf5 0%, #d1fae5 50%, #a7f3d0 100%)",
    gradientDark: "linear-gradient(135deg, rgba(6,78,59,0.2) 0%, rgba(5,46,22,0.15) 50%, rgba(2,44,34,0.1) 100%)",
  },
  {
    slug: "inventar",
    name: "Inventář",
    category: "Interní nástroje",
    description: "Správa zásob, skladu a objednávek.",
    features: [
      "Evidence skladových položek",
      "QR kódy a čárové kódy",
      "Automatické objednávky při miniku",
      "Pohyby zboží a audit log",
      "Přehled hodnoty skladu",
      "Multi-skladová správa",
    ],
    techStack: ["React", "PostgreSQL", "REST API", "Autentizace"],
    longDescription:
      "Inventární systém pro kontrolu nad zásobami. Víte přesně co máte, kde to máte a kdy objednat. Automatické upozornění při nízkém stavu, pohybová evidence a multi-skladová podpora pro firmy s více provozovnami.",
    gradientLight: "linear-gradient(135deg, #fef9c3 0%, #fef3c7 50%, #fde68a 100%)",
    gradientDark: "linear-gradient(135deg, rgba(113,63,18,0.2) 0%, rgba(146,64,14,0.1) 50%, rgba(120,53,15,0.1) 100%)",
  },
  {
    slug: "landing-page",
    name: "Landing page",
    category: "Portfolio",
    description: "Konverzní stránka pro produkt nebo službu.",
    features: [
      "Hero sekce s CTA",
      "Sekce výhod a funkcí",
      "Ceník s plány",
      "Reference a hodnocení",
      "FAQ accordion",
      "Analytika konverzí",
    ],
    techStack: ["React", "REST API", "Animace", "Analytics"],
    longDescription:
      "Konverzní landing page navržená tak, aby proměnila návštěvníky v zákazníky. Jasné sdělení, přesvědčivé výhody, sociální důkaz a výzva k akci na každém místě. Vše optimalizované pro maximální konverzní poměr.",
    gradientLight: "linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 50%, #cffafe 100%)",
    gradientDark: "linear-gradient(135deg, rgba(8,47,73,0.2) 0%, rgba(8,51,68,0.1) 50%, rgba(8,51,68,0.1) 100%)",
  },
  {
    slug: "help-desk",
    name: "Help desk",
    category: "SaaS",
    description: "Ticketing systém pro zákaznickou podporu.",
    features: [
      "Správa tiketů a priorit",
      "Automatické přiřazování agentů",
      "Báze znalostí a FAQ",
      "SLA monitoring",
      "E-mail integrace",
      "Zákaznický portál",
    ],
    techStack: ["React", "PostgreSQL", "REST API", "Autentizace"],
    longDescription:
      "Help desk systém, který zefektivní vaši zákaznickou podporu. Žádný dotaz se neztratí — každý požadavek získá tiket, prioritu a přiřazeného agenta. Integrovaná báze znalostí snižuje počet opakujících se dotazů.",
    gradientLight: "linear-gradient(135deg, #fce7f3 0%, #fdf2f8 50%, #fee2e2 100%)",
    gradientDark: "linear-gradient(135deg, rgba(190,24,93,0.15) 0%, rgba(131,24,67,0.1) 50%, rgba(127,29,29,0.1) 100%)",
  },
  {
    slug: "marketplace",
    name: "Marketplace",
    category: "E-commerce",
    description: "Tržiště s více prodejci a recenzemi.",
    features: [
      "Multi-vendor platforma",
      "Registrace a správa prodejců",
      "Hodnocení a recenze",
      "Komisionální model",
      "Bezpečné platby",
      "Správce obsahu a moderace",
    ],
    techStack: ["React", "PostgreSQL", "Stripe", "Autentizace"],
    longDescription:
      "Marketplace platforma pro provozování tržiště s více prodejci. Prodejci si spravují vlastní profily a produkty, vy kontrolujete celou platformu a inkasujete provizi. Hodnocení a recenze budují důvěru kupujících.",
    gradientLight: "linear-gradient(135deg, #d1fae5 0%, #a7f3d0 50%, #6ee7b7 100%)",
    gradientDark: "linear-gradient(135deg, rgba(6,78,59,0.25) 0%, rgba(5,46,22,0.15) 50%, rgba(2,44,34,0.1) 100%)",
  },
  {
    slug: "hr-portal",
    name: "HR portál",
    category: "Interní nástroje",
    description: "Správa zaměstnanců, dovolených a docházky.",
    features: [
      "Evidence zaměstnanců",
      "Správa dovolených a nepřítomností",
      "Docházkový systém",
      "Onboarding checklist",
      "Hodnocení výkonu",
      "Výplatní pásky a dokumenty",
    ],
    techStack: ["React", "PostgreSQL", "REST API", "Autentizace"],
    longDescription:
      "HR portál, který zjednodušuje správu lidských zdrojů. Od evidence zaměstnanců přes schvalování dovolených až po docházkový systém. Zaměstnanci mají přístup ke svým dokumentům a mohou podávat žádosti online bez zbytečné papírové agendy.",
    gradientLight: "linear-gradient(135deg, #ede9fe 0%, #e0e7ff 50%, #dbeafe 100%)",
    gradientDark: "linear-gradient(135deg, rgba(76,29,149,0.2) 0%, rgba(49,46,129,0.15) 50%, rgba(30,58,138,0.1) 100%)",
  },
];
