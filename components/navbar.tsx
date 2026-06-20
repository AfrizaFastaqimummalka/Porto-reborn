"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { navLinks, profile } from "@/lib/data";
import { useActiveSection } from "@/hooks/use-active-section";
import { buttonVariants } from "@/components/ui/button";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const activeId = useActiveSection(navLinks.map((l) => l.id));

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ease-out ${
        scrolled
          ? "border-b border-border bg-background/85 py-3 backdrop-blur-md"
          : "border-b border-transparent py-5"
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6">
        <a href="#home" className="font-display text-lg font-bold tracking-tight">
          {profile.firstName.toUpperCase()}
          <span className="text-accent">.</span>
        </a>

        <ul className="hidden items-center gap-1 font-mono text-[11px] uppercase tracking-wider md:flex">
          {navLinks.map((link) => (
            <li key={link.id} className="relative">
              <a
                href={`#${link.id}`}
                className={`relative z-10 block rounded-full px-4 py-2 transition-colors duration-300 ${
                  activeId === link.id ? "text-background" : "text-muted hover:text-foreground"
                }`}
              >
                {link.label}
              </a>
              {activeId === link.id && (
                <motion.div
                  layoutId="nav-active-indicator"
                  className="absolute inset-0 rounded-full bg-accent"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
            </li>
          ))}
        </ul>

        <div className="hidden md:flex">
          <a href={`mailto:${profile.email}`} className={buttonVariants({ variant: "ghost", size: "sm" })}>
            Email
          </a>
        </div>

        <button
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          className="text-foreground md:hidden"
          onClick={() => setMobileOpen((v) => !v)}
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.ul
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="overflow-hidden border-t border-border bg-background/95 backdrop-blur-md md:hidden"
          >
            {navLinks.map((link) => (
              <li key={link.id}>
                <a
                  href={`#${link.id}`}
                  onClick={() => setMobileOpen(false)}
                  className={`block px-6 py-4 font-mono text-sm uppercase tracking-wider ${
                    activeId === link.id ? "text-accent" : "text-muted"
                  }`}
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li className="border-t border-border px-6 py-4">
              <a
                href={`mailto:${profile.email}`}
                onClick={() => setMobileOpen(false)}
                className="font-mono text-sm text-accent"
              >
                {profile.email}
              </a>
            </li>
          </motion.ul>
        )}
      </AnimatePresence>
    </header>
  );
}
