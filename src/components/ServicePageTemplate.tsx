import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Check, X as XIcon, Lightbulb, MapPin, ClipboardList, Users } from "lucide-react";
import type { Service } from "@/lib/services";
import { getService } from "@/lib/services";
import { industries } from "@/lib/industries";
import { serviceDetails } from "@/content/services";
import { site } from "@/lib/site";
import JsonLd from "./JsonLd";
import CtaBand from "./CtaBand";
import Breadcrumbs from "./ui/Breadcrumbs";
import FaqList from "./ui/FaqList";
import IconTile from "./ui/IconTile";
import SectionHeading from "./ui/SectionHeading";
import Reveal from "./ui/Reveal";
import PageSectionNav from "./ui/PageSectionNav";
import ProcessSteps from "./ui/ProcessSteps";
import ServiceVisual from "./visuals/ServiceVisual";
import GuideArticle from "./ui/GuideArticle";
import { serviceGuides } from "@/content/guides";
import { glossaries } from "@/content/glossary";

const areas = ["HITEC City", "Madhapur", "Gachibowli", "Kondapur", "Banjara Hills", "Jubilee Hills", "Kukatpally", "Secunderabad", "Begumpet", "Ameerpet", "Manikonda", "Uppal", "LB Nagar", "Kompally"];

const nav = [
  { id: "overview", label: "Overview" },
  { id: "who", label: "Who it's for" },
  { id: "services", label: "What we offer" },
  { id: "features", label: "Features" },
  { id: "process", label: "Process" },
  { id: "options", label: "Options" },
  { id: "cost", label: "Cost" },
  { id: "why", label: "Why us" },
  { id: "guide", label: "Buyer's guide" },
  { id: "guide-article", label: "Complete guide" },
  { id: "glossary", label: "Glossary" },
  { id: "faq", label: "FAQ" },
];

