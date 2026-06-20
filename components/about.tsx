"use client";

import { motion, type Variants } from "framer-motion";
import { Code2, GraduationCap, Layers, MapPin } from "lucide-react";
import { aboutHighlights, profile, tools } from "@/lib/data";
import { SectionHeader } from "@/components/section-header";

const highlightIcons = {
  graduation: GraduationCap,
  code: Code2,
  layers: Layers,
  map: MapPin,
} as const;

const container: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

const item: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const toolContainer: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.04 } },
};

const toolItem: Variants = {
  hidden: { opacity: 0, scale: 0.92 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.35, ease: "easeOut" } },
};

function initialsOf(name: string) {
  return name
    .split(" ")
    .map((w) => w[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
}

export function About() {
  return (
    <section id="about" className="py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeader
          number="01"
          label="About"
          title="Who"
          highlight="I Am."
          description="A developer who prefers building systems that are actually used, not just demos."
        />

        <div className="mt-12 grid grid-cols-1 gap-14 lg:grid-cols-[0.95fr_1.05fr]">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55 }}
              className="space-y-4 text-base leading-relaxed text-muted"
            >
              <p>
                I believe in clean and readable code, simple user-friendly design, and continuous
                learning. Every project is a chance for me to improve my skills and build practical
                solutions.
              </p>
              <p>
                I usually spend time learning new technologies, practicing coding, and exploring
                ideas from the developer community.
              </p>
              <p className="border-l-2 border-accent/60 pl-4 text-foreground/90">
                Main focus: full-stack web applications with Laravel, React/Next.js, and PostgreSQL.
              </p>
            </motion.div>

            <motion.div
              variants={container}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="mt-8 grid grid-cols-2 gap-3"
            >
              {aboutHighlights.map((h) => {
                const Icon = highlightIcons[h.icon as keyof typeof highlightIcons];
                return (
                  <motion.div
                    key={h.label}
                    variants={item}
                    whileHover={{ y: -3 }}
                    className="rounded-xl border border-border bg-surface/80 p-4 transition-colors duration-300 hover:border-accent/40"
                  >
                    <Icon className="h-4 w-4 text-accent" strokeWidth={1.75} />
                    <div className="mt-2 font-display text-lg font-bold">{h.value}</div>
                    <div className="mt-0.5 font-mono text-[10px] leading-snug text-muted">{h.label}</div>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>

          <div>
            <p className="mb-4 font-mono text-[11px] uppercase tracking-[0.18em] text-faint">
              Tools &amp; Stack
            </p>

            <motion.div
              variants={toolContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-3 gap-3 sm:grid-cols-4"
            >
              {tools.map((tool) => (
                <motion.div
                  key={tool.name}
                  variants={toolItem}
                  whileHover={{ y: -4 }}
                  style={{ "--glow": tool.color } as React.CSSProperties}
                  title={tool.name}
                  className="group relative flex aspect-square flex-col justify-between overflow-hidden rounded-xl border border-border bg-surface p-3.5 transition-all duration-300 hover:border-[var(--glow)] hover:shadow-[0_0_24px_-8px_var(--glow)]"
                >
                  {tool.icon === "devicon" ? (
                    <>
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={tool.src}
                        alt={tool.name}
                        loading="lazy"
                        className={`h-6 w-6 object-contain ${tool.lightBg ? "rounded bg-white p-0.5" : ""}`}
                        onError={(e) => {
                          const target = e.currentTarget;
                          target.style.display = "none";
                          const fallback = target.nextElementSibling as HTMLElement | null;
                          if (fallback) fallback.style.display = "flex";
                        }}
                      />
                      <div
                        className="hidden h-6 w-6 items-center justify-center rounded font-display text-[10px] font-bold text-background"
                        style={{ background: tool.color }}
                      >
                        {initialsOf(tool.name)}
                      </div>
                    </>
                  ) : (
                    <div
                      className="flex h-6 w-6 items-center justify-center rounded font-display text-[10px] font-bold text-background"
                      style={{ background: tool.color }}
                    >
                      {tool.initials}
                    </div>
                  )}

                  <span className="font-mono text-[10px] text-muted transition-colors group-hover:text-foreground">
                    {tool.name}
                  </span>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
