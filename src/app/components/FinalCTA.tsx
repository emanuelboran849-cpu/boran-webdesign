"use client";

import type { FormEvent } from "react";
import { ArrowUpRight, Mail } from "lucide-react";

const CONTACT_EMAIL = "DEINE-EMAIL@DEINEDOMAIN.DE";

export default function FinalCTA() {
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);

    const name = String(formData.get("name") || "").trim();
    const business = String(formData.get("business") || "").trim();
    const contact = String(formData.get("contact") || "").trim();
    const message = String(formData.get("message") || "").trim();

    const subject = `Website-Anfrage – ${business || name || "Neue Anfrage"}`;

    const body = [
      "Hallo Emanuel,",
      "",
      "ich interessiere mich für einen professionellen Website-Auftritt.",
      "",
      `Name: ${name}`,
      `Unternehmen / Branche: ${business}`,
      `Bevorzugter Kontakt: ${contact}`,
      "",
      "Was ich online verbessern möchte:",
      message,
      "",
      "Viele Grüße",
      name,
    ].join("\n");

    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
  };

  return (
    <>
      <section id="contact" className="bw-final-cta">
        <div className="bw-final-background" />
        <div className="bw-final-grid" />
        <div className="bw-final-glow bw-final-glow-red" />
        <div className="bw-final-glow bw-final-glow-blue" />

        <div className="bw-final-shell">
          <div className="bw-final-intro">
            <div className="bw-final-kicker">
              <span className="bw-final-kicker-dot" />
              <span>DIREKTER ANSPRECHPARTNER</span>
            </div>

            <div className="bw-final-person">
              <div className="bw-final-avatar">
                <span className="bw-final-avatar-fallback">EB</span>

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

              <div className="bw-final-person-info">
                <strong>Emanuel Boran</strong>
                <span>Gründer · Boran Webdesign</span>
              </div>
            </div>

            <h2>
              Was offline überzeugt, sollte online genauso wirken.
            </h2>

            <p className="bw-final-copy">
              Schreiben Sie mir kurz, wo Ihr Unternehmen online noch nicht das
              zeigt, was es kann. Sie sprechen direkt mit mir — persönlich,
              klar und unverbindlich.
            </p>

            <div className="bw-final-direct-note">
              <div className="bw-final-direct-icon">
                <Mail size={18} strokeWidth={2.1} />
              </div>

              <p>
                <strong>Persönliche Anfrage per E-Mail.</strong>
                <span>Keine automatische Standardantwort.</span>
              </p>
            </div>
          </div>

          <div className="bw-final-form-card">
            <div className="bw-final-form-top">
              <span>PROJEKTANFRAGE</span>
              <h3>Erzählen Sie mir kurz von Ihrem Unternehmen.</h3>
            </div>

            <form onSubmit={handleSubmit} className="bw-final-form">
              <label htmlFor="contact-name">
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

              <label htmlFor="contact-business">
                <span>Unternehmen / Branche</span>
                <input
                  id="contact-business"
                  name="business"
                  type="text"
                  placeholder="z. B. Beauty Studio, Gastronomie, Handwerk"
                  required
                />
              </label>

              <label htmlFor="contact-preferred">
  <span>Wie darf ich Ihnnen am besten kontaktieren?</span>
  <input
    id="contact-preferred"
    name="contact"
    type="text"
    placeholder="E-Mail oder WhatsApp"
    required
  />
</label>

              <label htmlFor="contact-message">
                <span>Was möchten Sie online verbessern?</span>
                <textarea
                  id="contact-message"
                  name="message"
                  placeholder="Zum Beispiel: mehr Anfragen, hochwertiger wirken, Leistungen klarer zeigen ..."
                  required
                />
              </label>

              <button type="submit">
                <span>Senden</span>
                <ArrowUpRight size={21} strokeWidth={2.4} />
              </button>

              <p className="bw-final-privacy">
                Mit dem Absenden stimmen Sie der Verarbeitung Ihrer Angaben
                gemäß <a href="/datenschutz">Datenschutzerklärung</a> zu.
              </p>
            </form>
          </div>
        </div>
      </section>

      <style>{`
        .bw-final-cta {
          position: relative;
          isolation: isolate;
          overflow: hidden;
          padding: 170px 20px 142px;
          background: #050506;
          color: #ffffff;
        }

        .bw-final-background {
          position: absolute;
          inset: 0;
          z-index: -5;
          background:
            linear-gradient(
              90deg,
              rgba(3, 3, 5, 0.94) 0%,
              rgba(3, 3, 5, 0.84) 40%,
              rgba(3, 3, 5, 0.64) 100%
            ),
            linear-gradient(
              180deg,
              rgba(3, 3, 5, 0.32) 0%,
              rgba(3, 3, 5, 0.82) 100%
            ),
            url("/boran-signal-hero.webp");
          background-position: center;
          background-size: cover;
          filter: saturate(0.88) contrast(1.08);
          transform: scale(1.03);
        }

        .bw-final-cta::before {
          content: "";
          position: absolute;
          inset: 0;
          z-index: -4;
          background:
            radial-gradient(circle at 14% 22%, rgba(220, 40, 94, 0.19), transparent 28%),
            radial-gradient(circle at 88% 66%, rgba(62, 75, 255, 0.15), transparent 32%);
          pointer-events: none;
        }

        .bw-final-cta::after {
          content: "";
          position: absolute;
          top: 0;
          left: 50%;
          width: min(1240px, calc(100% - 40px));
          height: 1px;
          transform: translateX(-50%);
          background: linear-gradient(
            90deg,
            transparent,
            rgba(255, 255, 255, 0.16),
            transparent
          );
        }

        .bw-final-grid {
          position: absolute;
          inset: 0;
          z-index: -3;
          opacity: 0.16;
          pointer-events: none;
          background-image:
            linear-gradient(rgba(255, 255, 255, 0.055) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255, 255, 255, 0.055) 1px, transparent 1px);
          background-size: 70px 70px;
          mask-image: linear-gradient(
            to bottom,
            transparent,
            black 24%,
            black 76%,
            transparent
          );
        }

        .bw-final-glow {
          position: absolute;
          z-index: -2;
          border-radius: 50%;
          filter: blur(125px);
          pointer-events: none;
        }

        .bw-final-glow-red {
          width: 380px;
          height: 380px;
          left: -210px;
          bottom: 2%;
          background: rgba(214, 43, 91, 0.18);
        }

        .bw-final-glow-blue {
          width: 420px;
          height: 420px;
          right: -210px;
          top: 4%;
          background: rgba(59, 77, 255, 0.17);
        }

        .bw-final-shell {
          display: grid;
          grid-template-columns: minmax(0, 0.92fr) minmax(450px, 1.08fr);
          gap: clamp(52px, 8vw, 118px);
          align-items: center;
          width: min(1240px, 100%);
          margin: 0 auto;
        }

        .bw-final-intro {
          max-width: 565px;
        }

        .bw-final-kicker {
          display: flex;
          align-items: center;
          gap: 11px;
          color: rgba(255, 255, 255, 0.62);
          font-size: 11px;
          font-weight: 850;
          letter-spacing: 0.19em;
        }

        .bw-final-kicker-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: #dc3766;
          box-shadow: 0 0 20px rgba(220, 55, 102, 0.88);
        }

        .bw-final-person {
          display: flex;
          align-items: center;
          gap: 15px;
          margin-top: 26px;
        }

        .bw-final-avatar {
  position: relative;
  width: 76px;
  height: 76px;
  flex: 0 0 auto;
  overflow: hidden;
  border: 1px solid rgba(255, 255, 255, 0.28);
  border-radius: 50%;
  background:
    radial-gradient(circle at 28% 24%, rgba(255, 255, 255, 0.22), transparent 33%),
    linear-gradient(135deg, #19191d, #08080a);
  box-shadow:
    0 0 0 5px rgba(255, 255, 255, 0.055),
    0 16px 42px rgba(0, 0, 0, 0.32);
}

        .bw-final-avatar::after {
          content: "";
          position: absolute;
          inset: 4px;
          border: 1px solid rgba(255, 255, 255, 0.12);
          border-radius: 50%;
          pointer-events: none;
        }

        .bw-final-avatar img {
  position: absolute;
  inset: 0;
  z-index: 2;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center top;
}

        .bw-final-avatar-fallback {
          color: rgba(255, 255, 255, 0.93);
          font-family: "Iowan Old Style", "Baskerville", Georgia, serif;
          font-size: 24px;
          letter-spacing: -0.07em;
        }

        .bw-final-person-info {
          display: flex;
          flex-direction: column;
          gap: 4px;
        }

        .bw-final-person-info strong {
          color: #ffffff;
          font-size: 16px;
          letter-spacing: -0.02em;
        }

        .bw-final-person-info span {
          color: rgba(255, 255, 255, 0.52);
          font-size: 13px;
        }

        .bw-final-intro h2 {
          max-width: 620px;
          margin: 34px 0 0;
          font-family: "Iowan Old Style", "Baskerville", Georgia, serif;
          font-size: clamp(55px, 5.35vw, 84px);
          font-weight: 400;
          line-height: 0.93;
          letter-spacing: -0.069em;
          text-wrap: balance;
        }

        .bw-final-copy {
          max-width: 535px;
          margin: 30px 0 0;
          color: rgba(255, 255, 255, 0.65);
          font-size: clamp(18px, 1.45vw, 21px);
          line-height: 1.52;
          letter-spacing: -0.025em;
        }

        .bw-final-direct-note {
          display: flex;
          align-items: center;
          gap: 14px;
          margin-top: 39px;
          padding-top: 25px;
          border-top: 1px solid rgba(255, 255, 255, 0.12);
        }

        .bw-final-direct-icon {
          display: grid;
          width: 43px;
          height: 43px;
          flex: 0 0 auto;
          place-items: center;
          border-radius: 14px;
          background: #ffffff;
          color: #0c0c0e;
        }

        .bw-final-direct-note p {
          display: flex;
          flex-direction: column;
          gap: 4px;
          margin: 0;
        }

        .bw-final-direct-note strong {
          color: rgba(255, 255, 255, 0.92);
          font-size: 14px;
        }

        .bw-final-direct-note span {
          color: rgba(255, 255, 255, 0.46);
          font-size: 13px;
        }

        .bw-final-form-card {
          position: relative;
          overflow: hidden;
          padding: 35px;
          border: 1px solid rgba(255, 255, 255, 0.15);
          border-radius: 30px;
          background:
            linear-gradient(145deg, rgba(255, 255, 255, 0.10), transparent 31%),
            linear-gradient(315deg, rgba(255, 255, 255, 0.025), transparent 48%),
            rgba(10, 10, 13, 0.78);
          box-shadow:
            0 40px 110px rgba(0, 0, 0, 0.42),
            inset 0 1px 0 rgba(255, 255, 255, 0.08);
          backdrop-filter: blur(20px);
        }

        .bw-final-form-card::before {
          content: "";
          position: absolute;
          top: -175px;
          right: -135px;
          width: 325px;
          height: 325px;
          border-radius: 50%;
          background: rgba(218, 50, 100, 0.16);
          filter: blur(90px);
          pointer-events: none;
        }

        .bw-final-form-top {
          position: relative;
          z-index: 1;
          margin-bottom: 30px;
        }

        .bw-final-form-top > span {
          color: #df547c;
          font-size: 11px;
          font-weight: 850;
          letter-spacing: 0.18em;
        }

        .bw-final-form-top h3 {
          max-width: 420px;
          margin: 12px 0 0;
          color: rgba(255, 255, 255, 0.95);
          font-size: clamp(24px, 2.1vw, 30px);
          font-weight: 650;
          line-height: 1.1;
          letter-spacing: -0.045em;
        }

        .bw-final-form {
          position: relative;
          z-index: 1;
          display: grid;
          gap: 17px;
        }

        .bw-final-form label {
          display: grid;
          gap: 9px;
        }

        .bw-final-form label > span {
          color: rgba(255, 255, 255, 0.61);
          font-size: 12px;
          font-weight: 750;
          letter-spacing: 0.02em;
        }

        .bw-final-form input,
        .bw-final-form textarea {
          width: 100%;
          box-sizing: border-box;
          border: 1px solid rgba(255, 255, 255, 0.14);
          border-radius: 15px;
          outline: none;
          background: rgba(0, 0, 0, 0.27);
          color: #ffffff;
          font: inherit;
          font-size: 15px;
          transition:
            border-color 180ms ease,
            background 180ms ease,
            box-shadow 180ms ease;
        }

        .bw-final-form input {
          height: 56px;
          padding: 0 17px;
        }

        .bw-final-form textarea {
          min-height: 130px;
          padding: 16px 17px;
          resize: vertical;
          line-height: 1.45;
        }

        .bw-final-form input::placeholder,
        .bw-final-form textarea::placeholder {
          color: rgba(255, 255, 255, 0.31);
        }

        .bw-final-form input:focus,
        .bw-final-form textarea:focus {
          border-color: rgba(226, 75, 123, 0.9);
          background: rgba(0, 0, 0, 0.42);
          box-shadow: 0 0 0 4px rgba(221, 54, 106, 0.13);
        }

        .bw-final-form button {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 12px;
          min-height: 59px;
          margin-top: 5px;
          border: 0;
          border-radius: 999px;
          background: #ffffff;
          color: #09090b;
          cursor: pointer;
          font-size: 15px;
          font-weight: 850;
          transition:
            transform 180ms ease,
            background 180ms ease,
            box-shadow 180ms ease;
        }

        .bw-final-form button:hover {
          transform: translateY(-2px);
          background: #f1f1f1;
          box-shadow: 0 12px 34px rgba(255, 255, 255, 0.14);
        }

        .bw-final-form button svg {
          transition: transform 180ms ease;
        }

        .bw-final-form button:hover svg {
          transform: translate(2px, -2px);
        }

        .bw-final-privacy {
          margin: 2px 2px 0;
          color: rgba(255, 255, 255, 0.39);
          font-size: 11px;
          line-height: 1.5;
          text-align: center;
        }

        .bw-final-privacy a {
          color: rgba(255, 255, 255, 0.67);
          text-decoration: underline;
          text-underline-offset: 3px;
        }

        .bw-final-privacy a:hover {
          color: #ffffff;
        }

        @media (max-width: 960px) {
          .bw-final-cta {
            padding: 140px 20px 112px;
          }

          .bw-final-shell {
            grid-template-columns: 1fr;
            gap: 64px;
            max-width: 650px;
          }

          .bw-final-intro {
            max-width: 100%;
          }

          .bw-final-copy {
            max-width: 600px;
          }

          .bw-final-form-card {
            padding: 31px;
          }

          .bw-final-background {
            background-position: 68% center;
          }
        }

        @media (max-width: 560px) {
          .bw-final-cta {
            padding: 122px 20px 96px;
          }

          .bw-final-background {
            background:
              linear-gradient(
                180deg,
                rgba(3, 3, 5, 0.82) 0%,
                rgba(3, 3, 5, 0.92) 48%,
                rgba(3, 3, 5, 0.98) 100%
              ),
              url("/boran-signal-hero.webp");
            background-position: 67% center;
            background-size: cover;
          }

          .bw-final-grid {
            background-size: 52px 52px;
          }

          .bw-final-intro h2 {
            margin-top: 29px;
            font-size: 53px;
            line-height: 0.95;
          }

          .bw-final-copy {
            margin-top: 25px;
            font-size: 18px;
            line-height: 1.48;
          }

          .bw-final-person {
            margin-top: 23px;
          }

          .bw-final-avatar {
            width: 68px;
            height: 68px;
          }

          .bw-final-direct-note {
            align-items: flex-start;
            margin-top: 32px;
            padding-top: 22px;
          }

          .bw-final-form-card {
            padding: 25px 20px 22px;
            border-radius: 25px;
          }

          .bw-final-form-top {
            margin-bottom: 25px;
          }

          .bw-final-form-top h3 {
            font-size: 25px;
          }

          .bw-final-form {
            gap: 15px;
          }

          .bw-final-form input {
            height: 54px;
          }

          .bw-final-form textarea {
            min-height: 122px;
          }

          .bw-final-form button {
            min-height: 57px;
            font-size: 14px;
          }
        }

        @media (max-width: 390px) {
          .bw-final-intro h2 {
            font-size: 47px;
          }

          .bw-final-kicker {
            font-size: 10px;
            letter-spacing: 0.14em;
          }

          .bw-final-person-info strong {
            font-size: 15px;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .bw-final-form input,
          .bw-final-form textarea,
          .bw-final-form button,
          .bw-final-form button svg {
            transition: none;
          }
        }
      `}</style>
    </>
  );
}