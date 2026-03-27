import Link from "next/link";
import Logo from "@/components/Logo";

export default function NotFound() {
  return (
    <main id="main-content" className="hero-gradient min-h-screen flex items-center justify-center px-6">
      <div className="max-w-2xl mx-auto text-center">
        {/* Logo */}
        <div className="flex justify-center mb-12">
          <Link href="/">
            <Logo className="text-xl" />
          </Link>
        </div>

        {/* Large 404 number */}
        <div
          className="text-[120px] md:text-[180px] font-bold leading-none text-accent/20 select-none tracking-[-0.05em] mb-2"
          aria-hidden="true"
        >
          404
        </div>

        {/* Heading */}
        <h1 className="text-3xl sm:text-4xl md:text-[48px] font-bold leading-[1.08] tracking-[-0.035em] mb-5">
          Stránka{" "}
          <span className="font-[var(--font-serif)] italic font-normal text-text-secondary">
            nenalezena
          </span>
        </h1>

        {/* Subtext */}
        <p className="text-base md:text-lg text-text-secondary max-w-md mx-auto mb-10 leading-relaxed tracking-[-0.01em]">
          Omlouváme se, ale stránka, kterou hledáte, neexistuje nebo byla
          přesunuta.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link
            href="/"
            className="btn-primary inline-flex items-center justify-center bg-accent text-white font-medium px-8 py-3.5 rounded-full text-sm tracking-[-0.01em] w-full sm:w-auto"
          >
            Zpět na hlavní stránku
          </Link>
          <Link
            href="/kontakt"
            className="inline-flex items-center justify-center bg-transparent text-text font-medium px-8 py-3.5 rounded-full text-sm tracking-[-0.01em] border border-border hover:border-text transition-colors duration-300 w-full sm:w-auto"
          >
            Kontaktujte nás
          </Link>
        </div>
      </div>
    </main>
  );
}
