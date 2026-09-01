import type { Metadata } from "next";
import { Suspense } from "react";
import ApplyForm from "@/components/apply/ApplyForm";
import { getLocale } from "@/lib/i18n/get-locale";
import { getDictionary } from "@/lib/i18n/get-dictionary";

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale();
  const dict = await getDictionary(locale);
  return {
    title: dict.metadata.apply.title,
    description: dict.metadata.apply.description,
  };
}

export default async function ApplyPage() {
  const locale = await getLocale();
  const dict = await getDictionary(locale);
  const t = dict.apply.page;

  return (
    <main className="mx-auto max-w-3xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
      <p className="text-xs font-semibold uppercase tracking-wide text-primary">{t.eyebrow}</p>
      <h1 className="mt-3 font-display text-3xl font-bold text-ink sm:text-4xl">{t.heading}</h1>
      <p className="mt-4 text-base text-ink-soft">{t.intro}</p>

      <div className="mt-10">
        <Suspense fallback={null}>
          <ApplyForm key={locale} />
        </Suspense>
      </div>
    </main>
  );
}
