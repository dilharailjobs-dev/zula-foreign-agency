import type { Metadata } from "next";
import { newsPosts } from "@/lib/news-data";
import NewsCard from "@/components/news/NewsCard";

export const metadata: Metadata = {
  title: "News | Zula Foreign Agency",
  description: "Announcements and updates from Zula Foreign Agency.",
};

export default function NewsPage() {
  const posts = [...newsPosts].sort((a, b) =>
    a.publishedDate < b.publishedDate ? 1 : -1,
  );

  return (
    <main
      dir="ltr"
      lang="en"
      className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8"
    >
      <div className="max-w-2xl">
        <h1 className="font-display text-3xl font-bold text-ink sm:text-4xl">
          News
        </h1>
        <p className="mt-4 text-base text-ink-soft">
          Announcements and updates from Zula Foreign Agency.
        </p>
      </div>

      {posts.length > 0 ? (
        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <NewsCard key={post.slug} post={post} />
          ))}
        </div>
      ) : (
        <div className="mt-10 rounded-2xl border border-dashed border-black/10 bg-white p-10 text-center">
          <p className="text-sm text-ink-soft">
            No news posted yet — check back soon.
          </p>
        </div>
      )}
    </main>
  );
}
