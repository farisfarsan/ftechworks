"use client";

import { useEffect, useState } from "react";

/* Thin brand-gradient reading progress bar pinned to the very top. */
export default function ProgressBar() {
  const [pct, setPct] = useState(0);

  useEffect(() => {
    let ticking = false;
    function update() {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      setPct(max > 0 ? (window.scrollY / max) * 100 : 0);
      ticking = false;
    }
    function onScroll() {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(update);
    }
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      aria-hidden="true"
      className="fixed inset-x-0 top-0 z-[60] h-[2px] origin-left bg-gradient-to-r from-brand to-cyan"
      style={{ transform: `scaleX(${pct / 100})` }}
    />
  );
}
