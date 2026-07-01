"use client";

import React from "react";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { Reveal, MaskReveal } from "@/components/ui/Reveal";
import { site } from "@/lib/site";

/* ── Rituels du bar à soins ── */
const rituels = [
  { name: "Diagnostic du cuir chevelu", price: "Offert" },
  { name: "Soin Première", price: "60 – 70 €" },
  { name: "Absolut Repair Molecular", price: "50 – 60 €" },
  { name: "Caviar Chronologiste", price: "90 €" },
  { name: "Cryothérapie capillaire", price: "Sur devis" },
];

export const KerastaseChapter = () => {
  return (
    <section className="relative bg-charcoal dark:bg-black text-creme overflow-hidden py-28 md:py-40">
      {/* Grain cinématographique + halo doré */}
      <div className="bg-grain-cinema absolute inset-0 pointer-events-none" />
      <div
        aria-hidden
        className="absolute top-1/3 -left-40 w-[500px] h-[500px] bg-laiton/[0.06] rounded-full blur-3xl pointer-events-none"
      />
      <div
        aria-hidden
        className="absolute -left-8 bottom-10 font-serif font-light text-[11rem] md:text-[17rem] leading-none text-transparent pointer-events-none select-none [-webkit-text-stroke:1px_rgba(212,175,55,0.15)]"
      >
        03
      </div>

      <div className="relative max-w-[1400px] mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-14 lg:gap-8 items-center">
          {/* ── Colonne éditoriale ── */}
          <div className="lg:col-span-6">
            <Reveal>
              <p className="text-eyebrow flex items-center gap-4 text-creme/50">
                <span className="text-laiton font-serif text-base font-normal tracking-normal leading-none">
                  03
                </span>
                <span className="w-8 h-px bg-creme/20" />
                <span>Le Rituel — Clair-Obscur</span>
              </p>
            </Reveal>

            <MaskReveal
              as="h2"
              className="text-display-lg text-creme mt-8"
              delay={0.1}
              lines={[
                <span key="l1">La science Kérastase,</span>,
                <em key="l2" className="italic font-normal text-laiton">
                  le geste Edelys.
                </em>,
              ]}
            />

            <Reveal delay={0.25}>
              <p className="font-sans font-light text-sm md:text-[15px] leading-[1.9] text-creme/60 mt-8 max-w-md">
                En tant que Carecoach officiel Kérastase, nous commençons chaque
                rituel par une analyse de votre cuir chevelu et de votre fibre —
                offerte. Le soin est ensuite composé sur-mesure, au fauteuil,
                comme une formule de laboratoire.
              </p>
            </Reveal>

            {/* ── Rituels en lignes fines ── */}
            <Reveal delay={0.35} className="mt-10 max-w-md">
              <ul>
                {rituels.map((rituel) => (
                  <li
                    key={rituel.name}
                    className="flex items-baseline justify-between gap-6 border-t last:border-b border-creme/10 py-4"
                  >
                    <span className="font-sans font-light text-[13px] text-creme/75">
                      {rituel.name}
                    </span>
                    <span className="font-serif italic text-base text-laiton whitespace-nowrap">
                      {rituel.price}
                    </span>
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal delay={0.45} className="mt-10">
              <a
                href={site.planityUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-fill inline-flex items-center gap-3 rounded-full bg-laiton text-charcoal hover:text-charcoal [--btn-fill-color:var(--color-peche)] text-[10px] font-sans font-semibold uppercase tracking-[0.18em] px-9 py-4"
              >
                <span>Réserver un rituel</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </Reveal>
          </div>

          {/* ── Image backstage ── */}
          <div className="lg:col-span-5 lg:col-start-8">
            <Reveal delay={0.2}>
              <div className="relative">
                <div
                  aria-hidden
                  className="absolute -inset-px -translate-x-4 translate-y-4 border border-laiton/25 rounded-sm pointer-events-none"
                />
                <div className="img-zoom relative aspect-[3/4] overflow-hidden rounded-sm">
                  <Image
                    src="/images/kerastase-backstage.jpg"
                    alt="Gamme Kérastase Nutritive photographiée en backstage au salon"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 42vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal/50 via-transparent to-transparent" />
                </div>
              </div>
              <p className="font-sans text-[10px] tracking-[0.15em] uppercase text-creme/35 mt-4">
                Fig. 03 — Backstage, gamme Nutritive
              </p>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
};
