import React from "react";
import { MapPin, MessageCircle, FileText, LifeBuoy } from "lucide-react";
import IconTile from "./ui/IconTile";
import Reveal from "./ui/Reveal";

const points = [
  {
    icon: MapPin,
    title: "Based in Hyderabad",
    text: "Meet us in person and work with a team that understands how businesses here run.",
  },
  {
    icon: MessageCircle,
    title: "Simple, honest advice",
    text: "We explain things in plain words and tell you when you don't need something.",
  },
  {
    icon: FileText,
    title: "Clear quote upfront",
    text: "A written scope, timeline and price before work starts. No hidden extras.",
  },
  {
    icon: LifeBuoy,
    title: "Support after launch",
    text: "We stay with you after go-live for fixes, updates and growth.",
  },
];

export default function WhyUs() {
  return (
    <section className="border-y border-gold-soft bg-white py-12">
      <div className="mx-auto grid w-[90%] grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {points.map((p, i) => (
          <Reveal key={p.title} delay={i * 0.08} className="flex items-start gap-4">
            <IconTile icon={p.icon} />
            <div>
              <h3 className="text-xl text-ink">{p.title}</h3>
              <p className="mt-1 text-sm leading-relaxed text-slate-600">{p.text}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
