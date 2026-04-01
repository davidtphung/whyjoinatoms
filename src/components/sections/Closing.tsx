"use client";

import { motion } from "framer-motion";
import { closing } from "@/lib/data";

export default function Closing() {
  return (
    <section className="relative py-[140px] md:py-[180px] px-6 overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-top bg-no-repeat"
        style={{ backgroundImage: "url('/poster-physical-dynamism.jpg')" }}
      />
      <div className="absolute inset-0 bg-[rgba(5,5,5,0.7)]" />

      <div className="relative z-10 max-w-[640px] mx-auto text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="font-[family-name:var(--font-dm-serif)] text-xl md:text-[28px] text-text-primary leading-snug mb-6"
        >
          {closing.line1}
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="text-lg text-text-muted mb-12"
        >
          {closing.line2}
        </motion.p>

        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.25 }}
          className="w-16 h-[2px] bg-gold mx-auto mb-10"
        />

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.35 }}
          className="space-y-1"
        >
          <p className="text-base text-text-primary font-medium">{closing.name}</p>
          <p className="text-sm text-gold">
            {closing.email} / {closing.phone}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
