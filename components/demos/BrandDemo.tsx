"use client";

import { useEffect, useState } from "react";
import { motion } from "motion/react";

const SWATCHES = ["bg-brand", "bg-brand2", "bg-cyan", "bg-surface2", "bg-ink"];
const WORD = "BRAND".split("");

/* Identity-system demo: mark builds, wordmark types in, palette and type
   specimen pop. Replays every few seconds. */
export default function BrandDemo() {
  const [cycle, setCycle] = useState(0);
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const t = setInterval(() => setCycle((n) => n + 1), 7000);
    return () => clearInterval(t);
  }, []);

  return (
    <div key={cycle} className="relative grid h-full grid-cols-[1.2fr_1fr] gap-px bg-line/10">
      {/* mark + wordmark */}
      <div className="relative flex flex-col items-center justify-center gap-6 bg-bg p-6">
        {["left-3 top-3", "right-3 top-3", "left-3 bottom-3", "right-3 bottom-3"].map((p) => (
          <span key={p} className={`absolute ${p} text-[10px] text-subtle`}>+</span>
        ))}
        <motion.div
          initial={{ scale: 0, rotate: -90 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ type: "spring", stiffness: 160, damping: 14, delay: 0.2 }}
          className="relative grid h-24 w-24 place-items-center bg-brand"
        >
          <motion.span initial={{ opacity: 0, scale: 0.4 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.7 }} className="font-display text-5xl font-bold tracking-tighter text-onbrand">
            F
          </motion.span>
          <motion.span
            className="absolute -inset-2 border border-brand/60"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: [0, 1, 0], scale: [0.8, 1.15, 1.3] }}
            transition={{ duration: 1.6, delay: 0.9 }}
          />
        </motion.div>
        <div className="flex gap-1.5">
          {WORD.map((l, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 + i * 0.08 }}
              className="font-display text-xl font-bold tracking-[.3em] text-ink"
            >
              {l}
            </motion.span>
          ))}
        </div>
        <motion.div initial={{ width: 0 }} animate={{ width: 120 }} transition={{ delay: 1.6, duration: 0.8 }} className="h-px bg-brand" />
      </div>

      {/* palette + type */}
      <div className="grid grid-rows-[1fr_1fr] gap-px">
        <div className="flex flex-col justify-center gap-3 bg-bg p-5">
          <span className="text-[11px] font-semibold uppercase tracking-[.1em] text-subtle">Palette</span>
          <div className="flex gap-2">
            {SWATCHES.map((c, i) => (
              <motion.span
                key={c}
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ type: "spring", delay: 1.4 + i * 0.1 }}
                className={`h-10 flex-1 border border-line/15 ${c}`}
              />
            ))}
          </div>
        </div>
        <div className="flex flex-col justify-center gap-2 bg-bg p-5">
          <span className="text-[11px] font-semibold uppercase tracking-[.1em] text-subtle">Typography</span>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2 }} className="flex items-end gap-3">
            <span className="font-display text-5xl font-bold leading-none tracking-tighter text-ink">Aa</span>
            <span className="pb-1 text-xs leading-tight text-muted">Headline<br />Body & labels</span>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
