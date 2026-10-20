"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { NumberTicker } from "@/components/ui/number-ticker";
import { cn } from "@/lib/utils";

const NAV = ["Overview", "Projects", "Analytics", "Team"];
const KPIS = [
  { label: "Tasks done", value: 128, suffix: "" },
  { label: "On track", value: 94, suffix: "%" },
  { label: "Team load", value: 72, suffix: "%" },
];
const FEED = ["Design review approved", "Build #42 deployed", "New task assigned", "Report exported", "Milestone reached"];
const LINE = [18, 30, 24, 42, 36, 55, 48, 66, 60, 78, 72, 90];

function bars(seed: number) {
  return Array.from({ length: 12 }, (_, i) => 30 + ((Math.sin(seed * 1.7 + i * 1.3) + 1) / 2) * 70);
}

/* Sample-data dashboard: KPIs count up, bars re-balance live, the trend line
   draws itself and an activity feed scrolls. Decorative only. */
export default function DashboardDemo({ compact = false }: { compact?: boolean }) {
  const [tick, setTick] = useState(0);
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const t = setInterval(() => setTick((n) => n + 1), 2200);
    return () => clearInterval(t);
  }, []);

  const b = bars(tick);
  const pts = LINE.map((v, i) => `${(i / (LINE.length - 1)) * 100},${100 - v}`).join(" L");
  const feed = [0, 1, 2, 3].map((k) => FEED[(tick + k) % FEED.length]);

  return (
    <div className="grid h-full grid-cols-[150px_1fr] bg-bg text-[11px]">
      <aside className="hidden flex-col gap-1 border-r border-line/10 bg-surface/70 p-4 sm:flex">
        <div className="mb-5 flex items-center gap-2">
          <span className="h-6 w-6 bg-brand" />
          <span className="font-mono text-[11px] uppercase tracking-[.08em] text-ink">Workspace</span>
        </div>
        {NAV.map((n, i) => (
          <motion.div
            key={n}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 + i * 0.07 }}
            className={cn("flex items-center gap-2.5 px-2.5 py-2", i === 0 ? "bg-brand/15 text-ink" : "text-subtle")}
          >
            <span className={cn("h-2.5 w-2.5", i === 0 ? "bg-brand" : "bg-line/20")} />
            {n}
          </motion.div>
        ))}
      </aside>

      <div className="col-span-2 flex min-w-0 flex-col gap-3 p-4 sm:col-span-1 sm:p-5">
        <div className="flex items-center justify-between">
          <div>
            <div className="text-[13px] font-semibold text-ink">Overview</div>
            <div className="mt-0.5 text-subtle">Everything in one place</div>
          </div>
          <span className="flex items-center gap-1.5 border border-line/15 px-2.5 py-1 font-mono text-[11px] uppercase tracking-[.1em] text-brand2">
            <motion.span className="h-1.5 w-1.5 rounded-full bg-brand" animate={{ opacity: [1, 0.3, 1] }} transition={{ duration: 1.4, repeat: Infinity }} />
            Live
          </span>
        </div>

        <div className="grid grid-cols-3 gap-2.5">
          {KPIS.map((k, i) => (
            <motion.div
              key={k.label}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + i * 0.1 }}
              className="border border-line/10 bg-surface/70 p-3"
            >
              <div className="text-subtle">{k.label}</div>
              <div className="mt-1.5 text-xl font-semibold tracking-tight text-ink">
                <NumberTicker value={k.value} suffix={k.suffix} />
              </div>
              <div className="mt-2 h-1 w-full bg-line/10">
                <motion.div className="h-full bg-brand" initial={{ width: 0 }} animate={{ width: `${40 + i * 22}%` }} transition={{ duration: 1.2, delay: 0.4 + i * 0.1 }} />
              </div>
            </motion.div>
          ))}
        </div>

        <div className={cn("grid min-h-0 flex-1 gap-2.5", compact ? "grid-cols-1" : "grid-cols-[1.5fr_1fr]")}>
          <div className="relative flex min-h-[120px] flex-col border border-line/10 bg-surface/70 p-3.5">
            <div className="mb-2 flex items-center justify-between gap-2">
              <span className="text-ink">Activity</span>
              <span className="whitespace-nowrap text-[10px] font-semibold uppercase tracking-[.08em] text-subtle">Sample</span>
            </div>
            <div className="relative flex-1">
              <div className="absolute inset-0 flex items-end gap-1">
                {b.map((h, i) => (
                  <motion.div
                    key={i}
                    className="flex-1 bg-gradient-to-t from-brand/10 to-brand/70"
                    initial={{ height: 0 }}
                    animate={{ height: `${h}%` }}
                    transition={{ duration: 0.9, delay: tick === 0 ? 0.3 + i * 0.04 : 0, ease: "easeOut" }}
                  />
                ))}
              </div>
              {/* scanning glint */}
              <motion.span
                aria-hidden="true"
                className="pointer-events-none absolute inset-y-0 w-10 bg-gradient-to-r from-transparent via-brand2/25 to-transparent"
                initial={{ left: "-15%" }}
                animate={{ left: "110%" }}
                transition={{ duration: 3.2, repeat: Infinity, repeatDelay: 1.2, ease: "easeInOut" }}
              />
              {/* live endpoint */}
              <span aria-hidden="true" className="absolute right-0 top-[10%] -translate-y-1/2 translate-x-1/2">
                <motion.span className="absolute inset-0 -m-2 rounded-full bg-brand2/50" animate={{ scale: [1, 2.4], opacity: [0.7, 0] }} transition={{ duration: 1.6, repeat: Infinity }} />
                <span className="relative block h-2 w-2 rounded-full bg-brand2" />
              </span>
              <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="absolute inset-0 h-full w-full overflow-visible">
                <motion.path
                  d={`M${pts}`}
                  fill="none"
                  stroke="rgb(var(--brand2))"
                  strokeWidth="1.6"
                  vectorEffect="non-scaling-stroke"
                  strokeLinejoin="round"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 1.8, delay: 0.5, ease: "easeInOut" }}
                />
              </svg>
            </div>
          </div>

          {!compact && (
            <div className="overflow-hidden border border-line/10 bg-surface/70 p-3.5">
              <div className="mb-2.5 text-ink">Recent</div>
              <div className="space-y-2.5">
                <AnimatePresence initial={false} mode="popLayout">
                  {feed.map((f, i) => (
                    <motion.div
                      key={`${tick}-${i}`}
                      layout
                      initial={{ opacity: 0, x: 16 }}
                      animate={{ opacity: 1 - i * 0.18, x: 0 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.4 }}
                      className="flex items-center gap-2.5"
                    >
                      <span className="h-1.5 w-1.5 shrink-0 bg-brand" />
                      <span className="truncate text-muted">{f}</span>
                    </motion.div>
                  ))}
                </AnimatePresence>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
