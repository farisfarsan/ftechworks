"use client";

import { useEffect, useRef } from "react";

export function useTilt<T extends HTMLElement>(intensity: { x: number; y: number } = { x: 10, y: -8 }) {
  const ref = useRef<T>(null);

  useEffect(() => {
    const card = ref.current;
    if (!card || window.innerWidth <= 768) return;

    function onMove(e: MouseEvent) {
      const r = card!.getBoundingClientRect();
      const x = ((e.clientX - r.left) / r.width - 0.5) * intensity.x;
      const y = ((e.clientY - r.top) / r.height - 0.5) * intensity.y;
      card!.style.transform = `translateY(-7px) rotateY(${x}deg) rotateX(${y}deg)`;
      card!.style.transition = "transform .08s";
    }
    function onLeave() {
      card!.style.transform = "";
      card!.style.transition = "transform .45s ease";
    }

    card.addEventListener("mousemove", onMove);
    card.addEventListener("mouseleave", onLeave);
    return () => {
      card.removeEventListener("mousemove", onMove);
      card.removeEventListener("mouseleave", onLeave);
    };
  }, [intensity.x, intensity.y]);

  return ref;
}
