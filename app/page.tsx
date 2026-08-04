import Reveal from "@/components/Reveal";
import Counter from "@/components/Counter";
import RippleLink from "@/components/RippleLink";
import TiltCard from "@/components/TiltCard";
import SocialRail from "@/components/SocialRail";
import RotatingText from "@/components/RotatingText";
import ProcessSection from "@/components/ProcessSection";
import ContactSection from "@/components/ContactSection";

const MQ_ITEMS = [
  "Web Applications",
  "Mobile Apps",
  "UI/UX Design",
  "AI Chatbots",
  "AI Document Processing",
  "Branding & Logo Design",
  "Packaging & Signage",
  "SEO Optimisation",
  "Digital Marketing",
  "Video Editing",
  "Motion Graphics",
  "Website Design & Build",
  "MVP Builds",
  "API Development",
];

const ROTATING_SERVICES = [
  "web apps",
  "mobile apps",
  "AI systems",
  "brand identities",
  "growth campaigns",
  "video content",
];

const SERVICE_TEASERS = [
  {
    href: "/web-design-development",
    icon: "🌐",
    title: "Web Design & Development",
    desc: "Full-stack web apps, admin dashboards and business websites built to convert visitors into clients.",
  },
  {
    href: "/uiux-app",
    icon: "📱",
    title: "UI/UX & App",
    desc: "Cross-platform mobile apps, UI/UX design and full end-to-end MVP builds, from idea to live product.",
  },
  {
    href: "/ai",
    icon: "🤖",
    title: "AI & Intelligent Systems",
    desc: "Chatbots, document processing and AI-powered features trained on your data.",
  },
  {
    href: "/branding",
    icon: "🎨",
    title: "Branding & Logo Design",
    desc: "Brand strategy and full identity design — logo, colour system, packaging and signage.",
  },
  {
    href: "/marketing",
    icon: "📈",
    title: "Marketing",
    desc: "SEO optimisation and digital marketing campaigns that grow your reach and ROI.",
  },
  {
    href: "/video-editing",
    icon: "🎬",
    title: "Video Editing",
    desc: "Video editing and motion graphics — promos and social content polished enough to stop the scroll.",
  },
];

