import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export function Marquee({
  children,
  className,
  reverse,
  duration = 40,
}: {
  children: ReactNode;
  className?: string;
  reverse?: boolean;
  duration?: number;
}) {
  return (
    <div
      className={cn("group flex overflow-hidden [--gap:2.5rem] [gap:var(--gap)]", className)}
      style={{ "--duration": `${duration}s` } as React.CSSProperties}
    >
      {[0, 1].map((i) => (
        <div
          key={i}
          aria-hidden={i === 1}
          className={cn(
            "flex shrink-0 animate-marquee items-center justify-around [gap:var(--gap)] group-hover:[animation-play-state:paused]",
            reverse && "[animation-direction:reverse]"
          )}
        >
          {children}
        </div>
      ))}
    </div>
  );
}
