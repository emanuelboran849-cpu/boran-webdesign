"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

type Phase = "intro" | "launch";

type FlightTarget = {
  x: number;
  y: number;
  scale: number;
};

export default function IntroLoader() {
  const [visible, setVisible] = useState(true);
  const [phase, setPhase] = useState<Phase>("intro");

  const [target, setTarget] = useState<FlightTarget>({
    x: 0,
    y: -220,
    scale: 0.2,
  });

  const introLogoRef = useRef<HTMLDivElement | null>(null);
  const headerLogoRef = useRef<HTMLImageElement | null>(null);

  useEffect(() => {
    const headerLogo = document.querySelector<HTMLImageElement>(
      "#bw-header-logo-anchor img",
    );

    if (headerLogo) {
      headerLogoRef.current = headerLogo;
      headerLogo.style.transition = "opacity 160ms ease";
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

        scale: destination.width / source.width,
      });

      return true;
    };

    const frame = requestAnimationFrame(calculateFlight);

    const launchTimer = window.setTimeout(() => {
      const hasTarget = calculateFlight();

      if (hasTarget) {
        setPhase("launch");
      }
    }, 3200);

    return () => {
      cancelAnimationFrame(frame);
      window.clearTimeout(launchTimer);

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

    window.setTimeout(() => {
      setVisible(false);
    }, 130);
  };

  if (!visible) return null;

  return (
    <div className="fixed inset-0 z-[9999] overflow-hidden bg-black">
      <motion.div
        className="absolute inset-0 bg-black"
        initial={{ opacity: 1 }}
        animate={{ opacity: launching ? 0 : 1 }}
        transition={{
          duration: 0.72,
          delay: launching ? 0.14 : 0,
          ease: [0.22, 1, 0.36, 1],
        }}
      />

      <div className="relative z-10 flex h-full items-center justify-center px-6">
        <div className="flex flex-col items-center">
          <motion.div
            ref={introLogoRef}
            initial={{
              opacity: 0,
              y: 24,
              scale: 0.9,
            }}
            animate={
              launching
                ? {
                    opacity: 1,
                    x: target.x,
                    y: target.y,
                    scale: target.scale,
                  }
                : {
                    opacity: 1,
                    x: 0,
                    y: 0,
                    scale: 1,
                  }
            }
            transition={
              launching
                ? {
                    duration: 0.82,
                    ease: [0.22, 1, 0.36, 1],
                  }
                : {
                    duration: 0.9,
                    ease: [0.22, 1, 0.36, 1],
                  }
            }
            onAnimationComplete={finishIntro}
            className="relative isolate w-[220px] will-change-transform md:w-[310px]"
            style={{ transformOrigin: "center center" }}
          >
            {/* glow în spatele logo-ului, nu peste el */}
            <motion.div
              aria-hidden="true"
              className="pointer-events-none absolute inset-[-26%] z-0 rounded-full bg-[radial-gradient(circle,rgba(255,255,255,0.16)_0%,rgba(255,255,255,0.055)_40%,transparent_72%)] blur-[30px]"
              animate={
                launching
                  ? { opacity: 0, scale: 0.82 }
                  : {
                      opacity: [0.16, 0.42, 0.16],
                      scale: [0.92, 1.07, 0.92],
                    }
              }
              transition={
                launching
                  ? { duration: 0.2, ease: "easeOut" }
                  : {
                      duration: 3.2,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }
              }
            />

            {/* logo clar, fără blur / brightness / contrast */}
            <img
              src="/bw-logo.png"
              alt="Boran Webdesign"
              className="relative z-10 block w-full select-none object-contain"
              draggable={false}
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            animate={
              launching
                ? { opacity: 0, scaleX: 0.7, y: -10 }
                : { opacity: 1, scaleX: 1, y: 0 }
            }
            transition={{
              duration: launching ? 0.24 : 0.72,
              delay: launching ? 0 : 0.66,
              ease: "easeOut",
            }}
            className="mt-7 h-px w-28 origin-center bg-gradient-to-r from-transparent via-white/55 to-transparent"
          />

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={
              launching
                ? { opacity: 0, y: -10 }
                : { opacity: 1, y: 0 }
            }
            transition={{
              duration: launching ? 0.24 : 0.56,
              delay: launching ? 0 : 0.98,
              ease: "easeOut",
            }}
            className="mt-4 text-center font-mono text-[0.56rem] font-medium uppercase tracking-[0.31em] text-white/44 md:text-[0.66rem]"
          >
            Premium Digital Presence
          </motion.p>
        </div>
      </div>
    </div>
  );
}