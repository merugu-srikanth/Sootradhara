import React from "react";
import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import { services } from "@/lib/services";
import IconTile from "./ui/IconTile";
import SectionHeading from "./ui/SectionHeading";
import Reveal from "./ui/Reveal";

export default function CoreServicesGrid({ showHeading = true }: { showHeading?: boolean }) {
  return (
    <section id="services" className="scroll-mt-24 bg-ivory py-16 sm:py-20">
      <div className="mx-auto w-[90%]">
        {showHeading && (
          <SectionHeading
            eyebrow="Our Services"
            title="Everything you need to build and grow online"
            text="From your first website to apps, software and marketing, one team that understands your business and explains things simply."
          />
        )}

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <Reveal key={s.slug} delay={(i % 3) * 0.08}>
            <Link
              href={`/services/${s.slug}`}
              className="card-shine group relative flex h-full flex-col justify-between overflow-hidden rounded-3xl border border-gold-soft bg-white p-7 transition-all duration-500 hover:-translate-y-1.5 hover:border-gold hover:shadow-[0_30px_60px_-30px_rgba(140,106,18,0.5)]"
            >
              {/* gold line that draws across the top on hover */}
              <span className="absolute inset-x-0 top-0 h-0.5 origin-left scale-x-0 bg-linear-to-r from-gold via-[#f3d98b] to-gold transition-transform duration-700 group-hover:scale-x-100" />
              <div>
                <IconTile icon={s.icon} size="lg" />
                <h3 className="mt-5 text-2xl text-ink group-hover:text-gold-ink">{s.name}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{s.card.summary}</p>

                <ul className="mt-5 space-y-2 border-t border-gold-soft pt-5">
                  {s.card.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-sm text-slate-700">
                      <Check className="h-4 w-4 shrink-0 text-gold" strokeWidth={2} aria-hidden="true" />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-6 flex items-center justify-between border-t border-gold-soft pt-4">
                <span className="text-xs text-slate-400">{s.card.tools}</span>
                <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-gold-ink">
                  Explore
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </span>
              </div>
            </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
