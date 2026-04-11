"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import RSVPForm from "./RSVPForm";
import { SectionLabel } from "./Ornament";

export default function RSVPSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="confirmar"
      ref={ref}
      className="relative py-24 sm:py-32 px-6 bg-white/40 scroll-mt-8"
    >
      <div className="relative z-10 max-w-lg mx-auto">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 25 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <SectionLabel>RSVP</SectionLabel>
          <h2 className="font-[family-name:var(--font-cormorant)] text-3xl sm:text-4xl font-light text-blush-800/70 mt-3 mb-3 tracking-wide">
            Confirme sua presença
          </h2>
          <p className="text-blush-400/50 text-sm font-light">
            Preencha o formulário abaixo
          </p>
        </motion.div>

        <motion.div
          className="bg-white rounded-3xl p-8 sm:p-10 shadow-lg shadow-blush-100/30 border border-gold-200/20"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.15 }}
        >
          <RSVPForm />
        </motion.div>
      </div>
    </section>
  );
}
