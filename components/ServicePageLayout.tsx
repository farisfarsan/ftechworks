import Link from "next/link";
import type { ReactNode } from "react";
import { ArrowLeft, Check } from "lucide-react";
import { Reveal } from "@/components/ui/reveal";
import { AuroraGlow, GridBackground } from "@/components/ui/backgrounds";
import { SpotlightCard } from "@/components/ui/spotlight-card";
import Process from "@/components/sections/Process";
import SectionHead from "@/components/sections/SectionHead";
import CtaBand from "@/components/sections/CtaBand";
import FaqAccordion, { type Faq } from "@/components/FaqAccordion";
import JsonLdScript from "@/components/JsonLdScript";
import { SITE_URL } from "@/lib/siteConfig";

export type ServiceBlock = {
  title: string;
  desc: string;
  tags: string[];
};

export default function ServicePageLayout({
  path,
  eyebrow,
  title,
  subtitle,
  intro,
  services,
  deliverables,
  stack,
  stackTitle = "Tech Stack",
  faqs,
  demo,
  demoLabel = "Illustrative demo",
  ctaTitle,
  ctaBody,
}: {
  path: string;
  eyebrow: string;
  title: string;
  subtitle: string;
  intro?: string[];
  services: ServiceBlock[];
  deliverables?: string[];
  stack?: string[];
  stackTitle?: string;
  faqs?: Faq[];
  /** animated demo shown in the page header (client component element) */
  demo?: ReactNode;
  /** caption under the demo (defaults to "Illustrative demo") */
  demoLabel?: string;
  ctaTitle: string;
  ctaBody: string;
}) {
  const url = `${SITE_URL}${path}`;

  return (
    <>
      <JsonLdScript
        data={{
          "@type": "Service",
          name: title,
          serviceType: eyebrow,
          description: subtitle,
          url,
          provider: { "@id": `${SITE_URL}/#organization` },
          areaServed: "Worldwide",
        }}
      />
      <JsonLdScript
        data={{
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
            { "@type": "ListItem", position: 2, name: title, item: url },
          ],
        }}
      />
      {faqs && faqs.length > 0 && (
        <JsonLdScript
          data={{
            "@type": "FAQPage",
            mainEntity: faqs.map((f) => ({
              "@type": "Question",
              name: f.q,
              acceptedAnswer: { "@type": "Answer", text: f.a },
            })),
          }}
        />
      )}

      {/* PAGE HEADER */}
      <section className="relative isolate overflow-hidden pb-16 pt-36 md:pb-24 md:pt-44">
        <AuroraGlow className="opacity-70" />
        <GridBackground />
        <div className="container grid items-end gap-10 lg:grid-cols-[1.15fr_.85fr] lg:gap-16">
          <Reveal>
            <Link href="/" className="mb-8 flex w-fit items-center gap-2 text-sm text-subtle transition hover:text-ink">
              <ArrowLeft className="h-4 w-4" /> Back to home
            </Link>
            <div className="eyebrow mb-5">
              <span className="h-px w-6 bg-brand2/60" /> {eyebrow}
            </div>
            <h1 className="h-display text-[clamp(2.4rem,5.6vw,4.6rem)]">{title}</h1>
            <p className="lede mt-6 max-w-xl">{subtitle}</p>
            {demo && intro && intro.length > 0 && (
              <div className="mt-8 max-w-xl space-y-4 border-l border-brand/50 pl-5">
                {intro.map((p) => (
                  <p key={p} className="text-sm leading-relaxed text-muted">
                    {p}
                  </p>
                ))}
              </div>
            )}
          </Reveal>
          {demo ? (
            <Reveal delay={0.1} className="relative">
              <div className="brackets">
                <span className="br-b" />
                <div className="relative h-[460px] overflow-hidden border border-line/15 bg-surface shadow-card sm:h-[520px]">{demo}</div>
              </div>
              <p className="mt-5 text-right font-mono text-[11px] uppercase tracking-[.1em] text-subtle">{demoLabel}</p>
            </Reveal>
          ) : (
            intro &&
            intro.length > 0 && (
              <Reveal delay={0.1} className="relative space-y-4 border border-line/10 bg-surface/60 p-8 shadow-card backdrop-blur">
                <div aria-hidden="true" className="absolute inset-x-8 top-0 h-px bg-brand" />
                {intro.map((p) => (
                  <p key={p} className="text-sm leading-relaxed text-muted">
                    {p}
                  </p>
                ))}
              </Reveal>
            )
          )}
        </div>
      </section>

      {/* SERVICE BLOCKS */}
      <section className="section">
        <div className="hairline absolute inset-x-0 top-0" aria-hidden="true" />
        <div className="container">
          <SectionHead
            eyebrow="What we build"
            title={
              <>
                Services in <span className="serif-accent grad-text pr-1 text-[1.1em]">detail.</span>
              </>
            }
          />
          <div className="grid gap-4 md:grid-cols-2">
            {services.map((s, i) => (
              <Reveal key={s.title} delay={(i % 2) * 0.08}>
                <SpotlightCard className="h-full">
                  <div className="p-8">
                    <div className="mb-8 font-mono text-xs tracking-[.08em] text-brand2">{String(i + 1).padStart(2, "0")}</div>
                    <h3 className="text-xl font-semibold tracking-tight">{s.title}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-muted">{s.desc}</p>
                    <div className="mt-6 flex flex-wrap gap-2">
                      {s.tags.map((t) => (
                        <span key={t} className="rounded-none border border-line/10 bg-line/[.04] px-3 py-1 font-mono text-[11px] text-muted">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </SpotlightCard>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* DELIVERABLES + STACK */}
      {(deliverables?.length || stack?.length) && (
        <section className="section">
          <div className="hairline absolute inset-x-0 top-0" aria-hidden="true" />
          <div className="container grid gap-4 lg:grid-cols-[1.2fr_1fr]">
            {deliverables && deliverables.length > 0 && (
              <Reveal className="rounded-3xl border border-line/10 bg-surface/70 p-8 md:p-10">
                <div className="eyebrow mb-4">Scope</div>
                <h2 className="h-section text-3xl md:text-4xl">
                  What we <span className="serif-accent grad-text pr-1 text-[1.1em]">deliver.</span>
                </h2>
                <ul className="mt-8 space-y-3.5">
                  {deliverables.map((d) => (
                    <li key={d} className="flex items-start gap-3 text-[15px] text-muted">
                      <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-none border border-brand/30 bg-brand/10 text-brand2">
                        <Check className="h-3 w-3" />
                      </span>
                      {d}
                    </li>
                  ))}
                </ul>
              </Reveal>
            )}
            {stack && stack.length > 0 && (
              <Reveal delay={0.1} className="rounded-3xl border border-line/10 bg-surface/70 p-8 md:p-10">
                <div className="eyebrow mb-4">Toolkit</div>
                <h2 className="h-section text-3xl md:text-4xl">
                  {stackTitle.split(" ").slice(0, -1).join(" ")}{" "}
                  <span className="serif-accent grad-text pr-1 text-[1.1em]">{stackTitle.split(" ").slice(-1)}</span>
                </h2>
                <div className="mt-8 flex flex-wrap gap-2.5">
                  {stack.map((t) => (
                    <span key={t} className="rounded-none border border-line/10 bg-line/[.04] px-4 py-2 text-[13px] text-muted transition hover:-translate-y-0.5 hover:border-brand/40 hover:text-ink">
                      {t}
                    </span>
                  ))}
                </div>
              </Reveal>
            )}
          </div>
        </section>
      )}

      {/* PROCESS */}
      <Process subtitle="The same four steps on every project, built to protect your time, money and vision." />

      {/* FAQ */}
      {faqs && faqs.length > 0 && (
        <section className="section">
          <div className="hairline absolute inset-x-0 top-0" aria-hidden="true" />
          <div className="container">
            <SectionHead
              center
              eyebrow="FAQ"
              title={
                <>
                  Frequently asked <span className="serif-accent grad-text pr-1 text-[1.1em]">questions.</span>
                </>
              }
            />
            <Reveal delay={0.05}>
              <FaqAccordion faqs={faqs} />
            </Reveal>
          </div>
        </section>
      )}

      <CtaBand title={ctaTitle} body={ctaBody} />
    </>
  );
}
