import type { LucideIcon } from "lucide-react";
import {
  Award,
  ClipboardCheck,
  FileCheck2,
  Globe2,
  HeartHandshake,
  PlaneTakeoff,
  Search,
  ShieldCheck,
  Users,
} from "lucide-react";

export interface NavLink {
  id: string;
  href: string;
}

export interface GroupSite {
  id: string;
  name: string;
  href: string;
}

export const groupSites: GroupSite[] = [
  {
    id: "zula-achzakot",
    name: "Zula Achzakot",
    href: "https://dilharailjobs-dev.github.io/zula-achzakot",
  },
  {
    id: "zula-hiriketiya",
    name: "Zula Hiriketiya",
    href: "https://dilharailjobs-dev.github.io/zula-hostels/",
  },
];

export const navLinks: NavLink[] = [
  { id: "home", href: "/" },
  { id: "jobs", href: "/jobs" },
  { id: "destinations", href: "/#destinations" },
  { id: "how-it-works", href: "/#how-it-works" },
  { id: "about", href: "/#about" },
  { id: "contact", href: "/#contact" },
];

export const legalLinks: NavLink[] = [
  { id: "privacy-policy", href: "/privacy-policy" },
  { id: "terms-and-conditions", href: "/terms-and-conditions" },
];

export interface TrustStat {
  id: string;
  icon: LucideIcon;
}

export const trustStats: TrustStat[] = [
  { id: "license", icon: ShieldCheck },
  { id: "experience", icon: Award },
  { id: "placements", icon: Users },
  { id: "countries", icon: Globe2 },
];

export interface ContactInfo {
  address: string;
  phone: string;
  email: string;
}

export const contactInfo: ContactInfo = {
  address: "428/1, Hokandara North, Hokandara, Sri Lanka",
  phone: "+94 11 215 7810",
  email: "info@zula.lk",
};

export interface CompanyValue {
  id: string;
}

export const companyValues: CompanyValue[] = [
  { id: "integrity" },
  { id: "transparency" },
  { id: "worker-protection" },
  { id: "accountability" },
];

export interface Feature {
  id: string;
  icon: LucideIcon;
}

export const whyChooseUs: Feature[] = [
  { id: "verified-employers", icon: ShieldCheck },
  { id: "transparent-process", icon: Search },
  { id: "documentation-support", icon: FileCheck2 },
  { id: "post-placement-support", icon: HeartHandshake },
];

export type CountryCode =
  | "saudi-arabia"
  | "qatar"
  | "uae"
  | "kuwait"
  | "oman"
  | "jordan";

export type CategoryCode =
  | "domestic-work"
  | "construction"
  | "hospitality"
  | "transport"
  | "healthcare"
  | "manufacturing";

export type JobGenderCode = "male" | "female" | "any";

export interface Job {
  slug: string;
  countryCode: CountryCode;
  categoryCode: CategoryCode;
  genderCode: JobGenderCode;
  flag: string;
  accommodation: boolean;
  food: boolean;
  postedDate: string;
  image: string;
}

