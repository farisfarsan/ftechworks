// TODO_PRICE: every `price` below is an unverified placeholder — replace
// with the real starting figures before this section ships live.
export type PricingTier = {
  name: string;
  price: string;
  period: string;
  bullets: string[];
  featured?: boolean;
};

export const PRICING_TIERS: PricingTier[] = [
  {
    name: "Landing Site",
    price: "TODO_PRICE",
    period: "one-time",
    bullets: [
      "Single-page or multi-section site",
      "Copy structure & on-page SEO included",
      "2-week post-launch support",
    ],
  },
  {
    name: "Web App",
    price: "TODO_PRICE",
    period: "one-time",
    bullets: [
      "Full-stack build — auth, admin & data included",
      "Full documentation, tests & deployment guide",
      "2-week post-launch support",
    ],
    featured: true,
  },
  {
    name: "Retainer",
    price: "TODO_PRICE",
    period: "/month",
    bullets: [
      "Ongoing feature development & fixes",
      "Direct access to the founder, not a queue",
      "Cancel anytime — no lock-in",
    ],
  },
];
