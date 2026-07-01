"use client";

import React from "react";
import Image from "next/image";
import { Reveal, MaskReveal } from "@/components/ui/Reveal";
import { Eyebrow, Em } from "@/components/ui/Typography";
import { site } from "@/lib/site";

/* ── Réalisations du salon (Instagram) ── */
const works = [
  {
    src: "/images/balayage-signature.jpg",
    alt: "Balayage blond ondulé réalisé au salon",
    caption: "Fig. 04 — Balayage signature, ondulations souples",
    span: "md:col-span-7",
    aspect: "aspect-[4/5]",
    treatment: "img-reveal-color",
  },
  {
    src: "/images/coupe-homme.jpg",
    alt: "Coupe homme texturée avec dégradé bas",
    caption: "Fig. 05 — Coupe texturée, dégradé bas",
    span: "md:col-span-5 md:mt-24",
    aspect: "aspect-[3/4]",
    treatment: "img-reveal-color",
  },
  {
    src: "/images/couleur-creative.jpg",
    alt: "Coloration créative multicolore",
    caption: "Fig. 06 — Couleur créative, arc-en-ciel pastel",
    span: "md:col-span-5",
    aspect: "aspect-[3/4]",
    treatment: "img-reveal-color",
  },
  {
    src: "/images/avant-apres.jpg",
    alt: "Avant / après d'une transformation balayage blond",
    caption: "Fig. 07 — Transformation, avant / après",
    span: "md:col-span-7 md:-mt-24",
    aspect: "aspect-[4/5] md:aspect-[3/4]",
    treatment: "img-zoom",
  },
];

export const GalleryChapter = () => {
  return (
    <section className="relative py-28 md:py-40 overflow-hidden">
      <div
        aria-hidden
        className="absolute -right-10 top-16 text-stroke-number text-[11rem] md:text-[17rem] leading-none pointer-events-none"
      >
        04
      </div>

      <div className="relative max-w-[1400px] mx-auto px-6 md:px-10">
        {/* ── En-tête de chapitre ── */}
        <div className="max-w-2xl mb-16 md:mb-24">
          <Reveal>
            <Eyebrow number="04">Réalisations</Eyebrow>
          </Reveal>
          <MaskReveal
            as="h2"
            className="text-display-lg text-charcoal dark:text-creme mt-8"
            delay={0.1}
            lines={[
              <span key="l1">La matière et</span>,
              <span key="l2">
                la <Em>lumière.</Em>
              </span>,
            ]}
          />
          <Reveal delay={0.25}>
            <p className="font-sans font-light text-sm md:text-[15px] leading-[1.9] text-charcoal/65 dark:text-grege/65 mt-8 max-w-md">
              Chaque chevelure est une architecture singulière. Extraits de
              notre journal de salon — survolez pour révéler la couleur.
            </p>
          </Reveal>
        </div>

        {/* ── Mosaïque éditoriale ── */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-x-6 gap-y-14 md:gap-y-6">
          {works.map((work, i) => (
            <Reveal key={work.src} delay={i * 0.08} className={work.span}>
              <figure>
                <div
                  className={`${work.treatment} relative ${work.aspect} overflow-hidden rounded-sm`}
                >
                  <Image
                    src={work.src}
                    alt={work.alt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
                <figcaption className="font-sans text-[10px] tracking-[0.15em] uppercase text-charcoal/40 dark:text-grege/40 mt-4">
                  {work.caption}
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>

        {/* ── Renvoi Instagram ── */}
        <Reveal className="mt-16 md:mt-20 flex justify-center">
          <a
            href={site.instagram.url}
            target="_blank"
            rel="noopener noreferrer"
            className="link-underline text-eyebrow text-[9px] text-charcoal/60 dark:text-grege/60"
          >
            Le journal complet — Instagram {site.instagram.handle}
          </a>
        </Reveal>
      </div>
    </section>
  );
};
