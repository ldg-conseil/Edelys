import React from "react";
import { LucideIcon } from "lucide-react";

type ButtonVariant = "primary" | "secondary" | "outline";
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
    // Base classes for all buttons
    const baseClasses =
      "inline-flex items-center justify-center gap-3 font-sans font-semibold uppercase tracking-[0.2em] transition-all duration-500 rounded focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-peche disabled:opacity-50 disabled:cursor-not-allowed";

    // Size variants
    const sizeClasses = {
      sm: "text-[9px] md:text-[10px] px-6 py-3",
      md: "text-[10px] md:text-xs px-8 py-4",
      lg: "text-xs md:text-sm px-10 py-5",
    };

    // Style variants (Solid Colors as requested)
    const variantClasses = {
      primary:
        "bg-charcoal dark:bg-creme text-creme dark:text-charcoal hover:bg-peche dark:hover:bg-peche dark:hover:text-charcoal shadow-lg shadow-charcoal/10 dark:shadow-none",
      secondary:
        "bg-peche text-charcoal hover:bg-charcoal hover:text-creme dark:hover:bg-creme dark:hover:text-charcoal shadow-lg shadow-peche/20",
      outline:
        "border border-charcoal/20 dark:border-creme/20 text-charcoal dark:text-creme hover:border-peche hover:text-peche dark:hover:border-peche dark:hover:text-peche",
    };

    const widthClass = fullWidth ? "w-full" : "";

    // Combine all classes
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
