"use client";

import { useEffect, useRef } from "react";
import styles from "./ConceptsSection.module.css";

type Principle = {
  number: string;
  label: string;
  cardTag: string;
  title: string;
  description: string;
  footer: string;
  tone: string;
};

const principles: Principle[] = [
  {
    number: "01",
    label: "Strategie vor Dekoration",
    cardTag: "KLARHEIT",
    title: "Nicht alles muss auffallen. Nur das Richtige.",
    description:
      "Bevor gestaltet wird, wird klar: Was soll ein Besucher verstehen — und welcher nächste Schritt soll sich selbstverständlich anfühlen?",
    footer: "Klarheit vor dem ersten Pixel.",
    tone: "red",
  },
  {
    number: "02",
    label: "Mobile ist der erste Eindruck",
    cardTag: "MOBILE FIRST",
    title: "Interesse beginnt oft unterwegs.",
    description:
      "Viele erste Kontakte entstehen auf dem Handy. Deshalb wird die mobile Version nicht später angepasst, sondern von Anfang an bewusst mitgedacht.",
    footer: "Mobile ist kein Nebenformat.",
    tone: "blue",
  },
  {
    number: "03",
    label: "Design mit Richtung",
    cardTag: "ANFRAGEWEGE",
    title: "Ein Auftritt führt. Er verwirrt nicht.",
    description:
      "Inhalte, Gestaltung und Anfragewege müssen zusammenspielen, damit aus Aufmerksamkeit ein klarer nächster Schritt werden kann.",
    footer: "Von Interesse zu Anfrage.",
    tone: "violet",
  },
  {
    number: "04",
    label: "Verantwortung bis ins Detail",
    cardTag: "VERANTWORTUNG",
    title: "Jede Website trägt auch meinen Namen.",
    description:
      "Jedes Projekt repräsentiert nicht nur ein Unternehmen, sondern auch meinen eigenen Anspruch an Qualität, Wirkung und Sorgfalt.",
    footer: "Kein Projekt wie eine Vorlage.",
    tone: "white",
  },
];

export default function ConceptsSection() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const viewportRef = useRef<HTMLDivElement | null>(null);
  const trackRef = useRef<HTMLDivElement | null>(null);
  const counterRef = useRef<HTMLSpanElement | null>(null);
  const progressRef = useRef<HTMLSpanElement | null>(null);

  useEffect(() => {
    let animationFrame = 0;

    const updateRail = () => {
      animationFrame = 0;

      const section = sectionRef.current;
      const viewport = viewportRef.current;
      const track = trackRef.current;

      if (!section || !viewport || !track) return;

      const rect = section.getBoundingClientRect();
      const scrollDistance = Math.max(
        1,
        section.offsetHeight - window.innerHeight,
      );

      const progress = Math.min(
        1,
        Math.max(0, -rect.top / scrollDistance),
      );

      const travelDistance =
        viewport.clientWidth * (principles.length - 1);

      track.style.transform = `translate3d(${
        -progress * travelDistance
      }px, 0, 0)`;

      const activeIndex = Math.min(
        principles.length - 1,
        Math.floor(progress * principles.length),
      );

      if (counterRef.current) {
        counterRef.current.textContent = principles[activeIndex].number;
      }

      if (progressRef.current) {
        progressRef.current.style.transform = `scaleX(${progress})`;
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
                    <h2>Prinzipien.</h2>
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
                  className={`${styles.card} ${
                    styles[`tone${principle.tone}`]
                  }`}
                >
                  <div className={styles.cardFrameOne} />
                  <div className={styles.cardFrameTwo} />

                  <div className={styles.cardTop}>
                    <span>{principle.cardTag}</span>
                    <span>
                      {principle.number} / 04
                    </span>
                  </div>

                  <span className={styles.cardNumber} aria-hidden="true">
                    {principle.number}
                  </span>

                  <h3 className={styles.mobileCardTitle}>
                    {principle.title}
                  </h3>

                  <span className={styles.cardBottom}>
                    BORAN WEBDESIGN
                  </span>
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