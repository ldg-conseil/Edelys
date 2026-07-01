"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Heading, Text } from "@/components/ui/Typography";
import { Sparkles, Star, MapPin } from "lucide-react";

export const AboutSection = () => {
  return (
    <section
      id="salon"
      className="py-24 md:py-32 px-6 bg-creme dark:bg-cinema-bg transition-colors duration-500 relative overflow-hidden"
    >
      {/* ── Décor arrière-plan ── */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-peche/[0.03] dark:bg-laiton/[0.02] rounded-full blur-3xl -translate-y-1/2 translate-x-1/4 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-charcoal/[0.02] dark:bg-creme/[0.02] rounded-full blur-3xl translate-y-1/3 -translate-x-1/3 pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* ── En-tête ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="mb-16 text-center md:text-left"
        >
          <Heading level={2} number="02" className="text-charcoal dark:text-creme">
            Votre salon expert au cœur de{" "}
            <span className="italic text-peche dark:text-laiton">La Ferté-Alais</span>
          </Heading>
        </motion.div>

        {/* ── GRID BENTO : 2×2 asymétrique ── */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8">
          
          {/* ── Bloc 1 : Image Ambiance (span 7) ── */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="md:col-span-7 relative rounded-lg overflow-hidden aspect-[4/3] md:aspect-auto md:min-h-[400px] group cursor-pointer"
          >
            <Image
              src="/images/hero.jpg"
              alt="Ambiance Edelys Coiffure"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, 58vw"
            />
            {/* Overlay subtil au hover */}
            <div className="absolute inset-0 bg-gradient-to-t from-charcoal/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            {/* Badge localisation */}
            <div className="absolute bottom-4 left-4 flex items-center gap-2 px-3 py-1.5 bg-creme/80 dark:bg-cinema-card/80 backdrop-blur-sm rounded-full text-[10px] uppercase tracking-[0.15em] font-semibold text-charcoal/70 dark:text-grege/70">
              <MapPin className="w-3 h-3 text-peche dark:text-laiton" />
              <span>2 Rue Eugène Millet</span>
            </div>
          </motion.div>

          {/* ── Bloc 2 : Description Salon (span 5) ── */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="md:col-span-5 flex flex-col justify-center p-6 md:p-8"
          >
            <div className="rule-accent mb-6" />
            <Text variant="body" className="text-charcoal/80 dark:text-grege/80 leading-relaxed">
              Niché en plein cœur de La Ferté-Alais, entre la gare RER et le magnifique
              Château de Villiers, Edelys Coiffure est votre nouveau point de chute
              beauté incontournable. Notre salon mixte accueille toute la famille — femmes,
              hommes, adolescents et enfants — pour une parenthèse de soin et de détente absolue.
            </Text>
            {/* Badge Kérastase */}
            <div className="mt-6 flex items-center gap-2 px-4 py-2 bg-peche/10 dark:bg-laiton/10 rounded-full border border-peche/20 dark:border-laiton/20 self-start text-[10px] uppercase tracking-[0.15em] font-semibold text-peche dark:text-laiton">
              <Sparkles className="w-3 h-3" />
              <span>Carecoach Officiel Kérastase</span>
            </div>
          </motion.div>

          {/* ── Bloc 3 : Stats / Preuve sociale (span 5) ── */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="md:col-span-5 flex flex-col md:flex-row gap-4"
          >
            {/* Note */}
            <div className="flex-1 bg-white/70 dark:bg-cinema-card/70 backdrop-blur-sm p-6 md:p-8 rounded-lg border border-charcoal/[0.05] dark:border-cinema-border">
              <div className="flex items-center gap-3 mb-3">
                <div className="flex gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-laiton text-laiton" />
                  ))}
                </div>
                <span className="text-2xl font-serif font-semibold text-charcoal dark:text-creme">4,9</span>
              </div>
              <Text variant="caption" className="text-charcoal/50 dark:text-grege/50 uppercase tracking-[0.15em]">
                Basé sur <strong className="text-charcoal dark:text-creme">643 avis</strong>
              </Text>
            </div>
            {/* Années d'expertise */}
            <div className="flex-1 bg-white/70 dark:bg-cinema-card/70 backdrop-blur-sm p-6 md:p-8 rounded-lg border border-charcoal/[0.05] dark:border-cinema-border">
              <Text className="text-3xl font-serif font-semibold text-peche dark:text-laiton">15+</Text>
              <Text variant="caption" className="text-charcoal/50 dark:text-grege/50 uppercase tracking-[0.15em] mt-1">
                Années d&rsquo;expertise
              </Text>
            </div>
          </motion.div>

          {/* ── Bloc 4 : Engagements (span 7) ── */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="md:col-span-7 bg-white/70 dark:bg-cinema-card/70 backdrop-blur-sm p-8 md:p-10 rounded-lg border border-charcoal/[0.05] dark:border-cinema-border"
            id="expertise"
          >
            <Text variant="label" className="mb-6 text-peche dark:text-laiton">
              Ce qui nous rend uniques
            </Text>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { label: "Expertise reconnue", value: "4,9/5 · 643 avis" },
                { label: "Conseil personnalisé", value: "Sur-mesure" },
                { label: "Soins d&rsquo;exception", value: "Kérastase & L&rsquo;Oréal" },
                { label: "Ambiance & Propreté", value: "Noté 5/5" },
              ].map((item, index) => (
                <div
                  key={index}
                  className="flex items-center gap-4 p-4 rounded-md bg-charcoal/[0.02] dark:bg-white/[0.02] border border-charcoal/[0.04] dark:border-cinema-border"
                >
                  <div className="w-2 h-2 rounded-full bg-peche dark:bg-laiton shrink-0" />
                  <div>
                    <Text className="text-sm font-medium text-charcoal dark:text-creme">
                      {item.label}
                    </Text>
                    <Text variant="caption" className="text-charcoal/50 dark:text-grege/50">
                      {item.value}
                    </Text>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};