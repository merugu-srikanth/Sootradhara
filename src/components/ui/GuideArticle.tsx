import React from "react";
import { BookOpen, Check } from "lucide-react";
import type { Guide } from "@/content/types";
import Reveal from "./Reveal";

function slugify(s: string) {
  return s
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

/** Article-style guide with a sticky table of contents. */
export default function GuideArticle({ guide, id = "guide-article", tone = "white" }: { guide: Guide; id?: string; tone?: "white" | "ivory" }) {
  return (
    <section id={id} className={`scroll-mt-32 py-16 sm:py-24 ${tone === "ivory" ? "bg-ivory" : "bg-white"}`}>
      <div className="mx-auto grid w-[90%] max-w-[1280px] grid-cols-1 gap-12 lg:grid-cols-12">
        <aside className="lg:col-span-4">
          <div className={`sticky top-36 rounded-3xl border border-gold-soft p-7 ${tone === "ivory" ? "bg-white" : "bg-ivory"}`}>
            <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-gold-ink">
              <BookOpen className="h-4 w-4" /> In this guide
            </p>
            <ol className="mt-5 space-y-2.5">
              {guide.sections.map((s, i) => (
                <li key={s.heading}>
                  <a href={`#${slugify(s.heading)}`} className="group flex gap-3 text-sm text-slate-600 transition-colors hover:text-ink">
                    <span className="font-serif text-gold">{String(i + 1).padStart(2, "0")}</span>
                    <span className="group-hover:underline group-hover:decoration-gold group-hover:underline-offset-4">{s.heading}</span>
                  </a>
                </li>
              ))}
            </ol>
          </div>
        </aside>

        <article className="lg:col-span-8">
          <Reveal>
            <p className="eyebrow">The complete guide</p>
            <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl text-ink">{guide.title}</h2>
            <p className="mt-6 text-lg leading-[1.8] text-slate-600">{guide.intro}</p>
          </Reveal>
          <div className="mt-10 space-y-12">
            {guide.sections.map((s) => (
              <Reveal key={s.heading}>
                <div id={slugify(s.heading)} className="scroll-mt-36 border-t border-gold-soft pt-10">
                  <h3 className="text-2xl sm:text-3xl text-ink">{s.heading}</h3>
                  <div className="mt-4 space-y-4 text-base leading-[1.85] text-slate-600">
                    {s.paragraphs.map((p, i) => (
                      <p key={i}>{p}</p>
                    ))}
                  </div>
                  {s.bullets && (
                    <ul className="mt-5 grid grid-cols-1 gap-2.5 sm:grid-cols-2">
                      {s.bullets.map((b) => (
                        <li key={b} className="flex items-start gap-2.5 rounded-2xl bg-ivory px-4 py-3 text-sm text-slate-700">
                          <Check className="mt-0.5 h-4 w-4 shrink-0 text-gold" strokeWidth={2.5} /> {b}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </Reveal>
            ))}
          </div>
        </article>
      </div>
    </section>
  );
}
