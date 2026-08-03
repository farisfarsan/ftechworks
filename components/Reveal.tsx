"use client";

import { useEffect, useRef, useState, type ReactNode, type CSSProperties } from "react";

export default function Reveal({
  children,
  className = "",
  delay,
  style,
  "data-cat": dataCat,
}: {
  children: ReactNode;
  className?: string;
  delay?: "d1" | "d2" | "d3" | "d4";
  style?: CSSProperties;
  "data-cat"?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [on, setOn] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setOn(true);
            obs.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.07 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  const classes = ["r", delay, on ? "on" : "", className].filter(Boolean).join(" ");

  return (
    <div ref={ref} className={classes} style={style} data-cat={dataCat}>
      {children}
    </div>
  );
}
