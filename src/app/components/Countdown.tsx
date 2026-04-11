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

  if (!time) {
    return (
      <div className="flex justify-center gap-3 sm:gap-5">
        {["Dias", "Horas", "Min", "Seg"].map((label) => (
          <div key={label} className="text-center">
            <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-white/80 border border-pink-100 flex items-center justify-center mb-1.5">
              <span className="text-2xl sm:text-3xl font-bold text-pink-400">
                --
              </span>
            </div>
            <span className="text-[10px] sm:text-xs text-pink-400 uppercase tracking-wider font-medium">
              {label}
            </span>
          </div>
        ))}
      </div>
    );
  }

  const units = [
    { value: time.dias, label: "Dias" },
    { value: time.horas, label: "Horas" },
    { value: time.min, label: "Min" },
    { value: time.seg, label: "Seg" },
  ];

  return (
    <div className="flex justify-center gap-3 sm:gap-5">
      {units.map(({ value, label }) => (
        <div key={label} className="text-center">
          <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-white/80 border border-pink-100 shadow-sm flex items-center justify-center mb-1.5 transition-all">
            <span className="text-2xl sm:text-3xl font-bold text-pink-600 tabular-nums">
              {String(value).padStart(2, "0")}
            </span>
          </div>
          <span className="text-[10px] sm:text-xs text-pink-400 uppercase tracking-wider font-medium">
            {label}
          </span>
        </div>
      ))}
    </div>
  );
}
