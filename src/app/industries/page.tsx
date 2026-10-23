import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { industries } from "@/lib/industries";
import CtaBand from "@/components/CtaBand";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import IconTile from "@/components/ui/IconTile";

export const metadata: Metadata = {
  title: "Industries We Serve in Hyderabad",
  description:
    "Websites, apps and software for real estate, education, healthcare, startups, retail, restaurants and finance businesses in Hyderabad and across India.",
  alternates: { canonical: "/industries" },
};

export default function IndustriesPage() {
  return (
    <>
      <section className="bg-white pt-28 pb-16 lg:pt-32">
        <div className="mx-auto w-[90%]">
          <Breadcrumbs items={[{ name: "Industries", href: "/industries" }]} />
          <div className="mt-8 max-w-3xl">
            <p className="eyebrow">Industries</p>
            <h1 className="mt-3 text-4xl sm:text-5xl lg:text-6xl text-ink">Industries we serve</h1>
            <p className="mt-5 text-base leading-relaxed text-slate-600 sm:text-lg">
              We bring ideas and solutions that suit how your industry works, so you get results faster.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {industries.map((ind) => (
              <Link
                key={ind.slug}
                href={`/industries/${ind.slug}`}
                className="group flex flex-col justify-between rounded-3xl border border-gold-soft bg-white p-7 transition-colors hover:border-gold"
              >
                <div>
                  <IconTile icon={ind.icon} size="lg" />
                  <h2 className="mt-5 text-2xl text-ink group-hover:text-gold-ink">{ind.name}</h2>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">{ind.tagline}</p>
                </div>
                <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-gold-ink">
                  Learn more <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <CtaBand />
    </>
  );
}
