"use client";

import { useEffect, useRef, useState } from "react";

export default function RotatingText({
  items,
  interval = 2200,
}: {
  items: string[];
  interval?: number;
}) {
  const [index, setIndex] = useState(0);
  const [visible, setVisible] = useState(true);
  const swapRef = useRef<ReturnType<typeof setTimeout>>();

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const cycle = setInterval(() => {
      setVisible(false);
      swapRef.current = setTimeout(() => {
        setIndex((prev) => (prev + 1) % items.length);
        setVisible(true);
      }, 260);
    }, interval);

    return () => {
      clearInterval(cycle);
      if (swapRef.current) clearTimeout(swapRef.current);
    };
  }, [items.length, interval]);

  return (
    <span className="hero-rot" aria-live="off">
      <span className="hero-rot-label">We build</span>
      <span className={`rot${visible ? " on" : ""}`}>{items[index]}</span>
      <span className="hero-rot-caret" aria-hidden="true"></span>
    </span>
  );
}
