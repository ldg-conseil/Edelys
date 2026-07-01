import React from "react";

/* ============================================================
   TYPOGRAPHIE  ÉDITORIALE
   Cormorant Garamond (titres) · Montserrat (texte)
   ============================================================ */

// ── HEADINGS ────────────────────────────────────────────────

type HeadingLevel = 1 | 2 | 3 | 4 | 5 | 6;

interface HeadingProps extends React.HTMLAttributes<HTMLHeadingElement> {
  level?: HeadingLevel;
  /** Numéro éditorial (ex: "01") affiché au‑dessus du titre */
  number?: string;
}

export const Heading: React.FC<HeadingProps> = ({
  level = 2,
  number,
  children,
  className = "",
  ...props
}) => {
  const Tag = `h${level}` as React.ElementType;

  const baseClasses =
    "font-serif font-light text-charcoal dark:text-creme leading-tight tracking-tight";

  const sizeClasses: Record<HeadingLevel, string> = {
    1: "text-5xl md:text-7xl lg:text-8xl",
    2: "text-4xl md:text-5xl lg:text-6xl",
    3: "text-3xl md:text-4xl lg:text-5xl",
    4: "text-2xl md:text-3xl lg:text-4xl",
    5: "text-xl md:text-2xl",
    6: "text-lg md:text-xl font-normal",
  };

  return (
    <div className={className}>
      {number && (
        <span className="block font-sans text-[0.7rem] md:text-[0.75rem] font-semibold uppercase tracking-[0.3em] text-peche/50 dark:text-laiton/50 mb-3">
          {number}
        </span>
      )}
      <Tag className={`${baseClasses} ${sizeClasses[level]}`} {...props}>
        {children}
      </Tag>
    </div>
  );
};

// ── TEXT ────────────────────────────────────────────────────

type TextVariant = "body" | "subtitle" | "caption" | "overline" | "label";

interface TextProps extends React.HTMLAttributes<HTMLParagraphElement> {
  variant?: TextVariant;
}

export const Text: React.FC<TextProps> = ({
  variant = "body",
  children,
  className = "",
  ...props
}) => {
  const baseClasses = "font-sans";

  const variantClasses: Record<TextVariant, string> = {
    body: "text-sm md:text-base text-charcoal/80 dark:text-grege/80 leading-relaxed font-light",
    subtitle:
      "text-lg md:text-xl text-charcoal/90 dark:text-grege/90 leading-relaxed font-light",
    caption: "text-xs text-charcoal/50 dark:text-grege/50",
    overline:
      "text-[10px] md:text-[11px] uppercase tracking-[0.3em] text-peche dark:text-laiton font-semibold",
    label:
      "text-[10px] md:text-[11px] uppercase tracking-[0.25em] text-charcoal/60 dark:text-grege/60 font-medium",
  };

  return (
    <p className={`${baseClasses} ${variantClasses[variant]} ${className}`} {...props}>
      {children}
    </p>
  );
};
