export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  categoryColor: string;
  date: string;
  dateISO: string;
  readTime: string;
  content: string[];
}

export const blogPosts: BlogPost[] = [
  {
    slug: "jak-vytvorit-eshop-za-10-minut",
    title: "Jak vytvořit e-shop za 10 minut s AI",
    excerpt:
      "Podrobný návod jak od nápadu k funkčnímu e-shopu s platbami, košíkem a správou objednávek.",
    category: "Návod",
    categoryColor:
      "bg-accent/10 text-accent border border-accent/20",
    date: "25. března 2026",
    dateISO: "2026-03-25",
    readTime: "8 min",
    content: [
      "Vytvoření e-shopu tradičním způsobem zabere měsíce práce a stovky tisíc korun. S webihned.cz to zvládnete za odpoledne — a to bez jediného řádku kódu.",
      "V tomto návodu vás provedeme celým procesem od prvního nápadu až po funkční e-shop s platebním systémem, košíkem a správou objednávek. Ukážeme vám, že hranice mezi nápadem a hotovým produktem je dnes jen otázka hodin.",
      "Prvním krokem je popis vašeho e-shopu v chatu. Čím detailnější popis, tím lepší výsledek. Například: Chci e-shop s oblečením pro ženy, který bude mít kategorie podle sezóny, fulltextové vyhledávání, košík, oblíbené položky a platbu přes kartu. AI z tohoto popisu okamžitě sestaví kompletní architekturu aplikace.",
      "AI automaticky vytvoří databázové schéma pro produkty, kategorie, objednávky a uživatele. Nemusíte se starat o technické detaily — vše je připraveno k použití. Schéma zahrnuje správu skladu, varianty produktů (velikost, barva) a historii objednávek.",
      "Platební systém se propojí jedním kliknutím. Podporujeme Stripe, GoPay a bankovní převody. Stačí zadat API klíče ve správci projektů a platby fungují okamžitě. Automaticky se vygenerují i potvrzovací e-maily pro zákazníky a faktury ve formátu PDF.",
      "Po dokončení klikněte na Publikovat. Váš e-shop je okamžitě online s vlastní doménou a SSL certifikátem. Od prvního nápadu k živému obchodu — méně než 10 minut.",
    ],
  },
  {
    slug: "predstavujeme-tmavy-rezim",
    title: "Představujeme tmavý režim",
    excerpt:
      "Nový tmavý režim pro pohodlnější práci. Přepněte jedním kliknutím.",
    category: "Novinka",
    categoryColor:
      "bg-blue-500/10 text-blue-600 dark:text-blue-400 border border-blue-500/20",
    date: "20. března 2026",
    dateISO: "2026-03-20",
    readTime: "3 min",
    content: [
      "Nasloucháme naší komunitě. Tmavý režim byl dlouhodobě nejžádanější funkcí webihned.cz — a dnes ho konečně spouštíme pro všechny uživatele.",
      "Nový tmavý režim není jen invertovaná paleta barev. Celý vizuální systém byl přepracován tak, aby ve tmě poskytoval optimální kontrast, snižoval únavu očí při večerní práci a zároveň zachoval plnou čitelnost grafů, schémat a kódových bloků.",
      "Přepnutí je jednoduché — klikněte na ikonu slunce nebo měsíce v pravém horním rohu navigace. Vaše preference se uloží automaticky a platí napříč všemi zařízeními, na která jste přihlášeni.",
      "Tmavý režim respektuje systémové nastavení vašeho operačního systému. Pokud máte v macOS nebo Windows zapnutý automatický tmavý režim, webihned.cz se přizpůsobí bez jakékoli konfigurace.",
      "Pracujeme také na dalších úpravách uživatelského rozhraní na základě zpětné vazby komunity. Sledujte náš changelog, kde v průběhu příštích týdnů zveřejníme další novinky.",
    ],
  },
  {
    slug: "5-tipu-pro-lepsi-ai-prompty",
    title: "5 tipů pro lepší AI prompty",
    excerpt:
      "Jak formulovat požadavky na AI, abyste dostali přesně to, co potřebujete.",
    category: "Tipy",
    categoryColor:
      "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20",
    date: "15. března 2026",
    dateISO: "2026-03-15",
    readTime: "5 min",
    content: [
      "Kvalita výstupu AI závisí především na kvalitě vstupu. Naučte se psát prompty tak, aby AI pochopila přesně to, co potřebujete — a ušetřete si hodiny opakovaného upřesňování.",
      "Tip č. 1: Buďte konkrétní ohledně technologií a omezení. Místo Vytvoř mi web napište Vytvoř responzivní landing page v Next.js s Tailwind CSS, tmavým pozadím, hero sekcí s CTA tlačítkem a sekcí s funkcemi ve třech sloupcích. Konkrétnost snižuje počet iterací ze 6 na 1–2.",
      "Tip č. 2: Definujte uživatele a účel. AI vytvoří výrazně relevantnější výsledky, pokud zná cílového uživatele. Příklad: Aplikace je pro účetní firmy, které potřebují importovat CSV výpisy z bank a párovat je s fakturami. Uživatelé nejsou technicky zdatní.",
      "Tip č. 3: Uveďte příklady požadovaného výstupu. Vzor funguje lépe než popis. Přiložte screenshot, odkaz nebo textový příklad toho, co chcete dosáhnout. Vizuální reference zkrátí čas na výsledek o 40 %.",
      "Tip č. 4: Rozdělte velké úlohy na menší kroky. Místo jednoho obřího požadavku postupujte postupně: nejprve databázové schéma, pak API endpointy, pak UI. Každý krok ověřte, než přejdete na další.",
      "Tip č. 5: Sdělte AI, co nechcete. Negativní omezení jsou stejně důležitá jako pozitivní požadavky. Bez externích knihoven, žádná modální okna, zachovej stávající barvy z globals.css — tyto instrukce zabraňují zbytečnému přepisování funkčních částí projektu.",
    ],
  },
  {
    slug: "jak-techflow-usetril-6-mesicu-vyvoje",
    title: "Jak TechFlow ušetřil 6 měsíců vývoje",
    excerpt:
      "Český startup TechFlow přestavěl svůj interní systém za víkend.",
    category: "Případová studie",
    categoryColor:
      "bg-amber-500/10 text-amber-600 dark:text-amber-400 border border-amber-500/20",
    date: "10. března 2026",
    dateISO: "2026-03-10",
    readTime: "6 min",
    content: [
      "TechFlow je česká společnost, která vyvíjí software pro správu logistiky. Jejich interní systém pro sledování zásilek byl vybudován před 5 lety a postupně se stal nepřehledným labyrintem starých technologií, který brzdil celý tým.",
      "Rewrite od základu byl naplánován na 6 měsíců s týmem 3 vývojářů. Náklady: přibližně 900 000 Kč. Tomáš Kovář, CTO TechFlow, se rozhodl zkusit jiný přístup a dal webihned.cz šanci o víkendu.",
      "V pátek večer Tomáš popsal celý systém v chatu — funkce, databázové vazby, uživatelské role a integraci s externími API dopravců. Do neděle odpoledne měl funkční prototyp s reálnými daty importovanými z původního systému.",
      "Výsledek po dvou týdnech finálního dolaďování: nový systém běží v produkci, zpracovává 2 400 zásilek denně a stál 47 000 Kč namísto původně rozpočtovaných 900 000 Kč. Vývojáři se mohli soustředit na nové funkce místo přepisování.",
      "Největším překvapením bylo propojení s API dopravců. Integrace s PPL, DPD a Zásilkovnou, která byla původně odhadována na 3 týdny práce, byla hotová za 4 hodiny. webihned.cz zná standardní API formáty a generuje klientský kód automaticky.",
      "Doporučuji to každému, kdo má legacy systém a bojí se rewritu. Nejhorší, co se může stát, je, že víkend strávíte zajímavým experimentem. Nejlepší? Ušetříte milion korun, říká Tomáš Kovář.",
    ],
  },
  {
    slug: "rezervacni-system-pro-vasi-firmu",
    title: "Rezervační systém pro vaši firmu",
    excerpt:
      "Krok za krokem: od jednoduchého formuláře po plnohodnotný booking systém.",
    category: "Návod",
    categoryColor:
      "bg-accent/10 text-accent border border-accent/20",
    date: "5. března 2026",
    dateISO: "2026-03-05",
    readTime: "7 min",
    content: [
      "Rezervační systém je jednou z nejčastěji žádaných aplikací na webihned.cz. Salóny, posilovny, lékaři, školy — každý potřebuje jednoduché a spolehlivé řešení pro správu termínů. Tento návod vás provede celým procesem.",
      "Začněte jednoduchým popisem: Chci rezervační systém pro kadeřnický salón. Zákazníci si vybírají službu, kadeřníka a volný termín. Potvrzení přijde e-mailem. AI okamžitě vytvoří základní strukturu s kalendářem, správou zaměstnanců a e-mailovými notifikacemi.",
      "Správa dostupnosti je klíčová. Každý zaměstnanec si nastaví pracovní dobu a svátky. Systém automaticky zobrazuje pouze skutečně volné termíny s ohledem na délku jednotlivých služeb — žádné překryvy, žádné dvojité rezervace.",
      "Zákazníci dostanou potvrzovací e-mail s možností zrušení nebo přesunutí termínu. Systém automaticky posílá připomínku 24 hodin před termínem, čímž snižuje počet no-show rezervací průměrně o 35 %.",
      "Pro pokročilé použití přidejte online platby — zákazníci mohou uhradit zálohu nebo celou částku předem. Integrace se Stripe zvládne zálohy, vracení peněz při zrušení i automatické faktury.",
      "Kompletní rezervační systém pro malý salón je hotový za 2–3 hodiny. Systém pro větší provoz s více pobočkami, správou zdrojů a napojením na účetní software zvládnete za víkend.",
    ],
  },
  {
    slug: "github-integrace-je-tady",
    title: "GitHub integrace je tady",
    excerpt:
      "Synchronizujte projekty s GitHubem automaticky. Plný přístup ke kódu.",
    category: "Novinka",
    categoryColor:
      "bg-blue-500/10 text-blue-600 dark:text-blue-400 border border-blue-500/20",
    date: "1. března 2026",
    dateISO: "2026-03-01",
    readTime: "4 min",
    content: [
      "Dnešním dnem spouštíme nativní integraci s GitHubem — funkci, na kterou čekali především vývojáři a týmy pracující s vlastní infrastrukturou. Veškerý kód vašich projektů je nyní synchronizován do vašeho GitHub repozitáře v reálném čase.",
      "Propojení je jednoduché. V nastavení projektu klikněte na GitHub, autorizujte přístup a vyberte cílový repozitář. Každá změna provedená v editoru webihned.cz se automaticky promítne jako commit do vybrané větve.",
      "Pro týmy přináší integrace možnost code review přes standardní GitHub pull requesty. Vývojáři mohou přispívat přímo z jejich preferovaného prostředí — VS Code, terminál nebo GitHub web — a změny se okamžitě projeví v živé aplikaci.",
      "Plný přístup ke kódu znamená, že nejste uzamčeni v platformě. Kdykoliv si přejete migrovat nebo rozšířit aplikaci mimo webihned.cz, máte kompletní zdrojový kód k dispozici. Vaše data a kód jsou vždy váš majetek.",
      "GitHub Actions jsou podporovány automaticky. Existující CI/CD pipeline, testy a deployment skripty fungují bez jakékoli úpravy. webihned.cz generuje standardní Next.js nebo Node.js projekty, které jsou plně kompatibilní s ekosystémem GitHubu.",
    ],
  },
];

export function getBlogPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((post) => post.slug === slug);
}

export function getRelatedPosts(slug: string, count = 3): BlogPost[] {
  return blogPosts.filter((post) => post.slug !== slug).slice(0, count);
}
