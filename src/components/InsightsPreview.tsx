import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { insights } from "@/lib/insights";
import SectionHeading from "./ui/SectionHeading";
import Reveal from "./ui/Reveal";

export function InsightCard({ item }: { item: (typeof insights)[number] }) {
  return (
    <article className="flex h-full flex-col rounded-3xl border border-gold-soft bg-white p-7 transition-all duration-500 hover:-translate-y-1 hover:border-gold hover:shadow-[0_24px_48px_-28px_rgba(140,106,18,0.45)]">
      <div className="flex items-center justify-between gap-3 text-xs">
        <span className="font-semibold uppercase tracking-[0.14em] text-gold-ink">{item.category}</span>
        <span className="rounded-full bg-ivory px-2.5 py-1 text-slate-500">Coming soon</span>
      </div>
      <h3 className="mt-4 text-2xl leading-snug text-ink">{item.title}</h3>
      <p className="mt-3 text-sm leading-relaxed text-slate-600">{item.excerpt}</p>
    </article>
  );
}

export default function InsightsPreview() {
  return (
    <section id="insights" className="scroll-mt-24 bg-white py-16 sm:py-20">
      <div className="mx-auto w-[90%]">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <SectionHeading
            align="left"
            eyebrow="Insights"
            title="Simple guides for business owners"
            text="Practical articles on websites, apps, marketing and automation, written for business owners, not developers."
          />
          <Link href="/insights" className="mb-10 inline-flex shrink-0 items-center gap-2 text-sm font-semibold text-gold-ink">
            All insights <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {insights.slice(0, 3).map((item, i) => (
            <Reveal key={item.title} delay={i * 0.1}>
              <InsightCard item={item} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
