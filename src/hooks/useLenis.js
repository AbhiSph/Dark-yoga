import { useEffect, useRef } from 'react'
import Lenis from 'lenis'
import gsap from 'gsap'

export default function useLenis() {
  const lenisRef = useRef(null)

  useEffect(() => {
    const lenis = new Lenis({
      lerp: 0.08,
      duration: 1.4,
      smoothWheel: true,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t))
    })

    lenisRef.current = lenis

    gsap.ticker.lagSmoothing(0)
    gsap.ticker.add((time) => lenis.raf(time * 1000))

    return () => {
      gsap.ticker.remove((time) => lenis.raf(time * 1000))
      lenis.destroy()
    }
  }, [])

  return lenisRef.current
}
