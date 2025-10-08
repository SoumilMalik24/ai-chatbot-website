"use client"

import { motion } from "framer-motion"

export default function Hero() {
  return (
    <motion.section
      id="hero"
      className="relative pt-16 pb-28 flex items-center justify-center text-center"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      <div className="max-w-3xl mx-auto">
        {/* Title */}
        <h1 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-gray-200 mb-6">
          Meet Your AI Companions
        </h1>

        {/* subtitle */}
        <p className="text-lg text-gray-400 max-w-2xl mx-auto">
          Chat with AI friends who understand you. Each one has a unique
          personality and is here to help you with whatever you need.
        </p>

        {/* CTA button */}
        <div className="mt-10">
          <button className="px-6 py-3 text-lg font-extrabold font-display text-[--neon] border-2 border-[--neon] rounded-2xl 
    hover:bg-[--neon] hover:text-black transition duration-300 shadow-[0_0_10px_var(--neon),0_0_20px_var(--neon)]">
            <span>Continue with Google</span>
          </button>
        </div>
      </div>

      {/* Background halo effect */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
        {/* Outer soft glow */}
        <div
          className="w-[1100px] h-[650px] rounded-full blur-3xl opacity-30"
          style={{
            background:
              "radial-gradient(circle, rgba(0,255,150,0.25), transparent 70%)",
          }}
        />
        {/* Inner bright glow */}
        <div
          className="absolute w-[600px] h-[400px] rounded-full blur-xl opacity-50"
          style={{
            background:
              "radial-gradient(circle, rgba(0,255,150,0.5), transparent 50%)",
          }}
        />
      </div>
    </motion.section>
  )
}
