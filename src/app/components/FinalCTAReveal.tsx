"use client";

import type { FormEvent } from "react";
import { useEffect, useRef, useState } from "react";
import { ArrowUpRight, Mail } from "lucide-react";

const WEB3FORMS_ACCESS_KEY = "6361b508-bdfc-4d14-a2fa-89818394a083";

const clamp = (value: number, min: number, max: number) =>
  Math.min(max, Math.max(min, value));
const smoothStep = (value: number) =>
  value * value * (3 - 2 * value);

type SubmitState = "idle" | "loading" | "success" | "error";

export default function FinalCTAReveal() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const panelRef = useRef<HTMLDivElement | null>(null);
  const contactRef = useRef<HTMLDivElement | null>(null);
  const shellRef = useRef<HTMLDivElement | null>(null);
  const bgRef = useRef<HTMLDivElement | null>(null);
  const mobileViewportRef = useRef({ width: 0, height: 0 });

  const [submitState, setSubmitState] = useState<SubmitState>("idle");

  useEffect(() => {
  let animationFrame = 0;

  const updateScene = () => {
    animationFrame = 0;

    const section = sectionRef.current;
    const panel = panelRef.current;
    const contact = contactRef.current;
    const shell = shellRef.current;
    const bg = bgRef.current;

    if (!section || !panel || !contact || !shell) return;

    const rect = section.getBoundingClientRect();
    const isMobile = window.matchMedia("(max-width: 760px)").matches;

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
    }

    const viewportHeight = isMobile
      ? mobileViewportRef.current.height || window.innerHeight
      : window.innerHeight;

    const contactTravel = isMobile
      ? Math.max(0, shell.scrollHeight + 148 - viewportHeight)
      : 0;

    const panelScrollDistance = viewportHeight * (isMobile ? 1.68 : 1.78);

    const contactHoldDistance = isMobile
      ? viewportHeight * 0.42 + contactTravel
      : viewportHeight * 0.48;

    const targetHeight =
      viewportHeight + panelScrollDistance + contactHoldDistance;

    section.style.height = `${targetHeight}px`;

    const rawPx = clamp(-rect.top, 0, targetHeight - viewportHeight);

    const panelHoldPx = viewportHeight * (isMobile ? 0.1 : 0.12);

    const panelMoveDistance = Math.max(
      1,
      panelScrollDistance - panelHoldPx
    );

    const panelProgress = clamp(
      (rawPx - panelHoldPx) / panelMoveDistance,
      0,
      1
    );

    panel.style.transform = `translate3d(0, ${-panelProgress * 100}%, 0)`;

    section.style.setProperty(
      "--bw-final-panel-line-opacity",
      String(1 - clamp((panelProgress - 0.78) / 0.16, 0, 1))
    );

    if (bg) {
      bg.style.transform = `scale(${
        1.012 + panelProgress * 0.018
      }) translate3d(0, ${-panelProgress * 14}px, 0)`;
    }

    /*
      DESKTOP:
      Reveal reversibil, cum ai zis că e perfect acum.
    */
    if (!isMobile) {
      const leftRawProgress = clamp((panelProgress - 0.54) / 0.28, 0, 1);
      const formRawProgress = clamp((panelProgress - 0.62) / 0.28, 0, 1);

      const leftReveal = smoothStep(leftRawProgress);
      const formReveal = smoothStep(formRawProgress);

      section.style.setProperty(
        "--bw-final-left-opacity",
        String(leftReveal)
      );

      section.style.setProperty(
        "--bw-final-left-x",
        `${(1 - leftReveal) * -42}px`
      );

      section.style.setProperty(
        "--bw-final-left-y",
        `${(1 - leftReveal) * 8}px`
      );

      section.style.setProperty(
        "--bw-final-left-blur",
        `${(1 - leftReveal) * 6}px`
      );

      section.style.setProperty(
        "--bw-final-form-opacity",
        String(formReveal)
      );

      section.style.setProperty(
        "--bw-final-form-x",
        `${(1 - formReveal) * 48}px`
      );

      section.style.setProperty(
        "--bw-final-form-y",
        `${(1 - formReveal) * 10}px`
      );

      section.style.setProperty(
        "--bw-final-form-blur",
        `${(1 - formReveal) * 7}px`
      );

      section.style.setProperty(
        "--bw-final-form-scale",
        String(0.982 + formReveal * 0.018)
      );

      contact.style.pointerEvents = panelProgress >= 0.86 ? "auto" : "none";
      shell.style.transform = "none";

      return;
    }

    /*
      MOBILE:
      Acum și mobilul devine reversibil.
      Când panoul coboară înapoi, formularul/textul dispar.
    */
    const mobileLeftRawProgress = clamp(
      (panelProgress - 0.54) / 0.3,
      0,
      1
    );

    const mobileFormRawProgress = clamp(
      (panelProgress - 0.62) / 0.3,
      0,
      1
    );

    const mobileLeftReveal = smoothStep(mobileLeftRawProgress);
    const mobileFormReveal = smoothStep(mobileFormRawProgress);

    section.style.setProperty(
      "--bw-final-left-opacity",
      String(mobileLeftReveal)
    );

    section.style.setProperty(
      "--bw-final-left-x",
      `${(1 - mobileLeftReveal) * -24}px`
    );

    section.style.setProperty(
      "--bw-final-left-y",
      `${(1 - mobileLeftReveal) * 16}px`
    );

    section.style.setProperty(
      "--bw-final-left-blur",
      `${(1 - mobileLeftReveal) * 5}px`
    );

    section.style.setProperty(
      "--bw-final-form-opacity",
      String(mobileFormReveal)
    );

    section.style.setProperty(
      "--bw-final-form-x",
      `${(1 - mobileFormReveal) * 30}px`
    );

    section.style.setProperty(
      "--bw-final-form-y",
      `${(1 - mobileFormReveal) * 20}px`
    );

    section.style.setProperty(
      "--bw-final-form-blur",
      `${(1 - mobileFormReveal) * 6}px`
    );

    section.style.setProperty(
      "--bw-final-form-scale",
      String(0.982 + mobileFormReveal * 0.018)
    );

    contact.style.pointerEvents = panelProgress >= 0.86 ? "auto" : "none";

    const afterPanelPx = Math.max(0, rawPx - panelScrollDistance);

    const contactScrollProgress = clamp(
      afterPanelPx / Math.max(1, contactTravel),
      0,
      1
    );

    shell.style.transform = `translate3d(0, ${
      -contactScrollProgress * contactTravel
    }px, 0)`;
  };

  const handleScroll = () => {
    if (!animationFrame) {
      animationFrame = window.requestAnimationFrame(updateScene);
    }
  };

  updateScene();

  window.addEventListener("scroll", handleScroll, { passive: true });
  window.addEventListener("resize", handleScroll);

  return () => {
    window.cancelAnimationFrame(animationFrame);
    window.removeEventListener("scroll", handleScroll);
    window.removeEventListener("resize", handleScroll);
  };
}, []);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (submitState === "loading") return;

    const form = event.currentTarget;
    const formData = new FormData(form);

    const name = String(formData.get("name") || "").trim();
    const business = String(formData.get("business") || "").trim();
    const contact = String(formData.get("contact") || "").trim();
    const message = String(formData.get("message") || "").trim();

    setSubmitState("loading");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: WEB3FORMS_ACCESS_KEY,
          subject: `Neue Website-Anfrage – ${
            business || name || "Boran Webdesign"
          }`,
          from_name: "Boran Webdesign Website",
          name,
          unternehmen_branche: business,
          kontaktmoeglichkeit: contact,
          nachricht: message,
          quelle: "Final CTA Formular",
        }),
      });

      const result = await response.json();

      if (!result.success) {
        throw new Error("Web3Forms submission failed");
      }

      form.reset();
      setSubmitState("success");
    } catch (error) {
      console.error(error);
      setSubmitState("error");
    }
  };

  return (
    <section
      ref={sectionRef}
      id="contact"
      className="bw-final-reveal"
      aria-labelledby="final-reveal-heading"
    >
      <div className="bw-final-sticky">
        <div ref={bgRef} className="bw-final-bg" />
        <div className="bw-final-bg-overlay" />
        <div className="bw-final-grid" />

        <div ref={contactRef} className="bw-final-contact-layer">
          <div ref={shellRef} className="bw-final-shell">
            <div className="bw-final-left">
              <p className="bw-final-kicker">
                <span />
                DIREKTE ANFRAGE
              </p>

              <h2 id="final-reveal-heading">Projekt anfragen.</h2>

              <p className="bw-final-copy">
                Beschreiben Sie kurz, worum es geht. Ich melde mich persönlich
                zurück und sage Ihnen ehrlich, welche Richtung sinnvoll wäre.
              </p>

              <div className="bw-final-person">
                <div className="bw-final-avatar">
                  <span>EB</span>
                  <img
                    src="/emanuel-profile.webp"
                    alt="Emanuel Boran"
                    width="160"
                    height="160"
                    onError={(event) => {
                      event.currentTarget.style.display = "none";
                    }}
                  />
                </div>

                <div>
                  <strong>Emanuel Boran</strong>
                  <small>Direkter Ansprechpartner</small>
                </div>
              </div>

              <div className="bw-final-note">
                <div className="bw-final-note-icon">
                  <Mail size={18} strokeWidth={2.15} />
                </div>

                <p>
                  <strong>Persönlich beantwortet.</strong>
                  <span>Keine automatische Standardantwort.</span>
                </p>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="bw-final-form-card">
              <div className="bw-final-form-top">
                <span>PROJEKTANFRAGE</span>
                <h3>Erzählen Sie mir kurz, worum es geht.</h3>
              </div>

              {submitState === "success" ? (
                <div className="bw-final-success">
                  <div className="bw-final-success-icon">✓</div>

                  <h4>Anfrage gesendet.</h4>

                  <p>
                    Danke. Ihre Anfrage ist angekommen. Ich melde mich
                    persönlich bei Ihnen zurück.
                  </p>

                  <button
                    type="button"
                    onClick={() => setSubmitState("idle")}
                    className="bw-final-success-reset"
                  >
                    Weitere Anfrage senden
                  </button>
                </div>
              ) : (
                <div className="bw-final-form-grid">
                  {submitState === "error" && (
                    <div className="bw-final-error">
                      Die Anfrage konnte nicht gesendet werden. Bitte versuchen
                      Sie es erneut.
                    </div>
                  )}

                  <label className="bw-final-field" htmlFor="contact-name">
                    <span>Ihr Name</span>
                    <input
                      id="contact-name"
                      name="name"
                      type="text"
                      placeholder="Vor- und Nachname"
                      autoComplete="name"
                      required
                    />
                  </label>

                  <label className="bw-final-field" htmlFor="contact-business">
                    <span>Unternehmen / Branche</span>
                    <input
                      id="contact-business"
                      name="business"
                      type="text"
                      placeholder="z. B. Kosmetikstudio"
                      required
                    />
                  </label>

                  <label
                    className="bw-final-field bw-final-full"
                    htmlFor="contact-preferred"
                  >
                    <span>Wie darf ich Sie am besten kontaktieren?</span>
                    <input
                      id="contact-preferred"
                      name="contact"
                      type="text"
                      placeholder="E-Mail oder WhatsApp"
                      required
                    />
                  </label>

                  <label
                    className="bw-final-field bw-final-full"
                    htmlFor="contact-message"
                  >
                    <span>Was möchten Sie online verbessern?</span>
                    <textarea
                      id="contact-message"
                      name="message"
                      placeholder="z. B. mehr Anfragen, klarere Leistungen, hochwertiger wirken ..."
                      required
                    />
                  </label>

                  <button
                    type="submit"
                    disabled={submitState === "loading"}
                    className="bw-final-submit"
                  >
                    <span>
                      {submitState === "loading"
                        ? "Wird gesendet ..."
                        : "Vorschau anfragen"}
                    </span>
                    <ArrowUpRight size={21} strokeWidth={2.4} />
                  </button>

                  <p className="bw-final-privacy">
                    Mit dem Absenden stimmen Sie der Verarbeitung Ihrer Angaben
                    gemäß <a href="/datenschutz">Datenschutzerklärung</a> zu.
                  </p>
                </div>
              )}
            </form>
          </div>
        </div>

        <div ref={panelRef} className="bw-final-panel" aria-hidden="true">
          <div className="bw-final-panel-grid" />

          <div className="bw-final-panel-inner">
            <p className="bw-final-panel-kicker">
              <span />
              BEVOR WIR STARTEN
            </p>

            <h2 className="text-center font-serif text-[clamp(2.7rem,12vw,5.4rem)] leading-[0.92] tracking-[-0.05em] text-white md:text-left">
  <span className="block">Erst die</span>
  <span className="block">Vorschau.</span>
  <span className="block text-[#db3150]">Dann Ihre</span>
  <span className="block w-full text-center text-[#db3150] md:w-auto md:text-left">
    Entscheidung.
  </span>
</h2>

            <p className="bw-final-panel-copy">
              Sie sehen zuerst eine klare Richtung — unverbindlich und ohne
              Risiko.
            </p>
          </div>
        </div>
      </div>

      <style>{`
        .bw-final-reveal {
          --bw-final-left-opacity: 0;
          --bw-final-left-x: -42px;
          --bw-final-left-y: 8px;
          --bw-final-left-blur: 6px;

          --bw-final-form-opacity: 0;
          --bw-final-form-x: 48px;
          --bw-final-form-y: 10px;
          --bw-final-form-blur: 7px;
          --bw-final-form-scale: 0.982;
          --bw-final-panel-line-opacity: 1;

          position: relative;
          height: 280svh;
          background: #050506;
          color: #ffffff;
          isolation: isolate;
        }

        .bw-final-sticky {
          position: sticky;
          top: 0;
          height: 100svh;
          overflow: hidden;
          isolation: isolate;
          background: #050506;
        }

        .bw-final-bg {
          position: absolute;
          inset: 0;
          z-index: -6;
          background-image: url("/boran-hero-desktop.png");
          background-size: cover;
          background-position: 74% center;
          background-repeat: no-repeat;
          filter: saturate(1.12) contrast(1.1) brightness(0.94);
          transform: scale(1.012);
          will-change: transform;
        }

        .bw-final-bg-overlay {
          position: absolute;
          inset: 0;
          z-index: -5;
          pointer-events: none;
          background:
            linear-gradient(
              90deg,
              rgba(5, 5, 6, 0.78) 0%,
              rgba(5, 5, 6, 0.34) 48%,
              rgba(5, 5, 6, 0.56) 100%
            ),
            linear-gradient(
              180deg,
              rgba(5, 5, 6, 0.04) 0%,
              rgba(5, 5, 6, 0.32) 52%,
              rgba(5, 5, 6, 0.92) 100%
            ),
            radial-gradient(circle at 18% 48%, rgba(219, 49, 80, 0.18), transparent 34%),
            radial-gradient(circle at 82% 42%, rgba(68, 94, 255, 0.3), transparent 38%);
        }

        .bw-final-grid {
          position: absolute;
          inset: 0;
          z-index: -4;
          opacity: 0.08;
          pointer-events: none;
          background-image:
            linear-gradient(rgba(255, 255, 255, 0.06) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255, 255, 255, 0.06) 1px, transparent 1px);
          background-size: 72px 72px;
          mask-image: linear-gradient(
            to bottom,
            transparent,
            black 18%,
            black 82%,
            transparent
          );
        }

        .bw-final-contact-layer {
          position: absolute;
          inset: 0;
          z-index: 1;
          display: grid;
          align-items: center;
          overflow: hidden;
          padding: clamp(116px, 11svh, 148px) 20px clamp(72px, 8svh, 104px);
          pointer-events: none;
        }

        .bw-final-shell {
          display: grid;
          grid-template-columns: minmax(0, 0.86fr) minmax(430px, 1.14fr);
          gap: clamp(48px, 6vw, 96px);
          align-items: center;
          width: min(1180px, 100%);
          margin: 0 auto;
          will-change: transform;
        }

        .bw-final-left {
          max-width: 520px;
          opacity: var(--bw-final-left-opacity);
          transform: translate3d(
            var(--bw-final-left-x),
            var(--bw-final-left-y),
            0
          );
          filter: blur(var(--bw-final-left-blur));
          transition:
            opacity 820ms cubic-bezier(0.22, 1, 0.36, 1),
            transform 820ms cubic-bezier(0.22, 1, 0.36, 1),
            filter 820ms cubic-bezier(0.22, 1, 0.36, 1);
          will-change: transform, opacity, filter;
        }

        .bw-final-kicker,
        .bw-final-panel-kicker {
          display: inline-flex;
          align-items: center;
          gap: 12px;
          margin: 0;
          color: rgba(255, 255, 255, 0.62);
          font-size: 11px;
          font-weight: 850;
          letter-spacing: 0.2em;
          text-transform: uppercase;
        }

        .bw-final-kicker span,
        .bw-final-panel-kicker span {
          width: 9px;
          height: 9px;
          flex: 0 0 auto;
          border-radius: 50%;
          background: #db3150;
          box-shadow: 0 0 22px rgba(219, 49, 80, 0.78);
        }

        .bw-final-left h2 {
          max-width: 520px;
          margin: 24px 0 0;
          color: #fffdfb;
          font-family: "Iowan Old Style", "Baskerville", Georgia, serif;
          font-size: clamp(52px, 4.7vw, 76px);
          font-weight: 400;
          line-height: 0.9;
          letter-spacing: -0.075em;
        }

        .bw-final-copy {
          max-width: 490px;
          margin: 22px 0 0;
          color: rgba(255, 255, 255, 0.72);
          font-size: clamp(16px, 1.2vw, 19px);
          line-height: 1.48;
          letter-spacing: -0.02em;
        }

        .bw-final-person {
          display: flex;
          align-items: center;
          gap: 14px;
          margin-top: 26px;
        }

        .bw-final-avatar {
          position: relative;
          display: grid;
          width: 58px;
          height: 58px;
          flex: 0 0 auto;
          overflow: hidden;
          place-items: center;
          border: 1px solid rgba(255, 255, 255, 0.24);
          border-radius: 50%;
          background: #0b0b0d;
          box-shadow: 0 0 0 5px rgba(255, 255, 255, 0.045);
        }

        .bw-final-avatar img {
          position: absolute;
          inset: 0;
          z-index: 2;
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center top;
          filter: grayscale(1);
        }

        .bw-final-avatar span {
          color: rgba(255, 255, 255, 0.92);
          font-family: "Iowan Old Style", "Baskerville", Georgia, serif;
          font-size: 21px;
          letter-spacing: -0.07em;
        }

        .bw-final-person strong {
          display: block;
          color: #ffffff;
          font-size: 15px;
        }

        .bw-final-person small {
          display: block;
          margin-top: 3px;
          color: rgba(255, 255, 255, 0.6);
          font-size: 13px;
        }

        .bw-final-note {
          display: flex;
          align-items: center;
          gap: 13px;
          margin-top: 24px;
          padding-top: 22px;
          border-top: 1px solid rgba(255, 255, 255, 0.14);
        }

        .bw-final-note-icon {
          display: grid;
          width: 38px;
          height: 38px;
          flex: 0 0 auto;
          place-items: center;
          border-radius: 13px;
          background: rgba(255, 255, 255, 0.94);
          color: #0c0c0e;
        }

        .bw-final-note p {
          display: grid;
          gap: 3px;
          margin: 0;
        }

        .bw-final-note strong {
          color: rgba(255, 255, 255, 0.92);
          font-size: 14px;
        }

        .bw-final-note span {
          color: rgba(255, 255, 255, 0.56);
          font-size: 13px;
        }

        .bw-final-form-card {
          position: relative;
          overflow: hidden;
          padding: 26px;
          border: 1px solid rgba(255, 255, 255, 0.18);
          border-radius: 28px;
          background:
            linear-gradient(145deg, rgba(255, 255, 255, 0.11), transparent 32%),
            linear-gradient(315deg, rgba(219, 49, 80, 0.12), transparent 48%),
            rgba(8, 8, 12, 0.64);
          box-shadow:
            0 32px 90px rgba(0, 0, 0, 0.38),
            inset 0 1px 0 rgba(255, 255, 255, 0.08);
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          opacity: var(--bw-final-form-opacity);
          transform: translate3d(
              var(--bw-final-form-x),
              var(--bw-final-form-y),
              0
            )
            scale(var(--bw-final-form-scale));
          filter: blur(var(--bw-final-form-blur));
          transform-origin: center center;
          transition:
            opacity 860ms cubic-bezier(0.22, 1, 0.36, 1) 160ms,
            transform 860ms cubic-bezier(0.22, 1, 0.36, 1) 160ms,
            filter 860ms cubic-bezier(0.22, 1, 0.36, 1) 160ms;
          will-change: transform, opacity, filter;
        }

        .bw-final-form-card::before {
          content: "";
          position: absolute;
          top: -140px;
          right: -110px;
          width: 290px;
          height: 290px;
          border-radius: 50%;
          background: rgba(219, 49, 80, 0.17);
          filter: blur(86px);
          pointer-events: none;
        }

        .bw-final-form-top {
          position: relative;
          z-index: 1;
          margin-bottom: 18px;
        }

        .bw-final-form-top > span {
          color: #db3150;
          font-size: 10px;
          font-weight: 850;
          letter-spacing: 0.18em;
        }

        .bw-final-form-top h3 {
          max-width: 390px;
          margin: 9px 0 0;
          color: rgba(255, 255, 255, 0.97);
          font-size: clamp(22px, 1.75vw, 27px);
          font-weight: 700;
          line-height: 1.08;
          letter-spacing: -0.045em;
        }

        .bw-final-form-grid {
          position: relative;
          z-index: 1;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 12px;
        }

        .bw-final-field {
          display: grid;
          gap: 7px;
          color: rgba(255, 255, 255, 0.7);
          font-size: 11px;
          font-weight: 750;
        }

        .bw-final-full,
        .bw-final-submit,
        .bw-final-privacy {
          grid-column: 1 / -1;
        }

        .bw-final-form-grid input,
        .bw-final-form-grid textarea {
          width: 100%;
          box-sizing: border-box;
          border: 1px solid rgba(255, 255, 255, 0.15);
          border-radius: 14px;
          outline: none;
          background: rgba(0, 0, 0, 0.34);
          color: #ffffff;
          font: inherit;
          font-size: 14px;
          transition:
            border-color 180ms ease,
            background 180ms ease,
            box-shadow 180ms ease;
        }

        .bw-final-form-grid input {
          height: 46px;
          padding: 0 14px;
        }

        .bw-final-form-grid textarea {
          min-height: 92px;
          padding: 13px 14px;
          resize: vertical;
          line-height: 1.42;
        }

        .bw-final-form-grid input::placeholder,
        .bw-final-form-grid textarea::placeholder {
          color: rgba(255, 255, 255, 0.34);
        }

        .bw-final-form-grid input:focus,
        .bw-final-form-grid textarea:focus {
          border-color: rgba(219, 49, 80, 0.84);
          background: rgba(0, 0, 0, 0.46);
          box-shadow: 0 0 0 4px rgba(219, 49, 80, 0.12);
        }

        .bw-final-submit {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 12px;
          min-height: 50px;
          margin-top: 2px;
          border: 0;
          border-radius: 999px;
          background: #ffffff;
          color: #09090b;
          cursor: pointer;
          font-size: 14px;
          font-weight: 850;
          transition:
            transform 180ms ease,
            background 180ms ease,
            box-shadow 180ms ease,
            opacity 180ms ease;
        }

        .bw-final-submit:hover:not(:disabled) {
          transform: translateY(-2px);
          background: #f1f1f1;
          box-shadow: 0 12px 34px rgba(255, 255, 255, 0.12);
        }

        .bw-final-submit:disabled {
          cursor: wait;
          opacity: 0.72;
          transform: none;
        }

        .bw-final-submit svg {
          transition: transform 180ms ease;
        }

        .bw-final-submit:hover:not(:disabled) svg {
          transform: translate(2px, -2px);
        }

        .bw-final-privacy {
          margin: 0;
          color: rgba(255, 255, 255, 0.44);
          font-size: 10px;
          line-height: 1.5;
          text-align: center;
        }

        .bw-final-privacy a {
          color: rgba(255, 255, 255, 0.74);
          text-decoration: underline;
          text-underline-offset: 3px;
        }

        .bw-final-success {
          position: relative;
          z-index: 1;
          display: grid;
          justify-items: start;
          gap: 14px;
          padding: 24px 0 4px;
        }

        .bw-final-success-icon {
          display: grid;
          width: 48px;
          height: 48px;
          place-items: center;
          border-radius: 50%;
          border: 1px solid rgba(219, 49, 80, 0.48);
          background: rgba(219, 49, 80, 0.16);
          color: #ffffff;
          box-shadow:
            0 0 0 8px rgba(219, 49, 80, 0.08),
            0 0 34px rgba(219, 49, 80, 0.32);
          font-size: 22px;
          font-weight: 900;
        }

        .bw-final-success h4 {
          margin: 8px 0 0;
          color: #ffffff;
          font-size: 28px;
          line-height: 1.05;
          letter-spacing: -0.045em;
        }

        .bw-final-success p {
          max-width: 390px;
          margin: 0;
          color: rgba(255, 255, 255, 0.62);
          font-size: 15px;
          line-height: 1.55;
        }

        .bw-final-success-reset {
          margin-top: 8px;
          border: 1px solid rgba(255, 255, 255, 0.15);
          border-radius: 999px;
          background: rgba(255, 255, 255, 0.06);
          color: rgba(255, 255, 255, 0.86);
          padding: 12px 18px;
          cursor: pointer;
          font-size: 13px;
          font-weight: 800;
          transition:
            background 180ms ease,
            color 180ms ease,
            transform 180ms ease;
        }

        .bw-final-success-reset:hover {
          transform: translateY(-1px);
          background: #ffffff;
          color: #09090b;
        }

        .bw-final-error {
          grid-column: 1 / -1;
          border: 1px solid rgba(219, 49, 80, 0.42);
          border-radius: 16px;
          background: rgba(219, 49, 80, 0.1);
          color: rgba(255, 255, 255, 0.82);
          padding: 12px 14px;
          font-size: 13px;
          line-height: 1.45;
        }

        .bw-final-panel {
          position: absolute;
          inset: 0;
          z-index: 10;
          display: grid;
          place-items: center;
          text-align: center;
          background:
            radial-gradient(circle at 18% 72%, rgba(219, 49, 80, 0.17), transparent 30%),
            radial-gradient(circle at 84% 38%, rgba(76, 94, 255, 0.11), transparent 32%),
            linear-gradient(180deg, #010102 0%, #030304 100%);
          box-shadow:
            0 58px 145px rgba(0, 0, 0, 1),
            inset 0 -1px 0 rgba(255, 255, 255, 0.13);
          will-change: transform;
          pointer-events: none;
        }

        .bw-final-panel::before {
          content: "VORSCHAU";
          position: absolute;
          right: -0.08em;
          bottom: -0.08em;
          z-index: -1;
          color: rgba(255, 255, 255, 0.04);
          font-family: "Iowan Old Style", "Baskerville", Georgia, serif;
          font-size: clamp(120px, 22vw, 340px);
          line-height: 0.8;
          letter-spacing: -0.12em;
          pointer-events: none;
        }

        .bw-final-panel::after {
          content: "";
          position: absolute;
          right: 0;
          bottom: 0;
          left: 0;
          height: 8px;
          background:
            linear-gradient(
              90deg,
              transparent 0%,
              rgba(219, 49, 80, 1) 34%,
              rgba(118, 145, 255, 0.9) 58%,
              transparent 100%
            );
          box-shadow:
            0 0 42px rgba(219, 49, 80, 0.78),
            0 0 72px rgba(80, 105, 255, 0.58);
            opacity: var(--bw-final-panel-line-opacity);
transition: opacity 120ms linear;
        }

        .bw-final-panel-grid {
          position: absolute;
          inset: 0;
          z-index: -1;
          opacity: 0.14;
          pointer-events: none;
          background-image:
            linear-gradient(rgba(255, 255, 255, 0.04) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255, 255, 255, 0.04) 1px, transparent 1px);
          background-size: 72px 72px;
          mask-image: linear-gradient(
            to bottom,
            transparent,
            black 18%,
            black 82%,
            transparent
          );
        }

        .bw-final-panel-inner {
          display: grid;
          justify-items: center;
          width: min(1120px, calc(100% - 40px));
          margin: 0 auto;
          text-align: center;
        }

        .bw-final-panel h2 {
          max-width: 8.8ch;
          margin: 28px auto 0;
          color: #fffdfb;
          font-family: "Iowan Old Style", "Baskerville", Georgia, serif;
          font-size: clamp(72px, 8.6vw, 136px);
          font-weight: 400;
          line-height: 0.84;
          letter-spacing: -0.086em;
        }

        .bw-final-panel h2 strong {
          display: block;
          color: #db3150;
          font: inherit;
          text-shadow: 0 0 34px rgba(219, 49, 80, 0.18);
        }

        .bw-final-panel-copy {
          max-width: 520px;
          margin: 28px auto 0;
          color: rgba(255, 255, 255, 0.56);
          font-size: clamp(17px, 1.45vw, 21px);
          line-height: 1.5;
          letter-spacing: -0.02em;
        }
          @media (min-width: 761px) {
  .bw-final-left,
  .bw-final-form-card {
    transition: none;
  }
}

        @media (max-width: 760px) {
          .bw-final-reveal {
            --bw-final-left-x: -24px;
            --bw-final-left-y: 16px;
            --bw-final-left-blur: 5px;

            --bw-final-form-x: 30px;
            --bw-final-form-y: 20px;
            --bw-final-form-blur: 6px;
            --bw-final-form-scale: 0.982;
          }

          .bw-final-bg {
            background-image: url("/boran-signal-hero.png");
            background-position: center center;
            background-size: cover;
            filter: saturate(1.04) contrast(1.12) brightness(0.9);
          }

          .bw-final-bg-overlay {
            background:
              linear-gradient(
                180deg,
                rgba(5, 5, 6, 0.14) 0%,
                rgba(5, 5, 6, 0.44) 42%,
                rgba(5, 5, 6, 0.94) 100%
              ),
              linear-gradient(
                90deg,
                rgba(5, 5, 6, 0.62) 0%,
                rgba(5, 5, 6, 0.25) 50%,
                rgba(5, 5, 6, 0.66) 100%
              ),
              radial-gradient(circle at 18% 45%, rgba(219, 49, 80, 0.17), transparent 35%),
              radial-gradient(circle at 88% 54%, rgba(79, 96, 255, 0.24), transparent 36%);
          }

          .bw-final-contact-layer {
            align-items: start;
            padding: 104px 18px 92px;
          }

          .bw-final-shell {
            grid-template-columns: 1fr;
            gap: 28px;
            width: min(100%, 650px);
            margin: 0 auto;
          }

          .bw-final-left {
            max-width: 100%;
          }

          .bw-final-left h2 {
            margin-top: 19px;
            font-size: 42px;
          }

          .bw-final-copy {
            margin-top: 16px;
            font-size: 15.5px;
            line-height: 1.45;
          }

          .bw-final-person {
            margin-top: 20px;
          }

          .bw-final-note {
            margin-top: 20px;
            padding-top: 16px;
          }

          .bw-final-form-card {
            padding: 21px 16px 20px;
            border-radius: 24px;
          }

          .bw-final-form-top {
            margin-bottom: 15px;
          }

          .bw-final-form-top h3 {
            font-size: 21px;
          }

          .bw-final-form-grid {
            grid-template-columns: 1fr;
            gap: 12px;
          }

          .bw-final-form-grid input {
            height: 49px;
            font-size: 14px;
          }

          .bw-final-form-grid textarea {
            min-height: 108px;
            font-size: 14px;
          }

          .bw-final-submit {
            min-height: 52px;
            font-size: 14px;
          }

          .bw-final-privacy {
            padding-bottom: 12px;
          }

          .bw-final-panel-kicker {
            font-size: 10px;
            letter-spacing: 0.15em;
          }

          .bw-final-panel h2 {
            max-width: 8.4ch;
            margin-top: 24px;
            font-size: clamp(48px, 14.2vw, 62px);
            line-height: 0.88;
          }

          .bw-final-panel-copy {
            max-width: 310px;
            margin-top: 22px;
            font-size: 15.5px;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .bw-final-left,
          .bw-final-form-card {
            opacity: 1 !important;
            transform: none !important;
            filter: none !important;
          }

          .bw-final-panel,
          .bw-final-bg {
            transform: none !important;
          }
        }
      `}</style>
    </section>
  );
}