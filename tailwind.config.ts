import type { Config } from "tailwindcss";

const v = (name: string) => `rgb(var(--${name}) / <alpha-value>)`;

const config: Config = {
  darkMode: ["selector", '[data-theme="dark"]'],
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    container: { center: true, padding: { DEFAULT: "1.25rem", md: "2rem" }, screens: { "2xl": "1200px" } },
    extend: {
      colors: {
        bg: v("bg"),
        surface: v("surface"),
        surface2: v("surface2"),
        line: v("line"),
        ink: v("ink"),
        muted: v("muted"),
        subtle: v("subtle"),
        brand: v("brand"),
        brand2: v("brand2"),
        cyan: v("cyan"),
        onbrand: v("onbrand"),
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        display: ["var(--font-display)", "var(--font-sans)", "system-ui", "sans-serif"],
        // Labels share the sans face: one font site-wide (the `font-mono` class is kept
        // as a hook for small uppercase labels, but resolves to Inter).
        mono: ["var(--font-sans)", "system-ui", "sans-serif"],
      },
      // Plus Jakarta Sans reads best with only slight negative tracking.
      letterSpacing: { tight: "-0.015em", tighter: "-0.025em" },
      // Sharp, technical corners everywhere; only `full` stays round (dots, avatars).
      borderRadius: { none: "0", sm: "0", DEFAULT: "0", md: "0", lg: "0", xl: "0", "2xl": "0", "3xl": "0", full: "9999px" },
      boxShadow: {
        glow: "0 0 0 1px rgb(var(--brand) / .3), 0 0 60px -12px rgb(var(--brand) / .35)",
        card: "0 30px 80px -30px rgb(0 0 0 / .7)",
      },
      keyframes: {
        marquee: { from: { transform: "translateX(0)" }, to: { transform: "translateX(calc(-100% - var(--gap)))" } },
        "border-beam": { "100%": { "offset-distance": "100%" } },
        shine: { "0%": { "background-position": "0% 0%" }, "50%": { "background-position": "100% 100%" }, to: { "background-position": "0% 0%" } },
        float: { "0%,100%": { transform: "translateY(0)" }, "50%": { transform: "translateY(-10px)" } },
        meteor: { "0%": { transform: "rotate(215deg) translateX(0)", opacity: "1" }, "70%": { opacity: "1" }, "100%": { transform: "rotate(215deg) translateX(-500px)", opacity: "0" } },
        aurora: { from: { "background-position": "50% 50%, 50% 50%" }, to: { "background-position": "350% 50%, 350% 50%" } },
      },
      animation: {
        marquee: "marquee var(--duration,40s) linear infinite",
        "border-beam": "border-beam calc(var(--duration)*1s) infinite linear",
        shine: "shine var(--duration,8s) infinite linear",
        float: "float 7s ease-in-out infinite",
        meteor: "meteor 5s linear infinite",
        aurora: "aurora 60s linear infinite",
      },
    },
  },
  plugins: [],
};
export default config;
