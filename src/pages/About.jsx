import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Heart, Moon, Flame } from 'lucide-react'
import { INSTRUCTORS, STUDIO_INFO } from '@/utils/data'

const timeline = [
  { year: '1960', label: 'Suyin is born in Vienna, Austria — an artist and seeker from the very beginning.' },
  { year: '2000s', label: 'Completes hypnosis and mental training certification in Vienna. Begins 20+ years of soul training and spiritual counselling practice.' },
  { year: '2010', label: 'Trains as a fire-walk trainer and completes medium training under Dr. Julia Assante. The inner landscape becomes her home.' },
  { year: '2014', label: 'Builds the Tempelraum — a sacred space in the Waldviertel. A pyramid is installed. The darkroom is charged, aligned, and ready.' },
  { year: '2016', label: 'Dark Yoga® is born. The first silent retreat students enter the darkroom. The royal path of meditation opens to those brave enough to walk it.' },
  { year: '2019', label: 'Suyin and author Saskia John begin their celebrated lecture series "Durch die Dunkelheit ins Licht" — touring Austria and Germany.' },
  { year: 'Today', label: 'Dark Yoga® continues as a deeply personal practice. Retreats, soul sessions, Hanuman Chalisa ceremonies. One guide. The darkness itself as teacher.' },
]

const pillars = [
  {
    icon: Moon,
    title: 'Dunkelheit / Darkness',
    text: 'For thousands of years, darkness has been the most sacred space in spiritual traditions worldwide. In total darkness, the mind stops performing. The soul begins to speak.',
  },
  {
    icon: Heart,
    title: 'Seele / Soul',
    text: 'Soul training is not metaphor — it is method. Suyin draws on two decades of soul guidance, hypnosis, and mental coaching to support each participant\'s unique inner journey.',
  },
  {
    icon: Flame,
    title: 'Licht / Light',
    text: 'The destination is always light. But it cannot be reached by avoiding darkness. "Der Weg ins Licht führt durch die Dunkelheit." The path through is the practice.',
  },
]

const faqs = [
  {
    q: 'What exactly is Dark Yoga®?',
    a: 'Dark Yoga® is a meditative practice conducted in complete darkness — a darkroom retreat. Participants stay in the Tempelraum in the Waldviertel. In the absence of light, inner awareness is heightened. It is not traditional asana yoga — it is the royal path of meditation through sensory stillness.',
  },
  {
    q: 'Who is Suyin Orlowski?',
    a: 'Suyin Orlowski (born 1960, Vienna) is the founder of Dark Yoga®. She is an artist, mental trainer, soul guide, and retreat facilitator with over 20 years of experience in spiritual counselling, hypnosis, fire-walking, and medium training under Dr. Julia Assante.',
  },
  {
    q: 'Do I need yoga experience?',
    a: 'No. Dark Yoga® is accessible to everyone. No prior yoga or meditation experience is required. What matters is a sincere willingness to sit with yourself in stillness and silence.',
  },
  {
    q: 'What happens during a retreat?',
    a: 'Participants enter the Darkroom and remain in complete darkness. Fasting is part of the experience — one vegan meal is provided daily. Suyin is present throughout and offers brief daily conversations. The retreat can last from a single session to 10 days.',
  },
  {
    q: 'Where is the retreat located?',
    a: 'The retreat takes place in the mystical Waldviertel region of Austria — a forest landscape of extraordinary energy, far from city distraction.',
  },
  {
    q: 'How do I book?',
    a: 'All sessions and retreats are arranged personally with Suyin. Write to info@darkyoga.at to begin the conversation.',
  },
]

