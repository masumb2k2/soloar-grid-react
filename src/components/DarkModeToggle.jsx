import React, { useEffect, useState } from 'react'

export default function DarkModeToggle() {
  const [enabled, setEnabled] = useState(false)

  useEffect(() => {
    const saved = localStorage.getItem('theme')
    const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches
    const initial = saved ? saved === 'dark' : prefersDark
    setEnabled(initial)
    document.documentElement.classList.toggle('dark', initial)
  }, [])

  useEffect(() => {
    document.documentElement.classList.toggle('dark', enabled)
    localStorage.setItem('theme', enabled ? 'dark' : 'light')
  }, [enabled])

  return (
    <button
      onClick={() => setEnabled(!enabled)}
      className={`btn h-10 w-10 rounded-full transition-colors duration-300 ease-in-out 
        ${enabled ? 'bg-secondary text-white hover:bg-secondary/80' : 'bg-primary text-white hover:bg-primary/80'}`}
      aria-label="Toggle dark mode"
      title="Toggle dark mode"
    >
      {enabled ? '🌙' : '☀️'}
    </button>
  )
}
