// Single source for the homepage stat strip. Every value here is a real,
// already-published fact — years in production and services offered are
// counted directly from the site; the reply-time figure matches the
// commitment stated in the process/FAQ copy elsewhere on the site.
export type StatItem = { count: number; suffix?: string; label: string };

export const STATS: StatItem[] = [
  { count: 3, suffix: "+", label: "Years in Production" },
  { count: 12, suffix: "hr", label: "Reply Time" },
  { count: 14, label: "Services Offered" },
];
