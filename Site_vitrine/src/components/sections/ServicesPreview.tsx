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
      description: "Une coupe sur-mesure adaptée à la morphologie de votre visage, accompagnée d'un coiffage sublimateur.",
      icon: Scissors,
      link: "https://www.planity.com/edelys-coiffure-91590-la-ferte-alais"
    },
    {
      title: "Couleur & Lumière",
      description: "Coloration Majirel, balayages subtils et jeux d'ombres pour illuminer votre chevelure avec naturel.",
      icon: Sparkles,
      link: "https://www.planity.com/edelys-coiffure-91590-la-ferte-alais"
    },
    {
      title: "Soin Profond Kérastase",
      description: "Un rituel de bien-être absolu incluant l'analyse de votre cuir chevelu et un traitement haute performance.",
      icon: Droplets,
      link: "https://www.planity.com/edelys-coiffure-91590-la-ferte-alais"
    }
  ];

  return (
    <section id="prestations" className="py-24 md:py-32 px-6 bg-white dark:bg-[#0a0a0a] transition-colors duration-500">
      <div className="max-w-7xl mx-auto">
        
        {/* En-tête de section */}
        <div className="text-center mb-16 md:mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <Text variant="overline" className="mb-4">La Carte</Text>
            <Heading level={2} className="text-charcoal dark:text-creme max-w-2xl mx-auto">
              Nos <span className="italic text-peche">Prestations Phares</span>
            </Heading>
          </motion.div>
        </div>

        {/* Grille de services */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="group flex flex-col items-start bg-creme/50 dark:bg-[#111] p-10 rounded-2xl border border-charcoal/5 dark:border-white/5 hover:border-peche/50 dark:hover:border-peche/50 transition-colors"
              >
                <div className="p-4 bg-white dark:bg-black rounded-full mb-8 shadow-sm group-hover:scale-110 transition-transform duration-500">
                  <Icon className="w-6 h-6 text-peche" />
                </div>
                
                <Heading level={4} className="mb-4 text-charcoal dark:text-creme">
                  {service.title}
                </Heading>
                
                <Text variant="body" className="mb-8 text-charcoal/70 dark:text-grege flex-grow">
                  {service.description}
                </Text>

                <a href={service.link} target="_blank" rel="noopener noreferrer" className="w-full mt-auto">
                  <Button variant="outline" size="md" icon={ArrowRight} fullWidth className="group-hover:bg-peche group-hover:text-charcoal group-hover:border-peche transition-colors">
                    Réserver
                  </Button>
                </a>
              </motion.div>
            );
          })}
        </div>

        {/* Call to action global */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <a href="https://www.planity.com/edelys-coiffure-91590-la-ferte-alais" target="_blank" rel="noopener noreferrer">
            <Button variant="primary" size="lg">
              Voir toute la carte sur Planity
            </Button>
          </a>
        </motion.div>

      </div>
    </section>
  );
};
