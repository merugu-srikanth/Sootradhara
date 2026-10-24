"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ArrowRight, Play } from "lucide-react";
import { getService, services } from "@/lib/services";
import IconTile from "./ui/IconTile";

const ease = [0.22, 1, 0.36, 1] as const;

/* Headline: brand line, animated word by word. The SEO keyword phrase sits
   in the same <h1> as a small label line above it. */
const before = ["We", "hold", "every"];
const gold = "thread";
const after = ["of", "your", "digital", "growth."];

/* Service cards placed around the emblem (x/y in % of the hub square) */
const hubNodes = [
  { slug: "website-development", label: "Websites", note: "Fast & SEO-ready", x: 22, y: 14 },
  { slug: "mobile-app-development", label: "Mobile Apps", note: "Android & iOS", x: 80, y: 18 },
  { slug: "ai-tools-automation", label: "AI & Automation", note: "Save hours weekly", x: 84, y: 52 },
  { slug: "digital-marketing", label: "Marketing & SEO", note: "Leads, not likes", x: 76, y: 86 },
  { slug: "ecommerce-development", label: "E-commerce", note: "UPI-ready stores", x: 24, y: 86 },
  { slug: "erp-crm-development", label: "ERP & CRM", note: "One simple system", x: 16, y: 50 },
];

/** Curved thread from the centre (50,50) to a node */
function threadPath(x: number, y: number) {
  const mx = (50 + x) / 2;
  const my = (50 + y) / 2;
  // bend each thread sideways a little for an organic, woven feel
  const dx = y - 50;
  const dy = 50 - x;
  const len = Math.hypot(dx, dy) || 1;
  const bend = 7;
  return `M50 50 Q ${mx + (dx / len) * bend} ${my + (dy / len) * bend} ${x} ${y}`;
}

