import type { Metadata } from "next";
import { Eye, Handshake, Lightbulb, Heart } from "lucide-react";
import CtaBand from "@/components/CtaBand";
import ProcessTimeline from "@/components/ProcessTimeline";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import GoldThread from "@/components/ui/GoldThread";
import IconTile from "@/components/ui/IconTile";
import SectionHeading from "@/components/ui/SectionHeading";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "About Us: IT & Digital Company in Hyderabad",
  description:
    "Sootradhara Ventures Pvt Ltd is a Hyderabad-based team building websites, apps, software and marketing for startups and growing businesses. Learn who we are and how we work.",
  alternates: { canonical: "/about" },
};

const values = [
  { icon: Eye, title: "Clarity", text: "Plain language, clear quotes and no surprises. You always know where your project stands." },
  { icon: Handshake, title: "Partnership", text: "We treat your business like our own and stay with you after launch." },
  { icon: Lightbulb, title: "Practical thinking", text: "We recommend what will work for your budget and stage, not what sounds impressive." },
  { icon: Heart, title: "Care for detail", text: "Good design and careful building, because small details build customer trust." },
];

export default function AboutPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-white pt-28 lg:pt-32">
        <div className="relative mx-auto w-[90%]">
          <Breadcrumbs items={[{ name: "About", href: "/about" }]} />
          <div className="mt-8 max-w-3xl">
            <p className="eyebrow">About Sootradhara</p>
            <h1 className="mt-3 text-4xl sm:text-5xl lg:text-6xl text-ink">
              A Hyderabad team that ties technology to business goals
            </h1>
            <p className="mt-5 text-base leading-relaxed text-slate-600 sm:text-lg">
              {site.legalName} is a technology company based in Hyderabad. We build websites, mobile apps, custom software and
              marketing for startups and growing businesses, and we explain every step in simple words.
            </p>
          </div>
        </div>
      <GoldThread className="mt-12 h-16 w-full sm:h-24" />
      </section>

      {/* Name story */}
      <section className="bg-ivory py-16 sm:py-20">
        <div className="mx-auto grid w-[90%] grid-cols-1 items-center gap-12 lg:grid-cols-2">
          <div>
            <p className="eyebrow">Our name</p>
            <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl text-ink">The one who holds the threads</h2>
          </div>
          <div className="space-y-4 text-base leading-relaxed text-slate-600">
            <p>
              In Sanskrit, <em>sootradhara</em> means &ldquo;the one who holds the threads&rdquo;. In traditional Indian theatre, the
              sootradhara is the guide who brings every part of the story together.
            </p>
            <p>
              That&apos;s what we do for our clients. Design, development, cloud and marketing are separate threads. We hold them
              together so your business gets one clear, working result. The gold thread you see across this site is a reminder of
              that promise.
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto w-[90%]">
          <SectionHeading eyebrow="What we value" title="How we like to work" />
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((v) => (
              <div key={v.title}>
                <IconTile icon={v.icon} size="lg" />
                <h3 className="mt-4 text-2xl text-ink">{v.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{v.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ProcessTimeline />
      <CtaBand />
    </>
  );
}
