"use client";

import { useEffect, useRef } from "react";

// Soft orange light that trails the pointer — sits under content glows
// via mix-blend-mode:screen, so it reads as ambient light, not an overlay.
export default function CursorGlow() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (window.innerWidth <= 768) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let mx = window.innerWidth / 2;
    let my = window.innerHeight / 3;
    let x = mx;
    let y = my;
    let raf = 0;

    function onMove(e: MouseEvent) {
      mx = e.clientX;
      my = e.clientY;
    }

    function anim() {
      x += (mx - x) * 0.08;
      y += (my - y) * 0.08;
      if (ref.current) {
        ref.current.style.left = x + "px";
        ref.current.style.top = y + "px";
      }
      raf = requestAnimationFrame(anim);
    }

    document.addEventListener("mousemove", onMove, { passive: true });
    raf = requestAnimationFrame(anim);

    return () => {
      document.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(raf);
    };
  }, []);

  return <div id="cursor-glow" ref={ref} aria-hidden="true"></div>;
}
