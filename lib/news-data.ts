export interface NewsPost {
  slug: string;
  title: string;
  publishedDate: string; // ISO date, e.g. "2026-09-10"
  summary: string;
  image?: string;
  body: string[]; // one paragraph per array item
}

// To add a new post: add an object to this array. `image` is optional —
// use a local file under /public/images/news/ or any URL already allowed
// in next.config.ts's images.remotePatterns (e.g. images.unsplash.com).
export const newsPosts: NewsPost[] = [
  {
    slug: "slbfe-registration-3818",
    title: "Zula Foreign Agency is now registered with the SLBFE",
    publishedDate: "2026-09-10",
    summary:
      "We're officially registered with the Sri Lanka Bureau of Foreign Employment under registration number 3818.",
    image:
      "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=1200&q=80",
    body: [
      "We're pleased to confirm that Zula Foreign Agency is now a licensed foreign employment agency, registered with the Sri Lanka Bureau of Foreign Employment (SLBFE) under registration number 3818.",
      "This registration means every placement we arrange is processed under SLBFE's oversight, giving candidates an added layer of protection throughout the recruitment and travel process.",
      "If you'd like to verify our registration directly with the SLBFE, or have any questions about what this means for your application, please contact our office.",
    ],
  },
];
