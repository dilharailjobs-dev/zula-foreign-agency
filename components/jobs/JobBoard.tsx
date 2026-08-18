"use client";

import { useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";
import { Search } from "lucide-react";
import { jobs, jobCategoryOptions, jobCountries, type JobGender } from "@/lib/mock-data";
import JobCard from "@/components/jobs/JobCard";

const normalize = (value: string) => value.toLowerCase().replace(/-/g, " ");

function findOption(options: string[], param: string | null) {
  if (!param) return "All";
  const target = normalize(param);
  return options.find((option) => normalize(option) === target) ?? "All";
}

const genderOptions: (JobGender | "All")[] = ["All", "Male", "Female", "Any"];

export default function JobBoard() {
  const searchParams = useSearchParams();

  const [query, setQuery] = useState("");
  const [country, setCountry] = useState(() => findOption(jobCountries, searchParams.get("country")));
  const [category, setCategory] = useState(() => findOption(jobCategoryOptions, searchParams.get("category")));
  const [gender, setGender] = useState<(JobGender | "All")>("All");

  const filteredJobs = useMemo(() => {
    const q = query.trim().toLowerCase();
    return jobs.filter((job) => {
      const matchesQuery =
        q.length === 0 ||
        job.title.toLowerCase().includes(q) ||
        job.country.toLowerCase().includes(q) ||
        job.category.toLowerCase().includes(q);
      const matchesCountry = country === "All" || job.country === country;
      const matchesCategory = category === "All" || job.category === category;
      const matchesGender = gender === "All" || job.gender === gender || job.gender === "Any";
      return matchesQuery && matchesCountry && matchesCategory && matchesGender;
    });
  }, [query, country, category, gender]);

  return (
    <div>
      <div className="rounded-2xl border border-black/5 bg-white p-4 shadow-sm sm:p-5">
        <div className="relative">
          <Search
            size={18}
            className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-ink-soft"
          />
          <input
            type="text"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search job title, country, or category"
            className="w-full rounded-full border border-black/10 bg-cream py-2.5 pl-10 pr-4 text-sm text-ink placeholder:text-ink-soft/70 focus:border-primary focus:outline-none"
          />
        </div>

        <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-3">
          <select
            value={country}
            onChange={(event) => setCountry(event.target.value)}
            className="rounded-full border border-black/10 bg-cream px-4 py-2.5 text-sm text-ink focus:border-primary focus:outline-none"
          >
            <option value="All">All Countries</option>
            {jobCountries.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>

          <select
            value={category}
            onChange={(event) => setCategory(event.target.value)}
            className="rounded-full border border-black/10 bg-cream px-4 py-2.5 text-sm text-ink focus:border-primary focus:outline-none"
          >
            <option value="All">All Categories</option>
            {jobCategoryOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>

          <select
            value={gender}
            onChange={(event) => setGender(event.target.value as JobGender | "All")}
            className="rounded-full border border-black/10 bg-cream px-4 py-2.5 text-sm text-ink focus:border-primary focus:outline-none"
          >
            {genderOptions.map((option) => (
              <option key={option} value={option}>
                {option === "All" ? "Any Gender" : option}
              </option>
            ))}
          </select>
        </div>
      </div>

      <p className="mt-6 text-sm text-ink-soft">
        {filteredJobs.length} {filteredJobs.length === 1 ? "job" : "jobs"} found
      </p>

      {filteredJobs.length > 0 ? (
        <div className="mt-4 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filteredJobs.map((job) => (
            <JobCard key={job.id} job={job} />
          ))}
        </div>
      ) : (
        <div className="mt-4 rounded-2xl border border-dashed border-black/10 bg-white p-10 text-center">
          <p className="text-sm text-ink-soft">
            No jobs match your search right now. Try different filters, or
            contact us and we&apos;ll let you know when a matching role opens up.
          </p>
        </div>
      )}
    </div>
  );
}
