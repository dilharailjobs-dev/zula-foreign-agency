import type { Metadata } from "next";
import { contactInfo } from "@/lib/mock-data";

export const metadata: Metadata = {
  title: "Privacy Policy | Zula Foreign Agency",
  description: "Privacy Policy for Zula Foreign Agency.",
};

const sections = [
  {
    title: "Information We Collect",
    body: "When you use this website — for example, by submitting a job application or contacting us — we may collect information you provide directly, such as your name, contact details, work history, and any documents you upload (such as a CV or passport details).",
  },
  {
    title: "How We Use Information",
    body: "Information you submit is used to process your application or enquiry, match you with suitable job opportunities, and communicate with you about your candidacy. We do not sell or rent your personal information to third parties.",
  },
  {
    title: "Cookies",
    body: "This website does not currently use tracking or advertising cookies. Should this change, this policy will be updated accordingly.",
  },
  {
    title: "Third-Party Websites",
    body: "This website links to the independent websites of Zula Achzakot (our parent group) and Zula Hostels, and to third-party social media platforms. Each of these has its own privacy practices, which we encourage you to review separately.",
  },
  {
    title: "Contact",
    body: `Questions about this policy can be directed to ${contactInfo.email}.`,
  },
];

export default function PrivacyPolicyPage() {
  return (
    <main className="mx-auto max-w-3xl px-4 py-20 sm:px-6 sm:py-28 lg:px-8">
      <p className="text-xs font-semibold uppercase tracking-wide text-primary">
        Legal
      </p>
      <h1 className="mt-3 font-display text-3xl font-bold text-ink sm:text-4xl">
        Privacy Policy
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
