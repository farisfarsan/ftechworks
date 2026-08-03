"use client";

import { useRef, useState, type ReactNode } from "react";

const FILTERS = [
  { key: "all", label: "All" },
  { key: "app", label: "App" },
  { key: "website", label: "Website" },
  { key: "ai", label: "AI" },
  { key: "dashboard", label: "Dashboard" },
  { key: "landing", label: "Landing Page" },
  { key: "branding", label: "Branding" },
];

export default function WorkFilters({ children }: { children: ReactNode }) {
  const [active, setActive] = useState("all");
  const containerRef = useRef<HTMLDivElement>(null);

  function applyFilter(filter: string) {
    setActive(filter);
    const container = containerRef.current;
    if (!container) return;
    let idx = 0;
    container.querySelectorAll<HTMLElement>("[data-cat]").forEach((item) => {
      const show = filter === "all" || item.dataset.cat === filter;
      item.style.display = show ? "" : "none";
      if (show && item.classList.contains("wcard")) {
        const num = item.querySelector<HTMLElement>(".wcard-num");
        if (num) num.textContent = String(++idx).padStart(2, "0");
      }
    });
  }

  return (
    <>
      <div className="wfilter-row r">
        {FILTERS.map((f) => (
          <button
            key={f.key}
            className={`wfilter${active === f.key ? " active" : ""}`}
            onClick={() => applyFilter(f.key)}
          >
            {f.label}
          </button>
        ))}
      </div>
      <div ref={containerRef}>{children}</div>
    </>
  );
}
