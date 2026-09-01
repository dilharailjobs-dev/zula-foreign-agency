import Image from "next/image";
import { Quote } from "lucide-react";
import { testimonials } from "@/lib/mock-data";
import { getLocale } from "@/lib/i18n/get-locale";
import { getDictionary } from "@/lib/i18n/get-dictionary";

export default async function Testimonials() {
  const locale = await getLocale();
  const dict = await getDictionary(locale);
  const t = dict.home.testimonials;

  return (
    <section className="bg-primary-dark py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-3xl font-bold text-cream sm:text-4xl">{t.heading}</h2>
          <p className="mt-4 text-base text-cream/70">{t.description}</p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-3">
          {testimonials.map((testimonial) => {
            const item = t.items[testimonial.id as keyof typeof t.items];
            return (
              <figure
                key={testimonial.id}
                className="relative flex flex-col rounded-2xl bg-cream p-6 shadow-sm"
              >
                <span className="absolute end-4 top-4 rounded-full bg-primary-light px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wide text-primary">
                  {t.illustrativeBadge}
                </span>
                <Quote className="text-accent" size={28} />
                <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-ink-soft">
                  &ldquo;{item.quote}&rdquo;
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
                    <p className="text-sm font-semibold text-ink">{testimonial.name}</p>
                    <p className="text-xs text-ink-soft">
                      {item.role} &middot; {item.country}
                    </p>
                  </div>
                </figcaption>
              </figure>
            );
          })}
        </div>
      </div>
    </section>
  );
}
