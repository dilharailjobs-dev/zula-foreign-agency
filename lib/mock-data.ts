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

export type JobGender = "Male" | "Female" | "Any";

export interface Job {
  id: string;
  slug: string;
  title: string;
  country: string;
  flag: string;
  category: string;
  salary: string;
  accommodation: boolean;
  food: boolean;
  gender: JobGender;
  experience: string;
  education: string;
  postedDate: string;
  summary: string;
  description: string;
  responsibilities: string[];
  requirements: string[];
  image: string;
}

export const jobs: Job[] = [
  {
    id: "housemaid-saudi-arabia",
    slug: "housemaid-saudi-arabia",
    title: "Housemaid",
    country: "Saudi Arabia",
    flag: "🇸🇦",
    category: "Domestic Work",
    salary: "SAR 1,500 – 1,800 / month",
    accommodation: true,
    food: true,
    gender: "Female",
    experience: "No experience required",
    education: "No formal education required",
    postedDate: "2026-08-01",
    summary: "Live-in housekeeping role with a private family in Riyadh.",
    description:
      "A private family in Riyadh is looking for a live-in housemaid to help with general housekeeping, laundry, and light cooking. Full training is provided on arrival, and accommodation and food are included as part of the contract.",
    responsibilities: [
      "General cleaning and housekeeping",
      "Laundry and ironing",
      "Light cooking and meal preparation",
      "Occasional childcare support",
    ],
    requirements: [
      "Willingness to relocate and live with the host family",
      "Basic spoken English or Arabic is an advantage",
      "Good physical health",
    ],
    image:
      "https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "construction-mason-qatar",
    slug: "construction-mason-qatar",
    title: "Construction Mason",
    country: "Qatar",
    flag: "🇶🇦",
    category: "Construction",
    salary: "QAR 1,200 – 1,500 / month",
    accommodation: true,
    food: true,
    gender: "Male",
    experience: "2+ years",
    education: "No formal education required",
    postedDate: "2026-07-24",
    summary: "Site mason for a residential construction project in Doha.",
    description:
      "An established construction contractor in Doha is hiring masons for an ongoing residential project. Work involves blockwork, plastering, and general site masonry under the supervision of a site foreman.",
    responsibilities: [
      "Blockwork and plastering to site specifications",
      "Reading basic site drawings",
      "Working safely alongside a site crew",
    ],
    requirements: [
      "At least 2 years of masonry experience",
      "Willingness to work on active construction sites",
      "Basic tools handling knowledge",
    ],
    image:
      "https://images.unsplash.com/photo-1541976590-713941681591?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "electrician-qatar",
    slug: "electrician-qatar",
    title: "Electrician",
    country: "Qatar",
    flag: "🇶🇦",
    category: "Construction",
    salary: "QAR 1,600 – 2,000 / month",
    accommodation: true,
    food: true,
    gender: "Male",
    experience: "3+ years",
    education: "NVQ Level 3 or equivalent",
    postedDate: "2026-08-05",
    summary: "Site electrician for a commercial building project in Doha.",
    description:
      "A commercial construction project in Doha needs a qualified electrician for internal wiring, conduit installation, and fault-finding on site. Candidates should be comfortable working from electrical drawings.",
    responsibilities: [
      "Internal wiring and conduit installation",
      "Reading and working from electrical drawings",
      "Fault-finding and basic maintenance",
    ],
    requirements: [
      "NVQ Level 3 in Electrical Installation or equivalent",
      "At least 3 years of hands-on site experience",
      "Comfortable working at height with proper safety gear",
    ],
    image:
      "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "hotel-front-desk-uae",
    slug: "hotel-front-desk-uae",
    title: "Hotel Front Desk Officer",
    country: "UAE",
    flag: "🇦🇪",
    category: "Hospitality",
    salary: "AED 2,200 – 2,600 / month",
    accommodation: true,
    food: false,
    gender: "Any",
    experience: "1+ years",
    education: "A/L or above, fluent English",
    postedDate: "2026-07-30",
    summary: "Front desk officer for a mid-scale hotel in Dubai.",
    description:
      "A mid-scale hotel in Dubai is hiring a front desk officer to manage guest check-in/check-out, reservations, and general guest queries. Prior hospitality experience and confident spoken English are required.",
    responsibilities: [
      "Guest check-in and check-out",
      "Handling reservations and guest queries",
      "Coordinating with housekeeping and other departments",
    ],
    requirements: [
      "At least 1 year of front desk or hospitality experience",
      "Fluent spoken and written English",
      "Comfortable with hotel booking software (training provided)",
    ],
    image:
      "https://images.unsplash.com/photo-1445019980597-93fa8acb246c?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "waiter-uae",
    slug: "waiter-uae",
    title: "Waiter / Waitress",
    country: "UAE",
    flag: "🇦🇪",
    category: "Hospitality",
    salary: "AED 1,800 – 2,000 / month",
    accommodation: true,
    food: true,
    gender: "Any",
    experience: "No experience required",
    education: "O/L or above",
    postedDate: "2026-08-10",
    summary: "Restaurant service staff for a hotel restaurant in Abu Dhabi.",
    description:
      "A hotel restaurant in Abu Dhabi is looking for waiting staff for its main dining room. Full training is provided on arrival; prior experience is a plus but not required.",
    responsibilities: [
      "Taking orders and serving guests",
      "Setting and clearing tables",
      "Maintaining cleanliness of the dining area",
    ],
    requirements: [
      "Friendly, presentable, and customer-focused",
      "Basic spoken English",
      "Willingness to work shifts, including weekends",
    ],
    image:
      "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "heavy-driver-kuwait",
    slug: "heavy-driver-kuwait",
    title: "Heavy Vehicle Driver",
    country: "Kuwait",
    flag: "🇰🇼",
    category: "Transport",
    salary: "KWD 150 – 180 / month",
    accommodation: true,
    food: false,
    gender: "Male",
    experience: "3+ years, valid heavy license",
    education: "O/L or above",
    postedDate: "2026-07-18",
    summary: "Heavy vehicle driver for a logistics company in Kuwait City.",
    description:
      "A logistics company in Kuwait City is hiring an experienced heavy vehicle driver for local delivery routes. A valid heavy vehicle license and a clean driving record are required.",
    responsibilities: [
      "Operating heavy delivery vehicles on local routes",
      "Basic vehicle checks before and after trips",
      "Maintaining delivery schedules and paperwork",
    ],
    requirements: [
      "Valid heavy vehicle driving license",
      "At least 3 years of professional driving experience",
      "Clean driving record",
    ],
    image:
      "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "healthcare-aide-oman",
    slug: "healthcare-aide-oman",
    title: "Healthcare Aide",
    country: "Oman",
    flag: "🇴🇲",
    category: "Healthcare",
    salary: "OMR 150 – 200 / month",
    accommodation: true,
    food: true,
    gender: "Female",
    experience: "1+ years caregiving experience",
    education: "Certificate in caregiving preferred",
    postedDate: "2026-08-08",
    summary: "Live-in healthcare aide for an elderly patient in Muscat.",
    description:
      "A family in Muscat is looking for a live-in healthcare aide to support the daily care of an elderly family member, including mobility assistance and basic health monitoring.",
    responsibilities: [
      "Assisting with daily mobility and personal care",
      "Basic health monitoring and medication reminders",
      "Companionship and light housekeeping",
    ],
    requirements: [
      "Prior caregiving or nursing aide experience",
      "Certificate in caregiving is an advantage",
      "Patient, caring, and reliable",
    ],
    image:
      "https://images.unsplash.com/photo-1584515933487-779824d29309?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "machine-operator-jordan",
    slug: "machine-operator-jordan",
    title: "Factory Machine Operator",
    country: "Jordan",
    flag: "🇯🇴",
    category: "Manufacturing",
    salary: "JOD 250 – 300 / month",
    accommodation: true,
    food: true,
    gender: "Any",
    experience: "No experience required, training provided",
    education: "O/L or above",
    postedDate: "2026-07-27",
    summary: "Machine operator for a garment factory near Amman.",
    description:
      "A garment factory near Amman is hiring machine operators for its production line. Full on-the-job training is provided, and the factory operates on a standard shift schedule.",
    responsibilities: [
      "Operating assigned production line machinery",
      "Following quality and safety procedures",
      "Basic machine cleaning and reporting faults",
    ],
    requirements: [
      "Able to stand for extended shifts",
      "Attention to detail and consistency",
      "Willingness to learn machine operation on the job",
    ],
    image:
      "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80",
  },
];

