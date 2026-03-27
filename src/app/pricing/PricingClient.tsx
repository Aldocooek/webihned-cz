"use client";

import { useState } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";

// ─── Types ──────────────────────────────────────────────────────────────────

interface PricingTier {
  id: string;
  name: string;
  monthlyPrice: number | null;
  annualPrice: number | null;
  credits: string;
  description: string;
  features: string[];
  cta: string;
  ctaVariant: "primary" | "secondary" | "outline";
  highlight: boolean;
  badge?: string;
}

interface FAQItem {
  q: string;
  a: string;
}

interface ComparisonRow {
  feature: string;
  tiers: Record<string, string | boolean>;
}

// ─── Data ────────────────────────────────────────────────────────────────────

const tiers: PricingTier[] = [
  {
    id: "free",
    name: "Zdarma",
    monthlyPrice: 0,
    annualPrice: 0,
    credits: "25 zpráv/měs.",
    description: "Ideální pro první kroky a testování platformy.",
    features: [
      "Všechny základní funkce",
      "Vestavěná autentizace",
      "Databázová funkcionalita",
      "Hosting v ceně",
      "1 aplikace",
    ],
    cta: "Začít zdarma",
    ctaVariant: "primary",
    highlight: false,
  },
  {
    id: "starter",
    name: "Starter",
    monthlyPrice: 490,
    annualPrice: 392,
    credits: "100 zpráv/měs.",
    description: "Pro jednotlivce a malé projekty, které potřebují růst.",
    features: [
      "Neomezené aplikace",
      "Editace kódu",
      "Vlastní doména",
      "Odstranění brandu webihned",
      "Vše z plánu Zdarma",
    ],
    cta: "Vybrat Starter",
    ctaVariant: "primary",
    highlight: false,
  },
  {
    id: "pro",
    name: "Pro",
    monthlyPrice: 990,
    annualPrice: 792,
    credits: "500 zpráv/měs.",
    description: "Pro profesionály, kteří chtějí maximální výkon a flexibilitu.",
    features: [
      "GitHub sync",
      "Pokročilé nástroje",
      "Prioritní podpora",
      "Rollover kreditů",
      "Vše ze Starteru",
    ],
    cta: "Vybrat Pro",
    ctaVariant: "primary",
    highlight: true,
    badge: "Nejoblíbenější",
  },
  {
    id: "business",
    name: "Business",
    monthlyPrice: 1990,
    annualPrice: 1592,
    credits: "1 200 zpráv/měs.",
    description: "Pro týmy, které potřebují spolupráci a správu oprávnění.",
    features: [
      "Týmový workspace",
      "RBAC (správa rolí)",
      "Dedicovaná podpora",
      "Analytika použití",
      "Vše z plánu Pro",
    ],
    cta: "Vybrat Business",
    ctaVariant: "secondary",
    highlight: false,
  },
  {
    id: "enterprise",
    name: "Enterprise",
    monthlyPrice: null,
    annualPrice: null,
    credits: "Na míru",
    description: "Pro velké organizace s vlastními požadavky na bezpečnost.",
    features: [
      "SSO / SAML",
      "SCIM provisioning",
      "Audit logy",
      "SLA záruka",
      "Vlastní onboarding",
    ],
    cta: "Kontaktujte nás",
    ctaVariant: "outline",
    highlight: false,
  },
];

