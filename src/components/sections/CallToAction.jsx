import React, { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import gsap from 'gsap'
import { MapPin, Mail } from 'lucide-react'

export default function CallToAction() {
  const blob1 = useRef(null)
  const blob2 = useRef(null)
  const blob3 = useRef(null)

  useEffect(() => {
    const t1 = gsap.timeline({ repeat: -1 })
    t1.to(blob1.current, { x: 90, y: -90, duration: 8, ease: 'sine.inOut' })
      .to(blob1.current, { x: 0, y: 0, duration: 8, ease: 'sine.inOut' })

    const t2 = gsap.timeline({ repeat: -1 })
    t2.to(blob2.current, { x: -110, y: 70, duration: 10, ease: 'sine.inOut' })
      .to(blob2.current, { x: 0, y: 0, duration: 10, ease: 'sine.inOut' })

    const t3 = gsap.timeline({ repeat: -1 })
    t3.to(blob3.current, { x: 70, y: 90, duration: 12, ease: 'sine.inOut' })
      .to(blob3.current, { x: 0, y: 0, duration: 12, ease: 'sine.inOut' })

    return () => { t1.kill(); t2.kill(); t3.kill() }
  }, [])

  const container = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.18, delayChildren: 0.2 } },
  }
  const item = {
    hidden: { opacity: 0, y: 22 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.85, ease: 'easeOut' } },
  }

  return (
    <section className="relative w-full min-h-screen overflow-hidden bg-[#050505] flex items-center justify-center">
      {/* Radial bg */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse 60% 50% at 50% 60%, rgba(124,58,237,0.09) 0%, transparent 70%)' }}
      />

      {/* Animated blobs */}
      <div ref={blob1} className="absolute top-1/4 -left-48 w-80 h-80 rounded-full blur-3xl opacity-[0.12] pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(124,58,237,0.9), transparent)' }} />
      <div ref={blob2} className="absolute top-1/2 -right-48 w-96 h-96 rounded-full blur-3xl opacity-[0.09] pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(168,85,247,0.7), transparent)' }} />
      <div ref={blob3} className="absolute bottom-1/4 left-1/3 w-72 h-72 rounded-full blur-3xl opacity-[0.1] pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(124,58,237,0.8), transparent)' }} />

      {/* Pulsing rings */}
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[480px] h-[480px] rounded-full border border-purple-500/10 pointer-events-none"
        animate={{ scale: [1, 1.08, 1], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[320px] h-[320px] rounded-full border border-purple-500/8 pointer-events-none"
        animate={{ scale: [1, 0.93, 1], opacity: [0.2, 0.4, 0.2] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut', delay: 0.8 }}
      />

      {/* Content */}
      <motion.div
        className="relative z-10 max-w-4xl px-6 md:px-12 text-center"
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <motion.p variants={item} className="text-[10px] md:text-xs tracking-[0.35em] uppercase text-purple-400/70 font-sans mb-10">
          Begin Today
        </motion.p>

        <motion.h1 variants={item} className="font-display text-5xl md:text-7xl lg:text-8xl italic font-light text-white leading-tight mb-2">
          Your Journey
        </motion.h1>
        <motion.h1
          variants={item}
          className="font-display text-5xl md:text-7xl lg:text-8xl italic font-light leading-tight mb-14"
          style={{
            background: 'linear-gradient(135deg, #a855f7, #7c3aed, #c9a96e)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
          }}
        >
          Starts in Darkness.
        </motion.h1>

        <motion.p variants={item} className="font-display text-lg md:text-xl italic text-white/50 max-w-2xl mx-auto mb-14 leading-relaxed">
          "{`Die Dunkelheit schützt und hegt alles Ungeborene und wartet geduldig darauf, dass es sich ins Sichtbare entwickelt.`}"
        </motion.p>
        <motion.p variants={item} className="font-sans text-xs text-white/25 tracking-widest mb-14">
          "Darkness protects and nurtures all unborn things, waiting patiently for them to develop into the visible."
        </motion.p>

        {/* CTAs */}
        <motion.div variants={item} className="flex flex-col sm:flex-row gap-5 justify-center mb-14">
          <a
            href="mailto:info@darkyoga.at"
            className="inline-block px-10 py-4 bg-purple-700 text-white font-sans text-xs tracking-[0.25em] uppercase transition-all duration-400 hover:bg-purple-600 hover:shadow-[0_0_45px_rgba(124,58,237,0.8)] active:scale-95"
            style={{ boxShadow: '0 0 28px rgba(124,58,237,0.5)' }}
          >
            Write to Suyin
          </a>
          <a
            href="/classes"
            className="inline-block px-10 py-4 border border-white/12 text-white/55 font-sans text-xs tracking-[0.25em] uppercase transition-all duration-400 hover:border-purple-500/50 hover:text-white hover:bg-purple-500/8"
          >
            Explore Offerings
          </a>
        </motion.div>

        {/* Location & email chips */}
        <motion.div variants={item} className="flex flex-col sm:flex-row items-center justify-center gap-6 text-white/35 font-sans text-xs">
          <div className="flex items-center gap-2">
            <MapPin size={14} className="text-purple-400/60" />
            <span>Mystisches Waldviertel, Austria</span>
          </div>
          <div className="hidden sm:block w-px h-3 bg-white/15" />
          <div className="flex items-center gap-2">
            <Mail size={14} className="text-purple-400/60" />
            <span>info@darkyoga.at</span>
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}
