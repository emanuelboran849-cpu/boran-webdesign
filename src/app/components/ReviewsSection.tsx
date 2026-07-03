"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";

const GOOGLE_PROFILE_URL =
  "https://maps.app.goo.gl/ntjNnv32G5WLUfeL7?g_st=ac";

const ENTER_EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

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

function TitleLine({
  active,
  delay,
  accent = false,
  children,
}: {
  active: boolean;
  delay: number;
  accent?: boolean;
  children: React.ReactNode;
}) {
  return (
    <span className={`bw-review-title-mask ${accent ? "is-accent" : ""}`}>
      <motion.span
        initial={{
          y: "112%",
          opacity: 0,
          filter: "blur(5px)",
        }}
        animate={
          active
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
          duration: 0.76,
          delay,
          ease: ENTER_EASE,
        }}
        className="bw-review-title-line"
      >
        {children}
      </motion.span>
    </span>
  );
}

export default function ReviewsSection() {
  const [activeSlide, setActiveSlide] = useState(0);

  const headerRef = useRef<HTMLDivElement | null>(null);
  const carouselRef = useRef<HTMLDivElement | null>(null);

  const headerInView = useInView(headerRef, {
    once: true,
    amount: 0.26,
    margin: "0px 0px -14% 0px",
  });

  const carouselInView = useInView(carouselRef, {
    once: true,
    amount: 0.24,
    margin: "0px 0px -12% 0px",
  });

  const goPrevious = () => setActiveSlide(0);
  const goNext = () => setActiveSlide(1);

  const activeLabel =
    activeSlide === 0 ? "GOOGLE-PROFIL" : "KUNDENSTIMME";

  return (
    <>
      <section id="reviews" className="bw-reviews">
        <div className="bw-reviews-ambient bw-reviews-ambient-left" />
        <div className="bw-reviews-ambient bw-reviews-ambient-right" />

        <div className="bw-reviews-shell">
          <div ref={headerRef} className="bw-reviews-top">
            <div className="bw-reviews-heading">
              <motion.div
                initial={{
                  opacity: 0,
                  y: 14,
                  filter: "blur(5px)",
                }}
                animate={
                  headerInView
                    ? {
                        opacity: 1,
                        y: 0,
                        filter: "blur(0px)",
                      }
                    : {
                        opacity: 0,
                        y: 14,
                        filter: "blur(5px)",
                      }
                }
                transition={{
                  duration: 0.48,
                  delay: 0.02,
                  ease: ENTER_EASE,
                }}
                className="bw-reviews-kicker"
              >
                <span className="bw-reviews-kicker-dot" />
                <span>GOOGLE-BEWERTUNGEN</span>
              </motion.div>

              <h2 className="bw-reviews-title">
                <TitleLine active={headerInView} delay={0.08}>
                  Kundenstimmen.
                </TitleLine>

                <TitleLine active={headerInView} delay={0.18} accent>
                  Ohne Filter.
                </TitleLine>
              </h2>

              <motion.p
                initial={{
                  opacity: 0,
                  y: 18,
                  filter: "blur(6px)",
                }}
                animate={
                  headerInView
                    ? {
                        opacity: 1,
                        y: 0,
                        filter: "blur(0px)",
                      }
                    : {
                        opacity: 0,
                        y: 18,
                        filter: "blur(6px)",
                      }
                }
                transition={{
                  duration: 0.54,
                  delay: 0.34,
                  ease: ENTER_EASE,
                }}
                className="bw-reviews-copy"
              >
                Zwei Bewertungen aus realen Kundenprojekten — direkt bei Google
                einsehbar.
              </motion.p>
            </div>

            <motion.div
              initial={{
                opacity: 0,
                x: 34,
                y: 10,
                scale: 0.96,
                filter: "blur(8px)",
              }}
              animate={
                headerInView
                  ? {
                      opacity: 1,
                      x: 0,
                      y: 0,
                      scale: 1,
                      filter: "blur(0px)",
                    }
                  : {
                      opacity: 0,
                      x: 34,
                      y: 10,
                      scale: 0.96,
                      filter: "blur(8px)",
                    }
              }
              transition={{
                duration: 0.62,
                delay: 0.42,
                ease: ENTER_EASE,
              }}
              className="bw-reviews-score"
            >
              <div className="bw-reviews-score-icon">
                <GoogleGIcon className="bw-reviews-score-google-icon" />
              </div>

              <div className="bw-reviews-score-content">
                <strong>5.0</strong>
                <span>bei Google</span>
              </div>
            </motion.div>
          </div>

          <motion.div
            ref={carouselRef}
            initial={{
              opacity: 0,
              y: 46,
              scale: 0.975,
              filter: "blur(12px)",
            }}
            animate={
              carouselInView
                ? {
                    opacity: 1,
                    y: 0,
                    scale: 1,
                    filter: "blur(0px)",
                  }
                : {
                    opacity: 0,
                    y: 46,
                    scale: 0.975,
                    filter: "blur(12px)",
                  }
            }
            transition={{
              duration: 0.76,
              ease: ENTER_EASE,
            }}
            className="bw-review-carousel"
          >
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
                      <motion.div
                        initial={{
                          opacity: 0,
                          y: 24,
                          scale: 0.96,
                          filter: "blur(8px)",
                        }}
                        animate={
                          carouselInView
                            ? {
                                opacity: 1,
                                y: 0,
                                scale: 1,
                                filter: "blur(0px)",
                              }
                            : {
                                opacity: 0,
                                y: 24,
                                scale: 0.96,
                                filter: "blur(8px)",
                              }
                        }
                        transition={{
                          duration: 0.58,
                          delay: 0.14,
                          ease: ENTER_EASE,
                        }}
                        className="bw-google-main"
                      >
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

                        <p className="bw-google-rating-text">
                          5.0 Sterne · 2 Bewertungen
                        </p>
                      </motion.div>

                      <motion.a
                        initial={{
                          opacity: 0,
                          y: 18,
                          scale: 0.97,
                        }}
                        animate={
                          carouselInView
                            ? {
                                opacity: 1,
                                y: 0,
                                scale: 1,
                              }
                            : {
                                opacity: 0,
                                y: 18,
                                scale: 0.97,
                              }
                        }
                        transition={{
                          duration: 0.48,
                          delay: 0.34,
                          ease: ENTER_EASE,
                        }}
                        href={GOOGLE_PROFILE_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bw-google-button"
                      >
                        Google-Profil ansehen
                        <span>↗</span>
                      </motion.a>

                      <motion.div
                        initial={{
                          opacity: 0,
                          y: 12,
                          scale: 0.88,
                        }}
                        animate={
                          carouselInView
                            ? {
                                opacity: 1,
                                y: 0,
                                scale: 1,
                              }
                            : {
                                opacity: 0,
                                y: 12,
                                scale: 0.88,
                              }
                        }
                        transition={{
                          duration: 0.46,
                          delay: 0.46,
                          ease: ENTER_EASE,
                        }}
                        className="bw-google-proof"
                        aria-hidden="true"
                      >
                        <div className="bw-google-proof-badge">
                          <GoogleGIcon className="bw-google-proof-logo" />
                        </div>
                      </motion.div>
                    </div>
                  </div>
                </article>

                <article className="bw-review-slide">
                  <div className="bw-review-card">
                    <div className="bw-review-glow bw-review-glow-red" />
                    <div className="bw-review-glow bw-review-glow-blue" />

                    <div className="bw-review-card-content">
                      <motion.div
                        initial={{
                          opacity: 0,
                          y: 16,
                          filter: "blur(5px)",
                        }}
                        animate={
                          carouselInView
                            ? {
                                opacity: 1,
                                y: 0,
                                filter: "blur(0px)",
                              }
                            : {
                                opacity: 0,
                                y: 16,
                                filter: "blur(5px)",
                              }
                        }
                        transition={{
                          duration: 0.46,
                          delay: 0.16,
                          ease: ENTER_EASE,
                        }}
                        className="bw-review-meta"
                      >
                        <span>ÖFFENTLICHE GOOGLE-BEWERTUNG</span>
                        <div className="bw-review-stars">★★★★★</div>
                      </motion.div>

                      <motion.blockquote
                        initial={{
                          opacity: 0,
                          y: 22,
                          filter: "blur(7px)",
                        }}
                        animate={
                          carouselInView
                            ? {
                                opacity: 1,
                                y: 0,
                                filter: "blur(0px)",
                              }
                            : {
                                opacity: 0,
                                y: 22,
                                filter: "blur(7px)",
                              }
                        }
                        transition={{
                          duration: 0.58,
                          delay: 0.3,
                          ease: ENTER_EASE,
                        }}
                        className="bw-review-body"
                      >
                        „Bereits der erste Entwurf entsprach perfekt meinen
                        Vorstellungen. Die Kommunikation war stets freundlich,
                        unkompliziert und schnell.“
                      </motion.blockquote>

                      <motion.div
                        initial={{
                          opacity: 0,
                          y: 18,
                          filter: "blur(5px)",
                        }}
                        animate={
                          carouselInView
                            ? {
                                opacity: 1,
                                y: 0,
                                filter: "blur(0px)",
                              }
                            : {
                                opacity: 0,
                                y: 18,
                                filter: "blur(5px)",
                              }
                        }
                        transition={{
                          duration: 0.52,
                          delay: 0.44,
                          ease: ENTER_EASE,
                        }}
                        className="bw-review-footer"
                      >
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
                      </motion.div>
                    </div>
                  </div>
                </article>
              </div>
            </div>

            <motion.div
              initial={{
                opacity: 0,
                y: 18,
              }}
              animate={
                carouselInView
                  ? {
                      opacity: 1,
                      y: 0,
                    }
                  : {
                      opacity: 0,
                      y: 18,
                    }
              }
              transition={{
                duration: 0.46,
                delay: 0.3,
                ease: ENTER_EASE,
              }}
              className="bw-review-navigation"
            >
              <button
                type="button"
                className="bw-review-nav-button"
                onClick={goPrevious}
                disabled={activeSlide === 0}
                aria-label="Google-Profil anzeigen"
              >
                ←
              </button>

              <div className="bw-review-progress" aria-live="polite">
                <span className="bw-review-progress-label">{activeLabel}</span>

                <div className="bw-review-progress-line" aria-hidden="true">
                  <span
                    className={`bw-review-progress-fill ${
                      activeSlide === 1 ? "is-review-active" : ""
                    }`}
                  />
                </div>

                <strong>0{activeSlide + 1}</strong>
                <em>/</em>
                <span>02</span>
              </div>

              <button
                type="button"
                className="bw-review-nav-button"
                onClick={goNext}
                disabled={activeSlide === 1}
                aria-label="Kundenstimme anzeigen"
              >
                →
              </button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <style>{`
        .bw-reviews {
          position: relative;
          isolation: isolate;
          overflow: hidden;
          padding: 126px 20px 122px;
          background: #f6f3ee;
          color: #111114;
        }

        .bw-reviews::before {
          content: "";
          position: absolute;
          inset: 0;
          z-index: -3;
          background:
            radial-gradient(circle at 12% 14%, rgba(219, 49, 80, 0.10), transparent 29%),
            radial-gradient(circle at 88% 74%, rgba(45, 94, 255, 0.09), transparent 34%),
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
          width: 340px;
          height: 340px;
          left: -190px;
          top: 300px;
          background: rgba(219, 49, 80, 0.10);
        }

        .bw-reviews-ambient-right {
          width: 390px;
          height: 390px;
          right: -205px;
          bottom: 70px;
          background: rgba(65, 93, 255, 0.10);
        }

        .bw-reviews-shell {
          width: min(1120px, 100%);
          margin: 0 auto;
        }

        .bw-reviews-top {
          display: grid;
          grid-template-columns: minmax(0, 1fr) minmax(260px, 0.35fr);
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
          color: #db3150;
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
          background: #db3150;
          box-shadow: 0 0 18px rgba(219, 49, 80, 0.46);
          animation: bw-kicker-pulse 2.4s ease-in-out infinite;
        }

        .bw-reviews-title {
          max-width: 760px;
          margin: 24px 0 0;
          color: #121217;
          font-family: "Iowan Old Style", "Baskerville", Georgia, serif;
          font-size: clamp(50px, 6vw, 82px);
          font-weight: 400;
          line-height: 0.93;
          letter-spacing: -0.067em;
          text-wrap: balance;
        }

        .bw-review-title-mask {
          display: block;
          overflow: hidden;
          padding-bottom: 0.06em;
          color: #121217;
        }

        .bw-review-title-mask.is-accent {
          color: #db3150;
        }

        .bw-review-title-line {
          display: block;
          color: inherit;
          will-change: transform, opacity, filter;
        }

        .bw-reviews-copy {
          max-width: 630px;
          margin: 30px 0 0;
          color: rgba(26, 26, 33, 0.66);
          font-size: clamp(18px, 1.55vw, 23px);
          line-height: 1.42;
          letter-spacing: -0.03em;
        }

        .bw-reviews-score {
          display: flex;
          align-items: center;
          gap: 17px;
          padding-bottom: 8px;
        }

        .bw-reviews-score-icon {
          display: grid;
          width: 48px;
          height: 48px;
          flex: 0 0 auto;
          place-items: center;
          border-radius: 50%;
          background: #ffffff;
          box-shadow: 0 12px 28px rgba(18, 18, 24, 0.10);
        }

        .bw-reviews-score-google-icon {
          width: 25px;
          height: 25px;
        }

        .bw-reviews-score-content {
          display: flex;
          flex-direction: column;
        }

        .bw-reviews-score-content strong {
          color: #111114;
          font-size: clamp(48px, 5vw, 66px);
          font-weight: 700;
          line-height: 0.82;
          letter-spacing: -0.07em;
        }

        .bw-reviews-score-content span {
          margin-top: 9px;
          color: rgba(22, 22, 28, 0.68);
          font-size: 15px;
          font-weight: 700;
        }

        .bw-review-carousel {
          margin-top: 68px;
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
          height: 452px;
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
          background: rgba(219, 49, 80, 0.30);
        }

        .bw-google-glow-blue {
          width: 250px;
          height: 250px;
          left: 50%;
          top: 48%;
          transform: translate(-50%, -50%);
          background: rgba(37, 106, 255, 0.15);
        }

        .bw-google-card-content {
          position: relative;
          z-index: 2;
          display: flex;
          height: 100%;
          box-sizing: border-box;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 21px;
          padding: 34px 28px 30px;
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
          font-size: clamp(52px, 7vw, 76px);
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
          margin-top: 18px;
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

        .bw-google-rating-text {
          margin: 13px 0 0;
          color: rgba(255,255,255,0.62);
          font-size: 13px;
          font-weight: 650;
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
          width: 48px;
          height: 48px;
          border-radius: 50%;
          background: rgba(255,255,255,0.96);
          box-shadow: 0 8px 28px rgba(0,0,0,0.16);
        }

        .bw-google-proof-logo {
          width: 25px;
          height: 25px;
          display: block;
        }

        .bw-review-glow-red {
          width: 360px;
          height: 360px;
          right: -150px;
          bottom: -180px;
          background: rgba(219, 49, 80, 0.38);
        }

        .bw-review-glow-blue {
          width: 350px;
          height: 350px;
          left: -160px;
          top: -160px;
          background: rgba(62, 82, 255, 0.30);
        }

        .bw-review-card-content {
          position: relative;
          z-index: 2;
          display: flex;
          height: 100%;
          box-sizing: border-box;
          flex-direction: column;
          align-items: flex-start;
          padding: 38px 40px 34px;
        }

        .bw-review-meta {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          gap: 11px;
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
          max-width: 810px;
          margin: 28px 0 0;
          color: rgba(255,255,255,0.93);
          font-size: clamp(21px, 2.3vw, 31px);
          font-style: normal;
          font-weight: 400;
          letter-spacing: -0.035em;
          line-height: 1.32;
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
          display: grid;
          grid-template-columns: auto minmax(190px, 1fr) auto;
          gap: 22px;
          align-items: center;
          width: min(560px, 100%);
          margin: 32px auto 0;
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
          opacity: 0.26;
        }

        .bw-review-progress {
          display: grid;
          grid-template-columns: auto 1fr auto auto auto;
          gap: 10px;
          align-items: center;
          color: rgba(21,21,26,0.48);
          font-size: 11px;
          font-style: normal;
          font-weight: 800;
          letter-spacing: 0.12em;
        }

        .bw-review-progress-label {
          color: rgba(21,21,26,0.67);
          font-size: 10px;
          letter-spacing: 0.14em;
        }

        .bw-review-progress-line {
          position: relative;
          min-width: 54px;
          height: 1px;
          overflow: hidden;
          background: rgba(21,21,26,0.20);
        }

        .bw-review-progress-fill {
          position: absolute;
          inset: 0;
          display: block;
          width: 50%;
          background: #db3150;
          transition: transform 500ms cubic-bezier(0.22, 1, 0.36, 1);
        }

        .bw-review-progress-fill.is-review-active {
          transform: translateX(100%);
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
            opacity: 0.80;
            filter: drop-shadow(0 0 0 rgba(255,216,93,0));
          }

          50% {
            transform: translateY(-2px) scale(1.10);
            opacity: 1;
            filter: drop-shadow(0 0 14px rgba(255,216,93,0.82));
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
            padding: 98px 20px 104px;
          }

          .bw-reviews-top {
            grid-template-columns: 1fr;
            gap: 38px;
          }

          .bw-reviews-title {
            max-width: 100%;
            font-size: clamp(41px, 11vw, 54px);
            line-height: 0.93;
            letter-spacing: -0.065em;
            text-wrap: initial;
          }

          .bw-reviews-copy {
            max-width: 100%;
            font-size: 19px;
            line-height: 1.45;
          }

          .bw-reviews-score {
            gap: 15px;
          }

          .bw-reviews-score-content strong {
            font-size: 54px;
          }

          .bw-review-carousel {
            margin-top: 54px;
          }

          .bw-review-viewport,
          .bw-google-card,
          .bw-review-card {
            border-radius: 28px;
          }

          .bw-google-card,
          .bw-review-card {
            height: 438px;
          }

          .bw-google-card-content {
            gap: 19px;
            padding: 30px 22px 26px;
          }

          .bw-google-word {
            font-size: 62px;
          }

          .bw-google-stars {
            margin-top: 16px;
          }

          .bw-review-card-content {
            padding: 30px 24px 26px;
          }

          .bw-review-body {
            margin-top: 23px;
            font-size: 22px;
            line-height: 1.34;
          }

          .bw-review-author strong {
            font-size: 18px;
          }

          .bw-review-author span {
            font-size: 13px;
          }

          .bw-review-source {
            font-size: 12px;
          }

          .bw-review-navigation {
            grid-template-columns: auto minmax(0, 1fr) auto;
            gap: 14px;
            width: 100%;
            margin-top: 28px;
          }

          .bw-review-progress {
            grid-template-columns: 1fr auto auto auto;
            gap: 8px;
          }

          .bw-review-progress-label {
            grid-column: 1 / -1;
            font-size: 9px;
          }

          .bw-review-progress-line {
            min-width: 0;
          }
        }

        @media (max-width: 420px) {
          .bw-reviews {
            padding-right: 18px;
            padding-left: 18px;
          }

          .bw-reviews-kicker {
            font-size: 10px;
            letter-spacing: 0.14em;
          }

          .bw-reviews-title {
            font-size: 42px;
            line-height: 0.94;
          }

          .bw-reviews-copy {
            font-size: 18px;
            line-height: 1.45;
          }

          .bw-reviews-score-content strong {
            font-size: 51px;
          }

          .bw-reviews-score-content span {
            font-size: 14px;
          }

          .bw-google-card,
          .bw-review-card {
            height: 430px;
          }

          .bw-google-word {
            font-size: 56px;
          }

          .bw-google-button {
            width: 100%;
            padding: 16px 22px;
          }

          .bw-review-body {
            font-size: 20px;
          }

          .bw-review-nav-button {
            width: 50px;
            height: 50px;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .bw-reviews-kicker-dot,
          .bw-google-stars span {
            animation: none;
          }
        }
      `}</style>
    </>
  );
}