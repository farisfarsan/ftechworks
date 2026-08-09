import Reveal from "@/components/Reveal";
import RippleLink from "@/components/RippleLink";
import { CheckIcon } from "@/components/Icons";
import { PRICING_TIERS } from "@/lib/pricing";

export default function PricingSection() {
  return (
    <section className="sec sec-alt" id="pricing">
      <div className="sec-in">
        <Reveal style={{ textAlign: "center", maxWidth: 640, margin: "0 auto 44px" }}>
          <div className="ey" style={{ justifyContent: "center" }}>
            Engagement
          </div>
          <h2 className="sh2">
            Fixed scope, <em>fixed price.</em>
          </h2>
          <p className="ssub">Three ways to work with us — every figure below is a starting point, confirmed exactly in your proposal.</p>
        </Reveal>
        <Reveal className="price-grid" delay="d1">
          {PRICING_TIERS.map((t) => (
            <div className={`price-card${t.featured ? " featured" : ""}`} key={t.name}>
              {t.featured && <div className="price-badge">Most Popular</div>}
              <div className="price-name">{t.name}</div>
              <div className="price-fig">
                <span className="price-from">from</span>
                {t.price}
                <span className="price-period">{t.period}</span>
              </div>
              <ul className="price-bullets">
                {t.bullets.map((b) => (
                  <li key={b}>
                    <CheckIcon />
                    {b}
                  </li>
                ))}
              </ul>
              <RippleLink href="/#contact" className={t.featured ? "btn-lq" : "btn-hollow"}>
                Start a Project →
              </RippleLink>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
