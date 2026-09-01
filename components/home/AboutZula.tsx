import { companyValues } from "@/lib/mock-data";
import { getLocale } from "@/lib/i18n/get-locale";
import { getDictionary } from "@/lib/i18n/get-dictionary";

export default async function AboutZula() {
  const locale = await getLocale();
  const dict = await getDictionary(locale);
  const t = dict.home.about;

  return (
    <section id="about" className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <p className="text-xs font-semibold uppercase tracking-wide text-primary">
              {t.eyebrow}
            </p>
            <h2 className="mt-3 font-display text-3xl font-bold text-ink sm:text-4xl">
              {t.heading}
            </h2>
            <p className="mt-5 text-base leading-relaxed text-ink-soft">{t.intro}</p>
            <div className="mt-8 grid gap-6 sm:grid-cols-2">
              <div>
                <p className="font-display text-base font-semibold text-ink">
                  {t.missionTitle}
                </p>
                <p className="mt-2 text-sm leading-relaxed text-ink-soft">{t.missionBody}</p>
              </div>
              <div>
                <p className="font-display text-base font-semibold text-ink">{t.visionTitle}</p>
                <p className="mt-2 text-sm leading-relaxed text-ink-soft">{t.visionBody}</p>
              </div>
            </div>
          </div>

          <div>
            <p className="font-display text-base font-semibold text-ink">{t.valuesTitle}</p>
            <div className="mt-5 grid gap-5 sm:grid-cols-2">
              {companyValues.map((value) => {
                const item = t.values[value.id as keyof typeof t.values];
                return (
                  <div
                    key={value.id}
                    className="rounded-2xl border border-black/5 bg-white p-5"
                  >
                    <p className="font-display text-sm font-semibold text-primary">
                      {item.title}
                    </p>
                    <p className="mt-2 text-sm leading-relaxed text-ink-soft">
                      {item.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
