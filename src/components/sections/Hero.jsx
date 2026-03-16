import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'

export default function Hero() {
  const [particles, setParticles] = useState([])

  useEffect(() => {
    const generated = Array.from({ length: 30 }).map((_, i) => ({
      id: i,
      left: Math.random() * 100,
      top: Math.random() * 100,
      delay: Math.random() * 6,
      duration: 10 + Math.random() * 12,
      size: Math.random() > 0.7 ? 2 : 1,
    }))
    setParticles(generated)
  }, [])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.18, delayChildren: 0.3 },
    },
  }

  const lineVariants = {
    hidden: { opacity: 0, y: 60, skewY: 3 },
    visible: {
      opacity: 1,
      y: 0,
      skewY: 0,
      transition: { duration: 1.1, ease: [0.22, 1, 0.36, 1] },
    },
  }

  const fadeUp = {
    hidden: { opacity: 0, y: 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.9, ease: 'easeOut' },
    },
  }

  return (
    <div className="relative w-full h-screen overflow-hidden bg-[#050505]">

      {/* Deep radial glow from bottom centre */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 80% 60% at 50% 100%, rgba(124,58,237,0.18) 0%, transparent 70%)',
        }}
      />

      {/* Fine horizontal scan-line grid */}
      <div
        className="absolute inset-0 pointer-events-none opacity-30"
        style={{
          backgroundImage:
            'repeating-linear-gradient(0deg, rgba(255,255,255,0.018) 0px, rgba(255,255,255,0.018) 1px, transparent 1px, transparent 60px)',
        }}
      />

      {/* Floating particles */}
      {particles.map((p) => (
        <div
          key={p.id}
          className="absolute rounded-full bg-purple-400/30"
          style={{
            left: `${p.left}%`,
            top: `${p.top}%`,
            width: `${p.size}px`,
            height: `${p.size}px`,
            animation: `floatParticle ${p.duration}s ease-in-out infinite`,
            animationDelay: `${p.delay}s`,
          }}
        />
      ))}

      <style>{`
        @keyframes floatParticle {
          0%, 100% { transform: translateY(0) translateX(0); opacity: 0.2; }
          33%  { transform: translateY(-80px) translateX(20px); opacity: 0.3; }
          66%  { transform: translateY(-40px) translateX(-20px); opacity: 0.25; }
        }
      `}</style>

      {/* Static centre glow — no pulse */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full blur-3xl pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(124,58,237,0.1), transparent)', opacity: 0.6 }}
      />

      {/* ── Main content ── */}
      <motion.div
        className="relative h-full flex flex-col items-center justify-center px-6 z-10 text-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Overline label */}
        <motion.p
          variants={fadeUp}
          className="text-[10px] md:text-xs tracking-[0.35em] uppercase text-purple-400/70 font-inter mb-8 md:mb-10"
        >
          Dark Yoga® — Waldviertel, Austria
        </motion.p>

        {/* Hero headline — German tagline */}
        <div className="overflow-hidden mb-2">
          <motion.h1
            variants={lineVariants}
            className="font-display text-[13vw] sm:text-[11vw] md:text-[9vw] lg:text-[8vw] font-light italic leading-none tracking-wide text-white"
          >
            Der Weg ins Licht
          </motion.h1>
        </div>

        <div className="overflow-hidden mb-3">
          <motion.h1
            variants={lineVariants}
            className="font-display text-[13vw] sm:text-[11vw] md:text-[9vw] lg:text-[8vw] font-light italic leading-none tracking-wide"
            style={{
              background: 'linear-gradient(135deg, #a855f7 0%, #7c3aed 50%, #c9a96e 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            führt durch die
          </motion.h1>
        </div>

        <div className="overflow-hidden mb-10 md:mb-12">
          <motion.h1
            variants={lineVariants}
            className="font-display text-[13vw] sm:text-[11vw] md:text-[9vw] lg:text-[8vw] font-light italic leading-none tracking-wide text-white"
          >
            Dunkelheit.
          </motion.h1>
        </div>

        {/* English translation */}
        <motion.p
          variants={fadeUp}
          className="font-display text-lg md:text-xl lg:text-2xl italic text-white/45 mb-4 tracking-wide"
        >
          The way to the light leads through the darkness.
        </motion.p>

        {/* Sub-tagline */}
        <motion.p
          variants={fadeUp}
          className="font-sans text-xs md:text-sm tracking-[0.25em] uppercase text-white/35 mb-14 md:mb-16"
        >
          Silent Retreat — Journey in darkness to your light
        </motion.p>

        {/* CTA buttons */}
        <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-4 sm:gap-6">
          <button
            className="px-10 py-4 bg-purple-700 text-white font-sans text-xs tracking-[0.25em] uppercase transition-all duration-400 hover:bg-purple-600 hover:shadow-[0_0_40px_rgba(124,58,237,0.7)] active:scale-95"
            style={{ boxShadow: '0 0 25px rgba(124,58,237,0.45)' }}
          >
            Begin Your Journey
          </button>
          <button className="px-10 py-4 border border-white/15 text-white/60 font-sans text-xs tracking-[0.25em] uppercase transition-all duration-400 hover:border-purple-500/60 hover:text-white hover:bg-purple-500/8">
            Explore the Practice
          </button>
        </motion.div>

        {/* Scroll cue */}
        <motion.div
          variants={fadeUp}
          className="absolute bottom-10 flex flex-col items-center gap-3"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
        >
          <div className="w-px h-10 bg-gradient-to-b from-purple-500/60 to-transparent" />
          <span className="text-[9px] tracking-[0.35em] uppercase text-white/30 font-sans">Scroll</span>
        </motion.div>
      </motion.div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#050505] to-transparent pointer-events-none" />
    </div>
  )
}
