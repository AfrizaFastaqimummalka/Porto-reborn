"use client";

import { useRef } from "react";
import { motion, useInView, type Variants } from "framer-motion";
import { MapPin } from "lucide-react";
import { profile, heroStats } from "@/lib/data";
import { useCountUp } from "@/hooks/use-count-up";
import { Button } from "@/components/ui/button";
import { ScrollIndicator } from "@/components/scroll-indicator";

const container: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

const word: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" } },
};

function StatItem({ value, suffix, label }: { value: number; suffix: string; label: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-10% 0px" });
  const count = useCountUp({ end: value, start: inView, duration: 1400 });

  return (
    <div ref={ref} className="border-l border-border pl-5 first:border-l-0 first:pl-0">
      <div className="font-display text-3xl font-bold tabular-nums sm:text-4xl">
        {count}
        {suffix}
      </div>
      <div className="mt-1 font-mono text-[10px] uppercase tracking-wider text-faint">{label}</div>
    </div>
  );
}

export function Hero() {
  const nameParts = profile.lastName.split(" ");

  return (
    <section id="home" className="relative flex min-h-screen items-center pt-28 pb-24">
      <div className="mx-auto grid w-full max-w-6xl grid-cols-1 items-center gap-14 px-6 lg:grid-cols-[1.1fr_0.9fr]">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-6 flex flex-wrap items-center gap-3"
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-border bg-surface/80 px-4 py-2 font-mono text-[11px] uppercase tracking-wide text-muted">
              <span className="h-1.5 w-1.5 rounded-full bg-accent animate-pulse-dot" />
              {profile.availability}
            </span>
            <span className="inline-flex items-center gap-1.5 font-mono text-[11px] text-faint">
              <MapPin className="h-3 w-3 text-accent" />
              {profile.location}
            </span>
          </motion.div>

          <motion.h1
            variants={container}
            initial="hidden"
            animate="visible"
            className="font-display text-[2.75rem] font-bold uppercase leading-[0.92] tracking-tight sm:text-6xl lg:text-[4.25rem]"
          >
            <span className="block font-sans text-base font-normal normal-case text-muted sm:text-lg">
              <motion.span variants={word} className="mr-2 inline-block">
                Hi, I'm
              </motion.span>
            </span>
            <span className="mt-1 block">
              <motion.span variants={word} className="inline-block">
                {profile.firstName}
              </motion.span>
            </span>
            <span className="block text-gradient">
              {nameParts.map((part, i) => (
                <motion.span key={i} variants={word} className="mr-2 inline-block last:mr-0">
                  {part}
                </motion.span>
              ))}
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.45, duration: 0.55 }}
            className="mt-5 font-display text-lg text-foreground/90 sm:text-xl"
          >
            {profile.role}
            <span className="text-muted"> · </span>
            <span className="text-muted">{profile.subtitle}</span>
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.55, duration: 0.55 }}
            className="mt-5 max-w-lg text-base leading-relaxed text-muted"
          >
            {profile.tagline}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.65, duration: 0.55 }}
            className="mt-8 flex flex-wrap gap-3"
          >
            <a href="#projects">
              <Button variant="primary">View Projects</Button>
            </a>
            <a href={`mailto:${profile.email}`}>
              <Button variant="ghost">Email Me</Button>
            </a>
            <a href={profile.cvUrl} download="CV-Afriza-Fasta.pdf">
              <Button variant="ghost">Download CV</Button>
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.85, duration: 0.6 }}
            className="mt-14 flex flex-wrap gap-8 sm:gap-12"
          >
            {heroStats.map((stat) => (
              <StatItem key={stat.label} value={stat.value} suffix={stat.suffix} label={stat.label} />
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="relative mx-auto w-full max-w-sm lg:max-w-none"
        >
          <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-accent/20 via-transparent to-teal/15 blur-2xl" />

          <div className="relative aspect-[4/5] overflow-hidden rounded-[1.75rem] border border-border bg-surface">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={profile.photo}
              alt={`Photo of ${profile.name}`}
              className="h-full w-full object-cover"
              onError={(e) => {
                e.currentTarget.style.display = "none";
                const fallback = e.currentTarget.nextElementSibling as HTMLElement | null;
                if (fallback) fallback.style.display = "flex";
              }}
            />
            <div className="hidden h-full w-full items-center justify-center bg-surface-2 font-display text-6xl font-bold text-faint">
              AF
            </div>

            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-background/90 via-background/40 to-transparent p-6 pt-16">
              <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-faint">Currently</p>
              <p className="mt-1 font-display text-sm font-semibold">
                Building information systems &amp; web apps
              </p>
            </div>
          </div>

          <div className="absolute -right-3 top-8 hidden rounded-xl border border-border bg-surface px-4 py-3 font-mono text-[11px] shadow-xl sm:block">
            <span className="text-accent">stack</span>
            <span className="text-muted"> → Laravel · React · Next.js</span>
          </div>
        </motion.div>
      </div>

      <ScrollIndicator />
    </section>
  );
}
