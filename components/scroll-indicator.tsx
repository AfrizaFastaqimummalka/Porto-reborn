"use client";

import { motion } from "framer-motion";

export function ScrollIndicator() {
  return (
    <motion.a
      href="#about"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1.2, duration: 0.6 }}
      className="group absolute bottom-8 left-1/2 flex -translate-x-1/2 flex-col items-center gap-2 font-mono text-[10px] uppercase tracking-[0.25em] text-faint transition-colors duration-300 hover:text-muted"
      aria-label="Scroll ke section berikutnya"
    >
      <span className="animate-float">Scroll</span>
      <span className="relative flex h-10 w-5 justify-center rounded-full border border-border pt-2 transition-colors duration-300 group-hover:border-accent/50">
        <span className="h-1.5 w-0.5 animate-pulse rounded-full bg-accent" />
      </span>
    </motion.a>
  );
}
