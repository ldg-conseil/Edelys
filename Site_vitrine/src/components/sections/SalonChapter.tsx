"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Reveal, MaskReveal } from "@/components/ui/Reveal";
import { Eyebrow, Em } from "@/components/ui/Typography";
import { site } from "@/lib/site";

const engagements = [
  "Salon mixte & familial — femmes, hommes, ados, enfants",
  "Diagnostic du cuir chevelu Kérastase offert",
  "Conseil sur-mesure avant chaque prestation",
  "Carecoach officiel Kérastase & coloriste L'Oréal",
];

const stats = [
  { value: "4,9", unit: "/5", label: `${site.rating.count} avis Google` },
  { value: "15", unit: "+", label: "années d'expertise" },
  { value: "4", unit: "", label: "expertes passionnées" },
];

export const SalonChapter = () => {
  return (
    <section id="salon" className="relative py-28 md:py-40 overflow-hidden">
      {/* ── Numéro de chapitre en filigrane ── */}
      <div
        aria-hidden
        className="absolute -left-6 top-16 text-stroke-number text-[11rem] md:text-[17rem] leading-none pointer-events-none"
      >
        01
      </div>

      <div className="relative max-w-[1400px] mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-14 lg:gap-8">
          {/* ── Image façade + statistiques ── */}
          <div className="lg:col-span-6 order-2 lg:order-1">
            <Reveal>
              <div className="img-zoom relative aspect-[4/3] overflow-hidden rounded-sm">
                <Image
                  src="/images/salon-facade.jpg"
                  alt="La façade du salon Edelys Coiffure à La Ferté-Alais"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
              <p className="font-sans text-[10px] tracking-[0.15em] uppercase text-charcoal/40 dark:text-grege/40 mt-4">
                Fig. 02 — {site.address.street}, {site.city}
              </p>
            </Reveal>

            {/* ── Statistiques en chiffres éditoriaux ── */}
            <Reveal delay={0.15} className="grid grid-cols-3 gap-6 mt-12 md:mt-16">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="border-t border-charcoal/15 dark:border-grege/15 pt-5"
                >
                  <p className="font-serif font-light text-4xl md:text-5xl text-charcoal dark:text-creme leading-none">
                    {stat.value}
                    <span className="text-peche dark:text-laiton text-2xl md:text-3xl">
                      {stat.unit}
                    </span>
                  </p>
                  <p className="text-eyebrow text-[8px] md:text-[9px] text-charcoal/45 dark:text-grege/45 mt-3">
                    {stat.label}
                  </p>
                </div>
              ))}
            </Reveal>
          </div>

          {/* ── Colonne éditoriale ── */}
          <div className="lg:col-span-5 lg:col-start-8 order-1 lg:order-2 flex flex-col justify-center">
            <Reveal>
              <Eyebrow number="01">Le Salon</Eyebrow>
            </Reveal>

            <MaskReveal
              as="h2"
              className="text-display-lg text-charcoal dark:text-creme mt-8"
              delay={0.1}
              lines={[
                <span key="l1">Un écrin au cœur</span>,
                <span key="l2">
                  de <Em>{site.city}.</Em>
                </span>,
              ]}
            />

            <Reveal delay={0.25}>
              <p className="font-sans font-light text-sm md:text-[15px] leading-[1.9] text-charcoal/65 dark:text-grege/65 mt-8 max-w-md">
                Niché entre la gare et le château de Villiers, Edelys Coiffure
                accueille toute la famille pour une parenthèse de soin et de
                détente. Ici, chaque prestation commence par une écoute
                attentive — parce que votre coiffure doit s&apos;accorder à vos
                goûts, votre quotidien et la nature de vos cheveux.
              </p>
            </Reveal>

            {/* ── Engagements en lignes fines ── */}
            <Reveal delay={0.35} className="mt-10">
              <ul>
                {engagements.map((item, i) => (
                  <li
                    key={i}
                    className="group flex items-baseline gap-5 border-t last:border-b border-charcoal/10 dark:border-grege/10 py-4"
                  >
                    <span className="font-serif italic text-sm text-peche dark:text-laiton shrink-0 w-6">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="font-sans font-light text-[13px] text-charcoal/75 dark:text-grege/75 leading-relaxed">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal delay={0.45} className="mt-10">
              <Link
                href="/a-propos"
                className="link-underline text-eyebrow text-[9px] text-charcoal/60 dark:text-grege/60"
              >
                Notre philosophie
              </Link>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
};
