import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import WhatsAppIcon from "@/components/ui/WhatsAppIcon";
import GoldThread from "@/components/ui/GoldThread";
import { whatsappHref } from "@/lib/site";

/** Dark call-to-action band. */
export default function CtaBand({
  title = "Have a project in mind? Let's talk.",
  text = "Tell us what you need. We'll reply with honest advice, a clear plan and a free quote.",
  whatsappMessage,
}: {
  title?: string;
  text?: string;
  whatsappMessage?: string;
}) {
  const wa = whatsappHref(whatsappMessage);
  return (
    <section className="relative overflow-hidden bg-ink py-16 sm:py-20">
      <div className="relative mx-auto w-[90%] max-w-4xl text-center">
        <GoldThread className="mx-auto mb-8 h-10 w-full max-w-xl opacity-80" />
        <h2 className="text-3xl sm:text-4xl lg:text-5xl text-white">{title}</h2>
        <p className="mx-auto mt-4 max-w-2xl text-white/70 text-base sm:text-lg">{text}</p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <Link
            href="/contact"
            className="btn-gold inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-sm font-semibold"
          >
            Get a Free Quote
            <ArrowRight className="h-4 w-4" />
          </Link>
          {wa && (
            <a
              href={wa}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-white/30 px-7 py-3.5 text-sm font-semibold text-white transition-colors hover:border-gold hover:text-gold"
            >
              <WhatsAppIcon className="h-4 w-4" />
              Chat on WhatsApp
            </a>
          )}
        </div>
      </div>
    </section>
  );
}
