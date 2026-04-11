"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Countdown from "./Countdown";
import { OrnamentDivider, SectionLabel } from "./Ornament";

export default function CountdownSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="py-24 sm:py-32 px-6 bg-white/60">
      <div className="max-w-lg mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-14"
        >
          <SectionLabel>Contagem regressiva</SectionLabel>
          <h2 className="font-[family-name:var(--font-cormorant)] text-3xl sm:text-4xl font-light text-blush-800/70 mt-3 tracking-wide">
            Falta pouco para o grande dia
          </h2>
        </motion.div>

        <Countdown />

        <OrnamentDivider />
      </div>
    </section>
  );
}
