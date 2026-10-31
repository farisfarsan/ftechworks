import { ArrowRight } from "lucide-react";
import FaqAccordion from "@/components/FaqAccordion";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/ui/reveal";
import { BASE_FAQS } from "@/lib/content";
import SectionHead from "./SectionHead";

export default function FaqSection() {
  return (
    <section id="faq" className="section">
      <div className="hairline absolute inset-x-0 top-0" aria-hidden="true" />
      <div className="container grid gap-12 lg:grid-cols-[.8fr_1.2fr] lg:gap-20">
        <div className="lg:sticky lg:top-28 lg:self-start">
          <SectionHead
            no="06"
            eyebrow="FAQ"
            className="mb-8"
            title={
              <>
                Questions, <span className="serif-accent">answered.</span>
              </>
            }
            sub="The short version of how we work, price and support. Anything else, just ask."
          />
          <Reveal>
            <Button href="#contact" variant="secondary">
              Still curious? Talk to us <ArrowRight className="h-4 w-4" />
            </Button>
          </Reveal>
        </div>
        <Reveal delay={0.1}>
          <FaqAccordion faqs={BASE_FAQS} />
        </Reveal>
      </div>
    </section>
  );
}
