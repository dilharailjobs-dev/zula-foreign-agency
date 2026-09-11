import Image from "next/image";
import Link from "next/link";
import { ArrowRight, BedDouble, UserRound, UtensilsCrossed } from "lucide-react";
import type { Job } from "@/lib/mock-data";
import type { Dictionary } from "@/lib/i18n/dictionaries/types";

export default function JobCard({ job, dict }: { job: Job; dict: Dictionary }) {
  const content = dict.jobs.content[job.slug as keyof typeof dict.jobs.content];
  const countryLabel = dict.jobs.countries[job.countryCode];
  const categoryLabel = dict.jobs.categories[job.categoryCode];

  return (
    <Link
      href={`/jobs/${job.slug}`}
      className="group flex flex-col overflow-hidden rounded-2xl border border-black/5 bg-white shadow-sm transition-shadow hover:shadow-md"
    >
      <div className="relative h-40 w-full overflow-hidden">
        <Image
          src={job.image}
          alt={`${content.title} in ${countryLabel}`}
          fill
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <span className="absolute start-3 top-3 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-ink">
          {categoryLabel}
        </span>
      </div>
      <div className="flex flex-1 flex-col p-5">
        <h3 className="font-display text-base font-semibold text-ink">{content.title}</h3>
        <p className="mt-1 text-sm text-ink-soft">
          <span className="me-1.5">{job.flag}</span>
          {countryLabel}
        </p>
        <p className="mt-3 text-sm font-semibold text-primary">{content.salary}</p>
        <div className="mt-2 flex flex-wrap gap-x-4 gap-y-1 text-xs text-ink-soft">
          <span className="flex items-center gap-1">
            <UserRound size={14} /> {dict.jobs.detail.age} {job.ageMin}–{job.ageMax}
          </span>
          {job.accommodation && (
            <span className="flex items-center gap-1">
              <BedDouble size={14} /> {dict.jobs.detail.accommodationProvided}
            </span>
          )}
          {job.food && (
            <span className="flex items-center gap-1">
              <UtensilsCrossed size={14} /> {dict.jobs.detail.foodProvided}
            </span>
          )}
        </div>
        <div className="mt-4 flex flex-1 items-end justify-between gap-3">
          <span className="min-w-0 truncate text-xs text-ink-soft">{content.experience}</span>
          <span className="flex shrink-0 items-center gap-1 text-sm font-medium text-primary transition-transform group-hover:translate-x-1 rtl:group-hover:-translate-x-1">
            {dict.jobs.board.viewJob} <ArrowRight size={15} className="rtl:rotate-180" />
          </span>
        </div>
      </div>
    </Link>
  );
}
