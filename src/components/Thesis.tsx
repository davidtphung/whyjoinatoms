"use client";

import { motion } from "framer-motion";

export default function Thesis() {
  return (
    <section className="py-[120px] md:py-[160px] px-6">
      <div className="max-w-[1200px] mx-auto grid md:grid-cols-[3fr_2fr] gap-16 items-start">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <p className="font-[family-name:var(--font-instrument-serif)] text-2xl md:text-3xl text-text-primary leading-relaxed italic">
            &ldquo;The Construction PM doesn&apos;t build restaurants. The PM
            builds the platform that 30 restaurants plug into.&rdquo;
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{
            duration: 0.7,
            delay: 0.15,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="space-y-6"
        >
          <p className="text-text-secondary leading-relaxed">
            A CloudKitchens facility isn&apos;t a building - it&apos;s a
            revenue platform. Each bay is an atomic unit: 3 items per bay,
            $6,600/month rent, delivery-only.
          </p>
          <p className="text-text-secondary leading-relaxed">
            The PM who understands this doesn&apos;t optimize for construction
            milestones. They optimize for{" "}
            <span className="text-text-accent">time-to-revenue</span>. Every
            day a bay sits empty during buildout is $220 in lost rent -
            across 30 bays, that&apos;s $6,600/day.
          </p>
          <p className="text-text-secondary leading-relaxed">
            This insight drove everything I built before applying.
          </p>
        </motion.div>
      </div>

      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="w-20 h-[2px] bg-gold mx-auto mt-20"
      />
    </section>
  );
}
