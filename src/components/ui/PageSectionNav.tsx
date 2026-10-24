"use client";

import React, { useEffect, useState } from "react";

/**
 * Sticky "On this page" bar for long pages. Highlights the section in view.
 * It never scrolls by itself (that made the page jump on phones); visitors
 * swipe or tap the tabs.
 */
export default function PageSectionNav({ items }: { items: { id: string; label: string }[] }) {
  const [active, setActive] = useState(items[0]?.id);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting).sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible[0]) setActive(visible[0].target.id);
      },
      { rootMargin: "-140px 0px -55% 0px" }
    );
    items.forEach((i) => {
      const el = document.getElementById(i.id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, [items]);


  return (
    <nav aria-label="On this page" className="sticky top-[72px] z-30 border-y border-gold-soft bg-white/90 backdrop-blur-xl">
      <div className="no-scrollbar mx-auto flex w-[90%] max-w-[1280px] items-center gap-1.5 overflow-x-auto py-2.5">
        <span className="mr-2 shrink-0 text-[10px] font-semibold uppercase tracking-[0.18em] text-gold-ink">On this page</span>
        {items.map((i) => (
          <a
            key={i.id}
            data-id={i.id}
            href={`#${i.id}`}
            className={`shrink-0 rounded-full px-3.5 py-1.5 text-xs font-medium transition-colors ${
              active === i.id ? "bg-ink text-white" : "text-slate-600 hover:bg-ivory hover:text-ink"
            }`}
          >
            {i.label}
          </a>
        ))}
      </div>
    </nav>
  );
}
