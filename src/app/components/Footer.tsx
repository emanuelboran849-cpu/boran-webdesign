import { Mail, MapPin, MessageCircle, Phone } from "lucide-react";

const CONTACT = {
  phoneDisplay: "+49 000 00000000",
  phoneHref: "+490000000000",

  email: "DEINE-EMAIL@DEINEDOMAIN.DE",

  whatsappDisplay: "+49 000 00000000",
  whatsappNumber: "490000000000",

  addressLine1: "DEINE STRASSE + HAUSNUMMER",
  addressLine2: "DEINE PLZ + ORT, Deutschland",
};

const CURRENT_YEAR = new Date().getFullYear();

export default function Footer() {
  const mapsAddress = `${CONTACT.addressLine1}, ${CONTACT.addressLine2}`;

  return (
    <>
      <footer className="bw-footer">
        <div className="bw-footer-shell">
          <div className="bw-footer-microbar">
            <span>BORAN WEBDESIGN · DEUTSCHLAND</span>
            <span>PREMIUM DIGITAL PRESENCE</span>
          </div>

          <div className="bw-footer-main">
            <div className="bw-footer-brand-area">
              <div className="bw-footer-brand">
                <img
                  src="/bw-logo.png"
                  alt="BW Monogram"
                  className="bw-footer-logo"
                />

                <div className="bw-footer-brand-text">
                  <strong>BORAN WEBDESIGN</strong>

                </div>
              </div>

              <p className="bw-footer-statement">
                Websites für lokale Unternehmen, die nicht nur sichtbar sein
                wollen, sondern den richtigen Eindruck hinterlassen.
              </p>

              <p className="bw-footer-note">
                Persönlich geplant. Präzise gestaltet. Klar umgesetzt.
              </p>
            </div>

            <div className="bw-footer-contact-area">
              <div className="bw-footer-contact-heading">
                <span>KONTAKT</span>
                <p>Direkt, persönlich und unkompliziert.</p>
              </div>

              <div className="bw-footer-contact-grid">
                <div className="bw-footer-contact-column">
                  <a
                    href={`tel:${CONTACT.phoneHref}`}
                    className="bw-footer-contact-item"
                  >
                    <Phone size={18} strokeWidth={1.8} />

                    <div>
                      <small>Telefon</small>
                      <strong>{CONTACT.phoneDisplay}</strong>
                    </div>
                  </a>

                  <a
                    href={`mailto:${CONTACT.email}`}
                    className="bw-footer-contact-item"
                  >
                    <Mail size={18} strokeWidth={1.8} />

                    <div>
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
                    <MessageCircle size={18} strokeWidth={1.8} />

                    <div>
                      <small>WhatsApp</small>
                      <strong>{CONTACT.whatsappDisplay}</strong>
                    </div>
                  </a>
                </div>

                <div className="bw-footer-contact-column">
                  <a
                    href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                      mapsAddress
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bw-footer-contact-item bw-footer-location"
                  >
                    <MapPin size={18} strokeWidth={1.8} />

                    <div>
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
          padding: 32px 20px 30px;
          background: #000000;
          color: #ffffff;
        }

        .bw-footer-shell {
          width: min(1240px, 100%);
          margin: 0 auto;
        }

        .bw-footer-microbar {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 20px;
          padding-bottom: 24px;
          border-bottom: 1px solid rgba(255, 255, 255, 0.12);
          color: rgba(255, 255, 255, 0.34);
          font-size: 10px;
          font-weight: 800;
          letter-spacing: 0.18em;
        }

        .bw-footer-main {
          display: grid;
          grid-template-columns: minmax(0, 0.94fr) minmax(440px, 1.06fr);
          gap: clamp(56px, 10vw, 150px);
          padding: 74px 0 70px;
        }

        .bw-footer-brand-area {
          max-width: 500px;
        }

        .bw-footer-brand {
          display: flex;
          align-items: center;
          gap: 24px;
        }

        .bw-footer-logo {
          display: block;
          width: 112px;
          height: 112px;
          flex: 0 0 auto;
          object-fit: contain;
        }

        .bw-footer-brand-text {
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        .bw-footer-brand-text strong {
          color: #ffffff;
          font-family: "Iowan Old Style", "Baskerville", Georgia, serif;
          font-size: clamp(26px, 2.5vw, 35px);
          font-weight: 500;
          letter-spacing: 0.055em;
          line-height: 0.95;
        }

        .bw-footer-brand-text span {
          color: rgba(255, 255, 255, 0.48);
          font-size: 10px;
          font-weight: 850;
          letter-spacing: 0.28em;
        }

        .bw-footer-statement {
          max-width: 465px;
          margin: 42px 0 0;
          color: rgba(255, 255, 255, 0.78);
          font-family: "Iowan Old Style", "Baskerville", Georgia, serif;
          font-size: clamp(25px, 2.25vw, 33px);
          font-weight: 400;
          line-height: 1.08;
          letter-spacing: -0.04em;
        }

        .bw-footer-note {
          margin: 22px 0 0;
          color: rgba(255, 255, 255, 0.38);
          font-size: 13px;
          line-height: 1.55;
        }

        .bw-footer-contact-area {
          padding-top: 9px;
        }

        .bw-footer-contact-heading {
          margin-bottom: 38px;
        }

        .bw-footer-contact-heading span {
          color: rgba(255, 255, 255, 0.40);
          font-size: 10px;
          font-weight: 850;
          letter-spacing: 0.20em;
        }

        .bw-footer-contact-heading p {
          margin: 12px 0 0;
          color: rgba(255, 255, 255, 0.85);
          font-size: 20px;
          font-weight: 500;
          letter-spacing: -0.03em;
        }

        .bw-footer-contact-grid {
          display: grid;
          grid-template-columns: minmax(210px, 1fr) minmax(210px, 0.9fr);
          gap: clamp(36px, 6vw, 76px);
        }

        .bw-footer-contact-column {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          gap: 25px;
        }

        .bw-footer-contact-item {
          display: flex;
          align-items: flex-start;
          gap: 14px;
          color: rgba(255, 255, 255, 0.72);
          text-decoration: none;
          transition: color 180ms ease, transform 180ms ease;
        }

        .bw-footer-contact-item:hover {
          color: #ffffff;
          transform: translateX(4px);
        }

        .bw-footer-contact-item svg {
          flex: 0 0 auto;
          margin-top: 3px;
          color: rgba(255, 255, 255, 0.50);
        }

        .bw-footer-contact-item div {
          display: flex;
          flex-direction: column;
          gap: 5px;
          min-width: 0;
        }

        .bw-footer-contact-item small {
          color: rgba(255, 255, 255, 0.37);
          font-size: 11px;
        }

        .bw-footer-contact-item strong {
          color: rgba(255, 255, 255, 0.80);
          font-size: 14px;
          font-weight: 550;
          line-height: 1.55;
          overflow-wrap: anywhere;
        }

        .bw-footer-location {
          transition: color 180ms ease, transform 180ms ease;
        }

        .bw-footer-divider {
          width: 100%;
          height: 1px;
          background: rgba(255, 255, 255, 0.13);
        }

        .bw-footer-bottom {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 20px;
          padding-top: 24px;
        }

        .bw-footer-bottom p {
          margin: 0;
          color: rgba(255, 255, 255, 0.34);
          font-size: 12px;
          line-height: 1.5;
        }

        .bw-footer-legal {
          display: flex;
          align-items: center;
          gap: 13px;
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
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.28);
        }

        @media (max-width: 930px) {
          .bw-footer-main {
            grid-template-columns: 1fr;
            gap: 64px;
          }

          .bw-footer-brand-area {
            max-width: 610px;
          }
        }

        @media (max-width: 620px) {
          .bw-footer {
            padding: 26px 20px 28px;
          }

          .bw-footer-microbar {
            padding-bottom: 19px;
            font-size: 9px;
            letter-spacing: 0.13em;
          }

          .bw-footer-microbar span:last-child {
            display: none;
          }

          .bw-footer-main {
            gap: 56px;
            padding: 54px 0 52px;
          }

          .bw-footer-brand {
            gap: 18px;
          }

          .bw-footer-logo {
            width: 94px;
            height: 94px;
          }

          .bw-footer-brand-text strong {
            font-size: 25px;
          }

          .bw-footer-brand-text span {
            font-size: 9px;
            letter-spacing: 0.23em;
          }

          .bw-footer-statement {
            margin-top: 36px;
            font-size: 27px;
          }

          .bw-footer-contact-heading {
            margin-bottom: 31px;
          }

          .bw-footer-contact-grid {
            grid-template-columns: 1fr;
            gap: 34px;
          }

          .bw-footer-contact-column {
            gap: 23px;
          }

          .bw-footer-bottom {
            align-items: flex-start;
            flex-direction: column-reverse;
            gap: 15px;
          }
        }

        @media (max-width: 390px) {
          .bw-footer-logo {
            width: 82px;
            height: 82px;
          }

          .bw-footer-brand-text strong {
            font-size: 22px;
          }

          .bw-footer-statement {
            font-size: 25px;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .bw-footer-contact-item,
          .bw-footer-legal a {
            transition: none;
          }
        }
      `}</style>
    </>
  );
}