"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Heading, Text } from "@/components/ui/Typography";
import { Button } from "@/components/ui/Button";
import { ArrowRight, Sparkles } from "lucide-react";

export const HeroSection = () => {
  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero.jpg"
          alt="L'ambiance Edelys Coiffure"
          fill
          priority
          className="object-cover object-center"
        />
        {/* Overlay pour garantir la lisibilité du texte (dégradé sombre) */}
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal/90 via-charcoal/40 to-transparent dark:from-black/90 dark:via-black/60 dark:to-transparent" />
      </div>

      {/* Animation "Voile de Crème" d'entrée */}
      <motion.div
        initial={{ y: 0 }}
        animate={{ y: "-100%" }}
        transition={{ duration: 1.2, ease: [0.7, 0, 0.3, 1], delay: 0.2 }}
        className="absolute inset-0 z-20 bg-creme dark:bg-dark-bg"
      />

      {/* Contenu principal */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 pt-20 text-center flex flex-col items-center">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="mb-4"
        >
          <Text variant="overline" className="text-peche tracking-[0.3em] uppercase mb-4 inline-block">
            La Ferté-Alais
          </Text>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
        >
          <Heading level={1} className="text-creme max-w-4xl mx-auto mb-6 drop-shadow-md">
            L'architecture du cheveu <span className="italic text-peche">d'élite</span>
          </Heading>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.4 }}
        >
          <Text variant="body" className="text-creme/90 max-w-2xl mx-auto mb-10 text-lg md:text-xl">
            Un moment de déconnexion absolue. Profitez de notre expertise sur-mesure et de nos soins profonds Kérastase dans un cadre confidentiel.
          </Text>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.6 }}
          className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
        >
          <a href="https://www.planity.com/edelys-coiffure-91590-la-ferte-alais" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
            <Button variant="primary" size="lg" icon={ArrowRight} fullWidth>
              Prendre Rendez-vous
            </Button>
          </a>
          <a href="#expertise" className="w-full sm:w-auto">
            <Button variant="outline" size="lg" icon={Sparkles} fullWidth className="text-creme border-creme hover:bg-white/10 dark:text-creme dark:border-creme dark:hover:bg-white/10">
              Notre Expertise
            </Button>
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 2.2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2"
      >
        <Text variant="caption" className="text-creme/60 uppercase tracking-widest text-[10px]">Découvrir</Text>
        <motion.div 
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
          className="w-[1px] h-12 bg-gradient-to-b from-peche to-transparent"
        />
      </motion.div>
    </section>
  );
};
