import type { ReactNode } from "react";
import { Mail, Phone, MapPin, Clock, ArrowUpRight } from "lucide-react";
import WhatsAppIcon from "./ui/WhatsAppIcon";
import ContactForm from "./ContactForm";
import Reveal from "./ui/Reveal";
import { site, telHref, whatsappHref, addressLine } from "@/lib/site";

/** Home page contact section: one split card, details on the left, form on the right. */
export default function ConsultationCTA({ id = "contact-section" }: { id?: string }) {
  const wa = whatsappHref();

  const items = [
    site.phone && { icon: <Phone className="h-4 w-4" strokeWidth={1.5} />, label: "Call", value: site.phone, href: telHref(site.phone) },
    wa && { icon: <WhatsAppIcon className="h-4 w-4" />, label: "WhatsApp", value: "Chat with us", href: wa, external: true },
    { icon: <Mail className="h-4 w-4" strokeWidth={1.5} />, label: "Email", value: site.email, href: `mailto:${site.email}` },
  ].filter(Boolean) as { icon: ReactNode; label: string; value: string; href: string; external?: boolean }[];

  return (
    <section id={id} className="scroll-mt-24 bg-white py-16 sm:py-20">
      <Reveal className="mx-auto w-[90%] max-w-295">
        <div className="grid grid-cols-1 overflow-hidden rounded-[28px] border border-gold-soft shadow-[0_40px_80px_-50px_rgba(140,106,18,0.5)] lg:grid-cols-12">
          {/* Details panel */}
          <div className="relative overflow-hidden bg-ink p-7 text-white sm:p-9 lg:col-span-5">
            <div className="bg-dots-dark pointer-events-none absolute inset-0 opacity-40" aria-hidden="true" />
            <div className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full bg-gold/20 blur-3xl" aria-hidden="true" />

            <div className="relative flex h-full flex-col">
              <p className="eyebrow text-gold!">Contact</p>
              <h2 className="mt-3 text-3xl leading-tight text-white sm:text-4xl">
                Let&apos;s talk about your <em className="text-gold-grad italic">project</em>
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-white/70">
                Share a few details and get honest advice with a free quote. We reply within one working day.
              </p>

              <ul className="mt-7 space-y-2.5">
                {items.map((it) => (
                  <li key={it.label}>
                    <a
                      href={it.href}
                      {...(it.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                      className="group flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 transition-colors hover:border-gold/60 hover:bg-white/10"
                    >
                      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-gold/40 text-gold">{it.icon}</span>
                      <span className="min-w-0 flex-1">
                        <span className="block text-[10px] font-semibold uppercase tracking-[0.18em] text-white/50">{it.label}</span>
                        <span className="block truncate text-sm text-white">{it.value}</span>
                      </span>
                      <ArrowUpRight className="h-4 w-4 text-white/40 transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-gold" />
                    </a>
                  </li>
                ))}
              </ul>

              <div className="mt-auto space-y-2 border-t border-white/10 pt-6 text-xs text-white/60">
                <p className="flex items-center gap-2.5">
                  <MapPin className="h-3.5 w-3.5 text-gold" strokeWidth={1.5} /> {addressLine()}
                </p>
                <p className="flex items-center gap-2.5">
                  <Clock className="h-3.5 w-3.5 text-gold" strokeWidth={1.5} /> {site.hours}
                </p>
              </div>
            </div>
          </div>

          {/* Form */}
          <ContactForm compact className="lg:col-span-7" />
        </div>
      </Reveal>
    </section>
  );
}
