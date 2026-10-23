"use client";

import React, { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, ArrowRight, ArrowUpRight, X } from "lucide-react";

interface ShowcaseItem {
  id: number;
  title: string;
  category: string;
  image: string;
  link: string;
  /** What kind of product it is, e.g. "Mobile app" */
  kind: string;
  blurb: string;
}

const ITEMS: ShowcaseItem[] = [
  { id: 1, title: "Personal finance app", category: "Mobile App", image: "/showcase/mobile.jpg", link: "/services/mobile-app-development", kind: "Mobile app", blurb: "Track spending, savings and goals with a clean, secure app." },
  { id: 2, title: "Inventory & billing dashboard", category: "ERP & CRM", image: "/showcase/erp.jpg", link: "/services/erp-crm-development", kind: "Web dashboard", blurb: "Stock, invoices and GST reports in one simple screen." },
  { id: 3, title: "Loan tracking dashboard", category: "Fintech", image: "/showcase/fintech.jpg", link: "/industries/fintech", kind: "Web app", blurb: "Live view of applications, disbursals and collections." },
  { id: 4, title: "Fashion store app", category: "E-commerce", image: "/showcase/mobile.jpg", link: "/services/ecommerce-development", kind: "Online store", blurb: "Browse, pay by UPI and track orders in a few taps." },
  { id: 5, title: "College admissions portal", category: "Education", image: "/showcase/erp.jpg", link: "/industries/education", kind: "Web portal", blurb: "Online applications, document uploads and fee payment." },
  { id: 6, title: "Sales lead tracker", category: "CRM", image: "/showcase/fintech.jpg", link: "/services/erp-crm-development", kind: "Web app", blurb: "Every enquiry in one place, with follow-up reminders." },
  { id: 7, title: "Restaurant ordering app", category: "Restaurants", image: "/showcase/mobile.jpg", link: "/industries/restaurants", kind: "Mobile app", blurb: "Direct orders and table bookings without commissions." },
  { id: 8, title: "Clinic appointments system", category: "Healthcare", image: "/showcase/erp.jpg", link: "/industries/healthcare", kind: "Web app", blurb: "Slot booking with WhatsApp reminders for patients." },
];

// Two copies so the loop always fills wide screens; the copy is hidden from screen readers.
const LOOP = [...ITEMS, ...ITEMS];
const AUTO_SPEED = -38; // px per second, drifting left

