import Reveal from "@/components/Reveal";
import Counter from "@/components/Counter";
import TiltCard from "@/components/TiltCard";
import ProcessSection from "@/components/ProcessSection";
import ContactSection from "@/components/ContactSection";
import HeroSection from "@/components/HeroSection";
import {
  AlertIcon,
  BoltIcon,
  CheckIcon,
  CodeIcon,
  SmartphoneIcon,
  BotIcon,
  PaletteIcon,
  TrendingUpIcon,
  VideoIcon,
} from "@/components/Icons";
import { STATS } from "@/lib/stats";

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

const SERVICE_TEASERS = [
  {
    href: "/web-design-development",
    Icon: CodeIcon,
    title: "Web Design & Development",
    desc: "Full-stack web apps, admin dashboards and business websites built to convert visitors into clients.",
  },
  {
    href: "/uiux-app",
    Icon: SmartphoneIcon,
    title: "UI/UX & App",
    desc: "Cross-platform mobile apps, UI/UX design and full end-to-end MVP builds, from idea to live product.",
  },
  {
    href: "/ai",
    Icon: BotIcon,
    title: "AI & Intelligent Systems",
    desc: "Chatbots, document processing and AI-powered features trained on your data.",
  },
  {
    href: "/branding",
    Icon: PaletteIcon,
    title: "Branding & Logo Design",
    desc: "Brand strategy and full identity design: logo, colour system, packaging and signage.",
  },
  {
    href: "/marketing",
    Icon: TrendingUpIcon,
    title: "Marketing",
    desc: "SEO optimisation and digital marketing campaigns that grow your reach and ROI.",
  },
  {
    href: "/video-editing",
    Icon: VideoIcon,
    title: "Video Editing",
    desc: "Video editing and motion graphics: promos and social content polished enough to stop the scroll.",
  },
];

const WHY_STAGES = [
  {
    key: "prob",
    Icon: AlertIcon,
    tag: "Problem",
    title: "You have a vision but no technical partner to build it right.",
    body: "Great ideas die waiting for developers who miss deadlines or deliver code that can't scale past launch day. You need someone who actually delivers.",
  },
  {
    key: "soln",
    Icon: BoltIcon,
    tag: "Solution",
    title: "We validate, architect, and ship: fast, clean, production-ready.",
    body: "Years building distributed systems at a fintech startup taught us how to move quickly without cutting corners. Every line of code is intentional.",
  },
  {
    key: "outc",
    Icon: CheckIcon,
    tag: "Outcome",
    title: "A working product you can demo, launch, or scale from day one.",
    body: "Not a prototype. A real system: tested, documented, deployed, and ready for users. Backed by two weeks of post-launch support at no extra charge.",
  },
];

export default function Home() {
  return (
    <>
      {/* HERO */}
      <HeroSection />

      {/* STATS — no home in the new hero design, kept as a strip so the
          content isn't silently dropped */}
      <div className="sec sec-compact">
        <div className="sec-in" style={{ display: "flex", gap: 48, flexWrap: "wrap" }}>
          {STATS.map((s) => (
            <div className="stat" style={{ flex: "unset", padding: 0 }} key={s.label}>
              <Counter count={s.count} suffix={s.suffix} />
              <div className="stat-l">{s.label}</div>
            </div>
          ))}
        </div>
      </div>

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
                <div className="pso-ico">
                  <s.Icon />
                </div>
                <div className="pso-tag">{s.tag}</div>
                <h3>{s.title}</h3>
                <p>{s.body}</p>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      {/* BREAK 1 */}
      <div className="vid-sec">
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
            Moving fast without direction is just chaos. We ship leverage: every decision is
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
              End-to-end engineering across web, mobile, AI &amp; delivery. Explore each
              specialisation in detail.
            </p>
          </Reveal>
          <Reveal className="svc-grid" delay="d1">
            {SERVICE_TEASERS.map((s) => (
              <TiltCard href={s.href} intensity={{ x: 10, y: -8 }} className="svc-card svc-teaser" key={s.href}>
                <div className="svc-ico">
                  <s.Icon />
                </div>
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

      {/* BREAK 2 */}
      <div className="vid-sec" style={{ minHeight: 370 }}>
        <Reveal className="vid-inner">
          <div className="ey" style={{ justifyContent: "center" }}>
            Built to Last
          </div>
          <h2 className="sh" style={{ fontSize: "clamp(28px,4.2vw,54px)" }}>
            Clean code. <em style={{ color: "var(--accent)", fontStyle: "italic" }}>Real systems.</em>
          </h2>
          <p style={{ fontSize: 15, color: "var(--ink2)", marginTop: 16, lineHeight: 1.84 }}>
            Every project ships with full documentation, unit tests and a deployment guide, so
            you&apos;re never left in the dark.
          </p>
          <div className="proof-row">
            {["Full Documentation", "Unit Tests", "Deployment Guide"].map((p) => (
              <div className="proof-pt" key={p}>
                <CheckIcon />
                <span>{p}</span>
              </div>
            ))}
          </div>
        </Reveal>
      </div>

      {/* CONTACT */}
      <ContactSection />
    </>
  );
}
