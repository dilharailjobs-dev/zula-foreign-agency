import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { employerProcessSteps } from "@/lib/mock-data";
import { getLocale } from "@/lib/i18n/get-locale";
import { getDictionary } from "@/lib/i18n/get-dictionary";

export default async function ForEmployers() {
  const locale = await getLocale();
  const dict = await getDictionary(locale);
  const t = dict.home.forEmployers;

  return (
    <section className="bg-ink py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <div className="min-w-0">
            <p className="text-xs font-semibold uppercase tracking-wide text-accent">
              {t.eyebrow}
            </p>
            <h2 className="mt-3 font-display text-3xl font-bold text-cream sm:text-4xl">
              {t.heading}
            </h2>
            <p className="mt-4 text-base leading-relaxed text-cream/70">{t.description}</p>
            <Link
              href="/employers"
              className="mt-7 inline-flex items-center justify-center gap-2 rounded-full bg-accent px-7 py-3.5 text-sm font-semibold text-ink shadow-sm transition-colors hover:bg-accent-dark"
            >
              {t.cta} <ArrowRight size={16} className="rtl:rotate-180" />
            </Link>
          </div>

          <ol className="min-w-0 space-y-4">
            {employerProcessSteps.map((stepId, index) => (
              <li key={stepId} className="flex items-start gap-4">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-cream/10 text-sm font-semibold text-cream">
                  {index + 1}
                </span>
                <span className="min-w-0 pt-1 text-sm text-cream/80">
                  {dict.employerProcess[stepId as keyof typeof dict.employerProcess]}
                </span>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
