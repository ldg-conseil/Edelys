"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown, ArrowRight } from "lucide-react";
import { Logo } from "@/components/ui/Logo";
import { Button } from "@/components/ui/Button";
import { ThemeToggle } from "@/components/ui/ThemeToggle";

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const isHomePage = pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const shouldShowScrolledHeader = isScrolled || !isHomePage;

  const navLinks = [
    {
      label: "Le Salon",
      subLinks: [
        { label: "À Propos", href: "/a-propos" },
        { label: "L'équipe", href: "/equipe" },
        { label: "Prestations & Tarifs", href: "/prestations" },
      ],
    },
    { label: "L'Expertise", href: "/#expertise" },
    { label: "Contact", href: "/contact" },
  ];

  /* ── Classes communes ── */
  const navLinkBase =
    "text-[10px] md:text-[11px] uppercase tracking-[0.25em] font-medium transition-colors duration-300 py-2 block";

  const navLinkTransparent =
    "text-charcoal/90 hover:text-laiton dark:text-laiton dark:hover:text-laiton/70";

  const navLinkSolid =
    "text-charcoal/80 hover:text-laiton dark:text-grege/80 dark:hover:text-laiton";

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
        shouldShowScrolledHeader
          ? "bg-creme/90 dark:bg-cinema-bg/90 backdrop-blur-xl border-b border-charcoal/[0.06] dark:border-cinema-border py-3 shadow-sm"
          : "bg-creme/15 dark:bg-transparent backdrop-blur-sm py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <Logo variant="round" size="sm" />

        {/* Navigation Desktop */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <div key={link.label} className="relative group">
              {link.subLinks ? (
                <>
                  <span
                    className={`${navLinkBase} ${navLinkTransparent} ${
                      shouldShowScrolledHeader ? navLinkSolid : navLinkTransparent
                    } cursor-pointer flex items-center gap-1`}
                  >
                    {link.label}
                    <ChevronDown className="w-3 h-3 transition-transform duration-300 group-hover:rotate-180" />
                  </span>
                  {/* Dropdown */}
                  <div className="absolute top-full left-1/2 -translate-x-1/2 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 translate-y-2 group-hover:translate-y-0">
                    <div className="bg-white/95 dark:bg-cinema-card/95 border border-charcoal/[0.06] dark:border-cinema-border rounded-lg shadow-xl py-2 flex flex-col min-w-[220px] backdrop-blur-xl">
                      {link.subLinks.map((sub) => (
                        <Link
                          key={sub.label}
                          href={sub.href}
                          className="text-[11px] font-medium text-charcoal/70 dark:text-grege/80 hover:text-laiton dark:hover:text-laiton hover:bg-charcoal/[0.03] dark:hover:bg-white/[0.03] transition-colors px-5 py-2.5"
                        >
                          {sub.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                </>
              ) : (
                <Link
                  href={link.href!}
                  className={`${navLinkBase} ${
                    shouldShowScrolledHeader ? navLinkSolid : navLinkTransparent
                  }`}
                >
                  {link.label}
                </Link>
              )}
            </div>
          ))}
        </nav>

        {/* Actions Desktop */}
        <div className="hidden md:flex items-center gap-4">
          <ThemeToggle />
          <a
            href="https://www.planity.com/edelys-coiffure-91590-la-ferte-alais"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button variant="editorial" size="sm" icon={ArrowRight}>
              Réserver
            </Button>
          </a>
        </div>

        {/* Mobile Toggle */}
        <div className="flex md:hidden items-center gap-4">
          <ThemeToggle />
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-charcoal dark:text-creme p-2"
            aria-label={isMobileMenuOpen ? "Fermer le menu" : "Ouvrir le menu"}
          >
            {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-creme dark:bg-cinema-card border-b border-charcoal/[0.06] dark:border-cinema-border p-6 shadow-xl flex flex-col gap-6 md:hidden animate-in fade-in slide-in-from-top-2 duration-300 max-h-[80vh] overflow-y-auto">
          <nav className="flex flex-col gap-6 items-center pt-4">
            {navLinks.map((link) => (
              <React.Fragment key={link.label}>
                {link.subLinks ? (
                  <div className="flex flex-col items-center gap-3 w-full">
                    <span className="text-[10px] uppercase tracking-[0.3em] font-semibold text-peche/60 dark:text-laiton/60 border-b border-peche/10 dark:border-laiton/10 pb-2 w-full text-center">
                      {link.label}
                    </span>
                    {link.subLinks.map((sub) => (
                      <Link
                        key={sub.label}
                        href={sub.href}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="text-sm font-medium text-charcoal/70 dark:text-grege/80 hover:text-laiton dark:hover:text-laiton transition-colors"
                      >
                        {sub.label}
                      </Link>
                    ))}
                  </div>
                ) : (
                  <Link
                    href={link.href!}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-[11px] uppercase tracking-[0.25em] font-medium text-charcoal/70 dark:text-grege/80 hover:text-laiton dark:hover:text-laiton transition-colors"
                  >
                    {link.label}
                  </Link>
                )}
              </React.Fragment>
            ))}
          </nav>
          <a
            href="https://www.planity.com/edelys-coiffure-91590-la-ferte-alais"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full"
          >
            <Button variant="primary" fullWidth className="mt-4" icon={ArrowRight}>
              Réserver
            </Button>
          </a>
        </div>
      )}
    </header>
  );
};
