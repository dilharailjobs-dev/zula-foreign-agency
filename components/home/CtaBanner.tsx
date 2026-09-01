import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { getLocale } from "@/lib/i18n/get-locale";
import { getDictionary } from "@/lib/i18n/get-dictionary";

export default async function CtaBanner() {
  const locale = await getLocale();
  const dict = await getDictionary(locale);
  const t = dict.home.ctaBanner;

  return (
    <section className="bg-accent">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-6 px-4 py-16 text-center sm:px-6 lg:px-8">
        <h2 className="font-display text-3xl font-bold text-ink sm:text-4xl">{t.heading}</h2>
        <p className="max-w-xl text-base text-ink/80">{t.description}</p>
        <Link
          href="/apply"
          className="inline-flex items-center justify-center gap-2 rounded-full bg-ink px-8 py-3.5 text-sm font-semibold text-cream shadow-sm transition-colors hover:bg-primary-dark sm:text-base"
        >
          {t.cta}
          <ArrowRight size={18} className="rtl:rotate-180" />
        </Link>
      </div>
    </section>
  );
}
