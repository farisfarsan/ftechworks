import type { Metadata } from "next";
import ServicePageLayout from "@/components/ServicePageLayout";

export const metadata: Metadata = {
  title: "Branding & Logo Design — Ftechworks",
  description:
    "Brand strategy and full identity design, built to hold up everywhere your business shows up — positioning, logo, colour system, packaging and signage.",
};

export default function BrandingPage() {
  return (
    <ServicePageLayout
      eyebrow="Branding"
      title="Identity, crafted."
      subtitle="Brand strategy and full identity design, built to hold up everywhere your business shows up — positioning, logo, colour system, packaging and signage."
      services={[
        {
          title: "Brand Strategy & Graphic Design",
          desc: "Strategic brand positioning, compelling visual identities, and design systems that tell your story.",
          tags: ["Brand Strategy", "Visual Identity", "Design Systems"],
        },
        {
          title: "Branding & Logo Design",
          desc: "Full brand identity design, built to hold up everywhere the business shows up — logo, colour system, packaging and signage.",
          tags: ["Logo Design", "Brand Identity", "Packaging", "Signage", "Figma"],
        },
      ]}
      ctaTitle="Need a brand identity?"
      ctaBody="Tell us what you're building — we reply within 12 hours with honest advice and a clear plan."
    />
  );
}
