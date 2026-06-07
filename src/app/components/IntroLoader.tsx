"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

export default function IntroLoader() {
  const [showIntro, setShowIntro] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowIntro(false);
    }, 2300);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {showIntro && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{
            opacity: 0,
            filter: "blur(14px)",
            scale: 1.04,
          }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="fixed inset-0 z-[9999] grid place-items-center overflow-hidden bg-[#030306]"
        >
          <div className="absolute inset-0">
            <div className="absolute left-1/2 top-1/2 h-[28rem] w-[28rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-600/25 blur-[120px]" />
            <div className="absolute left-1/2 top-1/2 h-[18rem] w-[18rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-500/15 blur-[90px]" />
          </div>

          <motion.div
            initial={{ opacity: 0, y: 28, scale: 0.86 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
            className="relative flex flex-col items-center"
          >
            <motion.div
              initial={{ rotateX: 65, y: -40, opacity: 0 }}
              animate={{ rotateX: 0, y: 0, opacity: 1 }}
              transition={{
                duration: 0.9,
                delay: 0.15,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="grid h-24 w-24 place-items-center rounded-[2rem] border border-white/15 bg-white/[0.06] text-3xl font-black tracking-[-0.08em] text-white shadow-[0_0_90px_rgba(139,92,246,0.45)] backdrop-blur-xl md:h-28 md:w-28 md:text-4xl"
            >
              BW
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.7, ease: "easeOut" }}
              className="mt-7 text-center"
            >
              <p className="text-2xl font-semibold tracking-[-0.04em] text-white md:text-4xl">
                Boran Webdesign
              </p>
              <p className="mt-2 text-sm uppercase tracking-[0.35em] text-white/35">
                Premium Websites
              </p>
            </motion.div>

            <motion.div
              initial={{ scaleX: 0, opacity: 0 }}
              animate={{ scaleX: 1, opacity: 1 }}
              transition={{ duration: 0.9, delay: 1.1, ease: "easeInOut" }}
              className="mt-8 h-px w-40 origin-center bg-gradient-to-r from-transparent via-white/50 to-transparent"
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}