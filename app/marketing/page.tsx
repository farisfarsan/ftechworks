import type { Metadata } from "next";
import ServicePageLayout from "@/components/ServicePageLayout";
import { BASE_FAQS } from "@/lib/content";

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
      intro={[
        "We grow your reach on data rather than guesswork. That starts with keyword research and search intent, then on-page and technical SEO work that makes your site easier for both search engines and people to read.",
        "Alongside organic growth, we run targeted campaigns across paid, social and email — all tracked through analytics, so you can see which channels actually return on the spend instead of guessing.",
      ]}
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
      deliverables={[
        "Keyword research and search intent mapping",
        "On-page SEO optimisation",
        "Technical SEO audits and fixes",
        "Analytics setup and performance tracking",
        "Targeted paid ad campaigns",
        "Social media campaign management",
        "Email marketing campaigns",
        "Reporting on reach, traffic and ROI",
      ]}
      stack={[
        "Keyword Research",
        "On-Page SEO",
        "Technical SEO",
        "Analytics",
        "Paid Ads",
        "Social Media",
        "Email Marketing",
      ]}
      stackTitle="Channels & Capabilities"
      faqs={[
        {
          q: "What does your SEO work actually cover?",
          a: "Keyword research and search intent mapping, on-page optimisation, and technical SEO audits and fixes — backed by analytics so rankings and organic traffic are measured rather than assumed.",
        },
        {
          q: "Which channels do you run campaigns on?",
          a: "Targeted paid ad campaigns, social media, and email marketing — chosen based on where your audience actually is rather than running all of them by default.",
        },
        {
          q: "How will I know if it's working?",
          a: "We set up analytics and performance tracking at the start, then report on reach, traffic and ROI — so you can see which channels return on the spend.",
        },
        ...BASE_FAQS,
      ]}
      ctaTitle="Want more traffic and leads?"
      ctaBody="Tell us what you're building — we reply within 12 hours with honest advice and a clear plan."
    />
  );
}
