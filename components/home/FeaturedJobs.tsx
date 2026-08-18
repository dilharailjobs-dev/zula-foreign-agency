import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { jobCategories } from "@/lib/mock-data";

export default function FeaturedJobs() {
  return (
    <section id="destinations" className="bg-cream-dark py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-3xl font-bold text-ink sm:text-4xl">
            Featured Jobs &amp; Destinations
          </h2>
          <p className="mt-4 text-base text-ink-soft">
            Popular categories currently open across our partner countries.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {jobCategories.map((job) => (
            <Link
              key={job.id}
              href={job.href}
              className="group overflow-hidden rounded-2xl border border-black/5 bg-white shadow-sm transition-shadow hover:shadow-md"
            >
              <div className="relative h-44 w-full overflow-hidden">
                <Image
                  src={job.image}
                  alt={`${job.title} jobs in ${job.country}`}
                  fill
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <span className="absolute left-3 top-3 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-ink">
                  {job.category}
                </span>
              </div>
              <div className="flex items-center justify-between p-5">
                <div>
                  <h3 className="font-display text-base font-semibold text-ink">
                    {job.title}
                  </h3>
                  <p className="mt-1 text-sm text-ink-soft">
                    <span className="mr-1.5">{job.flag}</span>
                    {job.country}
                  </p>
                </div>
                <ArrowRight
                  size={18}
                  className="shrink-0 text-primary transition-transform group-hover:translate-x-1"
                />
              </div>
            </Link>
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
      </div>
    </section>
  );
}
