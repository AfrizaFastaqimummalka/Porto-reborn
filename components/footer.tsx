import { Mail } from "lucide-react";
import { GitHubIcon, LinkedInIcon } from "@/components/icons";
import { navLinks, profile } from "@/lib/data";

const socials = [
  { label: "GitHub", href: profile.github, icon: GitHubIcon },
  { label: "LinkedIn", href: profile.linkedin, icon: LinkedInIcon },
  { label: "Email", href: `mailto:${profile.email}`, icon: Mail },
];

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <div className="flex flex-col items-start justify-between gap-10 sm:flex-row sm:items-end">
          <div>
            <a
              href="#home"
              className="font-display text-3xl font-bold uppercase tracking-tight transition-opacity hover:opacity-80 sm:text-4xl"
            >
              {profile.firstName}
              <span className="text-accent">.</span>
            </a>
            <p className="mt-3 max-w-sm text-sm text-muted">
              Full stack developer from Bandung — building clean, functional, and production-ready web apps.
            </p>
          </div>

          <a
            href={`mailto:${profile.email}`}
            className="group inline-flex items-center gap-2 font-mono text-sm text-muted transition-colors hover:text-accent"
          >
            {profile.email}
            <span className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
              ↗
            </span>
          </a>
        </div>
      </div>

      <div className="border-t border-border">
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 px-6 py-8 sm:flex-row sm:justify-between">
          <ul className="flex flex-wrap justify-center gap-5 font-mono text-[11px] uppercase tracking-wide text-muted">
            {navLinks.map((link) => (
              <li key={link.id}>
                <a href={`#${link.id}`} className="transition-colors duration-300 hover:text-accent">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="flex gap-4">
            {socials.map(({ label, href, icon: Icon }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                aria-label={label}
                className="text-muted transition-all duration-300 hover:-translate-y-0.5 hover:text-accent"
              >
                <Icon className="h-[18px] w-[18px]" />
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="border-t border-border py-5 text-center font-mono text-[11px] text-faint">
        © {year} {profile.name}
      </div>
    </footer>
  );
}
