"use client"

import { motion } from "framer-motion"

export default function Features() {
  const features = [
    {
      title: "Always Available",
      desc: "Your AI friends are online 24/7, ready to chat whenever you need them.",
    },
    {
      title: "Understands Context",
      desc: "They remember your conversations and understand what you're going through.",
    },
    {
      title: "No Judgment",
      desc: "Share anything on your mind without fear of being judged or misunderstood.",
    },
    {
      title: "Web-Based",
      desc: "No app downloads needed. Just open your browser and start chatting.",
    },
  ]

  return (
    <motion.section
      id="about"
      className="py-20 bg-black/40"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      <div className="max-w-6xl mx-auto px-6">
        {/* Title */}
        <h2 className="text-4xl md:text-5xl font-display font-bold text-white text-center">
          Real Conversations, Real Understanding
        </h2>
        <p className="mt-4 text-center text-slate-400 max-w-2xl mx-auto">
          Gappe is a web platform where you can chat with AI companions who feel like real people.
          Each AI has their own personality, expertise, and way of talking.
        </p>

        {/* Grid of features */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {features.map((f, i) => (
            <div
              key={i}
              className="p-6 rounded-xl bg-slate-900/50 border border-slate-800 text-center hover:border-[--neon] transition-colors"
            >
              <h3 className="text-lg font-semibold text-[--neon]">{f.title}</h3>
              <p className="mt-2 text-sm text-slate-300">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </motion.section>
  )
}
