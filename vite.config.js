import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
  plugins: [react()],

  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },

  build: {
    // Raise warning threshold — chunks will be smaller after splitting
    chunkSizeWarningLimit: 600,

    // Minify with esbuild (default, fastest)
    minify: 'esbuild',

    // Target modern browsers — smaller output
    target: 'es2020',

    rollupOptions: {
      output: {
        manualChunks: {
          // React core — cached aggressively, rarely changes
          'vendor-react': ['react', 'react-dom', 'react-router-dom'],

          // Animation libraries — split so react core loads first
          'vendor-motion': ['framer-motion'],
          'vendor-gsap':   ['gsap'],
          'vendor-lenis':  ['lenis'],

          // UI utilities — small, but keep separate for caching
          'vendor-ui': [
            'lucide-react',
            'clsx',
            'tailwind-merge',
            '@radix-ui/react-accordion',
            '@radix-ui/react-dialog',
            '@radix-ui/react-tabs',
          ],
        },
      },
    },
  },

  optimizeDeps: {
    include: ['react', 'react-dom', 'react-router-dom', 'framer-motion', 'gsap', 'lenis'],
    // Exclude Three.js — it's not imported anywhere, keep it out of pre-bundle
    exclude: ['three', '@react-three/fiber', '@react-three/drei'],
  },
})
