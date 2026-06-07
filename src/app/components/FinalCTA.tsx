import { ArrowRight, MessageCircle, Star } from "lucide-react";

export default function FinalCTA() {
  return (
    <section className="relative z-10 px-5 py-32 text-center">
      <div className="mx-auto max-w-4xl">
        <div className="mx-auto mb-8 grid h-16 w-16 place-items-center rounded-2xl bg-white text-black">
          <MessageCircle />
        </div>

        <h2 className="text-4xl font-semibold tracking-tight md:text-7xl">
          Möchten Sie sehen, wie Ihr Unternehmen online wirken könnte?
        </h2>

        <p className="mx-auto mt-6 max-w-2xl text-white/55">
          Ich erstelle auf Wunsch zuerst eine kostenlose Website-Vorschau. Wenn
          Ihnen die Richtung gefällt, können wir weitermachen. Wenn nicht,
          entstehen Ihnen keine Kosten.
        </p>

        <a
          href="https://wa.me/"
          className="mt-10 inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 text-sm font-bold text-black transition hover:scale-105"
        >
          Kostenlose Vorschau anfragen
          <ArrowRight size={18} />
        </a>

        <div className="mt-12 flex items-center justify-center gap-2 text-sm text-white/45">
          <Star size={16} />
          Premium-Websites für lokale Unternehmen in Deutschland
        </div>
      </div>
    </section>
  );
}