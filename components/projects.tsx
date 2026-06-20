"use client";

import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { projects } from "@/lib/data";
import { SectionHeader } from "@/components/section-header";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const categories = ["All", ...Array.from(new Set(projects.map((p) => p.category)))];

export function Projects() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [photoIndex, setPhotoIndex] = useState(0);
  const [filter, setFilter] = useState("All");

  const filtered = useMemo(
    () => (filter === "All" ? projects : projects.filter((p) => p.category === filter)),
    [filter]
  );

  const safeIndex = Math.min(activeIndex, Math.max(filtered.length - 1, 0));
  const project = filtered[safeIndex] ?? projects[0];
  const liveDisabled = !project.liveUrl || project.liveUrl === "#";
  const repoDisabled = !project.repoUrl || project.repoUrl === "#";

  function selectProject(index: number) {
    setActiveIndex(index);
    setPhotoIndex(0);
  }

  function changeFilter(cat: string) {
    setFilter(cat);
    setActiveIndex(0);
    setPhotoIndex(0);
  }

  function prevPhoto() {
    setPhotoIndex((i) => (i - 1 + project.images.length) % project.images.length);
  }

  function nextPhoto() {
    setPhotoIndex((i) => (i + 1) % project.images.length);
  }

  return (
    <section id="projects" className="py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeader
          number="02"
          label="Portfolio"
          title="Selected"
          highlight="Projects."
          description={`${projects.length} works — from campus systems to 3D games in the browser.`}
        />

        <div className="mt-8 flex flex-wrap gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => changeFilter(cat)}
              className={cn(
                "rounded-full border px-4 py-1.5 font-mono text-[11px] uppercase tracking-wide transition-all duration-300",
                filter === cat
                  ? "border-accent bg-accent/10 text-accent"
                  : "border-border text-faint hover:border-muted hover:text-muted"
              )}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="mt-10 grid grid-cols-1 gap-3 md:grid-cols-[auto_1fr] md:gap-10">
          <div className="flex gap-1 overflow-x-auto pb-2 font-mono text-sm md:block md:max-h-[640px] md:overflow-y-auto md:overflow-x-visible md:border-l md:border-border md:pb-0">
            {filtered.map((p, i) => (
              <button
                key={p.slug}
                onClick={() => selectProject(i)}
                className={cn(
                  "relative shrink-0 px-3 py-2 text-left transition-colors duration-300 md:block md:w-full md:max-w-[220px] md:px-5 md:py-3",
                  safeIndex === i ? "text-foreground" : "text-faint hover:text-muted"
                )}
              >
                {safeIndex === i && (
                  <motion.span
                    layoutId="project-index-indicator"
                    className="absolute inset-y-1 left-0 hidden w-0.5 bg-accent md:block"
                    style={{ marginLeft: "-1px" }}
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
                <span className={cn("block text-[11px]", safeIndex === i ? "text-accent" : "text-faint")}>
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className={cn("mt-0.5 block truncate text-xs", safeIndex === i && "font-semibold")}>
                  {p.title}
                </span>
              </button>
            ))}
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={project.slug}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="overflow-hidden rounded-2xl border border-border bg-surface/80"
            >
              {/* Preview — full width, screenshot utuh tanpa crop */}
              <div className="relative border-b border-border bg-[#0c0e12]">
                <div className="relative flex min-h-[220px] items-center justify-center px-3 py-4 sm:min-h-[300px] sm:px-6 sm:py-6 lg:min-h-[380px]">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={`${project.slug}-${photoIndex}`}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.2 }}
                      className="flex h-full w-full items-center justify-center"
                    >
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={project.images[photoIndex]}
                        alt={`${project.title} — screenshot ${photoIndex + 1}`}
                        className="max-h-[200px] w-auto max-w-full object-contain sm:max-h-[280px] lg:max-h-[360px]"
                        onError={(e) => {
                          e.currentTarget.style.display = "none";
                          const fallback = e.currentTarget.nextElementSibling as HTMLElement | null;
                          if (fallback) fallback.style.display = "flex";
                        }}
                      />
                      <div className="hidden min-h-[180px] w-full flex-col items-center justify-center gap-2 text-center font-mono text-xs text-faint">
                        <span className="font-display text-lg text-muted">{project.title}</span>
                        <span>Screenshot {photoIndex + 1} not uploaded yet</span>
                      </div>
                    </motion.div>
                  </AnimatePresence>

                  <button
                    aria-label="Previous screenshot"
                    onClick={prevPhoto}
                    className="absolute left-3 top-1/2 z-10 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full border border-border bg-background/90 text-foreground backdrop-blur transition-colors hover:bg-background"
                  >
                    <ChevronLeft size={18} />
                  </button>
                  <button
                    aria-label="Next screenshot"
                    onClick={nextPhoto}
                    className="absolute right-3 top-1/2 z-10 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full border border-border bg-background/90 text-foreground backdrop-blur transition-colors hover:bg-background"
                  >
                    <ChevronRight size={18} />
                  </button>
                </div>

                <div className="flex justify-center gap-2 pb-4">
                  {project.images.map((_, i) => (
                    <button
                      key={i}
                      aria-label={`View screenshot ${i + 1}`}
                      onClick={() => setPhotoIndex(i)}
                      className={cn(
                        "h-1.5 rounded-full transition-all duration-300",
                        photoIndex === i ? "w-6 bg-accent" : "w-1.5 bg-border hover:bg-muted"
                      )}
                    />
                  ))}
                </div>
              </div>

              {/* Detail */}
              <div className="p-6 sm:p-8">
                <div className="mb-3 flex flex-wrap items-center gap-3 font-mono text-[11px] uppercase tracking-wide">
                  <span className="text-accent">#{String(safeIndex + 1).padStart(2, "0")}</span>
                  <Badge variant="outline">{project.category}</Badge>
                  <span className="ml-auto text-faint">
                    {project.status} · {project.year}
                  </span>
                </div>

                <h3 className="font-display text-2xl font-bold sm:text-3xl">{project.title}</h3>
                <p className="mt-1 text-sm text-accent/90">{project.tagline}</p>
                <p className="mt-4 text-sm leading-relaxed text-muted">{project.description}</p>

                {project.stack.length > 0 && (
                  <div className="mt-5 flex flex-wrap gap-2">
                    {project.stack.map((s) => (
                      <Badge key={s}>{s}</Badge>
                    ))}
                  </div>
                )}

                <div className="mt-6 flex gap-3">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-disabled={liveDisabled}
                    className={cn(
                      buttonVariants({ variant: "primary", size: "sm" }),
                      liveDisabled && "pointer-events-none opacity-40"
                    )}
                  >
                    Live Demo
                  </a>
                  <a
                    href={project.repoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-disabled={repoDisabled}
                    className={cn(
                      buttonVariants({ variant: "ghost", size: "sm" }),
                      repoDisabled && "pointer-events-none opacity-40"
                    )}
                  >
                    GitHub
                  </a>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
