import Link from "next/link";
import { ArrowRight } from "lucide-react";
import GoldThread from "@/components/ui/GoldThread";
import { services } from "@/lib/services";

export default function NotFound() {
  return (
    <section className="relative overflow-hidden bg-white pt-32 pb-24">
      <div className="relative mx-auto w-[90%] max-w-3xl text-center">
        <p className="font-serif text-8xl text-gold sm:text-9xl">404</p>
        <GoldThread className="mx-auto mt-2 h-10 w-full max-w-md" />
        <h1 className="mt-4 text-3xl sm:text-5xl text-ink">This thread seems to be loose</h1>
        <p className="mx-auto mt-4 max-w-xl text-slate-600">
          The page you&apos;re looking for has moved or doesn&apos;t exist. Let&apos;s get you back on track.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Link href="/" className="inline-flex items-center gap-2 rounded-full bg-gold px-7 py-3.5 text-sm font-semibold text-ink hover:bg-gold-deep">
            Back to Home <ArrowRight className="h-4 w-4" />
          </Link>
          <Link href="/contact" className="inline-flex items-center rounded-full border border-gold px-7 py-3.5 text-sm font-semibold text-gold-ink hover:bg-ivory">
            Contact Us
          </Link>
        </div>
        <div className="mt-12 border-t border-gold-soft pt-8">
          <p className="text-sm text-slate-500">Popular services</p>
          <div className="mt-4 flex flex-wrap justify-center gap-2">
            {services.map((s) => (
              <Link key={s.slug} href={`/services/${s.slug}`} className="rounded-full border border-gold-soft px-3 py-1.5 text-xs text-slate-700 hover:border-gold hover:text-gold-ink">
                {s.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
