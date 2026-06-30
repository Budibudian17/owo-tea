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

export default function Home() {
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
    </main>
  )
}
