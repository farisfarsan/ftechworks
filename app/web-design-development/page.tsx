import ServicePageLayout from "@/components/ServicePageLayout";
import { BASE_FAQS } from "@/lib/content";
import { pageMetadata } from "@/lib/pageMetadata";

export const metadata = pageMetadata(
  "Web Design & Development",
  "Full-stack web apps, dashboards and business websites: engineered for speed, clarity and conversion, from first line of code to launch day.",
  "/web-design-development"
);

export default function WebDesignDevelopmentPage() {
  return (
    <ServicePageLayout
      path="/web-design-development"
      eyebrow="Web Design & Development"
      title="Sites and apps built to convert."
      subtitle="Full-stack web apps, dashboards and business websites: engineered for speed, clarity and conversion, from first line of code to launch day."
      intro={[
        "We build custom websites and web applications that are fast, responsive and designed to convert. From business websites and landing pages to complex full-stack applications, every project is engineered for speed, clarity and conversion.",
        "Using React, Next.js and Python, we ship dashboards, SaaS tools, admin panels and portals that are production-ready from day one: SEO-optimised, responsive across every device, and built to scale past launch day rather than buckle under it.",
      ]}
      services={[
        {
          title: "Web App Development",
          desc: "Full-stack apps with React frontend and Python backend. Dashboards, SaaS tools, admin panels and portals: all production-ready.",
          tags: ["React", "Next.js", "Python", "Database"],
        },
        {
          title: "Website Design & Build",
          desc: "Responsive, fast-loading business websites and landing pages built to convert visitors into clients. SEO-optimised from day one.",
          tags: ["Webflow", "Figma", "HTML/CSS"],
        },
      ]}
      deliverables={[
        "Full-stack web applications: React frontend, Python backend",
        "Business websites and landing pages built to convert",
        "Admin dashboards, SaaS tools and internal portals",
        "Responsive layouts across desktop, tablet and mobile",
        "SEO-optimised structure from day one",
        "Fast-loading, performance-focused builds",
        "Full documentation, unit tests and a deployment guide",
        "Two weeks of post-launch support",
      ]}
      stack={["React", "Next.js", "Python", "Database", "Webflow", "Figma", "HTML/CSS"]}
      faqs={[
        {
          q: "What do you build with?",
          a: "Web applications are built with a React and Next.js frontend on a Python backend, connected to a database. Business websites and landing pages are built with Webflow, Figma and hand-written HTML/CSS where it gives us more control over performance.",
        },
        {
          q: "Will my site be mobile-friendly and SEO-ready?",
          a: "Yes to both. Layouts are responsive across desktop, tablet and mobile, and the site is built with an SEO-optimised structure from day one rather than having SEO bolted on afterwards.",
        },
        {
          q: "Can you build internal tools, not just marketing sites?",
          a: "Yes. Alongside websites and landing pages we build admin dashboards, SaaS tools and internal portals, all production-ready rather than prototypes.",
        },
        ...BASE_FAQS,
      ]}
      ctaTitle="Have a web project in mind?"
      ctaBody="Tell us what you're building. We reply within 12 hours with honest advice and a clear plan."
    />
  );
}