const WHY_STAGES = [
  {
    key: "prob",
    icon: "⚠️",
    tag: "Problem",
    title: "You have a vision but no technical partner to build it right.",
    body: "Great ideas die waiting for developers who miss deadlines or deliver code that can't scale past launch day. You need someone who actually delivers.",
  },
  {
    key: "soln",
    icon: "⚡",
    tag: "Solution",
    title: "We validate, architect, and ship — fast, clean, production-ready.",
    body: "Years building distributed systems at a fintech startup taught us how to move quickly without cutting corners. Every line of code is intentional.",
  },
  {
    key: "outc",
    icon: "✅",
    tag: "Outcome",
    title: "A working product you can demo, launch, or scale from day one.",
    body: "Not a prototype. A real system — tested, documented, deployed, and ready for users. Backed by two weeks of post-launch support at no extra charge.",
  },
];

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className="hero" id="home">
        <div className="hero-bg">
          <video autoPlay muted loop playsInline>
            <source
              src="https://videos.pexels.com/video-files/3141208/3141208-uhd_2560_1440_25fps.mp4"
              type="video/mp4"
            />
          </video>
          <div className="orb orb1"></div>
          <div className="orb orb2"></div>
          <div className="stars"></div>
        </div>
        <div className="hero-inner">
          <div className="badge">
            <span className="pulse"></span>
            Available for New Projects
          </div>
          <h1>
            Technology that drives
            <br />
            real <em>business growth.</em>
          </h1>
          <RotatingText items={ROTATING_SERVICES} />
          <p className="hero-desc">
            Full-stack web and mobile apps, AI systems, brand identity, marketing and video —
            engineered and designed in one place, delivered on time.
          </p>
          <div className="hero-btns">
            <RippleLink href="#services" className="btn-solid">
              Explore Services
            </RippleLink>
            <RippleLink href="#contact" className="btn-ghost">
              Start a Project →
            </RippleLink>
          </div>
          <div className="stats-row">
            <div className="stat">
              <Counter count={3} suffix="+" />
              <div className="stat-l">Years in Production</div>
            </div>
            <div className="stat">
              <div className="stat-n">Team</div>
              <div className="stat-l">Experienced Devs</div>
            </div>
            <div className="stat">
              <Counter count={14} suffix="" />
              <div className="stat-l">Services Offered</div>
            </div>
          </div>
        </div>
        <SocialRail />
        <div className="scroll-ind">
          Scroll
          <span>↓</span>
        </div>
      </section>

      {/* MARQUEE */}
      <div className="mq">
        <div className="mq-track">
          {[...MQ_ITEMS, ...MQ_ITEMS].map((item, i) => (
            <span className="mq-item" key={i}>
              {item}
            </span>
          ))}
        </div>
      </div>

      {/* WHY */}
      <section className="sec" id="why">
        <div className="sec-in">
          <Reveal>
            <div className="ey">Why Ftechworks</div>
            <h2 className="sh">The honest difference.</h2>
            <p className="ssub">
              Most freelancers write code. Ftechworks engineers products. Here&apos;s the gap.
            </p>
          </Reveal>
          <Reveal className="pso-grid" delay="d1">
            {WHY_STAGES.map((s) => (
              <div className={`pso ${s.key}`} key={s.key}>
                <div className="pso-ico">{s.icon}</div>
                <div className="pso-tag">{s.tag}</div>
                <h4>{s.title}</h4>
                <p>{s.body}</p>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      {/* VIDEO BREAK 1 */}
      <div className="vid-sec">
        <video autoPlay muted loop playsInline>
          <source
            src="https://videos.pexels.com/video-files/3130284/3130284-uhd_2560_1440_25fps.mp4"
            type="video/mp4"
          />
        </video>
        <Reveal className="vid-inner">
          <div className="ey" style={{ justifyContent: "center" }}>
            Our Philosophy
          </div>
          <h2 className="sh" style={{ fontSize: "clamp(32px,5.5vw,72px)" }}>
            We build with{" "}
            <em style={{ color: "var(--accent)", fontStyle: "italic" }}>velocity,</em>
            <br />
            not just speed.
          </h2>
          <p
            style={{
              fontSize: 16,
              color: "var(--ink2)",
              marginTop: 18,
              lineHeight: 1.84,
              maxWidth: 520,
              marginLeft: "auto",
              marginRight: "auto",
            }}
          >
            Moving fast without direction is just chaos. We ship leverage — every decision is
            backed by strategy, every line of code has purpose.
          </p>
        </Reveal>
      </div>

      {/* SERVICES OVERVIEW */}
      <section className="sec sec-alt" id="services">
        <div className="sec-in">
          <Reveal>
            <div className="ey">What We Build</div>
            <h2 className="sh">Services</h2>
            <p className="ssub">
              End-to-end engineering across web, mobile, AI &amp; delivery — explore each
              specialisation in detail.
            </p>
          </Reveal>
          <Reveal className="svc-grid" delay="d1">
            {SERVICE_TEASERS.map((s) => (
              <TiltCard href={s.href} intensity={{ x: 10, y: -8 }} className="svc-card svc-teaser" key={s.href}>
                <div className="svc-ico">{s.icon}</div>
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
                <div className="svc-teaser-link">
                  Explore <span>→</span>
                </div>
              </TiltCard>
            ))}
          </Reveal>
        </div>
      </section>

      {/* PROCESS */}
      <ProcessSection id="process" headingClass="sh" />

      {/* VIDEO BREAK 2 */}
      <div className="vid-sec" style={{ minHeight: 370 }}>
        <video autoPlay muted loop playsInline>
          <source
            src="https://videos.pexels.com/video-files/3209828/3209828-uhd_2560_1440_25fps.mp4"
            type="video/mp4"
          />
        </video>
        <Reveal className="vid-inner">
          <div className="ey" style={{ justifyContent: "center" }}>
            Built to Last
          </div>
          <h2 className="sh" style={{ fontSize: "clamp(28px,4.2vw,54px)" }}>
            Clean code. <em style={{ color: "var(--accent)", fontStyle: "italic" }}>Real systems.</em>
          </h2>
          <p style={{ fontSize: 15, color: "var(--ink2)", marginTop: 16, lineHeight: 1.84 }}>
            Every project ships with full documentation, unit tests and a deployment guide — so
            you&apos;re never left in the dark.
          </p>
        </Reveal>
      </div>

      {/* CONTACT */}
      <ContactSection />
    </>
  );
}