const comparisonRows: ComparisonRow[] = [
  {
    feature: "Počet aplikací",
    tiers: { free: "1", starter: "Neomezeně", pro: "Neomezeně", business: "Neomezeně", enterprise: "Neomezeně" },
  },
  {
    feature: "Zprávy / měsíc",
    tiers: { free: "25", starter: "100", pro: "500", business: "1 200", enterprise: "Na míru" },
  },
  {
    feature: "Vlastní doména",
    tiers: { free: false, starter: true, pro: true, business: true, enterprise: true },
  },
  {
    feature: "GitHub sync",
    tiers: { free: false, starter: false, pro: true, business: true, enterprise: true },
  },
  {
    feature: "Editace kódu",
    tiers: { free: false, starter: true, pro: true, business: true, enterprise: true },
  },
  {
    feature: "RBAC (správa rolí)",
    tiers: { free: false, starter: false, pro: false, business: true, enterprise: true },
  },
  {
    feature: "SSO / SAML",
    tiers: { free: false, starter: false, pro: false, business: false, enterprise: true },
  },
  {
    feature: "Prioritní podpora",
    tiers: { free: false, starter: false, pro: true, business: true, enterprise: true },
  },
  {
    feature: "Audit logy",
    tiers: { free: false, starter: false, pro: false, business: false, enterprise: true },
  },
  {
    feature: "SLA",
    tiers: { free: false, starter: false, pro: false, business: false, enterprise: true },
  },
];

const faqs: FAQItem[] = [
  {
    q: "Co je kredit (zpráva)?",
    a: "Kredit neboli zpráva je jednotka AI aktivity. Každý dotaz, který zadáte AI při tvorbě nebo úpravě aplikace, spotřebuje jeden kredit. Počet kreditů závisí na zvoleném plánu — u plánu Pro se nevyužité kredity přenášejí do dalšího měsíce (rollover).",
  },
  {
    q: "Je potřeba kreditní karta pro bezplatný plán?",
    a: "Ne. Plán Zdarma nevyžaduje žádnou platební metodu. Kreditní kartu zadáváte až při přechodu na placený plán. Žádné skryté poplatky, žádné automatické strhávání bez vašeho souhlasu.",
  },
  {
    q: "Mohu kdykoli změnit plán?",
    a: "Ano, plán lze upgradovat nebo downgradujte kdykoli. Při upgradu dostanete okamžitě přístup k novým funkcím, při downgradu se změna projeví od začátku dalšího fakturačního období.",
  },
  {
    q: "Jak funguje roční fakturace?",
    a: "Při ročním předplatném ušetříte 20 % oproti měsíční fakturaci. Platba se strhává jednorázově na 12 měsíců dopředu. Kdykoli během roku lze přejít na vyšší plán — doplatíte pouze rozdíl.",
  },
  {
    q: "Co se stane, když mi dojdou kredity?",
    a: "Pokud vyčerpáte měsíční limit kreditů, AI generování se pozastaví do začátku dalšího fakturačního období. Vaše aplikace zůstanou funkční a přístupné — jen nebudete moci provádět nové AI úpravy. Kedykoli lze přejít na vyšší plán a získat okamžitě více kreditů.",
  },
  {
    q: "Nabízíte slevu pro studenty nebo neziskovky?",
    a: "Ano. Studentům s platnou ISIC kartou nebo institucionálním e-mailem nabízíme 30% slevu na plány Starter a Pro. Neziskovým organizacím poskytneme individuální nabídku. Napište nám na podpora@webihned.cz s dokladem o statusu.",
  },
  {
    q: "Poskytujete refundaci?",
    a: "Nabízíme 14denní garanci vrácení peněz bez udání důvodu. Stačí nás kontaktovat na podpora@webihned.cz a celou platbu vrátíme do 5 pracovních dní.",
  },
  {
    q: "Jsou moje aplikace a data v bezpečí?",
    a: "Veškerá data jsou šifrována při přenosu (TLS 1.3) i v klidu (AES-256). Pravidelně zálohujeme vaše aplikace a ukládáme je v datových centrech na území EU. Nikdy neprodáváme ani nesdílíme vaše data třetím stranám.",
  },
  {
    q: "Co zahrnuje Enterprise plán?",
    a: "Enterprise plán je navržen na míru pro větší organizace. Zahrnuje SSO/SAML integraci, SCIM provisioning uživatelů, podrobné audit logy, SLA záruku dostupnosti a dedikovaný onboarding s technickým manažerem.",
  },
];

// ─── Tooltip data ────────────────────────────────────────────────────────────

