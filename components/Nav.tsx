"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { ChevronDown, Menu, X, ArrowRight } from "lucide-react";
import { scrollToHash, scrollToHashOnLoad } from "@/lib/scrollToHash";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import ThemeToggle from "@/components/ThemeToggle";

const SERVICE_LINKS = [
  { href: "/web-design-development", label: "Web Design & Dev", hint: "Sites & web apps" },
  { href: "/dashboards", label: "Dashboards", hint: "Alerts, billing & CRM" },
  { href: "/ai", label: "AI", hint: "Chatbots & automation" },
  { href: "/uiux-app", label: "UI/UX & App", hint: "Mobile apps & MVPs" },
  { href: "/branding", label: "Branding", hint: "Identity & packaging" },
  { href: "/marketing", label: "Marketing", hint: "SEO & campaigns" },
  { href: "/video-editing", label: "Video Editing", hint: "Promos & motion" },
];

const mobileRow =
  "flex items-center justify-between border-b border-line/10 py-3.5 font-mono text-lg font-medium uppercase tracking-[.1em] text-ink";

const SPY_IDS = ["home", "why", "services", "process", "contact"];

export default function Nav() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("home");
  const [open, setOpen] = useState(false);
  const [svcOpen, setSvcOpen] = useState(false);
  const drawerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let ticking = false;
    function update() {
      setScrolled(window.scrollY > 24);
      if (isHome) {
        let cur = "home";
        SPY_IDS.forEach((id) => {
          const el = document.getElementById(id);
          if (el && window.scrollY >= el.offsetTop - 160) cur = id;
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

  // Focus trap + scroll lock while the mobile sheet is open.
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    if (!open) return;
    const focusables = drawerRef.current?.querySelectorAll<HTMLElement>("a[href], button:not([disabled])");
    focusables?.[0]?.focus();
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") return setOpen(false);
      if (e.key !== "Tab" || !focusables?.length) return;
      const first = focusables[0];
      const last = focusables[focusables.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    }
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open]);

  useEffect(() => {
    scrollToHashOnLoad();
    setOpen(false);
  }, [pathname]);

  const homeHref = (hash: string) => (isHome ? hash : `/${hash}`);
  const isServiceActive = SERVICE_LINKS.some((s) => s.href === pathname);

  const linkCls = (on: boolean) =>
    cn(
      "px-3.5 py-2 font-mono text-xs font-semibold uppercase tracking-[.1em] transition-colors",
      on ? "text-brand2" : "text-muted hover:text-ink"
    );

  const onHash = (hash: string) => (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (isHome) scrollToHash(e, hash);
    setOpen(false);
  };

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50">
        <nav
          aria-label="Primary"
          className={cn(
            "flex h-16 items-center justify-between gap-4 border-b px-5 transition-all duration-300 sm:px-8",
            scrolled ? "border-line/10 bg-bg/80 backdrop-blur-xl" : "border-transparent bg-transparent"
          )}
        >
          <Link href="/" aria-label="Ftechworks home" className="shrink-0">
            <Image
              src="/logo.png"
              alt="Ftechworks"
              width={211}
              height={26}
              priority
              className="h-[22px] w-auto dark:brightness-0 dark:invert"
            />
          </Link>

          <ul className="hidden items-center gap-0.5 lg:flex">
            <li>
              <a href={homeHref("#why")} onClick={onHash("#why")} className={linkCls(isHome && active === "why")}>
                Why Us
              </a>
            </li>
            <li className="group relative">
              <a
                href={homeHref("#services")}
                onClick={onHash("#services")}
                className={cn(linkCls(isServiceActive || (isHome && active === "services")), "inline-flex items-center gap-1")}
              >
                Services <ChevronDown className="h-3.5 w-3.5 transition-transform group-hover:rotate-180 group-focus-within:rotate-180" />
              </a>
              <div className="invisible absolute left-1/2 top-full w-[440px] -translate-x-1/2 translate-y-1 pt-3 opacity-0 transition-all duration-200 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:visible group-focus-within:translate-y-0 group-focus-within:opacity-100">
                <ul className="grid grid-cols-2 gap-1 border border-line/15 bg-bg/95 p-1 shadow-card backdrop-blur-xl">
                  {SERVICE_LINKS.map((s) => (
                    <li key={s.href}>
                      <Link
                        href={s.href}
                        className={cn(
                          "block px-3 py-3 transition-colors hover:bg-brand/10",
                          pathname === s.href && "bg-brand/10"
                        )}
                      >
                        <span className="block font-mono text-[11px] font-medium uppercase tracking-[.1em] text-ink">{s.label}</span>
                        <span className="mt-0.5 block text-xs text-subtle">{s.hint}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </li>
            <li>
              <Link href="/work" className={linkCls(pathname === "/work")}>
                Work
              </Link>
            </li>
            <li>
              <a href={homeHref("#process")} onClick={onHash("#process")} className={linkCls(isHome && active === "process")}>
                Process
              </a>
            </li>
            <li>
              <a href={homeHref("#contact")} onClick={onHash("#contact")} className={linkCls(isHome && active === "contact")}>
                Contact
              </a>
            </li>
          </ul>

          <div className="flex items-center gap-2">
            <ThemeToggle />
            <Button href={homeHref("#contact")} onClick={onHash("#contact")} className="hidden sm:inline-flex">
              Start a Project
            </Button>
            <button
              type="button"
              className="grid h-10 w-10 place-items-center border border-line/20 text-ink lg:hidden"
              onClick={() => setOpen(true)}
              aria-label="Open menu"
              aria-expanded={open}
              aria-controls="mobile-menu"
            >
              <Menu className="h-5 w-5" />
            </button>
          </div>
        </nav>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-menu"
            ref={drawerRef}
            role="dialog"
            aria-modal="true"
            aria-label="Site menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[70] overflow-y-auto bg-bg/95 px-6 pb-10 pt-5 backdrop-blur-2xl lg:hidden"
          >
            <div className="flex items-center justify-between">
              <Image src="/logo.png" alt="Ftechworks" width={211} height={26} className="h-[22px] w-auto dark:brightness-0 dark:invert" />
              <button
                type="button"
                className="grid h-10 w-10 place-items-center border border-line/20 text-ink"
                onClick={() => setOpen(false)}
                aria-label="Close menu"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
            <ul className="mt-10 space-y-1">
              <li>
                <Link
                  href={homeHref("#why")}
                  onClick={(e) => {
                    if (isHome) scrollToHash(e, "#why");
                    setOpen(false);
                  }}
                  className={mobileRow}
                >
                  Why Us
                  <ArrowRight className="h-5 w-5 text-subtle" />
                </Link>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => setSvcOpen((v) => !v)}
                  aria-expanded={svcOpen}
                  aria-controls="mobile-services"
                  className={cn(mobileRow, "w-full text-left")}
                >
                  Services
                  <ChevronDown className={cn("h-5 w-5 text-subtle transition-transform", svcOpen && "rotate-180")} />
                </button>
                {svcOpen && (
                  <ul id="mobile-services" className="border-b border-line/10 py-2 pl-4">
                    {SERVICE_LINKS.map((s) => (
                      <li key={s.href}>
                        <Link
                          href={s.href}
                          onClick={() => setOpen(false)}
                          className={cn("block py-2.5", pathname === s.href ? "text-brand2" : "text-ink")}
                        >
                          <span className="block font-mono text-sm font-medium uppercase tracking-[.1em]">{s.label}</span>
                          <span className="block text-xs text-subtle">{s.hint}</span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
              <li>
                <Link href="/work" onClick={() => setOpen(false)} className={mobileRow}>
                  Work
                  <ArrowRight className="h-5 w-5 text-subtle" />
                </Link>
              </li>
              <li>
                <Link
                  href={homeHref("#process")}
                  onClick={(e) => {
                    if (isHome) scrollToHash(e, "#process");
                    setOpen(false);
                  }}
                  className={mobileRow}
                >
                  Process
                  <ArrowRight className="h-5 w-5 text-subtle" />
                </Link>
              </li>
              <li>
                <Link
                  href={homeHref("#contact")}
                  onClick={(e) => {
                    if (isHome) scrollToHash(e, "#contact");
                    setOpen(false);
                  }}
                  className={mobileRow}
                >
                  Contact
                  <ArrowRight className="h-5 w-5 text-subtle" />
                </Link>
              </li>
            </ul>
            <Button
              href={homeHref("#contact")}
              size="lg"
              className="mt-8 w-full"
              onClick={(e: React.MouseEvent<HTMLAnchorElement>) => {
                if (isHome) scrollToHash(e, "#contact");
                setOpen(false);
              }}
            >
              Start a Project <ArrowRight className="h-4 w-4" />
            </Button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