export default function About() {
  const [openFaq, setOpenFaq] = useState(null)

  return (
    <main className="bg-[#050505] text-white min-h-screen">

      {/* ── Hero ── */}
      <section className="relative w-full min-h-[70vh] flex items-center justify-center overflow-hidden px-6 pt-32 pb-20">
        <div className="absolute inset-0 pointer-events-none"
          style={{ background: 'radial-gradient(ellipse 60% 50% at 50% 80%, rgba(124,58,237,0.13), transparent)' }} />
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden">
          <span className="font-display text-[22vw] font-light text-white/[0.025] leading-none">DARK</span>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="relative z-10 text-center max-w-4xl"
        >
          <p className="text-[10px] tracking-[0.4em] uppercase text-purple-400/60 font-sans mb-6">Our Story</p>
          <h1 className="font-display text-7xl md:text-9xl italic font-light text-white leading-none mb-6">Über Uns</h1>
          <p className="font-display text-2xl md:text-3xl italic text-white/40 leading-relaxed">About Dark Yoga®</p>
        </motion.div>
      </section>

      {/* ── Origin Story ── */}
      <section className="py-28 px-6 md:px-12 lg:px-20 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.9 }} viewport={{ once: true }}>
            <p className="text-[10px] tracking-[0.35em] uppercase text-purple-400/60 font-sans mb-6">Origins</p>
            <h2 className="font-display text-5xl md:text-6xl italic font-light text-white leading-tight mb-8">
              Born from darkness,<br />built for light.
            </h2>
            <div className="space-y-5 font-sans text-sm md:text-base text-white/55 leading-relaxed">
              <p>Dark Yoga® was founded by Suyin Orlowski in the mystical Waldviertel forest region of Austria. Born in Vienna in 1960, Suyin spent decades exploring the inner landscape — through art, hypnosis, soul training, fire-walking, and mediumship.</p>
              <p>After building the Tempelraum — a sacred space charged with positive energy, pyramid geometry, and precisely mapped meditation fields — she began guiding students into complete darkness for extended stays.</p>
              <p>The concept is ancient: for thousands of years, darkness has been used as a spiritual framework in nearly every tradition. What Suyin created is an Austrian home for this practice — intimate, rigorous, and profoundly healing.</p>
              <p>The signature phrase says everything: <span className="text-white/80 italic font-display text-base">"Der Weg ins Licht führt durch die Dunkelheit."</span></p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ duration: 1, delay: 0.2 }} viewport={{ once: true }}
            className="relative aspect-square rounded-sm overflow-hidden"
            style={{ border: '1px solid rgba(124,58,237,0.12)' }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-purple-950/40 to-black" />
            <div className="absolute inset-0 flex items-center justify-center opacity-10">
              <svg viewBox="0 0 300 300" className="w-full h-full" fill="none" stroke="white" strokeWidth="0.5">
                {[150, 110, 70, 30].map((r, i) => <circle key={i} cx="150" cy="150" r={r} />)}
                <line x1="150" y1="0" x2="150" y2="300" />
                <line x1="0" y1="150" x2="300" y2="150" />
                <line x1="44" y1="44" x2="256" y2="256" />
                <line x1="256" y1="44" x2="44" y2="256" />
                <path d="M150 10 A140 140 0 0 1 150 290 A70 70 0 0 1 150 150 A70 70 0 0 0 150 10" />
                <circle cx="150" cy="80" r="12" fill="white" opacity="0.15" />
                <circle cx="150" cy="220" r="12" fill="white" opacity="0.08" />
              </svg>
            </div>
            <div className="absolute inset-0 flex items-center justify-center p-8">
              <div className="text-center">
                <p className="font-display text-3xl md:text-4xl italic text-white/20 leading-relaxed">"Die Dunkelheit ist dein Lehrer."</p>
                <p className="font-sans text-xs text-white/15 tracking-widest mt-4">"Darkness is your teacher."</p>
              </div>
            </div>
            <div className="absolute inset-0 pointer-events-none"
              style={{ background: 'radial-gradient(circle at 30% 30%, rgba(124,58,237,0.2), transparent 60%)', opacity: 0.6 }} />
          </motion.div>
        </div>
      </section>

      {/* ── Mission Statement ── */}
      <section className="py-20 px-6 md:px-12 lg:px-20"
        style={{ borderTop: '1px solid rgba(124,58,237,0.08)', borderBottom: '1px solid rgba(124,58,237,0.08)', background: 'linear-gradient(180deg, rgba(124,58,237,0.04) 0%, transparent 100%)' }}>
        <div className="max-w-5xl mx-auto text-center">
          <motion.blockquote initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 1 }} viewport={{ once: true }}
            className="font-display text-3xl md:text-4xl lg:text-5xl italic text-white/80 leading-relaxed mb-6">
            "The true teacher is not Suyin. The true teacher is the darkness and the silence within yourself."
          </motion.blockquote>
          <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.8, delay: 0.4 }} viewport={{ once: true }}
            className="font-sans text-xs tracking-[0.3em] uppercase text-purple-400/50">
            — Dark Yoga® Philosophy
          </motion.p>
        </div>
      </section>

      {/* ── Philosophy Pillars ── */}
      <section className="py-28 px-6 md:px-12 lg:px-20 max-w-7xl mx-auto">
        <motion.p initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }}
          className="text-[10px] tracking-[0.35em] uppercase text-purple-400/60 font-sans mb-16">
          Three Pillars
        </motion.p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pillars.map(({ icon: Icon, title, text }, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: i * 0.15 }} viewport={{ once: true }}
              className="p-8 rounded-sm" style={{ background: 'rgba(17,17,17,0.6)', border: '1px solid rgba(255,255,255,0.05)' }}>
              <Icon size={22} className="text-purple-400/70 mb-6" />
              <h3 className="font-sans text-sm font-semibold tracking-[0.2em] uppercase text-white mb-4">{title}</h3>
              <p className="font-display italic text-sm md:text-base text-white/50 leading-relaxed">{text}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── Instructors ── */}
      <section className="py-20 px-6 md:px-12 lg:px-20 max-w-7xl mx-auto">
        <motion.p initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }}
          className="text-[10px] tracking-[0.35em] uppercase text-purple-400/60 font-sans mb-16">
          The Guides
        </motion.p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {INSTRUCTORS.map((instructor, i) => (
            <motion.div key={instructor.id} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: i * 0.2 }} viewport={{ once: true }}
              className="p-8 rounded-sm" style={{ background: 'rgba(17,17,17,0.7)', border: '1px solid rgba(255,255,255,0.05)' }}>
              <div className="w-14 h-14 rounded-full mb-6 flex items-center justify-center"
                style={{ background: 'radial-gradient(circle, rgba(124,58,237,0.25), rgba(17,17,17,0.8))', border: '1px solid rgba(124,58,237,0.2)' }}>
                <svg viewBox="0 0 40 40" className="w-7 h-7 opacity-30" fill="none" stroke="white" strokeWidth="0.8">
                  <circle cx="20" cy="20" r="18" />
                  <path d="M 20 2 A 18 18 0 0 1 20 38 A 9 9 0 0 1 20 20 A 9 9 0 0 0 20 2" />
                </svg>
              </div>
              <h3 className="font-display text-3xl italic font-light text-white mb-1">{instructor.name}</h3>
              <p className="font-sans text-xs tracking-[0.2em] uppercase text-yellow-600/60 mb-5">{instructor.role}</p>
              <p className="font-sans text-sm text-white/50 leading-relaxed mb-6">{instructor.bio}</p>
              {instructor.quote && (
                <blockquote className="font-display italic text-sm text-white/30 pl-4 border-l border-purple-500/30 mb-6">{instructor.quote}</blockquote>
              )}
              <div className="flex flex-wrap gap-2">
                {instructor.specialties.map((s, si) => (
                  <span key={si} className="px-3 py-1 rounded-full text-[10px] tracking-widest uppercase text-purple-300/60 font-sans"
                    style={{ background: 'rgba(124,58,237,0.1)', border: '1px solid rgba(124,58,237,0.2)' }}>{s}</span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── Timeline ── */}
      <section className="py-28 px-6 md:px-12 lg:px-20 max-w-4xl mx-auto">
        <motion.p initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }}
          className="text-[10px] tracking-[0.35em] uppercase text-purple-400/60 font-sans mb-16">
          Milestones
        </motion.p>
        <div className="relative">
          <div className="absolute left-[68px] top-0 bottom-0 w-px bg-gradient-to-b from-purple-500/40 via-purple-500/20 to-transparent" />
          <div className="space-y-10">
            {timeline.map((item, i) => (
              <motion.div key={i} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.7, delay: i * 0.08 }} viewport={{ once: true }}
                className="flex gap-8 items-start">
                <div className="w-[68px] flex-shrink-0 text-right relative">
                  <span className="font-display text-sm italic text-purple-400/70">{item.year}</span>
                  <div className="absolute -right-[5px] top-1.5 w-2 h-2 rounded-full bg-purple-500/60 border border-purple-400/40" />
                </div>
                <p className="font-sans text-sm text-white/40 leading-relaxed pt-0.5">{item.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="py-20 px-6 md:px-12 lg:px-20 max-w-4xl mx-auto">
        <motion.p initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }}
          className="text-[10px] tracking-[0.35em] uppercase text-purple-400/60 font-sans mb-14">
          Common Questions
        </motion.p>
        <div className="space-y-2">
          {faqs.map((faq, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: i * 0.07 }} viewport={{ once: true }}
              className="rounded-sm overflow-hidden" style={{ border: '1px solid rgba(255,255,255,0.05)' }}>
              <button onClick={() => setOpenFaq(openFaq === i ? null : i)}
                className="w-full flex justify-between items-center p-6 text-left hover:bg-white/[0.02] transition-colors duration-200">
                <span className="font-sans text-sm text-white/65">{faq.q}</span>
                <span className={`text-purple-400/60 text-xl ml-4 flex-shrink-0 transition-transform duration-300 ${openFaq === i ? 'rotate-45' : ''}`}>+</span>
              </button>
              <AnimatePresence>
                {openFaq === i && (
                  <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.35 }}>
                    <p className="px-6 pb-6 font-sans text-sm text-white/38 leading-relaxed">{faq.a}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── Final CTA ── */}
      <section className="py-20 px-6 text-center">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }}>
          <h2 className="font-display text-4xl md:text-5xl italic text-white/75 mb-8">Ready to enter the dark?</h2>
          <a href="mailto:info@darkyoga.at"
            className="inline-block px-10 py-4 bg-purple-700 text-white font-sans text-xs tracking-[0.25em] uppercase transition-all duration-400 hover:bg-purple-600 hover:shadow-[0_0_40px_rgba(124,58,237,0.7)]"
            style={{ boxShadow: '0 0 25px rgba(124,58,237,0.4)' }}>
            Write to Suyin — info@darkyoga.at
          </a>
        </motion.div>
      </section>
    </main>
  )
}
