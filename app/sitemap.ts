import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/siteConfig";

const ROUTES = [
  "",
  "/work",
  "/web-design-development",
  "/ai",
  "/uiux-app",
  "/branding",
  "/marketing",
  "/video-editing",
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
