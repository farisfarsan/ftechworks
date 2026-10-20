import { Inter, Plus_Jakarta_Sans } from "next/font/google";

// Self-hosted via next/font: no external request, no render-blocking <link>.
// Inter for body copy and UI labels; Plus Jakarta Sans for headings and numerals.
export const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  variable: "--font-display",
  display: "swap",
});
