"use client";

import { useState } from "react";

const GOOGLE_PROFILE_URL =
  "https://maps.app.goo.gl/ntjNnv32G5WLUfeL7?g_st=ac";

function GoogleGIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 48 48"
      aria-hidden="true"
      focusable="false"
    >
      <path
        fill="#EA4335"
        d="M24 9.5c3.54 0 6.72 1.22 9.22 3.61l6.87-6.87C35.91 2.39 30.42 0 24 0 14.62 0 6.51 5.38 2.56 13.22l8 6.21C12.46 13.53 17.76 9.5 24 9.5Z"
      />
      <path
        fill="#4285F4"
        d="M46.5 24.55c0-1.57-.14-3.08-.41-4.55H24v8.62h12.67c-.55 2.96-2.22 5.47-4.74 7.15l7.66 5.95c4.47-4.12 6.91-10.18 6.91-17.17Z"
      />
      <path
        fill="#FBBC05"
        d="M10.56 28.57A14.39 14.39 0 0 1 9.75 24c0-1.6.28-3.15.81-4.57l-8-6.21A24.02 24.02 0 0 0 0 24c0 3.87.92 7.53 2.56 10.78l8-6.21Z"
      />
      <path
        fill="#34A853"
        d="M24 48c6.48 0 11.92-2.13 15.89-5.8l-7.66-5.95c-2.13 1.43-4.86 2.25-8.23 2.25-6.24 0-11.54-4.03-13.44-9.93l-8 6.21C6.51 42.62 14.62 48 24 48Z"
      />
    </svg>
  );
}

