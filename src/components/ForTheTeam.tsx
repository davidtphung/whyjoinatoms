"use client";

import { motion } from "framer-motion";

export default function ForTheTeam() {
  return (
    <section className="py-[160px] md:py-[200px] px-6">
      <div className="max-w-[800px] mx-auto text-center">
        <motion.p
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="font-[family-name:var(--font-instrument-serif)] text-3xl md:text-4xl text-text-primary leading-snug mb-8"
        >
          I didn&apos;t wait to be hired to start solving the problem.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{
            duration: 0.7,
            delay: 0.1,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="text-lg text-text-secondary mb-6"
        >
          The prototype is live. The analysis is done. The metric framework
          exists.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{
            duration: 0.7,
            delay: 0.2,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="text-base text-text-dim mb-12"
        >
          Every construction decision at CK is a revenue decision. The PM who
          understands that builds differently.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.7,
            delay: 0.3,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="mb-16"
        >
          <a
            href="https://valence.davidtphung.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block border border-text-primary/80 text-text-primary px-8 py-3.5 text-sm tracking-wider uppercase transition-colors duration-300 hover:bg-text-primary hover:text-bg-primary"
          >
            View VALENCE &rarr;
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="space-y-1"
        >
          <p className="text-sm text-text-dim">
            David T Phung &middot; B.Arch &middot; NLT143 &middot; Los Angeles,
            CA
          </p>
          <p className="text-sm text-text-dim">davidtphung@nlt143.energy</p>
        </motion.div>
      </div>
    </section>
  );
}
