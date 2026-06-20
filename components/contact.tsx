"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Mail } from "lucide-react";
import { GitHubIcon, LinkedInIcon } from "@/components/icons";
import { profile } from "@/lib/data";
import { SectionHeader } from "@/components/section-header";
import { Button } from "@/components/ui/button";

const socials = [
  { label: "GitHub", href: profile.github, icon: GitHubIcon, handle: "AfrizaFastaqimummalka" },
  { label: "LinkedIn", href: profile.linkedin, icon: LinkedInIcon, handle: "afriza-fasta" },
  { label: "Email", href: `mailto:${profile.email}`, icon: Mail, handle: profile.email },
];

export function Contact() {
  return (
    <section id="contact" className="py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeader
          number="03"
          label="Contact"
          title="Let's"
          highlight="Connect."
          description="Have a project idea, need a developer, or just want to chat about tech? Send a message — I usually reply within 1–2 days."
          align="center"
        />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="mx-auto mt-12 max-w-2xl rounded-2xl border border-border bg-surface/80 p-8 sm:p-10"
        >
          <div className="flex flex-col items-center text-center sm:flex-row sm:items-start sm:text-left">
            <div className="relative h-24 w-24 shrink-0 overflow-hidden rounded-2xl border border-border">
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
              <div className="hidden h-full w-full items-center justify-center bg-surface-2 font-display text-xl font-bold text-faint">
                AF
              </div>
            </div>

            <div className="mt-6 sm:mt-0 sm:ml-8">
              <h3 className="font-display text-xl font-bold">{profile.name}</h3>
              <p className="mt-1 text-sm text-muted">{profile.role}</p>
              <p className="mt-1 font-mono text-xs text-faint">{profile.location}</p>
            </div>
          </div>

          <a
            href={`mailto:${profile.email}`}
            className="mt-8 block text-center font-display text-2xl font-bold transition-opacity hover:opacity-80 sm:text-left"
          >
            <span className="text-gradient">{profile.email}</span>
          </a>

          <div className="mt-8 grid gap-3 sm:grid-cols-3">
            {socials.map(({ label, href, icon: Icon, handle }) => (
              <motion.a
                key={label}
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                whileHover={{ y: -3 }}
                className="group flex items-center gap-3 rounded-xl border border-border px-4 py-3 transition-colors duration-300 hover:border-accent/40"
              >
                <Icon className="h-4 w-4 shrink-0 text-muted transition-colors group-hover:text-accent" />
                <div className="min-w-0 text-left">
                  <div className="font-mono text-[10px] uppercase tracking-wide text-faint">{label}</div>
                  <div className="truncate text-xs text-muted group-hover:text-foreground">{handle}</div>
                </div>
                <ArrowUpRight className="ml-auto h-3.5 w-3.5 shrink-0 text-faint opacity-0 transition-opacity group-hover:opacity-100" />
              </motion.a>
            ))}
          </div>

          <div className="mt-8 flex justify-center sm:justify-start">
            <a href={`mailto:${profile.email}?subject=Hi%20Afriza%20—%20from%20your%20portfolio`}>
              <Button variant="primary">
                Send Email
                <ArrowUpRight className="h-4 w-4" />
              </Button>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
