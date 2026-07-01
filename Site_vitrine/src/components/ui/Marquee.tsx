import React from "react";

/* ============================================================
   MARQUEE ÉDITORIAL — bande défilante de prestations
   ============================================================ */

interface MarqueeProps {
  items: string[];
  className?: string;
}

export const Marquee: React.FC<MarqueeProps> = ({ items, className = "" }) => {
  const sequence = (ariaHidden: boolean) => (
    <div
      aria-hidden={ariaHidden || undefined}
      className="flex shrink-0 items-center"
    >
      {items.map((item, i) => (
        <span key={i} className="flex items-center">
          <span className="font-serif font-light italic text-3xl md:text-5xl text-charcoal/80 dark:text-grege/80 whitespace-nowrap px-8 md:px-12">
            {item}
          </span>
          <span className="text-peche dark:text-laiton text-lg md:text-xl select-none">
            ✳
          </span>
        </span>
      ))}
    </div>
  );

  return (
    <div
      className={`relative overflow-hidden border-y border-charcoal/10 dark:border-grege/10 py-6 md:py-8 ${className}`}
    >
      <div className="flex w-max animate-marquee">
        {sequence(false)}
        {sequence(true)}
      </div>
    </div>
  );
};
