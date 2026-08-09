import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Reveal from "@/components/Reveal";
import RippleLink from "@/components/RippleLink";
import JsonLdScript from "@/components/JsonLdScript";
import { CASE_STUDIES } from "@/lib/caseStudies";
import { SITE_URL } from "@/lib/siteConfig";

export function generateStaticParams() {
  return CASE_STUDIES.map((c) => ({ slug: c.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const study = CASE_STUDIES.find((c) => c.slug === params.slug);
  if (!study) return {};
  return {
    title: `${study.client} Case Study`,
    description: `${study.problem} ${study.built}`.slice(0, 155),
    alternates: { canonical: `/work/${study.slug}` },
  };
}

export default function CaseStudyPage({ params }: { params: { slug: string } }) {
  const study = CASE_STUDIES.find((c) => c.slug === params.slug);
  if (!study) notFound();

  const url = `${SITE_URL}/work/${study.slug}`;

  return (
    <>
      <JsonLdScript
        data={{
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
            { "@type": "ListItem", position: 2, name: "Work", item: `${SITE_URL}/work` },
            { "@type": "ListItem", position: 3, name: study.client, item: url },
          ],
        }}
      />

      {/* PAGE HEADER */}
      <section className="sec sec-page-header">
        <div className="sec-in">
          <Reveal>
            <Link href="/work" className="back-lnk">
              ← Back to Work
            </Link>
            <div className="ey">{study.sector}</div>
            <h1 className="sh">{study.client}</h1>
          </Reveal>
        </div>
      </section>

      {/* CASE DETAIL */}
      <section className="sec sec-alt">
        <div className="sec-in">
          <Reveal className="case-detail">
            <div className="case-detail-media" style={{ background: study.imageBg }}>
              <img src={study.image} alt={study.imageAlt} />
            </div>
            <div className="case-detail-body">
              <h2 className="sh2">The problem</h2>
              <p>{study.problem}</p>
              <h2 className="sh2">What we built</h2>
              <p>{study.built}</p>
              <div className="case-outcome">
                <span>Outcome</span>
                {study.outcome}
              </div>
              <div className="wcard-pills" style={{ marginTop: 20 }}>
                {study.stack.map((t) => (
                  <span className="wcard-pill" key={t}>
                    {t}
                  </span>
                ))}
              </div>
              {study.href && (
                <a href={study.href} target="_blank" rel="noopener" className="case-detail-live">
                  Visit live site ↗
                </a>
              )}
            </div>
          </Reveal>
        </div>
      </section>

      {/* CTA */}
      <section className="sec">
        <div className="sec-in">
          <Reveal className="cta-band">
            <h3>Have something similar in mind?</h3>
            <p>Tell us what you&apos;re building — we reply within 12 hours with honest advice and a clear plan.</p>
            <div className="cta-band-btns">
              <RippleLink href="/#contact" className="btn-lq">
                Start a Project →
              </RippleLink>
              <RippleLink href="/work" className="btn-hollow">
                See all Work
              </RippleLink>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
