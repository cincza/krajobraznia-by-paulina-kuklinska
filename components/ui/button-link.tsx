import type { ComponentProps } from "react";

import Link from "next/link";

import { cn } from "@/lib/cn";

type ButtonLinkProps = ComponentProps<typeof Link> & {
  variant?: "primary" | "secondary" | "outline";
};

const variants = {
  primary:
    "bg-forest text-surface shadow-[0_18px_55px_rgba(19,29,23,0.18)] hover:-translate-y-0.5 hover:bg-forest-soft",
  secondary:
    "bg-white text-forest shadow-[0_18px_55px_rgba(255,255,255,0.12)] hover:-translate-y-0.5 hover:bg-surface",
  outline:
    "border border-white/20 bg-white/10 text-surface backdrop-blur-sm hover:-translate-y-0.5 hover:bg-white/[0.16]",
} as const;

export function ButtonLink({
  className,
  variant = "primary",
  style,
  ...props
}: ButtonLinkProps) {
  const resolvedStyle =
    variant === "secondary"
      ? { color: "var(--forest)", ...style }
      : variant === "outline"
        ? { color: "var(--surface)", ...style }
        : { color: "var(--surface)", ...style };

  return (
    <Link
      className={cn(
        "inline-flex min-h-12 items-center justify-center rounded-full px-5 text-center text-[0.78rem] leading-5 font-medium tracking-[0.16em] uppercase transition-all duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-forest sm:min-h-12 sm:px-6 sm:text-sm",
        variants[variant],
        className,
      )}
      style={resolvedStyle}
      {...props}
    />
  );
}
