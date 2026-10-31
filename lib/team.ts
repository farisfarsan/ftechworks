// Founders are presented by role only on the site: no names or photos
// (both founders are currently employed elsewhere). Companies are listed
// collectively, never tied to an individual founder. The full profiles live
// in the private company profile PDF.
export type FounderRole = {
  role: string;
  years: string;
  summary: string;
  expertise: string[];
};

export const FOUNDER_ROLES: FounderRole[] = [
  {
    role: "Technology & Engineering Strategy",
    years: "15+",
    summary:
      "Full-stack engineering, system architecture and technical leadership on complex, large-scale software systems. Oversees technology strategy so every solution is built for reliability, performance and long-term scalability.",
    expertise: [
      "Enterprise Architecture & System Design",
      "Full-Stack Development: Backend & Frontend",
      "Technical Strategy & Engineering Leadership",
      "Software Quality & Performance Optimisation",
    ],
  },
  {
    role: "Software Engineering & AI",
    years: "3+",
    summary:
      "Python backend engineering and AI: production-grade services, data processing and AI-powered automation. Leads software development and AI delivery, turning business requirements into reliable digital products.",
    expertise: [
      "Python Backend: Django, FastAPI & REST APIs",
      "AI Agents & Intelligent Automation",
      "LLMs & RAG Systems",
      "Cloud Deployment & Docker",
    ],
  },
];

export const FOUNDER_COMPANIES = [
  { name: "Jio Platforms", sector: "Digital platforms" },
  { name: "BYJU'S", sector: "EdTech" },
  { name: "Netradyne", sector: "AI & computer vision" },
  { name: "PathPartner Technology", sector: "Embedded systems" },
  { name: "Alphastream", sector: "Financial AI" },
];
