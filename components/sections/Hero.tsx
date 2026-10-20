"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { scrollToHash } from "@/lib/scrollToHash";
import HeroCollage from "./HeroCollage";

const ease = [0.21, 0.6, 0.35, 1] as const;

const WORDS = ["experiences", "products", "platforms", "brands"];
const LONGEST = WORDS.reduce((a, b) => (b.length > a.length ? b : a));

const SPECS = [
  { k: "Delivery", v: "Founder-led" },
  { k: "Reply", v: "12 hours" },
  { k: "Scope", v: "Fixed price" },
  { k: "Support", v: "2 weeks free" },
];

const TABS = [
  { n: "01", label: "Web & apps", href: "/web-design-development" },
  { n: "02", label: "AI systems", href: "/ai" },
  { n: "03", label: "Dashboards", href: "/dashboards" },
  { n: "04", label: "UI/UX & app", href: "/uiux-app" },
  { n: "05", label: "Branding", href: "/branding" },
  { n: "06", label: "Marketing", href: "/marketing" },
  { n: "07", label: "Video editing", href: "/video-editing" },
];

/* Rotating key word in the headline. Sized by the longest word so the layout
   never jumps; the real text stays in the DOM for screen readers / crawlers. */
function RotatingWord({ animate }: { animate: boolean }) {
  const [i, setI] = useState(0);
  useEffect(() => {
    if (!animate) return;
    const t = setInterval(() => setI((n) => (n + 1) % WORDS.length), 2600);
    return () => clearInterval(t);
  }, [animate]);

  return (
    <>
      <span className="sr-only">experiences</span>
      <span aria-hidden="true" className="relative inline-grid overflow-hidden pb-[.14em] align-bottom -mb-[.14em]">
        <span className="invisible col-start-1 row-start-1">{LONGEST}</span>
        <AnimatePresence mode="wait" initial={false}>
          <motion.span
            key={WORDS[i]}
            className="col-start-1 row-start-1 text-brand2"
            initial={{ y: "70%", opacity: 0, filter: "blur(10px)" }}
            animate={{ y: "0%", opacity: 1, filter: "blur(0px)" }}
            exit={{ y: "-70%", opacity: 0, filter: "blur(10px)" }}
            transition={{ duration: 0.5, ease }}
          >
            {WORDS[i]}
          </motion.span>
        </AnimatePresence>
      </span>
    </>
  );
}

export default function Hero() {
  const reduced = !!useReducedMotion();
  const animate = !reduced;

  const line = (text: string, delay: number, children?: React.ReactNode) => (
    <span className="block overflow-hidden pb-[.08em] -mb-[.08em]">
      <motion.span
        className="block"
        initial={animate ? { y: "110%" } : false}
        animate={{ y: "0%" }}
        transition={{ duration: 0.9, delay, ease }}
      >
        {children ?? text}
      </motion.span>
    </span>
  );

  return (
    <section id="home" className="relative isolate overflow-hidden pt-28 md:pt-32">
      {/* drifting glows */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <motion.div
          className="absolute right-[-10%] top-[-20%] h-[620px] w-[820px] rounded-full bg-brand/10 blur-[140px]"
          animate={animate ? { x: [0, -60, 20, 0], y: [0, 40, -20, 0] } : undefined}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute left-[-10%] top-[30%] h-[420px] w-[520px] rounded-full bg-cyan/10 blur-[130px]"
          animate={animate ? { x: [0, 50, -30, 0], y: [0, -40, 30, 0] } : undefined}
          transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div className="container">
        <div className="grid items-center gap-14 lg:grid-cols-[1.15fr_.85fr] lg:gap-10">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease }}
              className="eyebrow mb-7"
            >
              <motion.span
                aria-hidden="true"
                className="h-1.5 w-1.5 rounded-full bg-brand"
                animate={animate ? { opacity: [1, 0.25, 1], scale: [1, 1.5, 1] } : undefined}
                transition={{ duration: 1.8, repeat: Infinity }}
              />
              <span className="text-brand">Featured</span>
              <span className="text-subtle">·</span>
              <span>End-to-end delivery</span>
            </motion.div>

            <h1 className="h-display text-[clamp(2.6rem,5.3vw,5rem)]">
              {line("We build digital", 0.1)}
              {line("", 0.22, <RotatingWord animate={animate} />)}
              {line("that scale.", 0.34)}
            </h1>

            <dl className="mt-10 grid max-w-xl grid-cols-2 sm:grid-cols-4">
              {SPECS.map((s, i) => (
                <motion.div
                  key={s.k}
                  initial={{ opacity: 0, y: 14 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.55 + i * 0.1, ease }}
                  className={`relative py-4 sm:px-4 ${i > 0 ? "sm:border-l sm:border-line/15" : "sm:pl-0"}`}
                >
                  <motion.span
                    aria-hidden="true"
                    className="absolute inset-x-0 top-0 h-px origin-left bg-line/25"
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: 0.8, delay: 0.5 + i * 0.1 }}
                  />
                  <span aria-hidden="true" className="absolute inset-x-0 bottom-0 h-px bg-line/15" />
                  <dt className="text-xs font-semibold uppercase tracking-[.1em] text-brand2">{s.k}</dt>
                  <dd className="mt-1.5 text-sm text-ink">{s.v}</dd>
                </motion.div>
              ))}
            </dl>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5, ease }}
              className="lede mt-8 max-w-lg"
            >
              Custom websites, web apps, custom software, AI automation, branding, SEO and digital marketing: built end-to-end with our
              founder in the room, not handed off down the chain.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.65, ease }}
              className="mt-9 flex flex-col gap-3 sm:flex-row"
            >
              <span className="relative inline-flex overflow-hidden">
                <Button href="#contact" size="lg" onClick={(e: React.MouseEvent<HTMLAnchorElement>) => scrollToHash(e, "#contact")}>
                  Start your project <ArrowRight className="h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                </Button>
                {animate && (
                  <motion.span
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-transparent via-white/45 to-transparent"
                    initial={{ x: "-120%" }}
                    animate={{ x: "380%" }}
                    transition={{ duration: 1.1, ease: "easeInOut", repeat: Infinity, repeatDelay: 3.6, delay: 2 }}
                  />
                )}
              </span>
              <Button href="/work" size="lg" variant="secondary">
                View portfolio
              </Button>
            </motion.div>
          </div>

          {/* layered product collage */}
          <HeroCollage animate={animate} />
        </div>

        {/* numbered capability tabs */}
        <motion.nav
          aria-label="Capabilities"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="mt-16 flex items-start gap-6 border-t border-line/15 pb-8 pt-6 md:mt-20"
        >
          <div className="hidden pt-3 text-xs font-semibold tracking-[.1em] text-brand2 sm:block">01 / 07</div>
          <ul className="grid flex-1 grid-cols-2 gap-x-4 gap-y-4 md:grid-cols-4 lg:grid-cols-7">
            {TABS.map((t, i) => (
              <li key={t.n}>
                <a href={t.href} className="group block">
                  <span className="relative block h-px w-full bg-line/20">
                    <span className="absolute inset-0 origin-left scale-x-0 bg-brand transition-transform duration-500 group-hover:scale-x-100" />
                    {i === 0 && animate && (
                      <motion.span className="absolute inset-0 origin-left bg-brand" initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ duration: 1.2, delay: 1.1, ease }} />
                    )}
                  </span>
                  <span className={`mt-3 block text-xs font-semibold uppercase tracking-[.1em] transition-colors ${i === 0 ? "text-ink" : "text-subtle group-hover:text-ink"}`}>
                    {t.label}
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </motion.nav>
      </div>
    </section>
  );
}
