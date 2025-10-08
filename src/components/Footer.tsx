"use client"

import { Github, Mail, Instagram } from "lucide-react"
import { motion } from "framer-motion"

export default function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="border-t border-slate-800 bg-black/50 py-16 mt-24 text-center flex flex-col items-center justify-center"
    >
      <div className="max-w-3xl mx-auto px-6 flex flex-col items-center justify-center gap-8">
        {/* Brand */}
        <div>
          <h3 className="text-3xl font-display text-[--neon]">gappe</h3>
          <p className="mt-3 text-slate-400 text-sm max-w-md mx-auto leading-relaxed">
            Chat with your favorite AI companions anytime, anywhere. 
            Built with <span className="text-pink-500">❤️</span> using Next.js & TailwindCSS.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-lg font-semibold text-white mb-3">Quick Links</h4>
          <ul className="space-y-2 text-slate-400 text-sm">
            <li>
              <a href="#about" className="hover:text-[--neon] transition-colors">
                About
              </a>
            </li>
            <li>
              <a href="#friends" className="hover:text-[--neon] transition-colors">
                AI Companions
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-[--neon] transition-colors">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Social Icons */}
        <div>
          <h4 className="text-lg font-semibold text-white mb-4">Connect With Us</h4>
          <div className="flex justify-center gap-6 text-slate-400">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[--neon] transition-colors"
            >
              <Github size={22} />
            </a>
            <a
              href="mailto:gappe@gmail.com"
              className="hover:text-[--neon] transition-colors"
            >
              <Mail size={22} />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[--neon] transition-colors"
            >
              <Instagram size={22} />
            </a>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-6 text-slate-500 text-sm border-t border-slate-800 w-full mt-8">
          © {new Date().getFullYear()} Gappe. All rights reserved.
        </div>
      </div>
    </motion.footer>
  )
}
