import { companyValues } from "@/lib/mock-data";

export default function AboutZula() {
  return (
    <section id="about" className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <p className="text-xs font-semibold uppercase tracking-wide text-primary">
              About Zula Foreign Agency
            </p>
            <h2 className="mt-3 font-display text-3xl font-bold text-ink sm:text-4xl">
              Who We Are
            </h2>
            <p className="mt-5 text-base leading-relaxed text-ink-soft">
              Zula Foreign Agency is the international employment and
              recruitment venture of the Zula Achzakot business group. We
              connect Sri Lankan job seekers with verified overseas
              employers, and support candidates through every stage of the
              process, from application to placement and beyond.
            </p>
            <div className="mt-8 grid gap-6 sm:grid-cols-2">
              <div>
                <p className="font-display text-base font-semibold text-ink">
                  Our Mission
                </p>
                <p className="mt-2 text-sm leading-relaxed text-ink-soft">
                  Make overseas employment safe, transparent, and accessible
                  for Sri Lankan candidates at every stage of their journey.
                </p>
              </div>
              <div>
                <p className="font-display text-base font-semibold text-ink">
                  Our Vision
                </p>
                <p className="mt-2 text-sm leading-relaxed text-ink-soft">
                  To be a foreign employment agency candidates recommend to
                  their own families, because we treated them the way
                  we&apos;d want to be treated.
                </p>
              </div>
            </div>
          </div>

          <div>
            <p className="font-display text-base font-semibold text-ink">
              Our Values
            </p>
            <div className="mt-5 grid gap-5 sm:grid-cols-2">
              {companyValues.map((value) => (
                <div
                  key={value.id}
                  className="rounded-2xl border border-black/5 bg-white p-5"
                >
                  <p className="font-display text-sm font-semibold text-primary">
                    {value.title}
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-ink-soft">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
