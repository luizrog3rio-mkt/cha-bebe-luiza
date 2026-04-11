"use client";

import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden px-6">
      {/* Animated gradient orbs */}
      <div className="absolute inset-0 z-0">
        <div className="gradient-orb gradient-orb-1" />
        <div className="gradient-orb gradient-orb-2" />
        <div className="gradient-orb gradient-orb-3" />
      </div>

      {/* Grain overlay */}
      <div
        className="absolute inset-0 z-[1] opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
        }}
      />

      <div className="relative z-10 text-center max-w-2xl mx-auto">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <span className="inline-flex items-center gap-2 px-5 py-2 rounded-full glass text-pink-300 text-xs sm:text-sm tracking-[0.25em] uppercase font-medium mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-pink-400 animate-pulse" />
            Chá de Bebê
          </span>
        </motion.div>

        {/* Name with reveal */}
        <motion.h1
          className="font-script text-8xl sm:text-9xl md:text-[10rem] text-white text-glow leading-none mb-8"
          initial={{ opacity: 0, scale: 0.8, y: 40 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
        >
          Luiza
        </motion.h1>

        {/* Tagline - word by word */}
        <div className="mb-12 overflow-hidden">
          {["Pessoal, eu estou quase chegando!", "Mamãe e papai estão esperando por você."].map(
            (line, i) => (
              <motion.p
                key={i}
                className="text-white/50 text-base sm:text-lg leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 1.0 + i * 0.2 }}
              >
                {line}
              </motion.p>
            )
          )}
        </div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.5 }}
        >
          <a
            href="#confirmar"
            className="btn-shimmer inline-flex items-center gap-3 px-10 py-4 sm:px-12 sm:py-5 bg-gradient-to-r from-pink-500 to-rose-400 text-white font-semibold rounded-full shadow-2xl shadow-pink-500/25 hover:shadow-pink-500/40 hover:scale-105 transition-all duration-300 text-base sm:text-lg"
          >
            Confirmar Presença
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5 }}
      >
        <div className="flex flex-col items-center gap-2">
          <span className="text-white/20 text-[10px] uppercase tracking-[0.3em]">
            Role
          </span>
          <ChevronDown className="w-5 h-5 text-white/30 animate-bounce-slow" />
        </div>
      </motion.div>
    </section>
  );
}
