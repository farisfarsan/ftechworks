"use client";

import { motion } from "motion/react";
import { AlertTriangle, ArrowDown, CheckCircle2, Zap } from "lucide-react";
import { cn } from "@/lib/utils";
import SectionHead from "./SectionHead";

const STAGES = [
  {
    Icon: AlertTriangle,
    tag: "Problem",
    title: "You have a vision but no technical partner to build it right.",
    body: "Great ideas die waiting for developers who miss deadlines or deliver code that can't scale past launch day. You need someone who actually delivers.",
  },
  {
    Icon: Zap,
    tag: "Solution",
    title: "We validate, architect, and ship: fast, clean, production-ready.",
    body: "Years building distributed systems at a fintech startup taught us how to move quickly without cutting corners. Every line of code is intentional.",
  },
  {
    Icon: CheckCircle2,
    tag: "Outcome",
    title: "A working product you can demo, launch, or scale from day one.",
    body: "Not a prototype. A real system: tested, documented, deployed, and ready for users. Backed by two weeks of post-launch support at no extra charge.",
    featured: true,
  },
];

const ease = [0.21, 0.6, 0.35, 1] as const;

export default function Why() {
  return (
    <section id="why" className="section">
      <div className="container">
        <SectionHead
          no="02"
          eyebrow="Why Ftechworks"
          title={
            <>
              The <span className="serif-accent">honest</span> difference.
            </>
          }
          sub="Most freelancers write code. Ftechworks engineers products. Here's the gap."
        />

        <div className="relative">
          {STAGES.map((s, i) => (
            <div key={s.tag}>
              <motion.article
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.7, ease }}
                className={cn(
                  "group relative grid gap-6 overflow-hidden px-6 py-10 md:grid-cols-[170px_1.15fr_1fr] md:items-start md:gap-10 md:px-10 md:py-14",
                  s.featured
                    ? "border border-brand bg-brand text-onbrand"
                    : "border-t border-line/15 transition-colors hover:bg-line/[.03]",
                  !s.featured && i === STAGES.length - 2 && "border-b"
                )}
              >
                {/* top rule draws in */}
                {!s.featured && (
                  <motion.span
                    aria-hidden="true"
                    className="absolute inset-x-0 top-0 h-px origin-left bg-brand"
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true, margin: "-80px" }}
                    transition={{ duration: 1.1, delay: 0.2, ease }}
                  />
                )}

                {/* number + tag */}
                <div className="flex items-center gap-5 md:flex-col md:items-start md:gap-4">
                  <span
                    className={cn(
                      "font-display text-6xl font-bold leading-none tracking-[-0.03em] md:text-7xl",
                      s.featured ? "text-onbrand" : "text-line/20 transition-colors group-hover:text-brand"
                    )}
                  >
                    0{i + 1}
                  </span>
                  <span
                    className={cn(
                      "inline-flex items-center gap-2 border px-3 py-1.5 font-mono text-[11px] font-medium uppercase tracking-[.1em]",
                      s.featured ? "border-onbrand/40 text-onbrand" : "border-line/20 text-brand2"
                    )}
                  >
                    <s.Icon className="h-3.5 w-3.5" />
                    {s.tag}
                  </span>
                </div>

                <h3
                  className={cn(
                    "text-2xl font-bold leading-[1.1] tracking-[-0.015em] md:text-[2rem]",
                    s.featured ? "text-onbrand" : "text-ink"
                  )}
                >
                  {s.title}
                </h3>

                <p className={cn("text-[15px] leading-relaxed md:pt-1.5", s.featured ? "text-onbrand/80" : "text-muted")}>
                  {s.body}
                </p>
              </motion.article>

              {/* connector between rows */}
              {i < STAGES.length - 1 && (
                <div className="relative z-10 flex h-0 justify-center md:justify-start md:pl-[calc(2.5rem+85px-18px)]">
                  <motion.span
                    initial={{ opacity: 0, scale: 0.6 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5, type: "spring" }}
                    className="-translate-y-1/2 grid h-9 w-9 place-items-center border border-line/20 bg-bg text-brand2"
                  >
                    <ArrowDown className="h-4 w-4" />
                  </motion.span>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
