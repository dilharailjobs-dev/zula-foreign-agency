import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Calendar } from "lucide-react";
import { newsPosts } from "@/lib/news-data";

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export function generateStaticParams() {
  return newsPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = newsPosts.find((item) => item.slug === slug);
  if (!post) return { title: "Post Not Found | Zula Foreign Agency" };
  return {
    title: `${post.title} | Zula Foreign Agency`,
    description: post.summary,
  };
}

export default async function NewsDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = newsPosts.find((item) => item.slug === slug);

  if (!post) notFound();

  return (
    <main
      dir="ltr"
      lang="en"
      className="mx-auto max-w-3xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8"
    >
      <Link
        href="/news"
        className="inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:text-primary-dark"
      >
        <ArrowLeft size={16} /> Back to News
      </Link>

      {post.image && (
        <div className="relative mt-6 h-56 w-full overflow-hidden rounded-2xl sm:h-80">
          <Image
            src={post.image}
            alt={post.title}
            fill
            sizes="(min-width: 1024px) 60vw, 100vw"
            className="object-cover"
            priority
          />
        </div>
      )}

      <span className="mt-6 flex items-center gap-1.5 text-sm text-ink-soft">
        <Calendar size={16} /> {formatDate(post.publishedDate)}
      </span>
      <h1 className="mt-3 font-display text-3xl font-bold text-ink sm:text-4xl">
        {post.title}
      </h1>

      <div className="mt-6 space-y-4">
        {post.body.map((paragraph, index) => (
          <p key={index} className="text-base leading-relaxed text-ink-soft">
            {paragraph}
          </p>
        ))}
      </div>
    </main>
  );
}