const featureTooltips: Record<string, string> = {
  "Počet aplikací": "Kolik různých projektů můžete mít aktivních najednou.",
  "Zprávy / měsíc": "AI kredity pro generování a úpravy aplikací.",
  "Vlastní doména": "Připojte vlastní doménu (např. mojeapp.cz).",
  "GitHub sync": "Automatická synchronizace kódu s GitHub repozitářem.",
  "Editace kódu": "Přímý přístup ke zdrojovému kódu vaší aplikace.",
  "RBAC (správa rolí)": "Role-based access control — řízení přístupu podle rolí v týmu.",
  "SSO / SAML": "Single Sign-On pro podnikové přihlášení (Okta, Azure AD).",
  "Prioritní podpora": "Garantovaná doba odezvy a osobní account manažer.",
  "Audit logy": "Kompletní záznamy všech akcí — kdo, co a kdy změnil.",
  "SLA": "Garantovaná dostupnost platformy s kompenzací při výpadku.",
};

// ─── Sub-components ──────────────────────────────────────────────────────────

function CheckIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      className={`flex-shrink-0 ${className}`}
      aria-hidden="true"
    >
      <path
        d="M20 6L9 17L4 12"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function CrossIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M18 6L6 18M6 6l12 12"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

function BillingToggle({
  annual,
  onChange,
}: {
  annual: boolean;
  onChange: (val: boolean) => void;
}) {
  return (
    <div className="flex items-center justify-center gap-3" role="group" aria-label="Způsob fakturace">
      <button
        onClick={() => onChange(false)}
        className={`text-sm font-medium tracking-[-0.01em] transition-colors duration-200 min-h-[44px] px-2 ${
          !annual ? "text-text" : "text-text-secondary"
        }`}
        aria-pressed={!annual}
      >
        Měsíčně
      </button>

      {/* Toggle pill */}
      <button
        onClick={() => onChange(!annual)}
        role="switch"
        aria-checked={annual}
        aria-label="Přepnout na roční fakturaci"
        className="relative w-12 h-6 rounded-full border border-border bg-surface transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/50"
        style={{ backgroundColor: annual ? "var(--color-accent)" : undefined }}
      >
        <span
          className="absolute top-0.5 left-0.5 w-5 h-5 rounded-full bg-surface border border-border/60 shadow-sm transition-transform duration-300"
          style={{ transform: annual ? "translateX(24px)" : "translateX(0)" }}
        />
      </button>

      <button
        onClick={() => onChange(true)}
        className={`text-sm font-medium tracking-[-0.01em] transition-colors duration-200 flex items-center gap-2 min-h-[44px] px-2 ${
          annual ? "text-text" : "text-text-secondary"
        }`}
        aria-pressed={annual}
      >
        Ročně
        <span
          className="text-xs font-semibold px-2 py-0.5 rounded-full transition-all duration-200"
          style={{
            backgroundColor: "var(--color-accent-light)",
            color: "var(--color-accent)",
          }}
        >
          Ušetříte 20 %
        </span>
      </button>
    </div>
  );
}

