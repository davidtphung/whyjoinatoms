"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function PhysicalDynamism() {
  return (
    <section className="relative h-[55vh] md:h-[65vh] overflow-hidden">
      <Image
        src="/poster-physical-dynamism.jpg"
        alt="Physical Dynamism"
        fill
        className="object-cover object-top"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[rgba(5,5,5,0.15)] to-[#050505]" />
      <div className="absolute inset-0 bg-gradient-to-r from-[rgba(5,5,5,0.5)] via-transparent to-[rgba(5,5,5,0.5)]" />

      <div className="absolute top-10 left-10 w-14 h-14 border-t border-l border-gold/25 pointer-events-none" />
      <div className="absolute top-10 right-10 w-14 h-14 border-t border-r border-gold/25 pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-14 h-14 border-b border-l border-gold/25 pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-14 h-14 border-b border-r border-gold/25 pointer-events-none" />

      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.0, ease: [0.16, 1, 0.3, 1] }}
          className="text-[10px] tracking-[8px] uppercase text-gold mb-6"
        >
          PHYSICAL DYNAMISM
        </motion.p>

        <motion.div
          initial={{ scaleX: 0, opacity: 0 }}
          whileInView={{ scaleX: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex items-center justify-center gap-3"
        >
          <div className="h-[1px] w-12 bg-gradient-to-r from-transparent to-gold/50" />
          <div className="w-1 h-1 bg-gold rotate-45 flex-shrink-0" />
          <div className="h-[1px] w-12 bg-gradient-to-l from-transparent to-gold/50" />
        </motion.div>
      </div>
    </section>
  );
}
