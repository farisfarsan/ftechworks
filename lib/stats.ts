// Single source for the homepage stat band. Every value is a real, already
// published fact — years in production and services offered are counted from
// the site; the reply-time figure matches the commitment stated in the
// process/FAQ copy.
export type StatItem = { count: number; suffix?: string; label: string };

export const STATS: StatItem[] = [
  { count: 3, suffix: "+", label: "Years in production" },
  { count: 12, suffix: "hr", label: "Founder reply time" },
  { count: 14, label: "Services offered" },
];
