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

  googleMapsProfile:
    "https://maps.app.goo.gl/JVmRnrLmcrULhvyS7?g_st=ac",

  addressLine1: "Am Eckrain 15/1",
  addressLine2: "78554 Aldingen, Deutschland",
};

const CURRENT_YEAR = new Date().getFullYear();

export default function Footer() {
  const openLeadForm = () => {
    if (typeof window !== "undefined") {
      window.dispatchEvent(new Event("boran:open-lead-form"));
    }
  };

  return (
    <>
      <footer className="bw-footer">
        <div className="bw-footer-shell">
          <div className="bw-footer-topline">
            <span>BORAN WEBDESIGN · DEUTSCHLAND</span>
            <span>PREMIUM WEBSITES FÜR LOKALE UNTERNEHMEN</span>
          </div>

          <div className="bw-footer-main">
            <div className="bw-footer-brand-area">
              <div className="bw-footer-brand">
                <img
                  src="/bw-logo.png"
                  alt="Boran Webdesign Logo"
                  className="bw-footer-logo"
                />

                <div>
                  <strong>BORAN WEBDESIGN</strong>
                  <span>Premium Digital Presence</span>
                </div>
              </div>

              <h2 className="bw-footer-heading">
                Ein klarer Auftritt schafft Vertrauen, bevor das erste Gespräch
                beginnt.
              </h2>

              <p className="bw-footer-text">
                Für lokale Unternehmen, die hochwertiger wirken und einfacher
                angefragt werden möchten.
              </p>

              <button
                type="button"
                onClick={openLeadForm}
                className="bw-footer-cta"
              >
                Projekt anfragen
                <ArrowUpRight size={17} strokeWidth={2.3} />
              </button>
            </div>

            <div className="bw-footer-contact-area">
              <p className="bw-footer-label">Kontakt</p>

              <div className="bw-footer-contact-list">
                <a
                  href={`tel:${CONTACT.phoneHref}`}
                  className="bw-footer-contact-link"
                >
                  <Phone size={18} strokeWidth={1.9} />

                  <span>
                    <small>Telefon</small>
                    <strong>{CONTACT.phoneDisplay}</strong>
                  </span>
                </a>

                <a
                  href={`mailto:${CONTACT.email}`}
                  className="bw-footer-contact-link"
                >
                  <Mail size={18} strokeWidth={1.9} />

                  <span>
                    <small>E-Mail</small>
                    <strong>{CONTACT.email}</strong>
                  </span>
                </a>

                <a
                  href={`https://wa.me/${CONTACT.whatsappNumber}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bw-footer-contact-link"
                >
                  <MessageCircle size={18} strokeWidth={1.9} />

                  <span>
                    <small>WhatsApp</small>
                    <strong>{CONTACT.whatsappDisplay}</strong>
                  </span>
                </a>

                <a
                  href={CONTACT.googleMapsProfile}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bw-footer-contact-link"
                >
                  <MapPin size={18} strokeWidth={1.9} />

                  <span>
                    <small>Google Profil</small>
                    <strong>
                      {CONTACT.addressLine1}
                      <br />
                      {CONTACT.addressLine2}
                    </strong>
                  </span>
                </a>
              </div>
            </div>
          </div>

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
          padding: clamp(34px, 5vw, 58px) 20px 30px;
          background: #000000;
          color: #ffffff;
        }

        .bw-footer::before {
          position: absolute;
          inset: 0;
          content: "";
          pointer-events: none;
          background:
            radial-gradient(circle at 10% 20%, rgba(219, 49, 80, 0.055), transparent 30%),
            radial-gradient(circle at 90% 80%, rgba(255, 255, 255, 0.035), transparent 34%);
          opacity: 0.9;
        }

        .bw-footer-shell {
          position: relative;
          z-index: 1;
          width: min(1180px, 100%);
          margin: 0 auto;
        }

        .bw-footer-topline {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 20px;
          padding-bottom: 22px;
          border-bottom: 1px solid rgba(255, 255, 255, 0.11);
          color: rgba(255, 255, 255, 0.36);
          font-size: 10px;
          font-weight: 850;
          letter-spacing: 0.18em;
          text-transform: uppercase;
        }

        .bw-footer-main {
          display: grid;
          grid-template-columns: minmax(0, 1.08fr) minmax(320px, 0.72fr);
          gap: clamp(46px, 8vw, 120px);
          padding: clamp(46px, 6vw, 74px) 0;
          align-items: start;
        }

        .bw-footer-brand-area {
          max-width: 680px;
        }

        .bw-footer-brand {
          display: flex;
          align-items: center;
          gap: 18px;
        }

        .bw-footer-logo {
          width: 74px;
          height: 74px;
          object-fit: contain;
          flex: 0 0 auto;
          border-radius: 22px;
          background: #030303;
          border: 1px solid rgba(255, 255, 255, 0.1);
          box-shadow:
            inset 0 1px 0 rgba(255,255,255,0.06),
            0 16px 44px rgba(0,0,0,0.42);
        }

        .bw-footer-brand strong {
          display: block;
          color: #ffffff;
          font-family: "Iowan Old Style", "Baskerville", Georgia, serif;
          font-size: clamp(1.35rem, 2vw, 2rem);
          font-weight: 500;
          line-height: 0.95;
          letter-spacing: 0.07em;
        }

        .bw-footer-brand span {
          display: block;
          margin-top: 8px;
          color: rgba(255, 255, 255, 0.42);
          font-size: 10px;
          font-weight: 850;
          letter-spacing: 0.22em;
          text-transform: uppercase;
        }

        .bw-footer-heading {
          max-width: 760px;
          margin: 38px 0 0;
          color: rgba(255, 255, 255, 0.92);
          font-family: "Iowan Old Style", "Baskerville", Georgia, serif;
          font-size: clamp(2.55rem, 5.2vw, 5.45rem);
          font-weight: 400;
          line-height: 0.96;
          letter-spacing: -0.065em;
        }

        .bw-footer-text {
          max-width: 520px;
          margin: 24px 0 0;
          color: rgba(255, 255, 255, 0.48);
          font-size: clamp(1rem, 1.35vw, 1.14rem);
          line-height: 1.62;
        }

        .bw-footer-cta {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          min-height: 48px;
          margin-top: 30px;
          padding: 0 20px;
          border: 1px solid rgba(255, 255, 255, 0.16);
          border-radius: 999px;
          background: rgba(255, 255, 255, 0.055);
          color: #ffffff;
          cursor: pointer;
          font-size: 12px;
          font-weight: 900;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          transition:
            transform 180ms ease,
            background 180ms ease,
            border-color 180ms ease,
            color 180ms ease;
        }

        .bw-footer-cta:hover {
          transform: translateY(-2px);
          border-color: rgba(255, 255, 255, 0.3);
          background: #ffffff;
          color: #050505;
        }

        .bw-footer-contact-area {
          padding-top: 8px;
        }

        .bw-footer-label {
          margin: 0 0 20px;
          color: #db3150;
          font-size: 10px;
          font-weight: 900;
          letter-spacing: 0.22em;
          text-transform: uppercase;
        }

        .bw-footer-contact-list {
          display: grid;
          gap: 0;
          border-top: 1px solid rgba(255, 255, 255, 0.11);
        }

        .bw-footer-contact-link {
          display: grid;
          grid-template-columns: 24px minmax(0, 1fr);
          gap: 15px;
          align-items: start;
          padding: 18px 0;
          border-bottom: 1px solid rgba(255, 255, 255, 0.11);
          color: rgba(255, 255, 255, 0.72);
          text-decoration: none;
          transition:
            color 180ms ease,
            transform 180ms ease;
        }

        .bw-footer-contact-link:hover {
          color: #ffffff;
          transform: translateX(4px);
        }

        .bw-footer-contact-link svg {
          margin-top: 4px;
          color: rgba(255, 255, 255, 0.46);
          transition: color 180ms ease;
        }

        .bw-footer-contact-link:hover svg {
          color: #db3150;
        }

        .bw-footer-contact-link small {
          display: block;
          margin-bottom: 5px;
          color: rgba(255, 255, 255, 0.34);
          font-size: 11px;
          font-weight: 750;
        }

        .bw-footer-contact-link strong {
          display: block;
          color: rgba(255, 255, 255, 0.82);
          font-size: 14px;
          font-weight: 650;
          line-height: 1.48;
          overflow-wrap: anywhere;
        }

        .bw-footer-contact-link:hover strong {
          color: #ffffff;
        }

        .bw-footer-bottom {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 18px;
          padding-top: 24px;
          border-top: 1px solid rgba(255, 255, 255, 0.11);
        }

        .bw-footer-bottom p {
          margin: 0;
          color: rgba(255, 255, 255, 0.32);
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

        @media (max-width: 900px) {
          .bw-footer-main {
            grid-template-columns: 1fr;
            gap: 44px;
          }

          .bw-footer-contact-area {
            padding-top: 0;
          }
        }

        @media (max-width: 640px) {
          .bw-footer {
            padding: 30px 20px 28px;
          }

          .bw-footer-topline {
            padding-bottom: 18px;
            font-size: 9px;
            letter-spacing: 0.13em;
          }

          .bw-footer-topline span:last-child {
            display: none;
          }

          .bw-footer-main {
            padding: 38px 0 44px;
            gap: 42px;
          }

          .bw-footer-brand {
            gap: 16px;
          }

          .bw-footer-logo {
            width: 66px;
            height: 66px;
            border-radius: 20px;
          }

          .bw-footer-brand strong {
            font-size: 1.28rem;
          }

          .bw-footer-brand span {
            margin-top: 7px;
            font-size: 9px;
            letter-spacing: 0.16em;
          }

          .bw-footer-heading {
            margin-top: 34px;
            font-size: clamp(2.55rem, 12vw, 4.1rem);
            line-height: 0.98;
          }

          .bw-footer-text {
            margin-top: 20px;
            font-size: 0.98rem;
          }

          .bw-footer-cta {
            width: 100%;
            min-height: 54px;
            margin-top: 26px;
          }

          .bw-footer-contact-link {
            padding: 17px 0;
          }

          .bw-footer-bottom {
            flex-direction: column-reverse;
            align-items: flex-start;
            gap: 13px;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .bw-footer-cta,
          .bw-footer-contact-link,
          .bw-footer-contact-link svg,
          .bw-footer-legal a {
            transition: none;
          }
        }
      `}</style>
    </>
  );
}