import { CONTACT_EMAIL, SITE_DESCRIPTION, SITE_NAME, SITE_URL } from "@/lib/siteConfig";

// Root-level structured data: Organization + WebSite, linked via @id so
// crawlers resolve them as one graph. Route-specific schema (Service,
// FAQPage, BreadcrumbList) is emitted per-page via JsonLdScript instead.
export default function JsonLd() {
  const orgId = `${SITE_URL}/#organization`;

  const data = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": ["Organization", "ProfessionalService"],
        "@id": orgId,
        name: SITE_NAME,
        description: SITE_DESCRIPTION,
        url: SITE_URL,
        logo: `${SITE_URL}/logo.png`,
        image: `${SITE_URL}/logo.png`,
        email: CONTACT_EMAIL,
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
      },
      {
        "@type": "WebSite",
        "@id": `${SITE_URL}/#website`,
        name: SITE_NAME,
        url: SITE_URL,
        publisher: { "@id": orgId },
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
