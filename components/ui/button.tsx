import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full font-mono text-xs font-medium uppercase tracking-wider transition-all duration-300 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:pointer-events-none disabled:opacity-40",
  {
    variants: {
      variant: {
        primary:
          "bg-accent text-background font-bold hover:scale-[1.03] hover:bg-accent-soft hover:shadow-[0_12px_28px_-12px_var(--color-accent)] active:scale-[0.98]",
        ghost:
          "border border-border text-foreground hover:border-accent/50 hover:text-accent hover:scale-[1.02] active:scale-[0.98]",
        link: "text-accent underline-offset-4 hover:underline",
      },
      size: {
        default: "h-12 px-6",
        sm: "h-9 px-4 text-[11px]",
        lg: "h-14 px-8 text-sm",
        icon: "h-10 w-10 rounded-full",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "default",
    },
  }
);

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof buttonVariants>;

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <button
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
