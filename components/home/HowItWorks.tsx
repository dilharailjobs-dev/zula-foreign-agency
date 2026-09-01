import { howItWorksSteps } from "@/lib/mock-data";
import { getLocale } from "@/lib/i18n/get-locale";
import { getDictionary } from "@/lib/i18n/get-dictionary";

export default async function HowItWorks() {
  const locale = await getLocale();
  const dict = await getDictionary(locale);
  const t = dict.home.howItWorks;

  return (
    <section id="how-it-works" className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="font-display text-3xl font-bold text-ink sm:text-4xl">{t.heading}</h2>
        <p className="mt-4 text-base text-ink-soft">{t.description}</p>
      </div>

      <div className="relative mt-16 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
        <div
          aria-hidden
          className="absolute left-0 right-0 top-6 hidden h-0.5 bg-primary-light lg:block"
        />

        {howItWorksSteps.map((step) => {
          const Icon = step.icon;
          const item = t.steps[step.id as keyof typeof t.steps];
          return (
            <div key={step.id} className="relative flex flex-col items-center text-center">
              <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full bg-primary text-cream font-display font-bold">
                {step.number}
              </div>
              <span className="mt-4 flex h-10 w-10 items-center justify-center rounded-full bg-primary-light text-primary">
                <Icon size={20} />
              </span>
              <h3 className="mt-4 font-display text-lg font-semibold text-ink">{item.title}</h3>
              <p className="mt-2 max-w-xs text-sm leading-relaxed text-ink-soft">
                {item.description}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
