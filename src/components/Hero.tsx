"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden flex items-center justify-center">
      <Image
        src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1920&q=80"
        alt="Construction scaffolding at night"
        fill
        priority
        className="object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-[rgba(5,5,5,0.3)] via-[rgba(5,5,5,0.6)] to-[rgba(5,5,5,0.95)]" />

      <div className="relative z-10 text-center px-6">
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-xs tracking-[6px] uppercase text-gold mb-8"
        >
          ATOMS
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="font-[family-name:var(--font-instrument-serif)] text-5xl md:text-7xl text-text-primary font-normal mb-8"
        >
          I Didn&apos;t Wait
        </motion.h1>

        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.6, delay: 0.9 }}
          className="w-20 h-[2px] bg-gold mx-auto mb-8"
        />

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.1 }}
          className="text-base text-text-dim mb-3"
        >
          Construction PM &middot; CloudKitchens &middot; Los Angeles
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.3 }}
          className="text-sm text-text-dim/60"
        >
          David T Phung &middot; B.Arch &middot; NLT143
        </motion.p>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 1.8 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <svg
          className="w-6 h-6 text-text-dim/40 animate-bounce-subtle"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={1.5}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </motion.div>
    </section>
  );
}
