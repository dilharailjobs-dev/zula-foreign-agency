import { trustStats } from "@/lib/mock-data";

export default function TrustStrip() {
  return (
    <section className="border-b border-black/5 bg-cream-dark">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 px-4 py-10 sm:grid-cols-2 sm:px-6 lg:grid-cols-4 lg:px-8">
        {trustStats.map((stat) => {
          const Icon = stat.icon;
          return (
            <div key={stat.id} className="flex items-start gap-3.5">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-primary-light text-primary">
                <Icon size={22} />
              </span>
              <div>
                <p className="font-display text-lg font-bold text-ink">
                  {stat.value}
                </p>
                <p className="mt-0.5 text-sm text-ink-soft">{stat.label}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