export const jobCountries = Array.from(new Set(jobs.map((job) => job.country))).sort();
export const jobCategoryOptions = Array.from(new Set(jobs.map((job) => job.category))).sort();
export const countryFlags: Record<string, string> = Object.fromEntries(
  jobs.map((job) => [job.country, job.flag]),
);

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

export const faqItems: FaqItem[] = [
  {
    id: "how-to-apply",
    question: "How do I apply?",
    answer:
      "Register through our online form or visit our office in person. Our team will review your details and match you with suitable openings.",
  },
  {
    id: "documents-needed",
    question: "What documents do I need?",
    answer:
      "Typically a valid passport, educational or professional certificates, and a medical clearance. Our team will confirm the exact list for your specific job and destination.",
  },
  {
    id: "countries",
    question: "What countries do you recruit for?",
    answer:
      "Currently Saudi Arabia, Qatar, UAE, Kuwait, Oman, and Jordan. Check our Jobs page for current openings by country.",
  },
  {
    id: "cost",
    question: "How much does the process cost?",
    answer:
      "Costs vary by role and destination, and we explain every fee in writing before you pay anything. We do not charge recruitment fees before a job offer and contract have been reviewed and accepted.",
  },
  {
    id: "timeline",
    question: "How long does recruitment take?",
    answer:
      "Timelines vary by country and role, largely depending on visa processing. Our team will give you a realistic estimate once your registration and documents are reviewed.",
  },
  {
    id: "no-experience",
    question: "Can I apply without experience?",
    answer:
      "Yes — some roles require no prior experience and include training, while others require specific experience or qualifications. Filter by experience level on our Jobs page to see what's currently open.",
  },
  {
    id: "after-selection",
    question: "What happens after selection?",
    answer:
      "We guide you through the remaining documentation, medical checks, visa processing, and travel arrangements, and stay in touch after you arrive.",
  },
  {
    id: "verify-job",
    question: "How do I verify a job?",
    answer:
      "Contact our office directly with the job details before accepting any offer or making any payment. Never rely solely on messages from unknown numbers or unofficial channels.",
  },
];

export interface SafeMigrationTip {
  id: string;
  text: string;
}

export const safeMigrationTips: SafeMigrationTip[] = [
  { id: "verify-agency", text: "Verify the agency" },
  { id: "verify-employer", text: "Verify the employer" },
  { id: "read-contract", text: "Read your employment contract" },
  { id: "understand-fees", text: "Understand all fees" },
  { id: "keep-copies", text: "Keep copies of your documents" },
  { id: "proper-documentation", text: "Never travel without proper documentation" },
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

export const employerProcessSteps: string[] = [
  "Submit your manpower requirements",
  "Tell us your job specifications",
  "Our recruitment team reviews requirements",
  "Candidate shortlisting and selection",
  "Interview and final recruitment",
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
