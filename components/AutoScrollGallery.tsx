"use client";

import { useEffect, useRef, type ReactNode } from "react";

export default function AutoScrollGallery({
  children,
  className,
}: {
  children: ReactNode;
  className: string;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const gal = ref.current;
    if (!gal) return;
    let dir = 1;
    const speed = 1;
    let paused = false;
    let raf = 0;

    function onClick() {
      paused = !paused;
    }
    gal.addEventListener("click", onClick);

    function tick() {
      const max = gal!.scrollWidth - gal!.clientWidth;
      if (!paused && max > 0) {
        gal!.scrollLeft += speed * dir;
        if (gal!.scrollLeft >= max) dir = -1;
        else if (gal!.scrollLeft <= 0) dir = 1;
      }
      raf = requestAnimationFrame(tick);
    }
    raf = requestAnimationFrame(tick);

    return () => {
      gal.removeEventListener("click", onClick);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div className={className} ref={ref}>
      {children}
    </div>
  );
}
