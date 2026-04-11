"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Countdown from "./Countdown";

export default function CountdownSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="relative py-24 sm:py-32 px-6">
      <div className="divider-glow mb-24 sm:mb-32 max-w-xs mx-auto" />

      <div className="max-w-lg mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-14"
        >
          <span className="text-pink-400 text-xs tracking-[0.3em] uppercase font-medium">
            Contagem regressiva
          </span>
          <h2 className="text-3xl sm:text-4xl font-semibold text-white mt-3">
            Falta pouco!
          </h2>
        </motion.div>

        <Countdown />
      </div>
    </section>
  );
}
