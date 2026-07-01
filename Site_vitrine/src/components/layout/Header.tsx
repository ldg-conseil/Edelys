"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { ThemeToggle } from "@/components/ui/ThemeToggle";
import { site, navigation } from "@/lib/site";

const EASE = [0.215, 0.61, 0.355, 1] as const;

/* ── Wordmark typographique ── */
const Wordmark = ({ onNavigate }: { onNavigate?: () => void }) => (
  <Link
    href="/"
    onClick={onNavigate}
    className="group flex flex-col leading-none z-[70] relative"
  >
    <span className="font-serif text-2xl md:text-[26px] font-light tracking-wide text-charcoal dark:text-creme transition-colors duration-500">
      Edelys
    </span>
    <span className="text-eyebrow text-[8px] mt-1 text-peche dark:text-laiton">
      Coiffure
    </span>
  </Link>
);

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();
  const isHomePage = pathname === "/";

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 40);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  /* Bloquer le scroll quand le menu plein écran est ouvert */
  useEffect(() => {
    document.documentElement.style.overflow = isMenuOpen ? "hidden" : "";
    return () => {
      document.documentElement.style.overflow = "";
    };
  }, [isMenuOpen]);

  const solid = isScrolled || !isHomePage || isMenuOpen;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
        solid && !isMenuOpen
          ? "bg-creme/85 dark:bg-cinema-bg/85 backdrop-blur-xl border-b border-charcoal/[0.07] dark:border-cinema-border py-4"
          : "bg-transparent py-6 md:py-8"
      }`}
    >
      <div className="max-w-[1400px] mx-auto px-6 md:px-10 flex items-center justify-between">
        <Wordmark onNavigate={() => setIsMenuOpen(false)} />

        {/* ── Navigation desktop : liens soulignés animés ── */}
        <nav className="hidden lg:flex items-center gap-10">
          {navigation.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`link-underline text-eyebrow text-[9px] transition-colors duration-300 ${
                pathname === link.href
                  ? "text-peche dark:text-laiton"
                  : "text-charcoal/70 hover:text-charcoal dark:text-grege/70 dark:hover:text-creme"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* ── Actions ── */}
        <div className="flex items-center gap-3 md:gap-5">
          <ThemeToggle />
          <a
            href={site.planityUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:inline-flex btn-fill items-center gap-2.5 rounded-full bg-peche text-charcoal hover:text-creme dark:hover:text-charcoal [--btn-fill-color:var(--color-charcoal)] dark:[--btn-fill-color:var(--color-creme)] text-[9px] font-sans font-semibold uppercase tracking-[0.18em] px-6 py-3"
          >
            <span>Réserver</span>
            <ArrowUpRight className="w-3 h-3" />
          </a>

          {/* ── Déclencheur menu (mobile + tablette) ── */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? "Fermer le menu" : "Ouvrir le menu"}
            aria-expanded={isMenuOpen}
            className="lg:hidden relative z-[70] flex flex-col items-end justify-center gap-[7px] w-10 h-10"
          >
            <span
              className={`block h-px bg-charcoal dark:bg-creme transition-all duration-500 ${
                isMenuOpen ? "w-7 rotate-45 translate-y-[4px]" : "w-7"
              }`}
            />
            <span
              className={`block h-px bg-charcoal dark:bg-creme transition-all duration-500 ${
                isMenuOpen ? "w-7 -rotate-45 -translate-y-[4px]" : "w-5"
              }`}
            />
          </button>
        </div>
      </div>

      {/* ── Menu plein écran ── */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ clipPath: "inset(0 0 100% 0)" }}
            animate={{ clipPath: "inset(0 0 0% 0)" }}
            exit={{ clipPath: "inset(0 0 100% 0)" }}
            transition={{ duration: 0.7, ease: [0.7, 0, 0.3, 1] }}
            className="fixed inset-0 z-[60] bg-creme dark:bg-cinema-bg bg-grain lg:hidden flex flex-col"
          >
            <div className="flex-1 flex flex-col justify-center px-8 pt-24">
              <p className="text-eyebrow text-[9px] text-peche dark:text-laiton mb-8">
                Menu — {site.city}
              </p>
              <nav className="flex flex-col gap-2">
                {navigation.map((link, i) => (
                  <div key={link.href} className="overflow-hidden">
                    <motion.div
                      initial={{ y: "110%" }}
                      animate={{ y: "0%" }}
                      exit={{ y: "110%", transition: { duration: 0.3 } }}
                      transition={{ duration: 0.8, delay: 0.15 + i * 0.08, ease: EASE }}
                    >
                      <Link
                        href={link.href}
                        onClick={() => setIsMenuOpen(false)}
                        className={`flex items-baseline gap-4 font-serif font-light text-5xl leading-[1.15] transition-colors duration-300 ${
                          pathname === link.href
                            ? "text-peche dark:text-laiton italic"
                            : "text-charcoal dark:text-creme"
                        }`}
                      >
                        <span className="font-sans text-[10px] tracking-[0.3em] text-charcoal/35 dark:text-grege/35">
                          0{i + 1}
                        </span>
                        {link.label}
                      </Link>
                    </motion.div>
                  </div>
                ))}
              </nav>
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0, transition: { duration: 0.2 } }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="px-8 pb-10 flex flex-col gap-6"
            >
              <a
                href={site.planityUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-fill inline-flex items-center justify-center gap-3 rounded-full bg-peche text-charcoal hover:text-creme dark:hover:text-charcoal [--btn-fill-color:var(--color-charcoal)] dark:[--btn-fill-color:var(--color-creme)] text-[10px] font-sans font-semibold uppercase tracking-[0.18em] px-8 py-4"
              >
                <span>Réserver sur Planity</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
              <div className="flex items-end justify-between border-t border-charcoal/10 dark:border-grege/10 pt-5">
                <p className="font-sans text-xs font-light text-charcoal/50 dark:text-grege/50 leading-relaxed">
                  {site.address.street}
                  <br />
                  {site.address.zip} {site.address.city}
                </p>
                <a
                  href={site.instagram.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-underline text-eyebrow text-[9px] text-charcoal/60 dark:text-grege/60"
                >
                  Instagram
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
