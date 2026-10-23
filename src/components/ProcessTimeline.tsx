import React from "react";
import { Compass, PenTool, Hammer, Rocket, TrendingUp } from "lucide-react";
import SectionHeading from "./ui/SectionHeading";
import IconTile from "./ui/IconTile";
import Reveal from "./ui/Reveal";

const steps = [
  {
    title: "Discover",
    icon: Compass,
    text: "A free call to understand your business, your customers and what you want to achieve.",
    result: "Clear scope and quote",
  },
  {
    title: "Design",
    icon: PenTool,
    text: "We design the screens and flow first, so you can see and approve it before we build.",
    result: "Approved designs",
  },
  {
    title: "Build",
    icon: Hammer,
    text: "We build in small steps and show you progress regularly. You can give feedback anytime.",
    result: "Working product",
  },
  {
    title: "Launch",
    icon: Rocket,
    text: "We test everything, go live, and train your team on how to use and update it.",
    result: "Live and ready",
  },
  {
    title: "Grow",
    icon: TrendingUp,
    text: "Marketing, improvements and support after launch, so your product keeps getting better.",
    result: "More customers",
  },
];

export default function ProcessTimeline() {
  return (
    <section id="process" className="relative scroll-mt-24 overflow-hidden bg-ivory py-16 sm:py-20">
      <div className="mx-auto w-[90%]">
        <SectionHeading
          eyebrow="How We Work"
          title="A simple 5-step process"
          text="No confusing jargon. You always know what is happening, what comes next, and what it costs."
        />

        <ol className="relative grid grid-cols-1 gap-8 md:grid-cols-5 md:gap-4">
          {/* Gold thread joining the steps */}
          <span
            aria-hidden="true"
            className="absolute left-7 top-7 bottom-7 w-px bg-linear-to-b from-gold/20 via-gold to-gold/20 md:left-[10%] md:right-[10%] md:top-7 md:bottom-auto md:h-px md:w-auto md:bg-linear-to-r"
          />
          {steps.map((step, i) => (
            <Reveal as="li" key={step.title} delay={i * 0.12} className="relative flex gap-5 md:flex-col md:items-center md:text-center">
              <div className="relative z-10">
                <IconTile icon={step.icon} size="lg" />
              </div>
              <div>
                <p className="text-xs font-semibold tracking-[0.18em] text-gold-ink">STEP {String(i + 1).padStart(2, "0")}</p>
                <h3 className="mt-1 text-2xl text-ink">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{step.text}</p>
                <p className="mt-3 inline-block rounded-full border border-gold-soft bg-white px-3 py-1 text-xs font-medium text-gold-ink">
                  {step.result}
                </p>
              </div>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
