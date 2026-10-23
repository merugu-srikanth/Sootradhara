"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Logo from "./Logo";
import IconTile from "./ui/IconTile";
import { ChevronDown, Menu, X, ArrowRight, Phone, Mail } from "lucide-react";
import WhatsAppIcon from "./ui/WhatsAppIcon";
import { site, telHref, whatsappHref } from "@/lib/site";
import { motion, AnimatePresence } from "framer-motion";
import { services } from "@/lib/services";
import { industries } from "@/lib/industries";

type MenuKey = "services" | "industries" | null;

const plainLinks = [
  // { label: "Work", href: "/#work" },
  { label: "About", href: "/about" },
  { label: "Team", href: "/team" },
  { label: "Insights", href: "/insights" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openMenu, setOpenMenu] = useState<MenuKey>(null);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock page scroll while the mobile menu is open
  useEffect(() => {
    if (!mobileOpen) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    document.documentElement.classList.add("menu-open");
    return () => {
      document.body.style.overflow = prev;
      document.documentElement.classList.remove("menu-open");
    };
  }, [mobileOpen]);

  const wa = whatsappHref();

  // Close menus on route change (state reset during render, as React recommends)
  const [lastPath, setLastPath] = useState(pathname);
  if (pathname !== lastPath) {
    setLastPath(pathname);
    setMobileOpen(false);
    setOpenMenu(null);
  }

  const linkClass = (active: boolean) =>
    `link-underline rounded-full px-3.5 py-2.5 text-[14.5px] font-medium transition-colors ${
      active ? "text-ink" : "text-slate-600 hover:text-ink"
    }`;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 border-b transition-all duration-500 ${
        scrolled || mobileOpen
          ? "border-gold-soft bg-white/95 shadow-[0_10px_30px_-20px_rgba(20,18,15,0.25)] backdrop-blur-xl"
          : "border-transparent bg-transparent"
      }`}
    >
      <div className={`mx-auto flex w-[90%] max-w-[1280px] items-center justify-between transition-all duration-500 ${scrolled || mobileOpen ? "h-[72px]" : "h-[84px]"}`}>
        <Logo tone="dark" priority />

        {/* Desktop navigation */}
        <nav className="hidden lg:flex items-center gap-1" aria-label="Main">
          {/* Services */}
          <Link
            href="/"
          >
            Home
          </Link>
          <div
            className="relative"
            onMouseEnter={() => setOpenMenu("services")}
            onMouseLeave={() => setOpenMenu(null)}
          >
            <button
              type="button"
              data-active={pathname.startsWith("/services")}
              className={`flex items-center gap-1 ${linkClass(pathname.startsWith("/services"))}`}
              aria-expanded={openMenu === "services"}
              onClick={() => setOpenMenu(openMenu === "services" ? null : "services")}
            >
              Services
              <ChevronDown className={`h-4 w-4 transition-transform ${openMenu === "services" ? "rotate-180" : ""}`} />
            </button>
            <AnimatePresence>
            {openMenu === "services" && (
              <motion.div
                initial={{ opacity: 0, y: 10, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 6, scale: 0.98 }}
                style={{ transformOrigin: "40px 0" }}
                transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
                className="absolute -left-2 top-full w-[640px] pt-3 xl:w-[780px]"
              >
                <div className="relative grid grid-cols-2 gap-1 rounded-3xl border border-gold/50 bg-white p-3.5 shadow-[0_30px_60px_-20px_rgba(20,18,15,0.18)] xl:grid-cols-3">
                  <span className="absolute -top-[9px] left-[38px] h-4 w-4 rotate-45 rounded-tl-[4px] border-l border-t border-gold/50 bg-white" aria-hidden="true" />
                  {services.map((s) => (
                    <Link
                      key={s.slug}
                      href={`/services/${s.slug}`}
                      className="group flex items-start gap-3 rounded-xl p-2.5 hover:bg-ivory"
                    >
                      <IconTile icon={s.icon} size="sm" />
                      <span>
                        <span className="block text-sm font-semibold text-ink group-hover:text-gold-ink">{s.name}</span>
                        <span className="block text-xs text-slate-500 line-clamp-1">{s.tagline}</span>
                      </span>
                    </Link>
                  ))}
                  <Link
                    href="/services"
                    className="col-span-full mt-1 flex items-center justify-center gap-1.5 rounded-xl border-t border-gold-soft pt-3 pb-1 text-xs font-semibold text-gold-ink"
                  >
                    View all services <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                </div>
              </motion.div>
            )}
            </AnimatePresence>
          </div>

          {/* Industries */}
          <div
            className="relative"
            onMouseEnter={() => setOpenMenu("industries")}
            onMouseLeave={() => setOpenMenu(null)}
          >
            <button
              type="button"
              data-active={pathname.startsWith("/industries")}
              className={`flex items-center gap-1 ${linkClass(pathname.startsWith("/industries"))}`}
              aria-expanded={openMenu === "industries"}
              onClick={() => setOpenMenu(openMenu === "industries" ? null : "industries")}
            >
              Industries
              <ChevronDown className={`h-4 w-4 transition-transform ${openMenu === "industries" ? "rotate-180" : ""}`} />
            </button>
            <AnimatePresence>
            {openMenu === "industries" && (
              <motion.div
                initial={{ opacity: 0, y: 10, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 6, scale: 0.98 }}
                style={{ transformOrigin: "40px 0" }}
                transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
                className="absolute -left-2 top-full w-[600px] pt-3"
              >
                <div className="relative grid grid-cols-2 gap-1 rounded-3xl border border-gold/50 bg-white p-3.5 shadow-[0_30px_60px_-20px_rgba(20,18,15,0.18)]">
                  <span className="absolute -top-[9px] left-[38px] h-4 w-4 rotate-45 rounded-tl-[4px] border-l border-t border-gold/50 bg-white" aria-hidden="true" />
                  {industries.map((ind) => (
                    <Link
                      key={ind.slug}
                      href={`/industries/${ind.slug}`}
                      className="group flex items-start gap-3 rounded-xl p-2.5 hover:bg-ivory"
                    >
                      <IconTile icon={ind.icon} size="sm" />
                      <span>
                        <span className="block text-sm font-semibold text-ink group-hover:text-gold-ink">{ind.name}</span>
                        <span className="block text-xs text-slate-500 line-clamp-2">{ind.tagline}</span>
                      </span>
                    </Link>
                  ))}
                  <Link
                    href="/industries"
                    className="col-span-full mt-1 flex items-center justify-center gap-1.5 rounded-xl border-t border-gold-soft pt-3 pb-1 text-xs font-semibold text-gold-ink"
                  >
                    View all industries <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                </div>
              </motion.div>
            )}
            </AnimatePresence>
          </div>

          {plainLinks.map((l) => (
            <Link key={l.href} href={l.href} data-active={pathname === l.href} className={linkClass(pathname === l.href)}>
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:block">
          <Link
            href="/contact"
            className="btn-gold inline-flex h-11 items-center gap-2 rounded-full px-5 text-sm font-semibold"
          >
            Get a Free Quote
          </Link>
        </div>

        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className={`lg:hidden grid h-11 w-11 place-items-center rounded-full border transition-colors ${mobileOpen ? "border-gold bg-gold text-ink" : "border-gold-soft bg-white/70 text-ink hover:bg-ivory"}`}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
        >
          <AnimatePresence mode="wait" initial={false}>
            <motion.span
              key={mobileOpen ? "x" : "m"}
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </motion.span>
          </AnimatePresence>
        </button>
      </div>

      {/* Mobile drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            key="drawer"
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="absolute inset-x-0 top-full flex h-[calc(100dvh-72px)] flex-col overflow-hidden border-t border-gold-soft bg-white lg:hidden"
          >
            <div className="bg-dots pointer-events-none absolute inset-0 opacity-40" aria-hidden="true" />
            <div className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full bg-gold/15 blur-3xl" aria-hidden="true" />

            <nav aria-label="Mobile" className="relative flex-1 overflow-y-auto px-[6%] pb-6 pt-2">
              <MobileGroup index={0} title="Services">
                {services.map((s) => (
                  <Link key={s.slug} href={`/services/${s.slug}`} className="flex items-center gap-3 rounded-2xl px-2 py-2 hover:bg-ivory">
                    <IconTile icon={s.icon} size="sm" />
                    <span className="min-w-0">
                      <span className="block text-sm font-semibold text-ink">{s.name}</span>
                      <span className="block truncate text-xs text-slate-500">{s.tagline}</span>
                    </span>
                  </Link>
                ))}
                <Link href="/services" className="mt-1 flex items-center gap-1.5 px-2 py-2 text-xs font-semibold text-gold-ink">
                  View all services <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </MobileGroup>
              <MobileGroup index={1} title="Industries">
                {industries.map((ind) => (
                  <Link key={ind.slug} href={`/industries/${ind.slug}`} className="flex items-center gap-3 rounded-2xl px-2 py-2 hover:bg-ivory">
                    <IconTile icon={ind.icon} size="sm" />
                    <span className="text-sm font-semibold text-ink">{ind.name}</span>
                  </Link>
                ))}
              </MobileGroup>
              {plainLinks.map((l, i) => {
                const active = pathname === l.href;
                return (
                  <motion.div
                    key={l.href}
                    initial={{ opacity: 0, x: -14 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.08 + (i + 2) * 0.05, duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                    className="border-b border-gold-soft/70"
                  >
                    <Link href={l.href} className="group flex items-center justify-between py-4">
                      <span className="flex items-baseline gap-3">
                        <span className="font-serif text-xs text-gold">{String(i + 3).padStart(2, "0")}</span>
                        <span className={`font-serif text-2xl ${active ? "text-gold-ink" : "text-ink"}`}>{l.label}</span>
                      </span>
                      <ArrowRight className="h-4 w-4 text-slate-300 transition-all group-hover:translate-x-0.5 group-hover:text-gold-ink" />
                    </Link>
                  </motion.div>
                );
              })}
            </nav>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35, duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="relative border-t border-gold-soft bg-ivory px-[6%] pb-[max(1.25rem,env(safe-area-inset-bottom))] pt-4"
            >
              <Link href="/contact" className="btn-gold flex h-12 items-center justify-center gap-2 rounded-full text-sm font-semibold text-ink">
                Get a Free Quote <ArrowRight className="h-4 w-4" />
              </Link>
              <div className="mt-3 grid grid-cols-2 gap-2">
                {site.phone && (
                  <a href={telHref(site.phone)} className="flex h-11 items-center justify-center gap-2 rounded-full border border-gold-soft bg-white text-sm font-semibold text-ink">
                    <Phone className="h-4 w-4 text-gold-ink" strokeWidth={1.6} /> Call
                  </a>
                )}
                {wa && (
                  <a href={wa} target="_blank" rel="noopener noreferrer" className="flex h-11 items-center justify-center gap-2 rounded-full bg-[#25D366] text-sm font-semibold text-white">
                    <WhatsAppIcon className="h-4 w-4" /> WhatsApp
                  </a>
                )}
              </div>
              <a href={`mailto:${site.email}`} className="mt-3 flex items-center justify-center gap-1.5 text-xs text-slate-500">
                <Mail className="h-3.5 w-3.5" strokeWidth={1.6} /> {site.email}
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

function MobileGroup({ title, index, children }: { title: string; index: number; children: React.ReactNode }) {
  const [open, setOpen] = useState(false);
  return (
    <motion.div
      initial={{ opacity: 0, x: -14 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 0.08 + index * 0.05, duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
      className="border-b border-gold-soft/70"
    >
      <button type="button" onClick={() => setOpen(!open)} className="flex w-full items-center justify-between py-4" aria-expanded={open}>
        <span className="flex items-baseline gap-3">
          <span className="font-serif text-xs text-gold">{String(index + 1).padStart(2, "0")}</span>
          <span className="font-serif text-2xl text-ink">{title}</span>
        </span>
        <span className={`grid h-8 w-8 place-items-center rounded-full border transition-all duration-300 ${open ? "rotate-180 border-gold bg-gold text-ink" : "border-gold-soft text-gold-ink"}`}>
          <ChevronDown className="h-4 w-4" />
        </span>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <div className="pb-3">{children}</div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
