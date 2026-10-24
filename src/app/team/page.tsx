import type { Metadata } from "next";
import { Users, MessagesSquare, ShieldCheck, Layers } from "lucide-react";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import Reveal from "@/components/ui/Reveal";
import IconTile from "@/components/ui/IconTile";
import SectionHeading from "@/components/ui/SectionHeading";
import CtaBand from "@/components/CtaBand";
import TeamAvatar from "@/components/team/TeamAvatar";
import { team } from "@/lib/team";

export const metadata: Metadata = {
  title: "Our Team: Developers, Designers & Marketers in Hyderabad",
  description:
    "Meet the Sootradhara team in Hyderabad: full stack developers, a digital marketer, DevOps, cloud and UI/UX specialists who plan, build and grow your digital products.",
  alternates: { canonical: "/team" },
};

const values = [
  { icon: Layers, title: "One team, every thread", text: "Design, development, cloud and marketing sit together, so nothing gets lost between vendors." },
  { icon: MessagesSquare, title: "Clear communication", text: "Simple updates in plain English, on WhatsApp or calls, with one person you can always reach." },
  { icon: ShieldCheck, title: "Experienced hands", text: "Developers with years of real project experience review the work before it reaches you." },
  { icon: Users, title: "We stay after launch", text: "The same people who build your product help you support and grow it." },
];

// The illustrated avatar cards are kept in the code but hidden for now.
const SHOW_AVATAR_CARDS = false;

