"use client";

import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

type Phase = "intro" | "launch";

type FlightTarget = {
  x: number;
  y: number;
  scale: number;
};

const INTRO_LOGO_SRC = "/bw-logo-intro.png";
const FALLBACK_LOGO_SRC = "/bw-logo.png";

const LAUNCH_DELAY_MS = 3400;

// Important: nu mai folosi 2.15.
// Logo-ul trebuie să ajungă exact la dimensiunea imaginii din header.
const FLIGHT_SCALE_VISUAL_CORRECTION = 1;

export default function IntroLoader() {
  const [visible, setVisible] = useState(true);
  const [phase, setPhase] = useState<Phase>("intro");

  const [target, setTarget] = useState<FlightTarget>({
    x: 0,
    y: -220,
    scale: 0.18,
  });

  const introLogoRef = useRef<HTMLDivElement | null>(null);
  const headerLogoRef = useRef<HTMLImageElement | null>(null);
  const previousBodyOverflow = useRef("");

  useEffect(() => {
    previousBodyOverflow.current = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const headerLogo = document.querySelector<HTMLImageElement>(
      "#bw-header-logo-anchor img",
    );

    if (headerLogo) {
      headerLogoRef.current = headerLogo;
      headerLogo.style.transition = "opacity 180ms ease";
      headerLogo.style.opacity = "0";
    }

    const calculateFlight = () => {
      const introLogo = introLogoRef.current;
      const realHeaderLogo = document.querySelector<HTMLImageElement>(
        "#bw-header-logo-anchor img",
      );

      if (!introLogo || !realHeaderLogo) return false;

      headerLogoRef.current = realHeaderLogo;

      const source = introLogo.getBoundingClientRect();
      const destination = realHeaderLogo.getBoundingClientRect();

      setTarget({
        x:
          destination.left +
          destination.width / 2 -
          (source.left + source.width / 2),

        y:
          destination.top +
          destination.height / 2 -
          (source.top + source.height / 2),

        scale:
          (destination.width / source.width) * FLIGHT_SCALE_VISUAL_CORRECTION,
      });

      return true;
    };

    const frame = window.requestAnimationFrame(calculateFlight);

    const resizeHandler = () => {
      calculateFlight();
    };

    window.addEventListener("resize", resizeHandler);

    const launchTimer = window.setTimeout(() => {
      const hasTarget = calculateFlight();

      if (hasTarget) {
        setPhase("launch");
        return;
      }

      if (headerLogoRef.current) {
        headerLogoRef.current.style.opacity = "1";
      }

      window.dispatchEvent(new Event("boran:intro-complete"));
      document.documentElement.dataset.boranIntroComplete = "true";
      document.body.style.overflow = previousBodyOverflow.current;
      setVisible(false);
    }, LAUNCH_DELAY_MS);

    return () => {
      window.cancelAnimationFrame(frame);
      window.clearTimeout(launchTimer);
      window.removeEventListener("resize", resizeHandler);

      document.body.style.overflow = previousBodyOverflow.current;

      if (headerLogoRef.current) {
        headerLogoRef.current.style.opacity = "1";
      }
    };
  }, []);

  const launching = phase === "launch";

  const finishIntro = () => {
    if (!launching) return;

    if (headerLogoRef.current) {
      headerLogoRef.current.style.opacity = "1";
    }

    window.dispatchEvent(new Event("boran:intro-complete"));
    document.documentElement.dataset.boranIntroComplete = "true";
    document.body.style.overflow = previousBodyOverflow.current;

    window.setTimeout(() => {
      setVisible(false);
    }, 70);
  };

  if (!visible) return null;

  return (
    <>
      <motion.div
        className="fixed inset-0 z-[9999] overflow-hidden bg-black"
        initial={{ opacity: 1 }}
        animate={{ opacity: launching ? 0 : 1 }}
        transition={{
          duration: 0.38,
          delay: launching ? 0.54 : 0,
          ease: [0.22, 1, 0.36, 1],
        }}
      >
        <div className="absolute inset-0 bg-black" />

        <div className="relative z-10 flex h-full items-center justify-center px-6">
          <div className="flex flex-col items-center">
            <motion.div
              ref={introLogoRef}
              initial={{
                opacity: 0,
                y: -420,
                scale: 0.92,
                filter: "blur(8px)",
              }}
              animate={
                launching
                  ? {
                      opacity: 1,
                      x: target.x,
                      y: target.y,
                      scale: target.scale,
                      filter: "blur(0px)",
                    }
                  : {
                      opacity: [0, 1, 1, 1],
                      x: 0,
                      y: [-420, 22, -8, 0],
                      scale: [0.92, 1.018, 0.994, 1],
                      filter: [
                        "blur(8px)",
                        "blur(0px)",
                        "blur(0px)",
                        "blur(0px)",
                      ],
                    }
              }
              transition={
                launching
                  ? {
                      duration: 0.86,
                      ease: [0.22, 1, 0.36, 1],
                    }
                  : {
                      duration: 1.45,
                      delay: 0.22,
                      times: [0, 0.66, 0.84, 1],
                      ease: [0.16, 1, 0.3, 1],
                    }
              }
              onAnimationComplete={finishIntro}
              className="relative w-[340px] max-w-[94vw] will-change-transform md:w-[480px]"
              style={{ transformOrigin: "center center" }}
            >
              <img
                src={INTRO_LOGO_SRC}
                alt="Boran Webdesign"
                draggable={false}
                className="block w-full select-none object-contain [mix-blend-mode:screen]"
                onError={(event) => {
                  event.currentTarget.src = FALLBACK_LOGO_SRC;
                }}
              />
            </motion.div>

            <div className="mt-6 overflow-hidden md:mt-7">
              <motion.p
                initial={{
                  opacity: 0,
                  y: 32,
                }}
                animate={
                  launching
                    ? {
                        opacity: 0,
                        y: -16,
                      }
                    : {
                        opacity: 1,
                        y: 0,
                      }
                }
                transition={{
                  duration: launching ? 0.24 : 0.72,
                  delay: launching ? 0 : 1.55,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="m-0 text-center font-serif text-[0.92rem] uppercase tracking-[0.18em] text-white/86 md:text-[1.08rem]"
              >
                Boran Webdesign
              </motion.p>
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
}