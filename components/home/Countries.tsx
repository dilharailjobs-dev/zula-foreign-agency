import Link from "next/link";
import { countryFlags, jobCountries } from "@/lib/mock-data";

const toSlug = (value: string) => value.toLowerCase().replace(/\s+/g, "-");

export default function Countries() {
  return (
    <section id="destinations" className="bg-cream-dark py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-3xl font-bold text-ink sm:text-4xl">
            Countries We Recruit For
          </h2>
          <p className="mt-4 text-base text-ink-soft">
            Explore current openings by destination.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
          {jobCountries.map((country) => (
            <Link
              key={country}
              href={`/jobs?country=${toSlug(country)}`}
              className="flex flex-col items-center gap-2 rounded-2xl border border-black/5 bg-white px-4 py-6 text-center shadow-sm transition-shadow hover:shadow-md"
            >
              <span className="text-3xl">{countryFlags[country]}</span>
              <span className="text-sm font-medium text-ink">{country}</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
