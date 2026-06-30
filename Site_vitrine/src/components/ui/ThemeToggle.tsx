"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export function ThemeToggle() {
  const { setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // eslint-disable-next-line
    setMounted(true);
  }, []);

  if (!mounted) {
    // Rendu serveur : bouton inerte pour éviter l'hydration mismatch
    return (
      <button
        className="p-2 rounded-full bg-transparent text-charcoal dark:text-creme hover:bg-charcoal/5 dark:hover:bg-white/10 transition-colors"
        aria-label="Basculer le thème"
      >
        <span className="h-5 w-5 block" />
      </button>
    );
  }

  const isDark = resolvedTheme === "dark";

  return (
    <button
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="p-2 rounded-full bg-transparent text-charcoal dark:text-creme hover:bg-charcoal/5 dark:hover:bg-white/10 transition-colors"
      aria-label="Basculer le thème"
    >
      {isDark ? (
        <Sun className="h-5 w-5" />
      ) : (
        <Moon className="h-5 w-5" />
      )}
    </button>
  );
}
