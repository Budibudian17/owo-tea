"use client"

import { useEffect } from "react"
import { useRouter } from "next/navigation"
import Navbar from "@/components/layout/navbar"
import Hero from "@/components/sections/hero"
import BestDrink from "@/components/sections/best-drink"
import Banner from "@/components/sections/banner"
import About from "@/components/sections/about"
import CTA from "@/components/sections/cta"
import MarqueeMenu from "@/components/sections/marquee-menu"
import Menu from "@/components/sections/menu"
import FAQ from "@/components/sections/faq"
import Team from "@/components/sections/team"
import MarqueeFooter from "@/components/sections/marquee-footer"
import Testimonial from "@/components/sections/testimonial"
import Footer from "@/components/sections/footer"
import MusicWidget from "@/components/ui/music-widget"

export default function Home() {
  const router = useRouter()

  useEffect(() => {
    // Check if user needs to see loading page
    const lastVisit = localStorage.getItem('lastVisit')
    const now = Date.now()
    const oneDay = 24 * 60 * 60 * 1000

    if (!lastVisit || (now - parseInt(lastVisit)) >= oneDay) {
      // First visit or visited more than 24 hours ago
      router.push('/loading')
    }
  }, [router])

  return (
    <main>
      <Navbar />
      <Hero />
      <BestDrink />
      <Banner />
      <About />
      <CTA />
      <Menu />
      <MarqueeMenu />
      <FAQ />
      <Team />
      <Testimonial />
      <MarqueeFooter />
      <Footer />
      <MusicWidget />
    </main>
  )
}
