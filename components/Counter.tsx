"use client";

import { useEffect, useRef, useState } from "react";

export default function Counter({ count, suffix = "" }: { count: number; suffix?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [val, setVal] = useState(0);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !started.current) {
            started.current = true;
            const dur = 1300;
            const step = 16;
            const steps = dur / step;
            const inc = count / steps;
            let v = 0;
            const id = setInterval(() => {
              v += inc;
              if (v >= count) {
                v = count;
                clearInterval(id);
              }
              setVal(Math.round(v));
            }, step);
            obs.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.5 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [count]);

  return (
    <div className="stat-n" ref={ref}>
      {val}
      {suffix}
    </div>
  );
}
