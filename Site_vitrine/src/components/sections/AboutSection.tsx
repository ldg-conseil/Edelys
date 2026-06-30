"use client";

import React from "react";
import { motion } from "framer-motion";
import { Heading, Text } from "@/components/ui/Typography";

export const AboutSection = () => {
  return (
    <section
      id="salon"
      className="py-24 md:py-32 px-6 bg-creme dark:bg-cinema-bg transition-colors duration-500 relative overflow-hidden"
    >
      {/* ── Décor arrière-plan ── */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-peche/[0.03] dark:bg-laiton/[0.03] rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-charcoal/[0.02] dark:bg-creme/[0.02] rounded-full blur-3xl translate-y-1/3 -translate-x-1/3 pointer-events-none" />

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 items-start relative z-10">
        {/* ── Colonne 1 : Le Salon ── */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-start"
        >
          <Heading level={2} number="02" className="mb-6 text-charcoal dark:text-creme">
            Votre salon expert au cœur de{" "}
            <span className="italic text-peche dark:text-laiton">La Ferté-Alais</span>
          </Heading>
          <div className="rule-accent mb-6" />
          <Text variant="body" className="mb-6 text-charcoal/80 dark:text-grege/80 leading-relaxed">
            Niché en plein cœur de La Ferté-Alais, entre la gare RER et le magnifique
            Château de Villiers, Edelys Coiffure est votre nouveau point de chute
            beauté incontournable. Notre salon mixte accueille toute la famille — femmes,
            hommes, adolescents et enfants — pour une parenthèse de soin et de détente absolue.
          </Text>
        </motion.div>

        {/* ── Colonne 2 : Engagements ── */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-col items-start bg-white/60 dark:bg-cinema-card/60 backdrop-blur-sm p-10 md:p-12 rounded-lg border border-charcoal/[0.06] dark:border-cinema-border"
          id="expertise"
        >
          <Text variant="overline" className="mb-4 text-peche dark:text-laiton">
            02&ensp;·&ensp;Nos Engagements
          </Text>
          <Heading level={3} className="mb-6 text-charcoal dark:text-creme">
            Ce qui nous rend{" "}
            <span className="uppercase tracking-widest font-sans font-light text-peche dark:text-laiton">
              Uniques
            </span>
          </Heading>
          <ul className="flex flex-col gap-4 w-full">
            {[
              "Expertise reconnue (4,9/5 sur 643 avis)",
              "Conseil personnalisé et sur-mesure",
              "Soins d&rsquo;exception Kérastase & L&rsquo;Oréal",
              "Ambiance chaleureuse et propreté (5/5)",
            ].map((item, index) => (
              <li
                key={index}
                className="flex items-center gap-4 text-sm md:text-base text-charcoal/80 dark:text-grege/80"
              >
                <div className="w-1.5 h-1.5 rounded-full bg-peche dark:bg-laiton shrink-0" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
};