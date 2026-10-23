import React from "react";
import { Building2, MapPin, Mail, Phone, Globe } from "lucide-react";
import Breadcrumbs from "./ui/Breadcrumbs";
import { site, telHref, addressLine } from "@/lib/site";

/** Shared layout for Privacy Policy and Terms: header, readable body and company contact card. */
export default function LegalPage({
  title,
  href,
  updated,
  children,
}: {
  title: string;
  href: string;
  updated: string;
  children: React.ReactNode;
}) {
  const website = site.url.replace(/^https?:\/\//, "");
  const details = [
    { icon: Building2, label: "Company", value: site.legalName },
    { icon: MapPin, label: "Address", value: `${addressLine()}, India` },
    { icon: Mail, label: "Email", value: site.email, href: `mailto:${site.email}` },
    ...(site.phone ? [{ icon: Phone, label: "Phone", value: site.phone, href: telHref(site.phone) }] : []),
    { icon: Globe, label: "Website", value: website, href: site.url },
  ];

  return (
    <>
      <section className="relative overflow-hidden bg-ivory pb-12 pt-28 lg:pt-36">
        <div className="bg-dots pointer-events-none absolute inset-0 opacity-50" aria-hidden="true" />
        <div className="relative mx-auto w-[90%] max-w-3xl">
          <Breadcrumbs items={[{ name: title, href }]} />
          <p className="eyebrow mt-8">Legal</p>
          <h1 className="mt-3 text-4xl text-ink sm:text-5xl lg:text-6xl">{title}</h1>
          <p className="mt-4 text-sm text-slate-500">
            Last updated: {updated} · Applies to{" "}
            <a href={site.url} className="text-gold-ink underline decoration-gold/50 underline-offset-2">{website}</a>
          </p>
        </div>
      </section>

      <section className="bg-white pb-20 pt-12">
        <div className="mx-auto w-[90%] max-w-3xl">
          <div className="space-y-6 leading-relaxed text-slate-700 [&_a]:text-gold-ink [&_a]:underline [&_a]:decoration-gold/50 [&_a]:underline-offset-2 [&_h2]:mt-12 [&_h2]:border-t [&_h2]:border-gold-soft [&_h2]:pt-8 [&_h2]:text-2xl [&_h2]:text-ink sm:[&_h2]:text-3xl [&_ul]:list-disc [&_ul]:space-y-1.5 [&_ul]:pl-5 [&_ul]:marker:text-gold">
            {children}
          </div>

          <div className="mt-14 rounded-3xl border border-gold-soft bg-ivory p-6 sm:p-8">
            <p className="eyebrow">Contact details</p>
            <h2 className="mt-2 text-2xl text-ink sm:text-3xl">Questions? Get in touch</h2>
            <dl className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
              {details.map((d) => (
                <div key={d.label} className="flex items-start gap-3 rounded-2xl bg-white p-4">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-gold/40 bg-ivory text-gold-ink">
                    <d.icon className="h-4 w-4" strokeWidth={1.5} />
                  </span>
                  <div className="min-w-0">
                    <dt className="text-[10px] font-semibold uppercase tracking-[0.18em] text-slate-500">{d.label}</dt>
                    <dd className="mt-0.5 wrap-break-word text-sm font-medium text-ink">
                      {d.href ? (
                        <a href={d.href} className="hover:text-gold-ink">{d.value}</a>
                      ) : (
                        d.value
                      )}
                    </dd>
                  </div>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>
    </>
  );
}
