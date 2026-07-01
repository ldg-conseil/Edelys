"use client";

import React from "react";
import { motion } from "framer-motion";
import { Heading, Text } from "@/components/ui/Typography";
import { Button } from "@/components/ui/Button";
import { ArrowRight, Scissors, Sparkles, Droplets } from "lucide-react";

export const ServicesPreview = () => {
  const services = [
    {
      title: "Coupe & Coiffage",
      description:
        "Une coupe sur-mesure adaptée à la morphologie de votre visage, accompagnée d&rsquo;un coiffage sublimateur.",
      icon: Scissors,
      link: "https://www.planity.com/edelys-coiffure-91590-la-ferte-alais",
    },
    {
      title: "Couleur & Lumière",
      description:
        "Coloration Majirel, balayages subtils et jeux d&rsquo;ombres pour illuminer votre chevelure avec naturel.",
      icon: Sparkles,
      link: "https://www.planity.com/edelys-coiffure-91590-la-ferte-alais",
    },
    {
      title: "Soin Profond Kérastase",
      description:
        "Un rituel de bien-être absolu incluant l&rsquo;analyse de votre cuir chevelu et un traitement haute performance.",
      icon: Droplets,
      link: "https://www.planity.com/edelys-coiffure-91590-la-ferte-alais",
    },
  ];

  return (
    <section
      id="prestations"
      className="py-24 md:py-32 px-6 bg-creme dark:bg-cinema-bg transition-colors duration-500 relative overflow-hidden"
    >
      {/* ── Décor de fond ── */}
      <div className="absolute -top-40 -right-40 w-[500px] h-[500px] bg-peche/[0.04] dark:bg-laiton/[0.03] rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-40 -left-40 w-[400px] h-[400px] bg-charcoal/[0.02] dark:bg-creme/[0.02] rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* ── En-tête ── */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-16 md:mb-20">
          <div className="text-center md:text-left max-w-xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
            >
              <Heading level={2} number="03" className="text-charcoal dark:text-creme">
                Nos{" "}
                <span className="italic text-peche dark:text-laiton">Prestations Phares</span>
              </Heading>
            </motion.div>
          </div>
          {/* Lien vers la carte complète */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-4 md:mt-0"
          >
            <a
              href="https://www.planity.com/edelys-coiffure-91590-la-ferte-alais"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 text-[10px] md:text-[11px] uppercase tracking-[0.25em] font-medium text-charcoal/50 dark:text-grege/50 hover:text-peche dark:hover:text-laiton transition-colors duration-300"
            >
              <span>Voir toute la carte</span>
              <ArrowRight className="w-3 h-3 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
          </motion.div>
        </div>

        {/* ── Grille ── */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: index * 0.12 }}
                className="group relative bg-white/80 dark:bg-cinema-card/80 backdrop-blur-sm p-8 md:p-10 rounded-lg border border-charcoal/[0.05] dark:border-cinema-border transition-all duration-500 hover:shadow-xl hover:shadow-charcoal/[0.04] dark:hover:shadow-black/[0.2] hover:-translate-y-1 hover:border-peche/30 dark:hover:border-laiton/30"
              >
                {/* Glow décoratif au hover */}
                <div className="absolute -inset-px rounded-lg bg-gradient-to-b from-peche/[0.07] to-transparent dark:from-laiton/[0.05] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                {/* Icône */}
                <div className="relative z-10 p-4 bg-white dark:bg-cinema-card rounded-md mb-8 shadow-sm group-hover:shadow-md group-hover:scale-105 transition-all duration-500 w-fit">
                  <Icon className="w-6 h-6 text-peche dark:text-laiton" />
                </div>

                {/* Titre */}
                <Heading level={4} className="relative z-10 mb-4 text-charcoal dark:text-creme">
                  {service.title}
                </Heading>

                {/* Description */}
                <Text
                  variant="body"
                  className="relative z-10 mb-10 text-charcoal/60 dark:text-grege/60 flex-grow"
                >
                  {service.description}
                </Text>

                {/* Bouton */}
                <div className="relative z-10">
                  <a
                    href={service.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button
                      variant="editorial"
                      size="sm"
                      icon={ArrowRight}
                      fullWidth
                    >
                      Réserver
                    </Button>
                  </a>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* ── CTA secondaire ── */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.5 }}
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
    </section>
  );
};
