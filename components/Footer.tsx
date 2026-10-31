import { Logo } from "@/components/Logo";
import Link from "next/link";
import { Mail } from "lucide-react";
import { WhatsAppIcon } from "@/components/BrandIcons";
import { CONTACT_EMAIL, CONTACT_PHONES, waLink } from "@/lib/siteConfig";

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

const col = "flex flex-col items-start gap-3";
const head = "mb-1 font-mono text-[11px] uppercase tracking-[.08em] text-subtle";
const lnk = "text-sm text-muted transition-colors hover:text-ink";
// contact rows: country label, number/address, then a small icon button
const tag = "w-12 shrink-0 font-mono text-[11px] uppercase tracking-[.08em] text-subtle";
const iconBtn =
  "grid h-7 w-7 shrink-0 place-items-center rounded-full border border-line/20 text-muted transition-colors hover:border-brand hover:text-brand2";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden border-t border-line/10 bg-surface/40">
      <div className="hairline absolute inset-x-0 top-0" aria-hidden="true" />
      <div className="container grid grid-cols-2 gap-x-6 gap-y-12 py-16 md:grid-cols-[1.3fr_1fr_1fr_1.6fr]">
        <div className={`${col} col-span-2 md:col-span-1`}>
          <Logo className="h-[30px]" />
          <p className="max-w-xs text-sm leading-relaxed text-muted">
            Websites, apps, AI automation, marketing, design and video: engineered end-to-end, founder-led from first
            call to launch.
          </p>
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
        <div className={`${col} col-span-2 md:col-span-1`}>
          <div className={head}>Contact</div>
          {CONTACT_PHONES.map((p) => (
            <div key={p.wa} className="flex items-center gap-2">
              <span className={tag}>{p.country}</span>
              <a href={`tel:+${p.wa}`} className={`${lnk} whitespace-nowrap`}>
                {p.display}
              </a>
              <a
                href={waLink(p.wa)}
                target="_blank"
                rel="noopener"
                aria-label={`WhatsApp ${p.display}`}
                className={iconBtn}
              >
                <WhatsAppIcon className="h-3.5 w-3.5" />
              </a>
            </div>
          ))}
          <div className="flex items-center gap-2">
            <span className={tag}>Email</span>
            <a href={`mailto:${CONTACT_EMAIL}`} className={lnk}>
              {CONTACT_EMAIL}
            </a>
            <a href={`mailto:${CONTACT_EMAIL}`} aria-label={`Email ${CONTACT_EMAIL}`} className={iconBtn}>
              <Mail className="h-3.5 w-3.5" />
            </a>
          </div>
          <p className="text-xs text-subtle">WhatsApp available on all numbers</p>
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
