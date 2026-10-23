import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, Check, AlertCircle, Plug, ShieldCheck } from "lucide-react";
import { industries, getIndustry } from "@/lib/industries";
import { getService, type Service } from "@/lib/services";
import { industryDetails } from "@/content/industries";
import CtaBand from "@/components/CtaBand";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import FaqList from "@/components/ui/FaqList";
import IconTile from "@/components/ui/IconTile";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import PageSectionNav from "@/components/ui/PageSectionNav";
import ProcessSteps from "@/components/ui/ProcessSteps";
import ServiceVisual from "@/components/visuals/ServiceVisual";
import GuideArticle from "@/components/ui/GuideArticle";
import { industryGuides } from "@/content/guides";
import { industryExtras } from "@/content/industry-extras";
import ReadinessChecklist from "@/components/ui/ReadinessChecklist";
import { industryGlossaries } from "@/content/industry-glossary";
import { industryMore, industryMoreFaqs } from "@/content/industry-more";

export function generateStaticParams() {
  return industries.map((i) => ({ slug: i.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const industry = getIndustry(slug);
  if (!industry) return {};
  const url = `/industries/${industry.slug}`;
  return {
    title: industry.metaTitle,
    description: industry.metaDescription,
    alternates: { canonical: url },
    openGraph: { title: `${industry.metaTitle} | Sootradhara`, description: industry.metaDescription, url },
  };
}

const nav = [
  { id: "overview", label: "Overview" },
  { id: "challenges", label: "Challenges" },
  { id: "solutions", label: "Solutions" },
  { id: "scenarios", label: "Examples" },
  { id: "journey", label: "Customer journey" },
  { id: "integrations", label: "Integrations" },
  { id: "considerations", label: "Things to know" },
  { id: "checklist", label: "Self-check" },
  { id: "start", label: "Getting started" },
  { id: "guide-article", label: "Complete guide" },
  { id: "glossary", label: "Glossary" },
  { id: "faq", label: "FAQ" },
];

export default async function IndustryPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const industry = getIndustry(slug);
  if (!industry) notFound();
  const d = industryDetails[industry.slug];
  const related = industry.services.map(getService).filter((s): s is Service => Boolean(s));
  const g = industryGuides[industry.slug];
  const x = industryExtras[industry.slug];
  const glossary = industryGlossaries[industry.slug];
  const more = industryMore[industry.slug];
  const faqs = [...industry.faqs, ...(d?.moreFaqs ?? []), ...(g?.faqs ?? []), ...(industryMoreFaqs[industry.slug] ?? [])];

  return (
    <>
      {/* ---------- Hero ---------- */}
      <section className="relative isolate overflow-hidden bg-white pt-28 pb-16 lg:pt-32 lg:pb-24">
        <div className="pointer-events-none absolute inset-0 -z-10" aria-hidden="true">
          <div className="absolute -right-40 top-0 h-[560px] w-[560px] rounded-full bg-[radial-gradient(circle,rgba(243,217,139,0.3),transparent_65%)] blur-2xl" />
          <div className="bg-dots absolute inset-0 [mask-image:radial-gradient(ellipse_at_75%_35%,#000_0%,transparent_55%)]" />
        </div>
        <div className="mx-auto w-[90%] max-w-[1280px]">
          <Breadcrumbs items={[{ name: "Industries", href: "/industries" }, { name: industry.name, href: `/industries/${industry.slug}` }]} />
          <div className="mt-8 grid grid-cols-1 items-center gap-14 lg:grid-cols-12">
            <Reveal className="space-y-6 lg:col-span-6">
              <p className="eyebrow">{industry.name} · Hyderabad</p>
              <h1 className="text-4xl sm:text-5xl lg:text-[3.6rem] text-ink">{industry.h1}</h1>
              <p className="max-w-xl text-base leading-relaxed text-slate-600 sm:text-lg">{industry.intro}</p>
              <div className="flex flex-wrap gap-4 pt-2">
                <Link href="/contact" className="btn-gold group inline-flex h-13 items-center gap-2 rounded-full px-7 text-sm font-semibold">
                  Get a Free Quote <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
                <a href="#solutions" className="inline-flex h-13 items-center rounded-full border border-gold-soft bg-white px-7 text-sm font-semibold text-ink transition-colors hover:border-gold">
                  See solutions
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
          {/* ---------- Overview + landscape ---------- */}
          <section id="overview" className="scroll-mt-32 bg-white py-16 sm:py-24">
            <div className="mx-auto grid w-[90%] max-w-[1280px] grid-cols-1 gap-12 lg:grid-cols-2">
              <Reveal>
                <p className="eyebrow">Overview</p>
                <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl text-ink">{d.overview.heading}</h2>
                <div className="mt-6 space-y-5 text-base leading-[1.8] text-slate-600">
                  {d.overview.paragraphs.map((p, i) => (
                    <p key={i}>{p}</p>
                  ))}
                </div>
              </Reveal>
              <Reveal delay={0.1}>
                <div className="rounded-3xl bg-ink p-8 text-white sm:p-10">
                  <IconTile icon={industry.icon} size="lg" />
                  <h2 className="mt-6 text-3xl text-white">{d.landscape.heading}</h2>
                  <div className="mt-5 space-y-4 text-sm leading-[1.8] text-white/70">
                    {d.landscape.paragraphs.map((p, i) => (
                      <p key={i}>{p}</p>
                    ))}
                  </div>
                </div>
              </Reveal>
            </div>
          </section>

          {/* ---------- Challenges ---------- */}
          <section id="challenges" className="scroll-mt-32 bg-ivory py-16 sm:py-24">
            <div className="mx-auto w-[90%] max-w-[1280px]">
              <SectionHeading eyebrow="Challenges" title={`Common challenges in ${industry.name}`} text="Problems we hear again and again, and help businesses solve." />
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
                {d.challengesDetail.map((c, i) => (
                  <Reveal key={c.title} delay={(i % 3) * 0.08}>
                    <div className="h-full rounded-3xl border border-gold-soft bg-white p-7 transition-all duration-500 hover:-translate-y-1 hover:border-gold">
                      <span className="grid h-10 w-10 place-items-center rounded-full bg-[#fbeee9] text-[#b4553a]"><AlertCircle className="h-5 w-5" strokeWidth={1.6} /></span>
                      <h3 className="mt-4 text-2xl text-ink">{c.title}</h3>
                      <p className="mt-2 text-sm leading-relaxed text-slate-600">{c.text}</p>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </section>

          {/* ---------- Solutions / modules ---------- */}
          <section id="solutions" className="scroll-mt-32 bg-white py-16 sm:py-24">
            <div className="mx-auto w-[90%] max-w-[1280px]">
              <SectionHeading eyebrow="Solutions" title={`What we build for ${industry.name}`} text="Start with one module and add more as you grow." />
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                {d.modules.map((m, i) => (
                  <Reveal key={m.title} delay={(i % 3) * 0.08}>
                    <div className="card-shine group relative flex h-full flex-col overflow-hidden rounded-3xl border border-gold-soft bg-white p-7 transition-all duration-500 hover:-translate-y-1.5 hover:border-gold hover:shadow-[0_30px_60px_-30px_rgba(140,106,18,0.5)]">
                      <span className="absolute inset-x-0 top-0 h-0.5 origin-left scale-x-0 bg-linear-to-r from-gold via-[#f3d98b] to-gold transition-transform duration-700 group-hover:scale-x-100" />
                      <p className="font-serif text-4xl text-gold">{String(i + 1).padStart(2, "0")}</p>
                      <h3 className="mt-3 text-2xl text-ink">{m.title}</h3>
                      <p className="mt-2 text-sm leading-relaxed text-slate-600">{m.text}</p>
                      <ul className="mt-5 space-y-2 border-t border-gold-soft pt-5">
                        {m.features.map((f) => (
                          <li key={f} className="flex items-start gap-2 text-sm text-slate-700">
                            <Check className="mt-0.5 h-4 w-4 shrink-0 text-gold" strokeWidth={2} /> {f}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </section>

          {/* ---------- Example scenarios ---------- */}
          {x && (
            <section id="scenarios" className="scroll-mt-32 bg-ink py-16 text-white sm:py-24">
              <div className="mx-auto w-[90%] max-w-[1280px]">
                <SectionHeading dark eyebrow="Example scenarios" title="What this looks like in practice" text="Typical situations we design for. Illustrative examples, not client case studies." />
                <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
                  {x.useCases.map((u, i) => (
                    <Reveal key={u.title} delay={(i % 3) * 0.08}>
                      <div className="card-shine relative h-full overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] p-7 transition-colors hover:border-gold/50">
                        <span className="font-serif text-sm text-gold">Scenario {String(i + 1).padStart(2, "0")}</span>
                        <h3 className="mt-2 text-2xl text-white">{u.title}</h3>
                        <p className="mt-3 text-sm leading-relaxed text-white/65">{u.text}</p>
                      </div>
                    </Reveal>
                  ))}
                </div>
              </div>
            </section>
          )}

          {/* ---------- Journey ---------- */}
          <section id="journey" className="scroll-mt-32 bg-ivory py-16 sm:py-24">
            <div className="mx-auto w-[90%] max-w-[1280px]">
              <SectionHeading eyebrow="Customer journey" title="How it feels for your customers" text="A simple, connected experience from first search to loyal customer." />
              <ProcessSteps steps={d.journey} />
            </div>
          </section>

          {/* ---------- Outcomes (dark) ---------- */}
          <section className="relative isolate overflow-hidden bg-ink py-16 text-white sm:py-24">
            <div className="pointer-events-none absolute inset-0 -z-10" aria-hidden="true">
              <div className="absolute left-1/2 top-1/2 h-[380px] w-[80%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gold/10 blur-[100px]" />
              <div className="bg-dots-dark absolute inset-0 [mask-image:radial-gradient(ellipse_at_center,#000_10%,transparent_70%)]" />
            </div>
            <div className="mx-auto w-[90%] max-w-[1280px]">
              <SectionHeading dark eyebrow="Outcomes" title="What changes for your business" />
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
                {d.outcomes.map((o, i) => (
                  <Reveal key={o.title} delay={i * 0.08}>
                    <div className="h-full rounded-3xl border border-white/10 bg-white/[0.04] p-7 backdrop-blur transition-colors hover:border-gold/50">
                      <span className="block h-px w-10 bg-gold" />
                      <h3 className="mt-5 text-2xl text-white">{o.title}</h3>
                      <p className="mt-2 text-sm leading-relaxed text-white/65">{o.text}</p>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </section>

          {/* ---------- Integrations + considerations ---------- */}
          <section id="integrations" className="scroll-mt-32 bg-white py-16 sm:py-24">
            <div className="mx-auto grid w-[90%] max-w-[1280px] grid-cols-1 gap-12 lg:grid-cols-2">
              <Reveal>
                <p className="eyebrow">Integrations</p>
                <h2 className="mt-3 text-3xl sm:text-4xl text-ink">Works with the tools you use</h2>
                <ul className="mt-8 space-y-3">
                  {d.integrations.map((x) => (
                    <li key={x.title} className="flex gap-4 rounded-2xl border border-gold-soft p-5 transition-colors hover:border-gold">
                      <IconTile icon={Plug} size="sm" />
                      <span>
                        <span className="block font-semibold text-ink">{x.title}</span>
                        <span className="mt-0.5 block text-sm text-slate-600">{x.text}</span>
                      </span>
                    </li>
                  ))}
                </ul>
              </Reveal>
              <div id="considerations" className="scroll-mt-32">
                <Reveal delay={0.1}>
                  <p className="eyebrow">Things to know</p>
                  <h2 className="mt-3 text-3xl sm:text-4xl text-ink">Important considerations</h2>
                  <ul className="mt-8 space-y-3">
                    {d.considerations.map((x) => (
                      <li key={x.title} className="flex gap-4 rounded-2xl bg-ivory p-5">
                        <IconTile icon={ShieldCheck} size="sm" className="bg-white!" />
                        <span>
                          <span className="block font-semibold text-ink">{x.title}</span>
                          <span className="mt-0.5 block text-sm leading-relaxed text-slate-600">{x.text}</span>
                        </span>
                      </li>
                    ))}
                  </ul>
                </Reveal>
              </div>
            </div>
          </section>

          {/* ---------- Why us + self-check ---------- */}
          {x && (
            <>
              <section className="bg-white py-16 sm:py-24">
                <div className="mx-auto w-[90%] max-w-[1280px]">
                  <SectionHeading eyebrow="Why Sootradhara" title={`Why ${industry.name} businesses work with us`} />
                  <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
                    {x.whyUs.map((w, i) => (
                      <Reveal key={w.title} delay={i * 0.08}>
                        <div className="border-t-2 border-gold pt-6">
                          <h3 className="text-2xl text-ink">{w.title}</h3>
                          <p className="mt-2 text-sm leading-relaxed text-slate-600">{w.text}</p>
                        </div>
                      </Reveal>
                    ))}
                  </div>
                </div>
              </section>
              <section id="checklist" className="scroll-mt-32 bg-ivory py-16 sm:py-24">
                <div className="mx-auto w-[90%] max-w-[1280px]">
                  <SectionHeading eyebrow="Self-check" title="How digitally ready is your business?" text="Tick what's already true today. It takes 30 seconds and shows where the quick wins are." />
                  <ReadinessChecklist items={x.checklist} industry={industry.name} />
                </div>
              </section>
            </>
          )}

          {/* ---------- Getting started ---------- */}
          <section id="start" className="scroll-mt-32 bg-white py-16 sm:py-24">
            <div className="mx-auto w-[90%] max-w-[1280px]">
              <SectionHeading eyebrow="Getting started" title="Four simple steps to begin" />
              <ol className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
                {d.gettingStarted.map((s, i) => (
                  <Reveal as="li" key={s.title} delay={i * 0.1}>
                    <div className="h-full rounded-3xl border border-gold-soft bg-white p-7">
                      <span className="grid h-11 w-11 place-items-center rounded-full bg-gold font-serif text-lg text-ink">{i + 1}</span>
                      <h3 className="mt-4 text-2xl text-ink">{s.title}</h3>
                      <p className="mt-2 text-sm leading-relaxed text-slate-600">{s.text}</p>
                    </div>
                  </Reveal>
                ))}
              </ol>
            </div>
          </section>
        </>
      )}

      {g && <GuideArticle guide={g.guide} tone="ivory" />}

      {/* ---------- Related services, explained for this industry ---------- */}
      <section className="bg-white py-16 sm:py-24">
        <div className="mx-auto w-[90%] max-w-[1280px]">
          <SectionHeading eyebrow="Services" title={`How our services help ${industry.name}`} />
          <div className="space-y-5">
            {related.map((r, i) => (
              <Reveal key={r.slug} delay={i * 0.06}>
                <div className="group grid grid-cols-1 gap-6 rounded-3xl border border-gold-soft p-7 transition-all duration-500 hover:border-gold hover:shadow-[0_24px_48px_-30px_rgba(140,106,18,0.45)] md:grid-cols-12 md:items-center">
                  <div className="flex items-center gap-4 md:col-span-4">
                    <IconTile icon={r.icon} size="lg" />
                    <span>
                      <span className="block font-serif text-2xl text-ink">{r.name}</span>
                      <span className="block text-sm text-slate-500">{r.tagline}</span>
                    </span>
                  </div>
                  <p className="text-sm leading-[1.8] text-slate-600 md:col-span-6">{more?.serviceFit[r.slug] ?? r.card.summary}</p>
                  <div className="md:col-span-2 md:text-right">
                    <Link href={`/services/${r.slug}`} className="inline-flex items-center gap-1.5 text-sm font-semibold text-gold-ink">
                      Learn more <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          {more && (
            <Reveal className="mt-14">
              <div className="rounded-3xl bg-ivory p-8 sm:p-10">
                <h3 className="flex items-center gap-3 text-3xl text-ink">
                  <span className="grid h-10 w-10 place-items-center rounded-full bg-[#fbeee9] text-[#b4553a]"><AlertCircle className="h-5 w-5" /></span>
                  Common mistakes to avoid
                </h3>
                <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-5">
                  {more.mistakes.map((m) => (
                    <div key={m.title}>
                      <p className="font-semibold text-ink">{m.title}</p>
                      <p className="mt-1.5 text-sm leading-relaxed text-slate-600">{m.text}</p>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          )}
        </div>
      </section>

      {/* ---------- Glossary ---------- */}
      {glossary && (
        <section id="glossary" className="scroll-mt-32 bg-ivory py-16 sm:py-24">
          <div className="mx-auto w-[90%] max-w-[1280px]">
            <SectionHeading eyebrow="Glossary" title={`${industry.name} terms explained`} text="Common words you'll hear, explained in plain English." />
            <dl className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-5">
              {glossary.map((t, i) => (
                <Reveal key={t.title} delay={(i % 5) * 0.05}>
                  <div className="h-full rounded-2xl border border-gold-soft bg-white p-5 transition-colors hover:border-gold">
                    <dt className="font-serif text-xl text-ink">{t.title}</dt>
                    <dd className="mt-1.5 text-sm leading-relaxed text-slate-600">{t.text}</dd>
                  </div>
                </Reveal>
              ))}
            </dl>
          </div>
        </section>
      )}

      {/* ---------- FAQ ---------- */}
      <section id="faq" className="scroll-mt-32 bg-white py-16 sm:py-24">
        <div className="mx-auto w-[90%] max-w-4xl">
          <SectionHeading eyebrow="FAQ" title={`${industry.name}: common questions`} />
          <FaqList faqs={faqs} />
        </div>
      </section>

      <CtaBand
        title="Let's grow your business. Get a free quote."
        whatsappMessage={`Hi Sootradhara, I work in ${industry.name} and would like to discuss a project.`}
      />
    </>
  );
}
