"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { ArrowRight, Check, Minus, Plus } from "lucide-react";
import { Reveal } from "@/components/ui/reveal";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import SectionHead from "./SectionHead";
import WebsiteDemo from "@/components/demos/WebsiteDemo";
import ChatDemo from "@/components/demos/ChatDemo";
import DashboardDemo from "@/components/demos/DashboardDemo";
import BrandDemo from "@/components/demos/BrandDemo";
import MarketingDemo from "@/components/demos/MarketingDemo";
import VideoDemo from "@/components/demos/VideoDemo";
import MobileAppDemo from "@/components/demos/MobileAppDemo";

const AUTOPLAY_MS = 8000;

const TABS = [
  {
    id: "web",
    title: "Websites & web apps",
    desc: "Full-stack web apps, admin dashboards and business websites built to convert visitors into clients.",
    points: [
      "Full-stack apps: React frontend, Python backend",
      "Business sites and landing pages built to convert",
      "SEO-optimised and fast from day one",
      "Responsive on desktop, tablet and mobile",
    ],
    href: "/web-design-development",
    Demo: WebsiteDemo,
  },
  {
    id: "ai",
    title: "AI chatbots & automation",
    desc: "Chatbots, document processing and AI-powered features trained on your data.",
    points: [
      "Chatbots trained on your own knowledge base",
      "Lead qualification and 24/7 support automation",
      "Document extraction, summaries and classification",
      "CRM and multi-channel deployment",
    ],
    href: "/ai",
    Demo: ChatDemo,
  },
  {
    id: "dash",
    title: "Dashboards & business software",
    desc: "Custom admin panels and internal tools that run the day-to-day of your business.",
    points: [
      "Expiry and renewal alerts: automatic reminders before licences, subscriptions or documents lapse",
      "Billing and invoicing: invoices, payments and reports in one place",
      "School CRM: admissions, attendance and parent communication",
      "Healthcare booking: appointment scheduling with patient reminders",
    ],
    href: "/dashboards",
    Demo: DashboardDemo,
  },
  {
    id: "mobile",
    title: "Mobile apps & MVPs",
    desc: "Cross-platform mobile apps and full end-to-end MVP builds, from idea to live product.",
    points: [
      "iOS and Android apps from a single codebase",
      "Push notifications and offline support",
      "Wireframes, interactive prototypes and user research",
      "MVP builds from idea to live product in 4-8 weeks",
    ],
    href: "/uiux-app",
    Demo: MobileAppDemo,
  },
  {
    id: "brand",
    title: "Branding & identity",
    desc: "Brand strategy and full identity design: logo, colour system, packaging and signage.",
    points: [
      "Brand strategy and market positioning",
      "Logo explored across multiple concepts",
      "Colour palette, pattern system and design system",
      "Packaging, uniforms and illuminated signage",
    ],
    href: "/branding",
    Demo: BrandDemo,
  },
  {
    id: "mkt",
    title: "SEO & marketing",
    desc: "SEO optimisation and digital marketing campaigns that grow your reach and ROI.",
    points: [
      "Keyword research, on-page and technical SEO",
      "Targeted paid ad campaigns",
      "Social and email marketing management",
      "Analytics setup with reach, traffic and ROI reporting",
    ],
    href: "/marketing",
    Demo: MarketingDemo,
  },
  {
    id: "video",
    title: "Video & motion",
    desc: "Video editing and motion graphics: promos and social content polished enough to stop the scroll.",
    points: [
      "Polished edits for promos, ads and social content",
      "Colour grading, sound design and audio mixing",
      "Animated explainers and kinetic typography",
      "Multi-format export for every platform",
    ],
    href: "/video-editing",
    Demo: VideoDemo,
  },
];

