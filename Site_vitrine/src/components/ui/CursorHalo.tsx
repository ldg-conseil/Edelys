"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

/* ============================================================
   HALO DORÉ — curseur personnalisé de la charte
   Desktop uniquement (pointer: fine), non bloquant
   ============================================================ */

export function CursorHalo() {
  const [enabled, setEnabled] = useState(false);
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const springX = useSpring(x, { stiffness: 260, damping: 28, mass: 0.6 });
  const springY = useSpring(y, { stiffness: 260, damping: 28, mass: 0.6 });

  useEffect(() => {
    const fine = window.matchMedia("(pointer: fine)");
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (!fine.matches || reduced.matches) return;

    const move = (e: MouseEvent) => {
      x.set(e.clientX - 18);
      y.set(e.clientY - 18);
      setEnabled(true);
    };
    window.addEventListener("mousemove", move, { passive: true });
    return () => window.removeEventListener("mousemove", move);
  }, [x, y]);

  if (!enabled) return null;

  return (
    <motion.div
      aria-hidden
      className="cursor-halo hidden md:block border-laiton/60"
      style={{ x: springX, y: springY, top: 0, left: 0 }}
    />
  );
}
