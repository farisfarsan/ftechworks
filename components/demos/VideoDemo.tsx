"use client";

import { motion } from "motion/react";
import { Play } from "lucide-react";

const TRACKS = [
  { label: "V1", clips: [{ l: 2, w: 28, c: "bg-brand/80" }, { l: 32, w: 22, c: "bg-brand2/70" }, { l: 56, w: 36, c: "bg-brand/60" }] },
  { label: "V2", clips: [{ l: 14, w: 20, c: "bg-cyan/60" }, { l: 58, w: 18, c: "bg-cyan/50" }] },
  { label: "A1", clips: [{ l: 2, w: 90, c: "bg-line/25" }] },
];

/* Video-editor demo: preview with a playhead sweeping across a multi-track
   timeline while clips drop into place. */
export default function VideoDemo() {
  return (
    <div className="flex h-full flex-col bg-bg">
      <div className="relative flex-1 overflow-hidden border-b border-line/10">
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-brand/50 via-surface2 to-cyan/30"
          animate={{ scale: [1, 1.12, 1], rotate: [0, 1.5, 0] }}
          transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
        />
        <div className="absolute inset-0 grid place-items-center">
          <motion.span
            className="grid h-16 w-16 place-items-center border border-line/40 bg-bg/50 text-ink backdrop-blur"
            animate={{ scale: [1, 1.08, 1] }}
            transition={{ duration: 2.4, repeat: Infinity }}
          >
            <Play className="h-7 w-7 fill-ink" />
          </motion.span>
        </div>
        <div className="absolute bottom-3 left-4 text-[11px] font-semibold uppercase tracking-[.08em] text-ink/80">Promo · 00:24</div>
        <div className="absolute right-4 top-3 flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-[.08em] text-ink/80">
          <motion.span className="h-1.5 w-1.5 rounded-full bg-red-500" animate={{ opacity: [1, 0.2, 1] }} transition={{ duration: 1.2, repeat: Infinity }} /> Rec
        </div>
      </div>

      <div className="relative space-y-1.5 bg-surface/70 p-4">
        <div className="mb-2 flex justify-between text-[10px] text-subtle">
          {["0:00", "0:06", "0:12", "0:18", "0:24"].map((t) => (
            <span key={t}>{t}</span>
          ))}
        </div>
        {TRACKS.map((t, ti) => (
          <div key={t.label} className="relative flex items-center gap-2">
            <span className="w-5 text-[10px] text-subtle">{t.label}</span>
            <div className="relative h-7 flex-1 bg-bg/60">
              {t.clips.map((c, ci) => (
                <motion.span
                  key={ci}
                  className={`absolute top-0 h-full ${c.c}`}
                  style={{ left: `${c.l}%`, width: `${c.w}%`, transformOrigin: "left" }}
                  initial={{ scaleX: 0, opacity: 0 }}
                  animate={{ scaleX: 1, opacity: 1 }}
                  transition={{ delay: 0.3 + ti * 0.2 + ci * 0.15, duration: 0.5 }}
                />
              ))}
            </div>
          </div>
        ))}
        <motion.span
          aria-hidden="true"
          className="pointer-events-none absolute bottom-3 top-7 w-px bg-brand2"
          initial={{ left: "9%" }}
          animate={{ left: ["9%", "96%"] }}
          transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
        />
      </div>
    </div>
  );
}
