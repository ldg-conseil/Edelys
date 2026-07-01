import React from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { site, navigation } from "@/lib/site";

/* ============================================================
   FOOTER — papier sombre, wordmark monumental
   ============================================================ */

export const Footer = () => {
  return (
    <footer className="relative bg-charcoal dark:bg-black text-creme overflow-hidden mt-auto">
      <div className="bg-grain-cinema absolute inset-0 pointer-events-none" />

      <div className="relative max-w-[1400px] mx-auto px-6 md:px-10 pt-20 md:pt-28 pb-10">
        {/* ── Invitation ── */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-10 pb-16 md:pb-24 border-b border-creme/10">
          <div>
            <p className="text-eyebrow text-[9px] text-laiton mb-6">
              Prendre rendez-vous
            </p>
            <p className="font-serif font-light text-4xl md:text-6xl leading-[1.05] max-w-xl">
              Offrez à vos cheveux{" "}
              <em className="italic text-peche">un moment d&apos;exception.</em>
            </p>
          </div>
          <div className="flex flex-col items-start gap-4 shrink-0">
            <a
              href={site.planityUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-fill inline-flex items-center gap-3 rounded-full bg-peche text-charcoal hover:text-charcoal [--btn-fill-color:var(--color-laiton)] text-[10px] font-sans font-semibold uppercase tracking-[0.18em] px-9 py-4"
            >
              <span>Réserver sur Planity</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
            <a
              href={site.phoneHref}
              className="link-underline text-eyebrow text-[9px] text-creme/60 ml-2"
            >
              {site.phone}
            </a>
          </div>
        </div>

        {/* ── Colonnes ── */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-12 py-14 md:py-20">
          <div className="col-span-2 md:col-span-1">
            <p className="font-serif text-2xl font-light leading-none">Edelys</p>
            <p className="text-eyebrow text-[8px] text-peche mt-2">Coiffure</p>
            <p className="font-sans text-xs font-light text-creme/50 leading-[1.9] mt-6 max-w-[240px]">
              Salon mixte & familial, ambassadeur Kérastase.
              L&apos;architecture du cheveu au cœur de {site.city}.
            </p>
          </div>

          <div>
            <p className="text-eyebrow text-[9px] text-creme/40 mb-6">Navigation</p>
            <ul className="flex flex-col gap-3">
              {navigation.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="link-underline font-sans text-[13px] font-light text-creme/70 hover:text-creme transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-eyebrow text-[9px] text-creme/40 mb-6">Horaires</p>
            <ul className="flex flex-col gap-3">
              {site.hours.map((h) => (
                <li key={h.days} className="font-sans text-[13px] font-light">
                  <span className="text-creme/70">{h.days}</span>
                  <br />
                  <span className="text-creme/40 text-xs">{h.slots}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-eyebrow text-[9px] text-creme/40 mb-6">Contact</p>
            <address className="not-italic font-sans text-[13px] font-light text-creme/70 leading-[1.9]">
              {site.address.street}
              <br />
              {site.address.zip} {site.address.city}
            </address>
            <a
              href={site.phoneHref}
              className="block font-sans text-[13px] font-light text-creme/70 hover:text-laiton transition-colors mt-3"
            >
              {site.phone}
            </a>
            <a
              href={site.instagram.url}
              target="_blank"
              rel="noopener noreferrer"
              className="link-underline inline-block text-eyebrow text-[9px] text-creme/60 mt-5"
            >
              {site.instagram.handle}
            </a>
          </div>
        </div>

        {/* ── Wordmark monumental ── */}
        <div aria-hidden className="select-none pointer-events-none overflow-hidden -mx-6 md:-mx-10">
          <p className="font-serif font-light text-center leading-[0.8] text-[18vw] tracking-tight text-creme/[0.06] translate-y-[12%]">
            Edelys
          </p>
        </div>

        {/* ── Barre inférieure ── */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 pt-8 border-t border-creme/10">
          <p className="font-sans text-[11px] font-light text-creme/35">
            © {new Date().getFullYear()} {site.name} — Tous droits réservés
          </p>
          <div className="flex items-center gap-8">
            <Link
              href="/mentions-legales"
              className="font-sans text-[11px] font-light text-creme/35 hover:text-creme/70 transition-colors"
            >
              Mentions légales
            </Link>
            <Link
              href="/confidentialite"
              className="font-sans text-[11px] font-light text-creme/35 hover:text-creme/70 transition-colors"
            >
              Confidentialité
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
