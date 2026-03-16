import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Clock, Users, ChevronDown } from 'lucide-react';
import { SCHEDULE } from '@/utils/data';

const DAYS = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

const levelColors = {
  Beginner: 'from-green-500/30 to-emerald-500/20 border-green-500/40',
  Intermediate: 'from-blue-500/30 to-cyan-500/20 border-blue-500/40',
  Advanced: 'from-red-500/30 to-rose-500/20 border-red-500/40',
};

const levelDotColors = {
  Beginner: 'bg-green-500',
  Intermediate: 'bg-blue-500',
  Advanced: 'bg-red-500',
};

const spotColors = (spotsLeft) => {
  if (spotsLeft > 5) return 'bg-green-500/20 text-green-400 border-green-500/40';
  if (spotsLeft > 1) return 'bg-yellow-500/20 text-yellow-400 border-yellow-500/40';
  return 'bg-red-500/20 text-red-400 border-red-500/40';
};

export default function Schedule() {
  const [selectedDay, setSelectedDay] = useState(null);
  const [expandedClass, setExpandedClass] = useState(null);

  const today = new Date().toLocaleDateString('en-US', { weekday: 'long' });

  const todayIndex = DAYS.findIndex((day) => day === today);
  const displayDay = selectedDay !== null ? DAYS[selectedDay] : today;
  const displayDayIndex = selectedDay !== null ? selectedDay : todayIndex;

  const dayClasses = SCHEDULE[displayDay] || [];

  return (
    <div className="min-h-screen bg-[#050505] text-white overflow-hidden">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#7c3aed]/20 via-[#050505] to-[#050505]" />

        {/* Animated orbs */}
        <motion.div
          className="absolute bottom-10 left-20 w-80 h-80 bg-[#7c3aed]/15 rounded-full blur-3xl"
          animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.4, 0.2] }}
          transition={{ duration: 8, repeat: Infinity }}
        />

        <div className="relative z-10 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="font-serif text-7xl lg:text-8xl font-bold mb-6 text-white tracking-tight"
            style={{ fontFamily: 'Cormorant Garamond' }}
          >
            THE SCHEDULE
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg text-[#c084fc] font-light tracking-widest"
          >
            Find your moment in the darkness
          </motion.p>
        </div>
      </section>

      {/* Day Selector */}
      <section className="sticky top-0 z-40 bg-[#050505]/80 backdrop-blur-md border-b border-[#7c3aed]/10 py-6">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="flex items-center gap-2 overflow-x-auto pb-2">
            {DAYS.map((day, index) => {
              const isToday = index === todayIndex;
              const isSelected = selectedDay === index;

              return (
                <motion.button
                  key={day}
                  onClick={() => setSelectedDay(isSelected ? null : index)}
                  layout
                  className={`px-4 py-2 rounded-lg font-medium text-sm whitespace-nowrap transition-all ${
                    isSelected || isToday
                      ? 'bg-[#7c3aed] text-white shadow-lg shadow-[#7c3aed]/50'
                      : 'bg-[#1a1a1a] text-gray-400 hover:text-white border border-[#7c3aed]/20'
                  }`}
                >
                  {day}
                  {isToday && !isSelected && <span className="ml-2 text-xs">Today</span>}
                </motion.button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Schedule Content */}
      <section className="max-w-7xl mx-auto px-4 lg:px-8 py-20">
        {/* Day title */}
        <motion.div
          key={displayDay}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="mb-12"
        >
          <h2
            className="text-5xl lg:text-6xl font-bold text-white mb-4"
            style={{ fontFamily: 'Cormorant Garamond' }}
          >
            {displayDay}
          </h2>
          <p className="text-gray-400 text-lg">
            {dayClasses.length === 0 ? 'No classes scheduled' : `${dayClasses.length} classes available`}
          </p>
        </motion.div>

        {/* Classes list */}
        <AnimatePresence mode="wait">
          {dayClasses.length > 0 ? (
            <motion.div
              key={displayDay}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="space-y-4"
            >
              {dayClasses.map((classItem, index) => {
                const isExpanded = expandedClass === `${displayDay}-${index}`;

                return (
                  <motion.div
                    key={`${displayDay}-${index}`}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    className="relative group"
                  >
                    {/* Background */}
                    <div
                      className={`absolute inset-0 bg-gradient-to-r ${
                        levelColors[classItem.level] || levelColors.Beginner
                      } rounded-lg border transition-all duration-300 group-hover:border-opacity-100`}
                    />

                    {/* Content button */}
                    <button
                      onClick={() =>
                        setExpandedClass(isExpanded ? null : `${displayDay}-${index}`)
                      }
                      className="relative w-full text-left p-6 flex items-center justify-between"
                    >
                      {/* Main info */}
                      <div className="flex items-center gap-4 flex-grow min-w-0">
                        {/* Level indicator dot */}
                        <div
                          className={`w-3 h-3 rounded-full flex-shrink-0 ${
                            levelDotColors[classItem.level]
                          }`}
                        />

                        {/* Class details */}
                        <div className="min-w-0 flex-grow">
                          <h3 className="text-xl font-bold text-white mb-1 truncate">
                            {classItem.className}
                          </h3>
                          <div className="flex items-center gap-4 text-sm text-gray-400 flex-wrap">
                            <div className="flex items-center gap-1">
                              <Clock className="w-4 h-4 text-[#c084fc]" />
                              <span>{classItem.time}</span>
                            </div>
                            <span>
                              Instructor:{' '}
                              <span className="text-[#c084fc]">{classItem.instructor}</span>
                            </span>
                          </div>
                        </div>
                      </div>

                      {/* Spots indicator and level badge */}
                      <div className="flex items-center gap-4 flex-shrink-0">
                        {/* Spots left */}
                        <div
                          className={`px-3 py-1 rounded-full border text-xs font-semibold whitespace-nowrap ${spotColors(
                            classItem.spotsLeft
                          )}`}
                        >
                          {classItem.spotsLeft} spots
                        </div>

                        {/* Level badge */}
                        <div className="px-3 py-1 bg-[#7c3aed]/20 border border-[#7c3aed]/50 rounded-full text-xs font-semibold text-[#c084fc]">
                          {classItem.level}
                        </div>

                        {/* Expand icon */}
                        <ChevronDown
                          className={`w-5 h-5 text-[#c084fc] transition-transform ${
                            isExpanded ? 'rotate-180' : ''
                          }`}
                        />
                      </div>
                    </button>

                    {/* Expanded content */}
                    <AnimatePresence>
                      {isExpanded && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.2 }}
                          className="relative border-t border-white/10"
                        >
                          <div className="p-6 space-y-4">
                            {/* Class description */}
                            <div>
                              <h4 className="text-sm font-semibold text-[#c084fc] mb-2">About this class</h4>
                              <p className="text-gray-400 text-sm leading-relaxed">
                                {classItem.description ||
                                  'A transformative session in complete darkness, focusing on inner awareness and mindful movement.'}
                              </p>
                            </div>

                            {/* Session info grid */}
                            <div className="grid grid-cols-2 gap-4">
                              <div>
                                <p className="text-xs text-gray-500 mb-1">Duration</p>
                                <p className="text-white font-semibold">{classItem.duration || 60} minutes</p>
                              </div>
                              <div>
                                <p className="text-xs text-gray-500 mb-1">Max Capacity</p>
                                <p className="text-white font-semibold">{classItem.maxCapacity || 12} people</p>
                              </div>
                            </div>

                            {/* Book button */}
                            <motion.button
                              whileHover={{ scale: 1.02 }}
                              whileTap={{ scale: 0.98 }}
                              className="w-full py-3 bg-gradient-to-r from-[#7c3aed] to-[#a78bfa] text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-[#7c3aed]/50 transition-all duration-300 uppercase text-sm tracking-wider mt-2"
                            >
                              Book a Spot
                            </motion.button>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                );
              })}
            </motion.div>
          ) : (
            <motion.div
              key={`${displayDay}-empty`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="text-center py-12"
            >
              <p className="text-gray-400 text-lg">No classes scheduled for {displayDay}</p>
              <p className="text-gray-500 text-sm mt-2">Try selecting a different day</p>
            </motion.div>
          )}
        </AnimatePresence>
      </section>

      {/* Legend */}
      <section className="max-w-7xl mx-auto px-4 lg:px-8 py-12 border-t border-[#7c3aed]/10">
        <h3 className="text-sm font-semibold text-[#c084fc] mb-6 uppercase tracking-widest">
          Level Legend
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {Object.entries(levelDotColors).map(([level, color]) => (
            <div key={level} className="flex items-center gap-3">
              <div className={`w-3 h-3 rounded-full ${color}`} />
              <span className="text-gray-400 text-sm">{level}</span>
            </div>
          ))}
        </div>

        {/* Spots indicator legend */}
        <div className="mt-8">
          <h3 className="text-sm font-semibold text-[#c084fc] mb-4 uppercase tracking-widest">
            Availability
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="flex items-center gap-3">
              <div className="px-2 py-1 bg-green-500/20 text-green-400 border border-green-500/40 rounded text-xs font-semibold">
                5+ spots
              </div>
              <span className="text-gray-400 text-sm">Plenty available</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="px-2 py-1 bg-yellow-500/20 text-yellow-400 border border-yellow-500/40 rounded text-xs font-semibold">
                2-5 spots
              </div>
              <span className="text-gray-400 text-sm">Limited spaces</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="px-2 py-1 bg-red-500/20 text-red-400 border border-red-500/40 rounded text-xs font-semibold">
                1 spot
              </div>
              <span className="text-gray-400 text-sm">Almost full</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
