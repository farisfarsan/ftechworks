import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Reveal } from "@/components/ui/reveal";
import { Button } from "@/components/ui/button";
import SectionHead from "./SectionHead";

// Each blurb and tag list restates what the /work page already says.
const FEATURED = {
  no: "01",
  img: "/app/grytt-app.webp",
  alt: "Grytt fitness app screens: home, analytics and progress",
  tag: "Mobile app",
  title: "App",
  desc: "Mobile apps with live progress tracking, analytics and a polished native feel, built for iOS and Android from a single codebase.",
  pills: ["React Native", "FastAPI", "Push notifications"],
};

const CARDS = [
  {
    no: "02",
    img: "/landingpage/lp2.avif",
    alt: "Landing page hero design",
    tag: "Web",
    title: "Landing pages",
    desc: "High-converting app landing pages: a clear hero, scannable features and a strong call to action.",
    pills: ["Landing page", "UI design", "Figma"],
    pos: "object-top",
  },
  {
    no: "03",
    img: "/branding/brandin4.jpg",
    alt: "Samak Restaurant illuminated shopfront sign",
    tag: "Branding",
    title: "Brand identity",
    desc: "A full identity for a seafood restaurant: wordmark, pattern system, packaging and signage.",
    pills: ["Logo design", "Packaging", "Signage"],
    pos: "object-[70%_center]",
  },
  {
    no: "04",
    img: "/chatboat.png",
    alt: "AI chatbot interface",
    tag: "AI",
    title: "AI chatbots",
    desc: "Support bots with a custom knowledge base, lead qualification and CRM integration.",
    pills: ["OpenAI", "LangChain", "RAG"],
    pos: "object-center",
  },
];

const Pills = ({ items }: { items: string[] }) => (
  <div className="flex flex-wrap gap-2">
    {items.map((p) => (
      <span key={p} className="border border-line/15 px-2.5 py-1 text-[11px] font-semibold uppercase tracking-[.06em] text-muted">
        {p}
      </span>
    ))}
  </div>
);

export default function WorkPreview() {
  return (
    <section id="work-preview" className="section">
      <div className="hairline absolute inset-x-0 top-0" aria-hidden="true" />
      <div className="container">
        <div className="mb-14 flex flex-wrap items-end justify-between gap-6 md:mb-16 md:flex-nowrap">
          <SectionHead
            className="mb-0 max-w-xl flex-1 md:mb-0"
            no="03"
            eyebrow="Selected work"
            title={
              <>
                Proof, <span className="serif-accent">not</span> promises.
              </>
            }
            sub="A look at what we ship: landing pages, brand systems, AI assistants and mobile apps."
          />
          <Reveal className="hidden md:block">
            <Button href="/work" variant="secondary" size="lg">
              View all work <ArrowRight className="h-4 w-4" />
            </Button>
          </Reveal>
        </div>

        {/* highlight: every client's taste differs, every build is customised */}
        <Reveal className="mb-10 grid gap-4 border border-brand/40 border-l-[3px] border-l-brand bg-brand/[.06] px-6 py-6 md:grid-cols-[.8fr_1.2fr] md:items-center md:gap-10 md:px-8">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[.12em] text-brand2">Built around you</p>
            <h3 className="mt-2 text-balance font-display text-xl font-bold leading-snug tracking-tight text-ink md:text-2xl">
              No two projects look alike. That&apos;s the point.
            </h3>
          </div>
          <p className="text-[15px] leading-relaxed text-muted">
            Every client has their own taste, so every build is shaped around theirs. Don&apos;t judge our range by how these
            look: we customise every design, colour and detail to fit{" "}
            <span className="font-semibold text-ink">your brand and your customers</span>.
          </p>
        </Reveal>

        {/* featured project */}
        <Reveal>
          <Link
            href="/work"
            aria-label={`${FEATURED.title} — view our work`}
            className="group grid overflow-hidden border border-line/15 bg-surface/70 transition-colors duration-300 hover:border-brand md:grid-cols-[1.15fr_1fr]"
          >
            <div className="relative aspect-[4/3] overflow-hidden bg-surface2 md:aspect-auto md:min-h-[420px] md:bg-transparent">
              <Image
                src={FEATURED.img}
                alt={FEATURED.alt}
                fill
                sizes="(min-width:768px) 600px, 100vw"
                className="object-cover object-top transition-transform duration-700 group-hover:scale-[1.04] md:[mask-image:linear-gradient(90deg,#000_62%,transparent)]"
              />
              <span className="absolute left-4 top-4 bg-bg/80 px-2 py-1 text-[11px] font-semibold tracking-[.1em] text-brand2 backdrop-blur">
                {FEATURED.no}
              </span>
            </div>
            <div className="flex flex-col justify-center gap-5 p-8 md:p-12">
              <div className="flex items-center gap-3">
                <span className="bg-brand px-2.5 py-1 text-[11px] font-semibold uppercase tracking-[.08em] text-onbrand">Featured</span>
                <span className="text-xs font-semibold uppercase tracking-[.1em] text-brand2">{FEATURED.tag}</span>
              </div>
              <h3 className="font-display text-3xl font-bold tracking-tight text-ink md:text-5xl">{FEATURED.title}</h3>
              <p className="max-w-md text-[15px] leading-relaxed text-muted">{FEATURED.desc}</p>
              <Pills items={FEATURED.pills} />
            </div>
          </Link>
        </Reveal>

        {/* project cards */}
        <div className="mt-4 grid gap-4 md:grid-cols-3">
          {CARDS.map((c, i) => (
            <Reveal key={c.title} delay={i * 0.08}>
              <Link
                href="/work"
                aria-label={`${c.title} — view our work`}
                className="group flex h-full flex-col overflow-hidden border border-line/15 bg-surface/70 transition-all duration-300 hover:-translate-y-1 hover:border-brand"
              >
                <div className="relative aspect-[4/3] overflow-hidden bg-surface2">
                  <Image
                    src={c.img}
                    alt={c.alt}
                    fill
                    sizes="(min-width:768px) 380px, 100vw"
                    className={`object-cover transition-transform duration-700 group-hover:scale-105 ${c.pos}`}
                  />
                  <span className="absolute left-3 top-3 bg-bg/80 px-2 py-1 text-[11px] font-semibold tracking-[.1em] text-brand2 backdrop-blur">{c.no}</span>
                </div>
                <div className="flex flex-1 flex-col gap-3 p-6">
                  <span className="text-xs font-semibold uppercase tracking-[.1em] text-brand2">{c.tag}</span>
                  <h3 className="font-display text-xl font-bold tracking-tight text-ink">{c.title}</h3>
                  <p className="flex-1 text-sm leading-relaxed text-muted">{c.desc}</p>
                  <Pills items={c.pills} />
                </div>
              </Link>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-12 flex flex-col items-center gap-4 text-center">
          <p className="text-sm text-muted">Apps, websites, AI, dashboards, landing pages and branding, all in the portfolio.</p>
          <Button href="/work" size="lg">
            Explore more work <ArrowRight className="h-4 w-4" />
          </Button>
        </Reveal>
      </div>
    </section>
  );
}
