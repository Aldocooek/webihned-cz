import Link from "next/link";

export default function SuperagentBanner() {
  return (
    <div className="animate-banner flex justify-center pt-8 pb-4">
      <Link
        href="/funkce"
        className="group inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full border border-border bg-surface/60 backdrop-blur-sm hover:bg-surface hover:border-text/20 transition-all duration-400 text-sm"
        style={{ transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)" }}
      >
        <span className="bg-accent text-white text-[10px] font-bold px-2.5 py-0.5 rounded-full uppercase tracking-wider">
          Novinka
        </span>
        <span className="text-text tracking-[-0.01em]">
          AI asistent pro tvorbu aplikací
        </span>
        <svg
          width="14"
          height="14"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
          className="text-accent transition-transform duration-300 group-hover:translate-x-0.5"
          style={{ transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)" }}
        >
          <path d="M5 12h14" />
          <path d="m12 5 7 7-7 7" />
        </svg>
      </Link>
    </div>
  );
}
