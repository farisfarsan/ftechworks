import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Reveal } from "@/components/ui/reveal";
import { FOUNDER_ROLES } from "@/lib/team";

// Homepage teaser for /about. Founders are shown by role only (see lib/team.ts).
export default function Founders() {
  return (
    <section aria-labelledby="founders-title" className="relative pb-8 md:pb-12">
      <div className="container">
        <Reveal className="grid overflow-hidden border border-line/15 bg-surface/60 lg:grid-cols-[1.2fr_1fr]">
          <div className="flex flex-col justify-center p-8 md:p-12">
            <div className="eyebrow mb-5">
              <span className="text-brand">[01]</span> <span>About us</span>
            </div>
            <h2 id="founders-title" className="h-section text-3xl md:text-4xl">
              Big-tech engineering. <span className="serif-accent">Small-team attention.</span>
            </h2>
            <p className="lede mt-5 max-w-xl text-base md:text-base">
              Founded by two brothers with a background in large-scale enterprise software, Ftechworks brings that
              discipline to startups and growing businesses, without the enterprise overhead.
            </p>
            <Link
              href="/about"
              className="mt-8 inline-flex w-fit items-center gap-2 font-mono text-xs font-semibold uppercase tracking-[.1em] text-brand2 transition hover:text-ink"
            >
              More about us <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="grid border-t border-line/15 lg:border-l lg:border-t-0">
            {FOUNDER_ROLES.map((f, i) => (
              <div
                key={f.role}
                className={`flex items-center gap-6 p-8 md:px-10 ${i > 0 ? "border-t border-line/15" : ""}`}
              >
                <p className="w-24 shrink-0 font-display text-5xl font-bold leading-none tracking-[-0.025em] text-brand2">
                  {f.years}
                </p>
                <div>
                  <p className="font-mono text-[11px] font-semibold uppercase tracking-[.12em] text-subtle">Co-founder</p>
                  <p className="mt-1 text-lg font-semibold leading-snug text-ink">{f.role}</p>
                  <p className="text-sm text-muted">Years in engineering</p>
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
