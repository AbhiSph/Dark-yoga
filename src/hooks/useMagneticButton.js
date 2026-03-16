import { useCallback } from 'react'
import gsap from 'gsap'

export function useMagneticButton(ref, strength = 40) {
  const handleMouseMove = useCallback((e) => {
    if (!ref.current) return

    const element = ref.current
    const rect = element.getBoundingClientRect()
    const centerX = rect.left + rect.width / 2
    const centerY = rect.top + rect.height / 2

    const distanceX = (e.clientX - centerX) / strength
    const distanceY = (e.clientY - centerY) / strength

    gsap.to(element, {
      x: distanceX,
      y: distanceY,
      duration: 0.4,
      overwrite: 'auto'
    })
  }, [ref, strength])

  const handleMouseLeave = useCallback(() => {
    if (!ref.current) return

    gsap.to(ref.current, {
      x: 0,
      y: 0,
      duration: 0.4,
      overwrite: 'auto'
    })
  }, [ref])

  return { onMouseMove: handleMouseMove, onMouseLeave: handleMouseLeave }
}
