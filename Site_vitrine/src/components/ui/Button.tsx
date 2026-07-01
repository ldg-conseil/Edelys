import React from "react";
import { LucideIcon } from "lucide-react";

/* ============================================================
   BOUTONS — Charte Edelys (btn-edelys-main / btn-edelys-tag)
   Pill · remplissage vertical au survol · micro-typographie
   ============================================================ */

type ButtonVariant = "solid" | "outline" | "dark";
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
      variant = "solid",
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
      "btn-fill group/btn inline-flex items-center justify-center gap-3 rounded-full font-sans font-semibold uppercase tracking-[0.18em] whitespace-nowrap cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-peche dark:focus-visible:ring-laiton focus-visible:ring-offset-2 focus-visible:ring-offset-creme dark:focus-visible:ring-offset-cinema-bg disabled:opacity-50 disabled:pointer-events-none";

    const sizeClasses: Record<ButtonSize, string> = {
      sm: "text-[9px] px-6 py-3",
      md: "text-[10px] px-8 py-4",
      lg: "text-[11px] px-10 py-5",
    };

    /* --btn-fill-color pilote la couleur du voile de remplissage (::after) */
    const variantClasses: Record<ButtonVariant, string> = {
      solid:
        "bg-peche text-charcoal hover:text-creme dark:hover:text-charcoal [--btn-fill-color:var(--color-charcoal)] dark:[--btn-fill-color:var(--color-creme)] hover:shadow-[0_10px_20px_rgba(232,163,130,0.25)]",
      outline:
        "border border-charcoal/20 dark:border-grege/25 text-charcoal/80 dark:text-grege/80 hover:text-charcoal dark:hover:text-charcoal hover:border-peche dark:hover:border-laiton [--btn-fill-color:var(--color-peche)] dark:[--btn-fill-color:var(--color-laiton)]",
      dark:
        "bg-charcoal text-creme dark:bg-creme dark:text-charcoal hover:text-charcoal dark:hover:text-charcoal [--btn-fill-color:var(--color-peche)] dark:[--btn-fill-color:var(--color-laiton)]",
    };

    const widthClass = fullWidth ? "w-full" : "";

    return (
      <button
        ref={ref}
        className={`${baseClasses} ${sizeClasses[size]} ${variantClasses[variant]} ${widthClass} ${className}`}
        {...props}
      >
        {Icon && iconPosition === "left" && (
          <Icon className="w-3.5 h-3.5 transition-transform duration-500 group-hover/btn:-translate-x-0.5" />
        )}
        <span>{children}</span>
        {Icon && iconPosition === "right" && (
          <Icon className="w-3.5 h-3.5 transition-transform duration-500 group-hover/btn:translate-x-0.5" />
        )}
      </button>
    );
  }
);

Button.displayName = "Button";
