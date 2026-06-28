import { ArrowRight, Check, Sparkles } from "lucide-react";
import { pricingPlans } from "../data/siteContent";

export default function OfferSection() {
  return (
    <section
      id="angebot"
      className="relative z-10 mx-auto max-w-7xl px-5 py-28 md:py-36"
    >
      <div className="mb-14 flex flex-col justify-between gap-7 md:mb-16 md:flex-row md:items-end">
        <div>
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.32em] text-violet-300">
            Angebot
          </p>

          <h2 className="max-w-4xl text-4xl font-semibold tracking-[-0.05em] text-white md:text-6xl">
            Klare Pakete für einen hochwertigen Online-Auftritt.
          </h2>
        </div>

        <p className="max-w-md text-base leading-7 text-white/55">
          Keine komplizierte Agenturstruktur. Sie sehen zuerst eine kostenlose
          Website-Vorschau und entscheiden danach, ob Sie weitermachen möchten.
        </p>
      </div>

      <div className="grid gap-5 lg:grid-cols-3">
        {pricingPlans.map((plan) => (
          <article
            key={plan.name}
            className={[
              "relative overflow-hidden rounded-[2rem] border p-6 transition duration-500 md:p-7",
              plan.highlighted
                ? "border-violet-300/30 bg-white/[0.075] shadow-[0_30px_140px_rgba(139,92,246,0.22)]"
                : "border-white/10 bg-white/[0.035] hover:border-white/20 hover:bg-white/[0.055]",
            ].join(" ")}
          >
            {plan.highlighted && (
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(139,92,246,0.28),transparent_42%)]" />
            )}

            <div className="relative">
              <div className="mb-7 flex items-center justify-between gap-4">
                <span
                  className={[
                    "rounded-full border px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em]",
                    plan.highlighted
                      ? "border-violet-300/30 bg-violet-400/10 text-violet-200"
                      : "border-white/10 bg-white/5 text-white/45",
                  ].join(" ")}
                >
                  {plan.label}
                </span>

                {plan.highlighted && (
                  <div className="grid h-10 w-10 place-items-center rounded-full bg-white text-black">
                    <Sparkles size={18} />
                  </div>
                )}
              </div>

              <h3 className="text-2xl font-semibold tracking-[-0.03em] text-white">
                {plan.name}
              </h3>

              <p className="mt-4 text-4xl font-semibold tracking-[-0.05em] text-white">
                {plan.price}
              </p>

              <p className="mt-5 min-h-[72px] text-sm leading-6 text-white/55">
                {plan.description}
              </p>

              <div className="mt-7 rounded-[1.4rem] border border-white/10 bg-black/25 p-5">
  <p className="mb-4 text-[11px] font-semibold uppercase tracking-[0.28em] text-white/35">
    Geeignet für
  </p>
  <p className="text-[15px] leading-7 text-white/65">
    {plan.bestFor}
  </p>
</div>

              <div className="mt-4 grid gap-4">
  <div className="rounded-[1.4rem] border border-white/10 bg-white/[0.035] p-5">
    <p className="mb-4 text-[11px] font-semibold uppercase tracking-[0.28em] text-white/35">
      Übergabe
    </p>
    <p className="text-[15px] leading-7 text-white/65">
      {plan.ownership}
    </p>
  </div>

  <div className="rounded-[1.4rem] border border-white/10 bg-white/[0.035] p-5">
    <p className="mb-4 text-[11px] font-semibold uppercase tracking-[0.28em] text-white/35">
      Betreuung
    </p>
    <p className="text-[15px] leading-7 text-white/65">
      {plan.maintenance}
    </p>
  </div>
</div>

              <div className="mt-7 grid gap-3">
                {plan.features.map((feature) => (
                  <div key={feature} className="flex items-center gap-3">
                   <div className="grid h-6 w-6 shrink-0 place-items-center rounded-full bg-white/10 text-white">
  <Check size={14} />
</div>
                    <span className="text-sm text-white/65">{feature}</span>
                  </div>
                ))}
              </div>

              <a
                href="https://wa.me/"
                className={[
                  "mt-8 inline-flex w-full items-center justify-center gap-2 rounded-full px-5 py-4 text-sm font-bold transition hover:scale-[1.02]",
                  plan.highlighted
                    ? "bg-white text-black"
                    : "border border-white/15 bg-white/5 text-white hover:bg-white/10",
                ].join(" ")}
              >
                Kostenlose Vorschau anfragen
                <ArrowRight size={17} />
              </a>
            </div>
          </article>
        ))}
      </div>

      <div className="mt-8 rounded-[2rem] border border-white/10 bg-white/[0.035] p-6 md:p-8">
        <div className="grid gap-6 md:grid-cols-[1fr_1.4fr] md:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-blue-300">
              Kostenloser Start
            </p>
            <h3 className="mt-3 text-2xl font-semibold tracking-[-0.03em] text-white md:text-3xl">
              Erst eine visuelle Richtung sehen. Dann entscheiden.
            </h3>
          </div>

          <p className="text-sm leading-7 text-white/55 md:text-base">
            Auf Wunsch erstelle ich zuerst eine kostenlose Website-Vorschau für
            Ihr Unternehmen. Wenn Ihnen die Richtung gefällt, können wir
            weitermachen. Wenn nicht, entstehen Ihnen keine Kosten.
          </p>
        </div>
      </div>
    </section>
  );
}