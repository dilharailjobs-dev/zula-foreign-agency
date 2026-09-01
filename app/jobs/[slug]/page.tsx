import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  ArrowRight,
  BedDouble,
  Calendar,
  GraduationCap,
  UtensilsCrossed,
  Wallet,
} from "lucide-react";
import { jobs } from "@/lib/mock-data";
import { getLocale } from "@/lib/i18n/get-locale";
import { getDictionary } from "@/lib/i18n/get-dictionary";

export function generateStaticParams() {
  return jobs.map((job) => ({ slug: job.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const job = jobs.find((item) => item.slug === slug);
  const locale = await getLocale();
  const dict = await getDictionary(locale);
  if (!job) return { title: `${dict.jobs.detail.notFoundTitle} | ${dict.common.siteName}` };
  const content = dict.jobs.content[job.slug as keyof typeof dict.jobs.content];
  return {
    title: `${content.title} — ${dict.jobs.countries[job.countryCode]} | ${dict.common.siteName}`,
    description: content.summary,
  };
}

export default async function JobDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const job = jobs.find((item) => item.slug === slug);

  if (!job) notFound();

  const locale = await getLocale();
  const dict = await getDictionary(locale);
  const content = dict.jobs.content[job.slug as keyof typeof dict.jobs.content];
  const d = dict.jobs.detail;

  const facts = [
    { icon: Wallet, label: d.salary, value: content.salary },
    { icon: GraduationCap, label: d.education, value: content.education },
    { icon: Calendar, label: d.experience, value: content.experience },
  ];

  return (
    <main className="mx-auto max-w-5xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
      <Link
        href="/jobs"
        className="inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:text-primary-dark"
      >
        <ArrowLeft size={16} className="rtl:rotate-180" /> {d.backToAllJobs}
      </Link>

      <div className="mt-6 grid gap-8 lg:grid-cols-[1.4fr_1fr]">
        <div>
          <div className="relative h-56 w-full overflow-hidden rounded-2xl sm:h-72">
            <Image
              src={job.image}
              alt={`${content.title} in ${dict.jobs.countries[job.countryCode]}`}
              fill
              sizes="(min-width: 1024px) 60vw, 100vw"
              className="object-cover"
              priority
            />
          </div>

          <span className="mt-6 inline-block rounded-full bg-primary-light px-3 py-1 text-xs font-semibold text-primary">
            {dict.jobs.categories[job.categoryCode]}
          </span>
          <h1 className="mt-3 font-display text-3xl font-bold text-ink sm:text-4xl">
            {content.title}
          </h1>
          <p className="mt-2 text-base text-ink-soft">
            <span className="me-1.5">{job.flag}</span>
            {dict.jobs.countries[job.countryCode]} &middot; {dict.jobs.genderLabel[job.genderCode]}
          </p>

          <p className="mt-6 text-base leading-relaxed text-ink-soft">{content.description}</p>

          <div className="mt-8">
            <h2 className="font-display text-lg font-semibold text-ink">{d.responsibilities}</h2>
            <ul className="mt-3 space-y-2">
              {content.responsibilities.map((item) => (
                <li key={item} className="flex items-start gap-2.5 text-sm text-ink-soft">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-8">
            <h2 className="font-display text-lg font-semibold text-ink">{d.requirements}</h2>
            <ul className="mt-3 space-y-2">
              {content.requirements.map((item) => (
                <li key={item} className="flex items-start gap-2.5 text-sm text-ink-soft">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <aside className="h-fit rounded-2xl border border-black/5 bg-white p-6 shadow-sm lg:sticky lg:top-24">
          <p className="font-display text-lg font-semibold text-ink">{d.jobOverview}</p>
          <dl className="mt-5 space-y-4">
            {facts.map((fact) => {
              const Icon = fact.icon;
              return (
                <div key={fact.label} className="flex items-start gap-3">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-primary-light text-primary">
                    <Icon size={16} />
                  </span>
                  <div>
                    <dt className="text-xs font-medium uppercase tracking-wide text-ink-soft">
                      {fact.label}
                    </dt>
                    <dd className="text-sm font-medium text-ink">{fact.value}</dd>
                  </div>
                </div>
              );
            })}
            <div className="flex flex-wrap gap-3 pt-1 text-xs text-ink-soft">
              {job.accommodation && (
                <span className="flex items-center gap-1">
                  <BedDouble size={14} /> {d.accommodationProvided}
                </span>
              )}
              {job.food && (
                <span className="flex items-center gap-1">
                  <UtensilsCrossed size={14} /> {d.foodProvided}
                </span>
              )}
            </div>
          </dl>

          <Link
            href={`/apply?job=${job.slug}`}
            className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-semibold text-ink shadow-sm transition-colors hover:bg-accent-dark"
          >
            {d.applyNow} <ArrowRight size={16} className="rtl:rotate-180" />
          </Link>
        </aside>
      </div>
    </main>
  );
}
