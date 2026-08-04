import Reveal from "@/components/Reveal";
import Counter from "@/components/Counter";
import InquiryForm from "@/components/InquiryForm";
import RippleLink from "@/components/RippleLink";
import TiltCard from "@/components/TiltCard";
import SocialRail from "@/components/SocialRail";
import ProcessTimeline from "@/components/ProcessTimeline";

const MQ_ITEMS = [
  "API Development",
  "Web Applications",
  "Mobile Apps",
  "AI Chatbots",
  "Python Automation",
  "Web Scraping",
  "AI Document Processing",
  "Website Design & Build",
  "AI-Powered Features",
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
          <p className="hero-desc">
            Ftechworks builds high-performance backends, full-stack web apps, cross-platform
            mobile apps and AI-powered products — clean architecture, tested code, delivered on
            time.
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
      <section className="sec" id="process">
        <div className="sec-in">
          <Reveal>
            <div className="ey">How We Work</div>
            <h2 className="sh">Your roadmap to shipping.</h2>
            <p className="ssub">
              Four clear steps built to protect your time, money and vision — from first call to
              launch day and beyond.
            </p>
          </Reveal>
          <ProcessTimeline />
        </div>
      </section>

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
      <section className="sec" id="contact">
        <div className="sec-in">
          <Reveal
            className=""
            style={{ textAlign: "center", maxWidth: 660, margin: "0 auto 54px" }}
          >
            <div className="ey" style={{ justifyContent: "center" }}>
              Get In Touch
            </div>
            <h2 className="sh">
              Let&apos;s build something
              <br />
              <em style={{ color: "var(--accent)", fontStyle: "italic" }}>remarkable.</em>
            </h2>
            <p style={{ fontSize: 15, color: "var(--ink2)", lineHeight: 1.84, marginTop: 12 }}>
              Have an idea or a question? Reach out directly — we reply within 12 hours, no
              fluff, just honest advice and a clear plan.
            </p>
          </Reveal>
          <Reveal delay="d1">
            <InquiryForm />
          </Reveal>
          <Reveal className="c-simple" delay="d2">
            <p className="c-alt-label">Prefer email or social? Reach us directly:</p>
            <div className="c-links">
              <a href="mailto:ftechworks8@gmail.com" className="c-link" aria-label="Email">
                <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path
                    fill="currentColor"
                    d="M1.5 8.67v8.58a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3V8.67l-8.928 5.493a3 3 0 0 1-3.144 0L1.5 8.67z"
                  />
                  <path
                    fill="currentColor"
                    d="M22.5 6.908V6.75a3 3 0 0 0-3-3h-15a3 3 0 0 0-3 3v.158l9.714 5.978a1.5 1.5 0 0 0 1.572 0L22.5 6.908z"
                  />
                </svg>
              </a>
              <a
                href="https://wa.me/919061894005?text=Hi%20Team%20Ftechworks%2C%20I%20found%20your%20portfolio%20and%20I%27d%20like%20to%20discuss%20a%20project."
                target="_blank"
                rel="noopener"
                className="c-link"
                aria-label="WhatsApp"
              >
                <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path
                    fill="currentColor"
                    d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.272-.099-.471-.148-.67.15-.198.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.149-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.52.149-.174.198-.297.297-.496.099-.198.05-.371-.025-.52-.074-.149-.669-1.611-.916-2.206-.242-.579-.487-.5-.67-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.148.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.194 1.871.118.571-.085 1.758-.72 2.006-1.414.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347zm-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.243c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.83 9.83 0 0 1 2.893 6.994c-.003 5.45-4.437 9.885-9.885 9.867zm8.413-18.281A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.87 11.87 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.82 11.82 0 0 0-3.48-8.393z"
                  />
                </svg>
              </a>
              <a
                href="https://www.linkedin.com/company/135145399/"
                target="_blank"
                rel="noopener"
                className="c-link"
                aria-label="LinkedIn"
              >
                <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path
                    fill="currentColor"
                    d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"
                  />
                </svg>
              </a>
              <a
                href="https://www.instagram.com/_ftechworks_?igsh=MTg4dHBpMWphbDQ1dg=="
                target="_blank"
                rel="noopener"
                className="c-link"
                aria-label="Instagram"
              >
                <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path
                    fill="currentColor"
                    d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838a6 6 0 1 0 0 12 6 6 0 0 0 0-12zm0 9.837a3.836 3.836 0 1 1 0-7.673 3.836 3.836 0 0 1 0 7.673zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"
                  />
                </svg>
              </a>
            </div>
          </Reveal>
          <Reveal className="perks" delay="d3">
            <div className="perk">
              <span className="perk-dot"></span>Replies within 12 hours
            </div>
            <div className="perk">
              <span className="perk-dot"></span>Fixed scope &amp; price, no hidden fees
            </div>
            <div className="perk">
              <span className="perk-dot"></span>2-week post-launch support included
            </div>
            <div className="perk">
              <span className="perk-dot"></span>Available to clients worldwide
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
