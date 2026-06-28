import React from "react";

// --- HEADINGS (Cormorant Garamond) ---

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
  const Tag = `h${level}` as keyof JSX.IntrinsicElements;

  // Base styles for all headings: Cormorant Garamond, light/regular weight, elegant line height
  const baseClasses = "font-serif font-light text-charcoal dark:text-creme leading-tight";

  // Specific sizes per level
  const sizeClasses = {
    1: "text-5xl md:text-7xl lg:text-8xl",
    2: "text-4xl md:text-5xl lg:text-6xl",
    3: "text-3xl md:text-4xl lg:text-5xl",
    4: "text-2xl md:text-3xl lg:text-4xl",
    5: "text-xl md:text-2xl",
    6: "text-lg md:text-xl font-normal",
  };

  return (
    <Tag className={`${baseClasses} ${sizeClasses[level]} ${className}`} {...props}>
      {children}
    </Tag>
  );
};

// --- TEXT (Montserrat) ---

type TextVariant = "body" | "subtitle" | "caption" | "overline";

interface TextProps extends React.HTMLAttributes<HTMLParagraphElement> {
  variant?: TextVariant;
}

export const Text: React.FC<TextProps> = ({
  variant = "body",
  children,
  className = "",
  ...props
}) => {
  // Base styles for text: Montserrat, readable line height
  const baseClasses = "font-sans";

  // Specific styles per variant
  const variantClasses = {
    body: "text-sm md:text-base text-charcoal/70 dark:text-grege/70 leading-relaxed font-light",
    subtitle: "text-lg md:text-xl text-charcoal dark:text-creme leading-relaxed font-light",
    caption: "text-xs text-charcoal/50 dark:text-grege/50",
    overline: "text-[10px] md:text-xs uppercase tracking-[0.3em] text-peche font-semibold",
  };

  return (
    <p className={`${baseClasses} ${variantClasses[variant]} ${className}`} {...props}>
      {children}
    </p>
  );
};
