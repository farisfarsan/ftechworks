import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Reveal } from "@/components/ui/reveal";
import { AuroraGlow, GridBackground } from "@/components/ui/backgrounds";
import SectionHead from "@/components/sections/SectionHead";
import CtaBand from "@/components/sections/CtaBand";
import JsonLdScript from "@/components/JsonLdScript";
import { FOUNDER_COMPANIES, FOUNDER_ROLES } from "@/lib/team";
import { SITE_URL } from "@/lib/siteConfig";
import { pageMetadata } from "@/lib/pageMetadata";

export const metadata = pageMetadata(
  "About",
  "A founder-led technology studio: engineers from Jio Platforms, BYJU'S, Netradyne, PathPartner Technology and Alphastream.",
  "/about"
);

const PILLARS = [
  { title: "Enterprise-grade engineering", body: "Architecture, testing and documentation held to big-tech standards." },
  { title: "Personal, transparent service", body: "You work directly with the founders, with daily updates." },
  { title: "Measurable business value", body: "Every build is scoped around outcomes, not features for their own sake." },
];

const COMMITMENTS = [
  {
    title: "Business first",
    body: "Successful digital transformation begins with understanding the business, not simply choosing the technology.",
  },
  {
    title: "Thoughtfully engineered",
    body: "Solutions that combine functionality, performance, security and an exceptional user experience.",
  },
  {
    title: "Accountable in every engagement",
    body: "From a digital presence to custom software or AI, we work with professionalism, accountability and attention to detail.",
  },
];

const label = "font-mono text-[11px] font-semibold uppercase tracking-[.12em] text-subtle";

