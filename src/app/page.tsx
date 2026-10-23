import React from "react";
import type { Metadata } from "next";
import HeroSection from "@/components/HeroSection";
import CurvedShowcase from "@/components/CurvedShowcase";
import WhyUs from "@/components/WhyUs";
import CoreServicesGrid from "@/components/CoreServicesGrid";
import IndustrySolutionsTabs from "@/components/IndustrySolutionsTabs";
import ProcessTimeline from "@/components/ProcessTimeline";
import CtaBand from "@/components/CtaBand";
import ConsultationCTA from "@/components/ConsultationCTA";
import SectionHeading from "@/components/ui/SectionHeading";
import FaqList from "@/components/ui/FaqList";
import { homeFaqs } from "@/lib/faqs";

const title = "Website, App Development & Digital Marketing Company in Hyderabad | Sootradhara";
const description =
  "Sootradhara is a Hyderabad-based company for website development, mobile apps, custom software, AI automation and digital marketing. Simple advice and a free quote for startups and growing businesses.";

export const metadata: Metadata = {
  title: { absolute: title },
  description,
  alternates: { canonical: "/" },
  openGraph: { title, description, url: "/" },
};

export default function HomePage() {
  return (
    <>
      <HeroSection />

      <WhyUs />
      <CurvedShowcase />
      <CoreServicesGrid />
      <IndustrySolutionsTabs />
      <ProcessTimeline />

      {/* FAQ */}
      <section id="faq" className="scroll-mt-24 bg-ivory py-16 sm:py-20">
        <div className="mx-auto w-[90%] max-w-4xl">
          <SectionHeading eyebrow="FAQ" title="Questions we often hear" />
          <FaqList faqs={homeFaqs} />
        </div>
      </section>

      <CtaBand />
      <ConsultationCTA />
    </>
  );
}
