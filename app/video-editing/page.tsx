import type { Metadata } from "next";
import ServicePageLayout from "@/components/ServicePageLayout";

export const metadata: Metadata = {
  title: "Video Editing — Ftechworks",
  description:
    "Professional video editing and motion design — promos, ads and social content polished enough to stop the scroll.",
};

export default function VideoEditingPage() {
  return (
    <ServicePageLayout
      eyebrow="Video Editing"
      title="Footage, cut into stories."
      subtitle="Professional video editing and motion design — promos, ads and social content polished enough to stop the scroll."
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
      ctaTitle="Have footage that needs a story?"
      ctaBody="Tell us what you're building — we reply within 12 hours with honest advice and a clear plan."
    />
  );
}
