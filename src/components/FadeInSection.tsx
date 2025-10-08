"use client"

import { motion } from "framer-motion"

export default function FadeInSection({
  children,
  delay = 0,
  y = 40,
  once = true,
}: {
  children: React.ReactNode
  delay?: number
  y?: number
  once?: boolean
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y, scale: 0.98, filter: "blur(6px)" }}
      whileInView={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
      transition={{ duration: 0.8, delay, ease: "easeOut" }}
      viewport={{ once }}
    >
      {children}
    </motion.div>
  )
}
