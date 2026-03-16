import React, { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ArrowRight, Moon, Music, User, Wind, Layers, Mic2 } from 'lucide-react'
import { CLASSES } from '@/utils/data'

gsap.registerPlugin(ScrollTrigger)

const iconMap = {
  retreat:   Layers,
  meditation: Moon,
  chanting:  Music,
  soul:      User,
  yin:       Wind,
  darkroom:  Mic2,
}

const accentColors = [
  { line: 'rgba(124,58,237,0.8)',  glow: 'rgba(124,58,237,0.12)',  isGold: false },
  { line: 'rgba(201,169,110,0.7)', glow: 'rgba(201,169,110,0.1)',  isGold: true  },
  { line: 'rgba(168,85,247,0.8)',  glow: 'rgba(168,85,247,0.12)', isGold: false },
  { line: 'rgba(124,58,237,0.7)',  glow: 'rgba(124,58,237,0.1)',   isGold: false },
  { line: 'rgba(201,169,110,0.6)', glow: 'rgba(201,169,110,0.08)', isGold: true  },
  { line: 'rgba(168,85,247,0.7)',  glow: 'rgba(168,85,247,0.1)',   isGold: false },
]

function ClassCard({ classItem, index }) {
  const Icon   = iconMap[classItem.icon] || Moon
  const accent = accentColors[index % accentColors.length]
  const num    = String(index + 1).padStart(2, '0')

  return (
    <motion.div
      className="card-luxury group flex flex-col h-full relative"
      whileHover={{ y: -7 }}
      transition={{ duration: 0.4, ease: [0.23,1,0.32,1] }}
    >
      <div className="absolute top-0 left-0 right-0 h-px"
        style={{ background: `linear-gradient(90deg, transparent, ${accent.line}, transparent)` }} />
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{ background: `radial-gradient(ellipse at 50% 0%, ${accent.glow} 0%, transparent 65%)` }} />

      <div className="relative z-10 flex flex-col h-full p-7 md:p-8">
        <div className="flex items-start justify-between mb-6">
          <div className="w-9 h-9 flex items-center justify-center"
            style={{ background: 'rgba(255,255,255,0.04)', border: `1px solid rgba(255,255,255,0.09)` }}>
            <Icon size={16} style={{ color: accent.isGold ? 'rgba(201,169,110,0.7)' : 'rgba(168,85,247,0.8)' }} />
          </div>
          <span className="font-display text-5xl font-light leading-none select-none"
            style={{ color: 'rgba(255,255,255,0.04)' }}>{num}</span>
        </div>

        <h3 className="font-display text-2xl md:text-3xl italic font-light mb-3 leading-tight group-hover:text-white transition-colors duration-300"
          style={{ color: 'rgba(255,255,255,0.88)' }}>
          {classItem.name}
        </h3>

        {classItem.tag && (
          <div className="mb-4">
            <span className={accent.isGold ? 'pill-gold' : 'pill-purple'}>{classItem.tag}</span>
          </div>
        )}

        <p className="font-sans text-[0.76rem] leading-relaxed flex-grow mb-6 group-hover:text-white/52 transition-colors duration-300"
          style={{ color: 'rgba(255,255,255,0.38)' }}>
          {classItem.description}
        </p>

        <div className="flex items-center justify-between pt-5 mt-auto"
          style={{ borderTop: '1px solid rgba(255,255,255,0.05)' }}>
          <div className="flex items-center gap-2 flex-wrap">
            <span className="pill-dim">{classItem.duration}{typeof classItem.duration === 'number' ? ' min' : ''}</span>
            <span className={accent.isGold ? 'pill-gold' : 'pill-purple'}>{classItem.level}</span>
          </div>
          <ArrowRight size={13} className="flex-shrink-0 group-hover:translate-x-1 transition-all duration-300"
            style={{ color: 'rgba(255,255,255,0.15)' }} />
        </div>
      </div>
    </motion.div>
  )
}

export default function ClassesPreview() {
  const sectionRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.class-card-item',
        { opacity: 0, y: 50 },
        {
          scrollTrigger: { trigger: sectionRef.current, start: 'top 62%', toggleActions: 'play none none none' },
          opacity: 1, y: 0, duration: 0.85, stagger: 0.1, ease: 'power3.out',
        }
      )
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} className="relative w-full py-28 px-6 md:px-12 lg:px-20 overflow-hidden"
      style={{ background: 'linear-gradient(180deg, #050505 0%, #08080f 40%, #0a0914 70%, #08080f 100%)' }}>

      <div className="section-watermark top-16 right-6">02</div>

      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-96 h-96 rounded-full blur-3xl pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(124,58,237,0.5), transparent)', opacity: 0.06 }} />

      <div className="max-w-7xl mx-auto">
        <div className="divider-subtle mb-20" />

        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16 md:mb-20">
          <div>
            <motion.p initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }}
              className="section-label mb-4">02 — The Practice</motion.p>
            <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.85, delay: 0.1 }} viewport={{ once: true }}
              className="font-display text-5xl md:text-6xl lg:text-7xl italic font-light leading-none"
              style={{ color: 'rgba(255,255,255,0.9)' }}>
              Our Offerings
            </motion.h2>
          </div>
          <motion.a initial={{ opacity: 0, x: 14 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, delay: 0.2 }} viewport={{ once: true }}
            href="/classes"
            className="hidden md:inline-flex items-center gap-2 font-sans text-[0.68rem] tracking-[0.25em] uppercase self-end pb-1.5 transition-all duration-300 group"
            style={{ color: 'rgba(168,85,247,0.6)', borderBottom: '1px solid rgba(168,85,247,0.18)' }}
            onMouseEnter={e => { e.currentTarget.style.color='rgba(168,85,247,1)'; e.currentTarget.style.borderColor='rgba(168,85,247,0.5)' }}
            onMouseLeave={e => { e.currentTarget.style.color='rgba(168,85,247,0.6)'; e.currentTarget.style.borderColor='rgba(168,85,247,0.18)' }}>
            View all classes
            <ArrowRight size={13} className="group-hover:translate-x-1.5 transition-transform duration-300" />
          </motion.a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-14">
          {CLASSES.map((c, i) => (
            <div key={c.id} className="class-card-item opacity-0">
              <ClassCard classItem={c} index={i} />
            </div>
          ))}
        </div>

        <div className="text-center md:hidden mb-4">
          <a href="/classes" className="inline-flex items-center gap-2 font-sans text-[0.68rem] tracking-[0.25em] uppercase"
            style={{ color: 'rgba(168,85,247,0.65)' }}>
            View all classes <ArrowRight size={13} />
          </a>
        </div>

        <div className="divider-glow mt-16" />
      </div>
    </section>
  )
}
