import { processSteps } from "../data/siteContent";

export default function ProcessSection() {
  return (
    <section id="prozess" className="relative z-10 mx-auto max-w-7xl px-5 py-28">
      <div className="mb-12">
        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-blue-300">
          Ablauf
        </p>
        <h2 className="max-w-3xl text-4xl font-semibold tracking-tight md:text-6xl">
          Erst sehen, dann entscheiden.
        </h2>
      </div>

      <div className="grid gap-5 md:grid-cols-4">
        {processSteps.map((step, index) => (
          <div
            key={step}
            className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-6"
          >
            <div className="mb-10 grid h-12 w-12 place-items-center rounded-2xl bg-white font-bold text-black">
              {index + 1}
            </div>
            <p className="text-lg font-semibold">{step}</p>
          </div>
        ))}
      </div>
    </section>
  );
}