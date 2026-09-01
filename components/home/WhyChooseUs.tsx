import { whyChooseUs } from "@/lib/mock-data";
import { getLocale } from "@/lib/i18n/get-locale";
import { getDictionary } from "@/lib/i18n/get-dictionary";

export default async function WhyChooseUs() {
  const locale = await getLocale();
  const dict = await getDictionary(locale);
  const t = dict.home.whyChooseUs;

  return (
    <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="font-display text-3xl font-bold text-ink sm:text-4xl">{t.heading}</h2>
        <p className="mt-4 text-base text-ink-soft">{t.description}</p>
      </div>

      <div className="mt-14 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {whyChooseUs.map((feature) => {
          const Icon = feature.icon;
          const item = t.items[feature.id as keyof typeof t.items];
          return (
            <div
              key={feature.id}
              className="rounded-2xl border border-black/5 bg-white p-6 shadow-sm"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary-light text-primary">
                <Icon size={24} />
              </span>
              <h3 className="mt-5 font-display text-lg font-semibold text-ink">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-soft">{item.description}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
