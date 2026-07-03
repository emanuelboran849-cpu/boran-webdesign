"use client";

import { motion, useInView } from "framer-motion";
import { useEffect, useRef } from "react";
import styles from "./PrinciplesSection.module.css";

type PrincipleTone = "red" | "blue" | "violet" | "white";

type Principle = {
  number: string;
  label: string;
  cardTag: string;
  title: string;
  description: string;
  footer: string;
  tone: PrincipleTone;
};

const ENTER_EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

const principles: Principle[] = [
  {
    number: "01",
    label: "PERSÖNLICHER ANSPRUCH",
    cardTag: "VERANTWORTUNG",
    title: "Jede Website trägt auch meinen Namen.",
    description:
      "Jede Website steht auch für meinen Anspruch. Deshalb entsteht kein Standardauftritt, sondern ein Ergebnis, das ich mit meinem Namen vertreten kann.",
    footer: "IHR AUFTRITT. AUCH MEIN ANSPRUCH.",
    tone: "red",
  },
  {
    number: "02",
    label: "MOBILE FIRST",
    cardTag: "MOBILE FIRST",
    title: "Interesse beginnt oft unterwegs.",
    description:
      "Viele erste Kontakte entstehen auf dem Handy. Deshalb wird die mobile Version nicht später angepasst, sondern von Anfang an bewusst mitgedacht.",
    footer: "MOBILE IST KEIN NEBENFORMAT.",
    tone: "blue",
  },
  {
    number: "03",
    label: "KLARE ANFRAGEWEGE",
    cardTag: "ANFRAGEWEGE",
    title: "Ein Auftritt führt. Er verwirrt nicht.",
    description:
      "Inhalte, Gestaltung und Anfragewege müssen zusammenspielen, damit aus Aufmerksamkeit ein klarer nächster Schritt werden kann.",
    footer: "VON INTERESSE ZU ANFRAGE.",
    tone: "violet",
  },
  {
    number: "04",
    label: "EIGENE IDENTITÄT",
    cardTag: "IDENTITÄT",
    title: "Nicht wie jede andere. Sondern wie Ihre.",
    description:
      "Ihre Website soll nicht wie eine Vorlage aussehen. Sie soll die Qualität, Haltung und Identität Ihres Unternehmens digital übersetzen.",
    footer: "IHRE MARKE. KEINE KOPIE.",
    tone: "white",
  },
];

