"use client";

import { AnimatePresence, motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";

type Project = {
  number: string;
  category: string;
  title: string;
  image: string;
  liveUrl: string;
  rotate: number;
  icon: "spark" | "wave";
  description: string;
  highlights: string[];
};

const ENTER_EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

const projects: Project[] = [
  {
    number: "01",
    category: "BEAUTY · EDUCATION",
    title: "CG Beauty Heaven",
    image: "/projects/cg-beauty-mobile.jpg",
    liveUrl: "https://cgbeautyheaven.de",
    rotate: -2.5,
    icon: "spark",
    description:
      "Für CG Beauty Heaven entstand ein vollständiger digitaler Auftritt für Nageldesign und 1:1 Schulungen. Die Website verbindet eine ruhige, luxuriöse Markenwelt mit klaren Wegen zu Terminen, Leistungen und Schulungen.",
    highlights: [
      "Luxury Brand Direction",
      "Mobile-First Design",
      "CMS für eigene Inhalte",
      "Klare Anfragewege",
    ],
  },
  {
    number: "02",
    category: "MASSAGE · WELLNESS",
    title: "Rasa Massage",
    image: "/projects/rasa-massage-mobile.jpg",
    liveUrl: "https://rasamassage.de",
    rotate: 2.5,
    icon: "wave",
    description:
      "Rasa Massage verbindet Firmenmassagen vor Ort mit individuellen Behandlungen in der Praxis. Die Website erklärt beide Angebote klar und führt Besucher direkt zur passenden Anfrage.",
    highlights: [
      "Warme Markenwelt",
      "Mobile-First Design",
      "Firmenmassage-Anfragen",
      "Praxis-Termine",
    ],
  },
];

function ProjectIcon({ type }: { type: "spark" | "wave" }) {
  if (type === "spark") {
    return (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.45"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-4 w-4"
      >
        <path d="m12 3 1.65 5.35L19 10l-5.35 1.65L12 17l-1.65-5.35L5 10l5.35-1.65L12 3Z" />
        <path d="m18 16.4.6 1.95 1.95.6-1.95.6-.6 1.95-.6-1.95-1.95-.6 1.95-.6.6-1.95Z" />
      </svg>
    );
  }

  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.45"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-4 w-4"
    >
      <path d="M4 8.2c2.15-2.15 4.3-2.15 6.45 0s4.3 2.15 6.45 0" />
      <path d="M4 12c2.15-2.15 4.3-2.15 6.45 0s4.3 2.15 6.45 0" />
      <path d="M4 15.8c2.15-2.15 4.3-2.15 6.45 0s4.3 2.15 6.45 0" />
    </svg>
  );
}

