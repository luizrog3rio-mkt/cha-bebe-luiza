"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { MapPin, Clock, Calendar, Gift } from "lucide-react";

const details = [
  {
    icon: Calendar,
    label: "Data",
    value: "06",
    sub: "Junho, Sábado",
  },
  {
    icon: Clock,
    label: "Horário",
    value: "16h",
    sub: "A partir das",
  },
  {
    icon: MapPin,
    label: "Local",
    value: "Clube CEEM",
    sub: "Endereço do evento",
  },
];

export default function DetailsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="relative py-24 sm:py-32 px-6 overflow-hidden">
      {/* Background accent */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-pink-950/20 to-transparent" />

      <div className="relative z-10 max-w-2xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <span className="text-pink-400 text-xs tracking-[0.3em] uppercase font-medium">
            Detalhes
          </span>
          <h2 className="text-3xl sm:text-4xl font-semibold text-white mt-3">
            Quando e onde?
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
          {details.map((item, i) => (
            <motion.div
              key={item.label}
              className="glass rounded-2xl sm:rounded-3xl p-8 text-center hover:bg-white/[0.08] transition-all duration-500 group"
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.2 + i * 0.15 }}
            >
              <div className="w-14 h-14 rounded-2xl bg-pink-500/10 border border-pink-500/20 flex items-center justify-center mx-auto mb-5 group-hover:bg-pink-500/20 group-hover:scale-110 transition-all duration-500">
                <item.icon className="w-6 h-6 text-pink-400" />
              </div>
              <p className="text-[11px] text-white/30 uppercase tracking-[0.2em] font-medium mb-2">
                {item.label}
              </p>
              <p className="text-3xl sm:text-4xl font-bold text-white mb-1">
                {item.value}
              </p>
              <p className="text-sm text-white/40">{item.sub}</p>
            </motion.div>
          ))}
        </div>

        {/* Gift reminder */}
        <motion.div
          className="mt-10 sm:mt-12"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <div className="glass rounded-2xl px-6 py-5 flex items-center justify-center gap-3 max-w-md mx-auto">
            <div className="w-10 h-10 rounded-xl bg-pink-500/10 border border-pink-500/20 flex items-center justify-center flex-shrink-0">
              <Gift className="w-5 h-5 text-pink-400" />
            </div>
            <p className="text-white/60 text-sm sm:text-base">
              Pedimos para levar{" "}
              <span className="font-semibold text-pink-400">
                fralda tamanho G
              </span>
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
