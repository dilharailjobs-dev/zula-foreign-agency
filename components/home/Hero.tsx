import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { getLocale } from "@/lib/i18n/get-locale";
import { getDictionary } from "@/lib/i18n/get-dictionary";

export default async function Hero() {
  const locale = await getLocale();
  const dict = await getDictionary(locale);
  const t = dict.home.hero;

  return (
    <section className="relative overflow-hidden bg-primary">
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=1920&q=80"
          alt="A confident construction worker on site"
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-45"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary-dark/95 via-primary/70 to-primary/40" />
      </div>

      <div className="relative mx-auto flex max-w-7xl flex-col items-start px-4 py-20 sm:px-6 sm:py-28 lg:px-8 lg:py-32">
        <span className="rounded-full bg-cream/10 px-4 py-1.5 text-xs font-semibold tracking-wide text-cream ring-1 ring-cream/20">
          {t.badge}
        </span>

        <h1 className="mt-6 max-w-2xl font-display text-4xl font-bold leading-tight text-cream sm:text-5xl lg:text-6xl">
          {t.title}
        </h1>

        <p className="mt-6 max-w-xl text-base text-cream/80 sm:text-lg">{t.description}</p>

        <div className="mt-9 flex flex-col gap-3 sm:flex-row">
          <Link
            href="/jobs"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-accent px-7 py-3.5 text-sm font-semibold text-ink shadow-sm transition-colors hover:bg-accent-dark sm:text-base"
          >
            {t.findJobs}
            <ArrowRight size={18} />
          </Link>
          <Link
            href="/apply"
            className="inline-flex items-center justify-center gap-2 rounded-full border border-cream/30 bg-transparent px-7 py-3.5 text-sm font-semibold text-cream transition-colors hover:bg-cream/10 sm:text-base"
          >
            {t.registerCta}
          </Link>
        </div>
      </div>
    </section>
  );
}
