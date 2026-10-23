import React from "react";
import { Check, ShoppingBag, Bell, Search, TrendingUp, Phone, GitBranch, Server, ShieldCheck, Sparkles, Star } from "lucide-react";
import WhatsAppIcon from "@/components/ui/WhatsAppIcon";
import type { VisualKind } from "@/content/types";

/**
 * Coded, animated illustrations (no stock photos). Each page type gets its
 * own little product mockup in brand colours, plus floating detail cards.
 * All numbers shown are illustrative UI only.
 */
export default function ServiceVisual({ kind, className = "" }: { kind: VisualKind; className?: string }) {
  return (
    <div className={`relative mx-auto w-full max-w-[520px] ${className}`} aria-hidden="true">
      {/* soft glow */}
      <div className="absolute inset-6 -z-10 rounded-full bg-[radial-gradient(circle,rgba(243,217,139,0.45),transparent_65%)] blur-2xl" />
      {visuals[kind]()}
    </div>
  );
}

/* ---------- shared bits ---------- */

function Frame({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={`rounded-[26px] border border-gold-soft bg-white shadow-[0_40px_80px_-40px_rgba(140,106,18,0.45)] ${className}`}>
      {children}
    </div>
  );
}

function Float({ children, className = "", delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  return (
    <div className={`pop-in absolute z-10 ${className}`} style={{ animationDelay: `${delay}s` }}>
      <div
        className="floaty flex items-center gap-2.5 rounded-2xl border border-gold-soft bg-white/95 px-3.5 py-2.5 text-xs shadow-[0_18px_40px_-18px_rgba(20,18,15,0.35)] backdrop-blur"
        style={{ animationDelay: `${delay}s` }}
      >
        {children}
      </div>
    </div>
  );
}

function Dot({ className = "" }: { className?: string }) {
  return <span className={`h-2.5 w-2.5 rounded-full ${className}`} />;
}

function Line({ w = "w-full", className = "" }: { w?: string; className?: string }) {
  return <span className={`skeleton block h-2.5 rounded-full ${w} ${className}`} />;
}

function Bars({ values }: { values: number[] }) {
  return (
    <div className="flex h-28 items-end gap-2">
      {values.map((v, i) => (
        <span
          key={i}
          className="anim-bar block flex-1 rounded-t-md bg-linear-to-t from-gold-deep to-[#f3d98b]"
          style={{ height: `${v}%`, animationDelay: `${0.2 + i * 0.08}s` }}
        />
      ))}
    </div>
  );
}

/* ---------- variants ---------- */

const visuals: Record<VisualKind, () => React.ReactNode> = {
  browser: () => (
    <>
      <Frame className="overflow-hidden">
        <div className="flex items-center gap-2 border-b border-gold-soft bg-ivory px-4 py-3">
          <Dot className="bg-[#e7b9a5]" />
          <Dot className="bg-[#ecd59a]" />
          <Dot className="bg-[#b9d3a8]" />
          <span className="ml-3 flex-1 rounded-full bg-white px-3 py-1 text-[10px] text-slate-400">https://yourbusiness.in</span>
        </div>
        <div className="space-y-5 p-6">
          <div className="flex items-center justify-between">
            <span className="h-4 w-20 rounded bg-ink/80" />
            <div className="flex gap-3">
              <Line w="w-10" /> <Line w="w-10" /> <Line w="w-10" />
            </div>
          </div>
          <div className="rounded-2xl bg-linear-to-br from-ivory to-white p-5">
            <span className="block h-4 w-3/4 rounded bg-ink/80" />
            <span className="mt-2 block h-4 w-1/2 rounded bg-gold/70" />
            <Line w="w-5/6" className="mt-4" />
            <Line w="w-2/3" className="mt-2" />
            <span className="mt-4 inline-block rounded-full bg-gold px-4 py-1.5 text-[10px] font-semibold text-ink">Book a visit</span>
          </div>
          <div className="grid grid-cols-3 gap-3">
            {[0, 1, 2].map((i) => (
              <div key={i} className="rounded-xl border border-gold-soft p-3">
                <span className="mb-2 block h-6 w-6 rounded-full bg-ivory" />
                <Line w="w-4/5" />
                <Line w="w-3/5" className="mt-1.5" />
              </div>
            ))}
          </div>
        </div>
      </Frame>
      <Float className="-left-4 top-24 sm:-left-10" delay={0.4}>
        <span className="grid h-8 w-8 place-items-center rounded-full bg-[#25D366] text-white"><WhatsAppIcon className="h-4 w-4" /></span>
        <span><b className="block text-ink">New enquiry</b><span className="text-slate-500">from your website</span></span>
      </Float>
      <Float className="-right-3 bottom-10 sm:-right-8" delay={0.8}>
        <span className="grid h-8 w-8 place-items-center rounded-full bg-ivory text-gold-ink"><Search className="h-4 w-4" /></span>
        <span><b className="block text-ink">Found on Google</b><span className="text-slate-500">SEO-ready pages</span></span>
      </Float>
    </>
  ),

  phone: () => (
    <div className="relative flex justify-center py-4">
      <div className="relative h-[460px] w-[240px] rounded-[42px] border-[7px] border-ink bg-white shadow-[0_40px_80px_-30px_rgba(20,18,15,0.55)]">
        <span className="absolute left-1/2 top-2 h-5 w-20 -translate-x-1/2 rounded-full bg-ink" />
        <div className="flex h-full flex-col px-4 pb-4 pt-10">
          <div className="flex items-center justify-between">
            <span><span className="block text-[10px] text-slate-400">Good morning</span><span className="font-serif text-lg text-ink">Hi, Priya</span></span>
            <span className="grid h-8 w-8 place-items-center rounded-full bg-ivory text-gold-ink"><Bell className="h-4 w-4" /></span>
          </div>
          <div className="mt-4 rounded-2xl bg-linear-to-br from-[#f7e7a6] via-gold to-[#a97e12] p-4 text-ink">
            <span className="block text-[10px] font-semibold uppercase tracking-wider">Today&apos;s offer</span>
            <span className="mt-1 block font-serif text-xl">20% off your next visit</span>
          </div>
          <div className="mt-4 grid grid-cols-2 gap-2.5">
            {["Book", "Orders", "Wallet", "Support"].map((t) => (
              <div key={t} className="rounded-xl border border-gold-soft p-3">
                <span className="mb-2 block h-6 w-6 rounded-full bg-ivory" />
                <span className="text-[11px] font-semibold text-ink">{t}</span>
              </div>
            ))}
          </div>
          <div className="mt-auto flex justify-around rounded-2xl bg-ivory py-2.5">
            {[0, 1, 2, 3].map((i) => (
              <span key={i} className={`h-2 w-2 rounded-full ${i === 0 ? "bg-gold" : "bg-gold/30"}`} />
            ))}
          </div>
        </div>
      </div>
      <Float className="left-0 top-16 sm:-left-2" delay={0.4}>
        <span className="grid h-8 w-8 place-items-center rounded-full bg-[#e9f6ee] text-[#1f8a4c]"><Check className="h-4 w-4" /></span>
        <span><b className="block text-ink">Booking confirmed</b><span className="text-slate-500">Sat, 11:30 AM</span></span>
      </Float>
      <Float className="bottom-16 right-0 sm:-right-2" delay={0.8}>
        <span className="grid h-8 w-8 place-items-center rounded-full bg-ivory font-bold text-gold-ink">₹</span>
        <span><b className="block text-ink">Paid via UPI</b><span className="text-slate-500">Instant receipt</span></span>
      </Float>
    </div>
  ),

  code: () => (
    <>
      <Frame className="overflow-hidden bg-ink! border-ink">
        <div className="flex items-center gap-2 border-b border-white/10 px-4 py-3">
          <Dot className="bg-[#e7b9a5]" /> <Dot className="bg-[#ecd59a]" /> <Dot className="bg-[#b9d3a8]" />
          <span className="ml-3 text-[10px] text-white/40">approvals.ts</span>
        </div>
        <pre className="overflow-hidden p-5 font-mono text-[11px] leading-6 text-white/70">
          <code>
            <span className="text-gold">function</span> <span className="text-[#f3d98b]">approveOrder</span>(order) {"{"}
            {"\n"}  <span className="text-gold">if</span> (order.total {">"} limit) {"{"}
            {"\n"}    notify(<span className="text-[#b9d3a8]">&quot;manager&quot;</span>, order)
            {"\n"}    <span className="text-gold">return</span> <span className="text-[#b9d3a8]">&quot;pending&quot;</span>
            {"\n"}  {"}"}
            {"\n"}  updateStock(order.items)
            {"\n"}  createInvoice(order) <span className="text-white/30">{"// GST-ready"}</span>
            {"\n"}  <span className="text-gold">return</span> <span className="text-[#b9d3a8]">&quot;approved&quot;</span>
            {"\n"}{"}"}
          </code>
        </pre>
      </Frame>
      <Frame className="absolute -bottom-10 -right-2 w-56 p-4 sm:-right-8">
        <p className="mb-3 text-[10px] font-semibold uppercase tracking-wider text-gold-ink">Approval flow</p>
        {["Request raised", "Manager approved", "Invoice created"].map((s, i) => (
          <div key={s} className="pop-in mb-2 flex items-center gap-2 text-xs text-ink" style={{ animationDelay: `${0.4 + i * 0.25}s` }}>
            <span className="grid h-5 w-5 place-items-center rounded-full bg-gold text-ink"><Check className="h-3 w-3" strokeWidth={3} /></span>
            {s}
          </div>
        ))}
      </Frame>
    </>
  ),

  store: () => (
    <>
      <Frame className="p-5">
        <div className="mb-4 flex items-center justify-between">
          <span className="font-serif text-lg text-ink">New arrivals</span>
          <span className="relative grid h-9 w-9 place-items-center rounded-full bg-ivory text-gold-ink">
            <ShoppingBag className="h-4 w-4" />
            <span className="absolute -right-1 -top-1 grid h-4 w-4 place-items-center rounded-full bg-gold text-[9px] font-bold text-ink">2</span>
          </span>
        </div>
        <div className="grid grid-cols-2 gap-3">
          {[
            ["Silk saree", "₹2,499"],
            ["Pearl set", "₹1,850"],
            ["Kurta", "₹1,299"],
            ["Gift box", "₹799"],
          ].map(([n, p], i) => (
            <div key={n} className="pop-in rounded-2xl border border-gold-soft p-3" style={{ animationDelay: `${0.15 * i}s` }}>
              <span className="mb-3 block h-20 rounded-xl bg-linear-to-br from-ivory via-[#f3ecdd] to-[#efe2b8]" />
              <span className="block text-xs font-semibold text-ink">{n}</span>
              <span className="text-xs text-gold-ink">{p}</span>
            </div>
          ))}
        </div>
      </Frame>
      <Float className="-left-4 top-1/3 sm:-left-10" delay={0.6}>
        <span className="grid h-8 w-8 place-items-center rounded-full bg-ivory font-bold text-gold-ink">₹</span>
        <span><b className="block text-ink">Paid via UPI</b><span className="text-slate-500">Order confirmed</span></span>
      </Float>
      <Float className="-bottom-6 right-4" delay={1}>
        <span className="grid h-8 w-8 place-items-center rounded-full bg-[#25D366] text-white"><WhatsAppIcon className="h-4 w-4" /></span>
        <span><b className="block text-ink">Shipped</b><span className="text-slate-500">Tracking sent</span></span>
      </Float>
    </>
  ),

  chat: () => (
    <>
      <Frame className="p-5">
        <div className="mb-4 flex items-center gap-3 border-b border-gold-soft pb-4">
          <span className="grid h-10 w-10 place-items-center rounded-full bg-gold text-ink"><Sparkles className="h-5 w-5" /></span>
          <span><b className="block text-sm text-ink">AI Assistant</b><span className="text-[11px] text-[#1f8a4c]">● Online, replies instantly</span></span>
        </div>
        <div className="space-y-3 text-[13px]">
          <p className="pop-in ml-auto max-w-[75%] rounded-2xl rounded-tr-md bg-ivory px-4 py-2.5 text-ink">What are your timings on Sunday?</p>
          <p className="pop-in max-w-[80%] rounded-2xl rounded-tl-md border border-gold-soft px-4 py-2.5 text-slate-700" style={{ animationDelay: "0.4s" }}>
            We&apos;re open 10 AM to 2 PM on Sundays. Would you like me to book a slot?
          </p>
          <p className="pop-in ml-auto max-w-[60%] rounded-2xl rounded-tr-md bg-ivory px-4 py-2.5 text-ink" style={{ animationDelay: "0.8s" }}>Yes, 11 AM please</p>
          <div className="flex w-16 items-center justify-center gap-1 rounded-2xl border border-gold-soft py-3">
            {[0, 1, 2].map((i) => (
              <span key={i} className="typing-dot h-1.5 w-1.5 rounded-full bg-gold" style={{ animationDelay: `${i * 0.15}s` }} />
            ))}
          </div>
        </div>
      </Frame>
      <Float className="-right-3 -top-4 sm:-right-8" delay={0.6}>
        <span className="grid h-8 w-8 place-items-center rounded-full bg-[#e9f6ee] text-[#1f8a4c]"><Check className="h-4 w-4" /></span>
        <span><b className="block text-ink">Lead captured</b><span className="text-slate-500">Sent to your CRM</span></span>
      </Float>
      <Float className="-bottom-6 -left-3 sm:-left-8" delay={1}>
        <span className="grid h-8 w-8 place-items-center rounded-full bg-ivory text-gold-ink"><Phone className="h-4 w-4" /></span>
        <span><b className="block text-ink">Handed to team</b><span className="text-slate-500">For complex questions</span></span>
      </Float>
    </>
  ),

  chart: () => (
    <>
      <Frame className="p-6">
        <div className="mb-5 flex items-center justify-between">
          <span><span className="block text-[11px] text-slate-500">Enquiries this month</span><span className="font-serif text-2xl text-ink">Trending up</span></span>
          <span className="grid h-10 w-10 place-items-center rounded-full bg-ivory text-gold-ink"><TrendingUp className="h-5 w-5" /></span>
        </div>
        <Bars values={[30, 42, 38, 55, 50, 68, 74, 88]} />
        <div className="mt-5 grid grid-cols-3 gap-3 text-center text-[11px]">
          {["Google", "Maps", "Instagram"].map((c) => (
            <span key={c} className="rounded-xl bg-ivory py-2 font-semibold text-gold-ink">{c}</span>
          ))}
        </div>
      </Frame>
      <Float className="-left-4 -top-4 sm:-left-10" delay={0.5}>
        <span className="grid h-8 w-8 place-items-center rounded-full bg-ivory text-gold-ink"><Search className="h-4 w-4" /></span>
        <span><b className="block text-ink">&ldquo;best clinic near me&rdquo;</b><span className="text-slate-500">You appear on Maps</span></span>
      </Float>
      <Float className="-bottom-6 -right-3 sm:-right-8" delay={0.9}>
        <span className="grid h-8 w-8 place-items-center rounded-full bg-[#e9f6ee] text-[#1f8a4c]"><Phone className="h-4 w-4" /></span>
        <span><b className="block text-ink">New call</b><span className="text-slate-500">From Google Ads</span></span>
      </Float>
    </>
  ),

  brand: () => (
    <>
      <Frame className="p-6">
        <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-gold-ink">Brand guide</p>
        <div className="mt-4 grid grid-cols-4 gap-3">
          {[
            ["#D4AF37", "Gold"],
            ["#8C6A12", "Deep"],
            ["#1C1914", "Ink"],
            ["#FAF7F0", "Ivory"],
          ].map(([c, n], i) => (
            <div key={n} className="pop-in" style={{ animationDelay: `${i * 0.12}s` }}>
              <span className="block aspect-square rounded-2xl border border-gold-soft" style={{ background: c }} />
              <span className="mt-1.5 block text-[10px] text-slate-500">{n}</span>
            </div>
          ))}
        </div>
        <div className="mt-6 flex items-end gap-6 border-t border-gold-soft pt-5">
          <span className="font-serif text-6xl leading-none text-ink">Aa</span>
          <span className="space-y-1 text-[11px] text-slate-500">
            <span className="block font-serif text-base text-ink">Cormorant Garamond</span>
            <span className="block">Headings · elegant serif</span>
            <span className="block font-sans text-ink">Geist Sans · body text</span>
          </span>
        </div>
      </Frame>
      <Float className="-right-3 -top-5 sm:-right-8" delay={0.5}>
        <span className="grid h-8 w-8 place-items-center rounded-full bg-ivory text-gold-ink"><Star className="h-4 w-4" /></span>
        <span><b className="block text-ink">Logo approved</b><span className="text-slate-500">All formats ready</span></span>
      </Float>
      <Float className="-bottom-6 -left-3 sm:-left-8" delay={0.9}>
        <span className="grid h-8 w-8 place-items-center rounded-full bg-ivory text-gold-ink"><Sparkles className="h-4 w-4" /></span>
        <span><b className="block text-ink">Prototype ready</b><span className="text-slate-500">Try it on your phone</span></span>
      </Float>
    </>
  ),

  dashboard: () => (
    <>
      <Frame className="p-5">
        <div className="mb-4 flex items-center justify-between">
          <span className="font-serif text-lg text-ink">Today at a glance</span>
          <span className="rounded-full bg-ivory px-3 py-1 text-[10px] font-semibold text-gold-ink">Live</span>
        </div>
        <div className="grid grid-cols-3 gap-3">
          {[
            ["New leads", "12"],
            ["Follow-ups", "8"],
            ["Low stock", "3"],
          ].map(([l, v], i) => (
            <div key={l} className="pop-in rounded-2xl border border-gold-soft p-3" style={{ animationDelay: `${i * 0.12}s` }}>
              <span className="block text-[10px] text-slate-500">{l}</span>
              <span className="font-serif text-2xl text-ink">{v}</span>
            </div>
          ))}
        </div>
        <div className="mt-4 rounded-2xl bg-ivory p-4">
          <Bars values={[45, 60, 40, 70, 58, 80, 66]} />
        </div>
        <div className="mt-4 space-y-2">
          {["Call back: Ravi, 3 BHK enquiry", "Dispatch: Order #1042"].map((t) => (
            <div key={t} className="flex items-center gap-2 rounded-xl border border-gold-soft px-3 py-2 text-[11px] text-ink">
              <span className="h-1.5 w-1.5 rounded-full bg-gold" /> {t}
            </div>
          ))}
        </div>
      </Frame>
      <Float className="-left-4 top-10 sm:-left-10" delay={0.6}>
        <span className="grid h-8 w-8 place-items-center rounded-full bg-ivory text-gold-ink"><Bell className="h-4 w-4" /></span>
        <span><b className="block text-ink">Reminder</b><span className="text-slate-500">Follow-up due at 4 PM</span></span>
      </Float>
    </>
  ),

  cloud: () => (
    <>
      <Frame className="p-6">
        <div className="mb-5 flex items-center justify-between">
          <span className="font-serif text-lg text-ink">Release pipeline</span>
          <span className="flex items-center gap-1.5 rounded-full bg-[#e9f6ee] px-3 py-1 text-[10px] font-semibold text-[#1f8a4c]">
            <span className="h-1.5 w-1.5 rounded-full bg-[#1f8a4c]" /> All systems normal
          </span>
        </div>
        <div className="flex items-center justify-between">
          {[
            [GitBranch, "Code"],
            [ShieldCheck, "Test"],
            [Server, "Deploy"],
          ].map(([Icon, label], i, arr) => {
            const I = Icon as typeof GitBranch;
            return (
              <React.Fragment key={label as string}>
                <div className="pop-in flex flex-col items-center gap-2" style={{ animationDelay: `${i * 0.25}s` }}>
                  <span className="grid h-14 w-14 place-items-center rounded-full border border-gold/50 bg-ivory text-gold-ink">
                    <I className="h-6 w-6" strokeWidth={1.4} />
                  </span>
                  <span className="text-[11px] font-semibold text-ink">{label as string}</span>
                </div>
                {i < arr.length - 1 && <span className="mb-6 h-px flex-1 bg-linear-to-r from-gold/30 via-gold to-gold/30" />}
              </React.Fragment>
            );
          })}
        </div>
        <div className="mt-6 grid grid-cols-2 gap-3 text-[11px]">
          {["Daily backup ✓", "SSL active ✓", "Monitoring on ✓", "Staging ready ✓"].map((t) => (
            <span key={t} className="rounded-xl bg-ivory px-3 py-2 text-ink">{t}</span>
          ))}
        </div>
      </Frame>
      <Float className="-right-3 -top-5 sm:-right-8" delay={0.6}>
        <span className="grid h-8 w-8 place-items-center rounded-full bg-[#e9f6ee] text-[#1f8a4c]"><Check className="h-4 w-4" /></span>
        <span><b className="block text-ink">Release live</b><span className="text-slate-500">Rollback available</span></span>
      </Float>
    </>
  ),
};
