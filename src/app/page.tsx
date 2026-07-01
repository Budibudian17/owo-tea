"use client"

import { useState, useEffect } from "react"
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
import Loading from "@/components/ui/loading"
import MusicWidget from "@/components/ui/music-widget"

export default function Home() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 3000)

    return () => clearTimeout(timer)
  }, [])

  if (isLoading) {
    return <Loading />
  }

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
