export default function Logo({ className = "" }: { className?: string }) {
  return (
    <span
      className={`inline-flex items-center gap-1.5 font-bold tracking-[-0.03em] ${className}`}
    >
      <svg
        width="28"
        height="28"
        viewBox="0 0 28 28"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width="28" height="28" rx="7" className="fill-accent" />
        <path
          d="M7 18L11 10L15 16L19 8L21 12"
          stroke="white"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      <span className="text-lg">
        web<span className="text-accent">ihned</span>
        <span className="text-text-secondary font-normal text-sm">.cz</span>
      </span>
    </span>
  );
}
