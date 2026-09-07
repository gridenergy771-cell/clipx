import type { ReactNode } from "react";
import { Link } from "@tanstack/react-router";
import { cn } from "@/lib/utils";

type Variant = "primary" | "outline" | "quiet";

const base =
  "group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-full text-[0.78rem] font-semibold uppercase tracking-[0.14em] transition-all duration-300 cursor-pointer disabled:pointer-events-none disabled:opacity-55";

const sizes = {
  md: "h-11 px-6",
  sm: "h-9 px-4 text-[0.7rem]",
  lg: "h-[3.25rem] px-8",
} as const;

const variants: Record<Variant, string> = {
  primary:
    "bg-brand-gradient text-[oklch(0.14_0.02_265)] shadow-[0_18px_40px_-22px_var(--brand-blue)] hover:shadow-[0_22px_50px_-18px_var(--brand-violet)] hover:-translate-y-0.5",
  outline:
    "border border-border bg-[oklch(0.99_0_0/4%)] text-foreground hover:border-[oklch(0.99_0_0/28%)] hover:-translate-y-0.5",
  quiet: "text-muted-foreground hover:text-foreground",
};

export function actionClass(variant: Variant = "primary", size: keyof typeof sizes = "md") {
  return cn(base, sizes[size], variants[variant]);
}

export function ActionButton({
  children,
  variant = "primary",
  size = "md",
  className,
  ...rest
}: {
  children: ReactNode;
  variant?: Variant;
  size?: keyof typeof sizes;
} & React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button className={cn(actionClass(variant, size), className)} {...rest}>
      <span className="relative z-10 inline-flex items-center gap-2">{children}</span>
    </button>
  );
}

/** External / hash links. */
export function ActionLink({
  children,
  href,
  external,
  variant = "primary",
  size = "md",
  className,
  ...rest
}: {
  children: ReactNode;
  href: string;
  external?: boolean;
  variant?: Variant;
  size?: keyof typeof sizes;
} & React.AnchorHTMLAttributes<HTMLAnchorElement>) {
  return (
    <a
      href={href}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      className={cn(actionClass(variant, size), className)}
      {...rest}
    >
      <span className="relative z-10 inline-flex items-center gap-2">{children}</span>
    </a>
  );
}

/** Internal router links. */
export function ActionRouteLink({
  children,
  variant = "primary",
  size = "md",
  className,
  ...rest
}: React.ComponentProps<typeof Link> & {
  children: ReactNode;
  variant?: Variant;
  size?: keyof typeof sizes;
}) {
  return (
    <Link className={cn(actionClass(variant, size), className as string)} {...rest}>
      <span className="relative z-10 inline-flex items-center gap-2">{children}</span>
    </Link>
  );
}
