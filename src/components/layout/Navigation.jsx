import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'

const navLinks = [
  { name: 'Home',     path: '/' },
  { name: 'Classes',  path: '/classes' },
  { name: 'About',    path: '/about' },
  { name: 'Schedule', path: '/schedule' },
  { name: 'Contact',  path: '/contact' },
]

export default function Navigation() {
  const [isOpen, setIsOpen]       = useState(false)
  const [scrolled, setScrolled]   = useState(false)
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Close mobile menu on route change
  useEffect(() => { setIsOpen(false) }, [location.pathname])

  const isActive = (path) => location.pathname === path

  return (
    <nav
      className="fixed w-full top-0 z-50 transition-all duration-500"
      style={{
        background: scrolled
          ? 'rgba(5,5,5,0.82)'
          : 'transparent',
        backdropFilter: scrolled ? 'blur(20px) saturate(180%)' : 'none',
        WebkitBackdropFilter: scrolled ? 'blur(20px) saturate(180%)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(124,58,237,0.12)' : '1px solid transparent',
        boxShadow: scrolled ? '0 4px 40px rgba(0,0,0,0.4)' : 'none',
      }}
    >
      {/* Top accent line — only when scrolled */}
      {scrolled && (
        <div className="absolute top-0 left-0 right-0 h-px"
          style={{ background: 'linear-gradient(90deg, transparent, rgba(124,58,237,0.5), rgba(201,169,110,0.3), transparent)' }} />
      )}

      <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-14">
        <div className="flex items-center justify-between h-[72px]">

          {/* ── Logo ── */}
          <Link to="/" className="flex items-center gap-3 group">
            {/* Yin-yang glyph */}
            <div className="relative w-7 h-7 flex-shrink-0">
              <svg viewBox="0 0 100 100" className="w-full h-full transition-all duration-500 group-hover:rotate-180"
                style={{ transitionTimingFunction: 'cubic-bezier(0.23,1,0.32,1)' }}>
                <circle cx="50" cy="50" r="46" fill="none" stroke="rgba(201,169,110,0.35)" strokeWidth="1.5" />
                <path d="M50 4a46 46 0 0 1 0 92A23 23 0 0 1 50 50A23 23 0 0 0 50 4z" fill="rgba(201,169,110,0.25)" />
                <circle cx="50" cy="27" r="6" fill="rgba(201,169,110,0.6)" />
                <circle cx="50" cy="73" r="6" fill="rgba(201,169,110,0.2)" />
              </svg>
            </div>
            {/* Wordmark */}
            <div className="flex flex-col leading-none">
              <span className="font-display text-[1.4rem] italic font-light tracking-[0.12em] transition-all duration-300"
                style={{ color: 'rgba(201,169,110,0.9)' }}>
                Dark Yoga
              </span>
              <span className="font-sans text-[0.52rem] tracking-[0.35em] uppercase"
                style={{ color: 'rgba(255,255,255,0.25)', marginTop: '1px' }}>
                ® Waldviertel
              </span>
            </div>
          </Link>

          {/* ── Desktop links ── */}
          <div className="hidden md:flex items-center gap-9">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`nav-link ${isActive(link.path) ? 'active' : ''}`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* ── CTA ── */}
          <div className="hidden md:block">
            <a
              href="mailto:info@darkyoga.at"
              className="relative inline-flex items-center gap-2 px-6 py-2.5 text-[0.65rem] tracking-[0.28em] uppercase font-sans transition-all duration-400"
              style={{
                color: 'rgba(201,169,110,0.85)',
                border: '1px solid rgba(201,169,110,0.22)',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.color = 'rgba(201,169,110,1)'
                e.currentTarget.style.borderColor = 'rgba(201,169,110,0.55)'
                e.currentTarget.style.boxShadow = '0 0 25px rgba(201,169,110,0.18)'
              }}
              onMouseLeave={e => {
                e.currentTarget.style.color = 'rgba(201,169,110,0.85)'
                e.currentTarget.style.borderColor = 'rgba(201,169,110,0.22)'
                e.currentTarget.style.boxShadow = 'none'
              }}
            >
              Book Now
            </a>
          </div>

          {/* ── Hamburger ── */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden flex flex-col gap-[5px] p-2 group"
            aria-label="Toggle menu"
          >
            <span className={`block h-px w-6 transition-all duration-300 origin-center ${isOpen ? 'rotate-45 translate-y-[7px] bg-purple-400' : 'bg-white/50 group-hover:bg-white/80'}`} />
            <span className={`block h-px w-4 transition-all duration-300 ${isOpen ? 'opacity-0 w-0' : 'bg-white/50 group-hover:bg-white/80'}`} />
            <span className={`block h-px w-6 transition-all duration-300 origin-center ${isOpen ? '-rotate-45 -translate-y-[7px] bg-purple-400' : 'bg-white/50 group-hover:bg-white/80'}`} />
          </button>
        </div>
      </div>

      {/* ── Mobile menu ── */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.3, ease: [0.22,1,0.36,1] }}
            className="md:hidden absolute top-[72px] left-0 right-0 min-h-screen"
            style={{
              background: 'rgba(5,5,5,0.97)',
              backdropFilter: 'blur(24px)',
              borderTop: '1px solid rgba(124,58,237,0.12)',
            }}
          >
            {/* Purple glow inside mobile menu */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-64 rounded-full blur-3xl pointer-events-none opacity-10"
              style={{ background: 'radial-gradient(circle, #7c3aed, transparent)' }} />

            <div className="relative z-10 flex flex-col px-8 py-12 gap-1">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.path}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.07, duration: 0.4, ease: [0.22,1,0.36,1] }}
                >
                  <Link
                    to={link.path}
                    className="flex items-center justify-between py-4 border-b transition-colors duration-200 group"
                    style={{ borderColor: 'rgba(255,255,255,0.05)' }}
                  >
                    <span className={`font-display text-3xl italic font-light transition-colors duration-200 ${
                      isActive(link.path) ? 'text-purple-300' : 'text-white/55 group-hover:text-white/90'
                    }`}>
                      {link.name}
                    </span>
                    <span className="font-sans text-[0.6rem] tracking-[0.3em] text-white/15">
                      0{i + 1}
                    </span>
                  </Link>
                </motion.div>
              ))}

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.45, duration: 0.4 }}
                className="pt-8"
              >
                <a href="mailto:info@darkyoga.at"
                  className="block text-center py-4 font-sans text-[0.68rem] tracking-[0.3em] uppercase transition-all duration-300"
                  style={{ color: 'rgba(201,169,110,0.8)', border: '1px solid rgba(201,169,110,0.2)' }}>
                  Book Now — info@darkyoga.at
                </a>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}
