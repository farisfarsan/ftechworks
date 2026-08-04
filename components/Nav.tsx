"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { toggleTheme } from "@/lib/useTheme";
import { scrollToHash } from "@/lib/scrollToHash";
import { ripple } from "@/lib/ripple";

const SERVICE_LINKS = [
  { href: "/web-design-development", label: "Web Design & Dev" },
  { href: "/ai", label: "AI" },
  { href: "/uiux-app", label: "UI/UX & App" },
  { href: "/branding", label: "Branding" },
  { href: "/marketing", label: "Marketing" },
  { href: "/video-editing", label: "Video Editing" },
];

const SPY_IDS = ["home", "why", "services", "process", "contact"];

export default function Nav() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("home");
  const [mobOpen, setMobOpen] = useState(false);

  useEffect(() => {
    let ticking = false;
    function update() {
      setScrolled(window.scrollY > 40);
      if (isHome) {
        let cur = "home";
        SPY_IDS.forEach((id) => {
          const el = document.getElementById(id);
          if (el && window.scrollY >= el.offsetTop - 120) cur = id;
        });
        if (window.scrollY + window.innerHeight >= document.documentElement.scrollHeight - 2) {
          cur = SPY_IDS[SPY_IDS.length - 1];
        }
        setActive(cur);
      }
      ticking = false;
    }
    function onScroll() {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(update);
    }
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [isHome]);

  useEffect(() => {
    document.body.style.overflow = mobOpen ? "hidden" : "";
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") setMobOpen(false);
    }
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [mobOpen]);

  const homeHref = (hash: string) => (isHome ? hash : `/${hash}`);
  const isServiceActive = SERVICE_LINKS.some((s) => s.href === pathname);

  return (
    <>
      {/* MOB MENU */}
      <div className={`mob${mobOpen ? " open" : ""}`} id="mob">
        <button className="mob-x" onClick={() => setMobOpen(false)}>
          ✕
        </button>
        <Link href={homeHref("#why")} className="mob-lnk" onClick={() => setMobOpen(false)}>
          Why Us
        </Link>
        {SERVICE_LINKS.map((s) => (
          <Link key={s.href} href={s.href} className="mob-lnk" onClick={() => setMobOpen(false)}>
            {s.label}
          </Link>
        ))}
        <Link href="/work" className="mob-lnk" onClick={() => setMobOpen(false)}>
          Work
        </Link>
        <Link href={homeHref("#process")} className="mob-lnk" onClick={() => setMobOpen(false)}>
          Process
        </Link>
        <Link href={homeHref("#contact")} className="mob-lnk" onClick={() => setMobOpen(false)}>
          Contact
        </Link>
        <div className="mob-cta-wrap">
          <Link
            href={homeHref("#contact")}
            className="mob-cta"
            onClick={(e) => {
              ripple(e);
              setMobOpen(false);
            }}
          >
            Start a Project →
          </Link>
        </div>
      </div>

      {/* NAV */}
      <nav id="nav" className={scrolled ? "scrolled" : ""}>
        <Link href="/" className="logo-a">
          <Image src="/logo.png" alt="Ftechworks" width={211} height={26} className="logo-img" priority />
        </Link>
        <ul className="nav-links" id="navLinks">
          <li>
            <a
              href={homeHref("#why")}
              className={isHome && active === "why" ? "active" : ""}
              onClick={(e) => isHome && scrollToHash(e, "#why")}
            >
              Why Us
            </a>
          </li>
          <li className="nav-drop">
            <a
              href={homeHref("#services")}
              className={`nav-drop-toggle${isServiceActive || (isHome && active === "services") ? " active" : ""}`}
              onClick={(e) => isHome && scrollToHash(e, "#services")}
            >
              Services <span className="nav-caret">▾</span>
            </a>
            <ul className="nav-dropdown">
              {SERVICE_LINKS.map((s) => (
                <li key={s.href}>
                  <Link href={s.href} className={pathname === s.href ? "active" : ""}>
                    {s.label}
                  </Link>
                </li>
              ))}
            </ul>
          </li>
          <li>
            <Link href="/work" className={pathname === "/work" ? "active" : ""}>
              Work
            </Link>
          </li>
          <li>
            <a
              href={homeHref("#process")}
              className={isHome && active === "process" ? "active" : ""}
              onClick={(e) => isHome && scrollToHash(e, "#process")}
            >
              Process
            </a>
          </li>
          <li>
            <a
              href={homeHref("#contact")}
              className={isHome && active === "contact" ? "active" : ""}
              onClick={(e) => isHome && scrollToHash(e, "#contact")}
            >
              Contact
            </a>
          </li>
        </ul>
        <div className="nav-r">
          <button className="thbtn" onClick={toggleTheme} title="Toggle theme">
            <span className="tico moon">🌙</span>
            <span className="tico sun">☀️</span>
          </button>
          <a
            href={homeHref("#contact")}
            className="hire-btn"
            onClick={(e) => {
              ripple(e);
              if (isHome) scrollToHash(e, "#contact");
            }}
          >
            Start a Project
          </a>
          <button
            className={`burger${mobOpen ? " open" : ""}`}
            id="burger"
            onClick={() => setMobOpen((o) => !o)}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </nav>
    </>
  );
}
