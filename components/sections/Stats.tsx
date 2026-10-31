import { ArrowUpRight } from "lucide-react";
import { NumberTicker } from "@/components/ui/number-ticker";
import { Reveal } from "@/components/ui/reveal";
import { STATS } from "@/lib/stats";

export default function Stats() {
  return (
    <section className="relative py-16 md:py-20">
      <div className="container">
        <Reveal className="grid gap-px overflow-hidden border border-line/15 bg-line/15 sm:grid-cols-2 lg:grid-cols-4">
          {STATS.map((s) => (
            <div
              key={s.label}
              className="group relative cursor-default overflow-hidden bg-surface px-8 py-10 text-center transition-colors duration-300 hover:bg-brand sm:text-left"
            >
              {/* lime bar sweeps in along the bottom */}
              <span
                aria-hidden="true"
                className="absolute inset-x-0 bottom-0 h-1 origin-left scale-x-0 bg-brand transition-transform duration-500 group-hover:scale-x-100"
              />
              <ArrowUpRight
                aria-hidden="true"
                className="absolute right-5 top-5 h-5 w-5 -translate-x-2 translate-y-2 text-onbrand opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:translate-y-0 group-hover:opacity-100"
              />
              <div className="font-display text-5xl font-bold tracking-[-0.025em] text-brand2 transition-all duration-300 group-hover:-translate-y-1 group-hover:text-onbrand md:text-6xl">
                <NumberTicker value={s.count} suffix={s.suffix} />
              </div>
              <div className="mt-2 text-sm font-medium text-muted transition-colors duration-300 group-hover:text-onbrand">{s.label}</div>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
