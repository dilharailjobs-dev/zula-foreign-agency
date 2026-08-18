import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-primary">
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=1920&q=80"
          alt="A confident construction worker on site"
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-45"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary-dark/95 via-primary/70 to-primary/40" />
      </div>

      <div className="relative mx-auto flex max-w-7xl flex-col items-start px-4 py-20 sm:px-6 sm:py-28 lg:px-8 lg:py-32">
        <span className="rounded-full bg-cream/10 px-4 py-1.5 text-xs font-semibold tracking-wide text-cream ring-1 ring-cream/20">
          Committed to Safe, Transparent Recruitment
        </span>

        <h1 className="mt-6 max-w-2xl font-display text-4xl font-bold leading-tight text-cream sm:text-5xl lg:text-6xl">
          Your Career. Beyond Borders.
        </h1>

        <p className="mt-6 max-w-xl text-base text-cream/80 sm:text-lg">
          Verified overseas employment opportunities for Sri Lankan
          professionals and workers, with professional support from
          registration to departure.
        </p>

        <div className="mt-9 flex flex-col gap-3 sm:flex-row">
          <Link
            href="/jobs"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-accent px-7 py-3.5 text-sm font-semibold text-ink shadow-sm transition-colors hover:bg-accent-dark sm:text-base"
          >
            Find Jobs
            <ArrowRight size={18} />
          </Link>
          <Link
            href="/apply"
            className="inline-flex items-center justify-center gap-2 rounded-full border border-cream/30 bg-transparent px-7 py-3.5 text-sm font-semibold text-cream transition-colors hover:bg-cream/10 sm:text-base"
          >
            Register With Zula
          </Link>
        </div>
      </div>
    </section>
  );
}
