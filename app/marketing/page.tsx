import type { Metadata } from "next";
import ServicePageLayout from "@/components/ServicePageLayout";

export const metadata: Metadata = {
  title: "Marketing",
  description:
    "SEO optimisation and digital marketing campaigns built on data — more visibility, more qualified traffic, more return on every dollar spent.",
  alternates: { canonical: "/marketing" },
};

export default function MarketingPage() {
  return (
    <ServicePageLayout
      eyebrow="Marketing"
      title="Grow your reach, measurably."
      subtitle="SEO optimisation and digital marketing campaigns built on data — more visibility, more qualified traffic, more return on every dollar spent."
      services={[
        {
          title: "SEO Optimization",
          desc: "Data-driven SEO strategies to boost visibility, organic traffic, and search rankings.",
          tags: ["Keyword Research", "On-Page SEO", "Technical SEO", "Analytics"],
        },
        {
          title: "Digital Marketing",
          desc: "Targeted campaigns across channels to reach your audience and maximize ROI.",
          tags: ["Paid Ads", "Social Media", "Email Marketing", "Analytics"],
        },
      ]}
      ctaTitle="Want more traffic and leads?"
      ctaBody="Tell us what you're building — we reply within 12 hours with honest advice and a clear plan."
    />
  );
}
