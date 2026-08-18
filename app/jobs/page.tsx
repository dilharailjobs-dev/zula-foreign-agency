import type { Metadata } from "next";
import { Suspense } from "react";
import JobBoard from "@/components/jobs/JobBoard";

export const metadata: Metadata = {
  title: "Jobs | Zula Foreign Agency",
  description: "Browse current overseas job openings from Zula Foreign Agency.",
};

export default function JobsPage() {
  return (
    <main className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
      <div className="max-w-2xl">
        <h1 className="font-display text-3xl font-bold text-ink sm:text-4xl">
          Latest Overseas Opportunities
        </h1>
        <p className="mt-4 text-base text-ink-soft">
          Search and filter current openings across our partner countries.
        </p>
      </div>

      <div className="mt-10">
        <Suspense fallback={null}>
          <JobBoard />
        </Suspense>
      </div>
    </main>
  );
}
