import Link from "next/link";
import Reveal from "@/components/Reveal";
import RippleLink from "@/components/RippleLink";

export type ServiceBlock = {
  title: string;
  desc: string;
  tags: string[];
};

export default function ServicePageLayout({
  eyebrow,
  title,
  subtitle,
  services,
  ctaTitle,
  ctaBody,
}: {
  eyebrow: string;
  title: string;
  subtitle: string;
  services: ServiceBlock[];
  ctaTitle: string;
  ctaBody: string;
}) {
  return (
    <>
      {/* PAGE HEADER */}
      <section className="sec" style={{ paddingTop: 150, paddingBottom: 60 }}>
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
        </div>
      </section>

      {services.map((s, i) => (
        <section className={i % 2 === 0 ? "sec sec-alt" : "sec"} key={s.title}>
          <div className="sec-in">
            <Reveal>
              <div className="ey">Service</div>
              <h2 className="sh">{s.title}</h2>
              <p className="ssub">{s.desc}</p>
              <div className="svc-tags">
                {s.tags.map((t) => (
                  <span className="svc-tag" key={t}>
                    {t}
                  </span>
                ))}
              </div>
            </Reveal>
          </div>
        </section>
      ))}

      {/* CTA */}
      <section className={services.length % 2 === 0 ? "sec sec-alt" : "sec"}>
        <div className="sec-in">
          <Reveal className="cta-band">
            <h3>{ctaTitle}</h3>
            <p>{ctaBody}</p>
            <div className="cta-band-btns">
              <RippleLink href="/#contact" className="btn-solid">
                Start a Project →
              </RippleLink>
              <RippleLink href="/" className="btn-ghost">
                See all Services
              </RippleLink>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
