/** @type {import('next').NextConfig} */
const nextConfig = {
  // Every route is static (no API routes, no dynamic segments) — ship
  // plain HTML/CSS/JS instead of going through Cloudflare's Next.js/
  // OpenNext Workers adapter, which needs Next 15.5.21+/16.2.11+ and
  // buys nothing for a site with no server-side rendering. Output
  // lands in ./out; point Cloudflare Pages' build output directory
  // there with no deploy command (plain static asset upload).
  output: "export",
  images: { unoptimized: true },
};

export default nextConfig;
