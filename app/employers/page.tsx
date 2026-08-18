import type { Metadata } from "next";
import EmployerForm from "@/components/employers/EmployerForm";
import { employerProcessSteps } from "@/lib/mock-data";

export const metadata: Metadata = {
  title: "For Employers | Zula Foreign Agency",
  description: "Request qualified Sri Lankan workers through Zula Foreign Agency.",
};

export default function EmployersPage() {
  return (
    <main className="mx-auto max-w-5xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
      <p className="text-xs font-semibold uppercase tracking-wide text-primary">
        For Employers
      </p>
      <h1 className="mt-3 font-display text-3xl font-bold text-ink sm:text-4xl">
        Request Qualified Sri Lankan Workers
      </h1>
      <p className="mt-4 max-w-2xl text-base text-ink-soft">
        Tell us about your manpower requirements and our recruitment team
        will review them and get in touch to discuss next steps.
      </p>

      <div className="mt-10 grid gap-10 lg:grid-cols-[1fr_1.3fr]">
        <div>
          <p className="font-display text-lg font-semibold text-ink">
            How It Works
          </p>
          <ol className="mt-4 space-y-4">
            {employerProcessSteps.map((step, index) => (
              <li key={step} className="flex items-start gap-3.5">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary-light text-sm font-semibold text-primary">
                  {index + 1}
                </span>
                <span className="pt-1 text-sm text-ink-soft">{step}</span>
              </li>
            ))}
          </ol>
        </div>

        <EmployerForm />
      </div>
    </main>
  );
}
