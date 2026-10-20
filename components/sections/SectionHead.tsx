import type { ReactNode } from "react";
import { Reveal } from "@/components/ui/reveal";
import { cn } from "@/lib/utils";

export default function SectionHead({
  eyebrow,
  title,
  sub,
  center,
  no,
  className,
}: {
  eyebrow: string;
  title: ReactNode;
  sub?: string;
  center?: boolean;
  /** section index shown as "[01]" before the label */
  no?: string;
  className?: string;
}) {
  return (
    <Reveal className={cn("mb-14 md:mb-16", center && "mx-auto max-w-2xl text-center", className)}>
      <div className={cn("eyebrow mb-5", center && "justify-center")}>
        {no && <span className="text-brand">[{no}]</span>}
        <span>{eyebrow}</span>
      </div>
      <h2 className="h-section">{title}</h2>
      {sub && <p className={cn("lede mt-5 max-w-xl", center && "mx-auto")}>{sub}</p>}
    </Reveal>
  );
}
