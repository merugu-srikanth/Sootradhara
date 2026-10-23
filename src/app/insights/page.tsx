import type { Metadata } from "next";
import CtaBand from "@/components/CtaBand";
import { InsightCard } from "@/components/InsightsPreview";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import { insights } from "@/lib/insights";

export const metadata: Metadata = {
  title: "Insights: Guides on Websites, Apps & Digital Marketing",
  description:
    "Simple guides for business owners on websites, mobile apps, AI automation and digital marketing, from the Sootradhara team in Hyderabad.",
  alternates: { canonical: "/insights" },
};

export default function InsightsPage() {
  return (
    <>
      <section className="bg-white pt-28 pb-16 lg:pt-32">
        <div className="mx-auto w-[90%]">
          <Breadcrumbs items={[{ name: "Insights", href: "/insights" }]} />
          <div className="mt-8 max-w-3xl">
            <p className="eyebrow">Insights</p>
            <h1 className="mt-3 text-4xl sm:text-5xl lg:text-6xl text-ink">Simple guides for business owners</h1>
            <p className="mt-5 text-base leading-relaxed text-slate-600 sm:text-lg">
              We&apos;re writing practical articles on websites, apps, marketing and automation. Here&apos;s what&apos;s coming first.
            </p>
          </div>
          <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {insights.map((item) => (
              <InsightCard key={item.title} item={item} />
            ))}
          </div>
        </div>
      </section>
      <CtaBand title="Have a question we haven't covered?" text="Ask us directly. We're happy to help, even if you're just exploring." />
    </>
  );
}
