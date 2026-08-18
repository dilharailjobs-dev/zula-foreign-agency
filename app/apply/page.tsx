import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Apply Now | Zula Foreign Agency",
};

export default function ApplyPage() {
  return (
    <main className="mx-auto max-w-3xl px-4 py-24 text-center sm:px-6 lg:px-8">
      <h1 className="font-display text-3xl font-bold text-ink sm:text-4xl">
        Apply Now
      </h1>
      <p className="mt-4 text-base text-ink-soft">
        Our application form is coming soon. Contact our office to begin your
        application in the meantime.
      </p>
    </main>
  );
}
