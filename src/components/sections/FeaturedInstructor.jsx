import React, { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { INSTRUCTORS } from '@/utils/data'

gsap.registerPlugin(ScrollTrigger)

const suyin = INSTRUCTORS[0]

const credentials = [
  '20+ years Soul Training & Spiritual Counselling',
  'Hypnosis & Mental Training — Vienna',
  'Fire-Walk Trainer',
  'Medium Training — Dr. Julia Assante',
  'Artist & Mentaltrainerin',
]

export default function FeaturedInstructor() {
  const sectionRef = useRef(null)
  const imageRef   = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(imageRef.current, {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top center',
          end: 'bottom center',
          scrub: 1.2,
        },
        y: -55,
        ease: 'none',
      })
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={sectionRef}
      className="relative w-full min-h-screen py-28 px-6 md:px-12 lg:px-20 bg-[#050505] overflow-hidden"
    >
      {/* Ambient right glow */}
      <div
        className="absolute right-0 top-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full blur-3xl opacity-[0.07] pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(124,58,237,1), transparent)' }}
      />

      {/* Section watermark */}
      <div className="absolute top-12 left-6 md:left-12 lg:left-20 text-purple-500/20 font-display text-5xl font-light tracking-widest select-none">
        03
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-14 lg:gap-20 items-center">

          {/* Left — content (3/5 width) */}
          <div className="lg:col-span-3">
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-[10px] md:text-xs tracking-[0.35em] uppercase text-purple-400/70 font-sans mb-8"
            >
              Meet Your Guide
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.1 }}
              viewport={{ once: true }}
              className="font-display text-6xl md:text-7xl lg:text-8xl italic font-light text-white leading-none mb-3"
            >
              {suyin.name}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              viewport={{ once: true }}
              className="font-sans text-sm tracking-[0.2em] uppercase text-yellow-600/70 mb-10"
            >
              {suyin.role}
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
              className="font-sans text-sm md:text-base text-white/60 leading-relaxed mb-10 max-w-xl"
            >
              {suyin.bio}
            </motion.p>

            {/* Credentials list */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="mb-12 space-y-3"
            >
              {credentials.map((c, i) => (
                <div key={i} className="flex items-center gap-3 text-sm text-white/50 font-sans">
                  <div className="w-1 h-1 rounded-full bg-purple-500/70 flex-shrink-0" />
                  {c}
                </div>
              ))}
            </motion.div>

            {/* Specialties pills */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              viewport={{ once: true }}
              className="flex flex-wrap gap-2 mb-12"
            >
              {suyin.specialties.map((s, i) => (
                <span
                  key={i}
                  className="px-4 py-1.5 rounded-full bg-purple-600/15 border border-purple-500/30 text-xs text-purple-300 font-sans tracking-widest"
                >
                  {s}
                </span>
              ))}
            </motion.div>

            {/* Quote */}
            <motion.blockquote
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.6 }}
              viewport={{ once: true }}
              className="font-display text-xl md:text-2xl italic text-white/70 pl-6 border-l-2 border-purple-500/40 mb-12"
            >
              {suyin.quote}
            </motion.blockquote>

            <motion.a
              href="mailto:info@darkyoga.at"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              viewport={{ once: true }}
              className="inline-block px-9 py-4 bg-purple-700 text-white font-sans text-xs tracking-[0.25em] uppercase transition-all duration-400 hover:bg-purple-600 hover:shadow-[0_0_35px_rgba(124,58,237,0.6)] active:scale-95 cursor-pointer"
              style={{ boxShadow: '0 0 20px rgba(124,58,237,0.3)' }}
            >
              Book a Session with Suyin
            </motion.a>
          </div>

          {/* Right — portrait placeholder (2/5 width) */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
              viewport={{ once: true }}
              ref={imageRef}
              className="aspect-[3/4] rounded-sm overflow-hidden relative"
              style={{ border: '1px solid rgba(124,58,237,0.15)' }}
            >
              {/* Dark portrait placeholder with sacred geometry */}
              <div className="absolute inset-0 bg-gradient-to-b from-purple-950/40 via-black to-purple-950/30" />

              {/* Sacred geometry decoration */}
              <div className="absolute inset-0 flex items-center justify-center opacity-15">
                <svg viewBox="0 0 200 200" className="w-48 h-48 md:w-64 md:h-64" fill="none" stroke="white" strokeWidth="0.5">
                  <circle cx="100" cy="100" r="90" />
                  <circle cx="100" cy="100" r="60" />
                  <circle cx="100" cy="100" r="30" />
                  <line x1="100" y1="10" x2="100" y2="190" />
                  <line x1="10" y1="100" x2="190" y2="100" />
                  <line x1="27" y1="27" x2="173" y2="173" />
                  <line x1="173" y1="27" x2="27" y2="173" />
                  {/* Yin-yang simplified */}
                  <path d="M 100 10 A 90 90 0 0 1 100 190 A 45 45 0 0 1 100 100 A 45 45 0 0 0 100 10" />
                  <circle cx="100" cy="55" r="8" fill="white" opacity="0.2" />
                  <circle cx="100" cy="145" r="8" fill="white" opacity="0.1" />
                </svg>
              </div>

              {/* Name overlay at bottom */}
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/90 to-transparent">
                <p className="font-display text-2xl italic text-white/80">Suyin Orlowski</p>
                <p className="font-sans text-[10px] tracking-[0.25em] uppercase text-white/40 mt-1">
                  Born 1960 · Vienna & Waldviertel
                </p>
              </div>

              {/* Animated purple glow */}
              <motion.div
                className="absolute inset-0 pointer-events-none"
                style={{ background: 'radial-gradient(circle at 40% 30%, rgba(124,58,237,0.25), transparent 60%)' }}
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
