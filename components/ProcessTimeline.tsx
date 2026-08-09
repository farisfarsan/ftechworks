import { PROCESS_STEPS } from "@/lib/content";
import Reveal from "@/components/Reveal";

export default function ProcessTimeline() {
  return (
    <Reveal className="proc-flow" delay="d1">
      {PROCESS_STEPS.map((step) => (
        <div className="pstep" key={step.num}>
          <div className="pstep-rail">
            <div className="p-num">{step.num}</div>
          </div>
          <div className="pstep-body">
            <div className="pstep-head">
              <h3>{step.title}</h3>
            </div>
            <p className="pstep-desc">{step.desc}</p>
            <div className="chips">
              {step.chips.map((c) => (
                <span className="chip" key={c}>
                  {c}
                </span>
              ))}
            </div>
          </div>
        </div>
      ))}
    </Reveal>
  );
}
