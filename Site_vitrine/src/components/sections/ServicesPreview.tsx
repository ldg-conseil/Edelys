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
      className="py-24 md:py-32 px-6 bg-white dark:bg-[#0C0B09] transition-colors duration-500"
    >
      <div className="max-w-7xl mx-auto">
        {/* ── En-tête ── */}
        <div className="text-center mb-16 md:mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <Heading level={2} number="03" className="text-charcoal dark:text-creme max-w-2xl mx-auto">
              Nos{" "}
              <span className="italic text-peche dark:text-laiton">Prestations Phares</span>
            </Heading>
          </motion.div>
        </div>

        {/* ── Grille éditoriale ── */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay: index * 0.15 }}
                className="group flex flex-col items-start bg-creme/60 dark:bg-cinema-card/60 p-10 rounded-lg border border-charcoal/[0.05] dark:border-cinema-border hover:border-peche/30 dark:hover:border-laiton/30 transition-all duration-500 hover:shadow-md"
              >
                {/* Icône */}
                <div className="p-4 bg-white dark:bg-cinema-card rounded-md mb-8 shadow-sm group-hover:scale-105 transition-transform duration-500">
                  <Icon className="w-6 h-6 text-peche dark:text-laiton" />
                </div>

                {/* Titre */}
                <Heading level={4} className="mb-4 text-charcoal dark:text-creme">
                  {service.title}
                </Heading>

                {/* Description */}
                <Text
                  variant="body"
                  className="mb-8 text-charcoal/60 dark:text-grege/60 flex-grow"
                >
                  {service.description}
                </Text>

                {/* Bouton */}
                <a
                  href={service.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full mt-auto"
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
              </motion.div>
            );
          })}
        </div>

        {/* ── CTA Global ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <a
            href="https://www.planity.com/edelys-coiffure-91590-la-ferte-alais"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button variant="rose-gold" size="md" icon={ArrowRight}>
              Voir toute la carte sur Planity
            </Button>
          </a>
        </motion.div>
      </div>
    </section>
  );
};
