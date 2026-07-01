"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Reveal, MaskReveal } from "@/components/ui/Reveal";
import { Eyebrow, Em } from "@/components/ui/Typography";

const team = [
  {
    name: "Alisson",
    role: "Responsable du salon",
    image: "/images/team/alisson.jpg",
    offset: "",
  },
  {
    name: "Coralie",
    role: "Experte capillaire",
    image: "/images/team/coralie.jpg",
    offset: "md:mt-14",
  },
  {
    name: "Cynthia",
    role: "Spécialiste couleur",
    image: "/images/team/cynthia.jpg",
    offset: "md:mt-6",
  },
  {
    name: "Shanice",
    role: "Experte soin & coupe",
    image: "/images/team/shanice.jpg",
    offset: "md:mt-20",
  },
];

export const TeamChapter = () => {
  return (
    <section className="relative py-28 md:py-40 overflow-hidden bg-[var(--paper)] transition-colors duration-500">
      <div
        aria-hidden
        className="absolute -left-6 top-16 text-stroke-number text-[11rem] md:text-[17rem] leading-none pointer-events-none"
      >
        05
      </div>

      <div className="relative max-w-[1400px] mx-auto px-6 md:px-10">
        {/* ── En-tête de chapitre ── */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-16 md:mb-24">
          <div>
            <Reveal>
              <Eyebrow number="05">L&apos;Équipe</Eyebrow>
            </Reveal>
            <MaskReveal
              as="h2"
              className="text-display-lg text-charcoal dark:text-creme mt-8"
              delay={0.1}
              lines={[
                <span key="l1">
                  Quatre expertes, <Em>une signature.</Em>
                </span>,
              ]}
            />
          </div>
          <Reveal delay={0.2}>
            <Link
              href="/equipe"
              className="link-underline text-eyebrow text-[9px] text-charcoal/60 dark:text-grege/60 whitespace-nowrap"
            >
              Rencontrer l&apos;équipe
            </Link>
          </Reveal>
        </div>

        {/* ── Portraits décalés ── */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-12">
          {team.map((person, i) => (
            <Reveal key={person.name} delay={i * 0.1} className={person.offset}>
              <Link href="/equipe" className="group block">
                <div className="img-reveal-color relative aspect-[3/4] overflow-hidden rounded-sm">
                  <Image
                    src={person.image}
                    alt={`${person.name} — ${person.role}`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 50vw, 25vw"
                  />
                </div>
                <p className="font-serif font-light text-2xl md:text-3xl text-charcoal dark:text-creme mt-5 transition-colors duration-300 group-hover:text-peche dark:group-hover:text-laiton">
                  {person.name}
                </p>
                <p className="text-eyebrow text-[8px] md:text-[9px] text-charcoal/45 dark:text-grege/45 mt-2">
                  {person.role}
                </p>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};
