"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Bell, CalendarDays, Check, Home, User } from "lucide-react";
import { cn } from "@/lib/utils";

const SCREENS = ["home", "book", "done"] as const;
const DAYS = [12, 13, 14, 15, 16];
const SLOTS = ["09:30", "11:00", "14:15"];

/* Phone mock-up that cycles through three app screens (home → booking →
   confirmation) with a push notification dropping in. Decorative sample UI. */
export default function MobileAppDemo() {
  const [i, setI] = useState(0);
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const t = setInterval(() => setI((n) => (n + 1) % SCREENS.length), 3200);
    return () => clearInterval(t);
  }, []);
  const screen = SCREENS[i];

  return (
    <div className="relative grid h-full place-items-center overflow-hidden bg-bg">
      <div aria-hidden="true" className="absolute h-64 w-64 rounded-full bg-brand/20 blur-[80px]" />

      {/* feature chips */}
      {[
        ["iOS + Android", "left-[6%] top-[14%]"],
        ["Offline ready", "right-[5%] top-[34%]"],
        ["Push alerts", "left-[8%] bottom-[18%]"],
      ].map(([t, pos], k) => (
        <motion.span
          key={t}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: [0, -6, 0] }}
          transition={{ opacity: { delay: 0.4 + k * 0.2 }, y: { duration: 5 + k, repeat: Infinity, ease: "easeInOut" } }}
          className={cn("absolute z-10 hidden border border-line/20 bg-surface/90 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[.08em] text-brand2 backdrop-blur sm:block", pos)}
        >
          {t}
        </motion.span>
      ))}

      {/* phone */}
      <div className="relative h-[88%] max-h-[430px] aspect-[9/18] overflow-hidden rounded-[26px] border-[5px] border-line/25 bg-surface shadow-card">
        <div className="absolute left-1/2 top-1.5 z-20 h-3.5 w-16 -translate-x-1/2 rounded-full bg-black" />

        {/* push notification */}
        <AnimatePresence>
          {screen === "book" && (
            <motion.div
              key="push"
              initial={{ y: -70, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -70, opacity: 0 }}
              transition={{ delay: 1.6, type: "spring", stiffness: 180, damping: 18 }}
              className="absolute inset-x-2 top-7 z-30 flex items-center gap-2 border border-line/20 bg-bg/95 px-2.5 py-2 shadow-card backdrop-blur"
            >
              <span className="grid h-6 w-6 shrink-0 place-items-center bg-brand text-onbrand"><Bell className="h-3.5 w-3.5" /></span>
              <span className="text-[10px] leading-tight text-ink"><b className="block">Reminder</b>Your slot is held for 10 min</span>
            </motion.div>
          )}
        </AnimatePresence>

        <div className="flex h-full flex-col pt-7">
          <div className="relative flex-1 overflow-hidden px-3.5 pb-2">
            <AnimatePresence mode="wait">
              <motion.div key={screen} initial={{ opacity: 0, x: 36 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -36 }} transition={{ duration: 0.4 }} className="h-full">
                {screen === "home" && (
                  <div className="space-y-2.5 pt-2 text-[10px]">
                    <p className="text-[13px] font-bold text-ink">Good morning</p>
                    <div className="grid grid-cols-2 gap-2">
                      {["Upcoming", "Completed"].map((l, k) => (
                        <div key={l} className={cn("p-2.5", k === 0 ? "bg-brand text-onbrand" : "border border-line/15 text-ink")}>
                          <p className="opacity-80">{l}</p>
                          <p className="mt-1 text-lg font-bold">{k === 0 ? 3 : 12}</p>
                        </div>
                      ))}
                    </div>
                    <p className="pt-1 font-semibold text-ink">Today</p>
                    {["Check-in", "Design review", "Follow-up"].map((r) => (
                      <div key={r} className="flex items-center gap-2 border border-line/10 bg-bg/60 p-2">
                        <span className="h-6 w-6 bg-brand/25" />
                        <span className="flex-1 text-muted">{r}</span>
                        <span className="h-1.5 w-1.5 rounded-full bg-brand" />
                      </div>
                    ))}
                  </div>
                )}
                {screen === "book" && (
                  <div className="space-y-2.5 pt-2 text-[10px]">
                    <p className="text-[13px] font-bold text-ink">Book a slot</p>
                    <div className="flex gap-1.5">
                      {DAYS.map((d, k) => (
                        <motion.span key={d} animate={k === 2 ? { backgroundColor: ["rgba(0,0,0,0)", "rgb(198 244 50)"], color: ["rgb(160 180 170)", "rgb(4 28 18)"] } : undefined} transition={{ delay: 0.8, duration: 0.3 }} className="flex-1 border border-line/15 py-2 text-center font-semibold">{d}</motion.span>
                      ))}
                    </div>
                    {SLOTS.map((s, k) => (
                      <motion.div key={s} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 + k * 0.1 }} className={cn("flex items-center justify-between border p-2.5", k === 1 ? "border-brand bg-brand/10 text-ink" : "border-line/15 text-muted")}>
                        {s}
                        {k === 1 && <Check className="h-3.5 w-3.5 text-brand2" />}
                      </motion.div>
                    ))}
                    <motion.div whileInView={{}} className="mt-1 bg-brand py-2.5 text-center font-bold uppercase tracking-[.08em] text-onbrand">Confirm</motion.div>
                  </div>
                )}
                {screen === "done" && (
                  <div className="grid h-full place-items-center text-center text-[10px]">
                    <div>
                      <motion.span initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ type: "spring", delay: 0.2 }} className="mx-auto grid h-14 w-14 place-items-center rounded-full bg-brand text-onbrand">
                        <Check className="h-7 w-7" />
                      </motion.span>
                      <p className="mt-3 text-[13px] font-bold text-ink">You&apos;re booked</p>
                      <p className="mt-1 text-muted">Thu 14 · 11:00</p>
                      <p className="mt-0.5 text-subtle">Confirmation sent</p>
                    </div>
                  </div>
                )}
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="grid grid-cols-3 border-t border-line/15 bg-surface2/60 py-2">
            {[Home, CalendarDays, User].map((Icon, k) => (
              <span key={k} className={cn("grid place-items-center", (screen === "home" && k === 0) || (screen !== "home" && k === 1) ? "text-brand2" : "text-subtle")}>
                <Icon className="h-4 w-4" />
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
