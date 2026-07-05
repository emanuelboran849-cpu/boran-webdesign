"use client";

import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { useRef, type ReactNode } from "react";
import styles from "./AboutSection.module.css";

const ENTER_EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

const railItems = [
  "EIN ANSPRECHPARTNER",
  "DIREKTER AUSTAUSCH",
  "KLARE VERANTWORTUNG",
  "VON DER IDEE BIS LIVE",
];

const proofPoints = [
  "Ein Ansprechpartner statt Agentur-Übergaben",
  "Strategie, Design & Umsetzung aus einer Hand",
  "Klare Abstimmung vom ersten Gespräch bis live",
];

const processSteps = [
  "ERSTGESPRÄCH",
  "VORSCHAU",
  "FEEDBACK",
  "UMSETZUNG",
  "LIVEGANG",
];

type MaskLineTone = "dark" | "accentDark" | "light" | "accentLight";

function MaskLine({
  active,
  delay,
  children,
  tone = "dark",
}: {
  active: boolean;
  delay: number;
  children: ReactNode;
  tone?: MaskLineTone;
}) {
  const isAccent = tone === "accentDark" || tone === "accentLight";
  const isLight = tone === "light" || tone === "accentLight";

  const color = isAccent ? "#db3150" : isLight ? "#f8f5f0" : "#09090c";
  const textShadow = isAccent
    ? isLight
      ? "0 0 28px rgba(219, 49, 80, 0.16)"
      : "0 0 28px rgba(219, 49, 80, 0.1)"
    : "none";

  return (
    <span
      style={{
        display: "block",
        overflow: "hidden",
        marginTop: isAccent ? "0.08em" : 0,
        paddingBottom: "0.06em",
        color,
        textShadow,
      }}
    >
      <motion.span
        initial={{
          y: "110%",
          opacity: 0,
          filter: "blur(4px)",
        }}
        animate={
          active
            ? {
                y: "0%",
                opacity: 1,
                filter: "blur(0px)",
              }
            : {
                y: "110%",
                opacity: 0,
                filter: "blur(4px)",
              }
        }
        transition={{
          duration: 0.72,
          delay,
          ease: ENTER_EASE,
        }}
        style={{
          display: "block",
          marginTop: 0,
          color: "inherit",
          textShadow: "inherit",
          willChange: "transform, opacity, filter",
        }}
      >
        {children}
      </motion.span>
    </span>
  );
}

