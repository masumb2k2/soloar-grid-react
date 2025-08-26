import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import DarkModeToggle from './DarkModeToggle.jsx'

const navItems = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About Us' },
  { to: '/products', label: 'Products/Services' },
  { to: '/projects', label: 'Projects' },
  { to: '/blog', label: 'News/Blog' },
  { to: '/contact', label: 'Contact Us' },
  { to: '/careers', label: 'Careers' },
]

export default function Header() {
  const [open, setOpen] = useState(false)
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/70 dark:border-slate-700/60 bg-white/70 dark:bg-slate-900/70 backdrop-blur">
      <div className="container-g h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 font-extrabold tracking-tight">
          <img src="/images/logo.svg" alt="Soloar Grid Power Ltd." className="h-8 w-8" />
          <span>Soloar Grid Power Ltd.</span>
        </Link>

        <nav className="hidden md:flex items-center gap-1">
          {navItems.map(({to, label}) => (
            <NavLink key={to}
              to={to}
              className={({isActive}) => 
                'px-3 py-2 rounded-lg font-semibold transition ' + 
                (isActive 
                  ? 'bg-primary text-white' 
                  : 'hover:bg-primary/10 dark:hover:bg-primary/20 hover:text-primary') // Hover and active state
              }
              onClick={() => setOpen(false)}
            >
              {label}
            </NavLink>
          ))}
          <DarkModeToggle />
        </nav>

        <div className="md:hidden flex items-center gap-2">
          <DarkModeToggle />
          <button onClick={() => setOpen(true)} className="btn btn-outline h-10 px-3 rounded-lg" aria-label="Open Menu">☰</button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.aside
            initial={{x: '100%'}} animate={{x: 0}} exit={{x: '100%'}} transition={{type: 'tween', duration: 0.25}}
            className="fixed inset-y-0 right-0 w-80 max-w-[85vw] bg-white dark:bg-slate-900 border-l border-slate-200/70 dark:border-slate-700/60 shadow-soft p-6"
          >
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-2 font-extrabold">
                <img src="/images/logo.svg" alt="logo" className="h-7 w-7" /><span>Menu</span>
              </div>
              <button onClick={() => setOpen(false)} className="btn btn-outline h-10 px-3 rounded-lg" aria-label="Close Menu">✕</button>
            </div>
            <div className="grid gap-2">
              {navItems.map(({to, label}) => (
                <NavLink key={to}
                  to={to}
                  className={({isActive}) => 
                    'px-3 py-2 rounded-lg font-semibold ' + 
                    (isActive 
                      ? 'bg-primary text-white' 
                      : 'hover:bg-primary/10 dark:hover:bg-primary/20 hover:text-primary') // Hover and active state
                  }
                  onClick={() => setOpen(false)}
                >
                  {label}
                </NavLink>
              ))}
            </div>
          </motion.aside>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {open && (
          <motion.div initial={{opacity: 0}} animate={{opacity: 0.5}} exit={{opacity: 0}} transition={{duration: 0.2}} onClick={() => setOpen(false)} className="fixed inset-0 bg-black md:hidden" />
        )}
      </AnimatePresence>
    </header>
  )
}
