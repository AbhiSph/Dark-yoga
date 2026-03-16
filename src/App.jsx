import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import { useEffect, lazy, Suspense } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

// Layout (always needed — not lazy)
import Navigation from '@/components/layout/Navigation'
import Footer from '@/components/layout/Footer'
import CustomCursor from '@/components/layout/CustomCursor'
import GrainOverlay from '@/components/layout/GrainOverlay'
import AmbientLight from '@/components/layout/AmbientLight'
import PageTransition from '@/components/layout/PageTransition'

// Pages — lazy loaded so only the current page's code is fetched
const Home     = lazy(() => import('@/pages/Home'))
const Classes  = lazy(() => import('@/pages/Classes'))
const About    = lazy(() => import('@/pages/About'))
const Schedule = lazy(() => import('@/pages/Schedule'))
const Contact  = lazy(() => import('@/pages/Contact'))

// Hooks
import useLenis from '@/hooks/useLenis'

gsap.registerPlugin(ScrollTrigger)

// Minimal fallback — keeps background colour, no spinner flicker
function PageFallback() {
  return <div style={{ minHeight: '100vh', background: '#050505' }} />
}

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])
  return null
}

function AnimatedRoutes() {
  const location = useLocation()
  return (
    <Suspense fallback={<PageFallback />}>
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<PageTransition><Home /></PageTransition>} />
          <Route path="/classes" element={<PageTransition><Classes /></PageTransition>} />
          <Route path="/about" element={<PageTransition><About /></PageTransition>} />
          <Route path="/schedule" element={<PageTransition><Schedule /></PageTransition>} />
          <Route path="/contact" element={<PageTransition><Contact /></PageTransition>} />
        </Routes>
      </AnimatePresence>
    </Suspense>
  )
}

function AppContent() {
  useLenis()

  return (
    <div className="relative min-h-screen bg-black text-white overflow-x-hidden">
      {/* Fixed effects */}
      <GrainOverlay />
      <AmbientLight />
      <CustomCursor />

      {/* Layout */}
      <Navigation />

      <AnimatedRoutes />

      <Footer />
    </div>
  )
}

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <AppContent />
    </Router>
  )
}
