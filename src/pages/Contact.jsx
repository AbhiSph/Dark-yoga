import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { MapPin, Mail, Clock, Facebook } from 'lucide-react'

const contactInfo = [
  {
    icon: MapPin,
    label: 'Location',
    value: 'Mystisches Waldviertel, Austria',
    sub: 'Exact address provided on booking',
  },
  {
    icon: Mail,
    label: 'Email',
    value: 'info@darkyoga.at',
    href: 'mailto:info@darkyoga.at',
  },
  {
    icon: Facebook,
    label: 'Facebook',
    value: 'facebook.com/darkyoga',
    href: 'https://www.facebook.com/darkyoga/',
  },
  {
    icon: Clock,
    label: 'Availability',
    value: 'By personal arrangement',
    sub: 'All retreats & sessions are booked directly with Suyin',
  },
]

const faqs = [
  { q: 'What should I bring?', a: 'Comfortable, warm clothing. An open heart and willingness to be still. Suyin provides everything else — including one vegan meal per day during retreat stays.' },
  { q: 'How dark is it exactly?', a: 'Complete darkness — no light whatsoever. The Darkroom in the Tempelraum is designed so that after a period of adjustment, your eyes find no anchor. This is intentional and central to the practice.' },
  { q: 'Is fasting required?', a: 'Fasting is part of the inner retreat experience. One vegan meal per day is provided. You are welcome to discuss dietary needs personally with Suyin before booking.' },
  { q: 'Can I speak during the retreat?', a: 'Brief daily conversations with Suyin are available if you wish to share your experience. The rest of the time is held in silence — silence is the teacher.' },
  { q: 'Is Dark Yoga® for beginners?', a: 'Yes. No prior yoga or meditation experience is needed. Dark Yoga® asks only for sincere willingness to meet yourself in stillness.' },
  { q: 'How long are the retreats?', a: 'From a single session to the full 10-day immersion. All durations are arranged personally with Suyin based on your readiness and intention.' },
]

