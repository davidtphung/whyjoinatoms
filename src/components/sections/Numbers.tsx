"use client";

import { motion } from "framer-motion";
import { numbers } from "@/lib/data";

export default function Numbers() {
  return (
    <section className="py-[120px] md:py-[140px] px-6 bg-bg-surface">
      <div className="max-w-[960px] mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="font-[family-name:var(--font-dm-serif)] text-2xl md:text-3xl text-text-primary mb-14"
        >
          By the Numbers
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-x-12 gap-y-10">
          {numbers.map((m, i) => (
            <motion.div
              key={m.value}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.05, ease: [0.16, 1, 0.3, 1] }}
              className="border-b border-border-default pb-6"
            >
              <p className="font-[family-name:var(--font-jetbrains)] text-3xl md:text-[36px] text-text-primary mb-2">
                {m.value}
              </p>
              <p className="text-sm text-text-muted leading-relaxed">
                {m.context}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
