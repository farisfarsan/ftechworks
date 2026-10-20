"use client";

import { useRef, type ReactNode, type MouseEvent } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

/* Card with a cursor-following radial highlight (Aceternity/Magic UI style).
   Renders a <Link> when `href` is given, otherwise a <div>. */
export function SpotlightCard({
  children,
  className,
  href,
  external,
}: {
  children: ReactNode;
  className?: string;
  href?: string;
  external?: boolean;
}) {
  const ref = useRef<HTMLElement | null>(null);

  function onMove(e: MouseEvent) {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    el.style.setProperty("--mx", `${e.clientX - r.left}px`);
    el.style.setProperty("--my", `${e.clientY - r.top}px`);
  }

  const cls = cn(
    "group relative isolate block overflow-hidden rounded-3xl border border-line/10 bg-surface/70 transition-colors duration-300 hover:border-line/25",
    className
  );
  const inner = (
    <>
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -inset-px z-0 rounded-[inherit] opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background:
            "radial-gradient(420px circle at var(--mx,50%) var(--my,50%), rgb(var(--brand) / .16), transparent 60%)",
        }}
      />
      <div className="relative z-10 h-full">{children}</div>
    </>
  );

  if (href) {
    return external ? (
      <a ref={ref as React.Ref<HTMLAnchorElement>} href={href} target="_blank" rel="noopener" onMouseMove={onMove} className={cls}>
        {inner}
      </a>
    ) : (
      <Link ref={ref as React.Ref<HTMLAnchorElement>} href={href} onMouseMove={onMove} className={cls}>
        {inner}
      </Link>
    );
  }
  return (
    <div ref={ref as React.Ref<HTMLDivElement>} onMouseMove={onMove} className={cls}>
      {inner}
    </div>
  );
}
