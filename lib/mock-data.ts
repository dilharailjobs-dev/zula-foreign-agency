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
  label: string;
  href: string;
}

export interface GroupSite {
  id: string;
  name: string;
  description: string;
  href: string;
}

export const groupSites: GroupSite[] = [
  {
    id: "zula-achzakot",
    name: "Zula Achzakot",
    description: "Parent business group",
    href: "https://dilharailjobs-dev.github.io/zula-achzakot",
  },
  {
    id: "zula-hiriketiya",
    name: "Zula Hiriketiya",
    description: "Sister venture — surf hostel in Hiriketiya",
    href: "https://dilharailjobs-dev.github.io/zula-hostels/",
  },
];

export const navLinks: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "Jobs", href: "/jobs" },
  { label: "Destinations", href: "#destinations" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export const legalLinks: NavLink[] = [
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Terms & Conditions", href: "/terms-and-conditions" },
];

export interface TrustStat {
  id: string;
  icon: LucideIcon;
  value: string;
  label: string;
}

export const trustStats: TrustStat[] = [
  {
    id: "license",
    icon: ShieldCheck,
    value: "SLBFE Registration",
    label: "License details will be published here once finalized with the Sri Lanka Bureau of Foreign Employment",
  },
  {
    id: "experience",
    icon: Award,
    value: "Experienced Team",
    label: "Recruitment specialists who guide candidates through every step",
  },
  {
    id: "placements",
    icon: Users,
    value: "Candidate-First Approach",
    label: "We prioritize transparent, verified placements over volume",
  },
  {
    id: "countries",
    icon: Globe2,
    value: "Growing Partner Network",
    label: "Employer partners across the Middle East and Asia",
  },
];

export interface ContactInfo {
  address: string;
  phone: string;
  email: string;
}

export const contactInfo: ContactInfo = {
  address: "428/1, Hokandara North, Hokandara, Sri Lanka",
  phone: "+94 11 215 7810",
  email: "info@zulaachzakot.com",
};

export interface CompanyValue {
  id: string;
  title: string;
  description: string;
}

export const companyValues: CompanyValue[] = [
  {
    id: "integrity",
    title: "Integrity",
    description: "We give candidates accurate information about roles, employers, and costs, before they commit to anything.",
  },
  {
    id: "transparency",
    title: "Transparency",
    description: "No hidden fees or last-minute conditions. What's agreed upfront is what's delivered.",
  },
  {
    id: "worker-protection",
    title: "Worker Protection",
    description: "Candidate wellbeing and safe migration come before any placement target.",
  },
  {
    id: "accountability",
    title: "Accountability",
    description: "We stay reachable and responsible for candidates after they've started their new role abroad.",
  },
];

export interface Feature {
  id: string;
  icon: LucideIcon;
  title: string;
  description: string;
}

export const whyChooseUs: Feature[] = [
  {
    id: "verified-employers",
    icon: ShieldCheck,
    title: "Verified Employers",
    description:
      "Every employer we work with is vetted and contracted directly, so you know exactly who you're working for before you travel.",
  },
  {
    id: "transparent-process",
    icon: Search,
    title: "Transparent Process",
    description:
      "No hidden fees, no surprise conditions. We walk you through every step and every cost before you sign anything.",
  },
  {
    id: "documentation-support",
    icon: FileCheck2,
    title: "Full Documentation Support",
    description:
      "From passports to visas to medical clearances, our team handles the paperwork with you so nothing gets missed.",
  },
  {
    id: "post-placement-support",
    icon: HeartHandshake,
    title: "Post-Placement Support",
    description:
      "Our support doesn't end at the airport. We stay reachable after you've started your new job, wherever you are.",
  },
];

export interface JobCategory {
  id: string;
  title: string;
  country: string;
  flag: string;
  category: string;
  image: string;
  href: string;
}

export const jobCategories: JobCategory[] = [
  {
    id: "housemaids-saudi",
    title: "Housemaids",
    country: "Saudi Arabia",
    flag: "🇸🇦",
    category: "Domestic Work",
    image:
      "https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=800&q=80",
    href: "/jobs?category=domestic-work&country=saudi-arabia",
  },
  {
    id: "construction-qatar",
    title: "Construction Workers",
    country: "Qatar",
    flag: "🇶🇦",
    category: "Construction",
    image:
      "https://images.unsplash.com/photo-1541976590-713941681591?auto=format&fit=crop&w=800&q=80",
    href: "/jobs?category=construction&country=qatar",
  },
  {
    id: "hospitality-uae",
    title: "Hospitality Staff",
    country: "UAE",
    flag: "🇦🇪",
    category: "Hospitality",
    image:
      "https://images.unsplash.com/photo-1445019980597-93fa8acb246c?auto=format&fit=crop&w=800&q=80",
    href: "/jobs?category=hospitality&country=uae",
  },
  {
    id: "drivers-kuwait",
    title: "Drivers",
    country: "Kuwait",
    flag: "🇰🇼",
    category: "Transport",
    image:
      "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?auto=format&fit=crop&w=800&q=80",
    href: "/jobs?category=transport&country=kuwait",
  },
  {
    id: "healthcare-oman",
    title: "Healthcare Aides",
    country: "Oman",
    flag: "🇴🇲",
    category: "Healthcare",
    image:
      "https://images.unsplash.com/photo-1584515933487-779824d29309?auto=format&fit=crop&w=800&q=80",
    href: "/jobs?category=healthcare&country=oman",
  },
  {
    id: "factory-jordan",
    title: "Factory Workers",
    country: "Jordan",
    flag: "🇯🇴",
    category: "Manufacturing",
    image:
      "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80",
    href: "/jobs?category=manufacturing&country=jordan",
  },
];

export interface Step {
  id: string;
  number: number;
  icon: LucideIcon;
  title: string;
  description: string;
}

export const howItWorksSteps: Step[] = [
  {
    id: "register",
    number: 1,
    icon: ClipboardCheck,
    title: "Register",
    description:
      "Submit your details and career interests through our office or online form. It takes less than 10 minutes.",
  },
  {
    id: "documentation",
    number: 2,
    icon: FileCheck2,
    title: "Document Preparation",
    description:
      "Our team helps you gather and prepare passports, certificates, and medical records for your application.",
  },
  {
    id: "interview",
    number: 3,
    icon: Search,
    title: "Interview & Selection",
    description:
      "We match you with a verified employer and coordinate interviews, either in person or by video call.",
  },
  {
    id: "travel",
    number: 4,
    icon: PlaneTakeoff,
    title: "Travel & Placement",
    description:
      "Once your visa is approved, we arrange travel and orientation, and stay in touch after you arrive.",
  },
];

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  country: string;
  quote: string;
  image: string;
}

export const testimonials: Testimonial[] = [
  {
    id: "nadeeka",
    name: "Nadeeka P.",
    role: "Housekeeping Supervisor",
    country: "Placed in Dubai, UAE",
    quote:
      "I was nervous about being scammed since it was my first time going abroad. Zula's team showed me the actual contract and employer details before I paid a single fee. That made all the difference.",
    image:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=300&q=80",
  },
  {
    id: "kasun",
    name: "Kasun R.",
    role: "Site Electrician",
    country: "Placed in Doha, Qatar",
    quote:
      "The documentation process usually takes months on your own. With their checklist and reminders, my visa was approved in seven weeks and I knew what was happening at every stage.",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=300&q=80",
  },
  {
    id: "priyanka",
    name: "Priyanka W.",
    role: "Hotel Front Desk Officer",
    country: "Placed in Abu Dhabi, UAE",
    quote:
      "Even after I landed, someone from Zula called to check that my accommodation matched what was promised. Six months in, I still have their number saved if I need anything.",
    image:
      "https://images.unsplash.com/photo-1502685104226-ee32379fefbe?auto=format&fit=crop&w=300&q=80",
  },
];
