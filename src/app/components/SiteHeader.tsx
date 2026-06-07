"use client";

import { useEffect, useState } from "react";

export default function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    let frameId: number;

    const checkScroll = () => {
      const y =
        window.scrollY ||
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop ||
        document.scrollingElement?.scrollTop ||
        0;

      const nextState = y > 90;

      setScrolled((current) => {
        if (current === nextState) return current;
        return nextState;
      });

      frameId = window.requestAnimationFrame(checkScroll);
    };

    frameId = window.requestAnimationFrame(checkScroll);

    return () => {
      window.cancelAnimationFrame(frameId);
    };
  }, []);

  return (
    <header className="fixed left-0 right-0 top-0 z-[999] px-4 pt-5">
      <nav
        className={[
          "mx-auto flex max-w-7xl items-center justify-between transition-all duration-500",
          scrolled
            ? "rounded-2xl border border-white/10 bg-black/60 px-3 py-2.5 shadow-[0_14px_55px_rgba(0,0,0,0.55)] backdrop-blur-xl"
            : "border-0 bg-transparent px-0 py-1 shadow-none",
        ].join(" ")}
      >
        <div className="flex min-w-0 items-center gap-3">
          <div
            className={[
              "grid shrink-0 place-items-center rounded-xl text-sm font-bold transition-all duration-500",
              scrolled
                ? "h-9 w-9 border border-white/15 bg-white/10 shadow-[0_0_30px_rgba(139,92,246,0.25)]"
                : "h-11 w-11 border border-white/10 bg-white/5 shadow-[0_0_50px_rgba(139,92,246,0.25)] backdrop-blur",
            ].join(" ")}
          >
            BW
          </div>

          <div className="min-w-0">
            <p
              className={[
                "truncate font-semibold tracking-wide text-white transition-all duration-500",
                scrolled ? "text-sm" : "text-base md:text-sm",
              ].join(" ")}
            >
              Boran Webdesign
            </p>

            <p
              className={[
                "text-white/45 transition-all duration-500",
                scrolled ? "text-xs" : "text-sm md:text-xs",
              ].join(" ")}
            >
              Premium Websites
            </p>
          </div>
        </div>

        <div className="hidden items-center gap-8 text-sm text-white/65 md:flex">
          <a href="#konzepte" className="hover:text-white">
            Konzepte
          </a>
          <a href="#angebot" className="hover:text-white">
            Angebot
          </a>
          <a href="#prozess" className="hover:text-white">
            Ablauf
          </a>
        </div>

        <a
          href="https://wa.me/"
          className={[
            "rounded-full border text-sm font-bold text-black transition-all duration-500 hover:scale-105",
            scrolled
              ? "border-white/15 bg-white px-4 py-2"
              : "border-white/20 bg-white px-5 py-3 shadow-[0_0_50px_rgba(255,255,255,0.15)]",
          ].join(" ")}
        >
          Anfrage
          <span className="hidden sm:inline"> starten</span>
        </a>
      </nav>
    </header>
  );
}