export default function CurvedShowcase() {
  const stageRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const state = useRef({ offset: 0, velocity: AUTO_SPEED, dragging: false, hovering: false, lastX: 0, lastT: 0, moved: 0 });
  const [selected, setSelected] = useState<ShowcaseItem | null>(null);
  const [cardW, setCardW] = useState(250);

  useEffect(() => {
    const update = () => setCardW(window.innerWidth < 640 ? 210 : 250);
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  // Animation loop: positions are written straight to the DOM for smooth 60fps
  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const gap = 44;
    const step = cardW + gap;
    const total = LOOP.length * step;
    let raf = 0;
    let last = performance.now();

    const render = () => {
      const s = state.current;
      const stageW = stageRef.current?.clientWidth ?? 1200;
      const radius = Math.max(stageW * 0.55, 600);
      LOOP.forEach((_, i) => {
        const el = cardRefs.current[i];
        if (!el) return;
        let x = (((i * step + s.offset) % total) + total) % total;
        if (x > total / 2) x -= total;
        const d = Math.min(Math.abs(x) / radius, 1.3);
        const rotate = Math.max(Math.min((-x / radius) * 26, 32), -32);
        const scale = 1 + d * d * 0.06;
        const z = -d * 60;
        const fade = Math.abs(x) > stageW / 2 + step ? 0 : 1 - Math.max(0, d - 0.85) * 1.6;
        el.style.transform = `translate3d(${x - cardW / 2}px, -50%, ${z}px) rotateY(${rotate}deg) scale(${scale})`;
        el.style.opacity = String(Math.max(fade, 0));
        el.style.zIndex = String(1000 - Math.round(Math.abs(x)));
      });
    };

    const tick = (now: number) => {
      const dt = Math.min((now - last) / 1000, 0.05);
      last = now;
      const s = state.current;
      if (!s.dragging) {
        const target = s.hovering || reduce ? 0 : AUTO_SPEED;
        s.velocity += (target - s.velocity) * Math.min(dt * 2.5, 1);
        s.offset += s.velocity * dt;
      }
      render();
      raf = requestAnimationFrame(tick);
    };
    render();
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [cardW]);

  const onPointerDown = (e: React.PointerEvent) => {
    const s = state.current;
    s.dragging = true;
    s.lastX = e.clientX;
    s.lastT = performance.now();
    s.moved = 0;
    s.velocity = 0;
  };
  const onPointerMove = (e: React.PointerEvent) => {
    const s = state.current;
    if (!s.dragging) return;
    const now = performance.now();
    const dx = e.clientX - s.lastX;
    s.offset += dx;
    s.moved += Math.abs(dx);
    s.velocity = (dx / Math.max(now - s.lastT, 1)) * 1000;
    s.lastX = e.clientX;
    s.lastT = now;
  };
  const endDrag = () => {
    state.current.dragging = false;
  };

  const nudge = useCallback((dir: 1 | -1) => {
    state.current.velocity = dir * 900;
  }, []);

  const open = (item: ShowcaseItem, fromKeyboard: boolean) => {
    if (!fromKeyboard && state.current.moved > 6) return; // it was a drag, not a click
    setSelected(item);
  };

  useEffect(() => {
    if (!selected) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setSelected(null);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [selected]);

  return (
    <section id="work" className="relative isolate scroll-mt-20 overflow-hidden bg-ink py-20 text-white select-none sm:py-24">
      {/* Background: gold glows, dotted grid, edge lines */}
      <div className="pointer-events-none absolute inset-0 -z-10" aria-hidden="true">
        <div className="absolute left-1/2 top-[58%] h-[420px] w-[90%] max-w-5xl -translate-x-1/2 -translate-y-1/2 rounded-full bg-gold/15 blur-[110px]" />
        <div className="absolute -left-40 -top-40 h-[420px] w-[420px] rounded-full bg-[radial-gradient(circle,rgba(212,175,55,0.18),transparent_65%)]" />
        <div className="absolute -right-40 bottom-0 h-[380px] w-[380px] rounded-full bg-[radial-gradient(circle,rgba(212,175,55,0.12),transparent_65%)]" />
        <div className="bg-dots-dark absolute inset-0 [mask-image:radial-gradient(ellipse_at_50%_50%,#000_10%,transparent_70%)]" />
        <div className="absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-gold/50 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-px bg-linear-to-r from-transparent via-gold/50 to-transparent" />
      </div>

      {/* Header */}
      <div className="mx-auto mb-4 flex w-[90%] max-w-[1280px] flex-col items-center justify-between gap-6 text-center md:flex-row md:items-end md:text-left">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="eyebrow text-gold!">Our Work</p>
          <h2 className="mt-3 text-4xl text-white sm:text-5xl lg:text-6xl">
            Ideas we&apos;ve <span className="text-gold-grad italic">brought to life</span>
          </h2>
          <p className="mt-4 max-w-xl text-sm text-white/60 sm:text-base">
            Concept designs made by our team to show our style and craft. Drag, or use the arrows to explore.
          </p>
        </motion.div>
        <div className="flex gap-3">
          <button
            type="button"
            onClick={() => nudge(1)}
            aria-label="Previous"
            className="grid h-12 w-12 place-items-center rounded-full border border-white/20 text-white transition-colors hover:border-gold hover:bg-gold hover:text-ink"
          >
            <ArrowLeft className="h-5 w-5" />
          </button>
          <button
            type="button"
            onClick={() => nudge(-1)}
            aria-label="Next"
            className="grid h-12 w-12 place-items-center rounded-full border border-white/20 text-white transition-colors hover:border-gold hover:bg-gold hover:text-ink"
          >
            <ArrowRight className="h-5 w-5" />
          </button>
        </div>
      </div>

      {/* Curved stage */}
      <div
        ref={stageRef}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={endDrag}
        onPointerCancel={endDrag}
        onPointerLeave={() => {
          endDrag();
          state.current.hovering = false;
        }}
        onPointerEnter={(e) => {
          if (e.pointerType === "mouse") state.current.hovering = true;
        }}
        className="relative h-[480px] cursor-grab touch-pan-y active:cursor-grabbing sm:h-[520px]"
        style={{ perspective: "1400px" }}
      >
        {LOOP.map((item, i) => {
          const isClone = i >= ITEMS.length;
          return (
            <div
              key={`${item.id}-${i}`}
              ref={(el) => {
                cardRefs.current[i] = el;
              }}
              aria-hidden={isClone || undefined}
              className="absolute left-1/2 top-1/2 will-change-transform"
              style={{ width: cardW, height: cardW * 1.48 }}
            >
              <button
                type="button"
                tabIndex={isClone ? -1 : 0}
                onClick={(e) => open(item, e.detail === 0)}
                aria-label={`${item.title}, concept design. View details`}
                className="card-shine group relative block h-full w-full overflow-hidden rounded-[22px] p-px text-left transition-transform duration-500 ease-out hover:-translate-y-2 focus-visible:-translate-y-2 focus-visible:outline-none"
              >
                {/* Gold gradient edge */}
                <span className="absolute inset-0 rounded-[22px] bg-linear-to-b from-gold/70 via-gold/15 to-gold/50 opacity-70 transition-opacity duration-500 group-hover:opacity-100" />
                <span className="relative block h-full w-full overflow-hidden rounded-[21px] bg-[#0f0d0a] shadow-[0_30px_60px_-25px_rgba(0,0,0,0.8)] transition-shadow duration-500 group-hover:shadow-[0_30px_70px_-20px_rgba(212,175,55,0.45)]">
                  <Image
                    src={item.image}
                    alt={isClone ? "" : `${item.title} (concept design)`}
                    fill
                    sizes="260px"
                    draggable={false}
                    className="object-cover opacity-85 transition-all duration-700 ease-out group-hover:scale-110 group-hover:opacity-100"
                  />
                  <span className="absolute inset-0 bg-linear-to-t from-[#0f0d0a] via-[#0f0d0a]/30 to-transparent" />

                  {/* Top row */}
                  <span className="absolute inset-x-3 top-3 flex items-center justify-between">
                    <span className="rounded-full border border-gold/40 bg-black/50 px-2.5 py-1 text-[9.5px] font-semibold uppercase tracking-[0.14em] text-gold backdrop-blur-md">
                      Concept
                    </span>
                    <span className="font-serif text-lg text-white/40">{String(item.id).padStart(2, "0")}</span>
                  </span>

                  {/* Glass info panel */}
                  <span className="absolute inset-x-3 bottom-3 rounded-2xl border border-white/10 bg-white/[0.06] p-4 backdrop-blur-md transition-colors duration-500 group-hover:border-gold/40">
                    <span className="block text-[10.5px] font-semibold uppercase tracking-[0.16em] text-gold">{item.category}</span>
                    <span className="mt-1 block font-serif text-xl leading-tight text-white">{item.title}</span>
                    <span className="mt-3 flex items-center justify-between text-[11px] text-white/60">
                      {item.kind}
                      <span className="grid h-7 w-7 place-items-center rounded-full bg-white/10 text-white transition-all duration-500 group-hover:rotate-45 group-hover:bg-gold group-hover:text-ink">
                        <ArrowUpRight className="h-3.5 w-3.5" />
                      </span>
                    </span>
                  </span>
                </span>
              </button>
            </div>
          );
        })}
      </div>

      {/* Floor line */}
      <div className="mx-auto mt-2 h-px w-2/3 bg-linear-to-r from-transparent via-gold/40 to-transparent" aria-hidden="true" />

      {/* Detail modal */}
      <AnimatePresence>
        {selected && (
          <motion.div
            className="fixed inset-0 z-[90] flex items-center justify-center bg-black/70 p-4 backdrop-blur-sm"
            role="dialog"
            aria-modal="true"
            aria-label={selected.title}
            onClick={() => setSelected(null)}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="relative w-full max-w-lg overflow-hidden rounded-3xl border border-gold-soft bg-white text-ink shadow-2xl"
              onClick={(e) => e.stopPropagation()}
              initial={{ opacity: 0, y: 30, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.97 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="relative h-64 w-full bg-ink">
                <Image src={selected.image} alt={`${selected.title} (concept design)`} fill sizes="512px" className="object-cover" />
                <div className="absolute inset-0 bg-linear-to-t from-ink via-ink/20 to-transparent" />
                <button
                  onClick={() => setSelected(null)}
                  className="absolute right-4 top-4 grid h-9 w-9 place-items-center rounded-full bg-black/60 text-white hover:bg-black/90"
                  aria-label="Close"
                >
                  <X className="h-4 w-4" />
                </button>
                <div className="absolute bottom-4 left-5 right-5 text-white">
                  <span className="text-xs font-semibold uppercase tracking-wider text-gold">{selected.category}</span>
                  <h3 className="text-3xl">{selected.title}</h3>
                </div>
              </div>
              <div className="space-y-4 p-6">
                <p className="inline-block rounded-full border border-gold-soft bg-ivory px-3 py-1 text-xs font-semibold text-gold-ink">
                  Concept / Sample Work
                </p>
                <p className="text-sm leading-relaxed text-slate-600">
                  {selected.blurb} This is a concept design by our team, not a client project. Want something like this for your
                  business? Let&apos;s talk.
                </p>
                <div className="flex items-center gap-3 pt-2">
                  <Link
                    href={selected.link}
                    onClick={() => setSelected(null)}
                    className="btn-gold inline-flex flex-1 items-center justify-center gap-2 rounded-full px-4 py-3 text-sm font-semibold"
                  >
                    See related service <ArrowRight className="h-4 w-4" />
                  </Link>
                  <button onClick={() => setSelected(null)} className="rounded-full px-4 py-3 text-sm font-medium text-slate-700 hover:bg-ivory">
                    Close
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
