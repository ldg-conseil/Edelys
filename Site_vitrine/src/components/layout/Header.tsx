"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { Logo } from "@/components/ui/Logo";
import { Button } from "@/components/ui/Button";
import { ThemeToggle } from "@/components/ui/ThemeToggle";

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Gérer l'opacité au scroll (Glassmorphism)
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Le Salon", href: "/#salon" },
    { label: "L'Expertise", href: "/#expertise" },
    { label: "La Carte", href: "/#prestations" },
    { label: "Contact", href: "/#contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
        isScrolled
          ? "bg-creme/80 dark:bg-dark-bg/80 backdrop-blur-md border-b border-charcoal/5 dark:border-white/5 py-3 shadow-sm"
          : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <Logo variant="round" size="sm" />

        {/* Navigation Desktop */}
        <nav className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-[10px] uppercase tracking-[0.2em] font-semibold text-charcoal/80 dark:text-grege hover:text-peche dark:hover:text-peche transition-colors"
            >
              {link.label}
            </Link>
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
        <div className="absolute top-full left-0 right-0 bg-creme dark:bg-dark-card border-b border-charcoal/5 dark:border-white/5 p-6 shadow-xl flex flex-col gap-6 md:hidden animate-in fade-in slide-in-from-top-2 duration-300">
          <nav className="flex flex-col gap-6 items-center">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-xs uppercase tracking-[0.2em] font-semibold text-charcoal dark:text-grege hover:text-peche dark:hover:text-peche transition-colors"
              >
                {link.label}
              </Link>
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
