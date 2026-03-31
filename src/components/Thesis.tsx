"use client";

import { motion } from "framer-motion";

export default function Thesis() {
  return (
    <section className="py-[120px] md:py-[160px] px-6">
      <div className="max-w-[1200px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="mb-16"
        >
          <p className="text-xs tracking-[4px] uppercase text-gold mb-6">
            THE INTERSECTION
          </p>
          <p className="font-[family-name:var(--font-instrument-serif)] text-2xl md:text-3xl text-text-primary leading-relaxed max-w-3xl">
            Most Construction PMs see a building.
            I see a revenue platform where every bay is a $6,600/month
            business unit and every day of delay is $220 in lost rent
            across 30 tenants.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 md:gap-16">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{
              duration: 0.7,
              delay: 0.1,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="border-l-2 border-text-accent pl-6"
          >
            <p className="text-xs tracking-[3px] uppercase text-text-accent mb-4">
              CREATIVE PROBLEM SOLVING
            </p>
            <p className="text-text-secondary leading-relaxed mb-3">
              B.Arch trained. I think spatially - how MEP systems interact,
              how construction sequences compress timelines, how design
              decisions upstream eliminate change orders downstream.
            </p>
            <p className="text-text-secondary leading-relaxed">
              I built a commercial kitchen from the ground up. I don&apos;t
              just read drawings - I&apos;ve stood in the space while the
              hoods were lifted into place.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{
              duration: 0.7,
              delay: 0.2,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="border-l-2 border-gold pl-6"
          >
            <p className="text-xs tracking-[3px] uppercase text-gold mb-4">
              ANALYTICAL DATA-DRIVEN PROCESS
            </p>
            <p className="text-text-secondary leading-relaxed mb-3">
              I built Bay Revenue Velocity - a 35-metric framework that
              connects construction speed directly to facility NOI. I mapped
              25 cities. I modeled $10.3B in delivery TAM.
            </p>
            <p className="text-text-secondary leading-relaxed">
              Then I built VALENCE - a 6-module platform that pre-screens
              plans against codes, audits pay apps, and tracks every
              metric that matters.
            </p>
          </motion.div>
        </div>
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
