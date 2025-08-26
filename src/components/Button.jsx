import React from 'react'

export default function Button({ children, variant = 'primary', className = '', ...props }) {
  const base = 'btn h-11 px-5 rounded-xl transition-all duration-300 ease-in-out'

  // Define button styles based on variant and colors
  const styles = variant === 'primary'
    ? 'bg-primary text-white hover:bg-primary/80' // Primary button
    : 'bg-transparent border-2 border-primary text-primary hover:bg-primary/10 hover:text-white' // Outline button

  return (
    <button
      className={`${base} ${styles} ${className}`}
      {...props}
    >
      {children}
    </button>
  )
}
