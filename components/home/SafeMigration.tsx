import { ShieldCheck } from "lucide-react";
import { safeMigrationTips } from "@/lib/mock-data";

export default function SafeMigration() {
  return (
    <section className="mx-auto max-w-5xl px-4 py-20 sm:px-6 lg:px-8">
      <div className="rounded-3xl border border-black/5 bg-white p-8 shadow-sm sm:p-12">
        <div className="flex items-start gap-4">
          <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary-light text-primary">
            <ShieldCheck size={24} />
          </span>
          <div>
            <h2 className="font-display text-2xl font-bold text-ink sm:text-3xl">
              Protect Yourself From Recruitment Scams
            </h2>
            <p className="mt-2 text-sm text-ink-soft">
              Before you accept any job offer or make any payment, take these
              steps.
            </p>
          </div>
        </div>

        <ul className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
          {safeMigrationTips.map((tip) => (
            <li key={tip.id} className="flex items-start gap-3 text-sm text-ink-soft">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
              {tip.text}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
