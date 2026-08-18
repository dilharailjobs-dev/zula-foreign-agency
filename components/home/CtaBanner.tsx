import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function CtaBanner() {
  return (
    <section className="bg-accent">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-6 px-4 py-16 text-center sm:px-6 lg:px-8">
        <h2 className="font-display text-3xl font-bold text-ink sm:text-4xl">
          Ready to Start Your Journey?
        </h2>
        <p className="max-w-xl text-base text-ink/80">
          Talk to our team today and take the first step toward a safe,
          verified job abroad.
        </p>
        <Link
          href="/apply"
          className="inline-flex items-center justify-center gap-2 rounded-full bg-ink px-8 py-3.5 text-sm font-semibold text-cream shadow-sm transition-colors hover:bg-primary-dark sm:text-base"
        >
          Register With Zula
          <ArrowRight size={18} />
        </Link>
      </div>
    </section>
  );
}
