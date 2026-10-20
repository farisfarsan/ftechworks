import { ArrowUpRight, Check, Clock, Mail, MessageCircle } from "lucide-react";
import { Reveal } from "@/components/ui/reveal";
import { Button } from "@/components/ui/button";
import { BorderBeam } from "@/components/ui/border-beam";
import { LinkedInIcon, InstagramIcon } from "@/components/BrandIcons";
import { WA_LINK } from "@/components/WhatsAppFloat";
import { CONTACT_EMAIL } from "@/lib/siteConfig";

// Each step restates something already published in the process section.
const NEXT_STEPS = [
  { n: "1", title: "We reply within 12 hours", desc: "A real answer from the people who'd build it, not an auto-responder." },
  { n: "2", title: "A free 30-minute call", desc: "We dig into your idea, goals and constraints. Honest technical advice, no sales pitch." },
  { n: "3", title: "A written proposal in 24 hours", desc: "Fixed scope, fixed price, fixed timeline. No vague estimates, no obligation to continue." },
];

const PERKS = ["Fixed scope & price, no hidden fees", "2-week post-launch support included", "Available to clients worldwide"];

const SOCIALS = [
  { href: "https://www.linkedin.com/company/135145399/", label: "LinkedIn", Icon: LinkedInIcon },
  { href: "https://www.instagram.com/_ftechworks_?igsh=MTg4dHBpMWphbDQ1dg==", label: "Instagram", Icon: InstagramIcon },
];

export default function ContactSection() {
  return (
    <section id="contact" className="section">
      <div className="hairline absolute inset-x-0 top-0" aria-hidden="true" />
      <div aria-hidden="true" className="absolute left-0 top-1/3 -z-10 h-[420px] w-[420px] rounded-full bg-brand/15 blur-[130px]" />
      <div className="container">
        <div className="grid items-center gap-12 lg:grid-cols-[1fr_1fr] lg:gap-20">
          <Reveal>
            <div className="eyebrow mb-5">
              <span className="text-brand">[06]</span> Get in touch
            </div>
            <h2 className="h-section">
              Let&apos;s build something <span className="serif-accent">remarkable.</span>
            </h2>
            <p className="lede mt-5 max-w-md">
              Have an idea or a question? Reach out directly. No fluff, just honest advice and a clear plan.
            </p>

            <h3 className="mb-5 mt-12 text-xs font-semibold uppercase tracking-[.12em] text-subtle">What happens next</h3>
            <ol className="space-y-5">
              {NEXT_STEPS.map((s) => (
                <li key={s.n} className="flex gap-4">
                  <span className="grid h-8 w-8 shrink-0 place-items-center border border-brand/40 bg-brand/10 text-xs font-semibold text-brand2">
                    {s.n}
                  </span>
                  <div>
                    <strong className="block text-[15px] font-semibold text-ink">{s.title}</strong>
                    <p className="mt-0.5 text-sm text-muted">{s.desc}</p>
                  </div>
                </li>
              ))}
            </ol>
          </Reveal>

          {/* direct contact card */}
          <Reveal delay={0.1}>
            <div className="brackets">
              <span className="br-b" />
              <div className="relative overflow-hidden border border-line/15 bg-surface/80 p-8 shadow-card md:p-10">
                <p className="text-xs font-semibold uppercase tracking-[.12em] text-brand2">Start the conversation</p>
                <h3 className="mt-3 font-display text-3xl font-bold tracking-tight text-ink">Message the founder directly.</h3>
                <p className="mt-3 flex items-center gap-2 text-sm text-muted">
                  <Clock className="h-4 w-4 text-brand2" /> We reply to every message within 12 hours.
                </p>

                <div className="mt-8 space-y-3">
                  <Button href={WA_LINK} target="_blank" rel="noopener" size="lg" className="w-full">
                    <MessageCircle className="h-5 w-5" /> Chat on WhatsApp
                  </Button>
                  <Button href={`mailto:${CONTACT_EMAIL}`} size="lg" variant="secondary" className="w-full">
                    <Mail className="h-5 w-5" /> Email us
                  </Button>
                </div>

                <a
                  href={`mailto:${CONTACT_EMAIL}`}
                  className="mt-6 flex items-center justify-between border-t border-line/10 pt-5 text-sm text-muted transition-colors hover:text-ink"
                >
                  {CONTACT_EMAIL}
                  <ArrowUpRight className="h-4 w-4" />
                </a>

                <div className="mt-5 flex items-center gap-3">
                  <span className="text-xs font-semibold uppercase tracking-[.1em] text-subtle">Follow</span>
                  {SOCIALS.map(({ href, label, Icon }) => (
                    <a
                      key={label}
                      href={href}
                      target="_blank"
                      rel="noopener"
                      aria-label={label}
                      className="grid h-10 w-10 place-items-center border border-line/20 text-muted transition-colors hover:border-brand hover:text-brand2"
                    >
                      <Icon className="h-[18px] w-[18px]" />
                    </a>
                  ))}
                </div>
                <BorderBeam size={220} duration={14} />
              </div>
            </div>
          </Reveal>
        </div>

        <Reveal className="mt-16 flex flex-wrap justify-center gap-x-8 gap-y-3 border-t border-line/10 pt-8">
          {PERKS.map((p) => (
            <div key={p} className="inline-flex items-center gap-2 text-sm text-muted">
              <Check className="h-4 w-4 text-brand2" /> {p}
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
