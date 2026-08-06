"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { markPreloaderDone } from "@/lib/preloaderState";

const WORD = "FTECHWORKS";

export default function Preloader() {
  const [gone, setGone] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);
  const fillRef = useRef<HTMLDivElement>(null);
  const pctRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      markPreloaderDone();
      setGone(true);
      return;
    }

    document.documentElement.style.overflow = "hidden";
    const counter = { v: 0 };

    const tl = gsap.timeline({
      onComplete: () => {
        document.documentElement.style.overflow = "";
        setGone(true);
      },
    });

    tl.to(root.querySelectorAll(".pl-logo span"), {
      y: 0,
      duration: 0.7,
      ease: "power4.out",
      stagger: 0.045,
    })
      .to(
        counter,
        {
          v: 100,
          duration: 1.1,
          ease: "power2.inOut",
          onUpdate: () => {
            const v = Math.round(counter.v);
            if (fillRef.current) fillRef.current.style.width = v + "%";
            if (pctRef.current) pctRef.current.textContent = v + "%";
          },
        },
        "-=0.35"
      )
      .add(() => markPreloaderDone())
      .to(root, {
        yPercent: -100,
        duration: 0.8,
        ease: "power4.inOut",
      });

    return () => {
      document.documentElement.style.overflow = "";
      tl.kill();
    };
  }, []);

  if (gone) return null;

  return (
    <div id="preloader" ref={rootRef} aria-hidden="true">
      <div className="pl-logo">
        {WORD.split("").map((ch, i) => (
          <span key={i} className={ch === "F" || ch === "W" ? "pl-o" : undefined}>
            {ch}
          </span>
        ))}
      </div>
      <div className="pl-bar">
        <div className="pl-fill" ref={fillRef}></div>
      </div>
      <div className="pl-pct" ref={pctRef}>
        0%
      </div>
    </div>
  );
}
