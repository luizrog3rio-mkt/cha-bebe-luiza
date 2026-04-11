"use client";

import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="hero-bg pattern-overlay relative min-h-screen flex flex-col items-center justify-center overflow-hidden px-6">
      <div className="relative z-10 text-center max-w-xl mx-auto">
        {/* Decorative top ornament */}
        <motion.div
          className="mb-6"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          <svg
            className="mx-auto text-gold-300"
            width="120"
            height="40"
            viewBox="0 0 120 40"
            fill="none"
          >
            <path
              d="M60 5 C45 5, 30 15, 15 20 C10 22, 5 20, 2 18"
              stroke="currentColor"
              strokeWidth="1"
              fill="none"
              opacity="0.6"
            />
            <path
              d="M60 5 C75 5, 90 15, 105 20 C110 22, 115 20, 118 18"
              stroke="currentColor"
              strokeWidth="1"
              fill="none"
              opacity="0.6"
            />
            <circle cx="60" cy="5" r="2" fill="currentColor" opacity="0.4" />
            <path
              d="M50 35 C55 30, 55 25, 60 20 C65 25, 65 30, 70 35"
              stroke="currentColor"
              strokeWidth="0.8"
              fill="none"
              opacity="0.3"
            />
          </svg>
        </motion.div>

        {/* Label */}
        <motion.p
          className="text-gold-500 text-xs sm:text-sm tracking-[0.35em] uppercase font-medium mb-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          Chá de Bebê
        </motion.p>

        {/* Name - THE star */}
        <motion.h1
          className="font-script text-[5.5rem] sm:text-[8rem] md:text-[10rem] text-blush-500 leading-[0.85] mb-6"
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.4, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
          style={{
            textShadow: "0 4px 30px rgba(212, 70, 104, 0.15)",
          }}
        >
          Luiza
        </motion.h1>

        {/* Elegant divider */}
        <motion.div
          className="flex items-center justify-center gap-3 mb-8"
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 0.8, delay: 1.2 }}
        >
          <div className="h-px w-16 bg-gradient-to-r from-transparent to-gold-300/60" />
          <div className="w-1.5 h-1.5 rounded-full bg-gold-400/40" />
          <div className="h-px w-16 bg-gradient-to-l from-transparent to-gold-300/60" />
        </motion.div>

        {/* Message */}
        <motion.p
          className="font-[family-name:var(--font-cormorant)] text-xl sm:text-2xl text-blush-800/50 leading-relaxed italic max-w-sm mx-auto mb-14"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.5 }}
        >
          Pessoal, eu estou quase chegando!
          <br />
          Mamãe e papai estão esperando por você.
        </motion.p>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.8 }}
        >
          <a
            href="#confirmar"
            className="btn-gold inline-flex items-center gap-2 px-10 py-4 sm:px-14 sm:py-5 bg-gradient-to-r from-blush-400 to-blush-500 text-white font-medium rounded-full shadow-xl shadow-blush-300/30 hover:shadow-blush-400/40 hover:scale-[1.03] transition-all duration-500 text-sm sm:text-base tracking-wide"
          >
            Confirmar Presença
          </a>
        </motion.div>
      </div>

      {/* Scroll hint */}
      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.8, duration: 0.6 }}
      >
        <span className="text-blush-300/50 text-[9px] uppercase tracking-[0.3em] font-light">
          Deslize
        </span>
        <ChevronDown className="w-4 h-4 text-blush-300/40 animate-float-down" />
      </motion.div>
    </section>
  );
}
