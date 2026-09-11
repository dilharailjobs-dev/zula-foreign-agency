import { trustStats } from "@/lib/mock-data";
import { getLocale } from "@/lib/i18n/get-locale";
import { getDictionary } from "@/lib/i18n/get-dictionary";

export default async function TrustStrip() {
  const locale = await getLocale();
  const dict = await getDictionary(locale);

  return (
    <section className="border-b border-black/5 bg-cream-dark">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 px-4 py-10 sm:grid-cols-2 sm:px-6 lg:grid-cols-4 lg:px-8">
        {trustStats.map((stat) => {
          const Icon = stat.icon;
          const t = dict.home.trustStrip[stat.id as keyof typeof dict.home.trustStrip];
          return (
            <div key={stat.id} className="flex items-start gap-3.5">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-primary-light text-primary">
                <Icon size={22} />
              </span>
              <div className="min-w-0">
                <p className="font-display text-lg font-bold text-ink">{t.value}</p>
                <p className="mt-0.5 text-sm text-ink-soft">{t.label}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
