import React, { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { motion } from 'framer-motion'
import { STUDIO_INFO } from '@/utils/data'

gsap.registerPlugin(ScrollTrigger)

const stats = [
  { value: '20', suffix: '+', label: 'Years of Practice' },
  { value: '10', suffix: '-day', label: 'Signature Retreat' },
  { value: '100', suffix: '%', label: 'Complete Darkness' },
  { value: '1', suffix: '', label: 'True Teacher: Silence' },
]

export default function Philosophy() {
  const sectionRef = useRef(null)
  const quoteRef  = useRef(null)
  const statsRef  = useRef([])

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Staggered line reveal
      gsap.fromTo(
        '.philosophy-line',
        { y: 80, opacity: 0 },
        {
          scrollTrigger: {
            trigger: quoteRef.current,
            start: 'top 65%',
            toggleActions: 'play none none none',
          },
          y: 0,
          opacity: 1,
          duration: 1,
          stagger: 0.22,
          ease: 'power3.out',
        }
      )

      // Count-up stats
      stats.forEach((stat, idx) => {
        const numValue = parseInt(stat.value)
        gsap.fromTo(
          statsRef.current[idx],
          { textContent: 0 },
          {
            scrollTrigger: {
              trigger: statsRef.current[idx],
              start: 'top 85%',
              toggleActions: 'play none none none',
            },
            textContent: numValue,
            duration: 2.2,
            ease: 'power2.out',
            snap: { textContent: 1 },
          }
        )
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={sectionRef}
      className="relative w-full min-h-screen py-28 px-6 md:px-12 lg:px-20 bg-[#050505] overflow-hidden"
    >
      {/* Subtle left-side ambient glow */}
      <div
        className="absolute left-0 top-1/3 w-96 h-96 rounded-full blur-3xl pointer-events-none opacity-8"
        style={{ background: 'radial-gradient(circle, rgba(124,58,237,0.3), transparent)' }}
      />

      {/* Section number watermark */}
      <div className="absolute top-12 left-6 md:left-12 lg:left-20 text-purple-500/20 font-display text-5xl font-light tracking-widest select-none">
        01
      </div>

      <div className="max-w-7xl mx-auto">

        {/* Label */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-[10px] md:text-xs tracking-[0.35em] uppercase text-purple-400/70 font-sans mb-20"
        >
          Our Philosophy
        </motion.p>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-14 lg:gap-24">

          {/* Left — Main quote */}
          <div className="lg:col-span-2" ref={quoteRef}>
            <div className="philosophy-line font-display text-5xl md:text-6xl lg:text-7xl italic leading-tight text-white mb-5">
              Yoga ist nicht das Licht —
            </div>
            <div className="philosophy-line font-display text-5xl md:text-6xl lg:text-7xl italic leading-tight text-white/80 mb-5">
              es ist, was wir in der
            </div>
            <div
              className="philosophy-line font-display text-5xl md:text-6xl lg:text-7xl italic leading-tight mb-10"
              style={{
                background: 'linear-gradient(135deg, #a855f7, #7c3aed)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              Dunkelheit entdecken.
            </div>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="font-sans text-sm md:text-base text-white/45 leading-relaxed max-w-xl italic"
            >
              "Yoga is not the light — it is what we discover in the dark."
            </motion.p>

            {/* German headline tagline */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.55 }}
              viewport={{ once: true }}
              className="mt-10 pt-10 border-t border-white/6"
            >
              <p className="font-display text-xl md:text-2xl italic text-white/60 leading-relaxed">
                "{STUDIO_INFO.tagline}"
              </p>
              <p className="font-sans text-xs text-white/30 mt-2 tracking-widest">
                — {STUDIO_INFO.taglineEN}
              </p>
            </motion.div>
          </div>

          {/* Right — Three pillars */}
          <div className="lg:col-span-1 relative">
            <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-purple-500/40 via-purple-500/15 to-transparent hidden lg:block" />
            <div className="lg:pl-10 space-y-14">
              {STUDIO_INFO.philosophy.map((pillar, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: idx * 0.18 }}
                  viewport={{ once: true }}
                >
                  <div className="text-purple-400/60 font-display text-lg font-light tracking-widest mb-2">
                    {pillar.number}
                  </div>
                  <h3 className="font-sans text-sm md:text-base font-semibold tracking-[0.25em] uppercase text-white mb-3">
                    {pillar.title}
                    <span className="text-white/30 ml-2 font-normal tracking-normal normal-case">
                      / {pillar.titleEN}
                    </span>
                  </h3>
                  <p className="font-display text-sm md:text-base italic text-white/50 leading-relaxed">
                    {pillar.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Stats bar */}
        <div className="mt-28 pt-14 border-t border-white/5">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
            {stats.map((stat, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="flex items-end justify-center gap-1 mb-2">
                  <span
                    ref={(el) => (statsRef.current[idx] = el)}
                    className="font-display text-4xl md:text-5xl font-light text-purple-400"
                  >
                    {stat.value}
                  </span>
                  <span className="font-display text-2xl md:text-3xl text-purple-400/60 mb-1">
                    {stat.suffix}
                  </span>
                </div>
                <p className="font-sans text-[10px] md:text-xs tracking-[0.25em] uppercase text-white/35">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
