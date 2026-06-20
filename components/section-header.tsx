type SectionHeaderProps = {
  number: string;
  label: string;
  title: string;
  highlight?: string;
  description?: string;
  align?: "left" | "center";
};

export function SectionHeader({
  number,
  label,
  title,
  highlight,
  description,
  align = "left",
}: SectionHeaderProps) {
  const centered = align === "center";

  return (
    <header className={centered ? "text-center" : ""}>
      <div
        className={`mb-4 flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.2em] text-accent ${
          centered ? "justify-center" : ""
        }`}
      >
        <span className="text-faint">{number}</span>
        <span className="h-px w-6 bg-border" />
        <span>{label}</span>
      </div>
      <h2 className="font-display text-4xl font-bold uppercase leading-[1.05] tracking-tight sm:text-5xl">
        {title}
        {highlight && (
          <>
            {" "}
            <span className="text-gradient">{highlight}</span>
          </>
        )}
      </h2>
      {description && (
        <p className={`mt-4 max-w-lg text-muted ${centered ? "mx-auto" : ""}`}>{description}</p>
      )}
    </header>
  );
}
