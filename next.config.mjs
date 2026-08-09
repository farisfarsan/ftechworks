/** @type {import('next').NextConfig} */
const nextConfig = {
  // Every route is static (no API routes, no dynamic segments), so this
  // ships as plain HTML/CSS/JS — deployable to Cloudflare Pages or any
  // static host with no server runtime. Output lands in ./out.
  output: "export",
  images: { unoptimized: true },
};

export default nextConfig;