export default function Contact() {
  const [form, setForm]       = useState({ name: '', email: '', subject: 'General', message: '' })
  const [status, setStatus]   = useState(null) // 'success' | 'error' | null
  const [openFaq, setOpenFaq] = useState(null)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!form.name || !form.email || !form.message) { setStatus('error'); return }
    // Simulate send
    setTimeout(() => setStatus('success'), 600)
  }

  return (
    <main className="bg-[#050505] text-white min-h-screen">

      {/* ── Hero ── */}
      <section className="relative w-full min-h-[55vh] flex items-center justify-center overflow-hidden px-6 pt-32 pb-20">
        <div className="absolute inset-0 pointer-events-none"
          style={{ background: 'radial-gradient(ellipse 60% 50% at 50% 80%, rgba(124,58,237,0.12), transparent)' }} />
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden">
          <span className="font-display text-[20vw] font-light text-white/[0.025] leading-none">CONTACT</span>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="relative z-10 text-center"
        >
          <p className="text-[10px] tracking-[0.4em] uppercase text-purple-400/60 font-sans mb-6">Reach Out</p>
          <h1 className="font-display text-7xl md:text-9xl italic font-light text-white leading-none mb-4">Find Us</h1>
          <p className="font-display text-xl italic text-white/35">Write to Suyin. Begin your journey.</p>
        </motion.div>
      </section>

      {/* ── Main contact grid ── */}
      <section className="py-20 px-6 md:px-12 lg:px-20 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20">

          {/* Left — Form */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9 }}
            viewport={{ once: true }}
          >
            <p className="text-[10px] tracking-[0.35em] uppercase text-purple-400/60 font-sans mb-8">Send a Message</p>

            <AnimatePresence mode="wait">
              {status === 'success' ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  className="p-10 rounded-sm text-center"
                  style={{ background: 'rgba(124,58,237,0.08)', border: '1px solid rgba(124,58,237,0.25)' }}
                >
                  <div className="w-10 h-10 rounded-full bg-purple-500/20 border border-purple-500/40 flex items-center justify-center mx-auto mb-5">
                    <span className="text-purple-300 text-xl">✓</span>
                  </div>
                  <h3 className="font-display text-2xl italic text-white mb-3">Message received.</h3>
                  <p className="font-sans text-sm text-white/45 leading-relaxed">
                    Suyin will be in touch to arrange your session. The darkness awaits.
                  </p>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  onSubmit={handleSubmit}
                  className="space-y-5"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                >
                  {/* Name + Email row */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {[
                      { id: 'name',  label: 'Your Name',  type: 'text',  placeholder: 'Name' },
                      { id: 'email', label: 'Your Email', type: 'email', placeholder: 'email@example.com' },
                    ].map(({ id, label, type, placeholder }) => (
                      <div key={id}>
                        <label htmlFor={id} className="block font-sans text-[10px] tracking-[0.25em] uppercase text-white/35 mb-2">{label}</label>
                        <input
                          id={id} type={type} placeholder={placeholder} value={form[id]}
                          onChange={e => setForm(p => ({ ...p, [id]: e.target.value }))}
                          className="w-full bg-white/[0.03] border border-white/8 rounded-sm px-4 py-3 text-sm text-white placeholder-white/20 font-sans outline-none transition-all duration-200 focus:border-purple-500/60 focus:bg-white/[0.05]"
                        />
                      </div>
                    ))}
                  </div>

                  {/* Subject */}
                  <div>
                    <label htmlFor="subject" className="block font-sans text-[10px] tracking-[0.25em] uppercase text-white/35 mb-2">Subject</label>
                    <select
                      id="subject" value={form.subject}
                      onChange={e => setForm(p => ({ ...p, subject: e.target.value }))}
                      className="w-full bg-[#111] border border-white/8 rounded-sm px-4 py-3 text-sm text-white/70 font-sans outline-none transition-all duration-200 focus:border-purple-500/60"
                    >
                      <option>General Enquiry</option>
                      <option>Book a Retreat</option>
                      <option>Soul Training Session</option>
                      <option>10-Day Darkness Retreat</option>
                      <option>Hanuman Chalisa Ceremony</option>
                      <option>Lecture / Event Booking</option>
                    </select>
                  </div>

                  {/* Message */}
                  <div>
                    <label htmlFor="message" className="block font-sans text-[10px] tracking-[0.25em] uppercase text-white/35 mb-2">Your Message</label>
                    <textarea
                      id="message" rows={6} placeholder="Tell Suyin what brings you here..."
                      value={form.message}
                      onChange={e => setForm(p => ({ ...p, message: e.target.value }))}
                      className="w-full bg-white/[0.03] border border-white/8 rounded-sm px-4 py-3 text-sm text-white placeholder-white/20 font-sans outline-none resize-none transition-all duration-200 focus:border-purple-500/60 focus:bg-white/[0.05]"
                    />
                  </div>

                  {status === 'error' && (
                    <p className="font-sans text-xs text-red-400/70">Please fill in all fields before sending.</p>
                  )}

                  <button
                    type="submit"
                    className="w-full py-4 bg-purple-700 text-white font-sans text-xs tracking-[0.25em] uppercase transition-all duration-400 hover:bg-purple-600 hover:shadow-[0_0_35px_rgba(124,58,237,0.6)] active:scale-[0.99]"
                    style={{ boxShadow: '0 0 20px rgba(124,58,237,0.3)' }}
                  >
                    Send Message
                  </button>

                  <p className="font-sans text-[10px] text-white/20 text-center tracking-widest">
                    Or write directly to{' '}
                    <a href="mailto:info@darkyoga.at" className="text-purple-400/60 hover:text-purple-300 transition-colors">
                      info@darkyoga.at
                    </a>
                  </p>
                </motion.form>
              )}
            </AnimatePresence>
          </motion.div>

          {/* Right — Info + Map */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.15 }}
            viewport={{ once: true }}
            className="flex flex-col gap-6"
          >
            <p className="text-[10px] tracking-[0.35em] uppercase text-purple-400/60 font-sans">Studio Info</p>

            {/* Info cards */}
            <div className="space-y-3">
              {contactInfo.map(({ icon: Icon, label, value, sub, href }, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 14 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className="flex gap-4 items-start p-5 rounded-sm"
                  style={{ background: 'rgba(17,17,17,0.7)', border: '1px solid rgba(255,255,255,0.05)' }}
                >
                  <Icon size={16} className="text-purple-400/60 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-sans text-[10px] tracking-[0.25em] uppercase text-white/30 mb-1">{label}</p>
                    {href ? (
                      <a href={href} target={href.startsWith('http') ? '_blank' : undefined} rel="noopener noreferrer"
                        className="font-sans text-sm text-white/65 hover:text-purple-300 transition-colors">
                        {value}
                      </a>
                    ) : (
                      <p className="font-sans text-sm text-white/65">{value}</p>
                    )}
                    {sub && <p className="font-sans text-xs text-white/30 mt-0.5">{sub}</p>}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Map embed — Waldviertel, Lower Austria */}
            <div className="rounded-sm overflow-hidden" style={{ border: '1px solid rgba(124,58,237,0.12)' }}>
              <iframe
                title="Waldviertel, Austria"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d338693.0!2d15.3!3d48.7!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x476d0a1a8a4a4b4b%3A0x0!2sWaldviertel%2C+Lower+Austria!5e0!3m2!1sen!2sat!4v1700000000000!5m2!1sen!2sat"
                width="100%"
                height="260"
                style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg) brightness(0.7) contrast(1.1)' }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

            {/* Quote */}
            <div className="p-6 rounded-sm" style={{ background: 'rgba(124,58,237,0.05)', border: '1px solid rgba(124,58,237,0.12)' }}>
              <p className="font-display italic text-white/50 text-base leading-relaxed">
                "All retreats and sessions are arranged as a personal conversation. Write to Suyin, and she will find the right time and form for your journey."
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="py-20 px-6 md:px-12 lg:px-20 max-w-4xl mx-auto">
        <motion.p initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }}
          className="text-[10px] tracking-[0.35em] uppercase text-purple-400/60 font-sans mb-12">
          Before You Write
        </motion.p>
        <div className="space-y-2">
          {faqs.map((faq, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: i * 0.07 }} viewport={{ once: true }}
              className="rounded-sm overflow-hidden" style={{ border: '1px solid rgba(255,255,255,0.05)' }}>
              <button onClick={() => setOpenFaq(openFaq === i ? null : i)}
                className="w-full flex justify-between items-center p-5 text-left hover:bg-white/[0.02] transition-colors duration-200">
                <span className="font-sans text-sm text-white/60">{faq.q}</span>
                <span className={`text-purple-400/50 text-xl ml-4 flex-shrink-0 transition-transform duration-300 ${openFaq === i ? 'rotate-45' : ''}`}>+</span>
              </button>
              <AnimatePresence>
                {openFaq === i && (
                  <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.3 }}>
                    <p className="px-5 pb-5 font-sans text-sm text-white/35 leading-relaxed">{faq.a}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </section>
    </main>
  )
}
