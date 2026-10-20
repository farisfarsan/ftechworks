import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/ui/reveal";
import { BorderBeam } from "@/components/ui/border-beam";

export default function CtaBand({
  title,
  body,
  secondary = { href: "/work", label: "See our work" },
}: {
  title: string;
  body: string;
  secondary?: { href: string; label: string };
}) {
  return (
    <section className="section pb-24 pt-0 md:pb-32">
      <div className="container">
        <Reveal className="relative isolate overflow-hidden rounded-none border border-line/10 bg-surface/70 px-6 py-20 text-center md:py-24">
          <div aria-hidden="true" className="absolute -top-1/2 left-1/2 -z-10 h-[420px] w-[820px] -translate-x-1/2 rounded-none bg-brand/30 blur-[120px]" />
          <div aria-hidden="true" className="absolute inset-0 -z-10 opacity-60 [mask-image:radial-gradient(ellipse_at_center,#000,transparent_70%)]" style={{ backgroundImage: "radial-gradient(rgb(var(--line)/.18) 1px, transparent 1px)", backgroundSize: "22px 22px" }} />
          <h2 className="h-section mx-auto max-w-3xl text-4xl md:text-6xl">{title}</h2>
          <p className="lede mx-auto mt-5 max-w-xl">{body}</p>
          <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button href="/#contact" size="lg">
              Start a project <ArrowRight className="h-4 w-4" />
            </Button>
            <Button href={secondary.href} size="lg" variant="secondary">
              {secondary.label}
            </Button>
          </div>
          <BorderBeam size={300} duration={14} />
        </Reveal>
      </div>
    </section>
  );
}
