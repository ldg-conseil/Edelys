import React from "react";
import Image from "next/image";
import Link from "next/link";

type LogoVariant = "round" | "square" | "text-only";
type LogoSize = "sm" | "md" | "lg";

interface LogoProps {
  variant?: LogoVariant;
  size?: LogoSize;
  className?: string;
  withLink?: boolean;
}

export const Logo: React.FC<LogoProps> = ({
  variant = "round",
  size = "md",
  className = "",
  withLink = true,
}) => {
  // Dimensions pour l'image
  const sizeMap = {
    sm: { width: 40, height: 40 },
    md: { width: 80, height: 80 },
    lg: { width: 150, height: 150 },
  };

  // Styles de conteneur d'image
  const variantStyles = {
    round: "rounded-full overflow-hidden border border-peche/20 shadow-lg shadow-peche/10",
    square: "rounded-md overflow-hidden border border-charcoal/10 dark:border-white/10",
    "text-only": "", // Géré séparément
  };

  const currentSize = sizeMap[size];

  const content = (
    <div className={`flex items-center gap-4 ${className}`}>
      {variant !== "text-only" && (
        <div className={`relative flex-shrink-0 ${variantStyles[variant]}`} style={{ width: currentSize.width, height: currentSize.height }}>
          <Image
            src="/images/logo.jpg"
            alt="Edelys Coiffure Logo"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>
      )}
      
      {/* Si c'est text-only, ou si on veut afficher le texte à côté d'un petit logo */}
      {(variant === "text-only" || size === "sm") && (
        <div className="flex flex-col">
          <span className="font-serif text-charcoal dark:text-creme leading-none tracking-wide" style={{ fontSize: size === 'sm' ? '1.25rem' : '2rem' }}>
            Edelys Coiffure
          </span>
          <span className="font-sans text-[0.6rem] md:text-[0.7rem] uppercase tracking-[0.3em] text-peche font-semibold mt-1">
            L'architecture du cheveu
          </span>
        </div>
      )}
    </div>
  );

  if (withLink) {
    return (
      <Link href="/" className="inline-block transition-transform duration-300 hover:scale-105">
        {content}
      </Link>
    );
  }

  return content;
};
