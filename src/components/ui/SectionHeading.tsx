import React from "react";
import Reveal from "./Reveal";

export default function SectionHeading({
  eyebrow,
  title,
  text,
  align = "center",
  as: Tag = "h2",
  dark = false,
}: {
  eyebrow?: string;
  title: React.ReactNode;
  text?: React.ReactNode;
  align?: "center" | "left";
  as?: "h1" | "h2";
  dark?: boolean;
}) {
  const centered = align === "center";
  return (
    <Reveal className={`${centered ? "text-center mx-auto" : ""} max-w-3xl mb-10`}>
      {eyebrow && <p className={`eyebrow ${dark ? "text-gold!" : ""}`}>{eyebrow}</p>}
      <Tag
        className={`mt-3 text-3xl sm:text-4xl lg:text-5xl ${dark ? "text-white" : "text-ink"}`}
      >
        {title}
      </Tag>
      {text && (
        <p className={`mt-4 text-base sm:text-lg leading-relaxed ${dark ? "text-white/70" : "text-slate-600"}`}>
          {text}
        </p>
      )}
    </Reveal>
  );
}
