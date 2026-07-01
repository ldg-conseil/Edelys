"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

/* ============================================================
   RÉVÉLATIONS AU SCROLL — charte Edelys
   reveal-fade-up · reveal-mask-text (masque révélateur)
   ============================================================ */

const EASE = [0.215, 0.61, 0.355, 1] as const;
const EASE_CSS = "cubic-bezier(0.215, 0.61, 0.355, 1)";

interface RevealProps {
  children: React.ReactNode;
  delay?: number;
  /** Décalage vertical initial en px */
  y?: number;
  className?: string;
  once?: boolean;
}

/** Fondu vers le haut, déclenché à l'entrée dans le viewport */
export const Reveal: React.FC<RevealProps> = ({
  children,
  delay = 0,
  y = 28,
  className = "",
  once = true,
}) => (
  <motion.div
    initial={{ opacity: 0, y }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once, margin: "-80px" }}
    transition={{ duration: 0.9, delay, ease: EASE }}
    className={className}
  >
    {children}
  </motion.div>
);

/** Révélation par masque : chaque ligne monte depuis son propre cadre */
interface MaskRevealProps {
  lines: React.ReactNode[];
  delay?: number;
  stagger?: number;
  className?: string;
  lineClassName?: string;
  as?: "h1" | "h2" | "h3" | "p" | "div";
}

export const MaskReveal: React.FC<MaskRevealProps> = ({
  lines,
  delay = 0,
  stagger = 0.12,
  className = "",
  lineClassName = "",
  as: Tag = "div",
}) => {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <Tag ref={ref as React.Ref<never>} className={className}>
      {lines.map((content, i) => (
        <span key={i} className="block overflow-hidden pb-[0.08em] -mb-[0.08em]">
          <span
            className={`block will-change-transform ${lineClassName}`}
            style={{
              transform: inView ? "translateY(0%)" : "translateY(110%)",
              transition: `transform 1s ${EASE_CSS} ${delay + i * stagger}s`,
            }}
          >
            {content}
          </span>
        </span>
      ))}
    </Tag>
  );
};
