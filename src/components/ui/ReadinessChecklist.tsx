"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Check, ArrowRight } from "lucide-react";

/** Interactive self-check: visitors tick what's true today and see where to start. */
export default function ReadinessChecklist({ items, industry }: { items: string[]; industry: string }) {
  const [done, setDone] = useState<Set<number>>(new Set());
  const pct = Math.round((done.size / items.length) * 100);

  const toggle = (i: number) =>
    setDone((prev) => {
      const next = new Set(prev);
      if (next.has(i)) next.delete(i);
      else next.add(i);
      return next;
    });

  const message =
    pct >= 80
      ? "You're in great shape. Let's look at automation and growth next."
      : pct >= 50
        ? "A solid base. A few focused improvements could make a big difference."
        : "Plenty of quick wins available. A short consultation can show where to start.";

  return (
    <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
      <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:col-span-8">
        {items.map((item, i) => {
          const on = done.has(i);
          return (
            <li key={item}>
              <button
                type="button"
                onClick={() => toggle(i)}
                aria-pressed={on}
                className={`flex w-full items-center gap-3 rounded-2xl border p-4 text-left text-sm transition-all duration-300 ${
                  on ? "border-gold bg-ivory text-ink" : "border-gold-soft bg-white text-slate-600 hover:border-gold"
                }`}
              >
                <span
                  className={`grid h-6 w-6 shrink-0 place-items-center rounded-full border transition-colors ${
                    on ? "border-gold bg-gold text-ink" : "border-gold-soft text-transparent"
                  }`}
                >
                  <Check className="h-3.5 w-3.5" strokeWidth={3} />
                </span>
                {item}
              </button>
            </li>
          );
        })}
      </ul>
      <div className="lg:col-span-4">
        <div className="sticky top-36 rounded-3xl bg-ink p-8 text-white">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-gold">Your {industry} readiness</p>
          <p className="mt-4 font-serif text-6xl text-white">
            {done.size}
            <span className="text-2xl text-white/40"> / {items.length}</span>
          </p>
          <div className="mt-5 h-2 overflow-hidden rounded-full bg-white/10">
            <motion.div
              className="h-full rounded-full bg-linear-to-r from-[#f7e7a6] via-gold to-gold-deep"
              animate={{ width: `${pct}%` }}
              transition={{ type: "spring", stiffness: 120, damping: 20 }}
            />
          </div>
          <p className="mt-5 text-sm leading-relaxed text-white/70">{done.size === 0 ? "Tick the statements that are true for your business today." : message}</p>
          <Link href="/contact" className="btn-gold mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold">
            Get a free review <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}
