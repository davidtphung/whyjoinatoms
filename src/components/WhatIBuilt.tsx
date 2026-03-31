"use client";

import { motion } from "framer-motion";

const cards = [
  {
    label: "SOFTWARE",
    title: "VALENCE Platform",
    link: "https://valence.davidtphung.com",
    linkText: "valence.davidtphung.com",
    metric: "6 modules / 3,494 lines / Live prototype",
    description:
      "Pre-screens plans against building codes, audits pay applications, compares bids, and tracks construction milestones. Built specifically for CloudKitchens facility delivery.",
  },
  {
    label: "RESEARCH",
    title: "25-City Gap Analysis",
    link: null,
    linkText: null,
    metric: "41.2M people / $10.3B delivery / Zero CK presence",
    description:
      "Mapped CK's 43+ markets against top 100 metros. Identified density nodes, university clusters, and 5-year demand models for expansion planning.",
  },
  {
    label: "FRAMEWORK",
    title: "Bay Revenue Velocity",
    link: null,
    linkText: null,
    metric: "BRV = 0.283 > 0.354 (+25%) / $551K-$773K PM value",
    description:
      "The single metric connecting construction speed to facility NOI. 35 metrics across 7 categories. Proves every day saved in buildout has a direct revenue impact.",
  },
];

export default function WhatIBuilt() {
  return (
    <section className="py-[120px] md:py-[160px] px-6">
      <div className="max-w-[1200px] mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="font-[family-name:var(--font-instrument-serif)] text-3xl md:text-4xl text-text-primary mb-16"
        >
          What I Built Before Applying
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-6">
          {cards.map((card, i) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{
                duration: 0.7,
                delay: i * 0.1,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="bg-bg-card border border-border-default rounded-lg p-8 transition-colors duration-300 hover:border-text-accent"
            >
              <p className="text-xs tracking-[3px] uppercase text-text-accent mb-4">
                {card.label}
              </p>
              <h3 className="text-xl font-semibold text-text-primary mb-3">
                {card.title}
              </h3>
              {card.link && (
                <a
                  href={card.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block text-sm font-[family-name:var(--font-geist-mono)] text-pass hover:underline mb-3"
                >
                  {card.linkText}
                </a>
              )}
              <p className="text-sm font-[family-name:var(--font-geist-mono)] text-pass mb-4">
                {card.metric}
              </p>
              <p className="text-sm text-text-secondary leading-relaxed">
                {card.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
