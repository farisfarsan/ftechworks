import Image from "next/image";
import Link from "next/link";

const SERVICE_LINKS = [
  { href: "/web-design-development", label: "Web Design & Dev" },
  { href: "/ai", label: "AI" },
  { href: "/uiux-app", label: "UI/UX & App" },
  { href: "/branding", label: "Branding" },
  { href: "/marketing", label: "Marketing" },
  { href: "/video-editing", label: "Video Editing" },
];

const COMPANY_LINKS = [
  { href: "/#why", label: "Why Us" },
  { href: "/work", label: "Work" },
  { href: "/#process", label: "Process" },
  { href: "/#contact", label: "Contact" },
];

const SOCIALS = [
  { href: "mailto:ftechworks8@gmail.com", label: "Email" },
  {
    href: "https://wa.me/919061894005?text=Hi%20Team%20Ftechworks%2C%20I%20found%20your%20portfolio%20and%20I%27d%20like%20to%20discuss%20a%20project.",
    label: "WhatsApp",
  },
  { href: "https://www.linkedin.com/company/135145399/", label: "LinkedIn" },
  { href: "https://www.instagram.com/_ftechworks_?igsh=MTg4dHBpMWphbDQ1dg==", label: "Instagram" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer>
      <div className="footer-in">
        <div className="footer-col footer-brand">
          <Image src="/logo.png" alt="Ftechworks" width={211} height={26} className="logo-img" />
          <p>
            Digital solutions that scale your business — websites, web apps, AI automation,
            marketing, design and video.
          </p>
          <a href="mailto:ftechworks8@gmail.com" className="footer-mail">
            ftechworks8@gmail.com
          </a>
          <div className="footer-status">
            <span className="pulse"></span>
            Available for new projects · Replies within 12 hours
          </div>
          <div className="footer-socials">
            {SOCIALS.map((s) => (
              <a key={s.label} href={s.href} target="_blank" rel="noopener" aria-label={s.label}>
                {s.label}
              </a>
            ))}
          </div>
        </div>
        <div className="footer-col">
          <div className="footer-h">Services</div>
          {SERVICE_LINKS.map((s) => (
            <Link key={s.href} href={s.href}>
              {s.label}
            </Link>
          ))}
        </div>
        <div className="footer-col">
          <div className="footer-h">Company</div>
          {COMPANY_LINKS.map((c) => (
            <a key={c.href} href={c.href}>
              {c.label}
            </a>
          ))}
        </div>
      </div>
      <div className="footer-bottom">
        <p>© {year} Ftechworks · Technology for Business Growth</p>
        <p>Available Worldwide</p>
      </div>
    </footer>
  );
}
