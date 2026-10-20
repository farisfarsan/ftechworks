"use client";

import { Moon, Sun } from "lucide-react";
import { toggleTheme } from "@/lib/useTheme";

export default function ThemeToggle() {
  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label="Toggle theme"
      className="relative grid h-10 w-10 place-items-center border border-line/20 text-ink/80 transition hover:border-brand hover:text-brand2"
    >
      <Sun className="hidden h-[18px] w-[18px] dark:block" />
      <Moon className="h-[18px] w-[18px] dark:hidden" />
    </button>
  );
}
