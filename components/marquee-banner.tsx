import { marqueeItems } from "@/lib/data";

export function MarqueeBanner() {
  const track = [...marqueeItems, ...marqueeItems];

  return (
    <div
      className="overflow-hidden border-y border-border bg-surface py-3.5"
      aria-label="Tech stack & keywords"
    >
      <div className="flex w-max animate-marquee will-change-transform hover:[animation-play-state:paused]">
        {[0, 1].map((copy) => (
          <div key={copy} className="flex shrink-0 items-center" aria-hidden={copy === 1}>
            {track.map((item, i) => (
              <span
                key={`${copy}-${i}`}
                className="mx-5 flex items-center gap-5 font-display text-xl font-semibold tracking-tight text-foreground/80 sm:text-2xl"
              >
                {item}
                <span className="font-mono text-sm text-accent" aria-hidden>
                  ✦
                </span>
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
