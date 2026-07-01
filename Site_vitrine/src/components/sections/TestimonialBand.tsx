"use client";

import React from "react";
import { Star } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { site } from "@/lib/site";

export const TestimonialBand = () => {
  return (
    <section className="relative py-28 md:py-36 overflow-hidden">
      <div className="relative max-w-4xl mx-auto px-6 md:px-10 text-center">
        <Reveal>
          <div className="flex justify-center gap-1.5 mb-10">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-4 h-4 fill-laiton text-laiton" />
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <blockquote className="font-serif font-light italic text-3xl md:text-5xl leading-[1.25] text-charcoal dark:text-creme">
            « Toujours un bon accueil, une ambiance chaleureuse et conviviale.
            Alisson et son équipe sont au top. »
          </blockquote>
        </Reveal>

        <Reveal delay={0.2}>
          <p className="text-eyebrow text-[9px] text-charcoal/45 dark:text-grege/45 mt-10">
            Avis Google — {site.rating.score}/5 sur {site.rating.count} avis
          </p>
        </Reveal>
      </div>
    </section>
  );
};
