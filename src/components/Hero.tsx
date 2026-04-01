"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden flex items-center justify-center">
      {/* Cinematic poster background */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/poster-data-overlay.png')" }}
      />

      {/* Gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-[rgba(5,5,5,0.55)] via-[rgba(5,5,5,0.35)] to-[rgba(5,5,5,0.97)]" />
      <div className="absolute inset-0 bg-gradient-to-r from-[rgba(5,5,5,0.4)] via-transparent to-[rgba(5,5,5,0.4)]" />

      {/* Art deco corner accents - hidden on mobile */}
      <div className="hidden md:block absolute top-8 left-8 w-14 h-14 border-t border-l border-gold/35 pointer-events-none" />
      <div className="hidden md:block absolute top-8 right-8 w-14 h-14 border-t border-r border-gold/35 pointer-events-none" />
      <div className="hidden md:block absolute bottom-16 left-8 w-14 h-14 border-b border-l border-gold/35 pointer-events-none" />
      <div className="hidden md:block absolute bottom-16 right-8 w-14 h-14 border-b border-r border-gold/35 pointer-events-none" />

      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-gold/30 to-transparent pointer-events-none" />

      <div className="relative z-10 text-center px-6 max-w-4xl">
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-[10px] tracking-[8px] uppercase text-gold mb-10"
        >
          ATOMS &nbsp;/&nbsp; CLOUDKITCHENS
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="font-[family-name:var(--font-instrument-serif)] text-4xl md:text-6xl lg:text-7xl text-text-primary font-normal mb-4 leading-tight"
        >
          I Think in Blueprints.
        </motion.h1>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="font-[family-name:var(--font-instrument-serif)] text-4xl md:text-6xl lg:text-7xl text-text-primary font-normal mb-10 leading-tight"
        >
          I Decide in Data.
        </motion.h1>

        {/* Art deco ornament divider */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="flex items-center justify-center gap-3 mb-10"
        >
          <div className="h-[1px] w-14 bg-gradient-to-r from-transparent to-gold/70" />
          <div className="w-1.5 h-1.5 bg-gold rotate-45 flex-shrink-0" />
          <div className="h-[1px] w-5 bg-gold/70" />
          <div className="w-1.5 h-1.5 bg-gold rotate-45 flex-shrink-0" />
          <div className="h-[1px] w-14 bg-gradient-to-l from-transparent to-gold/70" />
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.4 }}
          className="text-base md:text-lg text-text-primary/80 max-w-xl mx-auto"
        >
          The Construction PM at the intersection of
          design thinking and revenue engineering.
        </motion.p>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 2.0 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <svg
          className="w-5 h-5 text-gold/40 animate-bounce-subtle"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={1}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </motion.div>
    </section>
  );
}
