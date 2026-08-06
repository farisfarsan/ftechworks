"use client";

import { useState } from "react";
import Link from "next/link";

type Category = "Websites" | "Apps" | "AI" | "Design";

type Project = {
  id: string;
  cat: Category;
  tag: string;
  title: string;
  desc: string;
  img: string;
  alt: string;
  contain?: boolean;
  bg?: string;
  href?: string;
  live?: string;
  pills: string[];
};

const PROJECTS: Project[] = [
  {
    id: "grytt",
    cat: "Apps",
    tag: "Mobile App · Fitness",
    title: "Grytt — Fitness OS",
    desc: "High-converting landing page for a fitness accountability app — app store CTAs, animated UI showcase and waitlist integration.",
    img: "/app/grytt.png",
    alt: "Grytt app icon",
    contain: true,
    bg: "#0f0500",
    href: "https://www.grytt.club/",
    live: "Live ↗",
    pills: ["React", "Animation", "Conversion"],
  },
  {
    id: "compass",
    cat: "Websites",
    tag: "Business Website · Consultancy",
    title: "Compass Modern Business",
    desc: "Full business website for an Oman-based consultancy — responsive, multi-section, SEO-optimised and live in production.",
    img: "/website/compass.png",
    alt: "Compass Modern Business SPC logo",
    contain: true,
    bg: "#ffffff",
    href: "https://compassmbspc.com/",
    live: "Live ↗",
    pills: ["Performance", "SEO", "Responsive"],
  },
  {
    id: "dashboard",
    cat: "Websites",
    tag: "Web App · Dashboard",
    title: "Work Dashboard",
    desc: "Project management dashboard with live progress tracking, analytics and reminders — tasks, deadlines and team workload in one interface.",
    img: "/dashboard.png",
    alt: "Work Dashboard app screenshot",
    pills: ["React", "Dashboard", "Analytics"],
  },
  {
    id: "flatkare",
    cat: "Apps",
    tag: "Mobile & Web App · PropTech",
    title: "Flatkare",
    desc: "Apartment management app connecting residents and property managers — rent tracking, maintenance requests and secure documents.",
    img: "/app/flat.png",
    alt: "Flatkare logo",
    contain: true,
    bg: "#ffffff",
    pills: ["React Native", "FastAPI", "Payments"],
  },
  {
    id: "ai-bot",
    cat: "AI",
    tag: "AI · Chatbot Integration",
    title: "AI Customer Support Bot",
    desc: "GPT-powered support chatbot with a custom knowledge base, lead qualification, CRM integration and multi-channel deployment.",
    img: "/chatboat.png",
    alt: "AI support chatbot illustration",
    pills: ["OpenAI", "LangChain", "RAG"],
  },
  {
    id: "samak",
    cat: "Design",
    tag: "Brand Identity · F&B",
    title: "Samak Restaurant",
    desc: "Full brand identity for a seafood restaurant — fish-integrated wordmark, pattern system, packaging and illuminated signage.",
    img: "/branding/branding.png",
    alt: "Samak Restaurant branded packaging",
    pills: ["Logo Design", "Packaging", "Signage"],
  },
  {
    id: "landing",
    cat: "Design",
    tag: "UI Design · Landing Pages",
    title: "App Landing Pages",
    desc: "Conversion-focused landing page designs — bold hero sections, scannable feature layouts and a clear path to the call-to-action.",
    img: "/landingpage/lp2.avif",
    alt: "Landing page hero design",
    pills: ["UI Design", "Figma", "Conversion"],
  },
];

const FILTERS: Array<"All" | Category> = ["All", "Websites", "Apps", "AI", "Design"];

export default function PortfolioSection() {
  const [filter, setFilter] = useState<"All" | Category>("All");
  const visible = filter === "All" ? PROJECTS : PROJECTS.filter((p) => p.cat === filter);

  return (
    <>
      <div className="pf-filters" role="tablist" aria-label="Filter projects by category">
        {FILTERS.map((f) => (
          <button
            key={f}
            role="tab"
            aria-selected={filter === f}
            className={`pf-filter${filter === f ? " active" : ""}`}
            onClick={() => setFilter(f)}
          >
            {f}
          </button>
        ))}
      </div>

      {/* key={filter} remounts the list so the cardIn animation replays per filter */}
      <div className="pf-list" key={filter}>
        {visible.map((p, i) => {
          const media = (
            <>
              <div
                className={`pf-media${p.contain ? " contain" : ""}`}
                style={p.bg ? { background: p.bg } : undefined}
              >
                <img src={p.img} alt={p.alt} loading="lazy" />
                {p.live && <span className="pf-live">{p.live}</span>}
              </div>
              <div className="pf-body">
                <span className="pf-num" aria-hidden="true">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div className="pf-tag">{p.tag}</div>
                <h3>{p.title}</h3>
                <p>{p.desc}</p>
                <div className="pf-pills">
                  {p.pills.map((pill) => (
                    <span className="wcard-pill" key={pill}>
                      {pill}
                    </span>
                  ))}
                </div>
                <div className="pf-cta">{p.href ? "Visit live site" : "View case"} →</div>
              </div>
            </>
          );
          const style = { animationDelay: `${i * 0.07}s` };

          return p.href ? (
            <a className="pf-card" href={p.href} target="_blank" rel="noopener" key={p.id} style={style}>
              {media}
            </a>
          ) : (
            <Link className="pf-card" href="/work" key={p.id} style={style}>
              {media}
            </Link>
          );
        })}
      </div>

      <div className="pf-more">
        <Link href="/work" className="btn-hollow">
          View Full Portfolio →
        </Link>
      </div>
    </>
  );
}
