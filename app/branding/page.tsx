import type { Metadata } from "next";
import ServicePageLayout from "@/components/ServicePageLayout";
import { BASE_FAQS } from "@/lib/content";

export const metadata: Metadata = {
  title: "Branding & Logo Design",
  description:
    "Brand strategy and full identity design, built to hold up everywhere your business shows up — positioning, logo, colour system, packaging and signage.",
  alternates: { canonical: "/branding" },
};

export default function BrandingPage() {
  return (
    <ServicePageLayout
      eyebrow="Branding"
      title="Identity, crafted."
      subtitle="Brand strategy and full identity design, built to hold up everywhere your business shows up — positioning, logo, colour system, packaging and signage."
      intro={[
        "We build brand identities designed to work everywhere your business actually shows up — not just on a screen. Strategy and positioning come first, then the wordmark, colour system and recurring patterns that hold it all together.",
        "From there we carry the identity into the physical world: packaging, takeaway containers, staff uniforms and illuminated shopfront signage, so the brand stays consistent from an Instagram post to the front of the building.",
      ]}
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
      deliverables={[
        "Brand strategy and market positioning",
        "Logo design explored across multiple concepts",
        "Colour palette and recurring pattern system",
        "Complete visual identity and design system",
        "Packaging design — cups, containers and labels",
        "Staff apron and uniform branding",
        "Illuminated shopfront signage design",
        "Full handoff — every source file is yours",
      ]}
      stack={[
        "Figma",
        "Brand Strategy",
        "Visual Identity",
        "Design Systems",
        "Logo Design",
        "Packaging",
        "Signage",
      ]}
      stackTitle="Tools & Deliverables"
      faqs={BASE_FAQS}
      ctaTitle="Need a brand identity?"
      ctaBody="Tell us what you're building — we reply within 12 hours with honest advice and a clear plan."
    />
  );
}
