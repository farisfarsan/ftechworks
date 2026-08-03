import type { Metadata } from "next";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import WorkFilters from "@/components/WorkFilters";
import AutoScrollGallery from "@/components/AutoScrollGallery";
import TiltCard from "@/components/TiltCard";
import RippleLink from "@/components/RippleLink";

const TILT = { x: 10, y: -8 };

export const metadata: Metadata = {
  title: "Work — Ftechworks",
  description:
    "Real systems, built to solve real problems — from solo founders to enterprise clients worldwide.",
};

export default function WorkPage() {
  return (
    <>
      {/* PAGE HEADER */}
      <section className="sec" style={{ paddingTop: 150, paddingBottom: 60 }}>
        <div className="sec-in">
          <Reveal>
            <Link href="/" className="back-lnk">
              ← Back to Home
            </Link>
            <div className="ey">Portfolio</div>
            <h1 className="sh">Built with care.</h1>
            <p className="ssub" style={{ marginBottom: 0 }}>
              Real systems, built to solve real problems — from solo founders to enterprise
              clients worldwide.
            </p>
          </Reveal>
        </div>
      </section>

      {/* WORK */}
      <section className="sec sec-alt">
        <div className="sec-in">
          <WorkFilters>
            <Reveal className="works-grid" delay="d1">
              <TiltCard
                href="https://www.grytt.club/"
                target="_blank"
                rel="noopener"
                intensity={TILT}
                className="wcard"
                data-cat="app"
              >
                <div
                  className="wcard-thumb"
                  style={{ background: "#0f0500", display: "flex", alignItems: "center", justifyContent: "center" }}
                >
                  <img
                    src="/app/grytt.png"
                    alt="Grytt app icon"
                    style={{ width: "42%", maxWidth: 150, objectFit: "contain", borderRadius: 18 }}
                  />
                  <div
                    className="wcard-overlay"
                    style={{ background: "linear-gradient(180deg,transparent 50%,rgba(6,6,10,.85) 100%)" }}
                  ></div>
                  <div className="wcard-num">01</div>
                  <div className="wcard-live">Live ↗</div>
                </div>
                <div className="wcard-body">
                  <div className="wcard-tag">Mobile App · Landing Page</div>
                  <h3>Grytt — Fitness OS</h3>
                  <p>
                    High-converting landing page for a fitness accountability app — app store
                    CTAs, animated UI showcase and waitlist integration.
                  </p>
                  <div className="wcard-pills">
                    <span className="wcard-pill">React</span>
                    <span className="wcard-pill">Animation</span>
                    <span className="wcard-pill">Conversion</span>
                  </div>
                  <div className="wcard-foot">
                    <span className="wcard-link">grytt.club</span>
                    <span className="wcard-arr">↗</span>
                  </div>
                </div>
              </TiltCard>

              <TiltCard intensity={TILT} className="wcard" data-cat="app">
                <div
                  className="wcard-thumb"
                  style={{ background: "#fff", display: "flex", alignItems: "center", justifyContent: "center", padding: 20 }}
                >
                  <img src="/app/flat.png" alt="Flatkare logo" style={{ width: "100%", height: "100%", objectFit: "contain" }} />
                  <div
                    className="wcard-overlay"
                    style={{ background: "linear-gradient(180deg,transparent 60%,rgba(255,255,255,.85) 100%)" }}
                  ></div>
                  <div className="wcard-num">02</div>
                </div>
                <div className="wcard-body">
                  <div className="wcard-tag">Mobile &amp; Web App · PropTech</div>
                  <h3>Flatkare</h3>
                  <p>
                    Modern apartment management app connecting residents and property managers —
                    rent &amp; utility tracking, maintenance requests, community announcements and
                    secure document sharing in one place.
                  </p>
                  <div className="wcard-pills">
                    <span className="wcard-pill">React Native</span>
                    <span className="wcard-pill">FastAPI</span>
                    <span className="wcard-pill">Push Notifications</span>
                    <span className="wcard-pill">Payments</span>
                  </div>
                </div>
              </TiltCard>

              <TiltCard
                href="https://compassmbspc.com/"
                target="_blank"
                rel="noopener"
                intensity={TILT}
                className="wcard"
                data-cat="website"
              >
                <div
                  className="wcard-thumb"
                  style={{ background: "#fff", display: "flex", alignItems: "center", justifyContent: "center", padding: 20 }}
                >
                  <img
                    src="/website/compass.png"
                    alt="Compass Modern Business SPC logo"
                    style={{ width: "100%", height: "100%", objectFit: "contain" }}
                  />
                  <div
                    className="wcard-overlay"
                    style={{ background: "linear-gradient(180deg,transparent 60%,rgba(255,255,255,.85) 100%)" }}
                  ></div>
                  <div className="wcard-num">01</div>
                  <div className="wcard-live">Live ↗</div>
                </div>
                <div className="wcard-body">
                  <div className="wcard-tag">Business Website · Design &amp; Build</div>
                  <h3>Compass Modern Business SPC</h3>
                  <p>
                    Full business website for an Oman-based consultancy — responsive design,
                    multi-section layout, SEO-optimised and live in production.
                  </p>
                  <div className="wcard-pills">
                    <span className="wcard-pill">HTML/CSS</span>
                    <span className="wcard-pill">Performance</span>
                    <span className="wcard-pill">Responsive</span>
                  </div>
                  <div className="wcard-foot">
                    <span className="wcard-link">compassmbspc.com</span>
                    <span className="wcard-arr">↗</span>
                  </div>
                </div>
              </TiltCard>

              <TiltCard intensity={TILT} className="wcard" data-cat="website">
                <div
                  className="wcard-thumb"
                  style={{ background: "#fff", display: "flex", alignItems: "center", justifyContent: "center", padding: 20 }}
                >
                  <img
                    src="/website/tawazon-clean.png"
                    alt="Tawazon logo"
                    style={{ width: "100%", height: "100%", objectFit: "contain" }}
                  />
                  <div
                    className="wcard-overlay"
                    style={{ background: "linear-gradient(180deg,transparent 60%,rgba(255,255,255,.85) 100%)" }}
                  ></div>
                  <div className="wcard-num">02</div>
                  <div className="wcard-live wcard-ongoing">Ongoing</div>
                </div>
                <div className="wcard-body">
                  <div className="wcard-tag">Business Website · Design &amp; Build</div>
                  <h3>Tawazon</h3>
                  <p>
                    Corporate website currently in active development — bilingual Arabic/English
                    layout, brand-aligned design system and SEO-ready structure from day one.
                  </p>
                  <div className="wcard-pills">
                    <span className="wcard-pill">Arabic/RTL</span>
                    <span className="wcard-pill">SEO</span>
                    <span className="wcard-pill">Responsive</span>
                  </div>
                </div>
              </TiltCard>

              <TiltCard intensity={TILT} className="wcard" data-cat="ai">
                <div className="wcard-thumb">
                  <img src="/chatboat.png" alt="AI Bot" />
                  <div className="wcard-overlay"></div>
                  <div className="wcard-num">01</div>
                </div>
                <div className="wcard-body">
                  <div className="wcard-tag">AI · Chatbot Integration</div>
                  <h3>AI Customer Support Bot</h3>
                  <p>
                    GPT-powered support chatbot with custom knowledge base, lead qualification,
                    CRM integration and multi-channel deployment.
                  </p>
                  <div className="wcard-pills">
                    <span className="wcard-pill">OpenAI</span>
                    <span className="wcard-pill">LangChain</span>
                    <span className="wcard-pill">RAG</span>
                    <span className="wcard-pill">Webhooks</span>
                  </div>
                </div>
              </TiltCard>

              <TiltCard intensity={TILT} className="wcard" data-cat="dashboard">
                <div className="wcard-thumb">
                  <img src="/dashboard.png" alt="Work Dashboard app screenshot" />
                  <div className="wcard-overlay"></div>
                  <div className="wcard-num">03</div>
                </div>
                <div className="wcard-body">
                  <div className="wcard-tag">Web App · Dashboard</div>
                  <h3>Work Dashboard</h3>
                  <p>
                    Project management dashboard for tracking tasks, deadlines and team workload —
                    live progress tracking, analytics and reminders in one clean interface.
                  </p>
                  <div className="wcard-pills">
                    <span className="wcard-pill">React</span>
                    <span className="wcard-pill">Dashboard</span>
                    <span className="wcard-pill">Analytics</span>
                  </div>
                </div>
              </TiltCard>
            </Reveal>

            <Reveal className="brand-case" delay="d2" data-cat="landing" style={{ marginTop: 14 }}>
              <AutoScrollGallery className="landing-gallery">
                <img src="/landingpage/lp2.avif" alt="Landing page hero design" />
                <img src="/landingpage/landing.avif" alt="Landing page feature section design" />
                <img src="/landingpage/landing1.avif" alt="Landing page section design" />
              </AutoScrollGallery>
              <div className="brand-info">
                <div className="wcard-tag">Mobile App · Landing Page</div>
                <h3>Landing Page Design</h3>
                <p>
                  High-converting app landing page design work — built to turn visitors into
                  customers. Clean hero sections, scannable feature layouts and a clear path to the
                  call-to-action, all designed to load fast and look sharp on any device.
                </p>
                <ul className="brand-points">
                  <li>Bold hero section with clear value proposition</li>
                  <li>Feature &amp; benefit sections built for scannability</li>
                  <li>Fully responsive across desktop, tablet and mobile</li>
                  <li>Conversion-focused layout with strong CTA placement</li>
                </ul>
                <div className="wcard-pills">
                  <span className="wcard-pill">Mobile App</span>
                  <span className="wcard-pill">Landing Page</span>
                  <span className="wcard-pill">UI Design</span>
                  <span className="wcard-pill">Figma</span>
                </div>
              </div>
            </Reveal>

            <Reveal className="brand-case" delay="d3" data-cat="branding" style={{ marginTop: 14 }}>
              <AutoScrollGallery className="brand-gallery">
                <img src="/branding/branding.png" alt="Samak Restaurant branded paper cups" />
                <img src="/branding/brandin2.png" alt="Samak Restaurant branded staff apron" />
                <img src="/branding/branding3.png" alt="Samak Restaurant branded takeaway containers" />
                <img src="/branding/brandin4.png" alt="Samak Restaurant illuminated shopfront sign" />
              </AutoScrollGallery>
              <div className="brand-info">
                <div className="wcard-tag">Branding &amp; Logo Design · F&amp;B</div>
                <h3>Samak Restaurant</h3>
                <p>
                  Full brand identity for a seafood restaurant, designed to work everywhere the
                  business shows up — not just on a screen. We built the fish-integrated wordmark,
                  a recurring scale pattern and a colour system, then carried it across real
                  packaging and signage.
                </p>
                <ul className="brand-points">
                  <li>Logo design — fish-integrated wordmark, multiple concepts</li>
                  <li>Colour palette &amp; recurring pattern system</li>
                  <li>Packaging application — cups &amp; takeaway containers</li>
                  <li>Staff apron &amp; uniform branding</li>
                  <li>Illuminated shopfront signage design</li>
                </ul>
                <div className="wcard-pills">
                  <span className="wcard-pill">Logo Design</span>
                  <span className="wcard-pill">Brand Identity</span>
                  <span className="wcard-pill">Packaging</span>
                  <span className="wcard-pill">Signage</span>
                  <span className="wcard-pill">Figma</span>
                </div>
              </div>
            </Reveal>
          </WorkFilters>
        </div>
      </section>

      {/* CTA */}
      <section className="sec">
        <div className="sec-in">
          <Reveal className="cta-band">
            <h3>Like what you see?</h3>
            <p>Tell us what you&apos;re building — we reply within 12 hours with honest advice and a clear plan.</p>
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
