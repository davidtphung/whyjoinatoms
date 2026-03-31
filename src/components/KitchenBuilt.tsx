"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const gridItems = [
  { built: "Type I hoods + Ansul system", ck: "30 hoods per CK facility" },
  { built: "Grease interceptors", ck: "Grease trap per bay" },
  { built: "Walk-in cooler/freezer", ck: "Walk-in per facility" },
  { built: "Makeup air balancing", ck: "MAU matched to CFM" },
  { built: "Heavy-power electrical", ck: "200A panels x 30 bays" },
  { built: "Equipment procurement", ck: "Owner-furnished turnover" },
  { built: "Operations handoff", ck: "Tenant onboarding (4-8 wk)" },
];

export default function KitchenBuilt() {
  return (
    <section className="relative py-[120px] md:py-[160px] px-6 overflow-hidden">
      <Image
        src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=1920&q=80"
        alt="Commercial kitchen equipment"
        fill
        className="object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-[rgba(5,5,5,0.85)] via-[rgba(5,5,5,0.9)] to-[rgba(5,5,5,0.95)]" />

      <div className="relative z-10 max-w-[1200px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="mb-16"
        >
          <h2 className="font-[family-name:var(--font-instrument-serif)] text-3xl md:text-4xl text-text-primary mb-3">
            I Built a Kitchen from the Ground Up
          </h2>
          <p className="font-[family-name:var(--font-instrument-serif)] text-xl md:text-2xl text-text-secondary font-normal">
            Then I Ran the Operation Inside It
          </p>
        </motion.div>

        <div className="grid gap-0">
          <div className="grid grid-cols-2 border-b border-border-default pb-3 mb-2">
            <p className="text-xs uppercase tracking-[3px] text-text-dim">
              What I Built
            </p>
            <p className="text-xs uppercase tracking-[3px] text-text-dim">
              CK Equivalent
            </p>
          </div>
          {gridItems.map((item, i) => (
            <motion.div
              key={item.built}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: i * 0.06,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="grid grid-cols-2 py-4 border-b border-border-default/40"
            >
              <p className="text-sm text-text-primary">{item.built}</p>
              <p className="text-sm text-text-accent">{item.ck}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
