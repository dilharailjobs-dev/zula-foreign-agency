import Link from "next/link";
import { countryCodes, countryFlags } from "@/lib/mock-data";
import { getLocale } from "@/lib/i18n/get-locale";
import { getDictionary } from "@/lib/i18n/get-dictionary";

export default async function Countries() {
  const locale = await getLocale();
  const dict = await getDictionary(locale);
  const t = dict.home.countries;

  return (
    <section id="destinations" className="bg-cream-dark py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-3xl font-bold text-ink sm:text-4xl">{t.heading}</h2>
          <p className="mt-4 text-base text-ink-soft">{t.description}</p>
        </div>

        <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
          {countryCodes.map((code) => (
            <Link
              key={code}
              href={`/jobs?country=${code}`}
              className="flex flex-col items-center gap-2 rounded-2xl border border-black/5 bg-white px-4 py-6 text-center shadow-sm transition-shadow hover:shadow-md"
            >
              <span className="text-3xl">{countryFlags[code]}</span>
              <span className="text-sm font-medium text-ink">{dict.jobs.countries[code]}</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
