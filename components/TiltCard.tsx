"use client";

import type { CSSProperties, ReactNode, Ref } from "react";
import Link from "next/link";
import { useTilt } from "@/lib/useTilt";

export default function TiltCard({
  href,
  target,
  rel,
  intensity,
  className,
  style,
  "data-cat": dataCat,
  children,
}: {
  href?: string;
  target?: string;
  rel?: string;
  intensity?: { x: number; y: number };
  className?: string;
  style?: CSSProperties;
  "data-cat"?: string;
  children: ReactNode;
}) {
  const ref = useTilt<HTMLElement>(intensity);

  if (href) {
    if (href.startsWith("/") && !target) {
      return (
        <Link
          ref={ref as unknown as Ref<HTMLAnchorElement>}
          href={href}
          className={className}
          style={style}
          data-cat={dataCat}
        >
          {children}
        </Link>
      );
    }
    return (
      <a
        ref={ref as unknown as Ref<HTMLAnchorElement>}
        href={href}
        target={target}
        rel={rel}
        className={className}
        style={style}
        data-cat={dataCat}
      >
        {children}
      </a>
    );
  }

  return (
    <div
      ref={ref as unknown as Ref<HTMLDivElement>}
      className={className}
      style={style}
      data-cat={dataCat}
    >
      {children}
    </div>
  );
}