function PhonePreview({
  image,
  title,
  rotate,
}: {
  image: string;
  title: string;
  rotate: number;
}) {
  return (
    <motion.div
      animate={{
        y: [0, -5, 0],
        rotate: [
          rotate,
          rotate > 0 ? rotate + 0.45 : rotate - 0.45,
          rotate,
        ],
      }}
      transition={{
        duration: 6.8,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      className="relative z-10 w-[102px] sm:w-[110px] lg:w-[122px]"
    >
      <div className="absolute -inset-8 rounded-full bg-white/[0.035] blur-3xl" />

      <div className="relative rounded-[27px] border border-white/[0.16] bg-[#050506] p-[5px] shadow-[0_24px_70px_rgba(0,0,0,0.8),inset_0_1px_0_rgba(255,255,255,0.1)]">
        <div className="relative aspect-[9/19.5] overflow-hidden rounded-[22px] bg-black">
          <div className="absolute left-1/2 top-2 z-20 h-1.5 w-10 -translate-x-1/2 rounded-full bg-black/95" />

          <img
            src={image}
            alt={`${title} mobile website`}
            className="h-full w-full object-cover object-top"
            draggable={false}
          />

          <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(145deg,rgba(255,255,255,0.1)_0%,transparent_18%,transparent_72%,rgba(0,0,0,0.32)_100%)]" />
        </div>
      </div>
    </motion.div>
  );
}

function SwipeNavigation() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16, filter: "blur(5px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once: true, amount: 0.6 }}
      transition={{ duration: 0.55, ease: ENTER_EASE }}
      className="mb-6 flex items-end justify-between gap-4 lg:hidden"
    >
      <div>
        <p className="text-[0.62rem] font-semibold uppercase tracking-[0.2em] text-white/56">
          Projekte entdecken
        </p>

        <p className="mt-1 text-[0.58rem] uppercase tracking-[0.15em] text-white/34">
          Nach rechts wischen
        </p>
      </div>

      <div className="flex items-center gap-2 text-[0.72rem] font-semibold tracking-[0.12em] text-white/72">
        <span>01</span>

        <div className="relative h-px w-16 bg-white/20">
          <motion.span
            animate={{ x: [0, 47, 0] }}
            transition={{
              duration: 1.8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute left-0 top-1/2 h-2 w-2 -translate-y-1/2 rounded-full bg-white shadow-[0_0_18px_rgba(255,255,255,0.9)]"
          />
        </div>

        <motion.span
          animate={{ x: [0, 5, 0] }}
          transition={{
            duration: 1.8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="text-base text-white/80"
        >
          →
        </motion.span>

        <span>02</span>
      </div>
    </motion.div>
  );
}

function ProjectModal({
  project,
  onClose,
}: {
  project: Project;
  onClose: () => void;
}) {
  useEffect(() => {
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    document.addEventListener("keydown", handleEscape);

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", handleEscape);
    };
  }, [onClose]);

  const openLeadForm = () => {
    onClose();

    window.setTimeout(() => {
      window.dispatchEvent(new Event("boran:open-lead-form"));
    }, 90);
  };

  return (
    <motion.div
      className="fixed inset-0 z-[1200] flex items-end justify-center bg-black/85 px-4 pb-4 pt-20 backdrop-blur-md sm:items-center sm:p-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.28, ease: ENTER_EASE }}
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={`Projekt ${project.title}`}
    >
      <motion.div
        initial={{ opacity: 0, y: 38, scale: 0.975, filter: "blur(10px)" }}
        animate={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
        exit={{ opacity: 0, y: 26, scale: 0.985, filter: "blur(8px)" }}
        transition={{ duration: 0.42, ease: ENTER_EASE }}
        onClick={(event) => event.stopPropagation()}
        className="relative w-full max-w-[940px] overflow-hidden rounded-[30px] border border-white/[0.12] bg-[#08080b] shadow-[0_34px_100px_rgba(0,0,0,0.76)]"
      >
        <button
          type="button"
          onClick={onClose}
          aria-label="Projektansicht schließen"
          className="absolute right-5 top-5 z-30 grid h-11 w-11 place-items-center rounded-full border border-white/[0.12] bg-black/60 text-lg text-white/80 transition hover:bg-white hover:text-black"
        >
          ×
        </button>

        <div className="grid max-h-[calc(100svh-6rem)] overflow-y-auto lg:grid-cols-[0.8fr_1.2fr]">
          <div className="flex min-h-[310px] items-center justify-center border-b border-white/[0.08] bg-[radial-gradient(circle_at_50%_48%,rgba(255,255,255,0.06),transparent_45%)] p-9 lg:min-h-[580px] lg:border-b-0 lg:border-r">
            <PhonePreview
              image={project.image}
              title={project.title}
              rotate={project.rotate}
            />
          </div>

          <div className="p-7 sm:p-10 lg:p-12">
            <p className="text-[0.64rem] font-semibold uppercase tracking-[0.2em] text-white/42">
              {project.category}
            </p>

            <h3 className="mt-5 font-serif text-[clamp(2.7rem,7vw,5rem)] leading-[0.9] tracking-[-0.055em] text-white">
              {project.title}
            </h3>

            <p className="mt-6 text-[0.98rem] leading-[1.72] text-white/58">
              {project.description}
            </p>

            <div className="mt-8 flex flex-wrap gap-2.5">
              {project.highlights.map((highlight) => (
                <span
                  key={highlight}
                  className="rounded-full border border-white/[0.1] bg-white/[0.03] px-3.5 py-2 text-[0.61rem] font-semibold uppercase tracking-[0.13em] text-white/58"
                >
                  {highlight}
                </span>
              ))}
            </div>

            <div className="mt-10 flex flex-col gap-3 border-t border-white/[0.09] pt-6 sm:flex-row">
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-12 items-center justify-center gap-3 rounded-full bg-white px-5 text-[0.8rem] font-bold text-black transition hover:-translate-y-0.5 hover:shadow-[0_16px_40px_rgba(255,255,255,0.16)]"
              >
                Live Website ansehen
                <span className="text-lg leading-none">↗</span>
              </a>

              <button
                type="button"
                onClick={openLeadForm}
                className="inline-flex min-h-12 items-center justify-center rounded-full border border-white/[0.12] px-5 text-[0.7rem] font-semibold uppercase tracking-[0.13em] text-white/62 transition hover:border-white/30 hover:text-white"
              >
                Eigene Vorschau anfragen
              </button>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function ProjectsSection() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const carouselRef = useRef<HTMLDivElement | null>(null);
  const headerRef = useRef<HTMLDivElement | null>(null);

const headerInView = useInView(headerRef, {
  once: true,
  amount: 0.24,
  margin: "0px 0px -18% 0px",
});

  useEffect(() => {
    const carousel = carouselRef.current;
    if (!carousel) return;

    const mediaQuery = window.matchMedia("(max-width: 1023px)");

    const showSecondProjectPeek = () => {
      if (!mediaQuery.matches) return;
      if (carousel.dataset.peekDone === "true") return;

      carousel.dataset.peekDone = "true";

      const previousSnapType = carousel.style.scrollSnapType;

      carousel.style.scrollSnapType = "none";
      carousel.scrollLeft = 34;

      window.setTimeout(() => {
        carousel.style.scrollSnapType = previousSnapType;
      }, 450);
    };

    const animationFrame = window.requestAnimationFrame(showSecondProjectPeek);
    const timeout = window.setTimeout(showSecondProjectPeek, 350);

    return () => {
      window.cancelAnimationFrame(animationFrame);
      window.clearTimeout(timeout);
    };
  }, []);

  return (
    <>
      <section
        id="projekte"
        className="relative isolate overflow-hidden bg-[#030303] text-white"
      >
        <div aria-hidden="true" className="pointer-events-none absolute inset-0">
          <div className="absolute left-1/2 top-[26%] h-[34rem] w-[34rem] -translate-x-1/2 rounded-full bg-white/[0.012] blur-[170px]" />
          <div className="absolute -right-40 top-[55%] h-[26rem] w-[26rem] rounded-full bg-blue-500/[0.014] blur-[160px]" />
          <div className="absolute -left-40 top-[65%] h-[26rem] w-[26rem] rounded-full bg-pink-500/[0.012] blur-[160px]" />
        </div>

        <div className="relative mx-auto max-w-[1440px] px-5 py-20 md:px-8 md:py-24 lg:px-10 lg:py-28">
          <div className="mx-auto max-w-4xl text-center">
            <motion.div
  ref={headerRef}
  initial={{ opacity: 0, y: 18 }}
  animate={
    headerInView
      ? {
          opacity: 1,
          y: 0,
        }
      : {
          opacity: 0,
          y: 18,
        }
  }
  transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
  className="mx-auto max-w-4xl text-center"
>
  <motion.p
    initial={{ opacity: 0, y: 12, filter: "blur(4px)" }}
    animate={
      headerInView
        ? { opacity: 1, y: 0, filter: "blur(0px)" }
        : { opacity: 0, y: 12, filter: "blur(4px)" }
    }
    transition={{
      duration: 0.46,
      delay: 0.02,
      ease: [0.22, 1, 0.36, 1],
    }}
    className="text-[0.66rem] font-semibold uppercase tracking-[0.22em] text-white/47 sm:text-[0.74rem]"
  >
    AUSGEWÄHLTE LIVE-PROJEKTE
  </motion.p>

  <h2 className="mt-6 font-serif text-[clamp(2.7rem,10.2vw,5.85rem)] leading-[0.91] tracking-[-0.06em] text-white">
    <span className="block overflow-hidden pb-[0.06em]">
      <motion.span
        initial={{ y: "108%", opacity: 0, filter: "blur(3px)" }}
        animate={
          headerInView
            ? { y: "0%", opacity: 1, filter: "blur(0px)" }
            : { y: "108%", opacity: 0, filter: "blur(3px)" }
        }
        transition={{
          duration: 0.72,
          delay: 0.1,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="block"
      >
        Websites, die Qualität
      </motion.span>
    </span>

    <span className="block overflow-hidden pb-[0.08em]">
      <motion.span
        initial={{ y: "108%", opacity: 0, filter: "blur(3px)" }}
        animate={
          headerInView
            ? { y: "0%", opacity: 1, filter: "blur(0px)" }
            : { y: "108%", opacity: 0, filter: "blur(3px)" }
        }
        transition={{
          duration: 0.72,
          delay: 0.2,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="block text-[#db3150] [text-shadow:0_0_34px_rgba(219,49,80,0.28)]"
      >
        sichtbar machen.
      </motion.span>
    </span>
  </h2>

  <motion.p
    initial={{ opacity: 0, y: 16, filter: "blur(5px)" }}
    animate={
      headerInView
        ? { opacity: 1, y: 0, filter: "blur(0px)" }
        : { opacity: 0, y: 16, filter: "blur(5px)" }
    }
    transition={{
      duration: 0.52,
      delay: 0.34,
      ease: [0.22, 1, 0.36, 1],
    }}
    className="mx-auto mt-6 max-w-[650px] text-[1rem] leading-[1.58] text-white/56 sm:text-[1.08rem]"
  >
    Zwei reale Kundenprojekte für klare Leistungen, stärkere
    Markenwirkung und einfachere Anfragen.
  </motion.p>
</motion.div>
          </div>

          <div className="mt-12 lg:mt-16">
            <SwipeNavigation />

            <div
              ref={carouselRef}
              className="-mx-5 flex snap-x snap-mandatory gap-4 overflow-x-auto overflow-y-hidden px-5 pb-5 [overscroll-behavior-x:contain] [overscroll-behavior-y:auto] [scrollbar-width:none] [touch-action:pan-x_pan-y] [-webkit-overflow-scrolling:touch] [&::-webkit-scrollbar]:hidden md:-mx-8 md:px-8 lg:mx-0 lg:grid lg:grid-cols-2 lg:gap-8 lg:overflow-visible lg:px-0 lg:[touch-action:auto]"
            >
              {projects.map((project, index) => (
                <motion.article
                  key={project.title}
                  initial={{
                    opacity: 0,
                    y: 42,
                    scale: 0.965,
                    filter: "blur(12px)",
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                    scale: 1,
                    filter: "blur(0px)",
                  }}
                  viewport={{
                    once: true,
                    amount: 0.24,
                    margin: "0px 0px -8% 0px",
                  }}
                  transition={{
                    duration: 0.76,
                    delay: index * 0.1,
                    ease: ENTER_EASE,
                  }}
                  className="min-w-[86vw] snap-start sm:min-w-[72vw] lg:min-w-0"
                >
                  <motion.div
                    whileHover={{
                      y: -6,
                      scale: 1.008,
                      transition: { duration: 0.22 },
                    }}
                    className="group relative flex h-[505px] flex-col overflow-hidden rounded-[32px] border border-white/[0.1] bg-[linear-gradient(145deg,#0a0a0d_0%,#040405_100%)] shadow-[0_30px_90px_rgba(0,0,0,0.48),inset_0_1px_0_rgba(255,255,255,0.045)] sm:h-[520px] lg:h-[545px]"
                  >
                    <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_12%,rgba(255,255,255,0.05),transparent_30%),linear-gradient(180deg,rgba(255,255,255,0.012),transparent_48%)]" />

                    <motion.div
                      aria-hidden="true"
                      className="pointer-events-none absolute -bottom-1/2 -top-1/2 left-[-38%] z-20 w-[18%] rotate-[18deg] bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.025),rgba(255,255,255,0.11),rgba(255,255,255,0.025),transparent)] blur-xl"
                      initial={{ x: "0%" }}
                      whileInView={{ x: "780%" }}
                      viewport={{ once: true, amount: 0.34 }}
                      transition={{
                        duration: 1.8,
                        delay: 0.28 + index * 0.1,
                        ease: "linear",
                      }}
                    />

                    <div className="relative flex h-[274px] shrink-0 items-center justify-center overflow-hidden border-b border-white/[0.09] sm:h-[286px] lg:h-[310px]">
                      <div className="absolute inset-x-8 bottom-0 h-px bg-gradient-to-r from-transparent via-white/18 to-transparent" />

                      <div className="absolute left-5 top-5 grid h-10 w-10 place-items-center rounded-full border border-white/[0.11] bg-black/45 text-white/70">
                        <ProjectIcon type={project.icon} />
                      </div>

                      <div className="absolute right-5 top-5 text-[0.62rem] font-semibold tracking-[0.14em] text-white/30">
                        {project.number} / 02
                      </div>

                      <PhonePreview
                        image={project.image}
                        title={project.title}
                        rotate={project.rotate}
                      />
                    </div>

                    <div className="relative flex flex-1 flex-col px-5 pb-6 pt-5 sm:px-6 lg:px-8 lg:pb-7 lg:pt-6">
                      <div className="flex items-center gap-3">
                        <span className="text-[0.66rem] font-semibold tracking-[0.15em] text-white/45">
                          {project.number}
                        </span>

                        <span className="h-px w-8 bg-white/18" />

                        <span className="text-[0.6rem] font-semibold uppercase tracking-[0.16em] text-white/44">
                          {project.category}
                        </span>
                      </div>

                      <h3 className="mt-4 font-serif text-[clamp(2.25rem,7.5vw,4.5rem)] leading-[0.91] tracking-[-0.055em] text-white">
                        {project.title}
                      </h3>

                      <button
                        type="button"
                        onClick={() => setSelectedProject(project)}
                        className="group/button relative mt-auto inline-flex min-h-11 w-fit items-center gap-3 overflow-hidden rounded-full border border-white/[0.15] bg-white px-4 text-[0.7rem] font-bold uppercase tracking-[0.12em] text-black transition hover:-translate-y-0.5 hover:shadow-[0_14px_36px_rgba(255,255,255,0.17)]"
                      >
                        <span className="absolute -left-[40%] top-0 h-full w-[34%] skew-x-[-18deg] bg-gradient-to-r from-transparent via-black/10 to-transparent opacity-0 blur-sm transition duration-700 group-hover/button:left-[125%] group-hover/button:opacity-100" />

                        <span className="relative z-10">Projekt ansehen</span>

                        <span className="relative z-10 text-base leading-none transition-transform group-hover/button:translate-x-1">
                          ↗
                        </span>
                      </button>
                    </div>
                  </motion.div>
                </motion.article>
              ))}
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 22, filter: "blur(7px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.58, delay: 0.08, ease: ENTER_EASE }}
            className="mt-12 flex justify-center sm:mt-16"
          >
            <button
              type="button"
              onClick={() =>
                window.dispatchEvent(new Event("boran:open-lead-form"))
              }
              className="group relative inline-flex min-h-12 items-center justify-center gap-3 overflow-hidden rounded-full border border-white/[0.15] bg-white px-5 text-[0.78rem] font-bold text-black shadow-[0_0_28px_rgba(255,255,255,0.1)] transition hover:-translate-y-0.5 hover:shadow-[0_16px_42px_rgba(255,255,255,0.18)] sm:px-6 sm:text-[0.84rem]"
            >
              <span className="absolute -left-[35%] top-0 h-full w-[32%] skew-x-[-18deg] bg-gradient-to-r from-transparent via-black/10 to-transparent opacity-0 blur-sm transition duration-700 group-hover:left-[120%] group-hover:opacity-100" />

              <span className="relative z-10">Website-Potenzial prüfen</span>

              <span className="relative z-10 text-lg leading-none transition-transform group-hover:translate-x-1">
                →
              </span>
            </button>
          </motion.div>
        </div>
      </section>

      <AnimatePresence>
        {selectedProject && (
          <ProjectModal
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        )}
      </AnimatePresence>
    </>
  );
}