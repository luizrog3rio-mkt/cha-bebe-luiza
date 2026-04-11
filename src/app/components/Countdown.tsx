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
  const isInView = useInView(ref, { once: true, margin: "-100px" });

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
    <div ref={ref} className="grid grid-cols-4 gap-3 sm:gap-6 max-w-md mx-auto">
      {units.map(({ value, label }, i) => (
        <motion.div
          key={label}
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: i * 0.1 }}
        >
          <div className="glass-strong rounded-2xl sm:rounded-3xl aspect-square flex items-center justify-center glow-pink mb-3">
            <span className="text-3xl sm:text-5xl font-bold text-white tabular-nums">
              {value !== null ? String(value).padStart(2, "0") : "--"}
            </span>
          </div>
          <span className="text-[10px] sm:text-xs text-white/40 uppercase tracking-[0.2em] font-medium">
            {label}
          </span>
        </motion.div>
      ))}
    </div>
  );
}