export default function AboutPage() {
  return (
    <>
      <JsonLdScript
        data={{
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
            { "@type": "ListItem", position: 2, name: "About", item: `${SITE_URL}/about` },
          ],
        }}
      />

      {/* hero: intro + stats */}
      <section className="relative isolate overflow-hidden pb-16 pt-36 md:pb-20 md:pt-44">
        <AuroraGlow className="opacity-70" />
        <GridBackground />
        <div className="container">
          <Reveal>
            <Link href="/" className="mb-8 flex w-fit items-center gap-2 text-sm text-subtle transition hover:text-ink">
              <ArrowLeft className="h-4 w-4" /> Back to home
            </Link>
            <div className="eyebrow mb-5">
              <span className="text-brand">[01]</span> <span>About us</span>
            </div>
          </Reveal>

          <div className="max-w-4xl">
            <Reveal>
              <h1 className="h-display text-[clamp(2.6rem,6vw,5rem)]">
                Big-tech engineering. <span className="serif-accent">Small-team attention.</span>
              </h1>
              <p className="lede mt-7 max-w-2xl">
                Ftechworks is a technology studio founded by two engineers with a background in large-scale,
                enterprise software. We bring that discipline to startups and growing businesses, without the
                enterprise overhead.
              </p>
              <p className="lede mt-4 max-w-2xl">
                From websites and custom business software to mobile apps and AI solutions, everything we deliver is
                designed to perform, scale and last. Working from India, we serve clients across the Gulf and worldwide.
              </p>
            </Reveal>

          </div>
        </div>
      </section>

      {/* where the founders have engineered */}
      <section aria-labelledby="companies-title" className="relative border-y border-line/15 bg-surface/40 py-14 md:py-16">
        <div className="container">
          <Reveal className="mb-8 flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="eyebrow">
                <span className="text-brand">[02]</span> <span>Proven at scale</span>
              </p>
              <h2 id="companies-title" className="mt-3 font-display text-2xl font-bold tracking-tight text-ink md:text-3xl">
                Our founders have engineered at
              </h2>
            </div>
            <p className="max-w-sm text-sm text-muted">
              Enterprise platforms, AI products and embedded systems used by millions.
            </p>
          </Reveal>
          <Reveal delay={0.05}>
            <ul className="grid grid-cols-2 gap-px border border-line/15 bg-line/15 lg:grid-cols-5">
              {FOUNDER_COMPANIES.map((c, i) => (
                <li
                  key={c.name}
                  className="group flex min-h-[112px] flex-col justify-between bg-bg p-5 transition-colors duration-300 last:col-span-2 hover:bg-brand md:min-h-[132px] md:p-6 lg:last:col-span-1"
                >
                  <span className="font-mono text-[11px] text-subtle transition-colors group-hover:text-onbrand/70">
                    0{i + 1}
                  </span>
                  <div>
                    <p className="font-display text-xl font-bold leading-tight tracking-tight text-ink transition-colors group-hover:text-onbrand md:text-[1.35rem]">
                      {c.name}
                    </p>
                    <p className="mt-1 text-xs font-medium uppercase tracking-[.08em] text-brand2 transition-colors group-hover:text-onbrand/80">
                      {c.sector}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      {/* leadership */}
      <section className="section">
        <div className="container">
          <div className="grid gap-8 lg:grid-cols-[1fr_1fr] lg:items-end lg:gap-16">
            <SectionHead
              className="mb-0 md:mb-0"
              no="03"
              eyebrow="Leadership"
              title={
                <>
                  Experience meets <span className="serif-accent">innovation.</span>
                </>
              }
            />
            <Reveal>
              <p className="lede">
                Founded by two brothers, Ftechworks brings enterprise software engineering, system architecture and
                artificial intelligence together to bridge the gap between complex technology and practical business
                needs.
              </p>
            </Reveal>
          </div>

          <div className="mt-12 grid gap-4 md:mt-14 lg:grid-cols-2">
            {FOUNDER_ROLES.map((f, i) => (
              <Reveal
                key={f.role}
                delay={i * 0.08}
                className="flex flex-col border border-line/15 bg-surface/60 p-7 transition-colors hover:border-brand/50 md:p-9"
              >
                <div className="flex items-start justify-between gap-6 border-b border-line/10 pb-6">
                  <div>
                    <p className={label}>Co-founder 0{i + 1}</p>
                    <h3 className="mt-2 text-2xl font-semibold tracking-tight text-ink">{f.role}</h3>
                  </div>
                  <div className="shrink-0 text-right">
                    <p className="font-display text-4xl font-bold leading-none tracking-[-0.025em] text-brand2">{f.years}</p>
                    <p className="mt-1.5 font-mono text-[10px] font-semibold uppercase tracking-[.12em] text-subtle">
                      Years in engineering
                    </p>
                  </div>
                </div>
                <p className="mt-6 text-[15px] leading-relaxed text-muted">{f.summary}</p>
                <p className={`${label} mt-7`}>Areas of expertise</p>
                <ul className="mt-3 grid gap-x-6 gap-y-2.5 sm:grid-cols-2">
                  {f.expertise.map((e) => (
                    <li key={e} className="flex items-start gap-2.5 text-sm text-ink">
                      <span aria-hidden="true" className="mt-1.5 h-1.5 w-1.5 shrink-0 bg-brand" />
                      {e}
                    </li>
                  ))}
                </ul>
              </Reveal>
            ))}
          </div>

          {/* values + principle */}
          <div className="mt-4 grid gap-4 lg:grid-cols-[1.4fr_1fr]">
            <Reveal className="grid gap-px border border-line/15 bg-line/15 sm:grid-cols-3">
              {PILLARS.map((p, i) => (
                <div key={p.title} className="bg-bg p-6">
                  <span className="font-mono text-xs text-brand2">0{i + 1}</span>
                  <p className="mt-3 font-semibold leading-snug text-ink">{p.title}</p>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{p.body}</p>
                </div>
              ))}
            </Reveal>
            <Reveal delay={0.08} className="flex flex-col justify-center border border-brand/40 bg-brand/[.07] p-7 md:p-8">
              <p className="font-display text-xl font-bold leading-snug tracking-tight text-ink md:text-2xl">
                &ldquo;Build with purpose, deliver with quality, and{" "}
                <span className="serif-accent">create solutions that last.</span>&rdquo;
              </p>
              <p className="mt-3 text-sm text-muted">Both founders stay involved from the first call to launch.</p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* commitment */}
      <section className="section pt-0">
        <div className="container">
          <SectionHead
            no="04"
            eyebrow="Our commitment"
            title={
              <>
                Built on expertise. <span className="serif-accent">Focused on results.</span>
              </>
            }
          />
          <div className="grid gap-px border border-line/15 bg-line/15 md:grid-cols-3">
            {COMMITMENTS.map((c, i) => (
              <Reveal key={c.title} delay={i * 0.06} className="group bg-bg p-8 transition-colors hover:bg-surface md:p-10">
                <span className="font-display text-5xl font-bold leading-none text-line/20 transition-colors group-hover:text-brand">
                  0{i + 1}
                </span>
                <h3 className="mt-6 text-xl font-semibold tracking-tight text-ink">{c.title}</h3>
                <p className="mt-3 text-[15px] leading-relaxed text-muted">{c.body}</p>
              </Reveal>
            ))}
          </div>
          <Reveal className="flex flex-col gap-6 border border-t-0 border-brand bg-brand px-8 py-8 text-onbrand md:flex-row md:items-center md:justify-between md:px-10">
            <p className="max-w-2xl text-lg font-medium leading-relaxed">
              Our ambition is to build lasting client relationships through dependable technology, transparent
              collaboration and consistent delivery.
            </p>
            <p className="shrink-0 font-display text-xl font-bold leading-tight tracking-tight">
              Technology with Purpose.
              <br />
              Solutions with Impact.
            </p>
          </Reveal>
        </div>
      </section>

      <CtaBand
        title="Talk to the founders."
        body="Book a free 30-minute strategy call. Fixed-price proposal within 24 hours, no sales pitch."
      />
    </>
  );
}
