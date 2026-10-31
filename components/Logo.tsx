import Image from "next/image";
import { cn } from "@/lib/utils";

/** FTW. mark: lime + white on dark theme, forest + green on light theme. */
export function Logo({ className, priority }: { className?: string; priority?: boolean }) {
  return (
    <>
      <Image
        src="/logo-mark.png"
        alt="Ftechworks"
        width={2216}
        height={512}
        priority={priority}
        className={cn("w-auto [[data-theme=light]_&]:hidden", className)}
      />
      <Image
        src="/logo-mark-light.png"
        alt="Ftechworks"
        width={2216}
        height={512}
        priority={priority}
        className={cn("hidden w-auto [[data-theme=light]_&]:block", className)}
      />
    </>
  );
}
