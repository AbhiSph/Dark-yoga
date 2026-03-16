import { useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Hero from '@/components/sections/Hero'
import Philosophy from '@/components/sections/Philosophy'
import ClassesPreview from '@/components/sections/ClassesPreview'
import FeaturedInstructor from '@/components/sections/FeaturedInstructor'
import Testimonials from '@/components/sections/Testimonials'
import CallToAction from '@/components/sections/CallToAction'

gsap.registerPlugin(ScrollTrigger)

export default function Home() {
  useEffect(() => {
    // Refresh ScrollTrigger after render
    ScrollTrigger.refresh()
    return () => ScrollTrigger.getAll().forEach(t => t.kill())
  }, [])

  return (
    <main>
      <Hero />
      <Philosophy />
      <ClassesPreview />
      <FeaturedInstructor />
      <Testimonials />
      <CallToAction />
    </main>
  )
}
