import { useEffect } from 'react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export function useScrollReveal(ref, options = {}) {
  const {
    y = 60,
    opacity = 0,
    duration = 1,
    stagger = 0.1,
    delay = 0
  } = options

  useEffect(() => {
    if (!ref.current) return

    const elements = ref.current.querySelectorAll('[data-scroll-reveal]')

    if (elements.length === 0) return

    gsap.from(elements, {
      scrollTrigger: {
        trigger: ref.current,
        start: 'top 80%',
        end: 'top 50%',
        markers: false
      },
      y,
      opacity,
      duration,
      stagger,
      delay,
      ease: 'power3.out'
    })

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => {
        if (trigger.vars.trigger === ref.current) {
          trigger.kill()
        }
      })
    }
  }, [ref, y, opacity, duration, stagger, delay])
}
