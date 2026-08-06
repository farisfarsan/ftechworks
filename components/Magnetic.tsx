"use client";

import { useRef, type ReactNode } from "react";

// Magnetic hover: the child is pulled toward the cursor while it is over
// the wrapper, and springs back on leave. Pointer-only (no effect on touch).
export default function Magnetic({
  children,
  strength = 0.32,
}: {
  children: ReactNode;
  strength?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);

  function onMove(e: React.PointerEvent) {
    const el = ref.current;
    if (!el || e.pointerType !== "mouse") return;
    const r = el.getBoundingClientRect();
    const dx = e.clientX - (r.left + r.width / 2);
    const dy = e.clientY - (r.top + r.height / 2);
    el.style.transition = "transform .18s cubic-bezier(.2,.7,.3,1)";
    el.style.transform = `translate(${dx * strength}px, ${dy * strength}px)`;
  }

  function onLeave() {
    const el = ref.current;
    if (!el) return;
    el.style.transition = "transform .45s cubic-bezier(.2,1.4,.4,1)";
    el.style.transform = "translate(0,0)";
  }

  return (
    <div className="mag" ref={ref} onPointerMove={onMove} onPointerLeave={onLeave}>
      {children}
    </div>
  );
}
