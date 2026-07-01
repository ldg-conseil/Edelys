"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Heading, Text } from '@/components/ui/Typography';
import { ArrowRight, Sparkles, User, Baby, FlaskConical } from 'lucide-react';

/* ── Illustrations SVG ── */

const FemmesIllustration = () => (
  <svg viewBox="0 0 200 200" className="w-full h-full" fill="none">
    <circle cx="100" cy="100" r="90" className="fill-peche/10 dark:fill-laiton/10" />
    <circle cx="100" cy="85" r="25" className="fill-peche/30 dark:fill-laiton/30" />
    <ellipse cx="100" cy="140" rx="35" ry="20" className="fill-peche/20 dark:fill-laiton/20" />
    <path d="M80 105 Q100 120 120 105" stroke="currentColor" className="text-peche dark:text-laiton" strokeWidth="2" fill="none" />
    <path d="M60 95 Q50 80 65 70" className="stroke-peche/40 dark:stroke-laiton/40" strokeWidth="2" fill="none" />
    <path d="M140 95 Q150 80 135 70" className="stroke-peche/40 dark:stroke-laiton/40" strokeWidth="2" fill="none" />
  </svg>
);

const HommesIllustration = () => (
  <svg viewBox="0 0 200 200" className="w-full h-full" fill="none">
    <circle cx="100" cy="100" r="90" className="fill-peche/10 dark:fill-laiton/10" />
    <circle cx="100" cy="85" r="25" className="fill-peche/30 dark:fill-laiton/30" />
    <rect x="70" y="95" width="60" height="25" rx="5" className="fill-peche/15 dark:fill-laiton/15" />
    <path d="M85 110 Q100 125 115 110" stroke="currentColor" className="text-peche dark:text-laiton" strokeWidth="2" fill="none" />
  </svg>
);

const EnfantsIllustration = () => (
  <svg viewBox="0 0 200 200" className="w-full h-full" fill="none">
    <circle cx="100" cy="100" r="90" className="fill-peche/10 dark:fill-laiton/10" />
    <circle cx="85" cy="85" r="18" className="fill-peche/25 dark:fill-laiton/25" />
    <circle cx="115" cy="90" r="15" className="fill-peche/20 dark:fill-laiton/20" />
    <ellipse cx="85" cy="125" rx="22" ry="15" className="fill-peche/15 dark:fill-laiton/15" />
    <ellipse cx="115" cy="125" rx="18" ry="12" className="fill-peche/10 dark:fill-laiton/10" />
    <path d="M90 105 Q100 115 110 105" stroke="currentColor" className="text-peche dark:text-laiton" strokeWidth="1.5" fill="none" />
  </svg>
);

const SoinsIllustration = () => (
  <svg viewBox="0 0 200 200" className="w-full h-full" fill="none">
    <circle cx="100" cy="100" r="90" className="fill-peche/10 dark:fill-laiton/10" />
    <rect x="80" y="60" width="40" height="60" rx="5" className="fill-peche/25 dark:fill-laiton/25" />
    <rect x="65" y="75" width="70" height="6" rx="3" className="fill-peche/15 dark:fill-laiton/15" />
    <circle cx="90" cy="80" r="4" className="fill-peche/40 dark:fill-laiton/40" />
    <circle cx="110" cy="85" r="3" className="fill-peche/40 dark:fill-laiton/40" />
    <ellipse cx="100" cy="135" rx="30" ry="8" className="fill-peche/10 dark:fill-laiton/10" />
  </svg>
);

/* ── Composants ── */

