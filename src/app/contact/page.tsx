import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Phone, Mail, MapPin, Clock, ArrowUpRight, MessageSquareText, PhoneCall, FileCheck2 } from "lucide-react";
import ContactForm from "@/components/ContactForm";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import FaqList from "@/components/ui/FaqList";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import WhatsAppIcon from "@/components/ui/WhatsAppIcon";
import JsonLd from "@/components/JsonLd";
import { site, telHref, whatsappHref, addressLine, mapsHref, mapsEmbed } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact Us: Get a Free Quote in Hyderabad",
  description:
    "Contact Sootradhara in Hyderabad for websites, apps, software and digital marketing. Call or WhatsApp +91 91105 72323 or email info@sootradhara.com for a free quote.",
  alternates: { canonical: "/contact" },
};

const contactFaqs = [
  { q: "How soon will you reply?", a: "We reply to every enquiry within one working day. For anything urgent, call or WhatsApp us and we'll respond as quickly as we can." },
  { q: "Is the first consultation free?", a: "Yes. The first call to understand your needs and suggest a plan is free, with no obligation to work with us." },
  { q: "What should I share in my first message?", a: "A short note on your business, what you'd like to build or improve, and any deadline is enough. If you have a reference website, app or document, share it too. We'll ask the rest on the call." },
  { q: "I'm not sure which service I need. Can you help?", a: "Of course. Many clients come to us with a problem rather than a specific service. Tell us what you're trying to achieve and we'll recommend the simplest way to get there." },
  { q: "Do you share my details with anyone?", a: "No. Your details are used only to reply to your enquiry. We don't sell or share them. See our privacy policy for more." },
  { q: "Can we meet in person?", a: `Yes. Our office is at Vasavi MPM Mall, Ameerpet, ${site.address.locality}, and we're happy to meet clients in and around the city. Online meetings work just as well if that's easier for you.` },
];

const steps = [
  { icon: MessageSquareText, title: "We read your message", text: "A real person reviews your enquiry and replies within one working day." },
  { icon: PhoneCall, title: "A free call", text: "A 20–30 minute chat to understand your business, goals and timeline." },
  { icon: FileCheck2, title: "A clear plan and quote", text: "Scope, timeline and cost in INR, in writing. No pressure, no obligation." },
];

