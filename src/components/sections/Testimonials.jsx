import React, { useEffect, useRef, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Star } from 'lucide-react'
import { TESTIMONIALS } from '@/utils/data'

gsap.registerPlugin(ScrollTrigger)

export default function Testimonials() {
  const sectionRef   = useRef(null)
  const [current, setCurrent]     = useState(0)
  const [autoPlay, setAutoPlay]   = useState(true)

  useEffect(() => {
    if (!autoPlay) return
    const id = setInterval(() => setCurrent(p => (p + 1) % TESTIMONIALS.length), 4500)
    return () => clearInterval(id)
  }, [autoPlay])

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.testimonials-headline', {
        scrollTrigger: { trigger: sectionRef.current, start: 'top 65%', toggleActions: 'play none none none' },
        y: 40, opacity: 0, duration: 0.9,
      })
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  const displayed = [
    TESTIMONIALS[(current - 1 + TESTIMONIALS.length) % TESTIMONIALS.length],
    TESTIMONIALS[current],
    TESTIMONIALS[(current + 1) % TESTIMONIALS.length],
  ]

  return (
    <section
      ref={sectionRef}
      className="relative w-full py-28 px-6 md:px-12 lg:px-20 bg-[#050505] overflow-hidden"
    >
      {/* Section watermark */}
      <div className="absolute top-12 left-6 md:left-12 lg:left-20 text-purple-500/20 font-display text-5xl font-light tracking-widest select-none">
        04
      </div>

      <div className="max-w-7xl mx-auto">
        <motion.p
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-[10px] md:text-xs tracking-[0.35em] uppercase text-purple-400/70 font-sans mb-4"
        >
          04 — Voices from the Dark
        </motion.p>

        <h2 className="testimonials-headline font-display text-5xl md:text-6xl lg:text-7xl italic font-light text-white mb-20 leading-tight">
          Words from the Retreat
        </h2>

        {/* Cards */}
        <div
          className="relative mb-12"
          onMouseEnter={() => setAutoPlay(false)}
          onMouseLeave={() => setAutoPlay(true)}
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6">
            {displayed.map((t, idx) => {
              const isCenter = idx === 1
              return (
                <motion.div
                  key={t.id}
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: isCenter ? 1 : 0.45, y: 0, scale: isCenter ? 1 : 0.97 }}
                  transition={{ duration: 0.5 }}
                  className="rounded-sm p-7 md:p-9 flex flex-col"
                  style={{
                    background: 'rgba(17,17,17,0.7)',
                    backdropFilter: 'blur(16px)',
                    border: isCenter ? '1px solid rgba(124,58,237,0.3)' : '1px solid rgba(255,255,255,0.04)',
                    boxShadow: isCenter ? '0 0 40px rgba(124,58,237,0.1)' : 'none',
                  }}
                >
                  <div className="font-display text-6xl text-purple-500/30 leading-none mb-3">"</div>
                  <p className="font-display text-lg md:text-xl italic text-white/75 mb-7 flex-grow leading-relaxed">
                    {t.quote}
                  </p>
                  <div className="flex gap-1 mb-5">
                    {Array.from({ length: t.rating }).map((_, i) => (
                      <Star key={i} size={13} className="fill-yellow-500 text-yellow-500" />
                    ))}
                  </div>
                  <div className="pt-5 border-t border-white/8">
                    <p className="font-sans font-medium text-white/80 text-sm">{t.author}</p>
                    <p className="font-sans text-xs text-white/35 mt-0.5">{t.location}</p>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-2 mb-8">
          {TESTIMONIALS.map((_, idx) => (
            <button
              key={idx}
              onClick={() => { setCurrent(idx); setAutoPlay(false) }}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                idx === current ? 'w-8 bg-purple-500' : 'w-1.5 bg-white/15 hover:bg-white/35'
              }`}
            />
          ))}
        </div>

        <p className="text-center font-sans text-xs text-white/25 tracking-widest">
          {current + 1} / {TESTIMONIALS.length}
        </p>
      </div>
    </section>
  )
}
