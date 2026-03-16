import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Clock, Zap } from 'lucide-react';
import { CLASSES } from '@/utils/data';

const LEVELS = ['All', 'Beginner', 'Intermediate', 'Advanced'];

const levelColors = {
  Beginner: 'from-green-500/30 to-emerald-500/20',
  Intermediate: 'from-blue-500/30 to-cyan-500/20',
  Advanced: 'from-red-500/30 to-rose-500/20',
};

export default function Classes() {
  const [activeLevel, setActiveLevel] = useState('All');

  const filteredClasses =
    activeLevel === 'All' ? CLASSES : CLASSES.filter((c) => c.level === activeLevel);

  return (
    <div className="min-h-screen bg-[#050505] text-white overflow-hidden">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#7c3aed]/20 via-[#050505] to-[#050505]" />

        {/* Animated circles */}
        <div
          className="absolute top-20 right-10 w-96 h-96 bg-[#7c3aed]/10 rounded-full blur-3xl"
          style={{ opacity: 0.4 }}
        />

        <div className="relative z-10 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="font-serif text-7xl lg:text-8xl font-bold mb-6 text-white tracking-tight"
            style={{ fontFamily: 'Cormorant Garamond' }}
          >
            THE PRACTICE
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg lg:text-xl text-[#c084fc] font-light tracking-widest"
          >
            Six paths. One darkness.
          </motion.p>

          {/* Scroll indicator */}
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
          >
            <div className="flex flex-col items-center gap-2">
              <span className="text-xs text-[#c084fc] uppercase tracking-widest">Scroll</span>
              <svg
                className="w-5 h-5 text-[#7c3aed]"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Filter Bar */}
      <section className="sticky top-0 z-40 bg-[#050505]/80 backdrop-blur-md border-b border-[#7c3aed]/10 py-6">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="flex items-center gap-4 overflow-x-auto pb-2">
            {LEVELS.map((level) => (
              <motion.button
                key={level}
                onClick={() => setActiveLevel(level)}
                layout
                className={`px-6 py-2 rounded-full font-medium text-sm whitespace-nowrap transition-colors ${
                  activeLevel === level
                    ? 'bg-[#7c3aed] text-white shadow-lg shadow-[#7c3aed]/50'
                    : 'bg-[#1a1a1a] text-gray-400 hover:text-white border border-[#7c3aed]/20'
                }`}
              >
                {level}
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* Classes Grid */}
      <section className="max-w-7xl mx-auto px-4 lg:px-8 py-20">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeLevel}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredClasses.map((classItem, index) => (
              <motion.div
                key={classItem.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                whileHover={{ scale: 1.02, y: -5 }}
                className="group relative"
              >
                {/* Card background with glass morphism */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-white/0 rounded-lg border border-[#7c3aed]/20 group-hover:border-[#7c3aed]/50 transition-all duration-300 shadow-xl" />

                {/* Gradient accent bar */}
                <div
                  className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${
                    levelColors[classItem.level] || levelColors.Beginner
                  } rounded-t-lg`}
                />

                {/* Content */}
                <div className="relative p-8 h-full flex flex-col">
                  {/* Class name */}
                  <h3
                    className="text-3xl lg:text-4xl font-bold mb-4 text-white tracking-tight"
                    style={{ fontFamily: 'Cormorant Garamond' }}
                  >
                    {classItem.name}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-400 text-sm leading-relaxed mb-6 flex-grow">
                    {classItem.description}
                  </p>

                  {/* Badges */}
                  <div className="flex gap-3 mb-6 flex-wrap">
                    <div className="flex items-center gap-1 px-3 py-1 bg-[#7c3aed]/10 border border-[#7c3aed]/30 rounded-full">
                      <Clock className="w-3 h-3 text-[#c084fc]" />
                      <span className="text-xs font-medium text-[#c084fc]">{classItem.duration} min</span>
                    </div>
                    <div className="flex items-center gap-1 px-3 py-1 bg-[#7c3aed]/10 border border-[#7c3aed]/30 rounded-full">
                      <Zap className="w-3 h-3 text-[#c084fc]" />
                      <span className="text-xs font-medium text-[#c084fc]">{classItem.level}</span>
                    </div>
                  </div>

                  {/* Book button */}
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full py-3 bg-gradient-to-r from-[#7c3aed] to-[#a78bfa] text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-[#7c3aed]/50 transition-all duration-300 uppercase text-sm tracking-wider"
                  >
                    Book Class
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </section>

      {/* Private Sessions CTA */}
      <section className="max-w-7xl mx-auto px-4 lg:px-8 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative group"
        >
          {/* Background */}
          <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-white/0 rounded-lg border border-[#7c3aed]/20 group-hover:border-[#7c3aed]/50 transition-all duration-300" />

          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#7c3aed]/10 via-transparent to-transparent rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

          {/* Content */}
          <div className="relative p-12 lg:p-16 text-center">
            <h2
              className="text-5xl lg:text-6xl font-bold mb-6 text-white"
              style={{ fontFamily: 'Cormorant Garamond' }}
            >
              PRIVATE SESSIONS
            </h2>
            <p className="text-gray-400 text-lg mb-8 max-w-2xl mx-auto leading-relaxed">
              Personalized guidance in complete darkness. One-on-one sessions tailored to your practice level and
              intentions, designed for transformative deep work.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-gradient-to-r from-[#7c3aed] to-[#a78bfa] text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-[#7c3aed]/50 transition-all duration-300 uppercase text-sm tracking-wider"
            >
              Inquire Now
            </motion.button>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