export default function TeamPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-ivory pb-16 pt-28 lg:pt-36">
        <div className="bg-dots pointer-events-none absolute inset-0 opacity-50" aria-hidden="true" />
        <div className="pointer-events-none absolute -right-40 -top-40 h-[520px] w-[520px] rounded-full bg-gold/15 blur-3xl" aria-hidden="true" />
        <div className="relative mx-auto w-[90%] max-w-[1280px]">
          <Breadcrumbs items={[{ name: "Team", href: "/team" }]} />
          <Reveal>
            <p className="eyebrow mt-10">Our team</p>
            <h1 className="mt-4 max-w-4xl text-4xl leading-[1.05] text-ink sm:text-6xl lg:text-7xl">
              The people who hold every <em className="text-gold-grad font-serif italic">thread</em>
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-600">
              A small, experienced team of developers, designers and marketers in Hyderabad. You work directly with the people
              building your product.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Team list: text only */}
      <section className="relative bg-white py-16 sm:py-24">
        <div className="mx-auto grid w-[90%] max-w-[1280px] grid-cols-1 gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <div className="lg:sticky lg:top-32">
              <Reveal>
                <p className="eyebrow">Meet the team</p>
                <h2 className="mt-3 text-4xl leading-[1.05] text-ink sm:text-5xl">
                  Our team <em className="text-gold-grad font-serif italic">players</em>
                </h2>
                <p className="mt-5 max-w-sm leading-relaxed text-slate-600">
                  Developers, designers, cloud engineers and marketers working as one team, so every part of your product
                  connects.
                </p>
                <div className="mt-8 h-px w-24 bg-linear-to-r from-gold to-transparent" aria-hidden="true" />
              </Reveal>
            </div>
          </div>

          <ol className="border-t border-gold-soft lg:col-span-8">
            {team.map((m, i) => (
              <Reveal as="li" key={m.role + m.name} delay={Math.min(i, 5) * 0.05}>
                <article className="group relative grid grid-cols-[auto_1fr] gap-x-5 border-b border-gold-soft py-7 transition-colors duration-500 hover:bg-ivory/60 sm:grid-cols-[auto_1fr_auto] sm:gap-x-8 sm:px-4">
                  {/* Gold line that sweeps across on hover */}
                  <span
                    className="absolute inset-x-0 -bottom-px h-px origin-left scale-x-0 bg-linear-to-r from-gold via-gold to-gold/0 transition-transform duration-700 ease-out group-hover:scale-x-100"
                    aria-hidden="true"
                  />
                  <span className="pt-1.5 font-serif text-lg text-gold/70 transition-colors duration-500 group-hover:text-gold-ink">
                    {String(i + 1).padStart(2, "0")}
                  </span>

                  <div className="min-w-0 transition-transform duration-500 ease-out group-hover:translate-x-1.5">
                    <h3 className="text-3xl leading-tight text-ink sm:text-4xl">{m.name || m.role}</h3>
                    <p className="mt-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-gold-ink">{m.name ? m.role : "Sootradhara team"}</p>
                    <p className="mt-3 max-w-xl text-[15px] leading-relaxed text-slate-600">{m.focus}</p>
                  </div>

                  {m.years ? (
                    <div className="col-start-2 mt-4 sm:col-start-3 sm:mt-0 sm:text-right">
                      <p className="font-serif text-4xl leading-none text-ink sm:text-5xl">
                        {m.years}
                        <span className="text-gold">+</span>
                      </p>
                      <p className="mt-1 text-[11px] font-medium uppercase tracking-[0.16em] text-slate-500">Years experience</p>
                    </div>
                  ) : null}
                </article>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      {/* Avatar cards (hidden for now: set SHOW_AVATAR_CARDS to true to bring them back) */}
      {SHOW_AVATAR_CARDS && (
      <section className="bg-white py-16 sm:py-24">
        <div className="mx-auto w-[90%] max-w-[1280px]">
          <SectionHeading eyebrow="Meet the team" title="Our team players" />
          <ul className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {team.map((m, i) => (
              <Reveal as="li" key={m.role + m.name} delay={(i % 4) * 0.08}>
                <article className="group relative flex h-full flex-col items-center rounded-[28px] border border-gold-soft bg-white p-6 text-center transition-all duration-500 hover:-translate-y-1.5 hover:border-gold hover:shadow-[0_30px_60px_-35px_rgba(140,106,18,0.55)]">
                  {/* Avatar */}
                  <div className="relative">
                    <span
                      className="absolute -inset-2 rounded-full border border-dashed border-gold/40 transition-transform duration-[1.2s] ease-out group-hover:rotate-90"
                      aria-hidden="true"
                    />
                    <div className="relative h-36 w-36 overflow-hidden rounded-full bg-ivory">
                      <TeamAvatar avatar={m.avatar} index={i} className="absolute inset-x-0 bottom-0 h-[132px] w-full" />
                    </div>
                    {m.years ? (
                      <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-ink px-3 py-1 text-[11px] font-semibold text-gold shadow-md">
                        {m.years}+ years
                      </span>
                    ) : null}
                  </div>

                  <h3 className="mt-6 text-2xl text-ink">{m.name || m.role}</h3>
                  <p className="mt-0.5 text-xs font-semibold uppercase tracking-[0.16em] text-gold-ink">
                    {m.name ? m.role : "Sootradhara team"}
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-slate-600">{m.focus}</p>

                </article>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>
      )}

      {/* How we work */}
      <section className="relative overflow-hidden bg-ink py-16 text-white sm:py-24">
        <div className="bg-dots-dark pointer-events-none absolute inset-0 opacity-40" aria-hidden="true" />
        <div className="pointer-events-none absolute -left-32 top-0 h-96 w-96 rounded-full bg-gold/15 blur-3xl" aria-hidden="true" />
        <div className="relative mx-auto w-[90%] max-w-[1280px]">
          <Reveal>
            <p className="eyebrow text-gold!">How we work</p>
            <h2 className="mt-3 max-w-2xl text-3xl text-white sm:text-4xl lg:text-5xl">Small team. Senior attention. Every detail covered.</h2>
          </Reveal>
          <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((v, i) => (
              <Reveal key={v.title} delay={i * 0.08}>
                <div className="group h-full rounded-3xl border border-white/10 bg-white/5 p-6 transition-colors hover:border-gold/50">
                  <IconTile icon={v.icon} />
                  <h3 className="mt-5 font-sans text-base font-semibold text-white">{v.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-white/65">{v.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CtaBand title="Want this team on your project? Let's talk." />
    </>
  );
}
