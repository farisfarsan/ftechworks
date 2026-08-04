import type { Metadata } from "next";
import ServicePageLayout from "@/components/ServicePageLayout";
import { BASE_FAQS } from "@/lib/content";

export const metadata: Metadata = {
  title: "AI & Intelligent Systems",
  description:
    "Chatbots, document processing and AI-powered features — practical AI shipped into real products, trained on your own data.",
  alternates: { canonical: "/ai" },
};

export default function AiPage() {
  return (
    <ServicePageLayout
      eyebrow="AI & Intelligent Systems"
      title="Intelligence, applied."
      subtitle="Chatbots, document processing and AI-powered features — practical AI shipped into real products, trained on your own data."
      intro={[
        "We ship practical AI into real products — chatbots, document processing and intelligent features trained on your own data, not generic demos that fall apart outside a sales deck.",
        "From GPT-powered support bots with a custom knowledge base to automated document extraction and AI-powered search, every system is built around the data and workflows you already have, and integrated into the tools your team already uses.",
      ]}
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
      deliverables={[
        "AI chatbots trained on your own knowledge base",
        "Lead qualification and 24/7 customer support automation",
        "Automated document extraction, summarisation and classification",
        "Invoice, contract and report processing pipelines",
        "Smart search and recommendations inside existing apps",
        "Content generation and auto-tagging features",
        "CRM and multi-channel deployment",
        "Full documentation, unit tests and a deployment guide",
      ]}
      stack={[
        "OpenAI",
        "Claude",
        "LangChain",
        "GPT-4o",
        "RAG",
        "OCR",
        "Vector DB",
        "Embeddings",
        "Fine-tuning",
        "Agents",
      ]}
      faqs={[
        {
          q: "Will the AI be trained on our own data?",
          a: "Yes. Chatbots are trained on your knowledge base, and document workflows are built around your actual invoices, contracts and reports — so answers reflect your business rather than generic internet knowledge.",
        },
        ...BASE_FAQS,
      ]}
      ctaTitle="Want AI in your product?"
      ctaBody="Tell us what you're building — we reply within 12 hours with honest advice and a clear plan."
    />
  );
}
