import Link from "next/link";
import type { ComponentProps, ReactNode } from "react";
import { cn } from "@/lib/utils";

type Variant = "primary" | "secondary" | "ghost";
type Size = "md" | "lg";

const base =
  "group/btn relative inline-flex items-center justify-center gap-2.5 whitespace-nowrap rounded-none border font-mono font-semibold uppercase tracking-[.1em] transition-colors duration-200 disabled:pointer-events-none disabled:opacity-60";

const variants: Record<Variant, string> = {
  primary: "border-brand bg-brand text-onbrand hover:bg-brand2 hover:border-brand2 overflow-hidden",
  secondary: "border-line/30 bg-transparent text-ink hover:border-brand hover:text-brand2",
  ghost: "border-transparent text-ink/80 hover:text-brand2",
};

const sizes: Record<Size, string> = {
  md: "h-10 px-5 text-xs",
  lg: "h-12 px-7 text-[13px]",
};

type Props = {
  variant?: Variant;
  size?: Size;
  className?: string;
  children: ReactNode;
} & (({ href: string } & Omit<ComponentProps<"a">, "href">) | ({ href?: undefined } & ComponentProps<"button">));

export function Button({ variant = "primary", size = "md", className, children, ...rest }: Props) {
  const cls = cn(base, variants[variant], sizes[size], className);
  const shine = null;

  if ("href" in rest && rest.href !== undefined) {
    const { href, ...a } = rest as { href: string } & ComponentProps<"a">;
    const external = /^https?:|^mailto:/.test(href);
    return external ? (
      <a href={href} className={cls} {...a}>
        {shine}
        <span className="relative inline-flex items-center gap-2">{children}</span>
      </a>
    ) : (
      <Link href={href} className={cls} {...(a as object)}>
        {shine}
        <span className="relative inline-flex items-center gap-2">{children}</span>
      </Link>
    );
  }
  return (
    <button className={cls} {...(rest as ComponentProps<"button">)}>
      {shine}
      <span className="relative inline-flex items-center gap-2">{children}</span>
    </button>
  );
}
