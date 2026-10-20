"use client";

import Image from "next/image";
import { useEffect, useState, type MouseEvent, type ReactNode } from "react";
import { AnimatePresence, motion, useMotionValue, useSpring, useTransform, type MotionValue } from "motion/react";
import { Bot } from "lucide-react";
import { cn } from "@/lib/utils";

/* One floating card. The outer wrapper shifts with the cursor (parallax, by
   `depth`); the inner one bobs up and down on its own timing. */
function Layer({
  mx,
  my,
  depth,
  bob,
  delay = 0,
  className,
  children,
  animate,
}: {
  mx: MotionValue<number>;
  my: MotionValue<number>;
  depth: number;
  bob: number;
  delay?: number;
  className: string;
  children: ReactNode;
  animate: boolean;
}) {
  const x = useSpring(useTransform(mx, [-0.5, 0.5], [-depth, depth]), { stiffness: 90, damping: 16 });
  const y = useSpring(useTransform(my, [-0.5, 0.5], [-depth * 0.7, depth * 0.7]), { stiffness: 90, damping: 16 });
  return (
    <motion.div style={animate ? { x, y } : undefined} className={cn("absolute", className)}>
      <motion.div
        initial={{ opacity: 0, y: 40, scale: 0.94 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.9, delay, ease: [0.21, 0.6, 0.35, 1] }}
      >
        <motion.div animate={animate ? { y: [0, -bob, 0] } : undefined} transition={{ duration: 6 + bob / 4, repeat: Infinity, ease: "easeInOut", delay }}>
          {children}
        </motion.div>
      </motion.div>
    </motion.div>
  );
}

const CHAT = [
  { from: "user", text: "Where's my order?" },
  { from: "bot", text: "Shipped today. Arrives Thursday." },
] as const;

/* Tiny self-playing support chat: message, typing dots, reply, pause, repeat. */
function MiniChat({ animate }: { animate: boolean }) {
  const [step, setStep] = useState(animate ? 0 : 3);
  useEffect(() => {
    if (!animate) return;
    const seq = [900, 1100, 900, 3600]; // user, typing, reply, hold
    let i = 0;
    let t: ReturnType<typeof setTimeout>;
    const next = () => {
      i = (i + 1) % 4;
      setStep(i);
      t = setTimeout(next, seq[i]);
    };
    t = setTimeout(next, seq[0]);
    return () => clearTimeout(t);
  }, [animate]);

  return (
    <div className="space-y-2 p-3.5">
      <AnimatePresence initial={false}>
        {step >= 1 && (
          <motion.p key="u" initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} className="ml-auto w-fit bg-brand px-3 py-1.5 text-[11px] font-medium text-onbrand">
            {CHAT[0].text}
          </motion.p>
        )}
        {step === 2 && (
          <motion.div key="t" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="flex w-fit items-center gap-1 border border-line/15 bg-surface2 px-3 py-2.5">
            {[0, 1, 2].map((d) => (
              <motion.span key={d} className="h-1 w-1 rounded-full bg-muted" animate={{ y: [0, -3, 0], opacity: [0.4, 1, 0.4] }} transition={{ duration: 0.8, repeat: Infinity, delay: d * 0.13 }} />
            ))}
          </motion.div>
        )}
        {step >= 3 && (
          <motion.p key="b" initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} className="w-fit border border-line/15 bg-surface2 px-3 py-1.5 text-[11px] text-ink">
            {CHAT[1].text}
          </motion.p>
        )}
      </AnimatePresence>
      {step === 0 && <div className="h-[26px]" />}
    </div>
  );
}

const SWATCHES = ["rgb(var(--brand))", "rgb(var(--brand2))", "rgb(var(--cyan))", "rgb(var(--surface2))", "rgb(var(--ink))"];

