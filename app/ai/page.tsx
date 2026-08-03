import type { Metadata } from "next";
import ServicePageLayout from "@/components/ServicePageLayout";

export const metadata: Metadata = {
  title: "AI & Intelligent Systems — Ftechworks",
  description:
    "Chatbots, document processing and AI-powered features — practical AI shipped into real products, trained on your own data.",
};

export default function AiPage() {
  return (
    <ServicePageLayout
      eyebrow="AI & Intelligent Systems"
      title="Intelligence, applied."
      subtitle="Chatbots, document processing and AI-powered features — practical AI shipped into real products, trained on your own data."
      services={[
        {
          title: "AI Chatbot Integration",
          desc: "Smart chatbots powered by ChatGPT or Claude — handles queries, qualifies leads, supports customers 24/7. Trained on your data.",
          tags: ["OpenAI", "Claude", "LangChain"],
        },
        {
          title: "AI Document Processing",
          desc: "Extract, summarise & classify documents automatically. Invoices, contracts, reports — structured and delivered with LLMs.",
          tags: ["GPT-4o", "RAG", "OCR", "Vector DB"],
        },
        {
          title: "AI-Powered Features",
          desc: "Add intelligence to existing apps — smart search, content generation, auto-tagging, recommendations and more.",
          tags: ["Embeddings", "Fine-tuning", "Agents"],
        },
      ]}
      ctaTitle="Want AI in your product?"
      ctaBody="Tell us what you're building — we reply within 12 hours with honest advice and a clear plan."
    />
  );
}
