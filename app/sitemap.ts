import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/siteConfig";
import { CASE_STUDIES } from "@/lib/caseStudies";

const ROUTES = [
  "",
  "/work",
  "/web-design-development",
  "/ai",
  "/uiux-app",
  "/branding",
  "/marketing",
  "/video-editing",
  ...CASE_STUDIES.map((c) => `/work/${c.slug}`),
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return ROUTES.map((route) => ({
    url: `${SITE_URL}${route}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: route === "" ? 1 : 0.8,
  }));
}
