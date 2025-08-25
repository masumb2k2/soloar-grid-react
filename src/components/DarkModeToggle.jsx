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
      className="btn btn-outline h-10 px-3 rounded-full"
      aria-label="Toggle dark mode"
      title="Toggle dark mode"
    >
      {enabled ? '🌙' : '☀️'}
    </button>
  )
}
