import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { employerProcessSteps } from "@/lib/mock-data";

export default function ForEmployers() {
  return (
    <section className="bg-ink py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="text-xs font-semibold uppercase tracking-wide text-accent">
              For Employers
            </p>
            <h2 className="mt-3 font-display text-3xl font-bold text-cream sm:text-4xl">
              Looking for Reliable Sri Lankan Talent?
            </h2>
            <p className="mt-4 text-base leading-relaxed text-cream/70">
              Zula helps international employers connect with qualified Sri
              Lankan workers across construction, hospitality, domestic
              work, healthcare, and manufacturing.
            </p>
            <Link
              href="/employers"
              className="mt-7 inline-flex items-center justify-center gap-2 rounded-full bg-accent px-7 py-3.5 text-sm font-semibold text-ink shadow-sm transition-colors hover:bg-accent-dark"
            >
              Recruit With Zula <ArrowRight size={16} />
            </Link>
          </div>

          <ol className="space-y-4">
            {employerProcessSteps.map((step, index) => (
              <li key={step} className="flex items-start gap-4">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-cream/10 text-sm font-semibold text-cream">
                  {index + 1}
                </span>
                <span className="pt-1 text-sm text-cream/80">{step}</span>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
