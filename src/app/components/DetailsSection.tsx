"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { MapPin, Clock, Calendar, Gift } from "lucide-react";
import { SectionLabel } from "./Ornament";

const details = [
  { icon: Calendar, label: "Data", value: "06", sub: "Junho, Sábado" },
  { icon: Clock, label: "Horário", value: "16h", sub: "A partir das" },
  { icon: MapPin, label: "Local", value: "Clube CEEM", sub: "Endereço do evento" },
];

export default function DetailsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="relative py-24 sm:py-32 px-6">
      <div className="relative z-10 max-w-2xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 25 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <SectionLabel>Detalhes do evento</SectionLabel>
          <h2 className="font-[family-name:var(--font-cormorant)] text-3xl sm:text-4xl font-light text-blush-800/70 mt-3 tracking-wide">
            Quando e onde?
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 sm:gap-6">
          {details.map((item, i) => (
            <motion.div
              key={item.label}
              className="relative bg-white rounded-2xl p-8 sm:p-7 text-center border border-gold-200/30 shadow-sm hover:shadow-md hover:border-gold-300/40 transition-all duration-500 group"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.15 + i * 0.12 }}
            >
              <div className="w-12 h-12 rounded-full bg-blush-50 border border-blush-200/40 flex items-center justify-center mx-auto mb-5 group-hover:scale-110 group-hover:bg-blush-100/80 transition-all duration-500">
                <item.icon className="w-5 h-5 text-blush-400" />
              </div>
              <p className="text-[10px] text-gold-500 uppercase tracking-[0.25em] font-medium mb-2">
                {item.label}
              </p>
              <p className="font-[family-name:var(--font-cormorant)] text-3xl sm:text-4xl font-semibold text-blush-700 mb-1">
                {item.value}
              </p>
              <p className="text-sm text-blush-400/70 font-light">{item.sub}</p>
            </motion.div>
          ))}
        </div>

        {/* Gift */}
        <motion.div
          className="mt-12"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.7 }}
        >
          <div className="max-w-md mx-auto bg-blush-50/60 rounded-2xl px-7 py-5 flex items-center justify-center gap-4 border border-blush-200/30">
            <div className="w-10 h-10 rounded-full bg-white border border-blush-200/40 flex items-center justify-center flex-shrink-0 shadow-sm">
              <Gift className="w-5 h-5 text-blush-400" />
            </div>
            <p className="text-blush-700/60 text-sm sm:text-base font-light">
              Pedimos para levar{" "}
              <span className="font-medium text-blush-600">fralda tamanho G</span>
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