export default function ReviewsSection() {
  const [activeSlide, setActiveSlide] = useState(0);

  const goPrevious = () => setActiveSlide(0);
  const goNext = () => setActiveSlide(1);

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
                <span>VERTRAUEN AUS ECHTER ZUSAMMENARBEIT</span>
              </div>

              <h2 className="bw-reviews-title">
                Die ersten Stimmen von Menschen, die mir vertraut haben.
              </h2>

              <p className="bw-reviews-copy">
                Zwei öffentliche Google-Bewertungen von Menschen, die mir
                ihren digitalen Auftritt anvertraut haben — und mir die Chance
                gegeben haben, ihre Qualität auch online sichtbar zu machen.
              </p>
            </div>

            <div className="bw-reviews-stats">
              <div className="bw-reviews-stat">
                <strong>2</strong>
                <span>
                  öffentliche
                  <br />
                  Google-Bewertungen
                </span>
              </div>

              <div className="bw-reviews-stat-divider" />

              <div className="bw-reviews-stat">
                <strong>5.0</strong>
                <span>
                  durchschnittliche
                  <br />
                  Bewertung
                </span>
              </div>
            </div>
          </div>

          <div className="bw-review-carousel">
            <div className="bw-review-viewport">
              <div
                className="bw-review-track"
                style={{
                  transform: `translateX(-${activeSlide * 50}%)`,
                }}
              >
                <article className="bw-review-slide">
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

                      <div className="bw-google-proof" aria-hidden="true">
                        <div className="bw-google-proof-badge">
                          <GoogleGIcon className="bw-google-proof-logo" />
                        </div>
                      </div>
                    </div>
                  </div>
                </article>

                <article className="bw-review-slide">
                  <div className="bw-review-card">
                    <div className="bw-review-glow bw-review-glow-red" />
                    <div className="bw-review-glow bw-review-glow-blue" />

                    <div className="bw-review-card-content">
                      <div className="bw-review-meta">
                        <span>ÖFFENTLICHE GOOGLE-BEWERTUNG</span>
                        <div className="bw-review-stars">★★★★★</div>
                      </div>

                      <div className="bw-review-body">
                        <p>
                          Herr Boran arbeitet äußerst professionell, kompetent
                          und zuverlässig. Bereits der erste Entwurf entsprach
                          perfekt meinen Vorstellungen. Die Kommunikation war
                          stets freundlich, unkompliziert und schnell.
                        </p>
                      </div>

                      <div className="bw-review-footer">
                        <div className="bw-review-author">
                          <strong>Raziye Gültekin Aslan</strong>
                          <span>Google Bewertung · 5.0 Sterne</span>
                        </div>

                        <a
                          href={GOOGLE_PROFILE_URL}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="bw-review-source"
                        >
                          Vollständige Bewertung auf Google ansehen
                          <span>↗</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </article>
              </div>
            </div>

            <div className="bw-review-navigation">
              <button
                type="button"
                className="bw-review-nav-button"
                onClick={goPrevious}
                disabled={activeSlide === 0}
                aria-label="Zur Google-Übersicht zurück"
              >
                ←
              </button>

              <div className="bw-review-progress" aria-hidden="true">
                <span
                  className={`bw-review-progress-fill ${
                    activeSlide === 1 ? "is-review-active" : ""
                  }`}
                />
                <strong>0{activeSlide + 1}</strong>
                <em>/</em>
                <span>02</span>
              </div>

              <button
                type="button"
                className="bw-review-nav-button"
                onClick={goNext}
                disabled={activeSlide === 1}
                aria-label="Kundenbewertung anzeigen"
              >
                →
              </button>
            </div>
          </div>
        </div>
      </section>

      <style>{`
        .bw-reviews {
          position: relative;
          isolation: isolate;
          overflow: hidden;
          padding: 132px 20px 126px;
          background: #f6f3ee;
          color: #111114;
        }

        .bw-reviews::before {
          content: "";
          position: absolute;
          inset: 0;
          z-index: -3;
          background:
            radial-gradient(circle at 14% 16%, rgba(229, 42, 96, 0.09), transparent 31%),
            radial-gradient(circle at 88% 72%, rgba(45, 94, 255, 0.08), transparent 34%),
            #f6f3ee;
        }

        .bw-reviews-ambient {
          position: absolute;
          z-index: -2;
          border-radius: 999px;
          pointer-events: none;
          filter: blur(120px);
        }

        .bw-reviews-ambient-left {
          width: 320px;
          height: 320px;
          left: -180px;
          top: 280px;
          background: rgba(232, 48, 107, 0.10);
        }

        .bw-reviews-ambient-right {
          width: 380px;
          height: 380px;
          right: -190px;
          bottom: 80px;
          background: rgba(65, 93, 255, 0.10);
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
          max-width: 785px;
        }

        .bw-reviews-kicker {
          display: flex;
          align-items: center;
          gap: 11px;
          color: #d24368;
          font-size: 12px;
          font-weight: 850;
          letter-spacing: 0.19em;
          line-height: 1;
        }

        .bw-reviews-kicker-dot {
          width: 9px;
          height: 9px;
          flex: 0 0 auto;
          border-radius: 50%;
          background: #d24368;
          box-shadow: 0 0 18px rgba(210, 67, 104, 0.45);
          animation: bw-kicker-pulse 2.4s ease-in-out infinite;
        }

        .bw-reviews-title {
          max-width: 760px;
          margin: 24px 0 0;
          color: #121217;
          font-family: "Iowan Old Style", "Baskerville", Georgia, serif;
          font-size: clamp(48px, 6vw, 82px);
          font-weight: 400;
          line-height: 0.93;
          letter-spacing: -0.067em;
          text-wrap: balance;
        }

        .bw-reviews-copy {
          max-width: 690px;
          margin: 34px 0 0;
          color: rgba(26, 26, 33, 0.66);
          font-size: clamp(19px, 1.7vw, 25px);
          line-height: 1.42;
          letter-spacing: -0.03em;
        }

        .bw-reviews-stats {
          display: grid;
          grid-template-columns: 1fr auto 1fr;
          gap: 28px;
          align-items: center;
          padding-bottom: 8px;
        }

        .bw-reviews-stat {
          display: flex;
          flex-direction: column;
        }

        .bw-reviews-stat strong {
          color: #111114;
          font-size: clamp(46px, 5vw, 68px);
          font-weight: 650;
          line-height: 0.9;
          letter-spacing: -0.065em;
        }

        .bw-reviews-stat span {
          margin-top: 12px;
          color: rgba(22, 22, 28, 0.57);
          font-size: 14px;
          line-height: 1.35;
        }

        .bw-reviews-stat-divider {
          width: 1px;
          min-height: 88px;
          background: linear-gradient(
            to bottom,
            transparent,
            rgba(22, 22, 28, 0.22),
            transparent
          );
        }

        .bw-review-carousel {
          margin-top: 76px;
        }

        .bw-review-viewport {
          overflow: hidden;
          border-radius: 34px;
        }

        .bw-review-track {
          display: flex;
          width: 200%;
          transition: transform 620ms cubic-bezier(0.22, 1, 0.36, 1);
          will-change: transform;
        }

        .bw-review-slide {
          width: 50%;
          flex: 0 0 50%;
        }

        .bw-google-card,
        .bw-review-card {
          position: relative;
          height: 430px;
          min-height: 0;
          overflow: hidden;
          border-radius: 34px;
          background:
            linear-gradient(135deg, rgba(255,255,255,0.05), transparent 26%),
            linear-gradient(315deg, rgba(255,255,255,0.025), transparent 30%),
            #050506;
          box-shadow:
            0 34px 100px rgba(8, 8, 12, 0.28),
            inset 0 1px 0 rgba(255,255,255,0.07);
        }

        .bw-google-card::after,
        .bw-review-card::after {
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

        .bw-google-glow,
        .bw-review-glow {
          position: absolute;
          border-radius: 999px;
          pointer-events: none;
          filter: blur(92px);
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
          background: rgba(37, 106, 255, 0.13);
        }

        .bw-google-card-content {
          position: relative;
          z-index: 2;
          display: flex;
          height: 100%;
          min-height: 0;
          box-sizing: border-box;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 28px;
          padding: 40px 28px 34px;
          text-align: center;
        }

        .bw-google-main {
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .bw-google-word {
          display: flex;
          justify-content: center;
          font-family: Arial, Helvetica, sans-serif;
          font-size: clamp(50px, 7vw, 76px);
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
          margin-top: 22px;
        }

        .bw-google-stars span {
          display: inline-block;
          color: #ffd85d;
          font-size: clamp(30px, 4vw, 42px);
          animation: bw-star-glow 2.6s ease-in-out infinite;
        }

        .bw-google-stars span:nth-child(2) { animation-delay: 0.12s; }
        .bw-google-stars span:nth-child(3) { animation-delay: 0.24s; }
        .bw-google-stars span:nth-child(4) { animation-delay: 0.36s; }
        .bw-google-stars span:nth-child(5) { animation-delay: 0.48s; }

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
          font-weight: 800;
          text-decoration: none;
          transition: transform 180ms ease, background 180ms ease;
        }

        .bw-google-button:hover {
          transform: translateY(-2px) scale(1.02);
          background: #f0f0f0;
        }

        .bw-google-button span {
          font-size: 22px;
          line-height: 1;
        }

        .bw-google-proof {
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .bw-google-proof-badge {
          display: grid;
          place-items: center;
          width: 54px;
          height: 54px;
          border-radius: 50%;
          background: rgba(255,255,255,0.96);
          box-shadow: 0 8px 28px rgba(0,0,0,0.16);
        }

        .bw-google-proof-logo {
          width: 28px;
          height: 28px;
          display: block;
        }

        .bw-review-glow-red {
          width: 360px;
          height: 360px;
          right: -150px;
          bottom: -180px;
          background: rgba(222, 41, 97, 0.37);
        }

        .bw-review-glow-blue {
          width: 350px;
          height: 350px;
          left: -160px;
          top: -160px;
          background: rgba(62, 82, 255, 0.31);
        }

        .bw-review-card-content {
          position: relative;
          z-index: 2;
          display: flex;
          height: 100%;
          min-height: 0;
          box-sizing: border-box;
          flex-direction: column;
          align-items: flex-start;
          padding: 34px 34px 30px;
        }

        .bw-review-meta {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          gap: 10px;
        }

        .bw-review-meta span {
          color: rgba(255,255,255,0.62);
          font-size: 11px;
          font-weight: 850;
          letter-spacing: 0.16em;
        }

        .bw-review-stars {
          color: #ffd85d;
          font-size: 16px;
          letter-spacing: 0.14em;
        }

        .bw-review-body {
          margin-top: 22px;
          color: rgba(255,255,255,0.90);
          font-size: clamp(17px, 1.8vw, 21px);
          line-height: 1.55;
        }

        .bw-review-body p {
          margin: 0;
        }

        .bw-review-footer {
          display: flex;
          flex-direction: column;
          gap: 14px;
          width: 100%;
          margin-top: auto;
          padding-top: 24px;
        }

        .bw-review-author {
          display: flex;
          flex-direction: column;
          gap: 6px;
        }

        .bw-review-author strong {
          color: #ffffff;
          font-size: clamp(18px, 2vw, 24px);
          line-height: 1.2;
          word-break: normal;
        }

        .bw-review-author span {
          color: rgba(255,255,255,0.58);
          font-size: 14px;
        }

        .bw-review-source {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          color: rgba(255,255,255,0.78);
          font-size: 13px;
          font-weight: 750;
          letter-spacing: 0.03em;
          text-decoration: none;
        }

        .bw-review-source:hover {
          color: #ffffff;
        }

        .bw-review-source span {
          font-size: 17px;
          line-height: 1;
        }

        .bw-review-navigation {
          position: relative;
          display: grid;
          grid-template-columns: auto minmax(160px, 1fr) auto;
          gap: 22px;
          align-items: center;
          width: min(470px, 100%);
          margin: 34px auto 0;
        }

        .bw-review-nav-button {
          display: grid;
          width: 54px;
          height: 54px;
          place-items: center;
          border: 1px solid rgba(18,18,24,0.20);
          border-radius: 50%;
          background: transparent;
          color: #15151a;
          cursor: pointer;
          font-size: 28px;
          line-height: 1;
          transition: transform 180ms ease, background 180ms ease, color 180ms ease, opacity 180ms ease;
        }

        .bw-review-nav-button:hover:not(:disabled) {
          transform: translateY(-2px);
          background: #111114;
          color: #ffffff;
        }

        .bw-review-nav-button:disabled {
          cursor: not-allowed;
          opacity: 0.28;
        }

        .bw-review-progress {
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          color: rgba(21,21,26,0.48);
          font-size: 12px;
          font-style: normal;
          font-weight: 800;
          letter-spacing: 0.14em;
        }

        .bw-review-progress::before {
          content: "";
          width: 150px;
          height: 1px;
          background: rgba(21,21,26,0.20);
        }

        .bw-review-progress-fill {
          position: absolute;
          left: calc(50% - 75px);
          width: 74px;
          height: 2px;
          background: #d52f5e;
          transition: transform 500ms cubic-bezier(0.22, 1, 0.36, 1);
        }

        .bw-review-progress-fill.is-review-active {
          transform: translateX(76px);
        }

        .bw-review-progress strong {
          color: #15151a;
          font-style: normal;
        }

        .bw-review-progress em {
          font-style: normal;
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
            opacity: 0.62;
            transform: scale(0.9);
          }

          50% {
            opacity: 1;
            transform: scale(1.12);
          }
        }

        @media (max-width: 760px) {
          .bw-reviews {
            padding: 102px 20px 110px;
          }

          .bw-reviews-top {
            grid-template-columns: 1fr;
            gap: 44px;
          }

          .bw-reviews-title {
            font-size: 49px;
          }

          .bw-reviews-copy {
            font-size: 21px;
          }

          .bw-reviews-stats {
            max-width: 430px;
            gap: 23px;
          }

          .bw-reviews-stat strong {
            font-size: 49px;
          }

          .bw-review-carousel {
            margin-top: 58px;
          }

          .bw-review-viewport,
          .bw-google-card,
          .bw-review-card {
            border-radius: 28px;
          }

          .bw-google-card,
          .bw-review-card {
            height: 390px;
            min-height: 0;
          }

          .bw-google-card-content {
            padding: 34px 22px 26px;
            gap: 24px;
          }

          .bw-review-card-content {
            padding: 28px 22px 24px;
          }

          .bw-google-word {
            font-size: 62px;
          }

          .bw-google-stars {
            margin-top: 18px;
          }

          .bw-review-body {
            margin-top: 18px;
            font-size: 15px;
            line-height: 1.43;
          }

          .bw-review-author strong {
            font-size: 16px;
          }

          .bw-review-author span {
            font-size: 13px;
          }

          .bw-review-source {
            font-size: 12px;
          }
        }

        @media (max-width: 420px) {
          .bw-reviews-kicker {
            font-size: 10px;
            letter-spacing: 0.14em;
          }

          .bw-reviews-title {
            font-size: 44px;
          }

          .bw-reviews-copy {
            font-size: 20px;
          }

          .bw-reviews-stats {
            gap: 18px;
          }

          .bw-reviews-stat span {
            font-size: 13px;
          }

          .bw-google-word {
            font-size: 56px;
          }

          .bw-google-button {
            width: 100%;
            padding: 16px 24px;
          }

          .bw-review-navigation {
            gap: 16px;
          }

          .bw-review-nav-button {
            width: 50px;
            height: 50px;
          }

          .bw-review-progress::before {
            width: 120px;
          }

          .bw-review-progress-fill {
            left: calc(50% - 60px);
            width: 58px;
          }

          .bw-review-progress-fill.is-review-active {
            transform: translateX(62px);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .bw-google-stars span,
          .bw-reviews-kicker-dot,
          .bw-review-track,
          .bw-review-progress-fill {
            animation: none;
            transition: none;
          }
        }
      `}</style>
    </>
  );
}