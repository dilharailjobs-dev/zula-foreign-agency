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
  { id: "news", href: "/news" },
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

export type CountryCode = "israel" | "oman" | "georgia";

export type CategoryCode = "construction" | "trade" | "services";

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
    slug: "bar-bender-israel",
    countryCode: "israel",
    categoryCode: "construction",
    genderCode: "male",
    flag: "🇮🇱",
    accommodation: true,
    food: false,
    postedDate: "2026-09-01",
    image:
      "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=800&q=80",
  },
  {
    slug: "block-mason-israel",
    countryCode: "israel",
    categoryCode: "construction",
    genderCode: "male",
    flag: "🇮🇱",
    accommodation: true,
    food: false,
    postedDate: "2026-09-01",
    image:
      "https://images.unsplash.com/photo-1541976590-713941681591?auto=format&fit=crop&w=800&q=80",
  },
  {
    slug: "plaster-mason-israel",
    countryCode: "israel",
    categoryCode: "construction",
    genderCode: "male",
    flag: "🇮🇱",
    accommodation: true,
    food: false,
    postedDate: "2026-09-01",
    image:
      "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80",
  },
  {
    slug: "putty-worker-israel",
    countryCode: "israel",
    categoryCode: "construction",
    genderCode: "male",
    flag: "🇮🇱",
    accommodation: true,
    food: false,
    postedDate: "2026-09-01",
    image:
      "https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=800&q=80",
  },
  {
    slug: "shuttering-carpenter-israel",
    countryCode: "israel",
    categoryCode: "construction",
    genderCode: "male",
    flag: "🇮🇱",
    accommodation: true,
    food: false,
    postedDate: "2026-09-01",
    image:
      "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=800&q=80",
  },
  {
    slug: "tile-mason-israel",
    countryCode: "israel",
    categoryCode: "construction",
    genderCode: "male",
    flag: "🇮🇱",
    accommodation: true,
    food: false,
    postedDate: "2026-09-01",
    image:
      "https://images.unsplash.com/photo-1590496793929-36417d3117de?auto=format&fit=crop&w=800&q=80",
  },
];

// Countries/categories we recruit for — kept independent of `jobs` above so a
// destination or category still appears on the site (with no listings yet)
// even before individual job postings for it are drafted.
export const countryCodes: CountryCode[] = ["israel", "oman", "georgia"];
export const categoryCodes: CategoryCode[] = ["construction", "trade", "services"];
export const countryFlags: Record<CountryCode, string> = {
  israel: "🇮🇱",
  oman: "🇴🇲",
  georgia: "🇬🇪",
};

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
