"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function CinematicPoster() {
  return (
    <section className="relative h-[65vh] md:h-[75vh] overflow-hidden">
      <Image
        src="/poster-day-one.png"
        alt="ATOMS — Day One"
        fill
        className="object-cover object-center"
      />

      {/* Heavy vignette to blend with site bg */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[rgba(5,5,5,0.25)] to-[#050505]" />
      <div className="absolute inset-0 bg-gradient-to-r from-[rgba(5,5,5,0.6)] via-transparent to-[rgba(5,5,5,0.6)]" />

      {/* Art deco corner accents */}
      <div className="absolute top-10 left-10 w-16 h-16 border-t border-l border-gold/30 pointer-events-none" />
      <div className="absolute top-10 right-10 w-16 h-16 border-t border-r border-gold/30 pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-16 h-16 border-b border-l border-gold/30 pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-16 h-16 border-b border-r border-gold/30 pointer-events-none" />

      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6">
        <motion.p
          initial={{ opacity: 0, letterSpacing: "0.3em" }}
          whileInView={{ opacity: 1, letterSpacing: "0.6em" }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="text-[10px] tracking-[6px] uppercase text-gold mb-8"
        >
          ATOMS &nbsp;/&nbsp; THE ATOMS PROJECT
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.0, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="font-[family-name:var(--font-instrument-serif)] text-4xl md:text-6xl text-text-primary leading-tight mb-3"
        >
          Day One.
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-sm md:text-base text-text-secondary tracking-wide italic max-w-sm"
        >
          The journey begins in the dark.
        </motion.p>

        <motion.div
          initial={{ scaleX: 0, opacity: 0 }}
          whileInView={{ scaleX: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="flex items-center justify-center gap-3 mt-8"
        >
          <div className="h-[1px] w-12 bg-gradient-to-r from-transparent to-gold/60" />
          <div className="w-1 h-1 bg-gold rotate-45 flex-shrink-0" />
          <div className="h-[1px] w-12 bg-gradient-to-l from-transparent to-gold/60" />
        </motion.div>
      </div>
    </section>
  );
}
