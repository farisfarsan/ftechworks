import type { Metadata } from "next";
import ServicePageLayout from "@/components/ServicePageLayout";
import { BASE_FAQS } from "@/lib/content";

export const metadata: Metadata = {
  title: "Web Design & Development",
  description:
    "Full-stack web apps, dashboards and business websites — engineered for speed, clarity and conversion, from first line of code to launch day.",
  alternates: { canonical: "/web-design-development" },
};

export default function WebDesignDevelopmentPage() {
  return (
    <ServicePageLayout
      eyebrow="Web Design & Development"
      title="Sites and apps built to convert."
      subtitle="Full-stack web apps, dashboards and business websites — engineered for speed, clarity and conversion, from first line of code to launch day."
      intro={[
        "We build custom websites and web applications that are fast, responsive and designed to convert. From business websites and landing pages to complex full-stack applications, every project is engineered for speed, clarity and conversion.",
        "Using React, Next.js and Python, we ship dashboards, SaaS tools, admin panels and portals that are production-ready from day one — SEO-optimised, responsive across every device, and built to scale past launch day rather than buckle under it.",
      ]}
      services={[
        {
          title: "Web App Development",
          desc: "Full-stack apps with React frontend and Python backend. Dashboards, SaaS tools, admin panels and portals — all production-ready.",
          tags: ["React", "Next.js", "Python", "Database"],
        },
        {
          title: "Website Design & Build",
          desc: "Responsive, fast-loading business websites and landing pages built to convert visitors into clients. SEO-optimised from day one.",
          tags: ["Webflow", "Figma", "HTML/CSS"],
        },
      ]}
      deliverables={[
        "Full-stack web applications — React frontend, Python backend",
        "Business websites and landing pages built to convert",
        "Admin dashboards, SaaS tools and internal portals",
        "Responsive layouts across desktop, tablet and mobile",
        "SEO-optimised structure from day one",
        "Fast-loading, performance-focused builds",
        "Full documentation, unit tests and a deployment guide",
        "Two weeks of post-launch support",
      ]}
      stack={["React", "Next.js", "Python", "Database", "Webflow", "Figma", "HTML/CSS"]}
      faqs={BASE_FAQS}
      ctaTitle="Have a web project in mind?"
      ctaBody="Tell us what you're building — we reply within 12 hours with honest advice and a clear plan."
    />
  );
}
