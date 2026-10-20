"use client";

import Image from "next/image";
import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { ArrowUpRight, Check } from "lucide-react";
import { SpotlightCard } from "@/components/ui/spotlight-card";
import { cn } from "@/lib/utils";

type Shot = { src: string; alt: string; w: number; h: number };
type Project = {
  cat: string;
  tag: string;
  title: string;
  desc: string;
  pills: string[];
  href?: string;
  host?: string;
  /** compact card (single thumbnail) vs. wide case study (image strip + points) */
  cover?: { src: string; alt: string; w: number; h: number; logo?: boolean; dark?: boolean };
  gallery?: Shot[];
  points?: string[];
};

const FILTERS = [
  { key: "all", label: "All" },
  { key: "app", label: "App" },
  { key: "website", label: "Website" },
  { key: "ai", label: "AI" },
  { key: "dashboard", label: "Dashboard" },
  { key: "landing", label: "Landing Page" },
  { key: "branding", label: "Branding" },
];

const PROJECTS: Project[] = [
  {
    cat: "app",
    tag: "Mobile App · Landing Page",
    title: "Grytt: Fitness OS",
    desc: "High-converting landing page for a fitness accountability app, with app store CTAs, animated UI showcase and waitlist integration.",
    pills: ["React", "Animation", "Conversion"],
    href: "https://www.grytt.club/",
    host: "grytt.club",
    cover: { src: "/app/grytt.png", alt: "Grytt app icon", w: 130, h: 96, logo: true, dark: true },
  },
  {
    cat: "app",
    tag: "Mobile & Web App · PropTech",
    title: "Flatkare",
    desc: "Modern apartment management app connecting residents and property managers: rent & utility tracking, maintenance requests, community announcements and secure document sharing in one place.",
    pills: ["React Native", "FastAPI", "Push Notifications", "Payments"],
    cover: { src: "/app/flat.png", alt: "Flatkare logo", w: 281, h: 78, logo: true },
  },
  {
    cat: "website",
    tag: "Business Website · Design & Build",
    title: "Compass Modern Business SPC",
    desc: "Full business website for an Oman-based consultancy: responsive design, multi-section layout, SEO-optimised and live in production.",
    pills: ["HTML/CSS", "Performance", "Responsive"],
    href: "https://compassmbspc.com/",
    host: "compassmbspc.com",
    cover: { src: "/website/compass.png", alt: "Compass Modern Business SPC logo", w: 281, h: 125, logo: true },
  },
  {
    cat: "ai",
    tag: "AI · Chatbot Integration",
    title: "AI Customer Support Bot",
    desc: "GPT-powered support chatbot with custom knowledge base, lead qualification, CRM integration and multi-channel deployment.",
    pills: ["OpenAI", "LangChain", "RAG", "Webhooks"],
    cover: { src: "/chatboat.png", alt: "AI Bot", w: 675, h: 453 },
  },
  {
    cat: "dashboard",
    tag: "Web App · Dashboard",
    title: "Work Dashboard",
    desc: "Project management dashboard for tracking tasks, deadlines and team workload: live progress tracking, analytics and reminders in one clean interface.",
    pills: ["React", "Dashboard", "Analytics"],
    cover: { src: "/dashboard.png", alt: "Work Dashboard app screenshot", w: 400, h: 300 },
  },
  {
    cat: "landing",
    tag: "Mobile App · Landing Page",
    title: "Landing Page Design",
    desc: "High-converting app landing page design work, built to turn visitors into customers. Clean hero sections, scannable feature layouts and a clear path to the call-to-action, all designed to load fast and look sharp on any device.",
    pills: ["Mobile App", "Landing Page", "UI Design", "Figma"],
    gallery: [
      { src: "/landingpage/lp2.avif", alt: "Landing page hero design", w: 384, h: 384 },
      { src: "/landingpage/landing.avif", alt: "Landing page feature section design", w: 384, h: 256 },
      { src: "/landingpage/landing1.avif", alt: "Landing page section design", w: 384, h: 250 },
    ],
    points: [
      "Bold hero section with clear value proposition",
      "Feature & benefit sections built for scannability",
      "Fully responsive across desktop, tablet and mobile",
      "Conversion-focused layout with strong CTA placement",
    ],
  },
  {
    cat: "branding",
    tag: "Branding & Logo Design · F&B",
    title: "Samak Restaurant",
    desc: "Full brand identity for a seafood restaurant, designed to work everywhere the business shows up, not just on a screen. We built the fish-integrated wordmark, a recurring scale pattern and a colour system, then carried it across real packaging and signage.",
    pills: ["Logo Design", "Brand Identity", "Packaging", "Signage", "Figma"],
    gallery: [
      { src: "/branding/branding.jpg", alt: "Samak Restaurant branded paper cups", w: 482, h: 700 },
      { src: "/branding/brandin2.jpg", alt: "Samak Restaurant branded staff apron", w: 569, h: 700 },
      { src: "/branding/branding3.jpg", alt: "Samak Restaurant branded takeaway containers", w: 700, h: 418 },
      { src: "/branding/brandin4.jpg", alt: "Samak Restaurant illuminated shopfront sign", w: 700, h: 400 },
    ],
    points: [
      "Logo design: fish-integrated wordmark, multiple concepts",
      "Colour palette & recurring pattern system",
      "Packaging application: cups & takeaway containers",
      "Staff apron & uniform branding",
      "Illuminated shopfront signage design",
    ],
  },
];