export default function Showcase() {
  const [active, setActive] = useState(0);
  // whether the active tab shows its details; the demo panel stays on the active service either way
  const [open, setOpen] = useState(true);
  const [paused, setPaused] = useState(false);
  const [reduced, setReduced] = useState(false);
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    setReduced(window.matchMedia("(prefers-reduced-motion: reduce)").matches);
  }, []);

  // Auto-advance always opens the next item fully, even if the previous one was closed.
  const next = useCallback(() => {
    setActive((i) => (i + 1) % TABS.length);
    setOpen(true);
  }, []);

  // Auto-advance; restarts whenever the tab changes or hover/focus pauses it.
  useEffect(() => {
    if (paused || reduced) return;
    timer.current = setTimeout(next, AUTOPLAY_MS);
    return () => {
      if (timer.current) clearTimeout(timer.current);
    };
  }, [active, paused, reduced, next]);

  const tab = TABS[active];
  const Demo = tab.Demo;

  return (
    <section id="services" className="section">
      <div className="hairline absolute inset-x-0 top-0" aria-hidden="true" />
      <div className="container">
        <SectionHead
          no="02"
          eyebrow="What we build"
          title={
            <>
              Everything you need to <span className="serif-accent">launch</span> and grow.
            </>
          }
          sub="End-to-end engineering across web, mobile, AI & delivery. Pick a service to see how it works."
        />

        <Reveal
          className="grid gap-8 lg:grid-cols-[.9fr_1.1fr] lg:gap-14"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          onFocusCapture={() => setPaused(true)}
          onBlurCapture={() => setPaused(false)}
        >
          {/* tab list */}
          <div role="tablist" aria-label="Services" aria-orientation="vertical" className="-mx-5 flex min-w-0 gap-2 overflow-x-auto px-5 pb-2 lg:mx-0 lg:flex-col lg:gap-0 lg:overflow-visible lg:px-0 lg:pb-0">
            {TABS.map((t, i) => {
              const on = i === active;
              return (
                <button
                  key={t.id}
                  role="tab"
                  id={`tab-${t.id}`}
                  aria-selected={on}
                  aria-expanded={on && open}
                  aria-controls="showcase-panel"
                  type="button"
                  onClick={() => {
                    if (i === active) setOpen((o) => !o);
                    else {
                      setActive(i);
                      setOpen(true);
                    }
                  }}
                  className={cn(
                    "group relative shrink-0 border border-line/10 px-5 py-4 text-left transition-colors lg:border-0 lg:border-t lg:border-line/15 lg:px-0 lg:py-6",
                    i === TABS.length - 1 && "lg:border-b",
                    on ? "border-brand/50 bg-brand/10 lg:bg-transparent" : "hover:border-line/30"
                  )}
                >
                  <span className="flex w-full items-center gap-4">
                    <span className={cn("font-mono text-[11px] tracking-[.1em] transition-colors", on ? "text-brand2" : "text-subtle")}>
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className={cn("whitespace-nowrap text-lg font-semibold tracking-tight transition-colors lg:whitespace-normal lg:text-2xl", on ? "text-ink" : "text-muted group-hover:text-ink")}>
                      {t.title}
                    </span>
                    {/* + / − : click an open item again to close it */}
                    <span
                      aria-hidden="true"
                      className={cn(
                        "ml-auto grid h-8 w-8 shrink-0 place-items-center border transition-colors",
                        on && open ? "border-brand text-brand2" : "border-line/20 text-subtle group-hover:border-brand group-hover:text-brand2"
                      )}
                    >
                      {on && open ? <Minus className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
                    </span>
                  </span>

                  <AnimatePresence initial={false}>
                    {on && open && (
                      <motion.span
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="hidden overflow-hidden lg:block"
                      >
                        <span className="mt-3 block max-w-md pl-[calc(11px*2+1rem)] text-sm leading-relaxed text-muted">{t.desc}</span>
                        <span className="mt-4 block space-y-2.5 pl-[calc(11px*2+1rem)]">
                          {t.points.map((pt) => (
                            <span key={pt} className="flex items-start gap-2.5 text-[13px] leading-snug text-ink/90">
                              <span className="mt-0.5 grid h-4 w-4 shrink-0 place-items-center bg-brand/20 text-brand2">
                                <Check className="h-3 w-3" />
                              </span>
                              {pt}
                            </span>
                          ))}
                        </span>
                      </motion.span>
                    )}
                  </AnimatePresence>

                  {/* autoplay progress */}
                  {on && !reduced && (
                    <span className="absolute inset-x-0 top-0 hidden h-px bg-line/10 lg:block">
                      <motion.span
                        key={`${active}-${paused}`}
                        className="block h-full origin-left bg-brand"
                        initial={{ scaleX: 0 }}
                        animate={{ scaleX: paused ? 0 : 1 }}
                        transition={{ duration: paused ? 0 : AUTOPLAY_MS / 1000, ease: "linear" }}
                      />
                    </span>
                  )}
                </button>
              );
            })}
          </div>

          {/* demo panel */}
          <div className="relative min-w-0">
            <div className="brackets">
              <span className="br-b" />
              <div
                id="showcase-panel"
                role="tabpanel"
                aria-labelledby={`tab-${tab.id}`}
                className="relative h-[420px] overflow-hidden border border-line/15 bg-surface shadow-card sm:h-[460px] lg:h-[500px]"
              >
                <AnimatePresence mode="wait">
                  <motion.div
                    key={tab.id}
                    initial={{ opacity: 0, scale: 0.985 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.35 }}
                    className="h-full"
                  >
                    <Demo />
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>

            <div className="mt-6 flex flex-wrap items-center justify-between gap-4">
              <div className="w-full space-y-2 lg:hidden">
                <p className="text-sm text-muted">{tab.desc}</p>
                <ul className="space-y-2 pt-1">
                  {tab.points.map((pt) => (
                    <li key={pt} className="flex items-start gap-2.5 text-[13px] leading-snug text-ink/90">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-brand2" />
                      {pt}
                    </li>
                  ))}
                </ul>
              </div>
              <span className="ml-auto text-[11px] font-semibold uppercase tracking-[.08em] text-subtle">Illustrative demo</span>
            </div>
            <AnimatePresence mode="wait">
              <motion.div
                key={tab.id}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.25 }}
                className="mt-5 flex flex-col gap-3 sm:flex-row"
              >
                <Button href={tab.href} size="lg" className="sm:flex-1">
                  Explore {tab.title} <ArrowRight className="h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                </Button>
                <Button href="#contact" size="lg" variant="secondary">
                  Start a project
                </Button>
              </motion.div>
            </AnimatePresence>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
