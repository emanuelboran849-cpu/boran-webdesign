import { ArrowRight, MonitorSmartphone, Sparkles, Zap } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative z-10 mx-auto max-w-7xl px-5 pb-24 pt-32 text-center md:flex md:min-h-screen md:flex-col md:items-center md:justify-center md:pt-28">
      <div className="mx-auto mb-5 inline-flex max-w-[90vw] items-center justify-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs text-white/70 backdrop-blur md:text-sm">
        <Sparkles size={15} />
        <span>Premium-Websites für lokale Unternehmen</span>
      </div>

      <h1 className="mx-auto max-w-5xl text-[44px] font-semibold leading-[0.92] tracking-[-0.07em] text-white sm:text-5xl md:text-7xl lg:text-8xl">
        Websites, die Ihr Unternehmen online hochwertiger wirken lassen.
      </h1>

      <p className="mx-auto mt-6 max-w-2xl text-[15px] leading-6 text-white/60 md:text-lg md:leading-7">
        Moderne, schnelle und visuell starke Websites für Beauty-Studios,
        Barbershops, Kosmetikstudios, Massagepraxen und lokale Dienstleister.
      </p>

      <div className="mx-auto mt-8 flex w-full max-w-sm flex-col gap-3 sm:max-w-none sm:flex-row sm:justify-center">
        <a
          href="https://wa.me/"
          className="group inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-4 text-sm font-bold text-black transition hover:scale-105"
        >
          Kostenlose Website-Vorschau
          <ArrowRight size={18} className="transition group-hover:translate-x-1" />
        </a>

        <a
          href="#konzepte"
          className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 px-6 py-4 text-sm font-semibold text-white backdrop-blur transition hover:bg-white/10"
        >
          Designkonzepte ansehen
        </a>
      </div>

      <MockupStage />
    </section>
  );
}

function MockupStage() {
  return (
    <div className="relative mt-14 hidden w-full max-w-5xl md:block">
      <div className="relative mx-auto overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.04] p-3 shadow-[0_40px_160px_rgba(0,0,0,0.55)] backdrop-blur">
        <div className="rounded-[1.5rem] border border-white/10 bg-[#080812] p-5">
          <div className="mb-5 flex items-center gap-2">
            <div className="h-3 w-3 rounded-full bg-red-400/80" />
            <div className="h-3 w-3 rounded-full bg-yellow-400/80" />
            <div className="h-3 w-3 rounded-full bg-green-400/80" />
          </div>

          <div className="grid gap-5 md:grid-cols-[1.2fr_0.8fr]">
            <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-violet-500/25 via-white/5 to-blue-500/20 p-8 text-left">
              <p className="mb-3 text-sm text-white/50">Website Preview</p>
              <h3 className="text-3xl font-semibold tracking-tight">
                Premium Beauty Studio
              </h3>
              <p className="mt-4 max-w-md text-sm leading-6 text-white/60">
                Visueller erster Eindruck, klare Leistungen, mobile Optimierung
                und direkte Anfrage per WhatsApp.
              </p>
              <div className="mt-8 h-32 rounded-2xl bg-white/10" />
            </div>

            <div className="grid gap-5">
              <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-6 text-left">
                <MonitorSmartphone className="mb-5 text-violet-300" />
                <h4 className="font-semibold">Mobile First</h4>
                <p className="mt-2 text-sm text-white/50">
                  Optimiert für Kunden, die direkt vom Handy anfragen.
                </p>
              </div>

              <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-6 text-left">
                <Zap className="mb-5 text-blue-300" />
                <h4 className="font-semibold">Schnell & modern</h4>
                <p className="mt-2 text-sm text-white/50">
                  Keine langsame Baukasten-Optik. Klarer Premium-Look.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}