export default function ProblemSection() {
  return (
    <section className="relative z-10 mx-auto max-w-7xl px-5 py-28">
      <div className="grid gap-12 md:grid-cols-2 md:items-center">
        <div>
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-violet-300">
            Der erste Eindruck entscheidet
          </p>
          <h2 className="text-4xl font-semibold tracking-tight md:text-6xl">
            Offline stark. Online noch nicht hochwertig genug?
          </h2>
        </div>

        <div className="space-y-5 text-white/60">
          <p>
            Viele lokale Unternehmen haben gute Bewertungen, schöne Arbeit und
            treue Kunden. Trotzdem wirkt der erste Eindruck online oft schwächer
            als das eigentliche Geschäft.
          </p>
          <p>
            Eine moderne Website kann Vertrauen aufbauen, Leistungen klar zeigen
            und Anfragen einfacher machen — besonders auf dem Handy.
          </p>
        </div>
      </div>
    </section>
  );
}