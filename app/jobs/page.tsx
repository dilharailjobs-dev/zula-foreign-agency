import type { Metadata } from "next";
import { Suspense } from "react";
import JobBoard from "@/components/jobs/JobBoard";
import { getLocale } from "@/lib/i18n/get-locale";
import { getDictionary } from "@/lib/i18n/get-dictionary";

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale();
  const dict = await getDictionary(locale);
  return {
    title: dict.metadata.jobs.title,
    description: dict.metadata.jobs.description,
  };
}

export default async function JobsPage() {
  const locale = await getLocale();
  const dict = await getDictionary(locale);

  return (
    <main className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
      <div className="max-w-2xl">
        <h1 className="font-display text-3xl font-bold text-ink sm:text-4xl">
          {dict.jobs.page.heading}
        </h1>
        <p className="mt-4 text-base text-ink-soft">{dict.jobs.page.description}</p>
      </div>

      <div className="mt-10">
        <Suspense fallback={null}>
          <JobBoard key={locale} />
        </Suspense>
      </div>
    </main>
  );
}
