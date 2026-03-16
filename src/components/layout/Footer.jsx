import React from 'react'
import { Link } from 'react-router-dom'
import { Instagram, Facebook, Mail, MapPin } from 'lucide-react'

const Footer = () => {
  const year = new Date().getFullYear()

  const quickLinks = [
    { name: 'Home', path: '/' },
    { name: 'Classes & Retreats', path: '/classes' },
    { name: 'Schedule', path: '/schedule' },
    { name: 'About Suyin', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ]

  const socialLinks = [
    { icon: Instagram, url: 'https://www.instagram.com/', label: 'Instagram' },
    { icon: Facebook, url: 'https://www.facebook.com/darkyoga/', label: 'Facebook' },
  ]

  return (
    <footer className="relative bg-[#050505] border-t border-purple-500/15">
      {/* Top gradient line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-500/60 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-14">

          {/* Brand column */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <span className="font-display text-2xl font-light tracking-[0.2em] text-yellow-500/90">
                DARK YOGA®
              </span>
            </div>
            <p className="font-display italic text-white/40 text-sm leading-relaxed mb-2">
              "Der Weg ins Licht führt durch die Dunkelheit."
            </p>
            <p className="font-sans text-white/25 text-xs tracking-widest mb-6">
              The way to the light leads through the darkness.
            </p>
            <p className="font-sans text-white/30 text-xs leading-relaxed">
              Founded by Suyin Orlowski in the mystical Waldviertel of Austria.
              The royal path of meditation.
            </p>

            {/* Social icons */}
            <div className="flex gap-4 mt-8">
              {socialLinks.map(({ icon: Icon, url, label }) => (
                <a
                  key={label}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="text-white/30 hover:text-purple-400 transition-all duration-300"
                  onMouseEnter={e => e.currentTarget.style.filter = 'drop-shadow(0 0 10px rgba(168,85,247,0.7))'}
                  onMouseLeave={e => e.currentTarget.style.filter = 'none'}
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-sans text-xs tracking-[0.3em] uppercase text-white/40 mb-6">
              Navigation
            </h3>
            <div className="flex flex-col gap-3">
              {quickLinks.map(link => (
                <Link
                  key={link.path}
                  to={link.path}
                  className="font-sans text-sm text-white/40 hover:text-purple-300 transition-colors duration-200"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-sans text-xs tracking-[0.3em] uppercase text-white/40 mb-6">
              Contact
            </h3>
            <div className="flex flex-col gap-4">
              <div className="flex gap-3 items-start text-white/40 text-sm font-sans">
                <MapPin size={14} className="mt-0.5 flex-shrink-0 text-purple-500/60" />
                <div>
                  <p>Waldviertel, Austria</p>
                  <p className="text-white/25 text-xs mt-0.5">Mystisches Waldviertel</p>
                </div>
              </div>
              <a
                href="mailto:info@darkyoga.at"
                className="flex gap-3 items-center text-white/40 hover:text-purple-300 transition-colors text-sm font-sans"
              >
                <Mail size={14} className="text-purple-500/60 flex-shrink-0" />
                info@darkyoga.at
              </a>

              {/* Studio hours note */}
              <div className="mt-2 pt-4 border-t border-white/5">
                <p className="font-sans text-xs text-white/25 leading-relaxed">
                  Retreats & sessions by personal arrangement with Suyin.
                  Write to schedule your journey.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="divider-glow mb-8" />

        {/* Bottom bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-sans text-white/20">
          <p>© {year} Dark Yoga® — Suyin Orlowski. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-purple-400/70 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-purple-400/70 transition-colors">Impressum</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
