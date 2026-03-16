import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import { useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

// Layout
import Navigation from '@/components/layout/Navigation'
import Footer from '@/components/layout/Footer'
import CustomCursor from '@/components/layout/CustomCursor'
import GrainOverlay from '@/components/layout/GrainOverlay'
import AmbientLight from '@/components/layout/AmbientLight'
import PageTransition from '@/components/layout/PageTransition'

// Pages
import Home from '@/pages/Home'
import Classes from '@/pages/Classes'
import About from '@/pages/About'
import Schedule from '@/pages/Schedule'
import Contact from '@/pages/Contact'

// Hooks
import useLenis from '@/hooks/useLenis'

gsap.registerPlugin(ScrollTrigger)

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
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<PageTransition><Home /></PageTransition>} />
        <Route path="/classes" element={<PageTransition><Classes /></PageTransition>} />
        <Route path="/about" element={<PageTransition><About /></PageTransition>} />
        <Route path="/schedule" element={<PageTransition><Schedule /></PageTransition>} />
        <Route path="/contact" element={<PageTransition><Contact /></PageTransition>} />
      </Routes>
    </AnimatePresence>
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
