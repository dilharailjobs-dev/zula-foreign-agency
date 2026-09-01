"use client";

import { useState, type FormEvent, type ReactNode } from "react";
import { useSearchParams } from "next/navigation";
import { CheckCircle2 } from "lucide-react";
import { categoryCodes, countryCodes, jobs } from "@/lib/mock-data";
import { sriLankaDistricts } from "@/lib/sri-lanka-districts";
import { useI18n } from "@/components/i18n/I18nProvider";

const experienceOptionIds = ["none", "under-1", "1-2", "3-5", "5-plus"] as const;

export default function ApplyForm() {
  const searchParams = useSearchParams();
  const jobSlug = searchParams.get("job");
  const matchedJob = jobs.find((job) => job.slug === jobSlug);
  const { dict } = useI18n();
  const t = dict.apply;
  const matchedContent = matchedJob
    ? dict.jobs.content[matchedJob.slug as keyof typeof dict.jobs.content]
    : null;

  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState(false);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitting(true);
    setError(false);

    try {
      const response = await fetch("/api/apply", {
        method: "POST",
        body: new FormData(event.currentTarget),
      });
      if (!response.ok) throw new Error("Request failed");
      setSubmitted(true);
    } catch {
      setError(true);
    } finally {
      setSubmitting(false);
    }
  }

  if (submitted) {
    return (
      <div className="rounded-2xl border border-black/5 bg-white p-10 text-center shadow-sm">
        <CheckCircle2 className="mx-auto text-primary" size={40} />
        <h2 className="mt-4 font-display text-xl font-semibold text-ink">{t.success.heading}</h2>
        <p className="mt-2 text-sm leading-relaxed text-ink-soft">{t.success.body}</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-10">
      {matchedJob && matchedContent && (
        <div className="rounded-xl bg-primary-light px-4 py-3 text-sm text-primary">
          {t.applyingFor}{" "}
          <span className="font-semibold">{matchedContent.title}</span> —{" "}
          {dict.jobs.countries[matchedJob.countryCode]}
        </div>
      )}

      <fieldset>
        <legend className="font-display text-lg font-semibold text-ink">
          {t.personalInformation}
        </legend>
        <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
          <Field label={t.fields.fullName} htmlFor="fullName" required>
            <input
              id="fullName"
              name="fullName"
              type="text"
              required
              className={inputClass}
            />
          </Field>
          <Field label={t.fields.phoneNumber} htmlFor="phone" required>
            <input id="phone" name="phone" type="tel" required className={inputClass} />
          </Field>
          <Field label={t.fields.email} htmlFor="email" required>
            <input id="email" name="email" type="email" required className={inputClass} />
          </Field>
          <Field label={t.fields.dateOfBirth} htmlFor="dob" required>
            <input id="dob" name="dob" type="date" required className={inputClass} />
          </Field>
          <Field label={t.fields.district} htmlFor="district" required>
            <select id="district" name="district" required className={inputClass} defaultValue="">
              <option value="" disabled>
                {t.fields.selectDistrict}
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
        <legend className="font-display text-lg font-semibold text-ink">{t.employment}</legend>
        <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
          <Field label={t.fields.preferredCountry} htmlFor="preferredCountry">
            <select
              id="preferredCountry"
              name="preferredCountry"
              className={inputClass}
              defaultValue={matchedJob?.countryCode ?? ""}
            >
              <option value="">{t.fields.noPreference}</option>
              {countryCodes.map((code) => (
                <option key={code} value={code}>
                  {dict.jobs.countries[code]}
                </option>
              ))}
            </select>
          </Field>
          <Field label={t.fields.jobCategory} htmlFor="jobCategory">
            <select
              id="jobCategory"
              name="jobCategory"
              className={inputClass}
              defaultValue={matchedJob?.categoryCode ?? ""}
            >
              <option value="">{t.fields.noPreference}</option>
              {categoryCodes.map((code) => (
                <option key={code} value={code}>
                  {dict.jobs.categories[code]}
                </option>
              ))}
            </select>
          </Field>
          <Field label={t.fields.position} htmlFor="position">
            <input
              id="position"
              name="position"
              type="text"
              defaultValue={matchedContent?.title ?? ""}
              placeholder={t.fields.positionPlaceholder}
              className={inputClass}
            />
          </Field>
          <Field label={t.fields.experience} htmlFor="experience">
            <select id="experience" name="experience" className={inputClass} defaultValue="">
              <option value="" disabled>
                {t.fields.selectExperienceLevel}
              </option>
              {experienceOptionIds.map((id) => (
                <option key={id} value={id}>
                  {t.experienceOptions[id]}
                </option>
              ))}
            </select>
          </Field>
          <Field label={t.fields.languagesSpoken} htmlFor="languages">
            <input
              id="languages"
              name="languages"
              type="text"
              placeholder={t.fields.languagesPlaceholder}
              className={inputClass}
            />
          </Field>
          <Field label={t.fields.qualifications} htmlFor="qualifications">
            <input
              id="qualifications"
              name="qualifications"
              type="text"
              placeholder={t.fields.qualificationsPlaceholder}
              className={inputClass}
            />
          </Field>
        </div>
      </fieldset>

      <fieldset>
        <legend className="font-display text-lg font-semibold text-ink">{t.documents}</legend>
        <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
          <Field label={t.fields.cvUpload} htmlFor="cv">
            <input
              id="cv"
              name="cv"
              type="file"
              accept=".pdf,.doc,.docx"
              className={`${inputClass} file:me-4 file:rounded-full file:border-0 file:bg-primary-light file:px-4 file:py-1.5 file:text-sm file:font-medium file:text-primary`}
            />
          </Field>
          <Field label={t.fields.passportStatus} htmlFor="passportStatus">
            <select id="passportStatus" name="passportStatus" className={inputClass} defaultValue="">
              <option value="" disabled>
                {t.fields.selectStatus}
              </option>
              <option value="valid">{t.fields.passportValid}</option>
              <option value="expired">{t.fields.passportExpired}</option>
              <option value="none">{t.fields.passportNone}</option>
            </select>
          </Field>
        </div>
      </fieldset>

      {error && <p className="text-sm text-red-600">{t.error}</p>}

      <button
        type="submit"
        disabled={submitting}
        className="inline-flex w-full items-center justify-center rounded-full bg-accent px-8 py-3.5 text-sm font-semibold text-ink shadow-sm transition-colors hover:bg-accent-dark disabled:opacity-60 sm:w-auto"
      >
        {submitting ? t.submitting : t.submit}
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
