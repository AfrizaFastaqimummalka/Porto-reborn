import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center rounded-full border px-3 py-1 font-mono text-[11px] font-medium uppercase tracking-wide transition-colors duration-300",
  {
    variants: {
      variant: {
        default: "border-border text-muted",
        outline: "border-border text-foreground hover:border-accent/50 hover:text-accent",
        accent: "border-transparent bg-accent text-background font-bold",
        status: "border-transparent bg-accent/15 text-accent",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

export type BadgeProps = React.HTMLAttributes<HTMLSpanElement> &
  VariantProps<typeof badgeVariants>;

function Badge({ className, variant, ...props }: BadgeProps) {
  return <span className={cn(badgeVariants({ variant }), className)} {...props} />;
}

export { Badge, badgeVariants };
