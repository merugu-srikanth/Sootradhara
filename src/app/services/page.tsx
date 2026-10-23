import type { Metadata } from "next";
import CoreServicesGrid from "@/components/CoreServicesGrid";
import ProcessTimeline from "@/components/ProcessTimeline";
import CtaBand from "@/components/CtaBand";
import Breadcrumbs from "@/components/ui/Breadcrumbs";

export const metadata: Metadata = {
  title: "IT Services in Hyderabad: Websites, Apps, Software & Marketing",
  description:
    "All Sootradhara services in one place: website development, mobile apps, custom software, e-commerce, AI automation, digital marketing, branding, ERP/CRM and cloud, from Hyderabad.",
  alternates: { canonical: "/services" },
};

export default function ServicesPage() {
  return (
    <>
      <section className="bg-white pt-28 pb-12 lg:pt-32">
        <div className="mx-auto w-[90%]">
          <Breadcrumbs items={[{ name: "Services", href: "/services" }]} />
          <div className="mt-8 max-w-3xl">
            <p className="eyebrow">Services</p>
            <h1 className="mt-3 text-4xl sm:text-5xl lg:text-6xl text-ink">
              IT services in Hyderabad to build and grow your business
            </h1>
            <p className="mt-5 text-base leading-relaxed text-slate-600 sm:text-lg">
              Pick one service or let us put together the right mix. Either way, you get one team, one point of contact and
              advice in plain language.
            </p>
          </div>
        </div>
      </section>
      <CoreServicesGrid showHeading={false} />
      <ProcessTimeline />
      <CtaBand />
    </>
  );
}
