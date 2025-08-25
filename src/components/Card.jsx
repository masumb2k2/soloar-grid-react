import React from 'react'
import { motion } from 'framer-motion'
export default function Card({ title, children, icon, className='' }) {
  return (
    <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.25 }} transition={{ duration: 0.5 }} className={`card ${className}`}>
      {icon && <div className="mb-3 text-3xl">{icon}</div>}
      {title && <h3 className="text-xl font-bold text-indigo-600 mb-2">{title}</h3>}
      <div className="text-sm leading-relaxed">{children}</div>
    </motion.div>
  )
}
