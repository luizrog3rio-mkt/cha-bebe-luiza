"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import RSVPForm from "./RSVPForm";

export default function RSVPSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="confirmar"
      ref={ref}
      className="relative py-24 sm:py-32 px-6 scroll-mt-8"
    >
      {/* Background glow */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-pink-500/[0.07] rounded-full blur-[120px]" />
      </div>

      <div className="relative z-10 max-w-lg mx-auto">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <span className="text-pink-400 text-xs tracking-[0.3em] uppercase font-medium">
            RSVP
          </span>
          <h2 className="text-3xl sm:text-4xl font-semibold text-white mt-3 mb-3">
            Confirme sua presença
          </h2>
          <p className="text-white/30 text-sm">
            Preencha o formulário abaixo
          </p>
        </motion.div>

        <motion.div
          className="glass-strong rounded-3xl p-7 sm:p-10 glow-pink"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <RSVPForm />
        </motion.div>
      </div>
    </section>
  );
}
