"use client";

import { useState, type FormEvent, type ReactNode } from "react";
import { CheckCircle2 } from "lucide-react";
import { jobCategoryOptions } from "@/lib/mock-data";

export default function EmployerForm() {
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
          Thanks — we&apos;ve received your request
        </h2>
        <p className="mt-2 text-sm leading-relaxed text-ink-soft">
          Our recruitment team will review your requirements and get in
          touch. This is a demo form and hasn&apos;t sent your information
          anywhere yet — for a real request, please also contact our office
          directly.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <Field label="Company Name" htmlFor="companyName" required>
          <input id="companyName" name="companyName" type="text" required className={inputClass} />
        </Field>
        <Field label="Contact Person" htmlFor="contactPerson" required>
          <input id="contactPerson" name="contactPerson" type="text" required className={inputClass} />
        </Field>
        <Field label="Email" htmlFor="email" required>
          <input id="email" name="email" type="email" required className={inputClass} />
        </Field>
        <Field label="Phone" htmlFor="phone" required>
          <input id="phone" name="phone" type="tel" required className={inputClass} />
        </Field>
        <Field label="Country" htmlFor="country" required>
          <input id="country" name="country" type="text" required className={inputClass} />
        </Field>
        <Field label="Industry" htmlFor="industry">
          <select id="industry" name="industry" className={inputClass} defaultValue="">
            <option value="">Select industry</option>
            {jobCategoryOptions.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
        </Field>
        <Field label="Number of Workers Needed" htmlFor="workerCount">
          <input id="workerCount" name="workerCount" type="number" min={1} className={inputClass} />
        </Field>
      </div>

      <Field label="Job Specifications" htmlFor="message">
        <textarea
          id="message"
          name="message"
          rows={4}
          placeholder="Tell us about the roles, salary range, and any specific requirements"
          className={inputClass}
        />
      </Field>

      <button
        type="submit"
        className="inline-flex w-full items-center justify-center rounded-full bg-accent px-8 py-3.5 text-sm font-semibold text-ink shadow-sm transition-colors hover:bg-accent-dark sm:w-auto"
      >
        Submit Request
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
