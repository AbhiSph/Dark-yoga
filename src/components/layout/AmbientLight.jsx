import React from 'react';
import { motion } from 'framer-motion';

const AmbientLight = () => {
  const blobs = [
    {
      id: 1,
      size: 300,
      color: '#7c3aed',
      opacity: 0.12,
      top: '10%',
      left: '10%',
      duration: 15,
      delay: 0,
    },
    {
      id: 2,
      size: 400,
      color: '#a855f7',
      opacity: 0.08,
      top: '50%',
      left: '70%',
      duration: 18,
      delay: 2,
    },
    {
      id: 3,
      size: 350,
      color: '#7c3aed',
      opacity: 0.1,
      top: '80%',
      left: '30%',
      duration: 20,
      delay: 4,
    },
    {
      id: 4,
      size: 250,
      color: '#a855f7',
      opacity: 0.15,
      top: '20%',
      left: '80%',
      duration: 16,
      delay: 1,
    },
  ];

  return (
    <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
      {blobs.map((blob) => (
        <motion.div
          key={blob.id}
          className="absolute rounded-full"
          style={{
            width: blob.size,
            height: blob.size,
            backgroundColor: blob.color,
            opacity: blob.opacity,
            filter: 'blur(80px)',
            top: blob.top,
            left: blob.left,
          }}
          animate={{
            y: [0, 30, 0],
            x: [0, 20, 0],
            scale: [1, 1.1, 1],
            opacity: [blob.opacity * 0.8, blob.opacity, blob.opacity * 0.8],
          }}
          transition={{
            duration: blob.duration,
            delay: blob.delay,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      ))}
    </div>
  );
};

export default AmbientLight;
