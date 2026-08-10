import ServicePageLayout from "@/components/ServicePageLayout";
import { BASE_FAQS } from "@/lib/content";
import { pageMetadata } from "@/lib/pageMetadata";

export const metadata = pageMetadata(
  "Video Editing",
  "Professional video editing and motion design: promos, ads and social content polished enough to stop the scroll.",
  "/video-editing"
);

export default function VideoEditingPage() {
  return (
    <ServicePageLayout
      path="/video-editing"
      eyebrow="Video Editing"
      title="Footage, cut into stories."
      subtitle="Professional video editing and motion design: promos, ads and social content polished enough to stop the scroll."
      intro={[
        "We cut raw footage into something people actually finish watching: promos, ads and social content with the pacing, colour and sound to hold attention past the first few seconds.",
        "Beyond the edit, we build animated explainers, kinetic typography and branded motion graphics, delivered fast and exported in every format and aspect ratio each platform needs.",
      ]}
      services={[
        {
          title: "Video Editing",
          desc: "Polished cuts, colour grading and sound design for promos, ads and social content, delivered fast, in the formats you need.",
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
      faqs={[
        {
          q: "What's included in a video edit?",
          a: "Polished cuts, professional colour grading, and sound design and audio mixing: the full pass on promos, ads and social content rather than just trimming clips together.",
        },
        {
          q: "Do you do animation as well as editing?",
          a: "Yes. Alongside editing we produce animated explainer videos, kinetic typography and branded motion graphics, built as 2D animation in After Effects.",
        },
        {
          q: "What formats will I receive?",
          a: "We export in multiple formats and aspect ratios so the same edit is ready for each platform you're posting to, with fast turnaround on delivery.",
        },
        ...BASE_FAQS,
      ]}
      ctaTitle="Have footage that needs a story?"
      ctaBody="Tell us what you're building. We reply within 12 hours with honest advice and a clear plan."
    />
  );
}
