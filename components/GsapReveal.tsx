"use client";

import { useEffect, useRef, type CSSProperties, type ReactNode } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// ScrollTrigger-driven section reveal. With `stagger` set, direct children
// animate in sequence (card grids); otherwise the block animates as one.
// Initial states are set from JS only, so content is never hidden without it.
export default function GsapReveal({
  children,
  className,
  style,
  id,
  y = 44,
  stagger = 0,
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
  id?: string;
  y?: number;
  stagger?: number;
  delay?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    gsap.registerPlugin(ScrollTrigger);

    const targets: gsap.TweenTarget = stagger > 0 ? Array.from(el.children) : el;
    const ctx = gsap.context(() => {
      gsap.fromTo(
        targets,
        { autoAlpha: 0, y, scale: 0.985 },
        {
          autoAlpha: 1,
          y: 0,
          scale: 1,
          duration: 0.95,
          ease: "power3.out",
          delay,
          stagger,
          clearProps: "transform",
          scrollTrigger: { trigger: el, start: "top 86%", once: true },
        }
      );
    }, el);

    return () => ctx.revert();
  }, [y, stagger, delay]);

  return (
    <div ref={ref} className={className} style={style} id={id}>
      {children}
    </div>
  );
}
