import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { jobs } from "@/lib/mock-data";
import JobCard from "@/components/jobs/JobCard";

export default function LatestJobs() {
  const latest = [...jobs]
    .sort((a, b) => (a.postedDate < b.postedDate ? 1 : -1))
    .slice(0, 3);

  return (
    <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="font-display text-3xl font-bold text-ink sm:text-4xl">
          Latest Job Opportunities
        </h2>
        <p className="mt-4 text-base text-ink-soft">
          A few of the roles currently open across our partner countries.
        </p>
      </div>

      <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {latest.map((job) => (
          <JobCard key={job.id} job={job} />
        ))}
      </div>

      <div className="mt-12 flex justify-center">
        <Link
          href="/jobs"
          className="inline-flex items-center justify-center gap-2 rounded-full border border-primary px-6 py-3 text-sm font-semibold text-primary transition-colors hover:bg-primary hover:text-cream"
        >
          View All Jobs
          <ArrowRight size={16} />
        </Link>
      </div>
    </section>
  );
}
