import React from "react";

/* ============================================================
   TYPOGRAPHIE ÉDITORIALE
   Cormorant Garamond (display) · Montserrat (méta & corps)
   ============================================================ */

// ── EYEBROW : méta de chapitre (n° + rubrique) ──────────────

interface EyebrowProps extends React.HTMLAttributes<HTMLParagraphElement> {
  number?: string;
}

export const Eyebrow: React.FC<EyebrowProps> = ({
  number,
  children,
  className = "",
  ...props
}) => (
  <p
    className={`text-eyebrow flex items-center gap-4 text-charcoal/60 dark:text-grege/60 ${className}`}
    {...props}
  >
    {number && (
      <span className="text-peche dark:text-laiton font-serif text-base font-normal tracking-normal leading-none">
        {number}
      </span>
    )}
    {number && <span className="w-8 h-px bg-charcoal/20 dark:bg-grege/20" />}
    <span>{children}</span>
  </p>
);

// ── HEADINGS ────────────────────────────────────────────────

type HeadingLevel = 1 | 2 | 3 | 4 | 5 | 6;

interface HeadingProps extends React.HTMLAttributes<HTMLHeadingElement> {
  level?: HeadingLevel;
}

export const Heading: React.FC<HeadingProps> = ({
  level = 2,
  children,
  className = "",
  ...props
}) => {
  const Tag = `h${level}` as React.ElementType;

  const sizeClasses: Record<HeadingLevel, string> = {
    1: "text-display-xl",
    2: "text-display-lg",
    3: "text-display-md",
    4: "font-serif font-light text-2xl md:text-3xl leading-snug",
    5: "font-serif font-light text-xl md:text-2xl leading-snug",
    6: "font-serif font-normal text-lg md:text-xl leading-snug",
  };

  return (
    <Tag
      className={`text-charcoal dark:text-creme ${sizeClasses[level]} ${className}`}
      {...props}
    >
      {children}
    </Tag>
  );
};

/** Mot mis en exergue dans un titre (italique, accent) */
export const Em: React.FC<React.HTMLAttributes<HTMLElement>> = ({
  children,
  className = "",
  ...props
}) => (
  <em className={`italic font-normal text-peche dark:text-laiton ${className}`} {...props}>
    {children}
  </em>
);

// ── TEXT ────────────────────────────────────────────────────

type TextVariant = "body" | "lead" | "caption" | "overline" | "label";

interface TextProps extends React.HTMLAttributes<HTMLParagraphElement> {
  variant?: TextVariant;
}

export const Text: React.FC<TextProps> = ({
  variant = "body",
  children,
  className = "",
  ...props
}) => {
  const variantClasses: Record<TextVariant, string> = {
    body: "font-sans text-sm md:text-[15px] text-charcoal/70 dark:text-grege/70 leading-[1.9] font-light",
    lead: "font-serif text-xl md:text-2xl text-charcoal/85 dark:text-grege/85 leading-relaxed font-light",
    caption: "font-sans text-xs text-charcoal/45 dark:text-grege/45 leading-relaxed",
    overline:
      "text-eyebrow text-peche dark:text-laiton",
    label:
      "text-eyebrow text-charcoal/55 dark:text-grege/55",
  };

  return (
    <p className={`${variantClasses[variant]} ${className}`} {...props}>
      {children}
    </p>
  );
};
