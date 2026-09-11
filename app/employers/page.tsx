import type { Metadata } from "next";
import EmployerForm from "@/components/employers/EmployerForm";
import { employerProcessSteps } from "@/lib/mock-data";
import { getLocale } from "@/lib/i18n/get-locale";
import { getDictionary } from "@/lib/i18n/get-dictionary";

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale();
  const dict = await getDictionary(locale);
  return {
    title: dict.metadata.employers.title,
    description: dict.metadata.employers.description,
  };
}

export default async function EmployersPage() {
  const locale = await getLocale();
  const dict = await getDictionary(locale);
  const t = dict.employers.page;

  return (
    <main className="mx-auto max-w-5xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
      <p className="text-xs font-semibold uppercase tracking-wide text-primary">{t.eyebrow}</p>
      <h1 className="mt-3 font-display text-3xl font-bold text-ink sm:text-4xl">{t.heading}</h1>
      <p className="mt-4 max-w-2xl text-base text-ink-soft">{t.intro}</p>

      <div className="mt-10 grid gap-10 lg:grid-cols-[1fr_1.3fr]">
        <div className="min-w-0">
          <p className="font-display text-lg font-semibold text-ink">{t.howItWorksTitle}</p>
          <ol className="mt-4 space-y-4">
            {employerProcessSteps.map((stepId, index) => (
              <li key={stepId} className="flex items-start gap-3.5">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary-light text-sm font-semibold text-primary">
                  {index + 1}
                </span>
                <span className="min-w-0 pt-1 text-sm text-ink-soft">
                  {dict.employerProcess[stepId as keyof typeof dict.employerProcess]}
                </span>
              </li>
            ))}
          </ol>
        </div>

        <EmployerForm key={locale} />
      </div>
    </main>
  );
}
