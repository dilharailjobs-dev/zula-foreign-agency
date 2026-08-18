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
  if (!job) return { title: "Job Not Found | Zula Foreign Agency" };
  return {
    title: `${job.title} — ${job.country} | Zula Foreign Agency`,
    description: job.summary,
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

  const facts = [
    { icon: Wallet, label: "Salary", value: job.salary },
    { icon: GraduationCap, label: "Education", value: job.education },
    { icon: Calendar, label: "Experience", value: job.experience },
  ];

  return (
    <main className="mx-auto max-w-5xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
      <Link
        href="/jobs"
        className="inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:text-primary-dark"
      >
        <ArrowLeft size={16} /> Back to all jobs
      </Link>

      <div className="mt-6 grid gap-8 lg:grid-cols-[1.4fr_1fr]">
        <div>
          <div className="relative h-56 w-full overflow-hidden rounded-2xl sm:h-72">
            <Image
              src={job.image}
              alt={`${job.title} in ${job.country}`}
              fill
              sizes="(min-width: 1024px) 60vw, 100vw"
              className="object-cover"
              priority
            />
          </div>

          <span className="mt-6 inline-block rounded-full bg-primary-light px-3 py-1 text-xs font-semibold text-primary">
            {job.category}
          </span>
          <h1 className="mt-3 font-display text-3xl font-bold text-ink sm:text-4xl">
            {job.title}
          </h1>
          <p className="mt-2 text-base text-ink-soft">
            <span className="mr-1.5">{job.flag}</span>
            {job.country} &middot; {job.gender === "Any" ? "Open to all genders" : job.gender}
          </p>

          <p className="mt-6 text-base leading-relaxed text-ink-soft">
            {job.description}
          </p>

          <div className="mt-8">
            <h2 className="font-display text-lg font-semibold text-ink">
              Responsibilities
            </h2>
            <ul className="mt-3 space-y-2">
              {job.responsibilities.map((item) => (
                <li key={item} className="flex items-start gap-2.5 text-sm text-ink-soft">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-8">
            <h2 className="font-display text-lg font-semibold text-ink">
              Requirements
            </h2>
            <ul className="mt-3 space-y-2">
              {job.requirements.map((item) => (
                <li key={item} className="flex items-start gap-2.5 text-sm text-ink-soft">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <aside className="h-fit rounded-2xl border border-black/5 bg-white p-6 shadow-sm lg:sticky lg:top-24">
          <p className="font-display text-lg font-semibold text-ink">
            Job Overview
          </p>
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
                  <BedDouble size={14} /> Accommodation provided
                </span>
              )}
              {job.food && (
                <span className="flex items-center gap-1">
                  <UtensilsCrossed size={14} /> Food provided
                </span>
              )}
            </div>
          </dl>

          <Link
            href={`/apply?job=${job.slug}`}
            className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-semibold text-ink shadow-sm transition-colors hover:bg-accent-dark"
          >
            Apply Now <ArrowRight size={16} />
          </Link>
        </aside>
      </div>
    </main>
  );
}
