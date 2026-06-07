import { CheckCircle2 } from "lucide-react";
import { trustPoints } from "../data/siteContent";

export default function AboutSection() {
  return (
    <section className="relative z-10 mx-auto max-w-7xl px-5 py-28">
      <div className="grid gap-10 rounded-[2.5rem] border border-white/10 bg-gradient-to-br from-white/[0.08] to-white/[0.02] p-8 md:grid-cols-2 md:p-12">
        <div>
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-violet-300">
            Persönlich
          </p>
          <h2 className="text-4xl font-semibold tracking-tight md:text-6xl">
            Persönlich statt anonyme Agentur.
          </h2>
        </div>

        <div className="space-y-5 text-white/60">
          <p>
            Mein Name ist Emanuel Boran. Ich erstelle Premium-Websites für
            lokale Unternehmen in Deutschland — mit Fokus auf Optik, Vertrauen
            und klare Anfragen.
          </p>

          <div className="grid gap-3">
            {trustPoints.map((item) => (
              <div key={item} className="flex items-center gap-3">
                <CheckCircle2 className="text-green-300" size={19} />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}