import Reveal from "@/components/Reveal";
import ProcessTimeline from "@/components/ProcessTimeline";

export default function ProcessSection({
  id,
  className = "sec",
  headingClass = "sh2",
  subtitle = "Four clear steps built to protect your time, money and vision — from first call to launch day and beyond.",
}: {
  id?: string;
  className?: string;
  headingClass?: string;
  subtitle?: string;
}) {
  return (
    <section className={className} id={id}>
      <div className="sec-in">
        <div className="proc-layout">
          <Reveal className="proc-head">
            <div className="ey">How We Work</div>
            <h2 className={headingClass}>
              Your roadmap to <em>shipping.</em>
            </h2>
            <p className="ssub">{subtitle}</p>
          </Reveal>
          <ProcessTimeline />
        </div>
      </div>
    </section>
  );
}
