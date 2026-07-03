"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const ENTER_EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];
const HERO_REVEAL_FALLBACK_MS = 4800;

const benefits = [
  {
    number: "01",
    title: "Vertrauen",
    text: "Hochwertig, bevor Sie sprechen.",
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
    title: "Klarheit",
    text: "Ihr Angebot sofort verständlich.",
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
    title: "Anfragen",
    text: "Kontakt ohne Umwege.",
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
  const [heroReady, setHeroReady] = useState(false);

  useEffect(() => {
    if (document.documentElement.dataset.boranIntroComplete === "true") {
      const timer = window.setTimeout(() => setHeroReady(true), 30);
      return () => window.clearTimeout(timer);
    }

    let revealTimer: number | undefined;

    const revealHero = () => {
      revealTimer = window.setTimeout(() => {
        setHeroReady(true);
      }, 30);
    };

    window.addEventListener("boran:intro-complete", revealHero, {
      once: true,
    });

    const fallbackTimer = window.setTimeout(() => {
      setHeroReady(true);
    }, HERO_REVEAL_FALLBACK_MS);

    return () => {
      window.removeEventListener("boran:intro-complete", revealHero);
      window.clearTimeout(fallbackTimer);

      if (revealTimer) {
        window.clearTimeout(revealTimer);
      }
    };
  }, []);

  return (
    <section
      id="start"
      className="relative isolate overflow-hidden bg-[#030303] px-5 pb-16 pt-[7.75rem] text-white md:px-8 md:pt-36 lg:min-h-screen lg:px-10 lg:pb-14 lg:pt-40"
    >
      {/* Desktop background */}
      <motion.div
        aria-hidden="true"
        initial={{
          opacity: 0,
          scale: 1.025,
          filter: "blur(6px)",
        }}
        animate={
          heroReady
            ? {
                opacity: 1,
                scale: 1,
                filter: "blur(0px)",
              }
            : {
                opacity: 0,
                scale: 1.025,
                filter: "blur(6px)",
              }
        }
        transition={{
          duration: 0.82,
          ease: ENTER_EASE,
        }}
        className="pointer-events-none absolute inset-0 hidden overflow-hidden lg:block"
      >
        <motion.img
          src="/boran-hero-desktop.png"
          alt=""
          animate={{
            scale: [1.01, 1.028, 1.01],
            x: ["0%", "-0.5%", "0%"],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute inset-0 h-full w-full object-cover object-center"
        />

        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(3,3,3,1)_0%,rgba(3,3,3,0.97)_25%,rgba(3,3,3,0.8)_41%,rgba(3,3,3,0.34)_60%,rgba(3,3,3,0.04)_100%)]" />
        <div className="absolute inset-x-0 bottom-0 h-[38%] bg-gradient-to-t from-[#030303]/80 to-transparent" />
      </motion.div>

      {/* Mobile background */}
      <motion.div
        aria-hidden="true"
        initial={{ opacity: 0 }}
        animate={{ opacity: heroReady ? 1 : 0 }}
        transition={{
          duration: 0.55,
          ease: ENTER_EASE,
        }}
        className="pointer-events-none absolute inset-0 lg:hidden"
      >
        <div className="absolute -right-56 -top-72 h-[42rem] w-[42rem] rounded-full bg-white/[0.022] blur-[170px]" />
        <div className="absolute -bottom-72 -left-64 h-[38rem] w-[38rem] rounded-full bg-white/[0.016] blur-[170px]" />
      </motion.div>

      <div className="relative mx-auto max-w-[1440px] lg:flex lg:min-h-[calc(100svh-12rem)] lg:items-center">
        <div className="max-w-[650px]">
          <motion.p
            initial={{
              opacity: 0,
              y: 12,
              filter: "blur(3px)",
            }}
            animate={
              heroReady
                ? {
                    opacity: 1,
                    y: 0,
                    filter: "blur(0px)",
                  }
                : {
                    opacity: 0,
                    y: 12,
                    filter: "blur(3px)",
                  }
            }
            transition={{
              duration: 0.42,
              delay: 0.02,
              ease: ENTER_EASE,
            }}
            className="mb-6 flex items-center gap-3 text-[0.68rem] font-bold uppercase tracking-[0.19em] text-white/85 sm:text-[0.75rem]"
          >
            <motion.span
              aria-hidden="true"
              initial={{
                scale: 0.65,
                opacity: 0,
              }}
              animate={
                heroReady
                  ? {
                      scale: [0.65, 1.18, 1],
                      opacity: 1,
                    }
                  : {
                      scale: 0.65,
                      opacity: 0,
                    }
              }
              transition={{
                duration: 0.5,
                delay: 0.08,
                ease: ENTER_EASE,
              }}
              className="h-2.5 w-2.5 shrink-0 rounded-full bg-white shadow-[0_0_20px_rgba(255,255,255,0.9)]"
            />
            Boran Webdesign · Deutschland
          </motion.p>

          <h1 className="max-w-[10ch] font-serif text-[clamp(3.3rem,13vw,4.8rem)] leading-[0.89] tracking-[-0.055em] text-white lg:text-[clamp(4.7rem,6vw,7.1rem)]">
            <span className="block overflow-hidden pb-[0.06em]">
              <motion.span
                initial={{
                  y: "108%",
                  opacity: 0,
                  filter: "blur(2px)",
                }}
                animate={
                  heroReady
                    ? {
                        y: "0%",
                        opacity: 1,
                        filter: "blur(0px)",
                      }
                    : {
                        y: "108%",
                        opacity: 0,
                        filter: "blur(2px)",
                      }
                }
                transition={{
                  duration: 0.66,
                  delay: 0.1,
                  ease: ENTER_EASE,
                }}
                className="block origin-bottom"
              >
                Ihre Qualität.
              </motion.span>
            </span>

            <span className="block overflow-hidden pb-[0.08em]">
              <motion.span
                initial={{
                  y: "108%",
                  opacity: 0,
                  filter: "blur(2px)",
                }}
                animate={
                  heroReady
                    ? {
                        y: "0%",
                        opacity: 1,
                        filter: "blur(0px)",
                      }
                    : {
                        y: "108%",
                        opacity: 0,
                        filter: "blur(2px)",
                      }
                }
                transition={{
                  duration: 0.66,
                  delay: 0.19,
                  ease: ENTER_EASE,
                }}
                className="block origin-bottom text-[#db3150] [text-shadow:0_0_28px_rgba(219,49,80,0.2)]"
              >
                Online spürbar.
              </motion.span>
            </span>
          </h1>

          <motion.p
            initial={{
              opacity: 0,
              y: 14,
              filter: "blur(3px)",
            }}
            animate={
              heroReady
                ? {
                    opacity: 1,
                    y: 0,
                    filter: "blur(0px)",
                  }
                : {
                    opacity: 0,
                    y: 14,
                    filter: "blur(3px)",
                  }
            }
            transition={{
              duration: 0.5,
              delay: 0.38,
              ease: ENTER_EASE,
            }}
            className="mt-7 max-w-[35rem] text-[1.05rem] font-medium leading-[1.62] text-white/80 md:text-[1.14rem]"
          >
            Individuelle Premium-Websites für lokale Unternehmen, die online
            Vertrauen schaffen, ihre Leistungen klar zeigen und neue Anfragen
            einfacher machen.
          </motion.p>

          <motion.button
            type="button"
            initial={{
              opacity: 0,
              y: 12,
              scale: 0.985,
            }}
            animate={
              heroReady
                ? {
                    opacity: 1,
                    y: 0,
                    scale: 1,
                  }
                : {
                    opacity: 0,
                    y: 12,
                    scale: 0.985,
                  }
            }
            transition={{
              duration: 0.44,
              delay: 0.5,
              ease: ENTER_EASE,
            }}
            whileHover={{
              y: -2,
              scale: 1.01,
            }}
            whileTap={{
              scale: 0.985,
            }}
            onClick={() =>
              window.dispatchEvent(new Event("boran:open-lead-form"))
            }
            className="group relative mt-8 inline-flex min-h-14 w-full items-center justify-center gap-4 overflow-hidden rounded-full border border-white/[0.22] bg-white px-6 text-[0.98rem] font-extrabold text-black shadow-[0_0_34px_rgba(255,255,255,0.18),0_18px_54px_rgba(255,255,255,0.12)] transition hover:bg-neutral-100 hover:shadow-[0_0_44px_rgba(255,255,255,0.26),0_22px_64px_rgba(255,255,255,0.16)] sm:w-auto sm:px-7"
          >
            <span className="absolute -left-[35%] top-0 h-full w-[32%] skew-x-[-18deg] bg-gradient-to-r from-transparent via-black/10 to-transparent opacity-0 blur-sm transition duration-700 group-hover:left-[120%] group-hover:opacity-100" />

            <span className="relative z-10">Kostenlose Vorschau anfragen</span>

            <motion.span
              aria-hidden="true"
              animate={
                heroReady
                  ? {
                      x: [0, 4, 0],
                    }
                  : {
                      x: 0,
                    }
              }
              transition={{
                duration: 1.8,
                repeat: Infinity,
                repeatDelay: 1.2,
                ease: "easeInOut",
              }}
              className="relative z-10 text-xl leading-none"
            >
              →
            </motion.span>
          </motion.button>

          <motion.div
            initial={{
              opacity: 0,
              y: 8,
            }}
            animate={
              heroReady
                ? {
                    opacity: 1,
                    y: 0,
                  }
                : {
                    opacity: 0,
                    y: 8,
                  }
            }
            transition={{
              duration: 0.42,
              delay: 0.58,
              ease: ENTER_EASE,
            }}
            className="mt-4 flex flex-wrap items-center gap-x-2 gap-y-1 text-[0.62rem] font-semibold uppercase tracking-[0.12em] text-white/46"
          >
            <span>Unverbindlich</span>
            <span className="h-1 w-1 rounded-full bg-white/38" />
            <span>Direkte Rückmeldung</span>
            <span className="h-1 w-1 rounded-full bg-white/38" />
            <span>Kein Verkaufsdruck</span>
          </motion.div>

          {/* Desktop benefits — apar imediat cu hero-ul */}
          <div className="mt-9 hidden grid-cols-3 gap-2.5 sm:mt-10 sm:gap-3 lg:grid lg:max-w-[670px]">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{
                  opacity: 0,
                  y: 18,
                  scale: 0.975,
                  filter: "blur(4px)",
                }}
                animate={
                  heroReady
                    ? {
                        opacity: 1,
                        y: 0,
                        scale: 1,
                        filter: "blur(0px)",
                      }
                    : {
                        opacity: 0,
                        y: 18,
                        scale: 0.975,
                        filter: "blur(4px)",
                      }
                }
                transition={{
                  duration: 0.46,
                  delay: 0.68 + index * 0.08,
                  ease: ENTER_EASE,
                }}
                whileHover={{
                  y: -4,
                  transition: {
                    duration: 0.2,
                  },
                }}
                className="min-h-[96px] rounded-[16px] border border-white/[0.13] bg-black/[0.3] p-3 shadow-[inset_0_1px_0_rgba(255,255,255,0.06),0_14px_34px_rgba(0,0,0,0.28)] backdrop-blur-md lg:flex lg:items-center lg:gap-3"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-[11px] border border-white/[0.16] bg-black/60 text-white shadow-[0_0_16px_rgba(255,255,255,0.05)]">
                  {benefit.icon}
                </div>

                <div className="min-w-0">
                  <span className="block text-[0.52rem] font-bold tracking-[0.16em] text-white/38">
                    {benefit.number}
                  </span>

                  <h3 className="mt-1 text-[0.62rem] font-bold uppercase tracking-[0.12em] text-white">
                    {benefit.title}
                  </h3>

                  <p className="mt-1 text-[0.68rem] leading-snug text-white/58">
                    {benefit.text}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Mobile benefits — apar doar când ajungi la ele */}
          <div className="mt-9 grid grid-cols-3 gap-2.5 sm:mt-10 sm:gap-3 lg:hidden">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{
                  opacity: 0,
                  y: 34,
                  scale: 0.96,
                  filter: "blur(8px)",
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                  scale: 1,
                  filter: "blur(0px)",
                }}
                viewport={{
                  once: true,
                  amount: 0.65,
                  margin: "0px 0px -12% 0px",
                }}
                transition={{
                  duration: 0.58,
                  delay: index * 0.09,
                  ease: ENTER_EASE,
                }}
                className="min-h-[126px] rounded-[18px] border border-white/[0.13] bg-black/[0.3] p-3 shadow-[inset_0_1px_0_rgba(255,255,255,0.06),0_14px_34px_rgba(0,0,0,0.28)] backdrop-blur-md"
              >
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-[11px] border border-white/[0.16] bg-black/60 text-white shadow-[0_0_16px_rgba(255,255,255,0.05)] sm:h-10 sm:w-10">
                  {benefit.icon}
                </div>

                <div className="min-w-0">
                  <span className="mt-3 block text-[0.48rem] font-bold tracking-[0.16em] text-white/38">
                    {benefit.number}
                  </span>

                  <h3 className="mt-1 text-[0.52rem] font-bold uppercase tracking-[0.08em] text-white sm:text-[0.66rem] sm:tracking-[0.12em]">
                    {benefit.title}
                  </h3>

                  <p className="mt-2 text-[0.56rem] leading-snug text-white/58 sm:text-[0.73rem]">
                    {benefit.text}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Mobile visual */}
          <motion.div
            initial={{
              opacity: 0,
              x: 78,
              y: 18,
              scale: 0.96,
              rotateZ: 1.2,
              filter: "blur(10px)",
            }}
            whileInView={{
              opacity: 1,
              x: 0,
              y: 0,
              scale: 1,
              rotateZ: 0,
              filter: "blur(0px)",
            }}
            viewport={{
              once: true,
              amount: 0.32,
              margin: "0px 0px -10% 0px",
            }}
            transition={{
              duration: 0.88,
              ease: ENTER_EASE,
            }}
            className="mt-10 w-full will-change-transform lg:hidden"
          >
            <div className="relative aspect-[10/11] overflow-hidden rounded-[30px] border border-white/[0.1] bg-[#050506] shadow-[0_0_0_1px_rgba(255,255,255,0.025)_inset,0_34px_105px_rgba(0,0,0,0.68)]">
              <motion.img
                src="/boran-signal-hero.png"
                alt="Boran Webdesign visual identity"
                initial={{
                  scale: 1.04,
                  x: 16,
                }}
                whileInView={{
                  scale: 1.015,
                  x: 0,
                }}
                viewport={{
                  once: true,
                  amount: 0.32,
                }}
                transition={{
                  duration: 1.05,
                  ease: ENTER_EASE,
                }}
                className="absolute inset-0 h-full w-full object-cover object-[55%_52%]"
              />

              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.02)_0%,rgba(0,0,0,0.12)_43%,rgba(0,0,0,0.9)_100%)]" />

              <div className="absolute inset-0 bg-[radial-gradient(circle_at_88%_14%,rgba(255,255,255,0.09),transparent_18%),radial-gradient(circle_at_18%_80%,rgba(0,0,0,0.28),transparent_38%)]" />

              <motion.div
                aria-hidden="true"
                className="absolute -bottom-1/2 -top-1/2 left-[-30%] w-[15%] rotate-[17deg] bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.02),rgba(255,255,255,0.12),rgba(255,255,255,0.02),transparent)] blur-xl"
                initial={{ x: "0%" }}
                whileInView={{ x: "700%" }}
                viewport={{
                  once: true,
                  amount: 0.38,
                }}
                transition={{
                  duration: 1.65,
                  delay: 0.18,
                  ease: "linear",
                }}
              />

              <div className="absolute inset-x-0 bottom-0 z-10 p-6 sm:p-7">
                <p className="font-mono text-[0.76rem] font-semibold uppercase leading-[1.42] tracking-[0.09em] text-white drop-shadow-[0_2px_14px_rgba(0,0,0,0.9)] sm:text-[0.96rem] sm:tracking-[0.1em]">
                  <span className="block">DIGITALER ERSTER</span>
                  <span className="block text-white/88">EINDRUCK.</span>
                </p>

                <p className="mt-4 font-mono text-[0.62rem] uppercase leading-[1.65] tracking-[0.11em] text-white/78 drop-shadow-[0_2px_12px_rgba(0,0,0,0.9)] sm:text-[0.76rem] sm:tracking-[0.13em]">
                  <span className="block">KLAR. HOCHWERTIG.</span>
                  <span className="block">ANFRAGEBEREIT.</span>
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