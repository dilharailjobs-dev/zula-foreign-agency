"use client";

import { useState, type FormEvent, type ReactNode } from "react";
import { CheckCircle2 } from "lucide-react";
import { categoryCodes } from "@/lib/mock-data";
import { useI18n } from "@/components/i18n/I18nProvider";

export default function EmployerForm() {
  const { dict } = useI18n();
  const t = dict.employers;

  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState(false);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitting(true);
    setError(false);

    try {
      const response = await fetch("/api/employers", {
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
    <form onSubmit={handleSubmit} className="min-w-0 space-y-5">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <Field label={t.fields.companyName} htmlFor="companyName" required>
          <input id="companyName" name="companyName" type="text" required className={inputClass} />
        </Field>
        <Field label={t.fields.contactPerson} htmlFor="contactPerson" required>
          <input id="contactPerson" name="contactPerson" type="text" required className={inputClass} />
        </Field>
        <Field label={t.fields.email} htmlFor="email" required>
          <input id="email" name="email" type="email" required className={inputClass} />
        </Field>
        <Field label={t.fields.phone} htmlFor="phone" required>
          <input id="phone" name="phone" type="tel" required className={inputClass} />
        </Field>
        <Field label={t.fields.country} htmlFor="country" required>
          <input id="country" name="country" type="text" required className={inputClass} />
        </Field>
        <Field label={t.fields.industry} htmlFor="industry">
          <select id="industry" name="industry" className={inputClass} defaultValue="">
            <option value="">{t.fields.selectIndustry}</option>
            {categoryCodes.map((code) => (
              <option key={code} value={code}>
                {dict.jobs.categories[code]}
              </option>
            ))}
          </select>
        </Field>
        <Field label={t.fields.workerCount} htmlFor="workerCount">
          <input id="workerCount" name="workerCount" type="number" min={1} className={inputClass} />
        </Field>
      </div>

      <Field label={t.fields.jobSpecifications} htmlFor="message">
        <textarea
          id="message"
          name="message"
          rows={4}
          placeholder={t.fields.jobSpecPlaceholder}
          className={inputClass}
        />
      </Field>

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
    <div className="min-w-0">
      <label htmlFor={htmlFor} className="text-sm font-medium text-ink">
        {label} {required && <span className="text-accent-dark">*</span>}
      </label>
      <div className="mt-1.5">{children}</div>
    </div>
  );
}
