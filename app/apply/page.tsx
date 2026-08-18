import type { Metadata } from "next";
import { Suspense } from "react";
import ApplyForm from "@/components/apply/ApplyForm";

export const metadata: Metadata = {
  title: "Register With Zula | Zula Foreign Agency",
  description: "Register your details with Zula Foreign Agency to apply for overseas job opportunities.",
};

export default function ApplyPage() {
  return (
    <main className="mx-auto max-w-3xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
      <p className="text-xs font-semibold uppercase tracking-wide text-primary">
        Candidate Registration
      </p>
      <h1 className="mt-3 font-display text-3xl font-bold text-ink sm:text-4xl">
        Register With Zula
      </h1>
      <p className="mt-4 text-base text-ink-soft">
        Tell us about yourself and the kind of overseas role you&apos;re
        looking for. You can start with a simple registration and provide
        more documents later.
      </p>

      <div className="mt-10">
        <Suspense fallback={null}>
          <ApplyForm />
        </Suspense>
      </div>
    </main>
  );
}