function PricingCard({
  tier,
  annual,
  index,
}: {
  tier: PricingTier;
  annual: boolean;
  index: number;
}) {
  const price = annual ? tier.annualPrice : tier.monthlyPrice;
  const isEnterprise = tier.id === "enterprise";

  // Calculate annual savings vs monthly × 12
  const annualSavings =
    annual && !isEnterprise && tier.monthlyPrice && tier.annualPrice && tier.monthlyPrice > 0
      ? (tier.monthlyPrice - tier.annualPrice) * 12
      : 0;

  return (
    <ScrollReveal delay={index * 80}>
      <div
        className={`card-hover bg-surface rounded-3xl border flex flex-col h-full relative transition-transform duration-300 ${
          tier.highlight
            ? "p-7 pt-10 scale-[1.03] border-2 border-accent shadow-[0_0_0_1px_var(--color-accent),0_8px_32px_-4px_rgba(225,29,72,0.22)] z-10"
            : "p-7 border-border/40 dark:border-border/80 shadow-[0_1px_3px_rgba(0,0,0,0.04)] dark:shadow-[0_1px_4px_rgba(0,0,0,0.4)]"
        }`}
      >
        {/* "Nejoblíbenější" badge */}
        {tier.badge && (
          <div
            className="absolute -top-3.5 left-1/2 -translate-x-1/2 text-xs font-semibold px-3.5 py-1 rounded-full text-white whitespace-nowrap"
            style={{ backgroundColor: "var(--color-accent)" }}
          >
            {tier.badge}
          </div>
        )}

        {/* Plan name + description */}
        <div className="mb-5">
          <h3
            className="text-base font-semibold mb-1.5 tracking-[-0.02em]"
            style={{ color: tier.highlight ? "var(--color-accent)" : undefined }}
          >
            {tier.name}
          </h3>
          <p className="text-xs text-text-secondary leading-relaxed tracking-[-0.01em]">
            {tier.description}
          </p>
        </div>

        {/* Price */}
        <div className="mb-1">
          {isEnterprise ? (
            <span className="text-4xl font-bold tracking-[-0.04em]">Na míru</span>
          ) : (
            <div className="flex items-baseline gap-1">
              <span className="text-[44px] font-bold leading-none tracking-[-0.04em]">
                {price === 0 ? "0" : price?.toLocaleString("cs-CZ")}
              </span>
              <span className="text-text-secondary text-sm">Kč/měs.</span>
            </div>
          )}
        </div>

        {/* Annual billing note + savings callout */}
        <div className="mb-5 h-10 flex flex-col justify-start gap-0.5">
          <p className="text-xs text-text-secondary tracking-[-0.01em]">
            {annual && !isEnterprise && price !== 0
              ? `Fakturováno ročně — ${((price ?? 0) * 12).toLocaleString("cs-CZ")} Kč/rok`
              : ""}
          </p>
          {annualSavings > 0 && (
            <p
              className="text-xs font-semibold tracking-[-0.01em]"
              style={{ color: "var(--color-accent)" }}
            >
              Ušetříte {annualSavings.toLocaleString("cs-CZ")} Kč/rok
            </p>
          )}
        </div>

        {/* Credits badge */}
        <div
          className="inline-flex items-center gap-1.5 text-xs font-medium px-3 py-1.5 rounded-full mb-6 w-fit"
          style={{
            backgroundColor: tier.highlight
              ? "var(--color-accent-light)"
              : "rgba(100,116,139,0.08)",
            color: tier.highlight ? "var(--color-accent)" : "var(--color-text-secondary)",
          }}
        >
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path
              d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          {tier.credits}
        </div>

        {/* Feature list */}
        <ul className="space-y-3 mb-8 flex-1">
          {tier.features.map((feature) => (
            <li key={feature} className="flex items-center gap-2.5 text-sm tracking-[-0.01em]">
              <CheckIcon
                className={tier.highlight ? "text-accent" : "text-text-secondary"}
              />
              {feature}
            </li>
          ))}
        </ul>

        {/* CTA button */}
        {tier.ctaVariant === "primary" && (
          <Link
            href="/pricing"
            className="btn-primary block w-full text-center bg-accent text-white font-medium py-3 rounded-full text-sm tracking-[-0.01em]"
            style={{ backgroundColor: "var(--color-accent)" }}
          >
            {tier.cta}
          </Link>
        )}
        {tier.ctaVariant === "secondary" && (
          <Link
            href="/pricing"
            className="btn-secondary block w-full text-center border border-border text-text font-medium py-3 rounded-full text-sm tracking-[-0.01em]"
          >
            {tier.cta}
          </Link>
        )}
        {tier.ctaVariant === "outline" && (
          <>
            <Link
              href="/kontakt"
              className="btn-secondary block w-full text-center border border-border text-text font-medium py-3 rounded-full text-sm tracking-[-0.01em]"
            >
              {tier.cta}
            </Link>
            <p className="text-center text-xs text-text-secondary mt-3 tracking-[-0.01em]">
              nebo{" "}
              <Link
                href="/kontakt"
                className="underline underline-offset-2 hover:text-accent transition-colors duration-200"
              >
                napište nám
              </Link>{" "}
              — odpovíme do 24 hodin
            </p>
          </>
        )}
      </div>
    </ScrollReveal>
  );
}

