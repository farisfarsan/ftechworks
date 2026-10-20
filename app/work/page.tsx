import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Reveal } from "@/components/ui/reveal";
import { AuroraGlow, GridBackground } from "@/components/ui/backgrounds";
import WorkGallery from "@/components/WorkGallery";
import CtaBand from "@/components/sections/CtaBand";
import JsonLdScript from "@/components/JsonLdScript";
import { SITE_URL } from "@/lib/siteConfig";
import { pageMetadata } from "@/lib/pageMetadata";

export const metadata = pageMetadata(
  "Work",
  "Real systems, built to solve real problems, from solo founders to enterprise clients worldwide.",
  "/work"
);

export default function WorkPage() {
  return (
    <>
      <JsonLdScript
        data={{
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
            { "@type": "ListItem", position: 2, name: "Work", item: `${SITE_URL}/work` },
          ],
        }}
      />

      <section className="relative isolate overflow-hidden pb-14 pt-36 md:pb-20 md:pt-44">
        <AuroraGlow className="opacity-70" />
        <GridBackground />
        <div className="container">
          <Reveal>
            <Link href="/" className="mb-8 flex w-fit items-center gap-2 text-sm text-subtle transition hover:text-ink">
              <ArrowLeft className="h-4 w-4" /> Back to home
            </Link>
            <div className="eyebrow mb-5">
              <span className="h-px w-6 bg-brand2/60" /> Portfolio
            </div>
            <h1 className="h-display text-[clamp(2.6rem,6vw,5rem)]">
              Built with <span className="serif-accent grad-text pr-1 text-[1.08em]">care.</span>
            </h1>
            <p className="lede mt-6 max-w-xl">
              Real systems, built to solve real problems, from solo founders to enterprise clients worldwide.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="relative pb-24 md:pb-32">
        <div className="container">
          <h2 className="sr-only">Selected Work</h2>
          <WorkGallery />
        </div>
      </section>

      <CtaBand
        title="Like what you see?"
        body="Tell us what you're building. We reply within 12 hours with honest advice and a clear plan."
        secondary={{ href: "/#services", label: "See all services" }}
      />
    </>
  );
}
