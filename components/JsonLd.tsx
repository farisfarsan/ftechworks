import { SITE_DESCRIPTION, SITE_NAME, SITE_URL } from "@/lib/siteConfig";

export default function JsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: SITE_NAME,
    description: SITE_DESCRIPTION,
    url: SITE_URL,
    logo: `${SITE_URL}/logo.png`,
    image: `${SITE_URL}/logo.png`,
    email: "ftechworks8@gmail.com",
    areaServed: "Worldwide",
    sameAs: [
      "https://www.linkedin.com/company/135145399/",
      "https://www.instagram.com/_ftechworks_?igsh=MTg4dHBpMWphbDQ1dg==",
    ],
    makesOffer: [
      "Web Design & Development",
      "AI & Intelligent Systems",
      "UI/UX & App Development",
      "Branding & Logo Design",
      "Marketing",
      "Video Editing",
    ].map((name) => ({
      "@type": "Offer",
      itemOffered: { "@type": "Service", name },
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
