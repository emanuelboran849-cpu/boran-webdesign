import Image from "next/image";
import styles from "./AboutSection.module.css";

const capabilities = [
  {
    number: "01",
    label: "STRATEGIE",
    title: "Positionierung vor Gestaltung.",
    text: "Angebot, Zielgruppe und die wichtigste Botschaft werden zuerst geschärft — damit Ihre Website nicht nur gut aussieht, sondern klar kommuniziert.",
    className: styles.cardOne,
  },
  {
    number: "02",
    label: "TECHNIK",
    title: "Schnell. Stabil. Sauber gebaut.",
    text: "Responsive umgesetzt, technisch klar strukturiert und für eine zuverlässige Nutzung auf allen relevanten Geräten entwickelt.",
    className: styles.cardTwo,
  },
  {
    number: "03",
    label: "SICHTBARKEIT",
    title: "Für Google sauber vorbereitet.",
    text: "Strukturierte Inhalte, relevante Meta-Daten und lokale SEO-Grundlagen schaffen die technische Basis für bessere Auffindbarkeit.",
    className: styles.cardThree,
  },
];

export default function AboutSection() {
  return (
    <section id="about" className={styles.section}>
      <div className={styles.container}>
        <p className={styles.topKicker}>
          WER HINTER BORAN WEBDESIGN STEHT.
        </p>

        <figure className={styles.heroVisual}>
          <Image
            src="/emanuel-brand.png"
            alt="Emanuel Boran bringt ein Boran Webdesign Bild an."
            width={1600}
            height={900}
            sizes="(max-width: 760px) 100vw, 1320px"
            className={styles.heroImage}
          />

          <figcaption className={styles.heroCaption}>
            SOLO WEBDESIGNER
          </figcaption>
        </figure>
      </div>

      <div className={styles.signalRail}>
        <div className={styles.signalGlow} />

        <div className={styles.signalTrack}>
          <div className={styles.signalSet}>
            <span>UNABHÄNGIGER WEBDESIGNER</span>
            <i />
            <span>DIREKTER AUSTAUSCH</span>
            <i />
            <span>EINE VERANTWORTUNG</span>
            <i />
            <span>VON DER IDEE BIS LIVE</span>
            <i />
          </div>

          <div className={styles.signalSet} aria-hidden="true">
            <span>UNABHÄNGIGER WEBDESIGNER</span>
            <i />
            <span>DIREKTER AUSTAUSCH</span>
            <i />
            <span>EINE VERANTWORTUNG</span>
            <i />
            <span>VON DER IDEE BIS LIVE</span>
            <i />
          </div>
        </div>
      </div>

      <div className={styles.container}>
        <div className={styles.introGrid}>
          <div>
            <p className={styles.eyebrow}>EIN DIREKTER WEG</p>

            <h2 className={styles.mainTitle}>
              Jede Website trägt auch meinen Namen.
              <span>Deshalb muss sie überzeugen.</span>
            </h2>
          </div>

          <div className={styles.introCopy}>
            <p>
              Ich bin Emanuel Boran, Gründer von Boran Webdesign. Als
              unabhängiger Webdesigner arbeite ich direkt mit Unternehmen,
              deren Qualität offline längst sichtbar ist.
            </p>

            <p>
              Vom ersten Gespräch bis zum Launch sprechen Sie mit der Person,
              die Ihre Website strategisch entwickelt, gestaltet und technisch
              umsetzt. Keine Übergaben zwischen Abteilungen. Kein anonymer
              Prozess. Eine klare Verantwortung.
            </p>
          </div>
        </div>

        <div className={styles.methodHeading}>
          <p className={styles.eyebrow}>
            WAS HINTER EINEM STARKEN AUFTRITT STECKT
          </p>

          <h3>
            Mehr als Design.
            <span>Strategie, Technik und Sichtbarkeit.</span>
          </h3>
        </div>

        <div className={styles.cardRail}>
          {capabilities.map((capability) => (
            <article
              key={capability.number}
              className={`${styles.methodCard} ${capability.className}`}
            >
              <div className={styles.cardVisual}>
                <span className={styles.cardNumber}>
                  {capability.number}
                </span>

                <div className={styles.visualSystem} aria-hidden="true">
                  <span className={styles.systemRingOne} />
                  <span className={styles.systemRingTwo} />
                  <span className={styles.systemFrameOne} />
                  <span className={styles.systemFrameTwo} />
                  <span className={styles.systemSignal} />
                </div>

                <span className={styles.visualLabel}>
                  BW / {capability.number}
                </span>
              </div>

              <div className={styles.cardContent}>
                <p>{capability.label}</p>
                <h4>{capability.title}</h4>
                <span>{capability.text}</span>
              </div>
            </article>
          ))}
        </div>

        <div className={styles.workProof}>
          <div className={styles.workImageWrap}>
            <Image
              src="/emanuel-work.png"
              alt="Emanuel Boran arbeitet an einem Website-Projekt."
              width={1600}
              height={900}
              sizes="(max-width: 760px) 100vw, 700px"
              className={styles.workImage}
            />

            <span className={styles.workImageCaption}>
              BEHIND THE WORK
            </span>
          </div>

          <div className={styles.workCopy}>
  <p className={styles.workEyebrow}>
    BEHIND THE WORK.
  </p>

  <h3>
    Details, die nicht zufällig sind.
  </h3>

  <p>
    Vom Aufbau der Inhalte bis zur technischen Qualität wird jede
    Entscheidung darauf geprüft, ob sie Ihre Marke klarer,
    nutzerfreundlicher und sichtbarer macht.
  </p>

  <div className={styles.workSteps}>
    <span>POSITIONIERUNG</span>
    <span>DESIGN</span>
    <span>TECHNIK</span>
    <span>SEO-BASIS</span>
    <span>LAUNCH</span>
  </div>
</div>
        </div>
      </div>
    </section>
  );
}