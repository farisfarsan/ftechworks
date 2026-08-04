import type { Metadata } from "next";
import ServicePageLayout from "@/components/ServicePageLayout";
import { BASE_FAQS } from "@/lib/content";

export const metadata: Metadata = {
  title: "Video Editing",
  description:
    "Professional video editing and motion design — promos, ads and social content polished enough to stop the scroll.",
  alternates: { canonical: "/video-editing" },
};

export default function VideoEditingPage() {
  return (
    <ServicePageLayout
      eyebrow="Video Editing"
      title="Footage, cut into stories."
      subtitle="Professional video editing and motion design — promos, ads and social content polished enough to stop the scroll."
      intro={[
        "We cut raw footage into something people actually finish watching — promos, ads and social content with the pacing, colour and sound to hold attention past the first few seconds.",
        "Beyond the edit, we build animated explainers, kinetic typography and branded motion graphics, delivered fast and exported in every format and aspect ratio each platform needs.",
      ]}
      services={[
        {
          title: "Video Editing",
          desc: "Polished cuts, colour grading and sound design for promos, ads and social content — delivered fast, in the formats you need.",
          tags: ["Colour Grading", "Sound Design", "Multi-Format Export", "Fast Turnaround"],
        },
        {
          title: "Motion Graphics & Animation",
          desc: "Animated explainers, kinetic typography and branded motion graphics that bring your story to life.",
          tags: ["After Effects", "2D Animation", "Kinetic Typography", "Explainer Videos"],
        },
      ]}
      deliverables={[
        "Polished edits for promos, ads and social content",
        "Professional colour grading",
        "Sound design and audio mixing",
        "Animated explainer videos",
        "Kinetic typography and branded motion graphics",
        "2D animation",
        "Multi-format export for every platform",
        "Fast turnaround on delivery",
      ]}
      stack={[
        "After Effects",
        "2D Animation",
        "Kinetic Typography",
        "Explainer Videos",
        "Colour Grading",
        "Sound Design",
        "Multi-Format Export",
      ]}
      stackTitle="Tools & Capabilities"
      faqs={BASE_FAQS}
      ctaTitle="Have footage that needs a story?"
      ctaBody="Tell us what you're building — we reply within 12 hours with honest advice and a clear plan."
    />
  );
}