export default function PrinciplesSection() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const viewportRef = useRef<HTMLDivElement | null>(null);
  const trackRef = useRef<HTMLDivElement | null>(null);
  const counterRef = useRef<HTMLSpanElement | null>(null);
  const progressRef = useRef<HTMLSpanElement | null>(null);
  const mobileViewportRef = useRef({ width: 0, height: 0 });
  const titleRef = useRef<HTMLHeadingElement | null>(null);

  const titleInView = useInView(titleRef, {
    once: true,
    amount: 0.45,
    margin: "0px 0px -12% 0px",
  });

  useEffect(() => {
    let animationFrame = 0;

    const smoothStep = (value: number) => value * value * (3 - 2 * value);

    const getHeldIndex = (
      rawIndex: number,
      maxIndex: number,
      holdEdge: number,
    ) => {
      if (rawIndex <= 0) return 0;
      if (rawIndex >= maxIndex) return maxIndex;

      const baseIndex = Math.floor(rawIndex);
      const fraction = rawIndex - baseIndex;

      if (fraction < holdEdge) {
        return baseIndex;
      }

      if (fraction > 1 - holdEdge) {
        return Math.min(maxIndex, baseIndex + 1);
      }

      const normalized =
        (fraction - holdEdge) / Math.max(0.001, 1 - holdEdge * 2);

      return baseIndex + smoothStep(normalized);
    };

    const updateRail = () => {
      animationFrame = 0;

      const section = sectionRef.current;
      const viewport = viewportRef.current;
      const track = trackRef.current;

      if (!section || !viewport || !track) return;

      const rect = section.getBoundingClientRect();
      const isMobile = window.matchMedia("(max-width: 899px)").matches;

      let viewportHeight = window.innerHeight;

      if (isMobile) {
        const currentWidth = window.innerWidth;

        if (
          mobileViewportRef.current.width !== currentWidth ||
          mobileViewportRef.current.height === 0
        ) {
          mobileViewportRef.current = {
            width: currentWidth,
            height: window.innerHeight,
          };
        }

        viewportHeight = mobileViewportRef.current.height || window.innerHeight;
      }

      const scrollDistance = Math.max(1, section.offsetHeight - viewportHeight);

      const rawProgress = Math.min(1, Math.max(0, -rect.top / scrollDistance));

      const maxIndex = principles.length - 1;
      const rawIndex = rawProgress * maxIndex;

      let finalProgress = 0;
      let activeIndex = 0;

      if (isMobile) {
        finalProgress = rawProgress;

        activeIndex = Math.min(maxIndex, Math.max(0, Math.round(rawIndex)));
      } else {
        const holdEdge = 0.24;
        const heldIndex = getHeldIndex(rawIndex, maxIndex, holdEdge);

        finalProgress = Math.min(1, Math.max(0, heldIndex / maxIndex));

        activeIndex = Math.min(maxIndex, Math.max(0, Math.round(heldIndex)));
      }

      const travelDistance = Math.max(
        0,
        track.scrollWidth - viewport.clientWidth,
      );

      track.style.transform = `translate3d(-${
        finalProgress * travelDistance
      }px, 0, 0)`;

      if (counterRef.current) {
        counterRef.current.textContent = principles[activeIndex].number;
      }

      if (progressRef.current) {
        progressRef.current.style.transform = `scaleX(${rawProgress})`;
      }
    };

    const handleScroll = () => {
      if (!animationFrame) {
        animationFrame = window.requestAnimationFrame(updateRail);
      }
    };

    updateRail();

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll);

    return () => {
      window.cancelAnimationFrame(animationFrame);
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  return (
    <section ref={sectionRef} id="ablauf" className={styles.section}>
      <div className={styles.sticky}>
        <div className={styles.backgroundGlow} />

        <header className={styles.heading}>
          <p>WAS EINEN STARKEN DIGITALEN AUFTRITT AUSMACHT</p>

          <h2 ref={titleRef} aria-label="Prinzipien.">
            <span
              aria-hidden="true"
              style={{
                display: "block",
                overflow: "hidden",
                paddingBottom: "0.08em",
              }}
            >
              <motion.span
                initial={{
                  y: "112%",
                  opacity: 0,
                  filter: "blur(5px)",
                }}
                animate={
                  titleInView
                    ? {
                        y: "0%",
                        opacity: 1,
                        filter: "blur(0px)",
                      }
                    : {
                        y: "112%",
                        opacity: 0,
                        filter: "blur(5px)",
                      }
                }
                transition={{
                  duration: 0.78,
                  delay: 0.12,
                  ease: ENTER_EASE,
                }}
                style={{
                  display: "block",
                  willChange: "transform, opacity, filter",
                }}
              >
                Prinzipien.
              </motion.span>
            </span>
          </h2>
        </header>

        <div ref={viewportRef} className={styles.viewport}>
          <div ref={trackRef} className={styles.track}>
            {principles.map((principle) => (
              <article
                key={principle.number}
                className={styles.slide}
                aria-label={`Prinzip ${principle.number}: ${principle.title}`}
              >
                <span className={styles.backgroundNumber} aria-hidden="true">
                  {principle.number}
                </span>

                <div className={styles.leftContent}>
                  <p>{principle.label}</p>
                  <h3>{principle.title}</h3>
                </div>

                <div
                  className={`${styles.card} ${styles[`tone${principle.tone}`]}`}
                >
                  <div className={styles.cardFrameOne} />
                  <div className={styles.cardFrameTwo} />

                  <div className={styles.cardTop}>
                    <span>{principle.cardTag}</span>
                    <span>{principle.number} / 04</span>
                  </div>

                  <span className={styles.cardNumber} aria-hidden="true">
                    {principle.number}
                  </span>

                  <h3 className={styles.mobileCardTitle}>{principle.title}</h3>

                  <span className={styles.cardBottom}>BORAN WEBDESIGN</span>
                </div>

                <div className={styles.rightContent}>
                  <p>{principle.description}</p>
                  <span>{principle.footer}</span>
                </div>
              </article>
            ))}
          </div>
        </div>

        <div className={styles.scrollIndicator}>
          <span>WEITER SCROLLEN</span>

          <div className={styles.progressLine}>
            <span ref={progressRef} />
          </div>

          <strong ref={counterRef}>01</strong>
          <span>/ 04</span>
        </div>
      </div>
    </section>
  );
}