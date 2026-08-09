"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import Magnetic from "@/components/Magnetic";
import { scrollToHash } from "@/lib/scrollToHash";

const LINES = ["ONE FOUNDER.", "REAL", "PRODUCTION", "SYSTEMS."];
const ACCENT_LINE = 2;

const ArrowIcon = (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M5 12h14M13 6l6 6-6 6" />
  </svg>
);

/* Flowing mesh lines: layered sine waves per line, drawn with a horizontal
   fade gradient. Depth (line index) scales amplitude, alpha and how much
   the mouse parallax displaces it. */
function startMesh(canvas: HTMLCanvasElement, mouse: { x: number; y: number }) {
  const ctx = canvas.getContext("2d");
  if (!ctx) return () => {};

  const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  let w = 0;
  let h = 0;
  let raf = 0;
  let running = true;
  const sx = { x: 0.5, y: 0.5 };

  function resize() {
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    w = canvas.clientWidth;
    h = canvas.clientHeight;
    canvas.width = Math.round(w * dpr);
    canvas.height = Math.round(h * dpr);
    ctx!.setTransform(dpr, 0, 0, dpr, 0, 0);
  }

  const N = 13;

  function draw(t: number) {
    ctx!.clearRect(0, 0, w, h);
    sx.x += (mouse.x - sx.x) * 0.045;
    sx.y += (mouse.y - sx.y) * 0.045;

    for (let i = 0; i < N; i++) {
      const depth = (i + 1) / N;
      const baseY = h * (0.1 + (0.82 * i) / (N - 1)) + (sx.y - 0.5) * 52 * depth;
      const xo = (sx.x - 0.5) * 70 * depth;
      const amp = 26 + 26 * depth;

      const grad = ctx!.createLinearGradient(0, 0, w, 0);
      const a = 0.05 + 0.15 * depth;
      const orange = i % 3 !== 1;
      const c = orange ? `rgba(244,122,18,${a})` : `rgba(255,255,255,${a * 0.42})`;
      grad.addColorStop(0, "rgba(244,122,18,0)");
      grad.addColorStop(0.18, c);
      grad.addColorStop(0.82, c);
      grad.addColorStop(1, "rgba(244,122,18,0)");
      ctx!.strokeStyle = grad;
      ctx!.lineWidth = orange ? 1 : 0.8;

      ctx!.beginPath();
      for (let x = -30; x <= w + 30; x += 26) {
        const y =
          baseY +
          Math.sin(x * 0.0021 + t * 0.55 + i * 0.62) * amp +
          Math.sin(x * 0.0046 - t * 0.34 + i * 1.7) * amp * 0.36;
        if (x === -30) ctx!.moveTo(x + xo, y);
        else ctx!.lineTo(x + xo, y);
      }
      ctx!.stroke();
    }
  }

  function loop(now: number) {
    if (running) draw(now / 1000);
    raf = requestAnimationFrame(loop);
  }

  resize();
  window.addEventListener("resize", resize);

  if (reduced) {
    draw(1.8);
    return () => window.removeEventListener("resize", resize);
  }

  // Pause the loop while the hero is off-screen — free scroll performance.
  const io = new IntersectionObserver(([entry]) => {
    running = entry.isIntersecting;
  });
  io.observe(canvas);

  raf = requestAnimationFrame(loop);
  return () => {
    cancelAnimationFrame(raf);
    io.disconnect();
    window.removeEventListener("resize", resize);
  };
}

export default function HeroSection() {
  const rootRef = useRef<HTMLElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // Background mesh canvas.
  useEffect(() => {
    const root = rootRef.current;
    const canvas = canvasRef.current;
    if (!root || !canvas) return;

    const mouse = { x: 0.5, y: 0.5 };
    const stopMesh = startMesh(canvas, mouse);

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let onMove: ((e: MouseEvent) => void) | null = null;
    if (!reduced) {
      onMove = (e: MouseEvent) => {
        mouse.x = e.clientX / window.innerWidth;
        mouse.y = e.clientY / window.innerHeight;
      };
      window.addEventListener("mousemove", onMove, { passive: true });
    }

    return () => {
      stopMesh?.();
      if (onMove) window.removeEventListener("mousemove", onMove);
    };
  }, []);

  return (
    <section className="hero" id="home" ref={rootRef}>
      <div className="hero-bg" aria-hidden="true">
        <div className="hero-grid-bg"></div>
        <canvas className="hero-canvas" ref={canvasRef}></canvas>
        <div className="blob blob-a"></div>
        <div className="blob blob-b"></div>
        <div className="blob blob-c"></div>
      </div>

      <div className="hero-inner">
        <div className="hero-copy">
          <div className="badge">
            <span className="pulse"></span>
            Founder-Led · Available for New Projects
          </div>
          <h1 className="hero-title">
            {LINES.map((line, i) => (
              <span key={line} className={`ht-line${i === ACCENT_LINE ? " ht-accent" : ""}`}>
                <span className="ht-in">{line}</span>
              </span>
            ))}
          </h1>
          <p className="hero-sub">
            Custom websites, web apps, AI automation, branding, SEO and digital marketing —
            built end-to-end with our founder in the room, not handed off down the chain.
          </p>
          <div className="hero-cta-row">
            <Magnetic>
              <a href="#contact" className="btn-lq" onClick={(e) => scrollToHash(e, "#contact")}>
                <i></i>
                <span>Start Your Project {ArrowIcon}</span>
              </a>
            </Magnetic>
            <Link href="/work" className="link-arrow">
              View Portfolio <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </div>

      <div className="scroll-ind">
        Scroll
        <span>↓</span>
      </div>
    </section>
  );
}
