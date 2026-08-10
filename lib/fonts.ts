import { Space_Grotesk, Inter, JetBrains_Mono } from "next/font/google";

// Self-hosted via next/font: no external fonts.googleapis.com request, no
// render-blocking <link>, fonts are fetched from the same origin and can be
// preloaded. display: "swap" avoids invisible text while loading.
export const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-space-grotesk",
  display: "swap",
});

export const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-inter",
  display: "swap",
});

export const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});
