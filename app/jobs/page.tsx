import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Jobs | Zula Foreign Agency",
};

export default function JobsPage() {
  return (
    <main className="mx-auto max-w-3xl px-4 py-24 text-center sm:px-6 lg:px-8">
      <h1 className="font-display text-3xl font-bold text-ink sm:text-4xl">
        Job Listings
      </h1>
      <p className="mt-4 text-base text-ink-soft">
        Full job listings are coming soon. Check back shortly, or contact our
        office for current openings.
      </p>
    </main>
  );
}
