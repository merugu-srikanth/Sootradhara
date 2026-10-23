"use client";

import React from "react";
import { motion } from "framer-motion";
import type { TeamMember } from "@/lib/team";

/**
 * Line-art team avatar (no photo). Strokes draw themselves in when the card
 * scrolls into view, the gold shoulder highlight fades in, the eyes blink
 * now and then and the head tilts on card hover.
 */
const INK = "#14120F";

const HAIR: Record<TeamMember["avatar"]["hair"], { d: string; fill?: boolean; dash?: string }[]> = {
  short: [{ d: "M41 48 C38 32 48 24 60 24 C72 24 82 32 79 48 C76 40 70 35 62 36 C56 37 50 34 46 38 C44 40 42 44 41 48 Z", fill: true }],
  side: [
    { d: "M41 50 C37 32 48 23 61 23 C74 23 82 32 79 48 C74 37 64 32 50 36 C46 38 43 43 41 50 Z", fill: true },
    { d: "M50 35 C56 30 66 28 74 32" },
  ],
  quiff: [{ d: "M41 48 C39 34 46 28 52 27 C52 20 64 17 72 22 C80 26 82 38 79 48 C76 38 68 33 58 35 C50 36 45 40 41 48 Z", fill: true }],
  curly: [
    {
      d: "M41 48 C36 44 38 36 43 35 C42 28 50 25 54 28 C56 22 66 22 68 27 C74 24 80 30 78 35 C83 38 82 45 79 48 C76 40 68 36 60 37 C52 36 46 40 41 48 Z",
      fill: true,
    },
  ],
  buzz: [{ d: "M42 45 C42 33 50 27 60 27 C70 27 78 33 78 45", dash: "1.5 3.5" }],
  long: [
    { d: "M42 52 C38 34 47 23 60 23 C74 23 83 34 78 52 C80 66 83 80 88 92 M42 52 C40 66 37 80 32 92" },
    { d: "M43 45 C52 43 60 37 66 30 C70 37 74 41 78 45" },
  ],
  bun: [
    { d: "M51 21 C51 15 56 12 60 12 C64 12 69 15 69 21 C69 26 64 28 60 28 C56 28 51 26 51 21 Z", fill: true },
    { d: "M41 50 C38 32 48 25 60 25 C72 25 82 32 79 50 C76 40 68 35 60 36 C52 35 45 40 41 50 Z", fill: true },
    { d: "M43 47 C41 54 41 60 43 64" },
  ],
};

const TOPS: Record<TeamMember["avatar"]["top"], string[]> = {
  tshirt: ["M20 120 C22 100 36 91 52 88", "M68 88 C84 91 98 100 100 120", "M52 88 Q60 97 68 88", "M35 108 L36 120", "M85 108 L84 120"],
  shirt: ["M20 120 C22 100 36 91 52 87", "M68 87 C84 91 98 100 100 120", "M52 87 L56 98 L60 92 L64 98 L68 87", "M60 92 L60 120"],
  hoodie: [
    "M18 120 C20 98 34 89 50 86",
    "M70 86 C86 89 100 98 102 120",
    "M46 84 C44 93 51 100 60 100 C69 100 76 93 74 84",
    "M56 100 L55 111",
    "M64 100 L65 111",
  ],
};

function Stroke({ d, delay, fill, dash, width = 1.7 }: { d: string; delay: number; fill?: boolean; dash?: string; width?: number }) {
  return (
    <motion.path
      d={d}
      fill={fill ? "#fff" : "none"}
      stroke={INK}
      strokeWidth={width}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeDasharray={dash}
      initial={dash ? { opacity: 0 } : { pathLength: 0, opacity: 0 }}
      whileInView={dash ? { opacity: 1 } : { pathLength: 1, opacity: 1 }}
      viewport={{ once: true, margin: "0px 0px -40px 0px" }}
      transition={{ pathLength: { duration: 1.1, ease: "easeInOut", delay }, opacity: { duration: 0.2, delay } }}
    />
  );
}

export default function TeamAvatar({ avatar, index = 0, className = "" }: { avatar: TeamMember["avatar"]; index?: number; className?: string }) {
  const base = 0.1 + (index % 4) * 0.12;
  let n = 0;
  const next = () => base + n++ * 0.05;

  return (
    <svg viewBox="0 0 120 120" className={className} aria-hidden="true">
      {/* Gold shoulder highlight */}
      <motion.path
        d="M22 119 C24 104 34 95 48 90 C46 100 44 110 46 119 Z"
        fill="#D4AF37"
        initial={{ opacity: 0, scale: 0.6 }}
        whileInView={{ opacity: 0.85, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: base + 0.9 }}
        style={{ transformOrigin: "40px 110px" }}
      />
      <motion.path
        d="M88 104 C92 109 95 114 96 119 L86 119 Z"
        fill="#E8E2D4"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: base + 1 }}
      />

      {/* Body */}
      {TOPS[avatar.top].map((d) => (
        <Stroke key={d} d={d} delay={next()} />
      ))}
      <Stroke d="M53 73 L53 88" delay={next()} />
      <Stroke d="M67 73 L67 88" delay={next()} />

      {/* Head (tilts on card hover) */}
      <g className="avatar-head">
        <Stroke d="M42 50 C42 34 50 28 60 28 C70 28 78 34 78 50 C78 64 71 76 60 76 C49 76 42 64 42 50 Z" delay={next()} fill />
        <Stroke d="M42 49 C37 47 36 57 42 59" delay={next()} width={1.5} />
        <Stroke d="M78 49 C83 47 84 57 78 59" delay={next()} width={1.5} />

        {HAIR[avatar.hair].map((h) => (
          <Stroke key={h.d} d={h.d} delay={next()} fill={h.fill} dash={h.dash} />
        ))}

        {/* Face */}
        <Stroke d="M49 45.5 Q53 43.5 56 45.5" delay={next()} width={1.5} />
        <Stroke d="M64 45.5 Q67 43.5 71 45.5" delay={next()} width={1.5} />
        <motion.g
          className="avatar-eyes"
          style={{ animationDelay: `${(index * 0.7) % 4}s` }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: base + 0.7 }}
        >
          <circle cx="53" cy="51.5" r="1.6" fill={INK} />
          <circle cx="67" cy="51.5" r="1.6" fill={INK} />
        </motion.g>
        <Stroke d="M60 53 Q57.5 59 60 61 Q62 61.5 63 60" delay={next()} width={1.4} />
        {avatar.beard ? (
          <>
            <Stroke d="M43 58 C44 72 52 80 60 80 C68 80 76 72 77 58" delay={next()} width={1.5} />
            <Stroke d="M54 64.5 Q60 61.5 66 64.5" delay={next()} width={1.5} />
            <Stroke d="M56 68 Q60 70 64 68" delay={next()} width={1.4} />
          </>
        ) : (
          <Stroke d="M54 66 Q60 70.5 66 66" delay={next()} width={1.5} />
        )}
        {avatar.glasses && (
          <>
            <Stroke d="M47 48 H57 Q59 48 59 50 V54 Q59 57 56 57 H49 Q46 57 46 54 V50 Q46 48 47 48 Z" delay={next()} width={1.4} />
            <Stroke d="M63 48 H73 Q74 48 74 50 V54 Q74 57 71 57 H64 Q61 57 61 54 V50 Q61 48 63 48 Z" delay={next()} width={1.4} />
            <Stroke d="M59 51 Q60 50 61 51" delay={next()} width={1.4} />
          </>
        )}
      </g>
    </svg>
  );
}
