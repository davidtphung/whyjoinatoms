"use client";

import { motion } from "framer-motion";
import { story } from "@/lib/data";

export default function Story() {
  return (
    <section className="py-[120px] md:py-[140px] px-6">
      <div className="max-w-[640px] mx-auto">
        {story.paragraphs.map((p, i) => (
          <motion.p
            key={p.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: i * 0.05, ease: [0.16, 1, 0.3, 1] }}
            className={`font-[family-name:var(--font-source-serif)] text-base md:text-[17px] leading-[1.75] text-text-primary ${
              i < story.paragraphs.length - 1 ? "mb-8" : ""
            } ${p.id === "connection" ? "text-text-emphasis" : ""}`}
          >
            {p.text}
          </motion.p>
        ))}
      </div>
    </section>
  );
}
