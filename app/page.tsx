import Hero from "@/components/sections/Hero";
import TechMarquee from "@/components/sections/TechMarquee";
import Stats from "@/components/sections/Stats";
import Founders from "@/components/sections/Founders";
import Why from "@/components/sections/Why";
import Showcase from "@/components/sections/Showcase";
import FaqSection from "@/components/sections/FaqSection";
import WorkPreview from "@/components/sections/WorkPreview";
import Process from "@/components/sections/Process";
import ContactSection from "@/components/ContactSection";

export default function Home() {
  return (
    <>
      <Hero />
      <TechMarquee />
      <Stats />
      <Founders />
      <Why />
      <Showcase />
      <WorkPreview />
      <Process id="process" />
      <FaqSection />
      <ContactSection />
    </>
  );
}
