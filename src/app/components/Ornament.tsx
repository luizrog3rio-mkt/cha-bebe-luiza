"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export function OrnamentDivider() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div ref={ref} className="flex items-center justify-center gap-4 my-8">
      <motion.div
        className="h-px bg-gradient-to-r from-transparent to-gold-300"
        initial={{ width: 0 }}
        animate={isInView ? { width: 60 } : {}}
        transition={{ duration: 1, ease: "easeOut" }}
      />
      <motion.svg
        width="20"
        height="20"
        viewBox="0 0 20 20"
        className="text-gold-400"
        initial={{ opacity: 0, rotate: -90, scale: 0 }}
        animate={isInView ? { opacity: 1, rotate: 0, scale: 1 } : {}}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        <path
          d="M10 2 L12 8 L18 10 L12 12 L10 18 L8 12 L2 10 L8 8 Z"
          fill="currentColor"
          fillOpacity="0.5"
        />
      </motion.svg>
      <motion.div
        className="h-px bg-gradient-to-l from-transparent to-gold-300"
        initial={{ width: 0 }}
        animate={isInView ? { width: 60 } : {}}
        transition={{ duration: 1, ease: "easeOut" }}
      />
    </div>
  );
}

export function SectionLabel({ children }: { children: string }) {
  return (
    <span className="text-gold-500 text-[11px] tracking-[0.35em] uppercase font-medium">
      {children}
    </span>
  );
}
