"use client";

import { motion } from "framer-motion";
import type { CSSProperties } from "react";

const orbitGradient = `
  conic-gradient(
    from 0deg,
    transparent 0deg,
    transparent 32deg,
    rgba(255, 58, 108, 0.12) 42deg,
    rgba(255, 68, 122, 0.95) 52deg,
    rgba(255, 166, 192, 1) 61deg,
    rgba(255, 68, 122, 0.16) 76deg,
    transparent 92deg,
    transparent 196deg,
    rgba(72, 130, 255, 0.12) 207deg,
    rgba(79, 140, 255, 0.95) 218deg,
    rgba(174, 203, 255, 1) 228deg,
    rgba(79, 140, 255, 0.16) 244deg,
    transparent 262deg,
    transparent 360deg
  )
`;

const ringMask = {
  padding: "1.5px",
  WebkitMask:
    "linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0)",
  WebkitMaskComposite: "xor",
  maskComposite: "exclude",
} as CSSProperties;

export default function SiteHeader() {
  return (
    <header className="fixed inset-x-0 top-0 z-[999] px-4 pt-5 md:px-8">
      <nav className="relative mx-auto max-w-[1440px]">
        <div className="relative overflow-hidden rounded-[28px] border border-white/[0.13] bg-[#09090d]/[0.92] p-[1.5px] shadow-[0_18px_60px_rgba(0,0,0,0.62)]">
          {/* lumină roșu/albastru animată, decupată strict pe contur */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 z-[1] rounded-[inherit]"
            style={ringMask}
          >
            <motion.div
              className="absolute -inset-[115%]"
              style={{
                background: orbitGradient,
                filter:
                  "drop-shadow(0 0 8px rgba(255,72,120,0.58)) drop-shadow(0 0 10px rgba(82,142,255,0.58))",
              }}
              animate={{ rotate: 360 }}
              transition={{
                duration: 7.5,
                repeat: Infinity,
                ease: "linear",
              }}
            />
          </div>

          <div className="relative z-10 flex items-center justify-between gap-3 rounded-[26px] bg-[#07070a]/[0.97] px-3 py-3 backdrop-blur-2xl md:px-5">
            <a
              href="#start"
              className="flex min-w-0 items-center gap-3 text-white no-underline"
            >
              <div
  id="bw-header-logo-anchor"
  className="grid h-[3.15rem] w-[3.15rem] shrink-0 place-items-center overflow-hidden rounded-[16px] border border-white/[0.12] bg-black shadow-[inset_0_1px_0_rgba(255,255,255,0.08),0_0_18px_rgba(255,255,255,0.06)]"
>
  <img
    src="/bw-logo.png"
    alt="Boran Webdesign Logo"
    className="block h-[94%] w-[94%] translate-x-[1px] -translate-y-[1px] object-contain"
  />
</div>

              <div className="min-w-0">
                <p className="m-0 whitespace-nowrap font-serif text-[0.95rem] font-semibold uppercase leading-none tracking-[0.075em] text-white md:text-[1.08rem]">
                  Boran Webdesign
                </p>

                <p className="m-0 mt-1 whitespace-nowrap font-mono text-[0.52rem] uppercase tracking-[0.19em] text-white/55 md:text-[0.6rem]">
                  Premium Websites
                </p>
              </div>
            </a>

            <div className="hidden items-center gap-9 lg:flex">
              <a
                href="#start"
                className="text-[0.94rem] text-white/70 no-underline transition hover:text-white"
              >
                Start
              </a>

              <a
                href="#prozess"
                className="text-[0.94rem] text-white/70 no-underline transition hover:text-white"
              >
                Ablauf
              </a>

              <a
                href="#kontakt"
                className="text-[0.94rem] text-white/70 no-underline transition hover:text-white"
              >
                Kontakt
              </a>
            </div>

            <a
  href="#kontakt"
  aria-label="Projekt anfragen"
  className="group inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-white/[0.16] bg-white text-black no-underline shadow-[0_0_28px_rgba(255,255,255,0.2),0_12px_32px_rgba(255,255,255,0.12)] transition hover:-translate-y-0.5 hover:shadow-[0_0_38px_rgba(255,255,255,0.28),0_16px_42px_rgba(255,255,255,0.18)] sm:h-auto sm:w-auto sm:min-h-11 sm:gap-2 sm:px-5"
>
  <span className="hidden sm:inline text-[0.82rem] font-bold tracking-[0.02em]">
    PROJEKT ANFRAGEN
  </span>

  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.9"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="h-[1.1rem] w-[1.1rem] transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
    aria-hidden="true"
  >
    <path d="M7 17 17 7" />
    <path d="M8 7h9v9" />
  </svg>
</a>
          </div>
        </div>
      </nav>
    </header>
  );
}