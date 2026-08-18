import { ChevronDown } from "lucide-react";
import { faqItems } from "@/lib/mock-data";

export default function FAQ() {
  return (
    <section className="bg-cream-dark py-20">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="font-display text-3xl font-bold text-ink sm:text-4xl">
            Frequently Asked Questions
          </h2>
          <p className="mt-4 text-base text-ink-soft">
            Answers to what candidates ask us most.
          </p>
        </div>

        <div className="mt-12 space-y-3">
          {faqItems.map((item) => (
            <details
              key={item.id}
              className="group rounded-xl border border-black/5 bg-white px-5 py-4"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-sm font-semibold text-ink">
                {item.question}
                <ChevronDown
                  size={18}
                  className="shrink-0 text-ink-soft transition-transform group-open:rotate-180"
                />
              </summary>
              <p className="mt-3 text-sm leading-relaxed text-ink-soft">
                {item.answer}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