export default function ContactPage() {
  const wa = whatsappHref();

  const methods = [
    site.phone && {
      icon: <Phone className="h-5 w-5" strokeWidth={1.5} />,
      label: "Call us",
      value: site.phone,
      action: "Call now",
      href: telHref(site.phone),
      external: false,
    },
    wa && {
      icon: <WhatsAppIcon className="h-5 w-5" />,
      label: "WhatsApp",
      value: site.phone || "Chat with us",
      action: "Start a chat",
      href: wa,
      external: true,
    },
    {
      icon: <Mail className="h-5 w-5" strokeWidth={1.5} />,
      label: "Email",
      value: site.email,
      action: "Send an email",
      href: `mailto:${site.email}`,
      external: false,
    },
  ].filter(Boolean) as { icon: ReactNode; label: string; value: string; action: string; href: string; external: boolean }[];

  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "ContactPage",
          name: "Contact Sootradhara",
          url: `${site.url}/contact`,
          mainEntity: {
            "@type": "Organization",
            name: site.legalName,
            email: site.email,
            ...(site.phone ? { telephone: site.phone } : {}),
            contactPoint: {
              "@type": "ContactPoint",
              contactType: "sales",
              email: site.email,
              ...(site.phone ? { telephone: site.phone } : {}),
              areaServed: "IN",
              availableLanguage: ["English", "Telugu", "Hindi"],
            },
          },
        }}
      />

      {/* Hero */}
      <section className="relative overflow-hidden bg-ivory pb-16 pt-28 sm:pb-20 lg:pt-36">
        <div className="bg-dots pointer-events-none absolute inset-0 opacity-60" aria-hidden="true" />
        <div className="pointer-events-none absolute -right-40 -top-40 h-[520px] w-[520px] rounded-full bg-gold/15 blur-3xl" aria-hidden="true" />
        <div className="pointer-events-none absolute -bottom-48 -left-32 h-[420px] w-[420px] rounded-full bg-gold/10 blur-3xl" aria-hidden="true" />

        <div className="relative mx-auto w-[90%] max-w-[1280px]">
          <Breadcrumbs items={[{ name: "Contact", href: "/contact" }]} />
          <Reveal>
            <p className="eyebrow mt-10">Contact Sootradhara, Hyderabad</p>
            <h1 className="mt-4 max-w-4xl text-4xl leading-[1.05] text-ink sm:text-6xl lg:text-7xl">
              Let&apos;s talk about your <em className="text-gold-grad font-serif italic">project</em>
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-600">
              Tell us what you want to build or improve. We&apos;ll reply within one working day with honest advice and a free
              quote. No jargon, no pressure.
            </p>
          </Reveal>

          <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-3">
            {methods.map((m, i) => (
              <Reveal key={m.label} delay={0.1 + i * 0.08}>
                <a
                  href={m.href}
                  {...(m.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                  className="group relative flex h-full flex-col rounded-3xl border border-gold-soft bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-gold hover:shadow-[0_30px_60px_-40px_rgba(140,106,18,0.6)]"
                >
                  <span className="flex h-12 w-12 items-center justify-center rounded-full border border-gold/40 bg-ivory text-gold-ink transition-colors group-hover:border-gold group-hover:bg-gold group-hover:text-ink">
                    {m.icon}
                  </span>
                  <span className="mt-5 text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">{m.label}</span>
                  <span className="mt-1 break-all font-serif text-2xl text-ink">{m.value}</span>
                  <span className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-gold-ink">
                    {m.action}
                    <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  </span>
                </a>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Form + what happens next */}
      <section id="contact-form" className="scroll-mt-24 bg-white py-16 sm:py-24">
        <div className="mx-auto grid w-[90%] max-w-[1280px] grid-cols-1 items-start gap-12 lg:grid-cols-12">
          <div className="space-y-8 lg:sticky lg:top-28 lg:col-span-5">
            <Reveal>
              <p className="eyebrow">How it works</p>
              <h2 className="mt-3 text-3xl text-ink sm:text-4xl lg:text-5xl">What happens after you write to us</h2>
            </Reveal>

            <ol className="relative space-y-6">
              <span className="absolute bottom-6 left-6 top-6 w-px bg-linear-to-b from-gold via-gold/40 to-gold/0" aria-hidden="true" />
              {steps.map((s, i) => (
                <Reveal as="li" key={s.title} delay={i * 0.1} className="relative flex gap-5">
                  <span className="relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-gold/50 bg-white text-gold-ink">
                    <s.icon className="h-5 w-5" strokeWidth={1.4} />
                  </span>
                  <div className="pt-1">
                    <p className="text-xs font-semibold text-gold-ink">Step {i + 1}</p>
                    <h3 className="mt-0.5 font-sans text-base font-semibold text-ink">{s.title}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-slate-600">{s.text}</p>
                  </div>
                </Reveal>
              ))}
            </ol>

            <Reveal delay={0.2}>
              <div className="rounded-3xl bg-ink p-7 text-white">
                <div className="space-y-4 text-sm">
                  <p className="flex items-start gap-3">
                    <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold" strokeWidth={1.5} />
                    <span>
                      <span className="block font-semibold">{site.legalName}</span>
                      <span className="block text-white/70">{addressLine()}, India</span>
                      <a href={mapsHref} target="_blank" rel="noopener noreferrer" className="mt-1 inline-flex items-center gap-1 text-xs font-semibold text-gold hover:underline">
                        Get directions <ArrowUpRight className="h-3 w-3" />
                      </a>
                    </span>
                  </p>
                  <p className="flex items-start gap-3">
                    <Clock className="mt-0.5 h-4 w-4 shrink-0 text-gold" strokeWidth={1.5} />
                    <span className="text-white/80">{site.hours}</span>
                  </p>
                </div>
                {wa && (
                  <a
                    href={wa}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-6 flex items-center justify-center gap-2 rounded-full bg-[#25D366] px-5 py-3 text-sm font-semibold text-white transition-transform hover:scale-[1.02]"
                  >
                    <WhatsAppIcon className="h-4 w-4" /> Prefer a quick chat? WhatsApp us
                  </a>
                )}
              </div>
            </Reveal>
          </div>

          <Reveal className="lg:col-span-7" delay={0.1}>
            <ContactForm />
          </Reveal>
        </div>
      </section>

      {/* Office + map */}
      <section className="bg-white pb-16 sm:pb-24">
        <div className="mx-auto w-[90%] max-w-[1280px]">
          <Reveal>
            <div className="grid grid-cols-1 overflow-hidden rounded-[28px] border border-gold-soft lg:grid-cols-12">
              <div className="flex flex-col justify-center bg-ivory p-7 sm:p-10 lg:col-span-5">
                <p className="eyebrow">Visit our office</p>
                <h2 className="mt-3 text-3xl text-ink sm:text-4xl">Meet us in Ameerpet</h2>
                <address className="mt-5 not-italic leading-relaxed text-slate-700">
                  <span className="block font-semibold text-ink">{site.legalName}</span>
                  {addressLine()}, India
                </address>
                <p className="mt-4 flex items-center gap-2 text-sm text-slate-600">
                  <Clock className="h-4 w-4 text-gold-ink" strokeWidth={1.5} /> {site.hours}
                </p>
                <p className="mt-2 text-sm text-slate-500">Please call or WhatsApp before visiting so we can make sure the right person is available.</p>
                <a
                  href={mapsHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-gold mt-7 inline-flex w-fit items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold text-ink"
                >
                  <MapPin className="h-4 w-4" /> Get directions
                </a>
              </div>
              <div className="relative min-h-[320px] bg-ivory lg:col-span-7">
                <iframe
                  title={`Map showing ${site.legalName}, Ameerpet, Hyderabad`}
                  src={mapsEmbed}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="absolute inset-0 h-full w-full border-0 grayscale-[35%]"
                />
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-ivory py-16 sm:py-20">
        <div className="mx-auto w-[90%] max-w-4xl">
          <SectionHeading eyebrow="FAQ" title="Before you get in touch" />
          <FaqList faqs={contactFaqs} />
        </div>
      </section>
    </>
  );
}