const CategoryCard = ({ title, icon: Icon, illustration: Illustration, children }: { title: string; icon: React.ElementType; illustration: React.ComponentType; children: React.ReactNode }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-80px" }}
    transition={{ duration: 0.6 }}
    className="relative bg-white/80 dark:bg-cinema-card/80 backdrop-blur-sm rounded-lg border border-charcoal/[0.05] dark:border-cinema-border overflow-hidden group hover:shadow-lg transition-all duration-500"
  >
    <div className="h-1 bg-gradient-to-r from-peche/40 to-peche/10 dark:from-laiton/40 dark:to-laiton/10" />
    <div className="p-8 md:p-10">
      <div className="flex items-start gap-6 mb-8">
        <div className="relative w-20 h-20 md:w-24 md:h-24 shrink-0">
          <Illustration />
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-3 mb-2">
            <div className="p-2 bg-peche/10 dark:bg-laiton/10 rounded-md">
              <Icon className="w-5 h-5 text-peche dark:text-laiton" />
            </div>
            <Heading level={3} className="text-charcoal dark:text-creme text-xl md:text-2xl">
              {title}
            </Heading>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-5">
        {children}
      </div>
    </div>
  </motion.div>
);

const ServiceRow = ({ name, price, description }: { name: string; price: string; description?: string }) => (
  <div className="group/item">
    <div className="flex justify-between items-baseline gap-4">
      <Text className="text-sm md:text-base font-medium text-charcoal/80 dark:text-creme/80 group-hover/item:text-peche dark:group-hover/item:text-laiton transition-colors duration-300">
        {name}
      </Text>
      <Text className="text-sm md:text-base font-semibold text-peche dark:text-laiton whitespace-nowrap tabular-nums">
        {price}
      </Text>
    </div>
    {description && (
      <Text variant="caption" className="text-charcoal/40 dark:text-grege/40 mt-0.5 line-clamp-1">
        {description}
      </Text>
    )}
  </div>
);

/* ── Services ── */

const soinsBar = [
  { name: "Diagnostic Cuir Chevelu Kérastase", price: "Offert", desc: "Analyse personnalisée de votre fibre." },
  { name: "Soin Première Kérastase", price: "60-70 €", desc: "Recrée 96% de la force d'un cheveu sain." },
  { name: "Soin Absolut Repair Molecular", price: "50-60 €", desc: "Répare la structure moléculaire en profondeur." },
  { name: "Soin Caviar Chronologiste", price: "90 €", desc: "Le summum de la régénération capillaire." },
  { name: "Cryothérapie Capillaire", price: "Sur devis", desc: "Traitement révolutionnaire par le froid." },
  { name: "Fusio-Dose / Soins profonds", price: "7-18 €", desc: "Cocktail sur-mesure au fauteuil." },
];

