"use client";

import { motion } from "framer-motion";

const principles = [
  {
    number: "01",
    title: "Strategie",
    text: "Klar für Ihre Kunden.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-5 w-5"
      >
        <path d="M12 3 4.5 7.2 12 11.5l7.5-4.3L12 3Z" />
        <path d="M4.5 7.2v8.7L12 20l7.5-4.1V7.2" />
        <path d="M12 11.5V20" />
      </svg>
    ),
  },
  {
    number: "02",
    title: "Design",
    text: "Passend zu Ihrer Marke.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-5 w-5"
      >
        <rect x="5" y="5" width="14" height="14" rx="2" />
        <path d="M8 16 16 8" />
        <path d="M8 8h0.01" />
        <path d="M16 16h0.01" />
      </svg>
    ),
  },
  {
    number: "03",
    title: "Entwicklung",
    text: "Schnell auf jedem Gerät.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-5 w-5"
      >
        <path d="m8.5 7-4 5 4 5" />
        <path d="m15.5 7 4 5-4 5" />
        <path d="m13.5 4-3 16" />
      </svg>
    ),
  },
];

export default function HeroSection() {
  return (
    <section
      id="start"
      className="relative isolate overflow-hidden bg-[#030303] px-5 pb-16 pt-32 text-white md:px-8 md:pt-36 lg:min-h-screen lg:px-10 lg:pb-14 lg:pt-40"
    >
      {/* fundal cinematic doar pe desktop */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 hidden overflow-hidden lg:block"
      >
        <motion.img
          src="/boran-hero-desktop.png"
          alt=""
          animate={{
            scale: [1.01, 1.035, 1.01],
            x: ["0%", "-0.7%", "0%"],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute inset-0 h-full w-full object-cover object-center"
        />

        {/* păstrează stânga neagră pentru lizibilitate */}
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(3,3,3,1)_0%,rgba(3,3,3,0.97)_25%,rgba(3,3,3,0.8)_41%,rgba(3,3,3,0.34)_60%,rgba(3,3,3,0.04)_100%)]" />

        <div className="absolute inset-x-0 bottom-0 h-[38%] bg-gradient-to-t from-[#030303]/80 to-transparent" />
      </div>

      {/* fundal subtil doar pe mobil */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 lg:hidden"
      >
        <div className="absolute -right-56 -top-72 h-[42rem] w-[42rem] rounded-full bg-white/[0.025] blur-[170px]" />
        <div className="absolute -bottom-72 -left-64 h-[38rem] w-[38rem] rounded-full bg-white/[0.018] blur-[170px]" />
      </div>

      <div className="relative mx-auto max-w-[1440px] lg:flex lg:min-h-[calc(100svh-12rem)] lg:items-center">
        <div className="max-w-[650px]">
          <p className="mb-6 flex items-center gap-3 text-[0.68rem] font-bold uppercase tracking-[0.19em] text-white/85 sm:text-[0.75rem]">
            <span className="h-2.5 w-2.5 shrink-0 rounded-full bg-white shadow-[0_0_20px_rgba(255,255,255,0.95)]" />
            Boran Webdesign · Deutschland
          </p>

          <h1 className="max-w-[10ch] font-serif text-[clamp(3.3rem,13vw,4.8rem)] leading-[0.89] tracking-[-0.055em] text-white lg:text-[clamp(4.7rem,6vw,7.1rem)]">
            Ihre Qualität.
            <span className="mt-2 block text-white/72">
              Online spürbar.
            </span>
          </h1>

          <p className="mt-7 max-w-[34rem] text-[1.05rem] font-medium leading-[1.62] text-white/80 md:text-[1.14rem]">
            Individuelle Premium-Websites für lokale Unternehmen, die online so
            hochwertig wirken wollen wie ihre Arbeit vor Ort.
          </p>

          <a
            href="#kontakt"
            className="mt-8 inline-flex min-h-14 w-full items-center justify-center gap-4 rounded-full bg-white px-6 text-[0.95rem] font-bold text-black no-underline shadow-[0_0_0_1px_rgba(255,255,255,0.65),0_0_32px_rgba(255,255,255,0.18),0_18px_52px_rgba(255,255,255,0.15)] transition hover:-translate-y-0.5 hover:shadow-[0_0_42px_rgba(255,255,255,0.28),0_22px_60px_rgba(255,255,255,0.2)] sm:w-auto"
          >
            Kostenlose Vorschau anfragen
            <span className="text-xl leading-none">→</span>
          </a>

          {/* Strategie / Design / Entwicklung */}
          <div className="mt-9 grid grid-cols-3 gap-2.5 sm:mt-10 sm:gap-3 lg:max-w-[670px]">
            {principles.map((principle) => (
              <div
                key={principle.title}
                className="min-h-[122px] rounded-[18px] border border-white/[0.13] bg-black/[0.3] p-3 shadow-[inset_0_1px_0_rgba(255,255,255,0.06),0_14px_34px_rgba(0,0,0,0.28)] backdrop-blur-md lg:flex lg:min-h-[96px] lg:items-center lg:gap-3 lg:rounded-[16px] lg:p-3"
              >
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-[11px] border border-white/[0.16] bg-black/60 text-white shadow-[0_0_16px_rgba(255,255,255,0.05)] sm:h-10 sm:w-10">
                  {principle.icon}
                </div>

                <div className="min-w-0">
                  <span className="mt-3 block text-[0.48rem] font-bold tracking-[0.16em] text-white/38 lg:mt-0 lg:text-[0.52rem]">
                    {principle.number}
                  </span>

                  <h3 className="mt-1 text-[0.48rem] font-bold uppercase tracking-[0.08em] text-white sm:text-[0.66rem] sm:tracking-[0.12em] lg:text-[0.62rem]">
                    {principle.title}
                  </h3>

                  <p className="mt-2 text-[0.56rem] leading-snug text-white/58 sm:text-[0.73rem] lg:mt-1 lg:text-[0.68rem]">
                    {principle.text}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* card vizual doar pe mobil */}
          <motion.div
            initial={{ opacity: 0, y: 24, scale: 0.985 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="mt-12 w-full lg:hidden"
          >
            <div className="relative aspect-[4/5] overflow-hidden rounded-[30px] border border-white/[0.1] bg-[#050506] shadow-[0_0_0_1px_rgba(255,255,255,0.025)_inset,0_34px_105px_rgba(0,0,0,0.68)]">
              <motion.img
                src="/boran-signal-hero.png"
                alt="Boran Webdesign visual identity"
                animate={{
                  scale: [1.015, 1.045, 1.015],
                  x: [0, -5, 0],
                  y: [0, -3, 0],
                }}
                transition={{
                  duration: 16,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute inset-0 h-full w-full object-cover object-[57%_50%]"
              />

              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.02)_0%,rgba(0,0,0,0.12)_45%,rgba(0,0,0,0.88)_100%)]" />

              <div className="absolute inset-0 bg-[radial-gradient(circle_at_88%_14%,rgba(255,255,255,0.09),transparent_18%),radial-gradient(circle_at_18%_80%,rgba(0,0,0,0.28),transparent_38%)]" />

              <motion.div
                aria-hidden="true"
                className="absolute -bottom-1/2 -top-1/2 left-[-30%] w-[15%] rotate-[17deg] bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.02),rgba(255,255,255,0.12),rgba(255,255,255,0.02),transparent)] blur-xl"
                animate={{ x: ["0%", "700%"] }}
                transition={{
                  duration: 11,
                  repeat: Infinity,
                  repeatDelay: 4,
                  ease: "linear",
                }}
              />

              <div className="absolute inset-x-0 bottom-0 z-10 p-6 sm:p-7">
                <p className="font-mono text-[0.82rem] font-semibold uppercase leading-[1.42] tracking-[0.07em] text-white drop-shadow-[0_2px_14px_rgba(0,0,0,0.9)] sm:text-[0.96rem] sm:tracking-[0.1em]">
  <span className="block">PREMIUM WEBSITES</span>
  <span className="block text-white/88">FÜR LOKALE UNTERNEHMEN.</span>
</p>

<p className="mt-4 font-mono text-[0.66rem] uppercase leading-[1.65] tracking-[0.1em] text-white/78 drop-shadow-[0_2px_12px_rgba(0,0,0,0.9)] sm:text-[0.76rem] sm:tracking-[0.13em]">
  <span className="block">FÜR EINEN STARKEN ERSTEN</span>
  <span className="block">EINDRUCK. UND EINFACHE ANFRAGEN</span>
</p>

                <div className="mt-5 h-px w-full bg-gradient-to-r from-white/80 via-white/20 to-transparent" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}