import { whyChooseUs } from "@/lib/mock-data";

export default function WhyChooseUs() {
  return (
    <section id="about" className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="font-display text-3xl font-bold text-ink sm:text-4xl">
          Why Job Seekers Choose Us
        </h2>
        <p className="mt-4 text-base text-ink-soft">
          We know how much is riding on this decision. Here&apos;s how we
          make sure it&apos;s a safe one.
        </p>
      </div>

      <div className="mt-14 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {whyChooseUs.map((feature) => {
          const Icon = feature.icon;
          return (
            <div
              key={feature.id}
              className="rounded-2xl border border-black/5 bg-white p-6 shadow-sm"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary-light text-primary">
                <Icon size={24} />
              </span>
              <h3 className="mt-5 font-display text-lg font-semibold text-ink">
                {feature.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-soft">
                {feature.description}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