export default function PrestationsContent() {
  return (
    <div className="bg-creme dark:bg-cinema-bg py-24 sm:py-32 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-peche/[0.03] dark:bg-laiton/[0.02] rounded-full blur-3xl -translate-y-1/3 translate-x-1/3 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-charcoal/[0.02] dark:bg-creme/[0.02] rounded-full blur-3xl translate-y-1/3 -translate-x-1/3 pointer-events-none" />

      <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl mx-auto text-center mb-16"
        >
          <Heading level={1} number="01" className="text-charcoal dark:text-creme">
            Prestations{" "}
            <span className="italic text-peche dark:text-laiton">&amp; Tarifs</span>
          </Heading>
          <Text variant="body" className="mt-6 text-charcoal/60 dark:text-grege/60 max-w-lg mx-auto">
            Des soins sur-mesure pour chaque membre de la famille. Tarifs indicatifs variables selon la longueur.
          </Text>
          <div className="rule-accent mx-auto mt-8" />
        </motion.div>

        <div className="space-y-8 md:space-y-10">
          <CategoryCard title="Espace Femmes" icon={User} illustration={FemmesIllustration}>
            <ServiceRow name="Shampooing - Brushing" price="26-41 €" />
            <ServiceRow name="Shampooing - Coupe - Séchage" price="31-43 €" />
            <ServiceRow name="Shampooing - Coupe - Brushing" price="36-52 €" />
            <ServiceRow name="Ciseaux chauffants haircut" price="+10 €" description="Scelle les pointes pour éviter les fourches." />
            <ServiceRow name="Couleur Majirel (L'Oréal)" price="dès 62 €" />
            <ServiceRow name="Couleur INOA (Sans ammoniaque)" price="dès 65 €" />
            <ServiceRow name="Forfait Mèches + Brushing" price="72-125 €" />
            <ServiceRow name="Patine" price="20-30 €" description="Soin nuances légères." />
            <ServiceRow name="Décoloration (racines 3 cm max)" price="35-55 €" />
            <ServiceRow name="Chignon élaboré" price="35-60 €" />
            <ServiceRow name="Forfait Mariage complet" price="150 €" />
          </CategoryCard>

          <CategoryCard title="Espace Hommes & Ados" icon={User} illustration={HommesIllustration}>
            <ServiceRow name="Shampooing + Coupe + Coiffage" price="23 €" />
            <ServiceRow name="Coupe Homme (mi-longs / longs)" price="29 €" />
            <ServiceRow name="Coupe Adolescent (13-18 ans)" price="21 €" />
            <ServiceRow name="Shampooing + Coupe + Permanente" price="75 €" />
            <ServiceRow name="Couleur de Barbe" price="Sur devis" />
          </CategoryCard>

          <CategoryCard title="Espace Enfants" icon={Baby} illustration={EnfantsIllustration}>
            <ServiceRow name="Bébés (- de 3 ans)" price="13 €" />
            <ServiceRow name="Garçon (- de 13 ans)" price="18 €" />
            <ServiceRow name="Fille (- de 13 ans)" price="27 €" description="Coupe + séchage naturel." />
          </CategoryCard>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className="relative bg-gradient-to-br from-peche/[0.04] to-peche/[0.01] dark:from-laiton/[0.04] dark:to-laiton/[0.01] rounded-lg border border-peche/15 dark:border-laiton/15 overflow-hidden group hover:shadow-lg transition-all duration-500"
          >
            <div className="h-1 bg-gradient-to-r from-peche to-laiton dark:from-laiton dark:to-peche" />
            <div className="p-8 md:p-10">
              <div className="flex items-start gap-6 mb-8">
                <div className="relative w-20 h-20 md:w-24 md:h-24 shrink-0">
                  <SoinsIllustration />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="p-2 bg-peche/15 dark:bg-laiton/15 rounded-md">
                      <FlaskConical className="w-5 h-5 text-peche dark:text-laiton" />
                    </div>
                    <Heading level={3} className="text-charcoal dark:text-creme text-xl md:text-2xl">
                      Bar à Soins Haute Performance
                    </Heading>
                  </div>
                  <Text variant="caption" className="text-charcoal/50 dark:text-grege/50">
                    Rituels Kérastase sur-mesure
                  </Text>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {soinsBar.map((item, i) => (
                  <div key={i} className="bg-white/60 dark:bg-cinema-card/60 p-5 rounded-lg border border-charcoal/[0.04] dark:border-cinema-border hover:border-peche/30 dark:hover:border-laiton/30 transition-all duration-300">
                    <div className="flex justify-between items-baseline mb-1">
                      <Text className="text-sm font-medium text-charcoal dark:text-creme/90">{item.name}</Text>
                      <Text className="text-sm font-semibold text-peche dark:text-laiton whitespace-nowrap tabular-nums">{item.price}</Text>
                    </div>
                    <Text variant="caption" className="text-charcoal/40 dark:text-grege/40 text-xs">{item.desc}</Text>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 text-center"
        >
          <a
            href="https://www.planity.com/edelys-coiffure-91590-la-ferte-alais"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 bg-peche/10 dark:bg-laiton/10 rounded-full border border-peche/20 dark:border-laiton/20 text-[10px] md:text-[11px] uppercase tracking-[0.25em] font-semibold text-peche dark:text-laiton hover:bg-peche/20 dark:hover:bg-laiton/20 transition-all duration-300"
          >
            <Sparkles className="w-3 h-3" />
            <span>Réserver sur Planity</span>
            <ArrowRight className="w-3 h-3" />
          </a>
        </motion.div>
      </div>
    </div>
  );
}
