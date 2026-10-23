import React from "react";
import Link from "next/link";
import Logo from "./Logo";
import { Mail, Phone, MapPin, Clock } from "lucide-react";
import WhatsAppIcon from "./ui/WhatsAppIcon";
import { services } from "@/lib/services";
import { industries } from "@/lib/industries";
import { site, telHref, whatsappHref, addressLine, socialLinks } from "@/lib/site";

const company = [
  { label: "About Us", href: "/about" },
  { label: "Our Work", href: "/#work" },
  { label: "How We Work", href: "/#process" },
  { label: "Insights", href: "/insights" },
  { label: "Contact", href: "/contact" },
];

export default function Footer() {
  const wa = whatsappHref();

  return (
    <footer className="relative bg-ink text-white/70">
      <div className="h-px w-full bg-linear-to-r from-transparent via-gold to-transparent" />
      <div className="mx-auto w-[90%] pt-16 pb-10">
        <div className="grid grid-cols-1 gap-10 border-b border-white/10 pb-12 md:grid-cols-2 lg:grid-cols-12">
          {/* Brand + contact */}
          <div className="space-y-5 lg:col-span-4">
            <Logo tone="light" />
            <p className="max-w-sm text-sm leading-relaxed">
              Websites, apps, software and digital marketing for growing businesses in Hyderabad and across India.
            </p>

            <ul className="space-y-2.5 text-sm">
              <li className="flex items-start gap-2.5">
                <Mail className="mt-0.5 h-4 w-4 shrink-0 text-gold" strokeWidth={1.5} />
                <a href={`mailto:${site.email}`} className="hover:text-gold">{site.email}</a>
              </li>
              {site.phone && (
                <li className="flex items-start gap-2.5">
                  <Phone className="mt-0.5 h-4 w-4 shrink-0 text-gold" strokeWidth={1.5} />
                  <a href={telHref(site.phone)} className="hover:text-gold">{site.phone}</a>
                </li>
              )}
              {wa && (
                <li className="flex items-start gap-2.5">
                  <WhatsAppIcon className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                  <a href={wa} target="_blank" rel="noopener noreferrer" className="hover:text-gold">Chat on WhatsApp</a>
                </li>
              )}
              <li className="flex items-start gap-2.5">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold" strokeWidth={1.5} />
                <span>{addressLine()}, India</span>
              </li>
              <li className="flex items-start gap-2.5">
                <Clock className="mt-0.5 h-4 w-4 shrink-0 text-gold" strokeWidth={1.5} />
                <span>{site.hours}</span>
              </li>
            </ul>

            {socialLinks.length > 0 && (
              <div className="flex flex-wrap gap-3 pt-1">
                {socialLinks.map(([label, href]) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-full border border-white/15 px-3 py-1 text-xs hover:border-gold hover:text-gold"
                  >
                    {label}
                  </a>
                ))}
              </div>
            )}
          </div>

          <FooterColumn title="Services" className="lg:col-span-3">
            {services.map((s) => (
              <FooterLink key={s.slug} href={`/services/${s.slug}`}>{s.name}</FooterLink>
            ))}
          </FooterColumn>

          <FooterColumn title="Industries" className="lg:col-span-3">
            {industries.map((i) => (
              <FooterLink key={i.slug} href={`/industries/${i.slug}`}>{i.name}</FooterLink>
            ))}
          </FooterColumn>

          <FooterColumn title="Company" className="lg:col-span-2">
            {company.map((c) => (
              <FooterLink key={c.href} href={c.href}>{c.label}</FooterLink>
            ))}
          </FooterColumn>
        </div>

        <div className="flex flex-col items-center justify-between gap-4 pt-8 text-xs text-white/50 sm:flex-row">
          <p>© 2026 {site.legalName}. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link href="/privacy-policy" className="hover:text-gold">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-gold">Terms of Service</Link>
            <Link href="/sitemap.xml" className="hover:text-gold">Sitemap</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterColumn({ title, className = "", children }: { title: string; className?: string; children: React.ReactNode }) {
  return (
    <div className={className}>
      <h3 className="mb-4 font-sans text-xs font-semibold uppercase tracking-[0.18em] text-gold">{title}</h3>
      <ul className="space-y-2.5 text-sm">{children}</ul>
    </div>
  );
}

function FooterLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <li>
      <Link href={href} className="transition-colors hover:text-gold">{children}</Link>
    </li>
  );
}
