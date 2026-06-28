const GOOGLE_PROFILE_URL = "https://maps.app.goo.gl/ntjNnv32G5WLUfeL7?g_st=ac";

export default function ReviewsSection() {
  return (
    <>
      <section id="reviews" className="bw-reviews">
        <div className="bw-reviews-ambient bw-reviews-ambient-left" />
        <div className="bw-reviews-ambient bw-reviews-ambient-right" />

        <div className="bw-reviews-shell">
          <div className="bw-reviews-top">
            <div className="bw-reviews-heading">
              <div className="bw-reviews-kicker">
                <span className="bw-reviews-kicker-dot" />
                <span>ECHTE GOOGLE-BEWERTUNGEN</span>
                <span className="bw-reviews-kicker-line" />
                <strong>5.0</strong>
              </div>

              <h2 className="bw-reviews-title">
                Erste echte Rückmeldungen von Kunden.
              </h2>
            </div>

            <div className="bw-reviews-stats">
              <div className="bw-reviews-stat">
                <strong>2</strong>
                <span>Google-<br />Bewertungen</span>
              </div>

              <div className="bw-reviews-stat-divider" />

              <div className="bw-reviews-stat">
                <strong>5.0</strong>
                <span>durchschnittliche<br />Bewertung</span>
              </div>
            </div>
          </div>

          <p className="bw-reviews-copy">
            Zwei echte Google-Bewertungen von Kunden, die bereits mit mir
            gearbeitet haben. Öffentlich sichtbar und direkt über mein
            Google-Profil nachvollziehbar.
          </p>

          <div className="bw-google-card">
            <div className="bw-google-glow bw-google-glow-purple" />
            <div className="bw-google-glow bw-google-glow-red" />
            <div className="bw-google-glow bw-google-glow-blue" />

            <div className="bw-google-card-content">
              <div className="bw-google-main">
                <div className="bw-google-word" aria-label="Google">
                  <span className="google-blue">G</span>
                  <span className="google-red">o</span>
                  <span className="google-yellow">o</span>
                  <span className="google-blue">g</span>
                  <span className="google-green">l</span>
                  <span className="google-red">e</span>
                </div>

                <div className="bw-google-stars" aria-label="5 Sterne">
                  <span>★</span>
                  <span>★</span>
                  <span>★</span>
                  <span>★</span>
                  <span>★</span>
                </div>

                <div className="bw-google-rating">
                  <strong>5.0</strong>
                  <span>durchschnittliche Bewertung</span>
                </div>
              </div>

              <a
                href={GOOGLE_PROFILE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="bw-google-button"
              >
                Google-Profil ansehen
                <span>↗</span>
              </a>

              <div className="bw-google-proof">
                <div className="bw-google-proof-icon">G</div>
                <span>2 Google-Bewertungen</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <style>{`
        .bw-reviews {
          position: relative;
          z-index: 30;
          isolation: isolate;
          overflow: hidden;
          padding: 128px 20px;
          background: #07070b;
          color: #ffffff;
        }

        .bw-reviews::before {
          content: "";
          position: absolute;
          inset: 0;
          z-index: -3;
          background:
            radial-gradient(circle at 18% 12%, rgba(118, 57, 255, 0.14), transparent 31%),
            radial-gradient(circle at 87% 76%, rgba(29, 93, 255, 0.14), transparent 33%),
            #07070b;
        }

        .bw-reviews-ambient {
          position: absolute;
          z-index: -2;
          border-radius: 999px;
          filter: blur(115px);
          pointer-events: none;
        }

        .bw-reviews-ambient-left {
          width: 350px;
          height: 350px;
          left: -180px;
          bottom: 70px;
          background: rgba(150, 56, 255, 0.15);
        }

        .bw-reviews-ambient-right {
          width: 380px;
          height: 380px;
          right: -190px;
          top: 80px;
          background: rgba(34, 115, 255, 0.13);
        }

        .bw-reviews-shell {
          width: min(1120px, 100%);
          margin: 0 auto;
        }

        .bw-reviews-top {
          display: grid;
          grid-template-columns: minmax(0, 1fr) minmax(280px, 0.42fr);
          gap: 72px;
          align-items: end;
        }

        .bw-reviews-heading {
          max-width: 780px;
        }

        .bw-reviews-kicker {
          display: flex;
          align-items: center;
          gap: 11px;
          color: rgba(255, 255, 255, 0.76);
          font-size: 12px;
          font-weight: 800;
          letter-spacing: 0.19em;
          line-height: 1;
        }

        .bw-reviews-kicker-dot {
          width: 9px;
          height: 9px;
          flex: 0 0 auto;
          border-radius: 999px;
          background: #ffd85d;
          box-shadow: 0 0 18px rgba(255, 216, 93, 0.78);
          animation: bw-kicker-pulse 2.4s ease-in-out infinite;
        }

        .bw-reviews-kicker-line {
          width: 34px;
          height: 1px;
          background: linear-gradient(90deg, rgba(255,255,255,0.45), rgba(255,255,255,0));
        }

        .bw-reviews-kicker strong {
          color: #ffffff;
          font-size: 12px;
          letter-spacing: 0.08em;
        }

        .bw-reviews-title {
          max-width: 760px;
          margin: 22px 0 0;
          color: #ffffff;
          font-size: clamp(44px, 6.2vw, 84px);
          font-weight: 650;
          line-height: 0.95;
          letter-spacing: -0.065em;
        }

        .bw-reviews-stats {
          display: grid;
          grid-template-columns: 1fr auto 1fr;
          align-items: center;
          gap: 28px;
          padding-bottom: 6px;
        }

        .bw-reviews-stat {
          display: flex;
          flex-direction: column;
        }

        .bw-reviews-stat strong {
          color: #ffffff;
          font-size: clamp(46px, 5vw, 68px);
          font-weight: 650;
          line-height: 0.9;
          letter-spacing: -0.065em;
        }

        .bw-reviews-stat span {
          margin-top: 12px;
          color: rgba(255, 255, 255, 0.56);
          font-size: 14px;
          line-height: 1.35;
        }

        .bw-reviews-stat-divider {
          width: 1px;
          min-height: 88px;
          background: linear-gradient(
            to bottom,
            transparent,
            rgba(255,255,255,0.28),
            transparent
          );
        }

        .bw-reviews-copy {
          max-width: 700px;
          margin: 54px 0 0;
          color: rgba(255, 255, 255, 0.70);
          font-size: clamp(21px, 2.05vw, 29px);
          line-height: 1.34;
          letter-spacing: -0.032em;
        }

        .bw-google-card {
          position: relative;
          overflow: hidden;
          min-height: 510px;
          margin-top: 76px;
          border-radius: 34px;
          background:
            linear-gradient(135deg, rgba(255,255,255,0.05), transparent 26%),
            linear-gradient(315deg, rgba(255,255,255,0.025), transparent 30%),
            #050506;
          box-shadow:
            0 36px 110px rgba(0, 0, 0, 0.56),
            inset 0 1px 0 rgba(255,255,255,0.06);
        }

        .bw-google-card::after {
          content: "";
          position: absolute;
          inset: 0;
          pointer-events: none;
          background: linear-gradient(
            180deg,
            rgba(255,255,255,0.025),
            transparent 28%,
            rgba(255,255,255,0.015)
          );
        }

        .bw-google-glow {
          position: absolute;
          border-radius: 999px;
          pointer-events: none;
          filter: blur(90px);
        }

        .bw-google-glow-purple {
          width: 340px;
          height: 340px;
          left: -120px;
          bottom: -180px;
          background: rgba(145, 54, 255, 0.54);
        }

        .bw-google-glow-red {
          width: 300px;
          height: 300px;
          right: -120px;
          top: -150px;
          background: rgba(255, 67, 132, 0.30);
        }

        .bw-google-glow-blue {
          width: 250px;
          height: 250px;
          left: 50%;
          top: 46%;
          transform: translate(-50%, -50%);
          background: rgba(37, 106, 255, 0.12);
        }

        .bw-google-card-content {
          position: relative;
          z-index: 2;
          display: flex;
          min-height: 510px;
          flex-direction: column;
          align-items: center;
          justify-content: space-between;
          padding: 76px 28px 34px;
          text-align: center;
        }

        .bw-google-word {
          display: flex;
          justify-content: center;
          font-family: Arial, Helvetica, sans-serif;
          font-size: clamp(48px, 7vw, 76px);
          font-weight: 700;
          letter-spacing: -0.095em;
        }

        .google-blue { color: #4285f4; }
        .google-red { color: #ea4335; }
        .google-yellow { color: #fbbc05; }
        .google-green { color: #34a853; }

        .bw-google-stars {
          display: flex;
          justify-content: center;
          gap: 8px;
          margin-top: 26px;
        }

        .bw-google-stars span {
          display: inline-block;
          color: #ffd85d;
          font-size: clamp(30px, 4vw, 42px);
          filter: drop-shadow(0 0 0 rgba(255,216,93,0));
          animation: bw-star-glow 2.6s ease-in-out infinite;
        }

        .bw-google-stars span:nth-child(2) { animation-delay: 0.12s; }
        .bw-google-stars span:nth-child(3) { animation-delay: 0.24s; }
        .bw-google-stars span:nth-child(4) { animation-delay: 0.36s; }
        .bw-google-stars span:nth-child(5) { animation-delay: 0.48s; }

        .bw-google-rating {
          display: flex;
          align-items: baseline;
          justify-content: center;
          gap: 10px;
          margin-top: 25px;
        }

        .bw-google-rating strong {
          color: #ffffff;
          font-size: 28px;
          letter-spacing: -0.05em;
        }

        .bw-google-rating span {
          color: rgba(255,255,255,0.64);
          font-size: 16px;
        }

        .bw-google-button {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 14px;
          border-radius: 999px;
          padding: 17px 28px;
          background: #ffffff;
          color: #09090b;
          font-size: 16px;
          font-weight: 750;
          text-decoration: none;
          transition: transform 180ms ease, background 180ms ease;
        }

        .bw-google-button:hover {
          transform: translateY(-2px) scale(1.02);
          background: #f2f2f2;
        }

        .bw-google-button span {
          font-size: 22px;
          line-height: 1;
        }

        .bw-google-proof {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 11px;
          color: rgba(255,255,255,0.69);
          font-size: 15px;
        }

        .bw-google-proof-icon {
          display: grid;
          width: 36px;
          height: 36px;
          place-items: center;
          border-radius: 50%;
          background: #ffffff;
          color: #111111;
          font-size: 18px;
          font-weight: 800;
        }

        @keyframes bw-star-glow {
          0%, 100% {
            transform: translateY(0) scale(1);
            opacity: 0.78;
            filter: drop-shadow(0 0 0 rgba(255,216,93,0));
          }

          50% {
            transform: translateY(-2px) scale(1.12);
            opacity: 1;
            filter: drop-shadow(0 0 14px rgba(255,216,93,0.92));
          }
        }

        @keyframes bw-kicker-pulse {
          0%, 100% {
            opacity: 0.65;
            transform: scale(0.9);
          }

          50% {
            opacity: 1;
            transform: scale(1.12);
          }
        }

        @media (max-width: 760px) {
          .bw-reviews {
            padding: 94px 20px;
          }

          .bw-reviews-top {
            grid-template-columns: 1fr;
            gap: 42px;
          }

          .bw-reviews-title {
            font-size: 48px;
          }

          .bw-reviews-stats {
            max-width: 440px;
            gap: 24px;
          }

          .bw-reviews-stat strong {
            font-size: 48px;
          }

          .bw-reviews-copy {
            margin-top: 46px;
            font-size: 23px;
          }

          .bw-google-card {
            min-height: 440px;
            margin-top: 58px;
            border-radius: 28px;
          }

          .bw-google-card-content {
            min-height: 440px;
            padding: 62px 20px 28px;
          }

          .bw-google-rating {
            flex-direction: column;
            gap: 4px;
          }
        }

        @media (max-width: 420px) {
          .bw-reviews-kicker {
            gap: 9px;
            font-size: 10px;
            letter-spacing: 0.14em;
          }

          .bw-reviews-kicker-line {
            width: 18px;
          }

          .bw-reviews-title {
            font-size: 44px;
          }

          .bw-reviews-stats {
            gap: 18px;
          }

          .bw-reviews-stat span {
            font-size: 13px;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .bw-google-stars span,
          .bw-reviews-kicker-dot {
            animation: none;
          }
        }
      `}</style>
    </>
  );
}