"use client";

import { useEffect, useState } from "react";

export default function ProgressBar() {
  const [pct, setPct] = useState(0);
  const [show, setShow] = useState(false);

  useEffect(() => {
    function onScroll() {
      const max = document.body.scrollHeight - window.innerHeight;
      setPct(max > 0 ? (window.scrollY / max) * 100 : 0);
      setShow(window.scrollY > 400);
    }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  function backToTop(e: React.MouseEvent) {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  return (
    <>
      <div id="pgbar" style={{ width: `${pct}%` }}></div>
      <a href="#" id="btt" aria-label="Back to top" className={show ? "show" : ""} onClick={backToTop}>
        ↑
      </a>
    </>
  );
}
