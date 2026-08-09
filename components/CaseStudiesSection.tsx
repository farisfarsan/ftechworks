import Reveal from "@/components/Reveal";
import TiltCard from "@/components/TiltCard";
import { CASE_STUDIES } from "@/lib/caseStudies";

export default function CaseStudiesSection() {
  return (
    <section className="sec sec-alt" id="case-studies">
      <div className="sec-in">
        <Reveal>
          <div className="ey">Case Studies</div>
          <h2 className="sh2">
            Real problems, <em>real systems.</em>
          </h2>
          <p className="ssub">Three projects, three different problems — the same disciplined build process.</p>
        </Reveal>
        <Reveal className="case-grid" delay="d1">
          {CASE_STUDIES.map((c) => (
            <TiltCard href={`/work/${c.slug}`} intensity={{ x: 8, y: -6 }} className="case-card" key={c.slug}>
              <div className="case-thumb" style={{ background: c.imageBg }}>
                <img src={c.image} alt={c.imageAlt} loading="lazy" />
              </div>
              <div className="case-body">
                <div className="case-tag">{c.sector}</div>
                <h3>{c.client}</h3>
                <p className="case-line">
                  <strong>Problem —</strong> {c.problem}
                </p>
                <p className="case-line">
                  <strong>Built —</strong> {c.built}
                </p>
                <div className="case-outcome">
                  <span>Outcome</span>
                  {c.outcome}
                </div>
                <div className="case-cta">
                  Read case study <span>→</span>
                </div>
              </div>
            </TiltCard>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
