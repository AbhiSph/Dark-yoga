import React from 'react'
import { motion } from 'framer-motion'

const blobs = [
  // Large deep-purple — top left
  { id: 1, w: 700, h: 500, color: 'rgba(76,29,149,0.5)',   top: '-10%', left: '-15%', blur: 140, duration: 40, delay: 0,  y: [0, 20, 0],  x: [0, 12, 0] },
  // Violet — right side
  { id: 2, w: 550, h: 550, color: 'rgba(124,58,237,0.38)', top: '25%',  left: '65%',  blur: 120, duration: 50, delay: 8,  y: [0, -22, 0], x: [0, -14, 0] },
  // Gold hint — center bottom
  { id: 3, w: 400, h: 300, color: 'rgba(180,120,40,0.2)',  top: '70%',  left: '35%',  blur: 110, duration: 45, delay: 15, y: [0, 16, 0],  x: [0, 10, 0] },
  // Indigo — bottom left
  { id: 4, w: 480, h: 480, color: 'rgba(79,70,229,0.28)',  top: '60%',  left: '-8%',  blur: 130, duration: 55, delay: 5,  y: [0, -18, 0], x: [0, 14, 0] },
  // Soft purple — top right
  { id: 5, w: 320, h: 320, color: 'rgba(168,85,247,0.25)', top: '5%',   left: '75%',  blur: 100, duration: 38, delay: 20, y: [0, 14, 0],  x: [0, -10, 0] },
  // Deep violet — far right, mid
  { id: 6, w: 600, h: 400, color: 'rgba(109,40,217,0.25)', top: '40%',  left: '80%',  blur: 150, duration: 60, delay: 12, y: [0, 20, 0],  x: [0, -16, 0] },
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
          animate={{ y: b.y, x: b.x }}
          transition={{ duration: b.duration, delay: b.delay, repeat: Infinity, ease: 'easeInOut' }}
        />
      ))}
    </div>
  )
}
