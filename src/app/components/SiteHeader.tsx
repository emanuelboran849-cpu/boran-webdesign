"use client";

import { AnimatePresence, motion } from "framer-motion";
import type { CSSProperties, FormEvent } from "react";
import { useEffect, useState } from "react";

const PHONE_NUMBER = "+4915561950565";
const WEB3FORMS_ACCESS_KEY = "6361b508-bdfc-4d14-a2fa-89818394a083";

type SubmitState = "idle" | "loading" | "success" | "error";

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

const mobileOrbitGradient = `
  conic-gradient(
    from 0deg,
    transparent 0deg,
    transparent 245deg,
    rgba(255,255,255,0.10) 264deg,
    rgba(255,255,255,0.85) 286deg,
    rgba(219,49,80,0.52) 306deg,
    rgba(255,255,255,0.18) 326deg,
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

function PhoneIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.9"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-[1.08rem] w-[1.08rem] md:h-[1.05rem] md:w-[1.05rem]"
      aria-hidden="true"
    >
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.78 19.78 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.78 19.78 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.12.9.33 1.77.62 2.6a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.48-1.19a2 2 0 0 1 2.11-.45c.83.29 1.7.5 2.6.62A2 2 0 0 1 22 16.92Z" />
    </svg>
  );
}

function ArrowIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.9"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-[1.08rem] w-[1.08rem] transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 md:h-[1.1rem] md:w-[1.1rem]"
      aria-hidden="true"
    >
      <path d="M7 17 17 7" />
      <path d="M8 7h9v9" />
    </svg>
  );
}

export default function SiteHeader() {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [submitState, setSubmitState] = useState<SubmitState>("idle");

  useEffect(() => {
    const openForm = () => {
      setSubmitState("idle");
      setIsFormOpen(true);
    };

    window.addEventListener("boran:open-lead-form", openForm);

    return () => {
      window.removeEventListener("boran:open-lead-form", openForm);
    };
  }, []);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (submitState === "loading") return;

    const form = event.currentTarget;
    const formData = new FormData(form);

    const name = String(formData.get("name") || "").trim();
    const business = String(formData.get("business") || "").trim();
    const contact = String(formData.get("contact") || "").trim();
    const message = String(formData.get("message") || "").trim();

    setSubmitState("loading");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: WEB3FORMS_ACCESS_KEY,
          subject: `Neue Website-Anfrage – ${
            business || name || "Boran Webdesign"
          }`,
          from_name: "Boran Webdesign Website",
          name,
          unternehmen_branche: business,
          kontaktmoeglichkeit: contact,
          nachricht: message,
          quelle: "Header Formular",
        }),
      });

      const result = await response.json();

      if (!result.success) {
        throw new Error("Web3Forms submission failed");
      }

      form.reset();
      setSubmitState("success");
    } catch (error) {
      console.error(error);
      setSubmitState("error");
    }
  };

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-[999] px-5 pt-[calc(env(safe-area-inset-top)+0.74rem)] md:px-8 md:pt-5">
        <nav className="relative mx-auto w-full max-w-[980px]">
          <div className="relative md:overflow-hidden md:rounded-[28px] md:border md:border-white/[0.13] md:bg-[#09090d]/[0.92] md:p-[1.5px] md:shadow-[0_16px_54px_rgba(0,0,0,0.58)]">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 z-[1] hidden rounded-[inherit] md:block"
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

            <div className="relative z-10 flex items-start justify-between gap-4 md:items-center md:rounded-[26px] md:bg-[#07070a]/[0.97] md:px-4 md:py-3 md:backdrop-blur-2xl">
              <a
                href="#start"
                className="flex min-w-0 items-center gap-2.5 text-white no-underline md:gap-3"
              >
                <div
  id="bw-header-logo-anchor"
  className="relative grid h-[4.25rem] w-[4.25rem] shrink-0 place-items-center overflow-hidden rounded-[22px] border border-white/[0.11] bg-black shadow-[0_16px_34px_rgba(0,0,0,0.52),inset_0_1px_0_rgba(255,255,255,0.05)] backdrop-blur-2xl md:h-[2.85rem] md:w-[2.85rem] md:rounded-[15px] md:border-white/[0.12] md:bg-black md:shadow-[inset_0_1px_0_rgba(255,255,255,0.08),0_0_18px_rgba(255,255,255,0.06)]"
>
                  <span
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-0 z-0 block rounded-[inherit] md:hidden"
                    style={ringMask}
                  >
                    <motion.span
                      className="absolute -inset-[120%] block"
                      style={{
                        background: mobileOrbitGradient,
                        filter:
                          "drop-shadow(0 0 9px rgba(255,255,255,0.34)) drop-shadow(0 0 12px rgba(219,49,80,0.2))",
                      }}
                      animate={{ rotate: 360 }}
                      transition={{
                        duration: 6.2,
                        repeat: Infinity,
                        ease: "linear",
                      }}
                    />
                  </span>

                  <span
                    aria-hidden="true"
                    className="absolute inset-0 z-0 rounded-[inherit] bg-[radial-gradient(circle_at_70%_15%,rgba(255,255,255,0.08),transparent_28%),radial-gradient(circle_at_10%_90%,rgba(219,49,80,0.08),transparent_32%)] md:hidden"
                  />

                  <img
                    src="/bw-logo.png"
                    alt="Boran Webdesign Logo"
                    className="relative z-10 block h-[82%] w-[82%] translate-x-[1px] -translate-y-[1px] object-contain md:h-[94%] md:w-[94%]"
                  />
                </div>

                <div className="hidden min-w-0 md:block">
                  <p className="m-0 whitespace-nowrap font-serif text-[1rem] font-semibold uppercase leading-none tracking-[0.07em] text-white">
                    Boran Webdesign
                  </p>

                  <p className="m-0 mt-1 whitespace-nowrap font-mono text-[0.56rem] uppercase tracking-[0.18em] text-white/55">
                    Premium Websites
                  </p>
                </div>
              </a>

              <div className="hidden items-center gap-7 lg:flex">
                <a
                  href="#start"
                  className="text-[0.86rem] text-white/70 no-underline transition hover:text-white"
                >
                  Start
                </a>

                <a
                  href="#ablauf"
                  className="text-[0.86rem] text-white/70 no-underline transition hover:text-white"
                >
                  Prinzipien
                </a>

                <a
                  href="#contact"
                  className="text-[0.86rem] text-white/70 no-underline transition hover:text-white"
                >
                  Kontakt
                </a>
              </div>

              <div className="relative overflow-hidden rounded-[22px] border border-white/[0.1] bg-[#07070a]/[0.92] p-[1.5px] shadow-[0_16px_36px_rgba(0,0,0,0.52)] backdrop-blur-2xl md:static md:overflow-visible md:rounded-none md:border-0 md:bg-transparent md:p-0 md:shadow-none md:backdrop-blur-0">
                <span
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-0 z-0 block rounded-[inherit] md:hidden"
                  style={ringMask}
                >
                  <motion.span
                    className="absolute -inset-[120%] block"
                    style={{
                      background: mobileOrbitGradient,
                      filter:
                        "drop-shadow(0 0 9px rgba(255,255,255,0.34)) drop-shadow(0 0 12px rgba(219,49,80,0.2))",
                    }}
                    animate={{ rotate: 360 }}
                    transition={{
                      duration: 6.2,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                  />
                </span>

                 <div className="relative z-10 flex items-center gap-1.5 rounded-[20px] border border-white/[0.06] bg-[#040406]/[0.96] p-1.5 shadow-[inset_0_1px_0_rgba(255,255,255,0.05)] md:rounded-none md:border-0 md:bg-transparent md:p-0 md:shadow-none">
                  <a
                    href={`tel:${PHONE_NUMBER}`}
                    aria-label="Telefonisch anfragen"
                    className="grid h-[2.95rem] w-[2.95rem] place-items-center rounded-[14px] bg-[#db3150] text-white no-underline shadow-[inset_0_1px_0_rgba(255,255,255,0.18),0_8px_22px_rgba(219,49,80,0.3)] transition hover:-translate-y-0.5 hover:bg-[#e13c5b] md:h-10 md:w-10 md:rounded-full md:border md:border-white/[0.16] md:bg-white/[0.08] md:text-white md:shadow-[inset_0_1px_0_rgba(255,255,255,0.08),0_0_20px_rgba(255,255,255,0.08)] md:hover:bg-white md:hover:text-black"
                  >
                    <PhoneIcon />
                  </a>

                  <button
                    type="button"
                    onClick={() => {
                      setSubmitState("idle");
                      setIsFormOpen(true);
                    }}
                    aria-label="Projektanfrage Formular öffnen"
                    className="group grid h-[2.95rem] w-[2.95rem] place-items-center rounded-[14px] border border-white/[0.1] bg-[#08080b] text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.08),0_8px_20px_rgba(0,0,0,0.34)] transition hover:-translate-y-0.5 hover:border-white/[0.18] hover:bg-white/[0.05] md:inline-flex md:h-auto md:w-auto md:min-h-11 md:justify-center md:gap-2 md:rounded-full md:border-white/[0.16] md:bg-white md:px-5 md:text-black md:shadow-[0_0_24px_rgba(255,255,255,0.18),0_10px_28px_rgba(255,255,255,0.1)] md:hover:shadow-[0_0_34px_rgba(255,255,255,0.26),0_14px_38px_rgba(255,255,255,0.16)]"
                  >
                    <span className="hidden text-[0.8rem] font-bold tracking-[0.02em] md:inline">
                      PROJEKT ANFRAGEN
                    </span>

                    <ArrowIcon />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </header>

      <AnimatePresence>
        {isFormOpen && (
          <motion.div
            className="fixed inset-0 z-[1400] flex items-end justify-center bg-black/75 px-4 pb-4 pt-20 backdrop-blur-md sm:items-center sm:p-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsFormOpen(false)}
          >
            <motion.div
              initial={{ opacity: 0, y: 28, scale: 0.985 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.985 }}
              transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
              onClick={(event) => event.stopPropagation()}
              className="relative max-h-[calc(100svh-2rem)] w-full max-w-[560px] overflow-y-auto rounded-[28px] border border-white/[0.16] bg-[#08080b]/95 p-6 shadow-[0_34px_110px_rgba(0,0,0,0.76)] backdrop-blur-2xl sm:p-7"
            >
              <button
                type="button"
                onClick={() => setIsFormOpen(false)}
                aria-label="Formular schließen"
                className="absolute right-4 top-4 grid h-10 w-10 place-items-center rounded-full border border-white/[0.12] bg-black/50 text-xl text-white/80 transition hover:bg-white hover:text-black"
              >
                ×
              </button>

              <div className="pr-12">
                <p className="m-0 text-[0.68rem] font-black uppercase tracking-[0.2em] text-[#db3150]">
                  Projektanfrage
                </p>

                <h2 className="mt-3 font-sans text-[clamp(1.75rem,7vw,2.45rem)] font-extrabold leading-[1.02] tracking-[-0.045em] text-white">
                  Erzählen Sie mir kurz, worum es geht.
                </h2>

                <p className="mt-3 text-[0.95rem] leading-[1.55] text-white/55">
                  Ich melde mich persönlich zurück und sage Ihnen ehrlich,
                  welche Richtung sinnvoll wäre.
                </p>
              </div>

              {submitState === "success" ? (
                <div className="mt-7 grid gap-4">
                  <div className="grid h-14 w-14 place-items-center rounded-full border border-[#db3150]/50 bg-[#db3150]/15 text-2xl font-black text-white shadow-[0_0_0_8px_rgba(219,49,80,0.08),0_0_38px_rgba(219,49,80,0.35)]">
                    ✓
                  </div>

                  <h3 className="mt-2 text-[2rem] font-extrabold leading-[1.02] tracking-[-0.055em] text-white">
                    Anfrage gesendet.
                  </h3>

                  <p className="max-w-[390px] text-[0.96rem] leading-[1.58] text-white/60">
                    Danke. Ihre Anfrage ist angekommen. Ich melde mich
                    persönlich bei Ihnen zurück.
                  </p>

                  <div className="mt-3 flex flex-col gap-3 sm:flex-row">
                    <button
                      type="button"
                      onClick={() => {
                        setSubmitState("idle");
                      }}
                      className="inline-flex min-h-11 items-center justify-center rounded-full border border-white/[0.16] bg-white/[0.06] px-5 text-[0.82rem] font-extrabold text-white/85 transition hover:bg-white hover:text-black"
                    >
                      Weitere Anfrage senden
                    </button>

                    <button
                      type="button"
                      onClick={() => {
                        setSubmitState("idle");
                        setIsFormOpen(false);
                      }}
                      className="inline-flex min-h-11 items-center justify-center rounded-full border border-white/[0.1] px-5 text-[0.78rem] font-bold text-white/50 transition hover:border-white/25 hover:text-white"
                    >
                      Schließen
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="mt-6 grid gap-4">
                  {submitState === "error" && (
                    <div className="rounded-[16px] border border-[#db3150]/45 bg-[#db3150]/10 px-4 py-3 text-[0.82rem] leading-[1.45] text-white/82">
                      Die Anfrage konnte nicht gesendet werden. Bitte versuchen
                      Sie es erneut.
                    </div>
                  )}

                  <label className="grid gap-2 text-[0.8rem] font-bold text-white/70">
                    Ihr Name
                    <input
                      name="name"
                      type="text"
                      placeholder="Vor- und Nachname"
                      required
                      className="h-12 rounded-[15px] border border-white/[0.14] bg-black/35 px-4 text-white outline-none transition placeholder:text-white/32 focus:border-[#db3150] focus:ring-4 focus:ring-[#db3150]/15"
                    />
                  </label>

                  <label className="grid gap-2 text-[0.8rem] font-bold text-white/70">
                    Unternehmen / Branche
                    <input
                      name="business"
                      type="text"
                      placeholder="z. B. Kosmetikstudio"
                      required
                      className="h-12 rounded-[15px] border border-white/[0.14] bg-black/35 px-4 text-white outline-none transition placeholder:text-white/32 focus:border-[#db3150] focus:ring-4 focus:ring-[#db3150]/15"
                    />
                  </label>

                  <label className="grid gap-2 text-[0.8rem] font-bold text-white/70">
                    Wie darf ich Sie am besten kontaktieren?
                    <input
                      name="contact"
                      type="text"
                      placeholder="E-Mail oder WhatsApp"
                      required
                      className="h-12 rounded-[15px] border border-white/[0.14] bg-black/35 px-4 text-white outline-none transition placeholder:text-white/32 focus:border-[#db3150] focus:ring-4 focus:ring-[#db3150]/15"
                    />
                  </label>

                  <label className="grid gap-2 text-[0.8rem] font-bold text-white/70">
                    Was möchten Sie online verbessern?
                    <textarea
                      name="message"
                      placeholder="z. B. mehr Anfragen, klarere Leistungen, hochwertiger wirken ..."
                      required
                      className="min-h-[112px] resize-y rounded-[15px] border border-white/[0.14] bg-black/35 px-4 py-3 text-white outline-none transition placeholder:text-white/32 focus:border-[#db3150] focus:ring-4 focus:ring-[#db3150]/15"
                    />
                  </label>

                  <button
                    type="submit"
                    disabled={submitState === "loading"}
                    className="mt-1 inline-flex min-h-12 items-center justify-center gap-3 rounded-full bg-white px-5 text-[0.9rem] font-extrabold text-black transition hover:-translate-y-0.5 hover:bg-neutral-100 disabled:cursor-wait disabled:opacity-70 disabled:hover:translate-y-0"
                  >
                    {submitState === "loading"
                      ? "Wird gesendet ..."
                      : "Vorschau anfragen"}
                    <ArrowIcon />
                  </button>

                  <p className="m-0 text-center text-[0.72rem] leading-[1.45] text-white/38">
                    Mit dem Absenden wird Ihre Anfrage direkt an Boran
                    Webdesign gesendet.
                  </p>
                </form>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}