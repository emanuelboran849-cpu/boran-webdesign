import { pricingPlans } from "../data/siteContent";

export default function OfferSection() {
  return (
    <section id="angebot" className="relative z-10 mx-auto max-w-7xl px-5 py-28">
      <div className="rounded-[2.5rem] border border-white/10 bg-white/[0.04] p-8 md:p-12">
        <div className="grid gap-10 md:grid-cols-[0.9fr_1.1fr] md:items-center">
          <div>
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-violet-300">
              Angebot
            </p>
            <h2 className="text-4xl font-semibold tracking-tight md:text-6xl">
              Klare Websites. Klare Preise. Kein Agentur-Chaos.
            </h2>
            <p className="mt-6 text-white/55">
              Für die meisten lokalen Unternehmen reicht keine komplizierte
              Agenturstruktur, sondern ein hochwertiger, klarer und schneller
              Online-Auftritt.
            </p>
          </div>

          <div className="grid gap-4">
            {pricingPlans.map((plan) => (
              <div
                key={plan.name}
                className="rounded-3xl border border-white/10 bg-black/25 p-6"
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="text-2xl font-semibold">{plan.name}</h3>
                    <p className="mt-2 text-sm text-white/50">
                      {plan.description}
                    </p>
                  </div>
                  <p className="whitespace-nowrap text-xl font-bold">
                    {plan.price}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}