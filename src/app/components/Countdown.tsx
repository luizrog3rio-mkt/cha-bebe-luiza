"use client";

import { useState, useEffect } from "react";

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
    <div className="grid grid-cols-4 gap-4 sm:gap-6 max-w-sm mx-auto">
      {units.map(({ value, label }) => (
        <div key={label} className="text-center">
          <div className="aspect-square rounded-2xl bg-white border border-pink-100 shadow-sm flex items-center justify-center mb-2">
            <span className="text-3xl sm:text-4xl font-bold text-pink-600 tabular-nums">
              {value !== null ? String(value).padStart(2, "0") : "--"}
            </span>
          </div>
          <span className="text-[11px] sm:text-xs text-pink-400 uppercase tracking-wider font-medium">
            {label}
          </span>
        </div>
      ))}
    </div>
  );
}
