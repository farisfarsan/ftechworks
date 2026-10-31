export const SITE_NAME = "Ftechworks";
// Homepage <title> / og:title / twitter:title — kept separate from SITE_NAME
// since JSON-LD's Organization.name should stay the plain brand name.
export const HOMEPAGE_TITLE = "Ftechworks | Custom Web, App & AI Development";
// Kept under 160 chars — reused verbatim as the meta description on the homepage.
export const SITE_DESCRIPTION =
  "Ftechworks builds full-stack web apps, mobile apps and AI-powered products: clean architecture, tested code, delivered on time.";
export const SITE_URL = "https://ftechworks.in";
export const CONTACT_EMAIL = "hello@ftechworks.in";
// Every number takes WhatsApp; `wa` is the digits-only form wa.me and tel: links need.
export const CONTACT_PHONES = [
  { country: "India", display: "+91 90618 94005", wa: "919061894005" },
  { country: "Oman", display: "+968 9548 6064", wa: "96895486064" },
  { country: "KSA", display: "+966 53 246 4415", wa: "966532464415" },
];
// Prefilled WhatsApp chat link for a number.
export const waLink = (wa: string) =>
  `https://wa.me/${wa}?text=Hi%20Team%20Ftechworks%2C%20I%20found%20your%20portfolio%20and%20I%27d%20like%20to%20discuss%20a%20project.`;
// Default chat (India), shared by the floating button and contact section.
export const WA_LINK = waLink(CONTACT_PHONES[0].wa);
