"use client";

import { useState, useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";

const EVENT_DATE = new Date("2026-06-06T16:00:00-03:00");

interface TimeLeft {
  dias: number;
  horas: number;
  min: number;
  seg: number;
}

function getTimeLeft(): TimeLeft {
  const diff = EVENT_DATE.getTime() - Date.now();
  if (diff <= 0) return { dias: 0, horas: 0, min: 0, seg: 0 };
  return {
    dias: Math.floor(diff / (1000 * 60 * 60 * 24)),
    horas: Math.floor((diff / (1000 * 60 * 60)) % 24),
    min: Math.floor((diff / (1000 * 60)) % 60),
    seg: Math.floor((diff / 1000) % 60),
  };
}

export default function Countdown() {
  const [time, setTime] = useState<TimeLeft | null>(null);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  useEffect(() => {
    setTime(getTimeLeft());
    const interval = setInterval(() => setTime(getTimeLeft()), 1000);
    return () => clearInterval(interval);
  }, []);

  const units = [
    { value: time?.dias ?? null, label: "Dias" },
    { value: time?.horas ?? null, label: "Horas" },
    { value: time?.min ?? null, label: "Min" },
    { value: time?.seg ?? null, label: "Seg" },
  ];

  return (
    <div ref={ref} className="grid grid-cols-4 gap-4 sm:gap-6 max-w-sm mx-auto">
      {units.map(({ value, label }, i) => (
        <motion.div
          key={label}
          className="text-center"
          initial={{ opacity: 0, y: 25 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.15 * i }}
        >
          <div className="aspect-square rounded-2xl bg-cream-dark/80 border border-gold-200/40 flex items-center justify-center mb-2.5 shadow-sm">
            <span className="text-3xl sm:text-4xl font-light text-blush-700 tabular-nums font-[family-name:var(--font-cormorant)]">
              {value !== null ? String(value).padStart(2, "0") : "--"}
            </span>
          </div>
          <span className="text-[9px] sm:text-[10px] text-blush-400 uppercase tracking-[0.25em] font-medium">
            {label}
          </span>
        </motion.div>
      ))}
    </div>
  );
}
