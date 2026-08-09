// Single source for both the homepage case-study teaser cards and the
// /work/[slug] detail routes. Client, sector, problem and build copy are
// real, previously-published project facts — only `outcome` (a quantified
// metric) is unverified, so it stays TODO_OUTCOME until real numbers are
// supplied rather than being invented.
export type CaseStudy = {
  slug: string;
  client: string;
  sector: string;
  problem: string;
  built: string;
  outcome: string;
  stack: string[];
  href?: string;
  image: string;
  imageAlt: string;
  imageBg: string;
};

export const CASE_STUDIES: CaseStudy[] = [
  {
    slug: "grytt",
    client: "Grytt",
    sector: "Fitness App",
    problem: "A fitness accountability app needed a landing page that could convert visitors into waitlist signups before launch.",
    built: "A high-converting animated landing page with app store CTAs, an animated UI showcase and waitlist integration.",
    outcome: "TODO_OUTCOME",
    stack: ["React", "Animation", "Conversion"],
    href: "https://www.grytt.club/",
    image: "/app/grytt.png",
    imageAlt: "Grytt app icon",
    imageBg: "#0f0500",
  },
  {
    slug: "compass",
    client: "Compass Modern Business SPC",
    sector: "Business Consultancy",
    problem: "An Oman-based consultancy had no professional web presence to support new client acquisition.",
    built: "A full, responsive business website — multi-section, SEO-optimised and live in production.",
    outcome: "TODO_OUTCOME",
    stack: ["Performance", "SEO", "Responsive"],
    href: "https://compassmbspc.com/",
    image: "/website/compass.png",
    imageAlt: "Compass Modern Business SPC logo",
    imageBg: "#ffffff",
  },
  {
    slug: "flatkare",
    client: "Flatkare",
    sector: "PropTech",
    problem: "Residents and property managers had no single system for rent tracking, maintenance requests and shared documents.",
    built: "A React Native and FastAPI mobile and web app covering rent tracking, maintenance requests, announcements and secure document sharing.",
    outcome: "TODO_OUTCOME",
    stack: ["React Native", "FastAPI", "Push Notifications", "Payments"],
    image: "/app/flat.png",
    imageAlt: "Flatkare logo",
    imageBg: "#ffffff",
  },
];
