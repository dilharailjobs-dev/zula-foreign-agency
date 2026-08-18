"use client";

import { useState, type FormEvent, type ReactNode } from "react";
import { useSearchParams } from "next/navigation";
import { CheckCircle2 } from "lucide-react";
import { jobCategoryOptions, jobCountries, jobs } from "@/lib/mock-data";
import { sriLankaDistricts } from "@/lib/sri-lanka-districts";

const experienceOptions = [
  "No experience",
  "Less than 1 year",
  "1–2 years",
  "3–5 years",
  "5+ years",
];

export default function ApplyForm() {
  const searchParams = useSearchParams();
  const jobSlug = searchParams.get("job");
  const matchedJob = jobs.find((job) => job.slug === jobSlug);

  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="rounded-2xl border border-black/5 bg-white p-10 text-center shadow-sm">
        <CheckCircle2 className="mx-auto text-primary" size={40} />
        <h2 className="mt-4 font-display text-xl font-semibold text-ink">
          Thanks — we&apos;ve received your details
        </h2>
        <p className="mt-2 text-sm leading-relaxed text-ink-soft">
          A member of our recruitment team will review your registration and
          get in touch. This is a demo form and hasn&apos;t sent your
          information anywhere yet — for a real application, please also
          contact our office directly.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-10">
      {matchedJob && (
        <div className="rounded-xl bg-primary-light px-4 py-3 text-sm text-primary">
          Applying for <span className="font-semibold">{matchedJob.title}</span> —{" "}
          {matchedJob.country}
        </div>
      )}

      <fieldset>
        <legend className="font-display text-lg font-semibold text-ink">
          Personal Information
        </legend>
        <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
          <Field label="Full Name" htmlFor="fullName" required>
            <input
              id="fullName"
              name="fullName"
              type="text"
              required
              className={inputClass}
            />
          </Field>
          <Field label="Phone Number" htmlFor="phone" required>
            <input id="phone" name="phone" type="tel" required className={inputClass} />
          </Field>
          <Field label="Email" htmlFor="email" required>
            <input id="email" name="email" type="email" required className={inputClass} />
          </Field>
          <Field label="Date of Birth" htmlFor="dob" required>
            <input id="dob" name="dob" type="date" required className={inputClass} />
          </Field>
          <Field label="District" htmlFor="district" required>
            <select id="district" name="district" required className={inputClass} defaultValue="">
              <option value="" disabled>
                Select district
              </option>
              {sriLankaDistricts.map((district) => (
                <option key={district} value={district}>
                  {district}
                </option>
              ))}
            </select>
          </Field>
        </div>
      </fieldset>

      <fieldset>
        <legend className="font-display text-lg font-semibold text-ink">
          Employment
        </legend>
        <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
          <Field label="Preferred Country" htmlFor="preferredCountry">
            <select
              id="preferredCountry"
              name="preferredCountry"
              className={inputClass}
              defaultValue={matchedJob?.country ?? ""}
            >
              <option value="">No preference</option>
              {jobCountries.map((country) => (
                <option key={country} value={country}>
                  {country}
                </option>
              ))}
            </select>
          </Field>
          <Field label="Job Category" htmlFor="jobCategory">
            <select
              id="jobCategory"
              name="jobCategory"
              className={inputClass}
              defaultValue={matchedJob?.category ?? ""}
            >
              <option value="">No preference</option>
              {jobCategoryOptions.map((category) => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </select>
          </Field>
          <Field label="Position" htmlFor="position">
            <input
              id="position"
              name="position"
              type="text"
              defaultValue={matchedJob?.title ?? ""}
              placeholder="e.g. Housemaid, Electrician"
              className={inputClass}
            />
          </Field>
          <Field label="Experience" htmlFor="experience">
            <select id="experience" name="experience" className={inputClass} defaultValue="">
              <option value="" disabled>
                Select experience level
              </option>
              {experienceOptions.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </Field>
          <Field label="Languages Spoken" htmlFor="languages">
            <input
              id="languages"
              name="languages"
              type="text"
              placeholder="e.g. Sinhala, English"
              className={inputClass}
            />
          </Field>
          <Field label="Qualifications" htmlFor="qualifications">
            <input
              id="qualifications"
              name="qualifications"
              type="text"
              placeholder="e.g. O/L, NVQ Level 3"
              className={inputClass}
            />
          </Field>
        </div>
      </fieldset>

      <fieldset>
        <legend className="font-display text-lg font-semibold text-ink">
          Documents
        </legend>
        <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
          <Field label="CV Upload" htmlFor="cv">
            <input
              id="cv"
              name="cv"
              type="file"
              accept=".pdf,.doc,.docx"
              className={`${inputClass} file:mr-4 file:rounded-full file:border-0 file:bg-primary-light file:px-4 file:py-1.5 file:text-sm file:font-medium file:text-primary`}
            />
          </Field>
          <Field label="Passport Status" htmlFor="passportStatus">
            <select id="passportStatus" name="passportStatus" className={inputClass} defaultValue="">
              <option value="" disabled>
                Select status
              </option>
              <option value="valid">I have a valid passport</option>
              <option value="expired">My passport has expired</option>
              <option value="none">I don&apos;t have a passport yet</option>
            </select>
          </Field>
        </div>
      </fieldset>

      <button
        type="submit"
        className="inline-flex w-full items-center justify-center rounded-full bg-accent px-8 py-3.5 text-sm font-semibold text-ink shadow-sm transition-colors hover:bg-accent-dark sm:w-auto"
      >
        Submit Registration
      </button>
    </form>
  );
}

const inputClass =
  "w-full rounded-lg border border-black/10 bg-cream px-3.5 py-2.5 text-sm text-ink focus:border-primary focus:outline-none";

function Field({
  label,
  htmlFor,
  required,
  children,
}: {
  label: string;
  htmlFor: string;
  required?: boolean;
  children: ReactNode;
}) {
  return (
    <div>
      <label htmlFor={htmlFor} className="text-sm font-medium text-ink">
        {label} {required && <span className="text-accent-dark">*</span>}
      </label>
      <div className="mt-1.5">{children}</div>
    </div>
  );
}
