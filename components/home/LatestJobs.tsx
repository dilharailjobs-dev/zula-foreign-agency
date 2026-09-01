import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { jobs } from "@/lib/mock-data";
import JobCard from "@/components/jobs/JobCard";
import { getLocale } from "@/lib/i18n/get-locale";
import { getDictionary } from "@/lib/i18n/get-dictionary";

export default async function LatestJobs() {
  const locale = await getLocale();
  const dict = await getDictionary(locale);
  const t = dict.home.latestJobs;

  const latest = [...jobs]
    .sort((a, b) => (a.postedDate < b.postedDate ? 1 : -1))
    .slice(0, 3);

  return (
    <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="font-display text-3xl font-bold text-ink sm:text-4xl">{t.heading}</h2>
        <p className="mt-4 text-base text-ink-soft">{t.description}</p>
      </div>

      <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {latest.map((job) => (
          <JobCard key={job.slug} job={job} dict={dict} />
        ))}
      </div>

      <div className="mt-12 flex justify-center">
        <Link
          href="/jobs"
          className="inline-flex items-center justify-center gap-2 rounded-full border border-primary px-6 py-3 text-sm font-semibold text-primary transition-colors hover:bg-primary hover:text-cream"
        >
          {t.viewAll}
          <ArrowRight size={16} className="rtl:rotate-180" />
        </Link>
      </div>
    </section>
  );
}
