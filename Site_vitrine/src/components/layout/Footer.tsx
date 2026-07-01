import React from "react";
import Link from "next/link";
import { MapPin, Phone } from "lucide-react";
import { Logo } from "@/components/ui/Logo";
import { Text } from "@/components/ui/Typography";

export const Footer = () => {
  return (
    <footer className="bg-charcoal dark:bg-black text-creme border-t border-grege/10 dark:border-cinema-border pt-20 pb-10 px-6 mt-auto">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
        {/* ── Marque ── */}
        <div className="flex flex-col items-start">
          <div className="bg-charcoal/80 dark:bg-cinema-card p-4 rounded-lg mb-6 inline-block">
            <Logo variant="square" size="md" withLink={false} />
          </div>
          <Text variant="body" className="text-grege/60 dark:text-grege/50">
            L&rsquo;architecture du cheveu d&rsquo;élite. Un moment de déconnexion
            absolue dans un cadre confidentiel.
          </Text>
        </div>

        {/* ── Navigation ── */}
        <div className="flex flex-col gap-3">
          <Text variant="label" className="mb-2 text-grege/50 dark:text-grege/40">
            Navigation
          </Text>
          {[
            { label: "À Propos", href: "/a-propos" },
            { label: "L&rsquo;équipe", href: "/equipe" },
            { label: "Prestations & Tarifs", href: "/prestations" },
            { label: "Contact", href: "/contact" },
          ].map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm text-grege/60 dark:text-grege/50 hover:text-laiton dark:hover:text-laiton transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* ── Horaires ── */}
        <div className="flex flex-col gap-2">
          <Text variant="label" className="mb-2 text-grege/50 dark:text-grege/40">
            Horaires
          </Text>
          <p className="text-sm text-grege/60 dark:text-grege/50">Lundi : 14h – 19h</p>
          <p className="text-sm text-grege/60 dark:text-grege/50">Mar – Ven : 9h30 – 19h</p>
          <p className="text-sm text-grege/60 dark:text-grege/50">Samedi : 9h – 17h</p>
          <p className="text-sm text-grege/60 dark:text-grege/50">Dimanche : Fermé</p>
        </div>

        {/* ── Contact ── */}
        <div className="flex flex-col gap-4">
          <Text variant="label" className="mb-2 text-grege/50 dark:text-grege/40">
            Contact
          </Text>
          <div className="flex items-start gap-3 text-sm text-grege/60 dark:text-grege/50">
            <MapPin className="w-4 h-4 text-laiton shrink-0 mt-0.5" />
            <span>
              2 Rue Eugène Millet
              <br />
              91590 La Ferté-Alais
            </span>
          </div>
          <div className="flex items-center gap-3 text-sm text-grege/60 dark:text-grege/50">
            <Phone className="w-4 h-4 text-laiton shrink-0" />
            <span>01 69 90 39 59</span>
          </div>
          {/* ── Réseau social ── */}
          <a
            href="https://instagram.com/edelyscoiffure91"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm text-grege/50 dark:text-grege/40 hover:text-laiton dark:hover:text-laiton transition-colors mt-2"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="15"
              height="15"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
              <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
            </svg>
            <span>@edelyscoiffure91</span>
          </a>
        </div>
      </div>

      {/* ── Barre inférieure ── */}
      <div className="max-w-7xl mx-auto pt-8 border-t border-grege/10 dark:border-cinema-border flex flex-col md:flex-row justify-between items-center gap-4">
        <Text variant="caption" className="text-grege/40 dark:text-grege/30">
          © {new Date().getFullYear()} Edelys Coiffure. Tous droits réservés.
        </Text>
        <div className="flex items-center gap-6">
          <Link
            href="/mentions-legales"
            className="text-xs text-grege/40 dark:text-grege/30 hover:text-laiton dark:hover:text-laiton transition-colors"
          >
            Mentions légales
          </Link>
          <Link
            href="/confidentialite"
            className="text-xs text-grege/40 dark:text-grege/30 hover:text-laiton dark:hover:text-laiton transition-colors"
          >
            Politique de confidentialité
          </Link>
        </div>
      </div>
    </footer>
  );
};
