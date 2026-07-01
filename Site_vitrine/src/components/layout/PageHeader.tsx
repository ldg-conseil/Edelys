"use client";

import React from "react";
import { motion } from "framer-motion";
import { Reveal, MaskReveal } from "@/components/ui/Reveal";
import { Eyebrow } from "@/components/ui/Typography";

/* ============================================================
   EN-TÊTE DE PAGE — chapitre éditorial des pages intérieures
   ============================================================ */

interface PageHeaderProps {
  number?: string;
  eyebrow: string;
  /** Lignes du titre, révélées par masque */
  lines: React.ReactNode[];
  lead?: React.ReactNode;
  /** Filigrane décoratif (une lettre ou un chiffre) */
  watermark?: string;
}

export const PageHeader: React.FC<PageHeaderProps> = ({
  number,
  eyebrow,
  lines,
  lead,
  watermark,
}) => (
  <header className="relative pt-36 md:pt-48 pb-14 md:pb-20 overflow-hidden">
    {watermark && (
      <div
        aria-hidden
        className="hidden md:block absolute -right-8 -top-8 text-stroke-number text-[16rem] lg:text-[22rem] leading-none pointer-events-none"
      >
        {watermark}
      </div>
    )}

    <div className="relative max-w-[1400px] mx-auto px-6 md:px-10">
      <Reveal y={16}>
        <Eyebrow number={number}>{eyebrow}</Eyebrow>
      </Reveal>

      <MaskReveal
        as="h1"
        className="text-display-xl text-charcoal dark:text-creme mt-8"
        delay={0.15}
        lines={lines}
      />

      {lead && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.5, ease: [0.215, 0.61, 0.355, 1] }}
          className="font-sans font-light text-sm md:text-[15px] leading-[1.9] text-charcoal/65 dark:text-grege/65 max-w-lg mt-8"
        >
          {lead}
        </motion.div>
      )}
    </div>
  </header>
);
