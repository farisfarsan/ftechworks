"use client";

export function scrollToHash(e: React.MouseEvent<HTMLAnchorElement>, hash: string) {
  const id = hash.replace("#", "");
  const target = document.getElementById(id);
  if (!target) return;
  e.preventDefault();
  const top = target.getBoundingClientRect().top + window.scrollY - 68;
  window.scrollTo({ top, behavior: "smooth" });
}