export default function HeroSection() {
  // Start the entrance once the loading animation has finished
  const [ready, setReady] = useState(false);
  useEffect(() => {
    const introPlaying =
      !document.documentElement.classList.contains("pl-skip") &&
      !window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const t = window.setTimeout(() => setReady(true), introPlaying ? 1600 : 0);
    return () => window.clearTimeout(t);
  }, []);
  const go = <T,>(target: T) => (ready ? target : undefined);

  // Gentle parallax on the hub following the mouse
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const sx = useSpring(mx, { stiffness: 80, damping: 20 });
  const sy = useSpring(my, { stiffness: 80, damping: 20 });
  const tx = useTransform(sx, (v) => v * 14);
  const ty = useTransform(sy, (v) => v * 14);

  const onMove = (e: React.MouseEvent<HTMLElement>) => {
    const r = e.currentTarget.getBoundingClientRect();
    mx.set((e.clientX - r.left) / r.width - 0.5);
    my.set((e.clientY - r.top) / r.height - 0.5);
  };

  let w = 0; // running word index for stagger
  const word = (text: string, key: string) => (
    <span key={key} className="inline-block overflow-hidden pb-[0.08em] -mb-[0.08em] align-top">
      <motion.span
        className="inline-block"
        initial={{ y: "105%" }}
        animate={go({ y: 0 })}
        transition={{ duration: 0.9, delay: 0.15 + w++ * 0.07, ease }}
      >
        {text}
      </motion.span>
    </span>
  );

  return (
    <section onMouseMove={onMove} className="relative isolate overflow-hidden bg-white pt-28 lg:pt-32">
      {/* Background: soft gold glows, dotted grid, faint threads */}
      <div className="pointer-events-none absolute inset-0 -z-10" aria-hidden="true">
        <div className="absolute -right-32 top-10 h-[620px] w-[620px] rounded-full bg-[radial-gradient(circle,rgba(243,217,139,0.35),transparent_65%)] blur-2xl" />
        <div className="absolute -left-52 -bottom-32 h-[520px] w-[520px] rounded-full bg-[radial-gradient(circle,rgba(243,236,221,0.9),transparent_65%)] blur-2xl" />
        <div className="bg-dots absolute inset-0 [mask-image:radial-gradient(ellipse_at_70%_40%,#000_0%,transparent_60%)]" />
      </div>

      <div className="mx-auto grid w-[90%] max-w-[1280px] grid-cols-1 items-center gap-10 lg:min-h-[calc(100vh-230px)] lg:grid-cols-[1.05fr_0.95fr]">
        {/* Left: copy */}
        <div className="text-center lg:text-left">
          <h1 className="text-ink">
            {/* Keyword line (small, visible) */}
            <motion.span
              initial={{ opacity: 0, y: 12 }}
              animate={go({ opacity: 1, y: 0 })}
              transition={{ duration: 0.6, ease }}
              className="inline-flex items-center gap-2.5 rounded-full border border-gold-soft bg-white/70 py-2 pl-2.5 pr-4 font-sans text-[11px] font-semibold uppercase leading-snug tracking-[0.16em] text-gold-ink sm:text-xs"
            >
              <i aria-hidden="true" className="pulse-dot h-2 w-2 shrink-0 rounded-full bg-gold" />
              Website, App Development &amp; Digital Marketing Company in Hyderabad
            </motion.span>

            {/* Brand line */}
            <span className="mt-7 mb-7 block text-[clamp(2.7rem,5.8vw,5.4rem)] leading-[1.02] tracking-[-0.015em]">
              {before.map((t, i) => (
                <React.Fragment key={`b${i}`}>{word(t, `b${i}`)} </React.Fragment>
              ))}
              <span className="relative inline-block overflow-hidden pb-[0.14em] -mb-[0.14em] align-top">
                <motion.span
                  className="text-gold-grad inline-block pr-[0.06em] italic"
                  initial={{ y: "105%" }}
                  animate={go({ y: 0 })}
                  transition={{ duration: 0.9, delay: 0.15 + w++ * 0.07, ease }}
                >
                  {gold}
                </motion.span>
                {/* Hand-drawn gold underline */}
                <motion.svg
                  viewBox="0 0 300 12"
                  preserveAspectRatio="none"
                  className="absolute -left-[2%] bottom-0 h-[0.22em] w-[104%] origin-left"
                  initial={{ scaleX: 0 }}
                  animate={go({ scaleX: 1 })}
                  transition={{ duration: 1, delay: 1, ease }}
                  aria-hidden="true"
                >
                  <path d="M2 9 C 80 2, 200 2, 298 7" fill="none" stroke="#D4AF37" strokeWidth="3" strokeLinecap="round" />
                </motion.svg>
              </span>{" "}
              {after.map((t, i) => (
                <React.Fragment key={`a${i}`}>{word(t, `a${i}`)} </React.Fragment>
              ))}
            </span>
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={go({ opacity: 1, y: 0 })}
            transition={{ duration: 0.8, delay: 0.7, ease }}
            className="mx-auto max-w-[540px] text-base leading-relaxed text-slate-600 sm:text-lg lg:mx-0"
          >
            Websites, mobile apps, custom software and digital marketing for startups and growing businesses. Planned, built
            and grown by one team in Hyderabad, so every part of your business works together.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={go({ opacity: 1, y: 0 })}
            transition={{ duration: 0.8, delay: 0.85, ease }}
            className="mt-9 flex flex-wrap justify-center gap-3.5 lg:justify-start"
          >
            <Link href="/contact" className="btn-gold group inline-flex h-14 items-center gap-2.5 rounded-full px-7 text-[15px] font-semibold max-sm:w-full max-sm:justify-center">
              Get a Free Quote
              <ArrowRight className="h-[18px] w-[18px] transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
            <Link
              href="/services"
              className="group inline-flex h-14 items-center gap-3 rounded-full border border-gold-soft bg-white/70 pl-2.5 pr-7 text-[15px] font-semibold text-ink transition-colors hover:border-gold max-sm:w-full max-sm:justify-center"
            >
              <span className="grid h-9 w-9 place-items-center rounded-full border border-gold-soft bg-ivory transition-transform duration-300 group-hover:scale-110">
                <Play className="h-3 w-3 fill-gold-ink text-gold-ink" />
              </span>
              See Our services
            </Link>
          </motion.div>

          {/* <motion.ul
            initial={{ opacity: 0 }}
            animate={go({ opacity: 1 })}
            transition={{ duration: 0.8, delay: 1.05 }}
            className="mx-auto mt-10 flex max-w-[560px] flex-wrap items-center justify-center gap-x-5 gap-y-2 border-t border-gold-soft pt-6 text-[13.5px] text-slate-600 lg:mx-0 lg:justify-start"
          >
            <li><b className="font-semibold text-ink">Free</b> first consultation</li>
            <li aria-hidden="true" className="h-1 w-1 rounded-full bg-gold" />
            <li><b className="font-semibold text-ink">Clear</b> quote upfront</li>
            <li aria-hidden="true" className="h-1 w-1 rounded-full bg-gold" />
            <li><b className="font-semibold text-ink">Support</b> after launch</li>
          </motion.ul> */}
        </div>

        {/* Right: thread hub */}
        <motion.div style={{ x: tx, y: ty }} className="relative mx-auto hidden aspect-square w-full max-w-[560px] lg:ml-auto lg:mr-0 lg:block">
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={go({ opacity: 1, scale: 1 })}
            transition={{ duration: 1.1, delay: 0.3, ease }}
            className="absolute inset-0"
          >
            {/* Threads + travelling beads */}
            <svg viewBox="0 0 100 100" className="absolute inset-0 h-full w-full overflow-visible" aria-hidden="true">
              <defs>
                <linearGradient id="hubThread" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0" stopColor="#F3D98B" />
                  <stop offset="0.5" stopColor="#D4AF37" />
                  <stop offset="1" stopColor="#B8901F" />
                </linearGradient>
              </defs>
              {hubNodes.map((n, i) => (
                <g key={n.slug}>
                  <path id={`hub-t-${i}`} d={threadPath(n.x, n.y)} fill="none" stroke="url(#hubThread)" strokeWidth="0.28" opacity="0.8" />
                  <circle r="0.9" fill="#D4AF37" style={{ filter: "drop-shadow(0 0 1.2px rgba(212,175,55,0.9))" }}>
                    <animateMotion dur={`${3 + (i % 3) * 0.6}s`} begin={`${i * 0.45}s`} repeatCount="indefinite" keyPoints="0;1" keyTimes="0;1" calcMode="linear">
                      <mpath href={`#hub-t-${i}`} />
                    </animateMotion>
                  </circle>
                </g>
              ))}
            </svg>

            {/* Core emblem */}
            <div className="absolute left-1/2 top-1/2 aspect-square w-[34%] -translate-x-1/2 -translate-y-1/2">
              <div className="absolute -inset-[28%] rounded-full border border-gold/20" />
              <div className="spin-slow absolute -inset-[14%] rounded-full border border-dashed border-gold-deep/50">
                <span className="absolute -top-[5px] left-1/2 h-2.5 w-2.5 -translate-x-1/2 rounded-full bg-gold shadow-[0_0_12px_rgba(212,175,55,0.8)]" />
              </div>
              <div className="floaty absolute inset-0 rounded-full border border-gold-soft bg-[radial-gradient(circle_at_35%_30%,#fff_0%,#faf7f0_55%,#f3ecdd_100%)] shadow-[0_30px_60px_-20px_rgba(140,106,18,0.35),inset_0_0_0_10px_rgba(255,255,255,0.7)]">
                <Image
                  src="/sootradhara-emblem.png"
                  alt="Sootradhara emblem"
                  width={160}
                  height={160}
                  priority
                  className="absolute inset-[16%] h-[68%] w-[68%] object-contain drop-shadow-[0_8px_14px_rgba(140,106,18,0.35)]"
                />
              </div>
              <span className="absolute -bottom-[16%] left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full border border-gold-soft bg-white px-3 py-1.5 text-[9px] font-bold tracking-[0.3em] text-gold-ink sm:text-[10px]">
                SOOTRADHARA
              </span>
            </div>

            {/* Service nodes */}
            {hubNodes.map((n, i) => {
              const svc = getService(n.slug);
              if (!svc) return null;
              return (
                <motion.div
                  key={n.slug}
                  className="absolute -translate-x-1/2 -translate-y-1/2"
                  style={{ left: `${n.x}%`, top: `${n.y}%` }}
                  initial={{ opacity: 0, scale: 0.6 }}
                  animate={go({ opacity: 1, scale: 1 })}
                  transition={{ duration: 0.6, delay: 0.7 + i * 0.1, ease }}
                >
                  <Link
                    href={`/services/${n.slug}`}
                    aria-label={svc.name}
                    className="group flex items-center gap-2.5 rounded-full border border-gold-soft bg-white/90 p-1.5 shadow-[0_14px_34px_-16px_rgba(20,18,15,0.25)] backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-gold hover:shadow-[0_18px_40px_-14px_rgba(169,126,18,0.45)] sm:rounded-2xl sm:py-2 sm:pl-2 sm:pr-3.5"
                  >
                    <IconTile icon={svc.icon} size="sm" />
                    <span className="hidden whitespace-nowrap sm:block">
                      <b className="block text-[13px] font-bold leading-tight text-ink">{n.label}</b>
                      <small className="block text-[11px] text-slate-500">{n.note}</small>
                    </span>
                  </Link>
                </motion.div>
              );
            })}

          </motion.div>
        </motion.div>
      </div>

      {/* Services marquee */}
      <div className="marquee mt-12 overflow-hidden border-y border-gold-soft bg-ivory/60 py-5">
        <div className="marquee-track gap-11">
          {[0, 1].map((copy) => (
            <div key={copy} className="flex shrink-0 gap-11" aria-hidden={copy === 1 || undefined}>
              {services.map((s) => (
                <span
                  key={s.slug}
                  className="flex items-center gap-11 whitespace-nowrap font-serif text-[22px] font-semibold text-[#9b958a] transition-colors after:h-1.5 after:w-1.5 after:rounded-full after:bg-gold/70 after:content-[''] hover:text-gold-ink"
                >
                  {s.name}
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
