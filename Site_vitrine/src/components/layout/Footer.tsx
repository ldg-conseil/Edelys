import React from "react";
import Link from "next/link";
import { MapPin, Phone, Mail } from "lucide-react";
import { Logo } from "@/components/ui/Logo";
import { Text } from "@/components/ui/Typography";

export const Footer = () => {
  return (
    <footer className="bg-charcoal dark:bg-black text-creme border-t border-charcoal/10 dark:border-white/5 pt-20 pb-10 px-6 mt-auto">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
        
        {/* Brand Column */}
        <div className="col-span-1 md:col-span-1 flex flex-col items-start">
          <div className="bg-[#111] p-4 rounded-lg mb-6 inline-block">
             <Logo variant="square" size="md" withLink={false} />
          </div>
          <Text variant="body" className="text-grege/70">
            L'architecture du cheveu d'élite. Un moment de déconnexion absolue dans un cadre confidentiel.
          </Text>
        </div>

        {/* Links Column */}
        <div className="flex flex-col gap-4">
          <Text variant="overline" className="mb-2">Navigation</Text>
          <Link href="/#salon" className="text-sm text-grege/70 hover:text-peche transition-colors">Le Salon</Link>
          <Link href="/#expertise" className="text-sm text-grege/70 hover:text-peche transition-colors">Notre Expertise</Link>
          <Link href="/#prestations" className="text-sm text-grege/70 hover:text-peche transition-colors">La Carte & Tarifs</Link>
          <Link href="/#contact" className="text-sm text-grege/70 hover:text-peche transition-colors">Accès & Contact</Link>
        </div>

        {/* Contact Column */}
        <div className="flex flex-col gap-4">
          <Text variant="overline" className="mb-2">Contact</Text>
          <div className="flex items-start gap-3 text-sm text-grege/70">
            <MapPin className="w-5 h-5 text-peche shrink-0" />
            <span>123 Avenue de l'Élégance<br/>75000 Paris</span>
          </div>
          <div className="flex items-center gap-3 text-sm text-grege/70">
            <Phone className="w-5 h-5 text-peche shrink-0" />
            <span>01 23 45 67 89</span>
          </div>
          <div className="flex items-center gap-3 text-sm text-grege/70">
            <Mail className="w-5 h-5 text-peche shrink-0" />
            <span>contact@edelys-coiffure.fr</span>
          </div>
        </div>

        {/* Social Column */}
        <div className="flex flex-col gap-4">
          <Text variant="overline" className="mb-2">Suivez-nous</Text>
          <a 
            href="https://instagram.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-3 text-sm text-grege/70 hover:text-peche transition-colors group"
          >
            <div className="p-2 border border-grege/20 rounded-full group-hover:border-peche transition-colors flex items-center justify-center w-8 h-8">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-instagram">
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
              </svg>
            </div>
            <span>@edelyscoiffure</span>
          </a>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="max-w-7xl mx-auto pt-8 border-t border-grege/10 flex flex-col md:flex-row justify-between items-center gap-4">
        <Text variant="caption" className="text-grege/50">
          © {new Date().getFullYear()} Edelys Coiffure. Tous droits réservés.
        </Text>
        <div className="flex items-center gap-6">
          <Link href="/mentions-legales" className="text-xs text-grege/50 hover:text-peche transition-colors">Mentions légales</Link>
          <Link href="/confidentialite" className="text-xs text-grege/50 hover:text-peche transition-colors">Politique de confidentialité</Link>
        </div>
      </div>
    </footer>
  );
};
