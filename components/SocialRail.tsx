import { WA_LINK } from "@/components/WhatsAppFloat";
import { MailIcon, WhatsAppIcon, LinkedInIcon, InstagramIcon } from "@/components/Icons";
import { CONTACT_EMAIL } from "@/lib/siteConfig";

const LINKS = [
  { href: `mailto:${CONTACT_EMAIL}`, label: "Email", Icon: MailIcon },
  { href: WA_LINK, label: "WhatsApp", Icon: WhatsAppIcon },
  { href: "https://www.linkedin.com/company/135145399/", label: "LinkedIn", Icon: LinkedInIcon },
  {
    href: "https://www.instagram.com/_ftechworks_?igsh=MTg4dHBpMWphbDQ1dg==",
    label: "Instagram",
    Icon: InstagramIcon,
  },
];

export default function SocialRail() {
  return (
    <div className="social-rail">
      {LINKS.map(({ href, label, Icon }) => (
        <a key={label} href={href} target="_blank" rel="noopener" aria-label={label}>
          <Icon />
        </a>
      ))}
      <span className="social-rail-line"></span>
    </div>
  );
}
