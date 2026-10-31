import { Logo } from "@/components/Logo";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { CONTACT_EMAIL } from "@/lib/siteConfig";

const SERVICE_LINKS = [
  { href: "/web-design-development", label: "Web Design & Dev" },
  { href: "/dashboards", label: "Dashboards & Software" },
  { href: "/ai", label: "AI" },
  { href: "/uiux-app", label: "UI/UX & App" },
  { href: "/branding", label: "Branding" },
  { href: "/marketing", label: "Marketing" },
  { href: "/video-editing", label: "Video Editing" },
];

const COMPANY_LINKS = [
  { href: "/about", label: "About" },
  { href: "/#why", label: "Why Us" },
  { href: "/work", label: "Work" },
  { href: "/#process", label: "Process" },
  { href: "/#contact", label: "Contact" },
];

const SOCIALS = [
  { href: `mailto:${CONTACT_EMAIL}`, label: "Email" },
  {
    href: "https://wa.me/919061894005?text=Hi%20Team%20Ftechworks%2C%20I%20found%20your%20portfolio%20and%20I%27d%20like%20to%20discuss%20a%20project.",
    label: "WhatsApp",
  },
  { href: "https://www.linkedin.com/company/135145399/", label: "LinkedIn" },
  { href: "https://www.instagram.com/_ftechworks_?igsh=MTg4dHBpMWphbDQ1dg==", label: "Instagram" },
];

const col = "flex flex-col items-start gap-3";
const head = "mb-1 font-mono text-[11px] uppercase tracking-[.08em] text-subtle";
const lnk = "text-sm text-muted transition-colors hover:text-ink";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden border-t border-line/10 bg-surface/40">
      <div className="hairline absolute inset-x-0 top-0" aria-hidden="true" />
      <div className="container grid grid-cols-2 gap-x-6 gap-y-12 py-16 md:grid-cols-[1.6fr_1fr_1fr_1fr]">
        <div className={`${col} col-span-2 md:col-span-1`}>
          <Logo className="h-[30px]" />
          <p className="max-w-xs text-sm leading-relaxed text-muted">
            Websites, apps, AI automation, marketing, design and video: engineered end-to-end, founder-led from first
            call to launch.
          </p>
          <a href={`mailto:${CONTACT_EMAIL}`} className="text-sm font-medium text-ink hover:text-brand2">
            {CONTACT_EMAIL}
          </a>
        </div>
        <div className={col}>
          <div className={head}>Services</div>
          {SERVICE_LINKS.map((s) => (
            <Link key={s.href} href={s.href} className={lnk}>
              {s.label}
            </Link>
          ))}
        </div>
        <div className={col}>
          <div className={head}>Company</div>
          {COMPANY_LINKS.map((c) => (
            <a key={c.href} href={c.href} className={lnk}>
              {c.label}
            </a>
          ))}
        </div>
        <div className={col}>
          <div className={head}>Connect</div>
          {SOCIALS.map((s) => (
            <a key={s.label} href={s.href} target="_blank" rel="noopener" className={`${lnk} inline-flex items-center gap-1`}>
              {s.label} <ArrowUpRight className="h-3.5 w-3.5" />
            </a>
          ))}
        </div>
      </div>

      {/* oversized wordmark */}
      <div aria-hidden="true" className="pointer-events-none select-none overflow-hidden px-4 text-center">
        <div className="bg-gradient-to-b from-ink/40 via-ink/20 to-ink/[.04] bg-clip-text py-[.06em] font-brand text-[clamp(28px,10.4vw,150px)] leading-none tracking-[-0.01em] text-transparent">
          FTECHWORKS
        </div>
      </div>

      <div className="container flex flex-wrap items-center justify-between gap-3 border-t border-line/10 pb-20 pt-6 sm:pb-6 font-mono text-[11px] text-subtle">
        <p>© {year} <span className="font-brand tracking-[.04em]">FTECHWORKS</span></p>
        <p>Founder replies within 12 hours · Available worldwide</p>
      </div>
    </footer>
  );
}
