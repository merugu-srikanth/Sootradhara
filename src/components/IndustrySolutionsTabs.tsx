"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Check } from "lucide-react";
import { industries } from "@/lib/industries";
import { getService } from "@/lib/services";
import SectionHeading from "./ui/SectionHeading";
import IconTile from "./ui/IconTile";

export default function IndustrySolutionsTabs() {
  const [active, setActive] = useState(0);
  const current = industries[active];

  return (
    <section id="industries" className="scroll-mt-24 bg-white py-16 sm:py-20">
      <div className="mx-auto w-[90%]">
        <SectionHeading
          eyebrow="Industries"
          title="Solutions shaped for your industry"
          text="Every industry has its own way of working. We bring ideas that suit yours, from builders and schools to clinics, restaurants and startups."
        />

        {/* Tabs */}
        <div className="no-scrollbar mx-[-5%] mb-8 flex gap-2 overflow-x-auto px-[5%] sm:mx-0 sm:flex-wrap sm:justify-center sm:px-0" role="tablist">
          {industries.map((ind, idx) => {
            const Icon = ind.icon;
            const isActive = active === idx;
            return (
              <button
                key={ind.slug}
                role="tab"
                aria-selected={isActive}
                onClick={() => setActive(idx)}
                className={`flex shrink-0 items-center gap-2 rounded-full border px-4 py-2.5 text-sm font-medium transition-colors ${
                  isActive
                    ? "border-gold bg-ivory text-gold-ink"
                    : "border-slate-200 bg-white text-slate-700 hover:border-gold-soft hover:text-gold-ink"
                }`}
              >
                <Icon className="h-4 w-4" strokeWidth={1.5} />
                {ind.name}
              </button>
            );
          })}
        </div>

        {/* Panel */}
        <AnimatePresence mode="wait">
          <motion.div
            key={current.slug}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.25 }}
            className="grid grid-cols-1 overflow-hidden rounded-3xl border border-gold-soft lg:grid-cols-12"
            role="tabpanel"
          >
            <div className="space-y-6 bg-white p-7 sm:p-10 lg:col-span-7">
              <div className="flex items-center gap-4">
                <IconTile icon={current.icon} size="lg" />
                <h3 className="text-2xl sm:text-3xl text-ink">{current.name}</h3>
              </div>
              <p className="leading-relaxed text-slate-600">{current.intro}</p>

              <ul className="grid gap-4 sm:grid-cols-2">
                {current.solutions.map((sol) => (
                  <li key={sol.title} className="flex items-start gap-3">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-gold" strokeWidth={2} />
                    <span>
                      <span className="block text-sm font-semibold text-ink">{sol.title}</span>
                      <span className="block text-sm text-slate-500">{sol.description}</span>
                    </span>
                  </li>
                ))}
              </ul>

              <Link
                href={`/industries/${current.slug}`}
                className="inline-flex items-center gap-2 rounded-full bg-gold px-6 py-3 text-sm font-semibold text-ink transition-colors hover:bg-gold-deep"
              >
                Solutions for {current.name}
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

            <div className="relative bg-ink p-7 text-white sm:p-10 lg:col-span-5">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-gold">Problems we help solve</p>
              <ul className="mt-5 space-y-4">
                {current.challenges.map((c) => (
                  <li key={c} className="flex items-start gap-3 text-sm text-white/80">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
                    {c}
                  </li>
                ))}
              </ul>

              <p className="mt-8 text-xs font-semibold uppercase tracking-[0.18em] text-gold">Related services</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {current.services.map((slug) => {
                  const svc = getService(slug);
                  if (!svc) return null;
                  return (
                    <Link
                      key={slug}
                      href={`/services/${slug}`}
                      className="rounded-full border border-white/20 px-3 py-1.5 text-xs text-white/80 transition-colors hover:border-gold hover:text-gold"
                    >
                      {svc.name}
                    </Link>
                  );
                })}
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
