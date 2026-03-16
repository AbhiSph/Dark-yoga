import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { ArrowRight, Zap, Wind, Moon, Sun, Heart, Shield } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

// Mock CLASSES data - replace with actual import if available
const CLASSES = [
  {
    id: 1,
    name: 'Shadow Flow',
    description: 'A meditative flow that embraces darkness and inner reflection.',
    duration: '60 min',
    level: 'Intermediate',
    icon: Moon,
    gradient: 'from-indigo-600 to-purple-600',
  },
  {
    id: 2,
    name: 'Breath Work',
    description: 'Pranayama practices to unlock your hidden potential.',
    duration: '45 min',
    level: 'Beginner',
    icon: Wind,
    gradient: 'from-purple-600 to-pink-600',
  },
  {
    id: 3,
    name: 'Deep Meditation',
    description: 'Journey into profound stillness and consciousness.',
    duration: '75 min',
    level: 'Advanced',
    icon: Zap,
    gradient: 'from-purple-700 to-indigo-700',
  },
  {
    id: 4,
    name: 'Power Vinyasa',
    description: 'Build strength through dynamic flow and transformation.',
    duration: '60 min',
    level: 'Advanced',
    icon: Heart,
    gradient: 'from-rose-600 to-purple-600',
  },
  {
    id: 5,
    name: 'Yin Yoga',
    description: 'Long-held poses for deep tissue release and healing.',
    duration: '90 min',
    level: 'All Levels',
    icon: Shield,
    gradient: 'from-teal-600 to-purple-600',
  },
  {
    id: 6,
    name: 'Evening Serenity',
    description: 'Gentle unwinding practices for peaceful sleep.',
    duration: '50 min',
    level: 'Beginner',
    icon: Sun,
    gradient: 'from-amber-600 to-purple-600',
  },
];

const ClassCard = React.forwardRef(({ classItem }, ref) => {
  const Icon = classItem.icon;
  return (
    <motion.div
      ref={ref}
      className="group bg-black/40 backdrop-blur border border-white/5 rounded-lg overflow-hidden transition-all duration-300 hover:border-purple-500/50"
      whileHover={{ y: -8 }}
      onHoverStart={() => {
        // Glow effect on hover
        if (ref?.current) {
          gsap.to(ref.current, {
            boxShadow: '0 0 30px rgba(124, 58, 237, 0.5)',
            duration: 0.3,
          });
        }
      }}
      onHoverEnd={() => {
        if (ref?.current) {
          gsap.to(ref.current, {
            boxShadow: 'none',
            duration: 0.3,
          });
        }
      }}
    >
      {/* Top gradient bar */}
      <div className={`h-0.5 bg-gradient-to-r ${classItem.gradient}`} />

      {/* Content */}
      <div className="p-6 md:p-8 flex flex-col h-full">
        {/* Icon area */}
        <div className="mb-6 text-purple-400/60 group-hover:text-purple-400 transition-colors">
          <Icon size={32} className="opacity-70" />
        </div>

        {/* Class name */}
        <h3 className="font-cormorant text-2xl md:text-3xl font-light italic text-white mb-3 leading-tight">
          {classItem.name}
        </h3>

        {/* Description */}
        <p className="font-inter text-sm text-white/60 mb-6 flex-grow leading-relaxed">
          {classItem.description}
        </p>

        {/* Pills */}
        <div className="flex flex-wrap gap-3">
          <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs text-white/70 font-inter">
            {classItem.duration}
          </span>
          <span className="px-3 py-1 rounded-full bg-purple-600/20 border border-purple-500/30 text-xs text-purple-300 font-inter">
            {classItem.level}
          </span>
        </div>
      </div>
    </motion.div>
  );
});

ClassCard.displayName = 'ClassCard';

export default function ClassesPreview() {
  const sectionRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to('.class-card', {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 60%',
          toggleActions: 'play none none none',
        },
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.1,
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="relative w-full py-24 px-6 md:px-12 lg:px-20 bg-black">
      <div className="max-w-7xl mx-auto">
        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-4"
        >
          <h2 className="text-xs md:text-sm tracking-widest uppercase text-purple-400 font-inter font-semibold">
            02 — Classes
          </h2>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          viewport={{ once: true }}
          className="font-cormorant text-5xl md:text-6xl lg:text-7xl italic font-light text-white mb-16 md:mb-20 leading-tight"
        >
          Find Your Practice
        </motion.h1>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-10 mb-16">
          {CLASSES.map((classItem, idx) => (
            <div
              key={classItem.id}
              className="class-card opacity-0 translate-y-8"
              ref={(el) => (cardsRef.current[idx] = el)}
            >
              <ClassCard classItem={classItem} ref={(el) => (cardsRef.current[idx] = el)} />
            </div>
          ))}
        </div>

        {/* View all link */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <a
            href="/classes"
            className="inline-flex items-center gap-2 font-inter text-sm md:text-base tracking-widest uppercase text-purple-400 hover:text-purple-300 transition-colors group"
          >
            View All Classes
            <ArrowRight
              size={16}
              className="group-hover:translate-x-2 transition-transform"
            />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