export const jobs: Job[] = [
  {
    slug: "housemaid-saudi-arabia",
    countryCode: "saudi-arabia",
    categoryCode: "domestic-work",
    genderCode: "female",
    flag: "🇸🇦",
    accommodation: true,
    food: true,
    postedDate: "2026-08-01",
    image:
      "https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=800&q=80",
  },
  {
    slug: "construction-mason-qatar",
    countryCode: "qatar",
    categoryCode: "construction",
    genderCode: "male",
    flag: "🇶🇦",
    accommodation: true,
    food: true,
    postedDate: "2026-07-24",
    image:
      "https://images.unsplash.com/photo-1541976590-713941681591?auto=format&fit=crop&w=800&q=80",
  },
  {
    slug: "electrician-qatar",
    countryCode: "qatar",
    categoryCode: "construction",
    genderCode: "male",
    flag: "🇶🇦",
    accommodation: true,
    food: true,
    postedDate: "2026-08-05",
    image:
      "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=800&q=80",
  },
  {
    slug: "hotel-front-desk-uae",
    countryCode: "uae",
    categoryCode: "hospitality",
    genderCode: "any",
    flag: "🇦🇪",
    accommodation: true,
    food: false,
    postedDate: "2026-07-30",
    image:
      "https://images.unsplash.com/photo-1445019980597-93fa8acb246c?auto=format&fit=crop&w=800&q=80",
  },
  {
    slug: "waiter-uae",
    countryCode: "uae",
    categoryCode: "hospitality",
    genderCode: "any",
    flag: "🇦🇪",
    accommodation: true,
    food: true,
    postedDate: "2026-08-10",
    image:
      "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=800&q=80",
  },
  {
    slug: "heavy-driver-kuwait",
    countryCode: "kuwait",
    categoryCode: "transport",
    genderCode: "male",
    flag: "🇰🇼",
    accommodation: true,
    food: false,
    postedDate: "2026-07-18",
    image:
      "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?auto=format&fit=crop&w=800&q=80",
  },
  {
    slug: "healthcare-aide-oman",
    countryCode: "oman",
    categoryCode: "healthcare",
    genderCode: "female",
    flag: "🇴🇲",
    accommodation: true,
    food: true,
    postedDate: "2026-08-08",
    image:
      "https://images.unsplash.com/photo-1584515933487-779824d29309?auto=format&fit=crop&w=800&q=80",
  },
  {
    slug: "machine-operator-jordan",
    countryCode: "jordan",
    categoryCode: "manufacturing",
    genderCode: "any",
    flag: "🇯🇴",
    accommodation: true,
    food: true,
    postedDate: "2026-07-27",
    image:
      "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80",
  },
];

export const countryCodes: CountryCode[] = Array.from(
  new Set(jobs.map((job) => job.countryCode)),
);
export const categoryCodes: CategoryCode[] = Array.from(
  new Set(jobs.map((job) => job.categoryCode)),
);
export const countryFlags: Record<CountryCode, string> = Object.fromEntries(
  jobs.map((job) => [job.countryCode, job.flag]),
) as Record<CountryCode, string>;

export interface FaqItem {
  id: string;
}

export const faqItems: FaqItem[] = [
  { id: "how-to-apply" },
  { id: "documents-needed" },
  { id: "countries" },
  { id: "cost" },
  { id: "timeline" },
  { id: "no-experience" },
  { id: "after-selection" },
  { id: "verify-job" },
];

export interface SafeMigrationTip {
  id: string;
}

export const safeMigrationTips: SafeMigrationTip[] = [
  { id: "verify-agency" },
  { id: "verify-employer" },
  { id: "read-contract" },
  { id: "understand-fees" },
  { id: "keep-copies" },
  { id: "proper-documentation" },
];

export interface Step {
  id: string;
  number: number;
  icon: LucideIcon;
}

export const howItWorksSteps: Step[] = [
  { id: "register", number: 1, icon: ClipboardCheck },
  { id: "documentation", number: 2, icon: FileCheck2 },
  { id: "interview", number: 3, icon: Search },
  { id: "travel", number: 4, icon: PlaneTakeoff },
];

export const employerProcessSteps: string[] = [
  "submit-requirements",
  "job-specs",
  "requirements-review",
  "shortlisting",
  "interview-recruitment",
];

export interface Testimonial {
  id: string;
  name: string;
  image: string;
}

export const testimonials: Testimonial[] = [
  {
    id: "nadeeka",
    name: "Nadeeka P.",
    image:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=300&q=80",
  },
  {
    id: "kasun",
    name: "Kasun R.",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=300&q=80",
  },
  {
    id: "priyanka",
    name: "Priyanka W.",
    image:
      "https://images.unsplash.com/photo-1502685104226-ee32379fefbe?auto=format&fit=crop&w=300&q=80",
  },
];