export default function HeroCollage({ animate }: { animate: boolean }) {
  const mx = useMotionValue(0);
  const my = useMotionValue(0);

  function onMove(e: MouseEvent<HTMLDivElement>) {
    if (!animate) return;
    const r = e.currentTarget.getBoundingClientRect();
    mx.set((e.clientX - r.left) / r.width - 0.5);
    my.set((e.clientY - r.top) / r.height - 0.5);
  }
  function onLeave() {
    mx.set(0);
    my.set(0);
  }

  const card = "border border-line/15 bg-surface shadow-card";

  return (
    <div className="relative mx-auto aspect-[1/1.02] w-full max-w-[560px]" onMouseMove={onMove} onMouseLeave={onLeave} aria-hidden="true">
      <div className="absolute inset-[8%] -z-10 bg-brand/15 blur-[70px]" />

      {/* website — back layer */}
      <Layer mx={mx} my={my} depth={10} bob={8} animate={animate} className="left-0 top-[4%] w-[78%]">
        <div className={cn(card, "overflow-hidden")}>
          <div className="flex items-center gap-1.5 border-b border-line/10 bg-surface2/80 px-3 py-2">
            <span className="h-2 w-2 rounded-full bg-[#ff5f57]" />
            <span className="h-2 w-2 rounded-full bg-[#febc2e]" />
            <span className="h-2 w-2 rounded-full bg-[#28c840]" />
            <span className="mx-auto w-32 border border-line/10 bg-bg/60 px-2 py-0.5 text-center text-[9px] text-subtle">ftechworks.in/work</span>
          </div>
          <div className="relative aspect-[16/10] overflow-hidden bg-bg">
            <motion.div className="absolute inset-0" animate={animate ? { scale: [1, 1.07, 1] } : undefined} transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}>
              <Image src="/landingpage/landing1.avif" alt="" fill priority sizes="440px" className="object-cover" />
            </motion.div>
            <div className="absolute inset-0 bg-gradient-to-t from-bg/50 via-transparent to-transparent" />
          </div>
        </div>
      </Layer>

      {/* brand palette — top right */}
      <Layer mx={mx} my={my} depth={26} bob={12} delay={0.35} animate={animate} className="right-[-1%] top-[-2%] w-[34%]">
        <div className={cn(card, "p-3")}>
          <div className="mb-2.5 flex items-center gap-2">
            <span className="grid h-7 w-7 place-items-center bg-brand font-display text-sm font-bold text-onbrand">F</span>
            <span className="text-[11px] font-semibold text-ink">Brand</span>
          </div>
          <div className="flex gap-1">
            {SWATCHES.map((s) => (
              <span key={s} className="h-5 flex-1 border border-line/15" style={{ background: s }} />
            ))}
          </div>
        </div>
      </Layer>

      {/* AI chat — front right */}
      <Layer mx={mx} my={my} depth={34} bob={10} delay={0.55} animate={animate} className="bottom-[16%] right-[-4%] w-[50%]">
        <div className={cn(card, "overflow-hidden")}>
          <div className="flex items-center gap-2 border-b border-line/10 bg-surface2/80 px-3 py-2">
            <span className="grid h-6 w-6 place-items-center bg-brand text-onbrand">
              <Bot className="h-3.5 w-3.5" />
            </span>
            <div className="leading-tight">
              <p className="text-[11px] font-semibold text-ink">AI assistant</p>
              <p className="text-[9px] font-semibold uppercase tracking-[.08em] text-brand2">Online</p>
            </div>
          </div>
          <MiniChat animate={animate} />
        </div>
      </Layer>

      {/* dashboard — front left */}
      <Layer mx={mx} my={my} depth={20} bob={9} delay={0.75} animate={animate} className="bottom-[2%] left-[2%] w-[44%]">
        <div className={cn(card, "overflow-hidden")}>
          <Image src="/dashboard.png" alt="" width={400} height={300} className="h-auto w-full" />
          <div className="flex items-center justify-between px-3 py-2">
            <div>
              <p className="text-[11px] font-semibold text-ink">Dashboards</p>
              <p className="text-[9px] text-subtle">Admin &amp; analytics</p>
            </div>
            <span className="h-1.5 w-1.5 rounded-full bg-brand" />
          </div>
        </div>
      </Layer>
    </div>
  );
}
