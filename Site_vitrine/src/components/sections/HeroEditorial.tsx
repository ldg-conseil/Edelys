"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, Star } from "lucide-react";
import { MaskReveal } from "@/components/ui/Reveal";
import { Em } from "@/components/ui/Typography";
import { site } from "@/lib/site";

const EASE = [0.215, 0.61, 0.355, 1] as const;

export const HeroEditorial = () => {
  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden pt-28 pb-24 md:pt-32">
      {/* ── Rideau d'entrée · Voile de Crème ── */}
      <motion.div
        initial={{ y: 0 }}
        animate={{ y: "-100%" }}
        transition={{ duration: 1.1, ease: [0.7, 0, 0.3, 1], delay: 0.15 }}
        className="absolute inset-0 z-30 bg-grege dark:bg-cinema-card pointer-events-none"
      />

      {/* ── Monogramme EC en filigrane ── */}
      <div
        aria-hidden
        className="hidden lg:block absolute -right-16 top-1/2 -translate-y-1/2 text-stroke-number text-[38rem] leading-none pointer-events-none"
      >
        E
      </div>

      <div className="relative z-10 w-full max-w-[1400px] mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-14 lg:gap-10 items-center">
          {/* ── Colonne éditoriale ── */}
          <div className="lg:col-span-7 flex flex-col items-start">
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1, ease: EASE }}
              className="text-eyebrow text-[9px] md:text-[10px] text-charcoal/55 dark:text-grege/55 flex items-center gap-4 mb-8 md:mb-10"
            >
              <span className="w-10 h-px bg-peche dark:bg-laiton" />
              Salon de coiffure — {site.city}
            </motion.p>

            <MaskReveal
              as="h1"
              className="text-display-xl text-charcoal dark:text-creme"
              delay={1.1}
              lines={[
                <span key="l1">L&apos;architecture</span>,
                <span key="l2">
                  du <Em>cheveu.</Em>
                </span>,
              ]}
            />

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 1.5, ease: EASE }}
              className="font-sans font-light text-sm md:text-[15px] leading-[1.9] text-charcoal/65 dark:text-grege/65 max-w-md mt-8 md:mt-10"
            >
              Une équipe d&apos;expertes à votre écoute pour révéler la beauté
              unique de vos cheveux. Expertise clinique, soins Kérastase et
              moment de déconnexion absolue, au cœur de {site.city}.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 1.7, ease: EASE }}
              className="flex flex-wrap items-center gap-8 mt-10 md:mt-12"
            >
              <a
                href={site.planityUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-fill inline-flex items-center gap-3 rounded-full bg-peche text-charcoal hover:text-creme dark:hover:text-charcoal [--btn-fill-color:var(--color-charcoal)] dark:[--btn-fill-color:var(--color-creme)] text-[10px] font-sans font-semibold uppercase tracking-[0.18em] px-9 py-4 hover:shadow-[0_10px_20px_rgba(232,163,130,0.25)]"
              >
                <span>Prendre rendez-vous</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
              <Link
                href="/a-propos"
                className="link-underline text-eyebrow text-[9px] text-charcoal/60 dark:text-grege/60"
              >
                Découvrir le salon
              </Link>
            </motion.div>
          </div>

          {/* ── Colonne image · Fig. 01 ── */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.1, delay: 1.3, ease: EASE }}
            className="lg:col-span-4 lg:col-start-9"
          >
            <div className="relative">
              {/* Cadre décalé */}
              <div
                aria-hidden
                className="absolute -inset-px translate-x-4 translate-y-4 border border-peche/40 dark:border-laiton/30 rounded-sm pointer-events-none"
              />
              <div className="img-zoom relative aspect-[3/4] overflow-hidden rounded-sm">
                <Image
                  src="/images/blond-creme.jpg"
                  alt="Blond crème réalisé au salon Edelys Coiffure"
                  fill
                  priority
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 33vw"
                />
              </div>
              {/* Badge Kérastase */}
              <div className="absolute top-5 -left-3 md:-left-5 bg-charcoal dark:bg-creme text-creme dark:text-charcoal text-[8px] font-sans font-semibold uppercase tracking-[0.25em] px-4 py-2.5 rotate-180 text-vertical">
                Carecoach Kérastase
              </div>
            </div>
            <div className="flex items-baseline justify-between mt-4">
              <p className="font-sans text-[10px] tracking-[0.15em] uppercase text-charcoal/40 dark:text-grege/40">
                Fig. 01 — Blond crème glacé
              </p>
              <p className="font-serif italic text-sm text-peche dark:text-laiton">
                Notre signature
              </p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* ── Barre de méta inférieure ── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 2.1 }}
        className="absolute bottom-0 left-0 right-0 z-10"
      >
        <div className="max-w-[1400px] mx-auto px-6 md:px-10 py-5 border-t border-charcoal/10 dark:border-grege/10 flex items-center justify-between gap-6">
          <p className="hidden md:block font-sans text-[10px] tracking-[0.15em] uppercase text-charcoal/40 dark:text-grege/40">
            {site.address.street}, {site.address.zip} {site.address.city}
          </p>
          <p className="flex items-center gap-2 font-sans text-[10px] tracking-[0.15em] uppercase text-charcoal/55 dark:text-grege/55">
            <Star className="w-3 h-3 fill-laiton text-laiton" />
            {site.rating.score}/5 — {site.rating.count} avis
          </p>
          <div className="flex items-center gap-3">
            <span className="font-sans text-[10px] tracking-[0.25em] uppercase text-charcoal/40 dark:text-grege/40">
              Défiler
            </span>
            <motion.span
              animate={{ scaleY: [0.3, 1, 0.3] }}
              transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
              className="block w-px h-8 origin-top bg-peche dark:bg-laiton"
            />
          </div>
        </div>
      </motion.div>
    </section>
  );
};
