import type { Metadata } from "next";
import ServicePageLayout from "@/components/ServicePageLayout";
import { BASE_FAQS } from "@/lib/content";

export const metadata: Metadata = {
  title: "UI/UX & App Development",
  description:
    "Cross-platform mobile apps, user-centred UI/UX design and full end-to-end MVP builds — from first wireframe to a live product real users can try.",
  alternates: { canonical: "/uiux-app" },
};

export default function UiuxAppPage() {
  return (
    <ServicePageLayout
      eyebrow="UI/UX & App"
      title="Apps people actually enjoy using."
      subtitle="Cross-platform mobile apps, user-centred UI/UX design and full end-to-end MVP builds — from first wireframe to a live product real users can try."
      intro={[
        "We design and build cross-platform mobile apps that feel good to use — smooth UI, push notifications and offline support, running from a single codebase on both iOS and Android.",
        "Design and engineering happen together: wireframes and interactive prototypes map the user journey before a line of production code is written, so what ships is something real users can actually try, not a prototype that stalls at demo stage.",
      ]}
      services={[
        {
          title: "Mobile App Development",
          desc: "Cross-platform iOS & Android apps — smooth UI, push notifications, offline support, connected to your backend API.",
          tags: ["Flutter", "React Native", "Expo"],
        },
        {
          title: "UI/UX Design",
          desc: "User-centric digital experiences focusing on conversion, accessibility, and engagement.",
          tags: ["Figma", "Wireframing", "Prototyping", "User Research"],
        },
        {
          title: "MVP Build (End-to-End)",
          desc: "Idea to live product in 4–8 weeks. We scope the core features, cut the rest, and ship something real users can try.",
          tags: ["Idea to Launch", "UI/UX Included", "Post-Launch Support"],
        },
      ]}
      deliverables={[
        "Cross-platform iOS & Android apps from a single codebase",
        "Smooth UI with push notifications and offline support",
        "Backend API integration",
        "Wireframes, interactive prototypes and user research",
        "Accessible, conversion-focused UI/UX design",
        "End-to-end MVP builds — idea to live product in 4–8 weeks",
        "Full documentation, unit tests and a deployment guide",
        "Two weeks of post-launch support",
      ]}
      stack={["Flutter", "React Native", "Expo", "Figma", "Wireframing", "Prototyping", "User Research"]}
      faqs={[
        {
          q: "How long does an MVP take?",
          a: "Typically 4–8 weeks from idea to live product. We scope the core features, cut everything that isn't essential to proving the idea, and ship something real users can try.",
        },
        {
          q: "Do you build for both iOS and Android?",
          a: "Yes — apps are cross-platform, built once with Flutter or React Native and Expo so a single codebase runs on both, including push notifications and offline support.",
        },
        {
          q: "Is design included, or do I need a separate designer?",
          a: "Design is included. We handle user research, wireframes and interactive prototypes in Figma before production code starts, so the UI/UX and the build come from the same team.",
        },
        ...BASE_FAQS,
      ]}
      ctaTitle="Got an app idea?"
      ctaBody="Tell us what you're building — we reply within 12 hours with honest advice and a clear plan."
    />
  );
}
