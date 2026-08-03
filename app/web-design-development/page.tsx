import type { Metadata } from "next";
import ServicePageLayout from "@/components/ServicePageLayout";

export const metadata: Metadata = {
  title: "Web Design & Development — Ftechworks",
  description:
    "Full-stack web apps, dashboards and business websites — engineered for speed, clarity and conversion, from first line of code to launch day.",
};

export default function WebDesignDevelopmentPage() {
  return (
    <ServicePageLayout
      eyebrow="Web Design & Development"
      title="Sites and apps built to convert."
      subtitle="Full-stack web apps, dashboards and business websites — engineered for speed, clarity and conversion, from first line of code to launch day."
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
      ctaTitle="Have a web project in mind?"
      ctaBody="Tell us what you're building — we reply within 12 hours with honest advice and a clear plan."
    />
  );
}
