"use client";

import { motion } from "framer-motion";
import { concepts } from "../data/siteContent";

export default function ConceptsSection() {
  return (
    <section id="konzepte" className="relative z-10 mx-auto max-w-7xl px-5 py-28">
      <div className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end">
        <div>
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-blue-300">
            Designkonzepte
          </p>
          <h2 className="max-w-3xl text-4xl font-semibold tracking-tight md:text-6xl">
            Premium-Looks für lokale Dienstleister.
          </h2>
        </div>

        <p className="max-w-md text-white/55">
          Beispielrichtungen für Branchen, die stark über Optik, Vertrauen und
          direkten Kontakt verkaufen.
        </p>
      </div>

      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
        {concepts.map((concept, index) => (
          <motion.div
            key={concept.title}
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.08, duration: 0.6 }}
            className="group min-h-[300px] rounded-[2rem] border border-white/10 bg-white/[0.04] p-6 transition hover:-translate-y-2 hover:bg-white/[0.07]"
          >
            <div className="mb-20 h-32 rounded-3xl bg-gradient-to-br from-white/15 via-violet-500/20 to-blue-500/20 transition group-hover:scale-[1.03]" />
            <p className="mb-3 text-xs uppercase tracking-[0.22em] text-white/35">
              Designkonzept
            </p>
            <h3 className="text-2xl font-semibold">{concept.title}</h3>
            <p className="mt-3 text-sm leading-6 text-white/55">
              {concept.text}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}