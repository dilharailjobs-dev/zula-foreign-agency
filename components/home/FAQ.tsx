import { ChevronDown } from "lucide-react";
import { faqItems } from "@/lib/mock-data";
import { getLocale } from "@/lib/i18n/get-locale";
import { getDictionary } from "@/lib/i18n/get-dictionary";

export default async function FAQ() {
  const locale = await getLocale();
  const dict = await getDictionary(locale);
  const t = dict.home.faq;

  return (
    <section className="bg-cream-dark py-20">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="font-display text-3xl font-bold text-ink sm:text-4xl">{t.heading}</h2>
          <p className="mt-4 text-base text-ink-soft">{t.description}</p>
        </div>

        <div className="mt-12 space-y-3">
          {faqItems.map((faqItem) => {
            const item = t.items[faqItem.id as keyof typeof t.items];
            return (
              <details
                key={faqItem.id}
                className="group rounded-xl border border-black/5 bg-white px-5 py-4"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-sm font-semibold text-ink">
                  {item.question}
                  <ChevronDown
                    size={18}
                    className="shrink-0 text-ink-soft transition-transform group-open:rotate-180"
                  />
                </summary>
                <p className="mt-3 text-sm leading-relaxed text-ink-soft">{item.answer}</p>
              </details>
            );
          })}
        </div>
      </div>
    </section>
  );
}
