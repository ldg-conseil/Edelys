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
      {/* ── Image de fond ── */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero.png"
          alt="L'ambiance Edelys Coiffure"
          fill
          priority
          className="object-cover object-bottom"
        />
        {/* Overlay Clair : dégradé chaud et doux */}
        <div className="absolute inset-0 bg-gradient-to-b from-creme/30 via-creme/15 to-creme/5 dark:hidden" />
        <div className="absolute inset-0 bg-gradient-to-r from-peche/[0.07] via-transparent to-peche/[0.07] dark:hidden" />
        {/* Overlay Sombre : cinématographique */}
        <div className="hidden dark:block absolute inset-0 bg-gradient-to-t from-cinema-bg/95 via-cinema-bg/50 to-cinema-bg/60" />
        <div className="hidden dark:block absolute inset-0 bg-gradient-to-r from-laiton/5 via-transparent to-laiton/5" />
        {/* Protection header */}
        <div className="absolute top-0 left-0 right-0 h-48 bg-gradient-to-b from-charcoal/40 dark:from-cinema-bg/70 to-transparent pointer-events-none" />
      </div>

      {/* ── Rideau d'entrée ── */}
      <motion.div
        initial={{ y: 0 }}
        animate={{ y: "-100%" }}
        transition={{ duration: 1.2, ease: [0.7, 0, 0.3, 1], delay: 0.2 }}
        className="absolute inset-0 z-20 bg-creme dark:bg-cinema-bg"
      />

      {/* ── Badge Kérastase (top right) ── */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 1.6 }}
        className="absolute top-28 right-6 z-10 hidden md:flex items-center gap-2 px-4 py-2 bg-creme/80 dark:bg-cinema-card/80 backdrop-blur-md rounded-full border border-peche/20 dark:border-laiton/20 text-[10px] uppercase tracking-[0.15em] font-semibold text-charcoal/70 dark:text-grege/70"
      >
        <Sparkles className="w-3 h-3 text-peche dark:text-laiton" />
        <span>Carecoach Officiel <span className="text-peche dark:text-laiton">Kérastase</span></span>
      </motion.div>

      {/* ── Contenu ── */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 pt-32 md:pt-40 text-center flex flex-col items-center">
        {/* Overline + numéro éditorial */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="mb-6"
        >
          <Text variant="overline" className="text-peche dark:text-laiton tracking-[0.35em] inline-block">
            01&ensp;·&ensp;La Ferté-Alais
          </Text>
        </motion.div>

        {/* Titre */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
        >
          <Heading
            level={1}
            className="text-charcoal dark:text-creme max-w-4xl mx-auto mb-6 drop-shadow-sm dark:drop-shadow-md"
          >
            L&rsquo;architecture{" "}
            <span className="italic text-peche dark:text-laiton">du cheveu d&rsquo;élite</span>
          </Heading>
        </motion.div>

        {/* Sous-titre */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.4 }}
        >
          <Text
            variant="subtitle"
            className="text-charcoal/80 dark:text-grege/80 max-w-2xl mx-auto mb-10"
          >
            Une équipe d&rsquo;expertes à votre écoute pour révéler la beauté unique
            de vos cheveux, dans un cadre chaleureux et convivial.
          </Text>
        </motion.div>

        {/* Ligne décorative */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.6, delay: 1.5 }}
          className="rule-accent mb-10"
        />

        {/* Boutons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.6 }}
          className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto items-center"
        >
          <a
            href="https://www.planity.com/edelys-coiffure-91590-la-ferte-alais"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto"
          >
            <Button variant="primary" size="lg" icon={ArrowRight} fullWidth>
              Prendre Rendez-vous
            </Button>
          </a>
          <a href="#expertise" className="w-full sm:w-auto">
            <Button
              variant="editorial"
              size="lg"
              icon={ArrowRight}
              fullWidth
              className="text-charcoal/70 dark:text-grege/70"
            >
              Notre Expertise
            </Button>
          </a>
        </motion.div>
      </div>

      {/* ── Indicateur de scroll ── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 2.2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2"
      >
        <Text variant="caption" className="text-charcoal/40 dark:text-grege/40 uppercase tracking-widest text-[10px]">
          Découvrir
        </Text>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
          className="w-[1px] h-12 bg-gradient-to-b from-peche dark:from-laiton to-transparent"
        />
      </motion.div>
    </section>
  );
};
