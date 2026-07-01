"use client";

import React from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Reveal, MaskReveal } from "@/components/ui/Reveal";
import { Eyebrow, Em } from "@/components/ui/Typography";
import { site } from "@/lib/site";

/* ── Index éditorial des prestations ── */
const services = [
  {
    name: "Coupe & Coiffage",
    detail: "Shampooing, coupe sur-mesure, brushing sublimateur",
    price: "26 – 52 €",
  },
  {
    name: "Couleur & Patine",
    detail: "Majirel, INOA sans ammoniaque, patines nuancées",
    price: "dès 62 €",
  },
  {
    name: "Balayage & Mèches",
    detail: "Forfaits mèches + brushing, jeux de lumière naturels",
    price: "72 – 125 €",
  },
  {
    name: "Rituels Kérastase",
    detail: "Diagnostic offert, Première, Chronologiste Caviar",
    price: "50 – 90 €",
  },
  {
    name: "Chignons & Mariage",
    detail: "Attaches élaborées, forfait mariée complet",
    price: "35 – 150 €",
  },
  {
    name: "Hommes & Enfants",
    detail: "Coupes hommes, ados, enfants et bébés",
    price: "13 – 29 €",
  },
];

export const ServicesChapter = () => {
  return (
    <section id="prestations" className="relative py-28 md:py-40 overflow-hidden">
      <div
        aria-hidden
        className="absolute -right-10 top-10 text-stroke-number text-[11rem] md:text-[17rem] leading-none pointer-events-none"
      >
        02
      </div>

      <div className="relative max-w-[1400px] mx-auto px-6 md:px-10">
        {/* ── En-tête de chapitre ── */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-16 md:mb-24">
          <div>
            <Reveal>
              <Eyebrow number="02">La Carte</Eyebrow>
            </Reveal>
            <MaskReveal
              as="h2"
              className="text-display-lg text-charcoal dark:text-creme mt-8"
              delay={0.1}
              lines={[
                <span key="l1">
                  Le geste juste, <Em>au prix juste.</Em>
                </span>,
              ]}
            />
          </div>
          <Reveal delay={0.2}>
            <Link
              href="/prestations"
              className="link-underline text-eyebrow text-[9px] text-charcoal/60 dark:text-grege/60 whitespace-nowrap"
            >
              Consulter la carte complète
            </Link>
          </Reveal>
        </div>

        {/* ── Index des prestations ── */}
        <Reveal>
          <ul>
            {services.map((service, i) => (
              <li key={service.name}>
                <Link
                  href="/prestations"
                  className="group grid grid-cols-[auto_1fr_auto] md:grid-cols-[3rem_1fr_1fr_auto] items-baseline gap-x-4 md:gap-x-8 border-t last:border-b border-charcoal/10 dark:border-grege/10 py-7 md:py-9 transition-colors duration-500 hover:bg-white/60 dark:hover:bg-cinema-card/60 px-2 md:px-4 -mx-2 md:-mx-4"
                >
                  <span className="font-sans text-[10px] tracking-[0.2em] text-charcoal/35 dark:text-grege/35">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="font-serif font-light text-2xl md:text-4xl text-charcoal dark:text-creme leading-tight transition-all duration-500 group-hover:italic group-hover:text-peche dark:group-hover:text-laiton">
                    {service.name}
                  </h3>
                  <p className="hidden md:block font-sans font-light text-[13px] text-charcoal/50 dark:text-grege/50">
                    {service.detail}
                  </p>
                  <span className="flex items-baseline gap-4 justify-self-end">
                    <span className="font-serif italic text-lg md:text-xl text-charcoal/70 dark:text-grege/70 whitespace-nowrap">
                      {service.price}
                    </span>
                    <ArrowUpRight className="hidden md:block w-4 h-4 self-center text-peche dark:text-laiton opacity-0 -translate-x-2 transition-all duration-500 group-hover:opacity-100 group-hover:translate-x-0" />
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </Reveal>

        {/* ── Note tarifaire + CTA ── */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8 mt-12 md:mt-16">
          <Reveal delay={0.1}>
            <p className="font-sans font-light text-xs text-charcoal/45 dark:text-grege/45 max-w-sm leading-relaxed">
              Tarifs indicatifs, variables selon la longueur et la densité du
              cheveu. Un devis précis vous est proposé au salon avant chaque
              prestation technique.
            </p>
          </Reveal>
          <Reveal delay={0.2}>
            <a
              href={site.planityUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-fill inline-flex items-center gap-3 rounded-full border border-charcoal/20 dark:border-grege/25 text-charcoal/80 dark:text-grege/80 hover:text-charcoal dark:hover:text-charcoal hover:border-peche dark:hover:border-laiton [--btn-fill-color:var(--color-peche)] dark:[--btn-fill-color:var(--color-laiton)] text-[10px] font-sans font-semibold uppercase tracking-[0.18em] px-9 py-4"
            >
              <span>Réserver un créneau</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  );
};
