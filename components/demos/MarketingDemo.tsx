"use client";

import { useEffect, useState } from "react";
import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";

const PTS = [10, 18, 14, 26, 24, 38, 34, 52, 50, 68, 74, 92];
const ROWS = [
  { kw: "custom web development", from: 14, to: 3 },
  { kw: "ai chatbot for business", from: 22, to: 5 },
  { kw: "brand identity design", from: 31, to: 8 },
];

/* SEO growth demo: traffic line draws itself, keyword ranks climb. Sample data. */
export default function MarketingDemo() {
  const [cycle, setCycle] = useState(0);
  const [up, setUp] = useState(false);
  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    setUp(false);
    const a = setTimeout(() => setUp(true), 1400);
    if (reduced) return () => clearTimeout(a);
    const t = setInterval(() => setCycle((n) => n + 1), 7500);
    return () => {
      clearTimeout(a);
      clearInterval(t);
    };
  }, [cycle]);

  const d = PTS.map((v, i) => `${i === 0 ? "M" : "L"}${(i / (PTS.length - 1)) * 100},${100 - v}`).join(" ");

  return (
    <div key={cycle} className="flex h-full flex-col gap-3 bg-bg p-5">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-[13px] font-semibold text-ink">Organic traffic</p>
          <p className="text-[11px] font-semibold uppercase tracking-[.08em] text-subtle">Last 12 months · sample data</p>
        </div>
        <motion.span
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.6 }}
          className="flex items-center gap-1 bg-brand px-2.5 py-1 text-[11px] font-semibold text-onbrand"
        >
          <ArrowUpRight className="h-3.5 w-3.5" /> Growing
        </motion.span>
      </div>

      <div className="relative min-h-[130px] flex-1 border border-line/10 bg-surface/60 p-3">
        <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="h-full w-full overflow-visible">
          {[25, 50, 75].map((y) => (
            <line key={y} x1="0" x2="100" y1={y} y2={y} stroke="rgb(var(--line) / .08)" vectorEffect="non-scaling-stroke" />
          ))}
          <motion.path d={`${d} L100,100 L0,100 Z`} fill="rgb(var(--brand) / .14)" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.6, duration: 1 }} />
          <motion.path
            d={d}
            fill="none"
            stroke="rgb(var(--brand2))"
            strokeWidth="2"
            vectorEffect="non-scaling-stroke"
            strokeLinejoin="round"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2.2, ease: "easeInOut" }}
          />
        </svg>
      </div>

      <div className="space-y-2">
        {ROWS.map((r, i) => (
          <motion.div
            key={r.kw}
            initial={{ opacity: 0, x: -14 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5 + i * 0.15 }}
            className="flex items-center justify-between border border-line/10 bg-surface/60 px-3.5 py-2.5"
          >
            <span className="truncate text-[12px] text-muted">{r.kw}</span>
            <span className="flex items-center gap-2 text-[11px] font-semibold">
              <span className="text-subtle line-through">#{r.from}</span>
              <motion.span key={String(up)} initial={{ y: 8, opacity: 0 }} animate={{ y: 0, opacity: 1 }} className={up ? "text-brand2" : "text-subtle"}>
                #{up ? r.to : r.from}
              </motion.span>
            </span>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
