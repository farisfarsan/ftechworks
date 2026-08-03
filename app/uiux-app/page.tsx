import type { Metadata } from "next";
import ServicePageLayout from "@/components/ServicePageLayout";

export const metadata: Metadata = {
  title: "UI/UX & App Development — Ftechworks",
  description:
    "Cross-platform mobile apps, user-centred UI/UX design and full end-to-end MVP builds — from first wireframe to a live product real users can try.",
};

export default function UiuxAppPage() {
  return (
    <ServicePageLayout
      eyebrow="UI/UX & App"
      title="Apps people actually enjoy using."
      subtitle="Cross-platform mobile apps, user-centred UI/UX design and full end-to-end MVP builds — from first wireframe to a live product real users can try."
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
      ctaTitle="Got an app idea?"
      ctaBody="Tell us what you're building — we reply within 12 hours with honest advice and a clear plan."
    />
  );
}
