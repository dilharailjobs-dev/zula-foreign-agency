"use client";

import { useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";
import { Info, Search } from "lucide-react";
import {
  jobs,
  countryCodes,
  categoryCodes,
  type CountryCode,
  type CategoryCode,
  type JobGenderCode,
} from "@/lib/mock-data";
import JobCard from "@/components/jobs/JobCard";
import { useI18n } from "@/components/i18n/I18nProvider";

function parseParam<T extends string>(codes: readonly T[], param: string | null): T | "all" {
  return param && (codes as readonly string[]).includes(param) ? (param as T) : "all";
}

const genderOptions: (JobGenderCode | "all")[] = ["all", "male", "female", "any"];

export default function JobBoard() {
  const searchParams = useSearchParams();
  const { dict } = useI18n();
  const t = dict.jobs.board;

  const [query, setQuery] = useState("");
  const [country, setCountry] = useState<CountryCode | "all">(() =>
    parseParam(countryCodes, searchParams.get("country")),
  );
  const [category, setCategory] = useState<CategoryCode | "all">(() =>
    parseParam(categoryCodes, searchParams.get("category")),
  );
  const [gender, setGender] = useState<JobGenderCode | "all">("all");
  const [age, setAge] = useState("");

  const filteredJobs = useMemo(() => {
    const q = query.trim().toLowerCase();
    const parsedAge = Number(age);
    const hasAge = age.trim() !== "" && Number.isFinite(parsedAge);
    return jobs.filter((job) => {
      const content = dict.jobs.content[job.slug as keyof typeof dict.jobs.content];
      const countryLabel = dict.jobs.countries[job.countryCode];
      const categoryLabel = dict.jobs.categories[job.categoryCode];
      const matchesQuery =
        q.length === 0 ||
        content.title.toLowerCase().includes(q) ||
        countryLabel.toLowerCase().includes(q) ||
        categoryLabel.toLowerCase().includes(q);
      const matchesCountry = country === "all" || job.countryCode === country;
      const matchesCategory = category === "all" || job.categoryCode === category;
      const matchesGender =
        gender === "all" || job.genderCode === gender || job.genderCode === "any";
      const matchesAge =
        !hasAge || (parsedAge >= job.ageMin && parsedAge <= job.ageMax);
      return matchesQuery && matchesCountry && matchesCategory && matchesGender && matchesAge;
    });
  }, [query, country, category, gender, age, dict]);

  const jobsFoundText =
    filteredJobs.length === 1
      ? t.jobsFoundOne.replace("{count}", String(filteredJobs.length))
      : t.jobsFoundOther.replace("{count}", String(filteredJobs.length));

  return (
    <div>
      <div className="rounded-2xl border border-black/5 bg-white p-4 shadow-sm sm:p-5">
        <div className="relative">
          <Search
            size={18}
            className="pointer-events-none absolute start-3.5 top-1/2 -translate-y-1/2 text-ink-soft"
          />
          <input
            type="text"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder={t.searchPlaceholder}
            className="w-full rounded-full border border-black/10 bg-cream py-2.5 ps-10 pe-4 text-sm text-ink placeholder:text-ink-soft/70 focus:border-primary focus:outline-none"
          />
        </div>

        <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
          <select
            value={country}
            onChange={(event) => setCountry(event.target.value as CountryCode | "all")}
            className="rounded-full border border-black/10 bg-cream px-4 py-2.5 text-sm text-ink focus:border-primary focus:outline-none"
          >
            <option value="all">{t.allCountries}</option>
            {countryCodes.map((code) => (
              <option key={code} value={code}>
                {dict.jobs.countries[code]}
              </option>
            ))}
          </select>

          <select
            value={category}
            onChange={(event) => setCategory(event.target.value as CategoryCode | "all")}
            className="rounded-full border border-black/10 bg-cream px-4 py-2.5 text-sm text-ink focus:border-primary focus:outline-none"
          >
            <option value="all">{t.allCategories}</option>
            {categoryCodes.map((code) => (
              <option key={code} value={code}>
                {dict.jobs.categories[code]}
              </option>
            ))}
          </select>

          <select
            value={gender}
            onChange={(event) => setGender(event.target.value as JobGenderCode | "all")}
            className="rounded-full border border-black/10 bg-cream px-4 py-2.5 text-sm text-ink focus:border-primary focus:outline-none"
          >
            {genderOptions.map((code) => (
              <option key={code} value={code}>
                {code === "all" ? t.allGenders : dict.jobs.genderLabel[code]}
              </option>
            ))}
          </select>

          <input
            type="number"
            inputMode="numeric"
            min={16}
            max={70}
            value={age}
            onChange={(event) => setAge(event.target.value)}
            placeholder={t.agePlaceholder}
            aria-label={t.agePlaceholder}
            className="rounded-full border border-black/10 bg-cream px-4 py-2.5 text-sm text-ink placeholder:text-ink-soft/70 focus:border-primary focus:outline-none"
          />
        </div>
      </div>

      <div className="mt-4 flex items-start gap-2.5 rounded-xl bg-primary-light px-4 py-3">
        <Info size={16} className="mt-0.5 shrink-0 text-primary" />
        <p className="min-w-0 text-sm leading-relaxed text-primary">{dict.jobs.detail.trainingNote}</p>
      </div>

      <p className="mt-6 text-sm text-ink-soft">{jobsFoundText}</p>

      {filteredJobs.length > 0 ? (
        <div className="mt-4 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filteredJobs.map((job) => (
            <JobCard key={job.slug} job={job} dict={dict} />
          ))}
        </div>
      ) : (
        <div className="mt-4 rounded-2xl border border-dashed border-black/10 bg-white p-10 text-center">
          <p className="text-sm text-ink-soft">{t.noResults}</p>
        </div>
      )}
    </div>
  );
}
