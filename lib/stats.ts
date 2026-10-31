// Single source for the homepage stat band. Same four figures as the company
// profile PDF: combined founder experience (15+ and 3+ years), the reply-time
// commitment, the seven service pages and the support period in the process copy.
export type StatItem = { count: number; suffix?: string; label: string };

export const STATS: StatItem[] = [
  { count: 18, suffix: "+", label: "Years of combined engineering" },
  { count: 12, suffix: "hr", label: "Founder reply time" },
  { count: 7, label: "Service lines" },
  { count: 2, suffix: "wk", label: "Free post-launch support" },
];
