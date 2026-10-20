"use client";

import { motion } from "motion/react";
import { MousePointer2 } from "lucide-react";

const Bar = ({ w, h = "h-2", c = "bg-line/20" }: { w: string; h?: string; c?: string }) => (
  <div className={`${h} ${w} ${c}`} />
);

const rise = (i: number) => ({
  initial: { opacity: 0, y: 18 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, delay: 0.15 + i * 0.12 },
});

/* A website assembling itself, then scrolling with a cursor that clicks the
   call-to-action. Pure decoration — no real content. */
export default function WebsiteDemo() {
  return (
    <div className="flex h-full flex-col bg-bg">
      <div className="flex items-center gap-2 border-b border-line/10 bg-surface2/70 px-4 py-2.5">
        <span className="h-2 w-2 rounded-full bg-[#ff5f57]" />
        <span className="h-2 w-2 rounded-full bg-[#febc2e]" />
        <span className="h-2 w-2 rounded-full bg-[#28c840]" />
        <div className="mx-auto w-48 border border-line/10 bg-bg/60 px-3 py-0.5 text-center text-[10px] text-subtle">yourbrand.com</div>
      </div>

      <div className="relative flex-1 overflow-hidden">
        <motion.div
          className="space-y-8 p-6"
          animate={{ y: [0, 0, -230, -230, 0] }}
          transition={{ duration: 14, times: [0, 0.18, 0.5, 0.78, 1], repeat: Infinity, ease: "easeInOut", delay: 2.2 }}
        >
          {/* nav */}
          <motion.div {...rise(0)} className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="h-5 w-5 bg-brand" />
              <Bar w="w-14" />
            </div>
            <div className="flex items-center gap-4">
              <Bar w="w-8" /> <Bar w="w-8" /> <Bar w="w-8" />
              <span className="h-6 w-16 bg-brand/80" />
            </div>
          </motion.div>

          {/* hero */}
          <div className="grid grid-cols-[1.2fr_1fr] items-center gap-6">
            <div className="space-y-3">
              <motion.div {...rise(1)}><Bar w="w-24" h="h-1.5" c="bg-brand2/60" /></motion.div>
              <motion.div {...rise(2)} className="space-y-2"><Bar w="w-full" h="h-4" c="bg-ink/80" /><Bar w="w-4/5" h="h-4" c="bg-ink/80" /></motion.div>
              <motion.div {...rise(3)} className="space-y-1.5 pt-1"><Bar w="w-full" /><Bar w="w-2/3" /></motion.div>
              <motion.div {...rise(4)} className="flex gap-2 pt-2">
                <motion.span
                  className="h-8 w-24 bg-brand"
                  animate={{ scale: [1, 1, 0.94, 1, 1] }}
                  transition={{ duration: 14, times: [0, 0.14, 0.17, 0.2, 1], repeat: Infinity, delay: 2.2 }}
                />
                <span className="h-8 w-20 border border-line/25" />
              </motion.div>
            </div>
            <motion.div {...rise(3)} className="aspect-[4/3] bg-gradient-to-br from-brand/40 via-cyan/20 to-transparent border border-line/10" />
          </div>

          {/* feature cards */}
          <div className="grid grid-cols-3 gap-3">
            {[0, 1, 2].map((i) => (
              <motion.div key={i} {...rise(5 + i)} className="space-y-2.5 border border-line/10 bg-surface/70 p-3.5">
                <span className="block h-6 w-6 bg-brand/25" />
                <Bar w="w-3/4" h="h-2.5" c="bg-ink/60" />
                <Bar w="w-full" /> <Bar w="w-2/3" />
              </motion.div>
            ))}
          </div>

          {/* stat band + footer */}
          <div className="grid grid-cols-3 border border-line/10 bg-surface/60 p-4 text-center">
            {[0, 1, 2].map((i) => (
              <div key={i} className="space-y-2"><div className="mx-auto h-4 w-10 bg-brand/70" /><Bar w="w-12 mx-auto" /></div>
            ))}
          </div>
          <div className="flex items-center justify-between border-t border-line/10 pt-5">
            <Bar w="w-16" /> <div className="flex gap-3"><Bar w="w-8" /><Bar w="w-8" /></div>
          </div>
        </motion.div>

        {/* cursor */}
        <motion.div
          className="pointer-events-none absolute z-10 text-ink drop-shadow"
          animate={{ left: ["78%", "30%", "30%", "62%", "78%"], top: ["80%", "64%", "64%", "30%", "80%"] }}
          transition={{ duration: 14, times: [0, 0.12, 0.2, 0.55, 1], repeat: Infinity, ease: "easeInOut", delay: 2.2 }}
        >
          <MousePointer2 className="h-5 w-5 fill-ink" />
        </motion.div>
      </div>
    </div>
  );
}
