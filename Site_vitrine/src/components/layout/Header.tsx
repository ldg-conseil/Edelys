"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown } from "lucide-react";
import { Logo } from "@/components/ui/Logo";
import { Button } from "@/components/ui/Button";
import { ThemeToggle } from "@/components/ui/ThemeToggle";

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const isHomePage = pathname === "/";

  // Gérer l'opacité au scroll (Glassmorphism)
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Le header doit apparaître "scrolled" (fond solide/flou + texte contrasté)
  // soit si l'utilisateur a défilé, soit s'il est sur une page interne.
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

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
        shouldShowScrolledHeader
          ? "bg-creme/85 dark:bg-dark-bg/85 backdrop-blur-md border-b border-charcoal/5 dark:border-white/5 py-3 shadow-sm"
          : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <Logo variant="round" size="sm" />

        {/* Navigation Desktop */}
        <nav className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <div key={link.label} className="relative group">
              {link.subLinks ? (
                <>
                  <span className={`cursor-pointer flex items-center gap-1 text-[11px] uppercase tracking-[0.2em] font-semibold transition-colors py-2 ${
                    shouldShowScrolledHeader
                      ? "text-charcoal/80 dark:text-grege hover:text-peche dark:hover:text-peche"
                      : "text-white/90 hover:text-peche dark:text-white/90 dark:hover:text-peche"
                  }`}>
                    {link.label}
                    <ChevronDown className="w-3 h-3 transition-transform duration-300 group-hover:rotate-180" />
                  </span>
                  {/* Dropdown Menu */}
                  <div className="absolute top-full left-1/2 -translate-x-1/2 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                    <div className="bg-white/95 dark:bg-[#1A1A1A]/95 border border-charcoal/10 dark:border-white/10 rounded-xl shadow-xl py-3 flex flex-col min-w-[220px] backdrop-blur-md">
                      {link.subLinks.map((sub) => (
                        <Link
                          key={sub.label}
                          href={sub.href}
                          className="text-xs font-semibold text-charcoal/80 dark:text-grege/90 hover:text-peche dark:hover:text-peche hover:bg-black/5 dark:hover:bg-white/5 transition-colors px-5 py-2.5"
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
                  className={`text-[11px] uppercase tracking-[0.2em] font-semibold transition-colors py-2 block ${
                    shouldShowScrolledHeader
                      ? "text-charcoal/80 dark:text-grege hover:text-peche dark:hover:text-peche"
                      : "text-white/90 hover:text-peche dark:text-white/90 dark:hover:text-peche"
                  }`}
                >
                  {link.label}
                </Link>
              )}
            </div>
          ))}
        </nav>

        {/* Actions (Desktop) */}
        <div className="hidden md:flex items-center gap-4">
          <ThemeToggle />
          <Button variant="primary" size="sm">
            Réserver
          </Button>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="flex md:hidden items-center gap-4">
          <ThemeToggle />
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-charcoal dark:text-creme p-2"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-creme dark:bg-[#1A1A1A] border-b border-charcoal/5 dark:border-white/5 p-6 shadow-xl flex flex-col gap-6 md:hidden animate-in fade-in slide-in-from-top-2 duration-300 max-h-[80vh] overflow-y-auto">
          <nav className="flex flex-col gap-8 items-center pt-4">
            {navLinks.map((link) => (
              <React.Fragment key={link.label}>
                {link.subLinks ? (
                  <div className="flex flex-col items-center gap-4 w-full">
                    <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-peche/70 flex items-center gap-1 border-b border-peche/20 pb-2 w-full justify-center">
                      {link.label}
                    </span>
                    {link.subLinks.map((sub) => (
                      <Link
                        key={sub.label}
                        href={sub.href}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="text-sm font-semibold text-charcoal dark:text-grege hover:text-peche dark:hover:text-peche transition-colors"
                      >
                        {sub.label}
                      </Link>
                    ))}
                  </div>
                ) : (
                  <Link
                    href={link.href!}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-[10px] uppercase tracking-[0.2em] font-semibold text-charcoal dark:text-grege hover:text-peche dark:hover:text-peche transition-colors"
                  >
                    {link.label}
                  </Link>
                )}
              </React.Fragment>
            ))}
          </nav>
          <Button variant="primary" fullWidth className="mt-4">
            Réserver
          </Button>
        </div>
      )}
    </header>
  );
};
