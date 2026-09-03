import Link from "next/link";
import type { ComponentProps } from "react";
import { cn } from "@/lib/utils";

type Variant = "primary" | "gold" | "outline" | "ghost" | "light";
type Size = "sm" | "md" | "lg";

const base =
  "inline-flex items-center justify-center gap-2 font-medium rounded-full transition-all duration-200 whitespace-nowrap focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 disabled:opacity-60 disabled:pointer-events-none";

const variants: Record<Variant, string> = {
  primary:
    "bg-ink text-white hover:bg-ink-soft shadow-soft hover:-translate-y-0.5 focus-visible:outline-ink",
  gold: "bg-gold text-white hover:bg-[#a5772f] shadow-soft hover:-translate-y-0.5 focus-visible:outline-gold",
  outline:
    "border border-ink/20 text-ink hover:border-ink hover:bg-ink hover:text-white focus-visible:outline-ink",
  ghost: "text-ink hover:bg-ink/5 focus-visible:outline-ink",
  light:
    "bg-white text-ink hover:bg-gold-tint shadow-soft hover:-translate-y-0.5 focus-visible:outline-white",
};

const sizes: Record<Size, string> = {
  sm: "text-sm px-4 py-2",
  md: "text-[0.95rem] px-5 py-2.5",
  lg: "text-base px-7 py-3.5",
};

interface ButtonProps {
  variant?: Variant;
  size?: Size;
  className?: string;
  children: React.ReactNode;
}

export function Button({
  href,
  variant = "primary",
  size = "md",
  className,
  children,
  ...props
}: ButtonProps & { href: string } & Omit<ComponentProps<typeof Link>, "href">) {
  const classes = cn(base, variants[variant], sizes[size], className);
  const isExternal = /^(https?:|tel:|mailto:|viber:)/.test(href);

  if (isExternal) {
    return (
      <a
        href={href}
        className={classes}
        {...(href.startsWith("http")
          ? { target: "_blank", rel: "noopener noreferrer" }
          : {})}
      >
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={classes} {...props}>
      {children}
    </Link>
  );
}