const Pills = ({ items }: { items: string[] }) => (
  <div className="mt-5 flex flex-wrap gap-2">
    {items.map((p) => (
      <span key={p} className="rounded-none border border-line/10 bg-line/[.04] px-3 py-1 font-mono text-[11px] text-muted">
        {p}
      </span>
    ))}
  </div>
);

export default function WorkGallery() {
  const [active, setActive] = useState("all");
  const shown = PROJECTS.filter((p) => active === "all" || p.cat === active);
  const cards = shown.filter((p) => p.cover);
  const cases = shown.filter((p) => p.gallery);

  return (
    <div>
      <div className="mb-10 flex flex-wrap gap-2" role="group" aria-label="Filter projects">
        {FILTERS.map((f) => (
          <button
            key={f.key}
            type="button"
            aria-pressed={active === f.key}
            onClick={() => setActive(f.key)}
            className={cn(
              "rounded-none border px-4 py-2 text-[13px] font-medium transition",
              active === f.key
                ? "border-brand bg-brand text-onbrand"
                : "border-line/10 bg-line/[.04] text-muted hover:border-line/30 hover:text-ink"
            )}
          >
            {f.label}
          </button>
        ))}
      </div>

      <motion.div layout className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        <AnimatePresence mode="popLayout">
          {cards.map((p) => (
            <motion.div
              key={p.title}
              layout
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.35 }}
            >
              <SpotlightCard href={p.href} external className="flex h-full flex-col">
                <div
                  className={cn(
                    "relative flex h-48 items-center justify-center overflow-hidden",
                    p.cover!.logo ? (p.cover!.dark ? "bg-[#0f0b1a]" : "bg-white") : "bg-surface2"
                  )}
                >
                  {p.cover!.logo ? (
                    <Image
                      src={p.cover!.src}
                      alt={p.cover!.alt}
                      width={p.cover!.w}
                      height={p.cover!.h}
                      className="h-auto max-h-[60%] w-[55%] object-contain"
                    />
                  ) : (
                    <Image
                      src={p.cover!.src}
                      alt={p.cover!.alt}
                      width={p.cover!.w}
                      height={p.cover!.h}
                      className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                    />
                  )}
                  {p.href && (
                    <span className="absolute right-3 top-3 inline-flex items-center gap-1 rounded-none bg-brand px-2.5 py-1 font-mono text-[11px] font-medium text-onbrand">
                      Live <ArrowUpRight className="h-3 w-3" />
                    </span>
                  )}
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <div className="font-mono text-[11px] uppercase tracking-[.1em] text-brand2">{p.tag}</div>
                  <h3 className="mt-2 text-lg font-semibold tracking-tight">{p.title}</h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">{p.desc}</p>
                  <Pills items={p.pills} />
                  {p.host && (
                    <div className="mt-5 flex items-center justify-between border-t border-line/10 pt-4 font-mono text-[11px] text-subtle">
                      {p.host} <ArrowUpRight className="h-4 w-4 transition group-hover:text-brand2" />
                    </div>
                  )}
                </div>
              </SpotlightCard>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      <div className="mt-4 space-y-4">
        <AnimatePresence mode="popLayout">
          {cases.map((p) => (
            <motion.article
              key={p.title}
              layout
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.4 }}
              className="grid overflow-hidden rounded-3xl border border-line/10 bg-surface/70 lg:grid-cols-[1.15fr_1fr]"
            >
              <div className="flex gap-3 overflow-x-auto bg-surface2 p-4 [scrollbar-width:thin]">
                {p.gallery!.map((g) => (
                  <Image
                    key={g.src}
                    src={g.src}
                    alt={g.alt}
                    width={g.w}
                    height={g.h}
                    className="h-64 w-auto shrink-0 rounded-2xl object-cover lg:h-full lg:max-h-[420px]"
                  />
                ))}
              </div>
              <div className="p-8 md:p-10">
                <div className="font-mono text-[11px] uppercase tracking-[.1em] text-brand2">{p.tag}</div>
                <h3 className="mt-2 text-2xl font-semibold tracking-tight">{p.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">{p.desc}</p>
                <ul className="mt-5 space-y-2.5">
                  {p.points!.map((pt) => (
                    <li key={pt} className="flex items-start gap-2.5 text-sm text-muted">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-brand2" /> {pt}
                    </li>
                  ))}
                </ul>
                <Pills items={p.pills} />
              </div>
            </motion.article>
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
}
