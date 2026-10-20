import { Marquee } from "@/components/ui/marquee";

// Only tools named on the service pages — no extras.
const STACK = [
  { name: "React", role: "Frontend" },
  { name: "Next.js", role: "Framework" },
  { name: "Python", role: "Backend" },
  { name: "FastAPI", role: "APIs" },
  { name: "React Native", role: "Mobile" },
  { name: "OpenAI", role: "AI" },
  { name: "LangChain", role: "AI agents" },
  { name: "Figma", role: "Design" },
  { name: "Webflow", role: "Websites" },
];

export default function TechMarquee() {
  return (
    <section aria-label="Technologies we work with" className="relative border-y border-line/15 bg-surface/40">
      <div className="container flex flex-col items-stretch gap-0 md:flex-row md:items-center">
        <div className="shrink-0 border-b border-line/15 py-4 md:border-b-0 md:border-r md:py-0 md:pr-10">
          <p className="text-xs font-semibold uppercase tracking-[.1em] text-brand2">Our stack</p>
          <p className="mt-1 hidden text-sm text-muted md:block">Tools we build with, every day.</p>
        </div>

        <div className="relative min-w-0 flex-1 [mask-image:linear-gradient(90deg,transparent,#000_8%,#000_92%,transparent)]">
          <Marquee duration={40} className="[--gap:0rem]">
            {STACK.map((t) => (
              <div key={t.name} className="flex items-center gap-3 border-l border-line/15 px-9 py-6 first:border-l-0">
                <span className="h-2 w-2 shrink-0 bg-brand" aria-hidden="true" />
                <span className="whitespace-nowrap text-lg font-semibold tracking-tight text-ink">{t.name}</span>
                <span className="whitespace-nowrap text-[11px] font-semibold uppercase tracking-[.08em] text-subtle">{t.role}</span>
              </div>
            ))}
          </Marquee>
        </div>
      </div>
    </section>
  );
}
