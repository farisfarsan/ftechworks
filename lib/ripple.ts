"use client";

export function ripple(e: React.MouseEvent<HTMLElement>) {
  const btn = e.currentTarget;
  const r = btn.getBoundingClientRect();
  const sz = Math.max(r.width, r.height);
  const rip = document.createElement("span");
  rip.style.cssText = `position:absolute;width:${sz}px;height:${sz}px;border-radius:50%;background:rgba(255,255,255,.25);transform:scale(0);animation:ripple .55s ease;left:${
    e.clientX - r.left - sz / 2
  }px;top:${e.clientY - r.top - sz / 2}px;pointer-events:none;z-index:10`;
  btn.style.position = "relative";
  btn.style.overflow = "hidden";
  btn.appendChild(rip);
  setTimeout(() => rip.remove(), 600);
}
