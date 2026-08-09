"use client";

import { useEffect, useRef, useState } from "react";

// SSR/initial paint always shows the real final value — never 0 — so
// crawlers and no-JS visitors see the true number. The count-up is a
// progressive enhancement that only plays when the stat scrolls into
// view from off-screen; if it's already in the viewport on mount
// (common above the fold), it skips straight to the final value with
// no flash.
export default function Counter({ count, suffix = "" }: { count: number; suffix?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [val, setVal] = useState(count);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    let firstCheck = true;

    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !started.current) {
            started.current = true;
            if (!firstCheck) {
              const dur = 1300;
              const step = 16;
              const steps = dur / step;
              const inc = count / steps;
              let v = 0;
              setVal(0);
              const id = setInterval(() => {
                v += inc;
                if (v >= count) {
                  v = count;
                  clearInterval(id);
                }
                setVal(Math.round(v));
              }, step);
            }
            obs.unobserve(entry.target);
          }
        });
        firstCheck = false;
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
