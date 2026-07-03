"use client";

import {
  ArrowUpRight,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
} from "lucide-react";

const CONTACT = {
  phoneDisplay: "+49 155 61950565",
  phoneHref: "+4915561950565",

  email: "kontakt@boran-webdesign.de",

  whatsappDisplay: "+49 155 61950565",
  whatsappNumber: "4915561950565",

  addressLine1: "Am Eckrain 15/1",
  addressLine2: "78554 Aldingen, Deutschland",
};

const CURRENT_YEAR = new Date().getFullYear();

export default function Footer() {
  const mapsAddress = `${CONTACT.addressLine1}, ${CONTACT.addressLine2}`;

  const openLeadForm = () => {
    if (typeof window !== "undefined") {
      window.dispatchEvent(new Event("boran:open-lead-form"));
    }
  };

  return (
    <>
      <footer className="bw-footer">
        <div className="bw-footer-shell">
          <div className="bw-footer-topbar">
            <span>BORAN WEBDESIGN · DEUTSCHLAND</span>
          </div>

          <div className="bw-footer-main">
            <div className="bw-footer-left">
              <div className="bw-footer-brand-row">
                <div className="bw-footer-logo-box">
                  <img
                    src="/bw-logo.png"
                    alt="Boran Webdesign Logo"
                    className="bw-footer-logo"
                  />
                </div>

                <div className="bw-footer-brand-meta">
                  <strong>BORAN WEBDESIGN</strong>
                  <span>PREMIUM DIGITAL PRESENCE</span>
                </div>
              </div>

              <h2 className="bw-footer-heading">
                Websites für lokale Unternehmen, die nicht nur sichtbar sein
                wollen, sondern den richtigen Eindruck hinterlassen.
              </h2>

              <p className="bw-footer-subtext">
                Persönlich geplant. Präzise gestaltet. Klar umgesetzt.
              </p>

              <button
                type="button"
                onClick={openLeadForm}
                className="bw-footer-cta"
              >
                <span>Projekt anfragen</span>
                <ArrowUpRight size={18} strokeWidth={2.2} />
              </button>
            </div>

            <div className="bw-footer-right">
              <div className="bw-footer-contact-card">
                <div className="bw-footer-contact-head">
                  <small>KONTAKT</small>
                  <h3>Direkt, persönlich und unkompliziert.</h3>
                </div>

                <div className="bw-footer-contact-grid">
                  <a
                    href={`tel:${CONTACT.phoneHref}`}
                    className="bw-footer-contact-item"
                  >
                    <div className="bw-footer-contact-icon">
                      <Phone size={18} strokeWidth={1.9} />
                    </div>

                    <div className="bw-footer-contact-copy">
                      <small>Telefon</small>
                      <strong>{CONTACT.phoneDisplay}</strong>
                    </div>
                  </a>

                  <a
                    href={`mailto:${CONTACT.email}`}
                    className="bw-footer-contact-item"
                  >
                    <div className="bw-footer-contact-icon">
                      <Mail size={18} strokeWidth={1.9} />
                    </div>

                    <div className="bw-footer-contact-copy">
                      <small>E-Mail</small>
                      <strong>{CONTACT.email}</strong>
                    </div>
                  </a>

                  <a
                    href={`https://wa.me/${CONTACT.whatsappNumber}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bw-footer-contact-item"
                  >
                    <div className="bw-footer-contact-icon">
                      <MessageCircle size={18} strokeWidth={1.9} />
                    </div>

                    <div className="bw-footer-contact-copy">
                      <small>WhatsApp</small>
                      <strong>{CONTACT.whatsappDisplay}</strong>
                    </div>
                  </a>

                  <a
                    href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                      mapsAddress,
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bw-footer-contact-item bw-footer-contact-item-location"
                  >
                    <div className="bw-footer-contact-icon">
                      <MapPin size={18} strokeWidth={1.9} />
                    </div>

                    <div className="bw-footer-contact-copy">
                      <small>Standort</small>
                      <strong>
                        {CONTACT.addressLine1}
                        <br />
                        {CONTACT.addressLine2}
                      </strong>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="bw-footer-divider" />

          <div className="bw-footer-bottom">
            <p>© {CURRENT_YEAR} Boran Webdesign. Alle Rechte vorbehalten.</p>

            <div className="bw-footer-legal">
              <a href="/impressum">Impressum</a>
              <span />
              <a href="/datenschutz">Datenschutz</a>
            </div>
          </div>
        </div>
      </footer>

      <style>{`
        .bw-footer {
          position: relative;
          overflow: hidden;
          padding: 34px 20px 28px;
          background: #000000;
          color: #ffffff;
        }

        .bw-footer-shell {
          width: min(1240px, 100%);
          margin: 0 auto;
        }

        .bw-footer-topbar {
          display: flex;
          align-items: center;
          justify-content: flex-start;
          padding-bottom: 22px;
          border-bottom: 1px solid rgba(255, 255, 255, 0.12);
        }

        .bw-footer-topbar span {
          color: rgba(255, 255, 255, 0.34);
          font-size: 10px;
          font-weight: 800;
          letter-spacing: 0.18em;
          text-transform: uppercase;
        }

        .bw-footer-main {
          display: grid;
          grid-template-columns: minmax(0, 1.02fr) minmax(360px, 0.98fr);
          gap: clamp(44px, 7vw, 96px);
          padding: clamp(42px, 6vw, 70px) 0;
          align-items: start;
        }

        .bw-footer-left {
          max-width: 620px;
        }

        .bw-footer-brand-row {
          display: flex;
          align-items: center;
          gap: 22px;
        }

        .bw-footer-logo-box {
          display: grid;
          place-items: center;
          width: 110px;
          height: 110px;
          flex: 0 0 auto;
          border-radius: 28px;
          border: 1px solid rgba(255, 255, 255, 0.1);
          background: #050505;
          box-shadow:
            inset 0 1px 0 rgba(255, 255, 255, 0.06),
            0 16px 42px rgba(0, 0, 0, 0.34);
          overflow: hidden;
        }

        .bw-footer-logo {
          display: block;
          width: 78%;
          height: 78%;
          object-fit: contain;
        }

        .bw-footer-brand-meta {
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        .bw-footer-brand-meta strong {
          color: #ffffff;
          font-family: "Iowan Old Style", "Baskerville", Georgia, serif;
          font-size: clamp(24px, 2.5vw, 38px);
          font-weight: 500;
          letter-spacing: 0.06em;
          line-height: 0.95;
        }

        .bw-footer-brand-meta span {
          color: rgba(255, 255, 255, 0.4);
          font-size: 10px;
          font-weight: 800;
          letter-spacing: 0.22em;
          text-transform: uppercase;
        }

        .bw-footer-heading {
          max-width: 620px;
          margin: 38px 0 0;
          color: rgba(255, 255, 255, 0.9);
          font-family: "Iowan Old Style", "Baskerville", Georgia, serif;
          font-size: clamp(34px, 4vw, 62px);
          font-weight: 400;
          line-height: 1.01;
          letter-spacing: -0.055em;
        }

        .bw-footer-subtext {
          margin: 22px 0 0;
          color: rgba(255, 255, 255, 0.42);
          font-size: 15px;
          line-height: 1.6;
        }

        .bw-footer-cta {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          min-height: 50px;
          margin-top: 30px;
          padding: 0 22px;
          border: 1px solid rgba(255, 255, 255, 0.16);
          border-radius: 999px;
          background: #0a0a0a;
          color: #ffffff;
          font-size: 13px;
          font-weight: 850;
          letter-spacing: 0.05em;
          text-transform: uppercase;
          cursor: pointer;
          transition:
            transform 180ms ease,
            border-color 180ms ease,
            background 180ms ease;
        }

        .bw-footer-cta:hover {
          transform: translateY(-2px);
          border-color: rgba(255, 255, 255, 0.3);
          background: #111111;
        }

        .bw-footer-right {
          width: 100%;
        }

        .bw-footer-contact-card {
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 34px;
          background: #050505;
          padding: 34px;
          box-shadow:
            inset 0 1px 0 rgba(255, 255, 255, 0.04),
            0 24px 60px rgba(0, 0, 0, 0.28);
        }

        .bw-footer-contact-head {
          margin-bottom: 24px;
        }

        .bw-footer-contact-head small {
          display: inline-block;
          color: #db3150;
          font-size: 11px;
          font-weight: 850;
          letter-spacing: 0.18em;
          text-transform: uppercase;
        }

        .bw-footer-contact-head h3 {
          margin: 14px 0 0;
          color: rgba(255, 255, 255, 0.94);
          font-size: clamp(28px, 3vw, 46px);
          font-weight: 700;
          line-height: 0.98;
          letter-spacing: -0.05em;
        }

        .bw-footer-contact-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 14px;
        }

        .bw-footer-contact-item {
          display: flex;
          align-items: flex-start;
          gap: 14px;
          min-height: 96px;
          padding: 18px 18px;
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 22px;
          background: #080808;
          color: rgba(255, 255, 255, 0.76);
          text-decoration: none;
          transition:
            transform 180ms ease,
            border-color 180ms ease,
            background 180ms ease;
        }

        .bw-footer-contact-item:hover {
          transform: translateY(-2px);
          border-color: rgba(255, 255, 255, 0.16);
          background: #0d0d0d;
        }

        .bw-footer-contact-item-location {
          grid-column: 1 / -1;
        }

        .bw-footer-contact-icon {
          display: grid;
          place-items: center;
          width: 44px;
          height: 44px;
          flex: 0 0 auto;
          border-radius: 14px;
          border: 1px solid rgba(255, 255, 255, 0.08);
          background: #0d0d0d;
          color: rgba(255, 255, 255, 0.74);
        }

        .bw-footer-contact-copy {
          display: flex;
          flex-direction: column;
          gap: 6px;
          min-width: 0;
        }

        .bw-footer-contact-copy small {
          color: rgba(255, 255, 255, 0.34);
          font-size: 11px;
          font-weight: 700;
        }

        .bw-footer-contact-copy strong {
          color: rgba(255, 255, 255, 0.88);
          font-size: 14px;
          font-weight: 650;
          line-height: 1.5;
          overflow-wrap: anywhere;
        }

        .bw-footer-divider {
          width: 100%;
          height: 1px;
          background: rgba(255, 255, 255, 0.12);
        }

        .bw-footer-bottom {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 16px;
          padding-top: 22px;
        }

        .bw-footer-bottom p {
          margin: 0;
          color: rgba(255, 255, 255, 0.3);
          font-size: 12px;
          line-height: 1.5;
        }

        .bw-footer-legal {
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .bw-footer-legal a {
          color: rgba(255, 255, 255, 0.56);
          font-size: 12px;
          text-decoration: none;
          transition: color 180ms ease;
        }

        .bw-footer-legal a:hover {
          color: #ffffff;
        }

        .bw-footer-legal span {
          width: 3px;
          height: 3px;
          border-radius: 999px;
          background: rgba(255, 255, 255, 0.24);
        }

        @media (max-width: 980px) {
          .bw-footer-main {
            grid-template-columns: 1fr;
            gap: 42px;
          }

          .bw-footer-left {
            max-width: 100%;
          }
        }

        @media (max-width: 640px) {
          .bw-footer {
            padding: 28px 20px 28px;
          }

          .bw-footer-topbar {
            padding-bottom: 18px;
          }

          .bw-footer-topbar span {
            font-size: 9px;
            letter-spacing: 0.14em;
          }

          .bw-footer-main {
            gap: 34px;
            padding: 34px 0 42px;
          }

          .bw-footer-brand-row {
            align-items: center;
            gap: 16px;
          }

          .bw-footer-logo-box {
            width: 84px;
            height: 84px;
            border-radius: 24px;
          }

          .bw-footer-brand-meta strong {
            font-size: 22px;
            line-height: 0.95;
          }

          .bw-footer-brand-meta span {
            font-size: 9px;
            letter-spacing: 0.16em;
          }

          .bw-footer-heading {
            margin-top: 30px;
            font-size: clamp(28px, 10vw, 44px);
            line-height: 1.02;
          }

          .bw-footer-subtext {
            margin-top: 18px;
            font-size: 14px;
          }

          .bw-footer-cta {
            width: 100%;
            min-height: 54px;
            margin-top: 26px;
          }

          .bw-footer-contact-card {
            padding: 22px 18px 18px;
            border-radius: 26px;
          }

          .bw-footer-contact-head {
            margin-bottom: 18px;
          }

          .bw-footer-contact-head h3 {
            font-size: 26px;
            line-height: 1;
          }

          .bw-footer-contact-grid {
            grid-template-columns: 1fr;
            gap: 12px;
          }

          .bw-footer-contact-item,
          .bw-footer-contact-item-location {
            grid-column: auto;
          }

          .bw-footer-contact-item {
            min-height: auto;
            padding: 15px 14px;
            border-radius: 18px;
          }

          .bw-footer-contact-icon {
            width: 42px;
            height: 42px;
            border-radius: 13px;
          }

          .bw-footer-bottom {
            flex-direction: column-reverse;
            align-items: flex-start;
            gap: 12px;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .bw-footer-cta,
          .bw-footer-contact-item,
          .bw-footer-legal a {
            transition: none;
          }
        }
      `}</style>
    </>
  );
}