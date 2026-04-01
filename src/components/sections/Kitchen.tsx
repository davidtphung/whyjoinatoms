"use client";

import { motion } from "framer-motion";
import { kitchenSystems } from "@/lib/data";

export default function Kitchen() {
  return (
    <section className="relative py-[120px] md:py-[140px] px-6 overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/poster-data-overlay.png')" }}
      />
      <div className="absolute inset-0 bg-[rgba(5,5,5,0.82)]" />

      <div className="relative z-10 max-w-[960px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="mb-12"
        >
          <h2 className="font-[family-name:var(--font-dm-serif)] text-2xl md:text-[36px] text-text-primary leading-tight mb-3">
            I Built a Kitchen. Then I Ran It.
          </h2>
          <p className="text-base text-text-muted">
            Same systems CloudKitchens installs in every facility.
          </p>
        </motion.div>

        <div>
          <div className="grid grid-cols-2 border-b border-border-default pb-3 mb-1">
            <p className="text-xs uppercase tracking-wider text-text-dim">What I Installed</p>
            <p className="text-xs uppercase tracking-wider text-text-dim">CK Equivalent</p>
          </div>
          {kitchenSystems.map((item, i) => (
            <motion.div
              key={item.system}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.04 }}
              className="grid grid-cols-2 py-4 border-b border-border-default/40"
            >
              <p className="text-sm text-text-primary pr-4">{item.system}</p>
              <p className="text-sm text-text-muted">{item.ckEquivalent}</p>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-sm text-text-dim mt-8"
        >
          Scaled production from 250 to 1,400 units per week after the construction was complete.
        </motion.p>
      </div>
    </section>
  );
}
