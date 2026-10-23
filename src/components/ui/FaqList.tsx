import React from "react";
import { Plus } from "lucide-react";
import JsonLd from "@/components/JsonLd";
import type { Faq } from "@/lib/services";

/** Accordion FAQ (no JS needed) plus FAQPage structured data. */
export default function FaqList({ faqs, withSchema = true }: { faqs: Faq[]; withSchema?: boolean }) {
  return (
    <>
      {withSchema && (
        <JsonLd
          data={{
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faqs.map((f) => ({
              "@type": "Question",
              name: f.q,
              acceptedAnswer: { "@type": "Answer", text: f.a },
            })),
          }}
        />
      )}
      <div className="divide-y divide-gold-soft border-y border-gold-soft">
        {faqs.map((f) => (
          <details key={f.q} className="group py-5">
            <summary className="flex cursor-pointer items-start justify-between gap-6 text-left">
              <h3 className="text-lg sm:text-xl text-ink">{f.q}</h3>
              <Plus
                className="mt-1 h-5 w-5 shrink-0 text-gold-ink transition-transform group-open:rotate-45"
                strokeWidth={1.5}
                aria-hidden="true"
              />
            </summary>
            <p className="mt-3 pr-10 text-slate-600 leading-relaxed">{f.a}</p>
          </details>
        ))}
      </div>
    </>
  );
}
