import React from "react";
import { LucideIcon } from "lucide-react";

/* ============================================================
   BOUTONS  —  Éditoriaux
   ============================================================ */

type ButtonVariant = "primary" | "secondary" | "outline" | "editorial" | "rose-gold";
type ButtonSize = "sm" | "md" | "lg";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  icon?: LucideIcon;
  iconPosition?: "left" | "right";
  fullWidth?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      children,
      variant = "primary",
      size = "md",
      icon: Icon,
      iconPosition = "right",
      fullWidth = false,
      className = "",
      ...props
    },
    ref
  ) => {
    const baseClasses =
      "inline-flex items-center justify-center gap-3 font-sans font-semibold uppercase tracking-[0.2em] transition-all duration-500 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-peche dark:focus:ring-laiton disabled:opacity-50 disabled:cursor-not-allowed";

    const sizeClasses: Record<ButtonSize, string> = {
      sm: "text-[9px] md:text-[10px] px-6 py-3",
      md: "text-[10px] md:text-[11px] px-8 py-4",
      lg: "text-xs md:text-sm px-10 py-5",
    };

    const variantClasses: Record<ButtonVariant, string> = {
      primary:
        "bg-charcoal dark:bg-creme text-creme dark:text-charcoal hover:bg-peche dark:hover:bg-laiton dark:hover:text-charcoal shadow-lg shadow-charcoal/10 dark:shadow-none",
      secondary:
        "bg-peche text-charcoal hover:bg-charcoal hover:text-creme dark:hover:bg-creme dark:hover:text-charcoal shadow-lg shadow-peche/20",
      outline:
        "border border-charcoal/15 dark:border-creme/15 text-charcoal dark:text-creme hover:border-peche hover:text-peche dark:hover:border-laiton dark:hover:text-laiton",
      editorial:
        "text-charcoal/70 dark:text-grege/70 hover:text-charcoal dark:hover:text-creme underline-offset-4 hover:underline decoration-peche dark:decoration-laiton",
      "rose-gold":
        "bg-laiton text-charcoal hover:bg-peche dark:bg-laiton dark:hover:bg-peche shadow-lg shadow-laiton/20",
    };

    const widthClass = fullWidth ? "w-full" : "";

    const combinedClasses = `${baseClasses} ${sizeClasses[size]} ${variantClasses[variant]} ${widthClass} ${className}`;

    return (
      <button ref={ref} className={combinedClasses} {...props}>
        {Icon && iconPosition === "left" && <Icon className="w-4 h-4" />}
        <span>{children}</span>
        {Icon && iconPosition === "right" && <Icon className="w-4 h-4" />}
      </button>
    );
  }
);

Button.displayName = "Button";
