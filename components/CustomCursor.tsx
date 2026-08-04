"use client";

import { useEffect, useRef } from "react";

export default function CustomCursor() {
  const curRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (window.innerWidth <= 768) return;

    let mx = window.innerWidth / 2;
    let my = window.innerHeight / 2;
    let rx = mx;
    let ry = my;
    let raf = 0;

    function onMove(e: MouseEvent) {
      mx = e.clientX;
      my = e.clientY;
      if (curRef.current) {
        curRef.current.style.left = mx + "px";
        curRef.current.style.top = my + "px";
      }
    }

    function anim() {
      rx += (mx - rx) * 0.13;
      ry += (my - ry) * 0.13;
      if (ringRef.current) {
        ringRef.current.style.left = rx + "px";
        ringRef.current.style.top = ry + "px";
      }
      raf = requestAnimationFrame(anim);
    }

    const selector =
      "a,button,.svc-card,.wcard,.pstep,.pso,.stat,.brand-case,.brand-gallery img,.landing-gallery img";

    // Event delegation (rather than binding per-element) so this keeps working
    // as pages change client-side under the persistent root layout.
    function onOver(e: MouseEvent) {
      if ((e.target as Element).closest?.(selector)) {
        document.body.classList.add("cursor-big");
      }
    }
    function onOut(e: MouseEvent) {
      if ((e.target as Element).closest?.(selector)) {
        document.body.classList.remove("cursor-big");
      }
    }

    document.addEventListener("mousemove", onMove);
    document.addEventListener("mouseover", onOver);
    document.addEventListener("mouseout", onOut);
    raf = requestAnimationFrame(anim);

    return () => {
      document.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseover", onOver);
      document.removeEventListener("mouseout", onOut);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <>
      <div id="cursor" ref={curRef}></div>
      <div id="cursor-ring" ref={ringRef}></div>
    </>
  );
}
