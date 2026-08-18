import Image from "next/image";
import { Quote } from "lucide-react";
import { testimonials } from "@/lib/mock-data";

export default function Testimonials() {
  return (
    <section className="bg-primary-dark py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-3xl font-bold text-cream sm:text-4xl">
            Stories From Our Candidates
          </h2>
          <p className="mt-4 text-base text-cream/70">
            Real placements, in their own words.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-3">
          {testimonials.map((testimonial) => (
            <figure
              key={testimonial.id}
              className="flex flex-col rounded-2xl bg-cream p-6 shadow-sm"
            >
              <Quote className="text-accent" size={28} />
              <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-ink-soft">
                &ldquo;{testimonial.quote}&rdquo;
              </blockquote>
              <figcaption className="mt-6 flex items-center gap-3">
                <div className="relative h-11 w-11 overflow-hidden rounded-full">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    fill
                    sizes="44px"
                    className="object-cover"
                  />
                </div>
                <div>
                  <p className="text-sm font-semibold text-ink">
                    {testimonial.name}
                  </p>
                  <p className="text-xs text-ink-soft">
                    {testimonial.role} &middot; {testimonial.country}
                  </p>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
