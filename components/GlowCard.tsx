"use client";

import Link from "next/link";
import { useRef, type CSSProperties, type ReactNode } from "react";

// Glass card with 3D tilt and a glow spot that follows the pointer
// (via the --gx/--gy custom properties the CSS radial-gradient reads).
export default function GlowCard({
  href,
  className = "gcard",
  style,
  tilt = 7,
  children,
}: {
  href?: string;
  className?: string;
  style?: CSSProperties;
  tilt?: number;
  children: ReactNode;
}) {
  const ref = useRef<HTMLElement | null>(null);

  function onMove(e: React.PointerEvent) {
    const el = ref.current;
    if (!el || e.pointerType !== "mouse") return;
    const r = el.getBoundingClientRect();
    const px = (e.clientX - r.left) / r.width;
    const py = (e.clientY - r.top) / r.height;
    el.style.setProperty("--gx", `${px * 100}%`);
    el.style.setProperty("--gy", `${py * 100}%`);
    el.style.transform = `perspective(900px) rotateX(${(0.5 - py) * tilt}deg) rotateY(${(px - 0.5) * tilt}deg) translateZ(0)`;
  }

  function onLeave() {
    const el = ref.current;
    if (!el) return;
    el.style.transition = "transform .5s cubic-bezier(.2,1,.4,1)";
    el.style.transform = "perspective(900px) rotateX(0) rotateY(0)";
    setTimeout(() => {
      if (el) el.style.transition = "";
    }, 500);
  }

  const common = {
    className,
    style,
    onPointerMove: onMove,
    onPointerLeave: onLeave,
  };

  if (href) {
    return (
      <Link href={href} ref={ref as React.Ref<HTMLAnchorElement>} {...common}>
        {children}
      </Link>
    );
  }
  return (
    <div ref={ref as React.Ref<HTMLDivElement>} {...common}>
      {children}
    </div>
  );
}
