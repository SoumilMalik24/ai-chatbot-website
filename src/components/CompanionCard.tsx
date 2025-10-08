"use client"

import { motion } from "framer-motion"

interface CompanionProps {
  name: string
  role: string
  bio: string
  avatar: string
  highlight?: boolean
}

export default function CompanionCard({
  name,
  role,
  bio,
  avatar,
  highlight,
}: CompanionProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true }}
      className={`relative bg-slate-900/70 border rounded-2xl p-8 shadow-md text-center transition-transform duration-200 hover:-translate-y-2 ${
        highlight
          ? "border-[--neon] shadow-[0_0_30px_rgba(0,255,140,0.4)]"
          : "border-slate-800"
      }`}
    >
      <div>
        <img
          src={avatar}
          alt={`${name} avatar`}
          className="w-24 h-24 rounded-full mx-auto ring-4 ring-offset-2 ring-slate-900"
        />

        <h3 className="mt-6 text-2xl font-display text-white">{name}</h3>

        <p className="mt-1 text-xs text-[--neon] font-semibold">{role}</p>

        <p className="mt-4 text-slate-400">{bio}</p>
      </div>

      <div className="mt-6">
        <button className="px-6 py-3 rounded-full bg-rose-500 text-white hover:bg-rose-600 transition-colors">
          Chat with {name}
        </button>
      </div>
    </motion.article>
  )
}