function ComparisonTable() {
  return (
    <ScrollReveal>
      <div className="overflow-x-auto">
        <table className="w-full min-w-[700px] text-sm" aria-label="Srovnání funkcí plánů">
          <thead>
            <tr className="border-b border-border dark:border-border">
              <th
                scope="col"
                className="py-4 pr-4 text-left font-semibold text-text tracking-[-0.02em] w-[220px]"
              >
                Funkce
              </th>
              {tiers.map((tier) => (
                <th
                  key={tier.id}
                  scope="col"
                  className={`py-4 px-3 text-center font-semibold tracking-[-0.02em] ${
                    tier.highlight ? "text-accent" : "text-text"
                  }`}
                >
                  {tier.name}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-border/60 dark:divide-border">
            {comparisonRows.map((row, i) => (
              <tr
                key={row.feature}
                className={
                  i % 2 === 0
                    ? "bg-transparent"
                    : "bg-black/[0.04] dark:bg-white/[0.07]"
                }
              >
                <td className="py-3.5 pr-4 text-text-secondary tracking-[-0.01em]">
                  <span className="tooltip-wrapper group relative cursor-help inline-block">
                    {row.feature}
                    {featureTooltips[row.feature] && (
                      <span className="tooltip-content">
                        {featureTooltips[row.feature]}
                      </span>
                    )}
                  </span>
                </td>
                {tiers.map((tier) => {
                  const val = row.tiers[tier.id];
                  return (
                    <td key={tier.id} className="py-3.5 px-3 text-center">
                      {typeof val === "boolean" ? (
                        val ? (
                          <span className="inline-flex items-center justify-center text-accent">
                            <CheckIcon />
                          </span>
                        ) : (
                          <span className="inline-flex items-center justify-center text-text-secondary/40 dark:text-text-secondary/50">
                            <CrossIcon />
                          </span>
                        )
                      ) : (
                        <span className="text-text tracking-[-0.01em] font-medium text-xs">
                          {val}
                        </span>
                      )}
                    </td>
                  );
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </ScrollReveal>
  );
}

function PricingFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="divide-y divide-border">
      {faqs.map((faq, i) => (
        <ScrollReveal key={i} delay={i * 50}>
          <div>
            <button
              onClick={() => setOpenIndex(openIndex === i ? null : i)}
              className="w-full flex items-center justify-between py-6 text-left group"
              aria-expanded={openIndex === i}
            >
              <span className="text-base font-medium pr-6 tracking-[-0.01em] group-hover:text-accent transition-colors duration-300">
                {faq.q}
              </span>
              <div
                className={`w-8 h-8 rounded-full border border-border flex items-center justify-center flex-shrink-0 transition-all duration-400 ${
                  openIndex === i
                    ? "bg-accent border-accent rotate-180"
                    : "group-hover:border-text"
                }`}
                style={{ transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)" }}
              >
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke={openIndex === i ? "white" : "currentColor"}
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="m6 9 6 6 6-6" />
                </svg>
              </div>
            </button>
            <div className={`faq-content ${openIndex === i ? "open" : ""}`}>
              <div>
                <p className="text-sm text-text-secondary leading-[1.8] pb-6 tracking-[-0.01em]">
                  {faq.a}
                </p>
              </div>
            </div>
          </div>
        </ScrollReveal>
      ))}
    </div>
  );
}

// ─── Page ────────────────────────────────────────────────────────────────────

export default function PricingClient() {
  const [annual, setAnnual] = useState(false);

  return (
    <>
      <Navbar />

      <main id="main-content">
        {/* ── Hero heading ─────────────────────────────────────────────── */}
        <section className="pricing-gradient pt-20 pb-10 md:pt-28 md:pb-14">
          <div className="max-w-7xl mx-auto px-6 lg:px-10 text-center">
            <ScrollReveal>
              <h1 className="text-4xl sm:text-5xl md:text-[64px] font-bold leading-[1.06] tracking-[-0.04em] mb-4">
                Transparentní{" "}
                <span className="font-[var(--font-serif)] italic font-normal">
                  ceník
                </span>
              </h1>
              <p className="text-text-secondary text-base md:text-lg max-w-lg mx-auto leading-relaxed tracking-[-0.01em] mb-10">
                Začněte zdarma. Upgradujte podle potřeb vašeho týmu.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={150}>
              <BillingToggle annual={annual} onChange={setAnnual} />
            </ScrollReveal>
          </div>
        </section>

        {/* ── Pricing cards ─────────────────────────────────────────────── */}
        <section className="py-10 md:py-14" aria-label="Cenové plány">
          <div className="max-w-7xl mx-auto px-6 lg:px-10">
            {/* 5-card grid: 1 col → 2 col → 3+2 / 5 col */}
            <div className="pricing-cards grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5">
              {tiers.map((tier, i) => (
                <PricingCard key={tier.id} tier={tier} annual={annual} index={i} />
              ))}
            </div>

            {/* Annual note */}
            {annual && (
              <ScrollReveal delay={450}>
                <p className="text-center text-xs text-text-secondary mt-6 tracking-[-0.01em]">
                  * Ceny při ročním předplatném jsou přepočteny na měsíc. Fakturováno jednorázově za 12 měsíců.
                </p>
              </ScrollReveal>
            )}
          </div>
        </section>

        {/* ── Feature comparison table ──────────────────────────────────── */}
        <section className="py-16 md:py-24" aria-labelledby="comparison-heading">
          <div className="max-w-7xl mx-auto px-6 lg:px-10">
            <ScrollReveal>
              <h2
                id="comparison-heading"
                className="text-2xl sm:text-3xl md:text-[40px] font-bold leading-[1.1] tracking-[-0.035em] mb-2"
              >
                Porovnání{" "}
                <span className="font-[var(--font-serif)] italic font-normal">
                  plánů
                </span>
              </h2>
              <p className="text-text-secondary text-sm md:text-base mb-10 tracking-[-0.01em]">
                Přehled všech funkcí na jednom místě.
              </p>
            </ScrollReveal>

            <ComparisonTable />
          </div>
        </section>

        {/* ── FAQ ───────────────────────────────────────────────────────── */}
        <section className="py-16 md:py-24 border-t border-border/40" aria-labelledby="faq-heading">
          <div className="max-w-3xl mx-auto px-6 lg:px-10">
            <ScrollReveal>
              <h2
                id="faq-heading"
                className="text-2xl sm:text-3xl md:text-[40px] font-bold leading-[1.1] tracking-[-0.035em] mb-14"
              >
                Časté{" "}
                <span className="font-[var(--font-serif)] italic font-normal">
                  dotazy
                </span>
              </h2>
            </ScrollReveal>

            <PricingFAQ />
          </div>
        </section>

        {/* ── Bottom CTA ────────────────────────────────────────────────── */}
        <section className="cta-gradient py-16 md:py-24 border-t border-border/40">
          <div className="max-w-7xl mx-auto px-6 lg:px-10">
            <ScrollReveal>
              <div className="text-center">
                <p className="text-xl font-semibold mb-2 tracking-[-0.02em]">
                  Stále máte otázky?
                </p>
                <p className="text-text-secondary text-sm mb-6 tracking-[-0.01em]">
                  Náš tým je k dispozici a rád vám pomůže vybrat správný plán.
                </p>
                <Link
                  href="/kontakt"
                  className="link-arrow inline-flex items-center gap-2 text-sm font-semibold text-text hover:text-accent transition-colors duration-300 tracking-[-0.01em]"
                >
                  Kontaktujte nás
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="M5 12h14" />
                    <path d="m12 5 7 7-7 7" />
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
