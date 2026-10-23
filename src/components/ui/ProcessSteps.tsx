"use client";

import React, { useRef } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { Clock } from "lucide-react";

/** Vertical step timeline; the gold thread draws itself as you scroll. */
export default function ProcessSteps({ steps }: { steps: { title: string; text: string; duration?: string }[] }) {
  const ref = useRef<HTMLOListElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 75%", "end 55%"] });
  const scaleY = useSpring(scrollYProgress, { stiffness: 90, damping: 25 });

  return (
    <ol ref={ref} className="relative mx-auto max-w-3xl">
      <span aria-hidden="true" className="absolute left-[23px] top-3 bottom-3 w-px bg-gold-soft" />
      <motion.span
        aria-hidden="true"
        style={{ scaleY }}
        className="absolute left-[23px] top-3 bottom-3 w-px origin-top bg-linear-to-b from-[#f3d98b] via-gold to-gold-deep"
      />
      {steps.map((s, i) => (
        <motion.li
          key={s.title}
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "0px 0px -80px 0px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="relative flex gap-6 pb-10 last:pb-0"
        >
          <span className="relative z-10 grid h-12 w-12 shrink-0 place-items-center rounded-full border border-gold/60 bg-white font-serif text-lg text-gold-ink shadow-[0_8px_20px_-10px_rgba(140,106,18,0.5)]">
            {String(i + 1).padStart(2, "0")}
          </span>
          <div className="flex-1 rounded-3xl border border-gold-soft bg-white p-6 transition-colors hover:border-gold">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <h3 className="text-2xl text-ink">{s.title}</h3>
              {s.duration && (
                <span className="inline-flex items-center gap-1.5 rounded-full bg-ivory px-3 py-1 text-xs font-medium text-gold-ink">
                  <Clock className="h-3.5 w-3.5" /> {s.duration}
                </span>
              )}
            </div>
            <p className="mt-2 text-sm leading-relaxed text-slate-600">{s.text}</p>
          </div>
        </motion.li>
      ))}
    </ol>
  );
}
