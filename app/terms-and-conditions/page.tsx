import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms & Conditions | Zula Foreign Agency",
  description: "Terms & Conditions for Zula Foreign Agency.",
};

const sections = [
  {
    title: "Acceptance of Terms",
    body: "By accessing this website, you agree to these terms and conditions. If you do not agree, please discontinue use of the site.",
  },
  {
    title: "No Fees Before Placement",
    body: "We do not charge candidates recruitment fees before a job offer and contract have been reviewed and accepted. Always verify any request for payment directly with our office before paying.",
  },
  {
    title: "Job Listings",
    body: "Job listings on this website reflect opportunities we are currently recruiting for. Availability, salary, and conditions are subject to change and will be confirmed directly with candidates before any offer is finalized.",
  },
  {
    title: "Intellectual Property",
    body: "All content on this website, including text, graphics, and the Zula Foreign Agency name and logo, is the property of Zula Foreign Agency unless otherwise stated.",
  },
  {
    title: "Limitation of Liability",
    body: "Zula Foreign Agency makes reasonable efforts to keep the information on this website accurate and up to date, but makes no warranties about its completeness or reliability.",
  },
  {
    title: "Governing Law",
    body: "These terms are governed by the laws of Sri Lanka.",
  },
];

export default function TermsAndConditionsPage() {
  return (
    <main className="mx-auto max-w-3xl px-4 py-20 sm:px-6 sm:py-28 lg:px-8">
      <p className="text-xs font-semibold uppercase tracking-wide text-primary">
        Legal
      </p>
      <h1 className="mt-3 font-display text-3xl font-bold text-ink sm:text-4xl">
        Terms &amp; Conditions
      </h1>
      <p className="mt-4 text-sm text-ink-soft">
        This is a sample policy prepared for development purposes and does
        not constitute legal advice.
      </p>

      <div className="mt-12 space-y-10">
        {sections.map((section) => (
          <div key={section.title}>
            <h2 className="font-display text-lg font-semibold text-ink">
              {section.title}
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-ink-soft">
              {section.body}
            </p>
          </div>
        ))}
      </div>
    </main>
  );
}
