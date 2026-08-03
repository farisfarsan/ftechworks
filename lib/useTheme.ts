"use client";

export function toggleTheme() {
  const H = document.documentElement;
  const next = H.getAttribute("data-theme") === "dark" ? "light" : "dark";
  H.setAttribute("data-theme", next);
  try {
    localStorage.setItem("gpy-t", next);
  } catch {
    /* ignore */
  }
}