export default function ServicePageTemplate({ service }: { service: Service }) {
  const d = serviceDetails[service.slug];
  const guide = serviceGuides[service.slug];
  const glossary = glossaries[service.slug];
  // Alternate backgrounds for the lower sections (depends on whether a dark gallery is shown)
  const hasGallery = Boolean(d?.gallery?.length);
  const tones = hasGallery ? ["bg-white", "bg-ivory", "bg-white", "bg-ivory"] : ["bg-ivory", "bg-white", "bg-ivory", "bg-white"];
  const [localBg, glossaryBg, faqBg, relatedBg] = tones;
  const related = service.related.map(getService).filter((s): s is Service => Boolean(s));
  const relatedIndustries = industries.filter((i) => i.services.includes(service.slug));
  const allFaqs = [...service.faqs, ...(d?.moreFaqs ?? [])];

  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Service",
          name: service.name,
          serviceType: service.name,
          description: service.metaDescription,
          url: `${site.url}/services/${service.slug}`,
          provider: { "@id": `${site.url}/#business` },
          areaServed: [
            { "@type": "City", name: "Hyderabad" },
            { "@type": "Country", name: "India" },
          ],
          ...(d
            ? {
                hasOfferCatalog: {
                  "@type": "OfferCatalog",
                  name: `${service.name} services`,
                  itemListElement: d.serviceTypes.map((t) => ({ "@type": "Offer", itemOffered: { "@type": "Service", name: t.title, description: t.text } })),
                },
              }
            : {}),
        }}
      />

      {/* ---------- Hero ---------- */}
      <section className="relative isolate overflow-hidden bg-white pt-28 pb-16 lg:pt-32 lg:pb-24">
        <div className="pointer-events-none absolute inset-0 -z-10" aria-hidden="true">
          <div className="absolute -right-40 top-0 h-[560px] w-[560px] rounded-full bg-[radial-gradient(circle,rgba(243,217,139,0.3),transparent_65%)] blur-2xl" />
          <div className="bg-dots absolute inset-0 [mask-image:radial-gradient(ellipse_at_75%_35%,#000_0%,transparent_55%)]" />
        </div>
        <div className="mx-auto w-[90%] max-w-[1280px]">
          <Breadcrumbs items={[{ name: "Services", href: "/services" }, { name: service.name, href: `/services/${service.slug}` }]} />
          <div className="mt-8 grid grid-cols-1 items-center gap-14 lg:grid-cols-12">
            <Reveal className="space-y-6 lg:col-span-6">
              <p className="eyebrow">{service.name} · Hyderabad</p>
              <h1 className="text-4xl sm:text-5xl lg:text-[3.6rem] text-ink">{service.h1}</h1>
              <p className="max-w-xl text-base leading-relaxed text-slate-600 sm:text-lg">{service.intro}</p>
              {d && (
                <ul className="flex flex-wrap gap-2">
                  {d.highlights.map((h) => (
                    <li key={h} className="inline-flex items-center gap-1.5 rounded-full border border-gold-soft bg-white px-3 py-1.5 text-xs font-medium text-ink">
                      <Check className="h-3.5 w-3.5 text-gold" strokeWidth={2.5} /> {h}
                    </li>
                  ))}
                </ul>
              )}
              <div className="flex flex-wrap gap-4 pt-2">
                <Link href="/contact" className="btn-gold group inline-flex h-13 items-center gap-2 rounded-full px-7 text-sm font-semibold">
                  Get a Free Quote <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
                <a href="#process" className="inline-flex h-13 items-center rounded-full border border-gold-soft bg-white px-7 text-sm font-semibold text-ink transition-colors hover:border-gold">
                  See how we work
                </a>
              </div>
            </Reveal>
            <div className="lg:col-span-6">{d && <ServiceVisual kind={d.visual} />}</div>
          </div>
        </div>
      </section>

      {d && <PageSectionNav items={nav} />}

      {d && (
        <>
          {/* ---------- Overview ---------- */}
          <section id="overview" className="scroll-mt-32 bg-white py-16 sm:py-24">
            <div className="mx-auto grid w-[90%] max-w-[1280px] grid-cols-1 gap-12 lg:grid-cols-12">
              <Reveal className="lg:col-span-7">
                <p className="eyebrow">Overview</p>
                <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl text-ink">{d.overview.heading}</h2>
                <div className="mt-6 space-y-5 text-base leading-[1.8] text-slate-600 sm:text-[17px]">
                  {d.overview.paragraphs.map((p, i) => (
                    <p key={i}>{p}</p>
                  ))}
                </div>
              </Reveal>
              <div className="lg:col-span-5">
                <div className="sticky top-36 rounded-3xl border border-gold-soft bg-ivory p-7 sm:p-8">
                  <div className="flex items-center gap-3">
                    <IconTile icon={ClipboardList} className="bg-white!" />
                    <h3 className="text-2xl text-ink">Signs you need this</h3>
                  </div>
                  <ul className="mt-6 space-y-3.5">
                    {d.signs.map((s) => (
                      <li key={s} className="flex items-start gap-3 text-sm leading-relaxed text-slate-700">
                        <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-gold text-ink">
                          <Check className="h-3 w-3" strokeWidth={3} />
                        </span>
                        {s}
                      </li>
                    ))}
                  </ul>
                  <Link href="/contact" className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-gold-ink">
                    Sounds familiar? Let&apos;s talk <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            </div>
          </section>

          {/* ---------- Who it's for ---------- */}
          <section id="who" className="scroll-mt-32 bg-ivory py-16 sm:py-24">
            <div className="mx-auto w-[90%] max-w-[1280px]">
              <SectionHeading eyebrow="Who it's for" title="Built for businesses like yours" />
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
                {d.audiences.map((a, i) => (
                  <Reveal key={a.title} delay={(i % 3) * 0.08}>
                    <div className="group h-full rounded-3xl border border-gold-soft bg-white p-7 transition-all duration-500 hover:-translate-y-1 hover:border-gold hover:shadow-[0_24px_48px_-28px_rgba(140,106,18,0.45)]">
                      <IconTile icon={Users} />
                      <h3 className="mt-4 text-2xl text-ink">{a.title}</h3>
                      <p className="mt-2 text-sm leading-relaxed text-slate-600">{a.text}</p>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </section>
        </>
      )}

      {/* ---------- What we offer ---------- */}
      <section id="services" className="scroll-mt-32 bg-white py-16 sm:py-24">
        <div className="mx-auto w-[90%] max-w-[1280px]">
          <SectionHeading eyebrow="What we offer" title={`Our ${service.name} services`} text="Pick what you need today. We'll help you plan what comes next." />
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {service.offerings.map((o, i) => (
              <Reveal key={o.title} delay={i * 0.1}>
                <div className="card-shine relative h-full overflow-hidden rounded-3xl bg-ink p-8 text-white">
                  <span className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-gold/20 blur-3xl" />
                  <p className="font-serif text-5xl text-gold">{String(i + 1).padStart(2, "0")}</p>
                  <h3 className="mt-4 text-2xl text-white">{o.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-white/70">{o.description}</p>
                  <ul className="mt-6 space-y-2.5 border-t border-white/10 pt-5">
                    {o.points.map((p) => (
                      <li key={p} className="flex items-start gap-2 text-sm text-white/85">
                        <Check className="mt-0.5 h-4 w-4 shrink-0 text-gold" strokeWidth={2} /> {p}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>

          {d && (
            <div className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {d.serviceTypes.map((t, i) => (
                <Reveal key={t.title} delay={(i % 3) * 0.06}>
                  <div className="h-full rounded-3xl border border-gold-soft p-6 transition-colors hover:border-gold hover:bg-ivory/50">
                    <h3 className="text-xl text-ink">{t.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-slate-600">{t.text}</p>
                    <p className="mt-4 inline-flex rounded-full bg-ivory px-3 py-1 text-xs font-medium text-gold-ink">Best for: {t.bestFor}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          )}
        </div>
      </section>

      {d && (
        <>
          {/* ---------- Features ---------- */}
          <section id="features" className="scroll-mt-32 bg-ivory py-16 sm:py-24">
            <div className="mx-auto w-[90%] max-w-[1280px]">
              <SectionHeading eyebrow="Features" title="What's built in" text="The details that make the difference, included wherever they fit your project." />
              <div className="grid grid-cols-1 gap-x-10 gap-y-2 md:grid-cols-2">
                {d.features.map((f, i) => (
                  <Reveal key={f.title} delay={(i % 2) * 0.06}>
                    <div className="flex gap-5 border-b border-gold-soft py-6">
                      <span className="font-serif text-3xl leading-none text-gold">{String(i + 1).padStart(2, "0")}</span>
                      <div>
                        <h3 className="text-xl text-ink">{f.title}</h3>
                        <p className="mt-1.5 text-sm leading-relaxed text-slate-600">{f.text}</p>
                      </div>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </section>

          {/* ---------- Benefits (dark) ---------- */}
          <section className="relative isolate overflow-hidden bg-ink py-16 text-white sm:py-24">
            <div className="pointer-events-none absolute inset-0 -z-10" aria-hidden="true">
              <div className="absolute left-1/2 top-1/2 h-[380px] w-[80%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gold/10 blur-[100px]" />
              <div className="bg-dots-dark absolute inset-0 [mask-image:radial-gradient(ellipse_at_center,#000_10%,transparent_70%)]" />
            </div>
            <div className="mx-auto w-[90%] max-w-[1280px]">
              <SectionHeading dark eyebrow="The results" title="What it means for your business" />
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
                {d.benefits.map((b, i) => (
                  <Reveal key={b.title} delay={i * 0.08}>
                    <div className="h-full rounded-3xl border border-white/10 bg-white/[0.04] p-7 backdrop-blur transition-colors hover:border-gold/50">
                      <span className="block h-px w-10 bg-gold" />
                      <h3 className="mt-5 text-2xl text-white">{b.title}</h3>
                      <p className="mt-2 text-sm leading-relaxed text-white/65">{b.text}</p>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </section>

          {/* ---------- Process ---------- */}
          <section id="process" className="scroll-mt-32 bg-white py-16 sm:py-24">
            <div className="mx-auto w-[90%] max-w-[1280px]">
              <SectionHeading eyebrow="Our process" title="How your project comes together" text="Clear steps, regular check-ins and no surprises. Timelines are typical and depend on your scope." />
              <ProcessSteps steps={d.process} />
            </div>
          </section>

          {/* ---------- Options ---------- */}
          <section id="options" className="scroll-mt-32 bg-ivory py-16 sm:py-24">
            <div className="mx-auto w-[90%] max-w-[1280px]">
              <SectionHeading eyebrow="Options" title="Choose a starting point" text="Every project is quoted after a free call. These common starting points help you picture what fits." />
              <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
                {d.options.map((o, i) => {
                  const featured = i === 1;
                  return (
                    <Reveal key={o.name} delay={i * 0.1}>
                      <div
                        className={`relative flex h-full flex-col rounded-3xl p-8 transition-transform duration-500 hover:-translate-y-1 ${
                          featured ? "bg-ink text-white shadow-[0_40px_80px_-40px_rgba(20,18,15,0.7)]" : "border border-gold-soft bg-white"
                        }`}
                      >
                        {featured && <span className="absolute right-6 top-6 rounded-full bg-gold px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-ink">Recommended</span>}
                        <h3 className={`text-3xl ${featured ? "text-white" : "text-ink"}`}>{o.name}</h3>
                        <p className={`mt-2 text-sm leading-relaxed ${featured ? "text-white/70" : "text-slate-600"}`}>{o.summary}</p>
                        <ul className={`mt-6 flex-1 space-y-3 border-t pt-6 ${featured ? "border-white/10" : "border-gold-soft"}`}>
                          {o.includes.map((inc) => (
                            <li key={inc} className={`flex items-start gap-2.5 text-sm ${featured ? "text-white/85" : "text-slate-700"}`}>
                              <Check className="mt-0.5 h-4 w-4 shrink-0 text-gold" strokeWidth={2.5} /> {inc}
                            </li>
                          ))}
                        </ul>
                        <div className={`mt-6 space-y-1 text-xs ${featured ? "text-white/60" : "text-slate-500"}`}>
                          <p><b className={featured ? "text-white" : "text-ink"}>Best for:</b> {o.bestFor}</p>
                          <p><b className={featured ? "text-white" : "text-ink"}>Timeline:</b> {o.timeline}</p>
                        </div>
                        <Link
                          href="/contact"
                          className={`mt-6 inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold ${
                            featured ? "btn-gold" : "border border-gold text-gold-ink transition-colors hover:bg-ivory"
                          }`}
                        >
                          Get a quote <ArrowRight className="h-4 w-4" />
                        </Link>
                      </div>
                    </Reveal>
                  );
                })}
              </div>
            </div>
          </section>

          {/* ---------- Cost ---------- */}
          <section id="cost" className="scroll-mt-32 bg-white py-16 sm:py-24">
            <div className="mx-auto grid w-[90%] max-w-[1280px] grid-cols-1 gap-12 lg:grid-cols-12">
              <div className="lg:col-span-7">
                <Reveal>
                  <p className="eyebrow">Pricing</p>
                  <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl text-ink">What affects the cost?</h2>
                  <p className="mt-4 text-base leading-relaxed text-slate-600">
                    We don&apos;t believe in one-size-fits-all price lists. Your quote depends on what you actually need. These are the main factors:
                  </p>
                </Reveal>
                <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
                  {d.costFactors.map((c, i) => (
                    <Reveal key={c.title} delay={(i % 2) * 0.06}>
                      <div className="h-full rounded-2xl border border-gold-soft p-5 transition-colors hover:border-gold">
                        <h3 className="text-lg text-ink">{c.title}</h3>
                        <p className="mt-1.5 text-sm leading-relaxed text-slate-600">{c.text}</p>
                      </div>
                    </Reveal>
                  ))}
                </div>
              </div>
              <div className="lg:col-span-5">
                <div className="sticky top-36 overflow-hidden rounded-3xl bg-ink p-8 text-white">
                  <span className="pointer-events-none absolute -bottom-20 -right-20 h-56 w-56 rounded-full bg-gold/25 blur-3xl" />
                  <h3 className="relative text-3xl text-white">Get an accurate estimate</h3>
                  <p className="relative mt-2 text-sm text-white/65">Share these details and we&apos;ll send a clear, written quote:</p>
                  <ol className="relative mt-6 space-y-3">
                    {d.estimateTips.map((t, i) => (
                      <li key={t} className="flex items-start gap-3 text-sm text-white/85">
                        <span className="grid h-6 w-6 shrink-0 place-items-center rounded-full border border-gold/60 font-serif text-xs text-gold">{i + 1}</span>
                        {t}
                      </li>
                    ))}
                  </ol>
                  <Link href="/contact" className="btn-gold relative mt-8 inline-flex w-full items-center justify-center gap-2 rounded-full px-6 py-3.5 text-sm font-semibold">
                    Request my free quote <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            </div>
          </section>
        </>
      )}

      {/* ---------- Tools + deliverables ---------- */}
      <section className="border-y border-gold-soft bg-ivory py-16 sm:py-24">
        <div className="mx-auto grid w-[90%] max-w-[1280px] grid-cols-1 gap-12 lg:grid-cols-2">
          <Reveal>
            <p className="eyebrow">Tools we use</p>
            <h2 className="mt-3 text-3xl sm:text-4xl text-ink">Proven tools, chosen for your needs</h2>
            <ul className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2">
              {service.tools.map((t) => (
                <li key={t.name} className="rounded-2xl border border-gold-soft bg-white p-4 transition-colors hover:border-gold">
                  <span className="block text-sm font-semibold text-ink">{t.name}</span>
                  <span className="block text-xs text-slate-500">{t.use}</span>
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="eyebrow">What you get</p>
            <h2 className="mt-3 text-3xl sm:text-4xl text-ink">Delivered to you</h2>
            <ul className="mt-8 space-y-3">
              {service.deliverables.map((x) => (
                <li key={x} className="flex items-start gap-3 rounded-2xl border border-gold-soft bg-white p-4 text-sm text-slate-700">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-gold" strokeWidth={2} /> {x}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      {/* ---------- Why us ---------- */}
      <section id="why" className="scroll-mt-32 bg-white py-16 sm:py-24">
        <div className="mx-auto w-[90%] max-w-[1280px]">
          <SectionHeading eyebrow="Why Sootradhara" title={`Why choose us for ${service.name}`} />
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {service.whyUs.map((w, i) => (
              <Reveal key={w.title} delay={i * 0.1}>
                <div className="border-t-2 border-gold pt-6">
                  <h3 className="text-2xl text-ink">{w.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">{w.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {d && (
        <>
          {/* ---------- Buyer's guide ---------- */}
          <section id="guide" className="scroll-mt-32 bg-ivory py-16 sm:py-24">
            <div className="mx-auto w-[90%] max-w-[1280px]">
              <SectionHeading eyebrow="Buyer's guide" title="Get it right the first time" text="Honest advice we share with every client, whether or not you work with us." />
              <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
                <Reveal>
                  <div className="h-full rounded-3xl border border-gold-soft bg-white p-7 sm:p-8">
                    <h3 className="flex items-center gap-3 text-2xl text-ink">
                      <span className="grid h-9 w-9 place-items-center rounded-full bg-[#fbeee9] text-[#b4553a]"><XIcon className="h-4 w-4" /></span>
                      Common mistakes to avoid
                    </h3>
                    <ul className="mt-6 space-y-5">
                      {d.mistakes.map((m) => (
                        <li key={m.title}>
                          <p className="font-semibold text-ink">{m.title}</p>
                          <p className="mt-1 text-sm leading-relaxed text-slate-600">{m.text}</p>
                        </li>
                      ))}
                    </ul>
                  </div>
                </Reveal>
                <Reveal delay={0.1}>
                  <div className="h-full rounded-3xl border border-gold-soft bg-white p-7 sm:p-8">
                    <h3 className="flex items-center gap-3 text-2xl text-ink">
                      <span className="grid h-9 w-9 place-items-center rounded-full bg-ivory text-gold-ink"><Lightbulb className="h-4 w-4" /></span>
                      How to choose the right partner
                    </h3>
                    <ul className="mt-6 space-y-5">
                      {d.chooseGuide.map((c) => (
                        <li key={c.title} className="flex gap-3">
                          <Check className="mt-1 h-4 w-4 shrink-0 text-gold" strokeWidth={2.5} />
                          <span>
                            <span className="block font-semibold text-ink">{c.title}</span>
                            <span className="mt-1 block text-sm leading-relaxed text-slate-600">{c.text}</span>
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </Reveal>
              </div>
            </div>
          </section>

          {guide && <GuideArticle guide={guide} />}

          {/* ---------- Concept gallery ---------- */}
          {d.gallery && d.gallery.length > 0 && (
            <section className="relative isolate overflow-hidden bg-ink py-16 sm:py-24">
              <div className="pointer-events-none absolute inset-0 -z-10 bg-dots-dark [mask-image:radial-gradient(ellipse_at_center,#000_10%,transparent_70%)]" aria-hidden="true" />
              <div className="mx-auto w-[90%] max-w-[1280px]">
                <SectionHeading dark eyebrow="Concept work" title="A glimpse of our design style" text="Concept designs made by our team to show our craft. Not client projects." />
                <div className={`grid grid-cols-1 gap-6 ${d.gallery.length === 2 ? "md:grid-cols-2" : "md:grid-cols-3"}`}>
                  {d.gallery.map((g, i) => (
                    <Reveal key={g.title} delay={i * 0.1}>
                      <figure className="card-shine group relative overflow-hidden rounded-3xl border border-gold/30">
                        <div className="relative aspect-[4/3] overflow-hidden">
                          <Image src={g.image} alt={`${g.title} (concept design)`} fill sizes="(min-width: 768px) 33vw, 90vw" className="object-cover transition-transform duration-700 group-hover:scale-110" />
                          <span className="absolute inset-0 bg-linear-to-t from-ink via-ink/20 to-transparent" />
                          <span className="absolute left-4 top-4 rounded-full border border-gold/40 bg-black/50 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-gold backdrop-blur">Concept</span>
                        </div>
                        <figcaption className="absolute inset-x-4 bottom-4">
                          <span className="block font-serif text-2xl text-white">{g.title}</span>
                          <span className="text-xs text-white/60">{g.caption}</span>
                        </figcaption>
                      </figure>
                    </Reveal>
                  ))}
                </div>
              </div>
            </section>
          )}

          {/* ---------- Local ---------- */}
          <section className={`${localBg} py-16 sm:py-24`}>
            <div className="mx-auto grid w-[90%] max-w-[1280px] grid-cols-1 items-start gap-12 lg:grid-cols-12">
              <Reveal className="lg:col-span-7">
                <p className="eyebrow">Local</p>
                <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl text-ink">{d.local.heading}</h2>
                <div className="mt-6 space-y-5 text-base leading-[1.8] text-slate-600">
                  {d.local.paragraphs.map((p, i) => (
                    <p key={i}>{p}</p>
                  ))}
                </div>
              </Reveal>
              <Reveal delay={0.1} className="lg:col-span-5">
                <div className={`rounded-3xl border border-gold-soft p-7 ${localBg === "bg-ivory" ? "bg-white" : "bg-ivory"}`}>
                  <h3 className="flex items-center gap-2 text-xl text-ink"><MapPin className="h-5 w-5 text-gold-ink" /> Areas we serve</h3>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {areas.map((a) => (
                      <span key={a} className="rounded-full border border-gold-soft bg-white px-3 py-1.5 text-xs text-slate-700">{a}</span>
                    ))}
                    <span className="rounded-full bg-ink px-3 py-1.5 text-xs text-white">+ all of India, remotely</span>
                  </div>
                </div>
                {relatedIndustries.length > 0 && (
                  <div className="mt-5 rounded-3xl border border-gold-soft p-7">
                    <h3 className="text-xl text-ink">Industries we build this for</h3>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {relatedIndustries.map((ind) => (
                        <Link key={ind.slug} href={`/industries/${ind.slug}`} className="inline-flex items-center gap-2 rounded-full border border-gold-soft px-3 py-1.5 text-xs font-medium text-ink transition-colors hover:border-gold hover:text-gold-ink">
                          <ind.icon className="h-3.5 w-3.5 text-gold-ink" strokeWidth={1.5} /> {ind.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </Reveal>
            </div>
          </section>
        </>
      )}

      {/* ---------- Glossary ---------- */}
      {glossary && (
        <section id="glossary" className={`scroll-mt-32 ${glossaryBg} py-16 sm:py-24`}>
          <div className="mx-auto w-[90%] max-w-[1280px]">
            <SectionHeading eyebrow="Glossary" title="Terms explained simply" text="Tech words you may hear during your project, in plain English." />
            <dl className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {glossary.map((g, i) => (
                <Reveal key={g.title} delay={(i % 4) * 0.05}>
                  <div className="h-full rounded-2xl border border-gold-soft bg-white p-5 transition-colors hover:border-gold">
                    <dt className="font-serif text-xl text-ink">{g.title}</dt>
                    <dd className="mt-1.5 text-sm leading-relaxed text-slate-600">{g.text}</dd>
                  </div>
                </Reveal>
              ))}
            </dl>
          </div>
        </section>
      )}

      {/* ---------- FAQ ---------- */}
      <section id="faq" className={`scroll-mt-32 ${faqBg} py-16 sm:py-24`}>
        <div className="mx-auto w-[90%] max-w-4xl">
          <SectionHeading eyebrow="FAQ" title={`${service.name}: common questions`} />
          <FaqList faqs={allFaqs} />
        </div>
      </section>

      {/* ---------- Related ---------- */}
      {related.length > 0 && (
        <section className={`${relatedBg} py-16 sm:py-24`}>
          <div className="mx-auto w-[90%] max-w-[1280px]">
            <SectionHeading eyebrow="Related services" title="You may also need" />
            <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
              {related.map((r, i) => (
                <Reveal key={r.slug} delay={i * 0.08}>
                  <Link href={`/services/${r.slug}`} className="card-shine group relative flex h-full items-start gap-4 overflow-hidden rounded-3xl border border-gold-soft bg-white p-6 transition-all duration-500 hover:-translate-y-1 hover:border-gold">
                    <IconTile icon={r.icon} />
                    <span>
                      <span className="block font-serif text-2xl text-ink group-hover:text-gold-ink">{r.name}</span>
                      <span className="mt-1 block text-sm text-slate-600">{r.tagline}</span>
                    </span>
                  </Link>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}

      <CtaBand
        title={`Let's build your ${service.ctaNoun}. Get a free quote.`}
        text="Tell us what you have in mind. We'll reply with honest advice, a clear plan and a fixed quote."
        whatsappMessage={`Hi Sootradhara, I'd like a quote for ${service.name}.`}
      />
    </>
  );
}
