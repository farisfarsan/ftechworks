// Single source for the homepage stat strip. A stat is either a real
// number (rendered via the count-up Counter) or a TODO_STAT placeholder
// awaiting a real figure — never a fabricated number and never a bare
// label standing in for a metric.
export type StatItem =
  | { count: number; suffix?: string; label: string }
  | { todo: string; label: string };

export const STATS: StatItem[] = [
  { count: 3, suffix: "+", label: "Years in Production" },
  { todo: "TODO_STAT", label: "Projects Shipped" },
  { count: 14, label: "Services Offered" },
];
