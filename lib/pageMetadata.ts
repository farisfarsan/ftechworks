import type { Metadata } from "next";
import { SITE_NAME, SITE_URL } from "@/lib/siteConfig";

// Every route needs its own openGraph/twitter block — Next.js doesn't
// derive og:title/og:description from a page's own title/description,
// it silently inherits the root layout's whole openGraph object if a
// route doesn't define one.
export function pageMetadata(title: string, description: string, path: string): Metadata {
  const fullTitle = `${title} · ${SITE_NAME}`;
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      title: fullTitle,
      description,
      url: `${SITE_URL}${path}`,
    },
    twitter: {
      title: fullTitle,
      description,
    },
  };
}
