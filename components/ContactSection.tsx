import Reveal from "@/components/Reveal";
import InquiryForm from "@/components/InquiryForm";
import { WA_LINK } from "@/components/WhatsAppFloat";
import { MailIcon, WhatsAppIcon, LinkedInIcon, InstagramIcon } from "@/components/Icons";
import { CONTACT_EMAIL } from "@/lib/siteConfig";

// Each step restates something already published in the process section.
const NEXT_STEPS = [
  {
    n: "1",
    title: "We reply within 12 hours",
    desc: "A real answer from the people who'd build it — not an auto-responder.",
  },
  {
    n: "2",
    title: "A free 30-minute call",
    desc: "We dig into your idea, goals and constraints. Honest technical advice, no sales pitch.",
  },
  {
    n: "3",
    title: "A written proposal in 24 hours",
    desc: "Fixed scope, fixed price, fixed timeline. No vague estimates, no obligation to continue.",
  },
];

const PERKS = [
  "Fixed scope & price, no hidden fees",
  "2-week post-launch support included",
  "Available to clients worldwide",
];

export default function ContactSection() {
  return (
    <section className="sec" id="contact">
      <div className="sec-in">
        <div className="contact-grid">
          <Reveal className="contact-aside">
            <div className="ey">Get In Touch</div>
            <h2 className="sh">
              Let&apos;s build something <em>remarkable.</em>
            </h2>
            <p className="ssub contact-lede">
              Have an idea or a question? Reach out directly — no fluff, just honest advice and a
              clear plan.
            </p>

            <div className="next-h">What happens next</div>
            <ol className="next-list">
              {NEXT_STEPS.map((s) => (
                <li key={s.n}>
                  <span className="next-num">{s.n}</span>
                  <div>
                    <strong>{s.title}</strong>
                    <p>{s.desc}</p>
                  </div>
                </li>
              ))}
            </ol>

            <div className="direct">
              <p className="c-alt-label">Prefer to skip the form?</p>
              <div className="direct-btns">
                <a href={WA_LINK} target="_blank" rel="noopener" className="direct-wa">
                  <WhatsAppIcon />
                  Chat on WhatsApp
                </a>
                <a href={`mailto:${CONTACT_EMAIL}`} className="direct-mail">
                  <MailIcon />
                  Email us
                </a>
              </div>
              <div className="direct-social">
                <a
                  href="https://www.linkedin.com/company/135145399/"
                  target="_blank"
                  rel="noopener"
                  className="c-link"
                  aria-label="LinkedIn"
                >
                  <LinkedInIcon />
                </a>
                <a
                  href="https://www.instagram.com/_ftechworks_?igsh=MTg4dHBpMWphbDQ1dg=="
                  target="_blank"
                  rel="noopener"
                  className="c-link"
                  aria-label="Instagram"
                >
                  <InstagramIcon />
                </a>
              </div>
            </div>
          </Reveal>

          <Reveal className="contact-form-col" delay="d1">
            <InquiryForm />
          </Reveal>
        </div>

        <Reveal className="perks" delay="d2">
          {PERKS.map((p) => (
            <div className="perk" key={p}>
              <span className="perk-dot"></span>
              {p}
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
