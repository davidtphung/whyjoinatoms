"use client";

import { motion } from "framer-motion";

const rows = [
  { label: "Saw the problem", action: "Knew CK needs faster bay delivery" },
  { label: "Built the proof", action: "Built VALENCE: 6-module platform" },
  { label: "Did the research", action: "Mapped 25 cities, 41.2M people, $10.3B TAM" },
  { label: "Created the metric", action: "Bay Revenue Velocity (BRV) framework" },
  { label: "Then applied", action: "Applying as Construction PM" },
];

export default function BiasForAction() {
  return (
    <section className="py-[120px] md:py-[160px] px-6 bg-bg-card">
      <div className="max-w-[1200px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="mb-16"
        >
          <p className="text-[10px] tracking-[5px] uppercase text-gold mb-4">
            THE PATTERN
          </p>
          <h2 className="font-[family-name:var(--font-instrument-serif)] text-3xl md:text-4xl text-text-primary">
            Bias for Action
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="space-y-0">
            <div className="grid grid-cols-[180px_1fr] border-b border-border-default pb-3 mb-2">
              <p className="text-xs uppercase tracking-wider text-text-dim font-normal">
                Pattern
              </p>
              <p className="text-xs uppercase tracking-wider text-text-dim font-normal">
                David T Phung &middot; CK
              </p>
            </div>
            {rows.map((row, i) => (
              <motion.div
                key={row.label}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: 0.2 + i * 0.08,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="grid grid-cols-[180px_1fr] py-4 border-b border-border-default/50"
              >
                <p className="text-sm text-gold font-medium">{row.label}</p>
                <p className="text-sm text-text-primary">{row.action}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
