"use client";
import { useState, useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { m, useScroll, useReducedMotion, useMotionValue } from "framer-motion";
import Logo from "./Logo";
import ThemeToggle from "./ThemeToggle";
import { trackEvent } from "@/lib/track";

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef<HTMLElement>(null);
  const prefersReduced = useReducedMotion();

  // Page-level scroll progress for the bottom progress bar
  const { scrollYProgress } = useScroll();

  // Scroll direction hide/show
  const lastScrollY = useRef(0);
  const navY = useMotionValue(0);

  useEffect(() => {
    const handler = () => {
      const current = window.scrollY;
      setScrolled(current > 50);
      if (current < 80) {
        navY.set(0);
      } else if (current > lastScrollY.current) {
        // scrolling down — hide navbar
        navY.set(-80);
      } else {
        // scrolling up — show navbar
        navY.set(0);
      }
      lastScrollY.current = current;
    };
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, [navY]);

  // Close mobile menu on outside click
  useEffect(() => {
    function handleOutside(e: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setMenuOpen(false);
      }
    }
    if (menuOpen) {
      document.addEventListener("mousedown", handleOutside);
    }
    return () => document.removeEventListener("mousedown", handleOutside);
  }, [menuOpen]);

  // Close menu when route changes — use event-based approach
  useEffect(() => {
    const handler = () => setMenuOpen(false);
    window.addEventListener("popstate", handler);
    return () => window.removeEventListener("popstate", handler);
  }, []);

  // Also close on any link click within the menu
  useEffect(() => {
    if (!menuOpen) return;
    const links = menuRef.current?.querySelectorAll("a");
    const handler = () => setMenuOpen(false);
    links?.forEach((l) => l.addEventListener("click", handler));
    return () => links?.forEach((l) => l.removeEventListener("click", handler));
  }, [menuOpen]);

  function handleNavMouseEnter(e: React.MouseEvent<HTMLAnchorElement>) {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const fromLeft = x < rect.width / 2;
    e.currentTarget.style.setProperty("--underline-origin", fromLeft ? "left" : "right");
  }

  function navLinkClass(href: string) {
    const isActive = pathname === href;
    return [
      "nav-link-directional text-sm transition-colors duration-300 tracking-[-0.01em]",
      isActive
        ? "text-text font-semibold nav-link-active"
        : "text-text-secondary hover:text-text",
    ].join(" ");
  }

  function mobileLinkClass(href: string) {
    const isActive = pathname === href;
    return [
      "py-3.5 text-base transition-colors duration-200 tracking-[-0.01em] border-b border-border/20",
      isActive ? "text-text font-semibold" : "text-text-secondary hover:text-text",
    ].join(" ");
  }

  return (
    <m.nav
      ref={menuRef}
      className={[
        "animate-nav nav-glass sticky top-0 z-50 backdrop-blur-xl transition-colors duration-300",
        scrolled ? "bg-bg/95" : "bg-bg/60",
      ].join(" ")}
      aria-label="Hlavní navigace"
      style={{ y: navY }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10 h-16 flex items-center justify-between">
        <Link href="/">
          <Logo />
        </Link>

        {/* Center nav links — desktop only */}
        <div className="hidden md:flex items-center gap-6">
          <Link href="/pricing" className={navLinkClass("/pricing")} onMouseEnter={handleNavMouseEnter}>
            Ceník
          </Link>
          <Link href="/bezpecnost" className={navLinkClass("/bezpecnost")} onMouseEnter={handleNavMouseEnter}>
            Bezpečnost
          </Link>
          <Link href="/kontakt" className={navLinkClass("/kontakt")} onMouseEnter={handleNavMouseEnter}>
            Kontakt
          </Link>
        </div>

        {/* Right side */}
        <div className="flex items-center gap-3 sm:gap-4">
          <ThemeToggle />

          {/* Přihlásit se — desktop only */}
          <Link
            href="/kontakt"
            className="text-sm text-text-secondary hover:text-text transition-colors duration-300 hidden sm:block tracking-[-0.01em]"
          >
            Přihlásit se
          </Link>

          {/* CTA — hidden on mobile to save space, shown sm+ */}
          <Link
            href="/pricing"
            className="btn-primary bg-accent text-white text-sm font-medium px-5 sm:px-6 py-2.5 rounded-full tracking-[-0.01em] hidden sm:block"
            onClick={() => trackEvent("click", "cta", "nav_start")}
          >
            Začít zdarma
          </Link>

          {/* Hamburger button — mobile only */}
          <button
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            aria-label={menuOpen ? "Zavřít menu" : "Otevřít menu"}
            className="md:hidden flex items-center justify-center w-11 h-11 rounded-lg text-text-secondary hover:text-text hover:bg-surface transition-colors duration-200 -mr-1"
          >
            {menuOpen ? (
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                aria-hidden="true"
              >
                <path d="M18 6L6 18M6 6l12 12" />
              </svg>
            ) : (
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                aria-hidden="true"
              >
                <line x1="4" y1="7" x2="20" y2="7" />
                <line x1="4" y1="12" x2="20" y2="12" />
                <line x1="4" y1="17" x2="20" y2="17" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile dropdown menu */}
      <div
        id="mobile-menu"
        role="menu"
        aria-hidden={!menuOpen}
        className={[
          "md:hidden overflow-hidden transition-[max-height,opacity] duration-300 ease-in-out",
          "border-b border-border/30 bg-bg/95 backdrop-blur-xl",
          menuOpen ? "max-h-80 opacity-100" : "max-h-0 opacity-0 pointer-events-none",
        ].join(" ")}
      >
        <div className="max-w-7xl mx-auto px-6 pb-4 pt-1 flex flex-col">
          <Link href="/pricing" className={mobileLinkClass("/pricing")} role="menuitem">
            Ceník
          </Link>
          <Link href="/bezpecnost" className={mobileLinkClass("/bezpecnost")} role="menuitem">
            Bezpečnost
          </Link>
          <Link href="/kontakt" className={mobileLinkClass("/kontakt")} role="menuitem">
            Kontakt
          </Link>
          <Link href="/kontakt" className={mobileLinkClass("")} role="menuitem">
            Přihlásit se
          </Link>
          <Link
            href="/pricing"
            role="menuitem"
            onClick={() => trackEvent("click", "cta", "nav_start_mobile")}
            className="mt-3 btn-primary bg-accent text-white text-sm font-medium px-6 py-3 rounded-full tracking-[-0.01em] text-center"
          >
            Začít zdarma
          </Link>
        </div>
      </div>

      {/* Scroll progress bar — integrated into navbar bottom border */}
      {!prefersReduced && (
        <m.div
          className="absolute bottom-0 left-0 h-[2px] bg-accent origin-left"
          style={{ scaleX: scrollYProgress }}
          aria-hidden="true"
        />
      )}
    </m.nav>
  );
}
