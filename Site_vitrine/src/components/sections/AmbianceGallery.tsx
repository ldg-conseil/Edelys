"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Heading, Text } from "@/components/ui/Typography";

const gallery = [
  {
    src: "/images/699432452_1683211217140957_1726246625509319892_n.jpg",
    alt: "Ambiance Edelys Coiffure",
    span: "md:col-span-2 md:row-span-2",
  },
  {
    src: "/images/team/alisson.jpg",
    alt: "Alisson - Responsable du salon",
    span: "md:col-span-1 md:row-span-1",
  },
  {
    src: "/images/hero.jpg",
    alt: "Atmosphère du salon",
    span: "md:col-span-1 md:row-span-1",
  },
];

export const AmbianceGallery = () => {
  return (
    <section className="py-24 md:py-32 px-6 bg-white dark:bg-[#0C0B09] transition-colors duration-500">
      <div className="max-w-7xl mx-auto">
        {/* ── En-tête ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="mb-16 text-center"
        >
          <Heading level={2} number="—" className="text-charcoal dark:text-creme max-w-2xl mx-auto">
            L&rsquo;atmosphère{" "}
            <span className="italic text-peche dark:text-laiton">Edelys</span>
          </Heading>
          <Text variant="body" className="mt-4 text-charcoal/60 dark:text-grege/60 max-w-lg mx-auto">
            Un cadre pensé pour votre bien-être, entre expertise technique et art de recevoir.
          </Text>
        </motion.div>

        {/* ── Grille mosaïque ── */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {gallery.map((img, index) => (
            <motion.div
              key={img.src}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className={`relative rounded-lg overflow-hidden group cursor-pointer aspect-[4/3] md:aspect-auto ${img.span} min-h-[200px] md:min-h-[280px]`}
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover transition-all duration-700 group-hover:scale-110"
                sizes="(max-width: 768px) 50vw, 33vw"
              />
              {/* Overlay élégant au hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-2 group-hover:translate-y-0">
                <Text variant="caption" className="text-creme/90 text-[11px] uppercase tracking-[0.15em] font-semibold">
                  {img.alt}
                </Text>
              </div>
            </motion.div>
          ))}
        </div>

        {/* ── Lien vers l'équipe ── */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-12 text-center"
        >
          <a
            href="/equipe"
            className="inline-flex items-center gap-2 text-[10px] md:text-[11px] uppercase tracking-[0.25em] font-medium text-charcoal/50 dark:text-grege/50 hover:text-peche dark:hover:text-laiton transition-colors duration-300"
          >
            <span>Découvrir notre équipe</span>
            <span className="w-8 h-[1px] bg-peche dark:bg-laiton inline-block" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};
