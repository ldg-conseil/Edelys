"use client";

import React from "react";
import { motion } from "framer-motion";
import { Heading, Text } from "@/components/ui/Typography";

export const AboutSection = () => {
  return (
    <section id="salon" className="py-24 md:py-32 px-6 bg-creme dark:bg-dark-bg transition-colors duration-500 relative overflow-hidden">
      
      {/* Élément décoratif en arrière-plan */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-peche/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-charcoal/5 dark:bg-creme/5 rounded-full blur-3xl translate-y-1/3 -translate-x-1/3 pointer-events-none" />

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 items-center relative z-10">
        
        {/* Colonne Texte : Le Salon */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-start"
        >
          <Text variant="overline" className="mb-4">Le Salon</Text>
          <Heading level={2} className="mb-6 text-charcoal dark:text-creme">
            L'excellence capillaire à <span className="italic text-peche">La Ferté-Alais</span>
          </Heading>
          <Text variant="body" className="mb-6 text-charcoal/80 dark:text-grege">
            Niché au cœur de La Ferté-Alais, Edelys Coiffure est bien plus qu'un salon. C'est un écrin de "Quiet Luxury" où le temps s'arrête. Nous avons conçu ce lieu pour vous offrir un moment de déconnexion absolue dans une atmosphère feutrée et bienveillante.
          </Text>
          <Text variant="body" className="text-charcoal/80 dark:text-grege">
            Notre philosophie repose sur l'écoute attentive et le diagnostic sur-mesure, garantissant à chaque client un résultat à la hauteur de ses exigences.
          </Text>
        </motion.div>

        {/* Colonne Texte : Kérastase / Expertise */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-col items-start bg-white/50 dark:bg-[#111]/50 backdrop-blur-sm p-10 md:p-12 rounded-2xl border border-charcoal/5 dark:border-white/5 shadow-sm"
          id="expertise"
        >
          <Text variant="overline" className="mb-4 text-peche">Ambassadeur Officiel</Text>
          <Heading level={3} className="mb-6 text-charcoal dark:text-creme">
            Expertise <span className="uppercase tracking-widest font-sans font-light">Kérastase</span>
          </Heading>
          <Text variant="body" className="mb-6 text-charcoal/80 dark:text-grege">
            En tant que partenaire exclusif Kérastase, nous allions la science cosmétique de pointe à des rituels sensoriels inoubliables. 
          </Text>
          <ul className="flex flex-col gap-4 w-full">
            {[
              "Diagnostic capillaire avancé",
              "Soins profonds sur-mesure",
              "Suivi beauté personnalisé"
            ].map((item, index) => (
              <li key={index} className="flex items-center gap-4 text-sm md:text-base text-charcoal dark:text-creme">
                <div className="w-1.5 h-1.5 rounded-full bg-peche shrink-0" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </motion.div>

      </div>
    </section>
  );
};
