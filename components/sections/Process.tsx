import { Reveal } from "@/components/ui/reveal";
import { PROCESS_STEPS } from "@/lib/content";
import SectionHead from "./SectionHead";

export default function Process({
  id,
  subtitle = "Four clear steps built to protect your time, money and vision, from first call to launch day and beyond.",
}: {
  id?: string;
  subtitle?: string;
}) {
  return (
    <section id={id} className="section">
      <div className="hairline absolute inset-x-0 top-0" aria-hidden="true" />
      <div className="container grid gap-12 lg:grid-cols-[.8fr_1.2fr] lg:gap-20">
        <div className="lg:sticky lg:top-28 lg:self-start">
          <SectionHead
            className="mb-0"
            eyebrow="How we work"
          no="04"
            title={
              <>
                Your roadmap to <span className="serif-accent grad-text pr-1 text-[1.1em]">shipping.</span>
              </>
            }
            sub={subtitle}
          />
        </div>

        <div role="list" className="relative space-y-4">
          <span aria-hidden="true" className="absolute bottom-6 left-[27px] top-6 w-px bg-gradient-to-b from-brand/50 via-line/10 to-transparent" />
          {PROCESS_STEPS.map((step, i) => (
            <Reveal key={step.num} delay={i * 0.06} className="group relative flex gap-6">
              <div role="listitem" className="contents">
                <div className="relative z-10 grid h-14 w-14 shrink-0 place-items-center rounded-2xl border border-brand/30 bg-bg font-mono text-sm font-medium text-brand2 shadow-[0_0_30px_-8px_rgb(var(--brand)/.6)] transition-all duration-300 group-hover:scale-110 group-hover:border-brand group-hover:bg-brand group-hover:text-bg group-hover:shadow-[0_0_36px_-4px_rgb(var(--brand)/.9)]">
                  {step.num}
                </div>
                <div className="flex-1 rounded-3xl border border-line/10 bg-surface/70 p-7 transition-all duration-300 hover:-translate-y-1 hover:border-brand/50 hover:bg-surface hover:shadow-[0_12px_40px_-16px_rgb(var(--brand)/.5)]">
                  <h3 className="text-xl font-semibold tracking-tight">{step.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{step.desc}</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {step.chips.map((c) => (
                      <span key={c} className="rounded-none border border-line/10 bg-line/[.04] px-3 py-1 font-mono text-[11px] text-muted transition-colors duration-300 group-hover:border-brand/40 group-hover:text-brand2">
                        {c}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
