import React from 'react'
import { motion } from 'framer-motion'

const blobs = [
  // Large deep-purple — top left
  { id: 1, w: 700, h: 500, color: 'rgba(76,29,149,0.55)',   top: '-10%', left: '-15%', blur: 130, duration: 18, delay: 0,   y: [0,40,0],  x: [0,25,0],  scale: [1,1.06,1] },
  // Violet — right side
  { id: 2, w: 550, h: 550, color: 'rgba(124,58,237,0.45)',  top: '25%',  left: '65%',  blur: 110, duration: 22, delay: 3,   y: [0,-50,0], x: [0,-30,0], scale: [1,1.08,1] },
  // Gold hint — center bottom
  { id: 3, w: 400, h: 300, color: 'rgba(180,120,40,0.25)',  top: '70%',  left: '35%',  blur: 100, duration: 20, delay: 6,   y: [0,35,0],  x: [0,20,0],  scale: [1,1.05,1] },
  // Indigo — bottom left
  { id: 4, w: 480, h: 480, color: 'rgba(79,70,229,0.35)',   top: '60%',  left: '-8%',  blur: 120, duration: 25, delay: 2,   y: [0,-40,0], x: [0,30,0],  scale: [1,1.07,1] },
  // Soft purple — top right
  { id: 5, w: 320, h: 320, color: 'rgba(168,85,247,0.3)',   top: '5%',   left: '75%',  blur: 90,  duration: 16, delay: 8,   y: [0,30,0],  x: [0,-20,0], scale: [1,1.1,1] },
  // Deep violet — far right, mid
  { id: 6, w: 600, h: 400, color: 'rgba(109,40,217,0.3)',   top: '40%',  left: '80%',  blur: 140, duration: 28, delay: 5,   y: [0,45,0],  x: [0,-35,0], scale: [1,1.04,1] },
]

export default function AmbientLight() {
  return (
    <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
      {blobs.map((b) => (
        <motion.div
          key={b.id}
          className="absolute rounded-full"
          style={{
            width: b.w,
            height: b.h,
            background: `radial-gradient(ellipse at center, ${b.color}, transparent 70%)`,
            filter: `blur(${b.blur}px)`,
            top: b.top,
            left: b.left,
          }}
          animate={{ y: b.y, x: b.x, scale: b.scale }}
          transition={{ duration: b.duration, delay: b.delay, repeat: Infinity, ease: 'easeInOut' }}
        />
      ))}
    </div>
  )
}
