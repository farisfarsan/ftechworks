import { cn } from "@/lib/utils";

/* Decorative page backgrounds — aria-hidden, pointer-events none. */
export function GridBackground({ className }: { className?: string }) {
  return (
    <div
      aria-hidden="true"
      className={cn(
        "pointer-events-none absolute inset-0 -z-10 [mask-image:linear-gradient(180deg,#000,transparent_85%)]",
        className
      )}
      style={{
        backgroundImage: "linear-gradient(rgb(var(--line)/.04) 1px,transparent 1px)",
        backgroundSize: "100% 96px",
      }}
    />
  );
}

export function AuroraGlow({ className }: { className?: string }) {
  return (
    <div aria-hidden="true" className={cn("pointer-events-none absolute inset-0 -z-10 overflow-hidden", className)}>
      <div className="absolute right-[-10%] top-[-20%] h-[620px] w-[820px] rounded-full bg-brand/10 blur-[140px]" />
      <div className="absolute left-[-10%] top-[30%] h-[420px] w-[520px] rounded-full bg-cyan/10 blur-[130px]" />
    </div>
  );
}
