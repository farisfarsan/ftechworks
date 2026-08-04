import Link from "next/link";
import Reveal from "@/components/Reveal";
import RippleLink from "@/components/RippleLink";
import ProcessTimeline from "@/components/ProcessTimeline";
import FaqAccordion, { type Faq } from "@/components/FaqAccordion";

export type ServiceBlock = {
  title: string;
  desc: string;
  tags: string[];
};

export default function ServicePageLayout({
  eyebrow,
  title,
  subtitle,
  intro,
  services,
  deliverables,
  stack,
  stackTitle = "Tech Stack",
  faqs,
  ctaTitle,
  ctaBody,
}: {
  eyebrow: string;
  title: string;
  subtitle: string;
  intro?: string[];
  services: ServiceBlock[];
  deliverables?: string[];
  stack?: string[];
  stackTitle?: string;
  faqs?: Faq[];
  ctaTitle: string;
  ctaBody: string;
}) {
  return (
    <>
      {/* PAGE HEADER */}
      <section className="sec svc-hero" style={{ paddingTop: 150, paddingBottom: 60 }}>
        <div className="sec-in">
          <Reveal>
            <Link href="/" className="back-lnk">
              ← Back to Home
            </Link>
            <div className="ey">{eyebrow}</div>
            <h1 className="sh">{title}</h1>
            <p className="ssub" style={{ marginBottom: 0 }}>
              {subtitle}
            </p>
          </Reveal>
          {intro && intro.length > 0 && (
            <Reveal className="svc-intro" delay="d1">
              {intro.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </Reveal>
          )}
        </div>
      </section>

      {/* SERVICE BLOCKS */}
      <section className="sec sec-alt">
        <div className="sec-in">
          <Reveal>
            <div className="ey">What We Build</div>
            <h2 className="sh2">
              Services in <em>detail.</em>
            </h2>
          </Reveal>
          <Reveal className="svc-detail-grid" delay="d1">
            {services.map((s) => (
              <div className="svc-detail" key={s.title}>
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
                <div className="svc-tags">
                  {s.tags.map((t) => (
                    <span className="svc-tag" key={t}>
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      {/* DELIVERABLES + STACK */}
      {(deliverables?.length || stack?.length) && (
        <section className="sec">
          <div className="sec-in">
            <div className="deliver-grid">
              {deliverables && deliverables.length > 0 && (
                <Reveal>
                  <div className="ey">Scope</div>
                  <h2 className="sh2">
                    What we <em>deliver.</em>
                  </h2>
                  <ul className="deliver-list">
                    {deliverables.map((d) => (
                      <li key={d}>
                        <span className="deliver-tick" aria-hidden="true">
                          ✓
                        </span>
                        {d}
                      </li>
                    ))}
                  </ul>
                </Reveal>
              )}
              {stack && stack.length > 0 && (
                <Reveal delay="d1">
                  <div className="ey">Toolkit</div>
                  <h2 className="sh2">
                    {stackTitle.split(" ").slice(0, -1).join(" ")}{" "}
                    <em>{stackTitle.split(" ").slice(-1)}</em>
                  </h2>
                  <div className="stack-pills">
                    {stack.map((t) => (
                      <span className="stack-pill" key={t}>
                        {t}
                      </span>
                    ))}
                  </div>
                </Reveal>
              )}
            </div>
          </div>
        </section>
      )}

      {/* PROCESS */}
      <section className="sec sec-alt">
        <div className="sec-in">
          <Reveal>
            <div className="ey">How We Work</div>
            <h2 className="sh2">
              Your roadmap to <em>shipping.</em>
            </h2>
            <p className="ssub">
              The same four steps on every project — built to protect your time, money and vision.
            </p>
          </Reveal>
          <ProcessTimeline />
        </div>
      </section>

      {/* FAQ */}
      {faqs && faqs.length > 0 && (
        <section className="sec">
          <div className="sec-in">
            <Reveal style={{ textAlign: "center", maxWidth: 640, margin: "0 auto 44px" }}>
              <div className="ey" style={{ justifyContent: "center" }}>
                FAQ
              </div>
              <h2 className="sh2">
                Frequently asked <em>questions.</em>
              </h2>
            </Reveal>
            <Reveal delay="d1">
              <FaqAccordion faqs={faqs} />
            </Reveal>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="sec sec-alt">
        <div className="sec-in">
          <Reveal className="cta-band">
            <h3>{ctaTitle}</h3>
            <p>{ctaBody}</p>
            <div className="cta-band-btns">
              <RippleLink href="/#contact" className="btn-solid">
                Start a Project →
              </RippleLink>
              <RippleLink href="/work" className="btn-ghost">
                See our Work
              </RippleLink>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
