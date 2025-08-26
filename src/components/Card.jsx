import React from 'react'
import { motion } from 'framer-motion'

export default function Card({ title, children, icon, className = '' }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.5 }}
      className={`card relative overflow-hidden group bg-primary text-white p-6 rounded-xl transition-all duration-300 ease-in-out ${className}`}
    >
      {icon && (
        <div className="mb-3 text-3xl">
          {icon}
        </div>
      )}
      {title && <h3 className="text-xl font-bold mb-2">{title}</h3>}
      <div className="text-sm leading-relaxed">{children}</div>

      {/* Hover effect on the card */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-secondary/0 to-secondary/0 group-hover:from-secondary/10 group-hover:to-secondary/20 transition-colors" />
    </motion.div>
  )
}
