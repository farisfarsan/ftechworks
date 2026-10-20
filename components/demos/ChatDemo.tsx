"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Bot, Check, SendHorizontal } from "lucide-react";
import { cn } from "@/lib/utils";

type Msg = { from: "user" | "bot"; text: string; chips?: string[] };

// Illustrative conversation — shows how a support bot qualifies a lead.
const SCRIPT: Msg[] = [
  { from: "user", text: "Hi, can you help me track my order?" },
  { from: "bot", text: "Of course! What's your order number?" },
  { from: "user", text: "#48213" },
  { from: "bot", text: "Found it. It shipped today and arrives Thursday." },
  { from: "bot", text: "Want delivery updates on WhatsApp?", chips: ["Yes, please", "No thanks"] },
];

export default function ChatDemo() {
  const [count, setCount] = useState(0);
  const [typing, setTyping] = useState(false);
  const [done, setDone] = useState(false);
  const timers = useRef<ReturnType<typeof setTimeout>[]>([]);

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) {
      setCount(SCRIPT.length);
      setDone(true);
      return;
    }
    let cancelled = false;
    const later = (fn: () => void, ms: number) => {
      const t = setTimeout(() => !cancelled && fn(), ms);
      timers.current.push(t);
    };

    function play(i: number) {
      if (i >= SCRIPT.length) {
        setDone(true);
        later(() => {
          setDone(false);
          setCount(0);
          later(() => play(0), 700);
        }, 4200);
        return;
      }
      const m = SCRIPT[i];
      if (m.from === "bot") {
        setTyping(true);
        later(() => {
          setTyping(false);
          setCount(i + 1);
          later(() => play(i + 1), 900);
        }, 1100);
      } else {
        later(() => {
          setCount(i + 1);
          later(() => play(i + 1), 700);
        }, 900);
      }
    }
    later(() => play(0), 600);
    return () => {
      cancelled = true;
      timers.current.forEach(clearTimeout);
      timers.current = [];
    };
  }, []);

  return (
    <div className="relative flex h-full flex-col bg-bg">
      <div className="flex items-center gap-3 border-b border-line/10 bg-surface/80 px-5 py-3.5">
        <span className="grid h-9 w-9 place-items-center bg-brand text-onbrand">
          <Bot className="h-5 w-5" />
        </span>
        <div className="leading-tight">
          <p className="text-sm font-semibold text-ink">Support assistant</p>
          <p className="flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-[.08em] text-brand2">
            <span className="h-1.5 w-1.5 rounded-full bg-brand" /> Online · replies instantly
          </p>
        </div>
      </div>

      <div className="flex flex-1 flex-col justify-end gap-2.5 overflow-hidden p-5">
        <AnimatePresence initial={false}>
          {SCRIPT.slice(0, count).map((m, i) => (
            <motion.div
              key={i}
              layout
              initial={{ opacity: 0, y: 14, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.35 }}
              className={cn("flex max-w-[82%] flex-col gap-2", m.from === "user" ? "self-end items-end" : "self-start items-start")}
            >
              <div
                className={cn(
                  "px-4 py-2.5 text-[13px] leading-snug",
                  m.from === "user" ? "bg-brand text-onbrand" : "border border-line/15 bg-surface2 text-ink"
                )}
              >
                {m.text}
              </div>
              {m.chips && (
                <div className="flex gap-2">
                  {m.chips.map((c, ci) => (
                    <span
                      key={c}
                      className={cn(
                        "border px-3 py-1 text-[11px] font-semibold uppercase tracking-[.06em]",
                        ci === 0 ? "border-brand text-brand2" : "border-line/20 text-subtle"
                      )}
                    >
                      {c}
                    </span>
                  ))}
                </div>
              )}
            </motion.div>
          ))}
          {typing && (
            <motion.div
              key="typing"
              layout
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className="flex w-fit items-center gap-1 self-start border border-line/15 bg-surface2 px-4 py-3.5"
            >
              {[0, 1, 2].map((d) => (
                <motion.span
                  key={d}
                  className="h-1.5 w-1.5 rounded-full bg-muted"
                  animate={{ y: [0, -4, 0], opacity: [0.4, 1, 0.4] }}
                  transition={{ duration: 0.9, repeat: Infinity, delay: d * 0.15 }}
                />
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <AnimatePresence>
        {done && (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="absolute right-4 top-[68px] flex items-center gap-2.5 border border-brand/40 bg-bg/95 px-3.5 py-2.5 shadow-card backdrop-blur"
          >
            <span className="grid h-5 w-5 place-items-center bg-brand text-onbrand">
              <Check className="h-3 w-3" />
            </span>
            <span className="text-[11px] font-semibold uppercase tracking-[.08em] text-ink">Lead synced to CRM</span>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="flex items-center gap-3 border-t border-line/10 bg-surface/80 px-5 py-3">
        <span className="flex-1 text-[13px] text-subtle">Type a message…</span>
        <span className="grid h-8 w-8 place-items-center border border-line/20 text-muted">
          <SendHorizontal className="h-4 w-4" />
        </span>
      </div>
    </div>
  );
}
