"use client";

import React, { useEffect, useId, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Send, Check, Loader2, AlertCircle, RotateCcw, ChevronDown, X } from "lucide-react";
import WhatsAppIcon from "./ui/WhatsAppIcon";
import { services } from "@/lib/services";
import { site, whatsappHref } from "@/lib/site";

const MAX_MESSAGE = 5000;
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

const inputBase =
  "w-full rounded-xl border bg-white text-sm text-ink outline-none transition-all placeholder:text-slate-400 focus:border-gold focus:ring-4 focus:ring-gold/15";

type Status = "idle" | "sending" | "sent" | "error";
type Errors = Partial<Record<"name" | "email" | "phone" | "message", string>>;

const empty = { name: "", email: "", phone: "", company: "", message: "", website: "" };

export default function ContactForm({ className = "", compact = false }: { className?: string; compact?: boolean }) {
  const pad = compact ? "px-3.5 py-2.5" : "px-4 py-3";
  const [form, setForm] = useState(empty);
  const [selected, setSelected] = useState<string[]>([]);
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<Status>("idle");
  const [serverMsg, setServerMsg] = useState("");

  const set = (k: keyof typeof empty) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((f) => ({ ...f, [k]: e.target.value }));
    if (errors[k as keyof Errors]) setErrors((er) => ({ ...er, [k]: undefined }));
  };

  const toggle = (name: string) =>
    setSelected((prev) => (prev.includes(name) ? prev.filter((n) => n !== name) : [...prev, name]));

  const validate = (): Errors => {
    const er: Errors = {};
    const name = form.name.trim();
    if (name.length < 2) er.name = "Please enter your name (at least 2 letters).";
    else if (name.length > 100) er.name = "Name must be under 100 characters.";
    if (!EMAIL_RE.test(form.email.trim())) er.email = "Please enter a valid email address.";
    const digits = form.phone.replace(/\D/g, "");
    if (form.phone.trim() && (digits.length < 10 || digits.length > 13)) er.phone = "Please enter a valid phone number.";
    if (form.message.length > MAX_MESSAGE) er.message = `Please keep it under ${MAX_MESSAGE.toLocaleString("en-IN")} characters.`;
    return er;
  };

  const summary = () =>
    [
      `Name: ${form.name.trim()}`,
      `Email: ${form.email.trim()}`,
      form.phone.trim() && `Phone: ${form.phone.trim()}`,
      form.company.trim() && `Company: ${form.company.trim()}`,
      `Services: ${selected.join(", ") || "Not sure yet"}`,
      form.message.trim() && `\n${form.message.trim()}`,
    ]
      .filter(Boolean)
      .join("\n");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const er = validate();
    setErrors(er);
    if (Object.keys(er).length) {
      const first = Object.keys(er)[0];
      document.getElementById(`cf-${first}`)?.focus();
      return;
    }

    setStatus("sending");
    setServerMsg("");
    try {
      const res = await fetch(site.contactApi, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          name: form.name.trim(),
          email: form.email.trim(),
          phone: form.phone.trim(),
          company: form.company.trim(),
          service: selected.join(", "),
          message: form.message.trim(),
          sourcePage: window.location.href,
          website: form.website, // spam trap, real visitors leave it empty
        }),
      });
      const data: { success?: boolean; message?: string; errors?: { path?: string; message?: string }[] } = await res
        .json()
        .catch(() => ({}));
      if (res.ok && data.success !== false) {
        setStatus("sent");
      } else if (data.errors?.length) {
        // Server-side validation: show each message under its field
        const er: Errors = {};
        for (const item of data.errors) {
          const key = item.path as keyof Errors;
          if (key && ["name", "email", "phone", "message"].includes(key) && item.message) er[key] = item.message;
        }
        setErrors(er);
        setStatus("idle");
        if (Object.keys(er).length) document.getElementById(`cf-${Object.keys(er)[0]}`)?.focus();
        else {
          setServerMsg(data.errors[0]?.message || data.message || "");
          setStatus("error");
        }
      } else {
        setServerMsg(res.status === 404 ? "" : data.message || "");
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  const reset = () => {
    setForm(empty);
    setSelected([]);
    setStatus("idle");
  };

  const wa = whatsappHref(summary());
  const mailto = `mailto:${site.email}?subject=${encodeURIComponent(`Project enquiry from ${form.name.trim()}`)}&body=${encodeURIComponent(summary())}`;

  return (
    <div
      className={`relative overflow-hidden bg-white ${
        compact ? "p-6 sm:p-8" : "rounded-[28px] border border-gold-soft p-6 shadow-[0_40px_80px_-50px_rgba(140,106,18,0.55)] sm:p-10"
      } ${className}`}
    >
      <div className="pointer-events-none absolute inset-x-0 top-0 h-1 bg-linear-to-r from-gold/0 via-gold to-gold/0" aria-hidden="true" />

      <AnimatePresence mode="wait" initial={false}>
        {status === "sent" ? (
          <motion.div
            key="sent"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="space-y-5 py-12 text-center"
            role="status"
          >
            <motion.div
              initial={{ scale: 0.6, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ type: "spring", stiffness: 260, damping: 18, delay: 0.1 }}
              className="mx-auto flex h-16 w-16 items-center justify-center rounded-full border border-gold bg-ivory text-gold-ink"
            >
              <Check className="h-8 w-8" strokeWidth={2} />
            </motion.div>
            <h3 className="text-3xl text-ink sm:text-4xl">Thank you, {form.name.trim().split(" ")[0] || "there"}!</h3>
            <p className="mx-auto max-w-md text-sm leading-relaxed text-slate-600">
              We&apos;ve received your enquiry and will reply within one working day at{" "}
              <strong className="text-ink">{form.email.trim()}</strong>. Need something sooner? Call or WhatsApp us.
            </p>
            <div className="flex flex-wrap justify-center gap-3 pt-2">
              {wa && (
                <a href={whatsappHref()} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full bg-[#25D366] px-5 py-2.5 text-sm font-semibold text-white">
                  <WhatsAppIcon className="h-4 w-4" /> WhatsApp us
                </a>
              )}
              <button onClick={reset} className="inline-flex items-center gap-2 rounded-full border border-gold-soft px-5 py-2.5 text-sm font-semibold text-gold-ink hover:bg-ivory">
                <RotateCcw className="h-4 w-4" /> Send another enquiry
              </button>
            </div>
          </motion.div>
        ) : (
          <motion.form
            key="form"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onSubmit={handleSubmit}
            noValidate
            className={compact ? "space-y-5" : "space-y-7"}
          >
            <div>
              <h3 className={compact ? "text-2xl text-ink" : "text-2xl text-ink sm:text-3xl"}>Tell us about your project</h3>
              <p className="mt-1.5 text-sm text-slate-500">Takes about a minute. Fields marked * are required.</p>
            </div>

            <ServicePicker selected={selected} onToggle={toggle} onClear={() => setSelected([])} pad={pad} />

            <div className={`grid grid-cols-1 sm:grid-cols-2 ${compact ? "gap-4" : "gap-5"}`}>
              <Field id="cf-name" label="Name" required error={errors.name}>
                <input id="cf-name" type="text" autoComplete="name" maxLength={100} value={form.name} onChange={set("name")} placeholder="Your full name" aria-invalid={!!errors.name} aria-describedby={errors.name ? "cf-name-err" : undefined} className={`${inputBase} ${pad} ${errors.name ? "border-red-400" : "border-slate-200"}`} />
              </Field>
              <Field id="cf-email" label="Email" required error={errors.email}>
                <input id="cf-email" type="email" autoComplete="email" value={form.email} onChange={set("email")} placeholder="you@example.com" aria-invalid={!!errors.email} aria-describedby={errors.email ? "cf-email-err" : undefined} className={`${inputBase} ${pad} ${errors.email ? "border-red-400" : "border-slate-200"}`} />
              </Field>
              <Field id="cf-phone" label="Phone / WhatsApp" error={errors.phone}>
                <input id="cf-phone" type="tel" inputMode="tel" autoComplete="tel" value={form.phone} onChange={set("phone")} placeholder="+91 98765 43210" aria-invalid={!!errors.phone} aria-describedby={errors.phone ? "cf-phone-err" : undefined} className={`${inputBase} ${pad} ${errors.phone ? "border-red-400" : "border-slate-200"}`} />
              </Field>
              <Field id="cf-company" label="Company / Business">
                <input id="cf-company" type="text" autoComplete="organization" value={form.company} onChange={set("company")} placeholder="Business name" className={`${inputBase} ${pad} border-slate-200`} />
              </Field>
            </div>

            <Field id="cf-message" label="Tell us a little about your project" error={errors.message} hint={`${form.message.length.toLocaleString("en-IN")} / ${MAX_MESSAGE.toLocaleString("en-IN")}`}>
              <textarea id="cf-message" rows={compact ? 3 : 5} maxLength={MAX_MESSAGE} value={form.message} onChange={set("message")} placeholder="What would you like to build or improve? Any deadline or budget in mind?" aria-invalid={!!errors.message} className={`${inputBase} ${pad} resize-none ${errors.message ? "border-red-400" : "border-slate-200"}`} />
            </Field>

            {/* Spam trap: hidden from people, bots tend to fill it */}
            <div aria-hidden="true" className="absolute left-[-9999px] h-0 w-0 overflow-hidden">
              <label>
                Website
                <input type="text" name="website" tabIndex={-1} autoComplete="off" value={form.website} onChange={set("website")} />
              </label>
            </div>

            <AnimatePresence>
              {status === "error" && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  className="overflow-hidden"
                  role="alert"
                >
                  <div className="rounded-2xl border border-red-200 bg-red-50 p-4 text-sm text-red-800">
                    <p className="flex items-center gap-2 font-semibold">
                      <AlertCircle className="h-4 w-4 shrink-0" /> We couldn&apos;t send your message just now.
                    </p>
                    <p className="mt-1 text-red-700">{serverMsg || "Please try again, or send the same details on WhatsApp or email:"}</p>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {wa && (
                        <a href={wa} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 rounded-full bg-[#25D366] px-4 py-2 text-xs font-semibold text-white">
                          <WhatsAppIcon className="h-3.5 w-3.5" /> Send on WhatsApp
                        </a>
                      )}
                      <a href={mailto} className="inline-flex items-center rounded-full border border-red-200 bg-white px-4 py-2 text-xs font-semibold text-red-800">
                        Send by email
                      </a>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            <button
              type="submit"
              disabled={status === "sending"}
              className={`btn-gold flex w-full items-center justify-center gap-2 rounded-full px-6 ${compact ? "py-3.5" : "py-4"} text-sm font-semibold text-ink disabled:cursor-wait disabled:opacity-80`}
            >
              {status === "sending" ? (
                <>
                  <Loader2 className="h-4 w-4 animate-spin" /> Sending…
                </>
              ) : (
                <>
                  <Send className="h-4 w-4" /> Get My Free Quote
                </>
              )}
            </button>
            <p className="text-center text-xs text-slate-500">
              We reply within one working day and never share your details. See our{" "}
              <a href="/privacy-policy" className="underline decoration-gold/50 underline-offset-2 hover:text-gold-ink">privacy policy</a>.
            </p>
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  );
}

function Field({
  id,
  label,
  required,
  error,
  hint,
  children,
}: {
  id: string;
  label: string;
  required?: boolean;
  error?: string;
  hint?: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <div className="mb-1.5 flex items-baseline justify-between gap-2">
        <label htmlFor={id} className="text-xs font-semibold text-slate-700">
          {label} {required && <span className="text-gold-ink">*</span>}
        </label>
        {hint && <span className="text-[11px] text-slate-400">{hint}</span>}
      </div>
      {children}
      {error && (
        <p id={`${id}-err`} className="mt-1.5 flex items-center gap-1 text-xs text-red-600">
          <AlertCircle className="h-3 w-3" /> {error}
        </p>
      )}
    </div>
  );
}

/** Multi-select dropdown for "What do you need help with?" */
function ServicePicker({
  selected,
  onToggle,
  onClear,
  pad,
}: {
  selected: string[];
  onToggle: (name: string) => void;
  onClear: () => void;
  pad: string;
}) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const listId = useId();

  // Close on outside click or Escape
  useEffect(() => {
    if (!open) return;
    const onDown = (e: MouseEvent) => {
      if (!ref.current?.contains(e.target as Node)) setOpen(false);
    };
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    document.addEventListener("mousedown", onDown);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onDown);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  const label =
    selected.length === 0 ? "Select one or more services" : selected.length === 1 ? selected[0] : `${selected[0]} +${selected.length - 1} more`;

  return (
    <div ref={ref} className="relative">
      <span className="mb-1.5 block text-xs font-semibold text-slate-700">What do you need help with?</span>
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-controls={listId}
        className={`${inputBase} ${pad} flex items-center justify-between gap-2 text-left ${open ? "border-gold ring-4 ring-gold/15" : "border-slate-200"}`}
      >
        <span className={`truncate ${selected.length ? "text-ink" : "text-slate-400"}`}>{label}</span>
        <ChevronDown className={`h-4 w-4 shrink-0 text-gold-ink transition-transform duration-300 ${open ? "rotate-180" : ""}`} />
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            id={listId}
            role="listbox"
            aria-multiselectable="true"
            initial={{ opacity: 0, y: -6, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -6, scale: 0.98 }}
            transition={{ duration: 0.18, ease: [0.22, 1, 0.36, 1] }}
            className="absolute inset-x-0 top-full z-30 mt-2 origin-top overflow-hidden rounded-2xl border border-gold-soft bg-white shadow-[0_24px_50px_-20px_rgba(20,18,15,0.3)]"
          >
            <ul className="max-h-64 overflow-y-auto p-1.5">
              {services.map((s) => {
                const on = selected.includes(s.name);
                return (
                  <li key={s.slug}>
                    <button
                      type="button"
                      role="option"
                      aria-selected={on}
                      onClick={() => onToggle(s.name)}
                      className={`flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-left text-sm transition-colors ${on ? "bg-ivory text-ink" : "text-slate-700 hover:bg-ivory/60"}`}
                    >
                      <span className={`flex h-4.5 w-4.5 shrink-0 items-center justify-center rounded-md border transition-colors ${on ? "border-gold bg-gold text-ink" : "border-slate-300 bg-white"}`}>
                        {on && <Check className="h-3 w-3" strokeWidth={3} />}
                      </span>
                      <span className={on ? "font-semibold" : ""}>{s.name}</span>
                    </button>
                  </li>
                );
              })}
            </ul>
            <div className="flex items-center justify-between border-t border-gold-soft bg-ivory/60 px-3 py-2">
              <button type="button" onClick={onClear} className="text-xs font-medium text-slate-500 hover:text-ink disabled:opacity-40" disabled={!selected.length}>
                Clear
              </button>
              <button type="button" onClick={() => setOpen(false)} className="rounded-full bg-ink px-4 py-1.5 text-xs font-semibold text-white">
                Done{selected.length ? ` (${selected.length})` : ""}
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {selected.length > 0 && !open && (
        <div className="mt-2 flex flex-wrap gap-1.5">
          {selected.map((name) => (
            <span key={name} className="inline-flex items-center gap-1 rounded-full bg-ivory py-1 pl-2.5 pr-1 text-[11px] font-medium text-gold-ink">
              {name}
              <button type="button" onClick={() => onToggle(name)} aria-label={`Remove ${name}`} className="grid h-4 w-4 place-items-center rounded-full hover:bg-gold/20">
                <X className="h-3 w-3" />
              </button>
            </span>
          ))}
        </div>
      )}
    </div>
  );
}
