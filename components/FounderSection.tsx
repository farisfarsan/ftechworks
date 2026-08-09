import Reveal from "@/components/Reveal";
import { LinkedInIcon } from "@/components/Icons";
import { FOUNDER } from "@/lib/founder";

export default function FounderSection() {
  return (
    <section className="sec">
      <div className="sec-in">
        <Reveal className="founder-card">
          <div className="founder-photo" aria-hidden="true">
            {FOUNDER.photo ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img src={FOUNDER.photo} alt="" />
            ) : (
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <circle cx="12" cy="8" r="4" />
                <path d="M4 21c0-4.4 3.6-8 8-8s8 3.6 8 8" />
              </svg>
            )}
          </div>
          <div className="founder-body">
            <div className="ey">The Founder</div>
            <h2 className="sh2">{FOUNDER.name}</h2>
            <p className="founder-role">{FOUNDER.role}</p>
            <p className="founder-bio">{FOUNDER.bio}</p>
            {FOUNDER.linkedin && (
              <a href={FOUNDER.linkedin} target="_blank" rel="noopener" className="founder-linkedin">
                <LinkedInIcon />
                Connect on LinkedIn
              </a>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