export default function AboutSection() {
  const introRef = useRef<HTMLDivElement | null>(null);
  const workRef = useRef<HTMLElement | null>(null);

  const introInView = useInView(introRef, {
    once: true,
    amount: 0.24,
    margin: "0px 0px -16% 0px",
  });

  const workInView = useInView(workRef, {
    once: true,
    amount: 0.22,
    margin: "0px 0px -16% 0px",
  });

  return (
    <section id="about" className={styles.section}>
      <div className={styles.container}>
        <motion.p
          initial={{
            opacity: 0,
            y: 18,
            filter: "blur(6px)",
          }}
          whileInView={{
            opacity: 1,
            y: 0,
            filter: "blur(0px)",
          }}
          viewport={{
            once: true,
            amount: 0.65,
          }}
          transition={{
            duration: 0.52,
            ease: ENTER_EASE,
          }}
          className={styles.topKicker}
        >
          DIREKTE ZUSAMMENARBEIT
        </motion.p>

        <motion.figure
          initial={{
            opacity: 0,
            y: 30,
            scale: 0.982,
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
            amount: 0.34,
          }}
          transition={{
            duration: 0.78,
            delay: 0.08,
            ease: ENTER_EASE,
          }}
          className={styles.heroVisual}
        >
          <motion.div
            initial={{
              scale: 1.045,
              x: 14,
            }}
            whileInView={{
              scale: 1,
              x: 0,
            }}
            viewport={{
              once: true,
              amount: 0.34,
            }}
            transition={{
              duration: 1,
              delay: 0.12,
              ease: ENTER_EASE,
            }}
            style={{
              width: "100%",
              height: "100%",
              willChange: "transform",
              transform: "translateZ(0)",
            }}
          >
            <Image
              src="/emanuel-brand.png"
              alt="Emanuel Boran mit dem Boran Webdesign Markenbild."
              width={1600}
              height={900}
              sizes="(max-width: 760px) 100vw, 1240px"
              className={styles.heroImage}
            />
          </motion.div>

          <motion.figcaption
            initial={{
              opacity: 0,
              x: -16,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
              amount: 0.34,
            }}
            transition={{
              duration: 0.46,
              delay: 0.42,
              ease: ENTER_EASE,
            }}
            className={styles.heroCaption}
          >
            SOLO WEBDESIGNER
          </motion.figcaption>
        </motion.figure>
      </div>

      <motion.div
        initial={{
          opacity: 0,
          y: 18,
          filter: "blur(5px)",
        }}
        whileInView={{
          opacity: 1,
          y: 0,
          filter: "blur(0px)",
        }}
        viewport={{
          once: true,
          amount: 0.35,
        }}
        transition={{
          duration: 0.58,
          delay: 0.08,
          ease: ENTER_EASE,
        }}
        className={styles.signalRail}
        aria-label="Vorteile der Zusammenarbeit"
      >
        <div className={styles.signalGlow} />

        <div className={styles.signalTrack}>
          <div className={styles.signalSet}>
            {railItems.map((item) => (
              <span key={item}>
                {item}
                <i />
              </span>
            ))}
          </div>

          <div className={styles.signalSet} aria-hidden="true">
            {railItems.map((item) => (
              <span key={`duplicate-${item}`}>
                {item}
                <i />
              </span>
            ))}
          </div>
        </div>
      </motion.div>

      <div className={styles.container}>
        <div ref={introRef} className={styles.introGrid}>
          <div>
            <motion.p
              initial={{
                opacity: 0,
                y: 14,
                filter: "blur(5px)",
              }}
              animate={
                introInView
                  ? {
                      opacity: 1,
                      y: 0,
                      filter: "blur(0px)",
                    }
                  : {
                      opacity: 0,
                      y: 14,
                      filter: "blur(5px)",
                    }
              }
              transition={{
                duration: 0.46,
                delay: 0.02,
                ease: ENTER_EASE,
              }}
              className={styles.eyebrow}
            >
              EIN DIREKTER WEG
            </motion.p>

            <h2 className={styles.mainTitle}>
              <MaskLine active={introInView} delay={0.08}>
                Sie arbeiten direkt
              </MaskLine>

              <MaskLine active={introInView} delay={0.16}>
                mit der Person,
              </MaskLine>

              <MaskLine active={introInView} delay={0.24} tone="accentDark">
                die Ihre Website verantwortet.
              </MaskLine>
            </h2>
          </div>

          <motion.div
            initial={{
              opacity: 0,
              x: 34,
              y: 14,
              filter: "blur(8px)",
            }}
            animate={
              introInView
                ? {
                    opacity: 1,
                    x: 0,
                    y: 0,
                    filter: "blur(0px)",
                  }
                : {
                    opacity: 0,
                    x: 34,
                    y: 14,
                    filter: "blur(8px)",
                  }
            }
            transition={{
              duration: 0.68,
              delay: 0.28,
              ease: ENTER_EASE,
            }}
            className={styles.introCopy}
          >
            <p>
              Ich bin Emanuel Boran, Gründer von Boran Webdesign. Ich arbeite
              bewusst nicht wie eine klassische Agentur mit wechselnden
              Ansprechpartnern, internen Übergaben und komplizierten Abläufen.
            </p>

            <p>
              Strategie, Design und technische Umsetzung kommen direkt aus
              einer Hand. Vom ersten Gespräch bis zum Launch sprechen Sie mit
              derselben Person, die Ihren digitalen Auftritt plant, gestaltet
              und umsetzt.
            </p>

            <ul className={styles.proofList}>
              {proofPoints.map((point, index) => (
                <motion.li
                  key={point}
                  initial={{
                    opacity: 0,
                    x: 16,
                    filter: "blur(4px)",
                  }}
                  animate={
                    introInView
                      ? {
                          opacity: 1,
                          x: 0,
                          filter: "blur(0px)",
                        }
                      : {
                          opacity: 0,
                          x: 16,
                          filter: "blur(4px)",
                        }
                  }
                  transition={{
                    duration: 0.42,
                    delay: 0.52 + index * 0.08,
                    ease: ENTER_EASE,
                  }}
                >
                  {point}
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>

        <motion.article
          ref={workRef}
          initial={{
            opacity: 0,
            y: 34,
            scale: 0.985,
          }}
          animate={
            workInView
              ? {
                  opacity: 1,
                  y: 0,
                  scale: 1,
                }
              : {
                  opacity: 0,
                  y: 34,
                  scale: 0.985,
                }
          }
          transition={{
            duration: 0.72,
            ease: ENTER_EASE,
          }}
          className={styles.workProof}
        >
          <motion.figure
            initial={{
              opacity: 0,
              x: -26,
              scale: 0.985,
            }}
            animate={
              workInView
                ? {
                    opacity: 1,
                    x: 0,
                    scale: 1,
                  }
                : {
                    opacity: 0,
                    x: -26,
                    scale: 0.985,
                  }
            }
            transition={{
              duration: 0.78,
              delay: 0.08,
              ease: ENTER_EASE,
            }}
            className={styles.workImageWrap}
          >
            <motion.div
              initial={{
                scale: 1.035,
                x: -10,
              }}
              animate={
                workInView
                  ? {
                      scale: 1,
                      x: 0,
                    }
                  : {
                      scale: 1.035,
                      x: -10,
                    }
              }
              transition={{
                duration: 1.05,
                delay: 0.12,
                ease: ENTER_EASE,
              }}
              style={{
                width: "100%",
                height: "100%",
                willChange: "transform",
                transform: "translateZ(0)",
              }}
            >
              <Image
  src="/emanuel-work-v2.png"
  alt="Emanuel Boran arbeitet an einem Website-Projekt."
  width={1600}
  height={900}
  sizes="(max-width: 900px) 100vw, 1180px"
  quality={96}
  className={styles.workImage}
/>
            </motion.div>

            <motion.figcaption
              initial={{
                opacity: 0,
                x: 14,
              }}
              animate={
                workInView
                  ? {
                      opacity: 1,
                      x: 0,
                    }
                  : {
                      opacity: 0,
                      x: 14,
                    }
              }
              transition={{
                duration: 0.46,
                delay: 0.48,
                ease: ENTER_EASE,
              }}
              className={styles.workImageCaption}
            >
              VON DER IDEE BIS LIVE
            </motion.figcaption>
          </motion.figure>

          <motion.div
            initial={{
              opacity: 0,
              x: 34,
              filter: "blur(7px)",
            }}
            animate={
              workInView
                ? {
                    opacity: 1,
                    x: 0,
                    filter: "blur(0px)",
                  }
                : {
                    opacity: 0,
                    x: 34,
                    filter: "blur(7px)",
                  }
            }
            transition={{
              duration: 0.68,
              delay: 0.2,
              ease: ENTER_EASE,
            }}
            className={styles.workCopy}
          >
            <motion.p
              initial={{
                opacity: 0,
                y: 12,
                filter: "blur(4px)",
              }}
              animate={
                workInView
                  ? {
                      opacity: 1,
                      y: 0,
                      filter: "blur(0px)",
                    }
                  : {
                      opacity: 0,
                      y: 12,
                      filter: "blur(4px)",
                    }
              }
              transition={{
                duration: 0.42,
                delay: 0.32,
                ease: ENTER_EASE,
              }}
              className={styles.workEyebrow}
            >
              KOSTENLOSE WEBSITE-VORSCHAU
            </motion.p>

            <h3>
              <MaskLine active={workInView} delay={0.4} tone="light">
                Erst sehen.
              </MaskLine>

              <MaskLine active={workInView} delay={0.5} tone="accentLight">
                Dann entscheiden.
              </MaskLine>
            </h3>

            <motion.p
              initial={{
                opacity: 0,
                y: 16,
                filter: "blur(5px)",
              }}
              animate={
                workInView
                  ? {
                      opacity: 1,
                      y: 0,
                      filter: "blur(0px)",
                    }
                  : {
                      opacity: 0,
                      y: 16,
                      filter: "blur(5px)",
                    }
              }
              transition={{
                duration: 0.5,
                delay: 0.66,
                ease: ENTER_EASE,
              }}
            >
              Auf Wunsch entwickle ich zuerst eine visuelle Vorschau für Ihre
              Website — kostenlos und unverbindlich. Gefällt Ihnen die
              Richtung, setzen wir sie gemeinsam um. Wenn nicht, entstehen
              Ihnen keine Kosten.
            </motion.p>

            <motion.div
              initial={{
                opacity: 0,
                y: 18,
                filter: "blur(5px)",
              }}
              animate={
                workInView
                  ? {
                      opacity: 1,
                      y: 0,
                      filter: "blur(0px)",
                    }
                  : {
                      opacity: 0,
                      y: 18,
                      filter: "blur(5px)",
                    }
              }
              transition={{
                duration: 0.5,
                delay: 0.8,
                ease: ENTER_EASE,
              }}
              className={styles.processNote}
            >
              <span className={styles.processDot} />
              <p>
                <strong>Klare nächste Schritte.</strong>
                <br />
                Vorschau, Feedback und Umsetzung — ohne unnötige Schleifen.
              </p>
            </motion.div>

            <motion.div
              initial={{
                opacity: 0,
                y: 18,
              }}
              animate={
                workInView
                  ? {
                      opacity: 1,
                      y: 0,
                    }
                  : {
                      opacity: 0,
                      y: 18,
                    }
              }
              transition={{
                duration: 0.48,
                delay: 0.94,
                ease: ENTER_EASE,
              }}
              className={styles.workSteps}
            >
              {processSteps.map((step) => (
                <span key={step}>{step}</span>
              ))}
            </motion.div>
          </motion.div>
        </motion.article>
      </div>
    </section>
  );
}