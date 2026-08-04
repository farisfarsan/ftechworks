"use client";

import { useId, useState } from "react";

export type Faq = { q: string; a: string };

export default function FaqAccordion({ faqs }: { faqs: Faq[] }) {
  const [open, setOpen] = useState<number | null>(0);
  const baseId = useId();

  return (
    <div className="faq-list">
      {faqs.map((f, i) => {
        const isOpen = open === i;
        const btnId = `${baseId}-btn-${i}`;
        const panelId = `${baseId}-panel-${i}`;
        return (
          <div className={`faq-item${isOpen ? " open" : ""}`} key={f.q}>
            <button
              type="button"
              className="faq-q"
              id={btnId}
              aria-expanded={isOpen}
              aria-controls={panelId}
              onClick={() => setOpen(isOpen ? null : i)}
            >
              <span>{f.q}</span>
              <span className="faq-chevron" aria-hidden="true">
                ⌄
              </span>
            </button>
            <div className="faq-a" id={panelId} role="region" aria-labelledby={btnId} hidden={!isOpen}>
              <p>{f.a}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
