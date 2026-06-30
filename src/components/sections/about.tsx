"use client"

import { useState, useRef } from "react"
import Image from "next/image"
import { aboutStyles } from "@/styles/about"
import { useIsDesktop } from "@/hooks/use-media-query"

export default function About() {
  const isDesktop = useIsDesktop()
  const [rotateX, setRotateX] = useState(0)
  const [rotateY, setRotateY] = useState(0)
  const [isHovering, setIsHovering] = useState(false)
  const imageRef = useRef<HTMLDivElement>(null)
  
  const [rotateX2, setRotateX2] = useState(0)
  const [rotateY2, setRotateY2] = useState(0)
  const [isHovering2, setIsHovering2] = useState(false)
  const imageRef2 = useRef<HTMLDivElement>(null)

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isDesktop || !imageRef.current) return
    
    const rect = imageRef.current.getBoundingClientRect()
    const centerX = rect.left + rect.width / 2
    const centerY = rect.top + rect.height / 2
    
    const mouseX = e.clientX - centerX
    const mouseY = e.clientY - centerY
    
    const rotateYValue = (mouseX / (rect.width / 2)) * 15
    const rotateXValue = -(mouseY / (rect.height / 2)) * 15
    
    setRotateX(rotateXValue)
    setRotateY(rotateYValue)
    setIsHovering(true)
  }

  const handleMouseLeave = () => {
    setRotateX(0)
    setRotateY(0)
    setIsHovering(false)
  }

  const handleMouseMove2 = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isDesktop || !imageRef2.current) return
    
    const rect = imageRef2.current.getBoundingClientRect()
    const centerX = rect.left + rect.width / 2
    const centerY = rect.top + rect.height / 2
    
    const mouseX = e.clientX - centerX
    const mouseY = e.clientY - centerY
    
    const rotateYValue = (mouseX / (rect.width / 2)) * 15
    const rotateXValue = -(mouseY / (rect.height / 2)) * 15
    
    setRotateX2(rotateXValue)
    setRotateY2(rotateYValue)
    setIsHovering2(true)
  }

  const handleMouseLeave2 = () => {
    setRotateX2(0)
    setRotateY2(0)
    setIsHovering2(false)
  }

  return (
    <section id="about" className={aboutStyles.section}>
      <div className={aboutStyles.diagonalOverlay}></div>
      
      <div className={aboutStyles.container}>
        <div className={aboutStyles.content}>
          {/* Left Side - Visual */}
          <div className={aboutStyles.visualSection}>
            <div className={aboutStyles.imageContainer}>
              {/* First Image */}
              <div
                ref={imageRef}
                className={aboutStyles.imageFrame1}
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
                style={{
                  transform:
                    isDesktop && isHovering
                      ? `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.05) rotate(-6deg)`
                      : "perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1) rotate(-6deg)",
                  transition: isHovering ? "none" : "transform 0.5s ease-out",
                }}
              >
                <Image
                  src="/images/icetea2.webp"
                  alt="OWO TEA Story"
                  fill
                  className="object-contain p-4"
                />
              </div>
              
              {/* Second Image */}
              <div
                ref={imageRef2}
                className={aboutStyles.imageFrame2}
                onMouseMove={handleMouseMove2}
                onMouseLeave={handleMouseLeave2}
                style={{
                  transform:
                    isDesktop && isHovering2
                      ? `perspective(1000px) rotateX(${rotateX2}deg) rotateY(${rotateY2}deg) scale(1.05) rotate(6deg)`
                      : "perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1) rotate(6deg)",
                  transition: isHovering2 ? "none" : "transform 0.5s ease-out",
                }}
              >
                <Image
                  src="/images/icetea1.webp"
                  alt="OWO TEA Story"
                  fill
                  className="object-contain p-4"
                />
              </div>
              
              <div className={aboutStyles.floatingElement}>
                <span className={aboutStyles.floatingText}>Fresh</span>
              </div>
              <div className={aboutStyles.floatingElement2}>
                <span className={aboutStyles.floatingText}>Love</span>
              </div>
            </div>
          </div>

          {/* Right Side - Story */}
          <div className={aboutStyles.storySection}>
            <div className={aboutStyles.yearBadge}>2026</div>
            <h2 className={aboutStyles.title}>
              Cerita <span className={aboutStyles.titleHighlight}>Kami</span>
            </h2>
            <div className={aboutStyles.storyText}>
              <p className={aboutStyles.paragraph}>
                Dimulai dari kecintaan sederhana pada teh segar yang diseduh dengan hati, 
                OWO TEA lahir di sudut kecil yang penuh kenangan.
              </p>
              <p className={aboutStyles.paragraph}>
                Setiap cangkir menceritakan kisah - dari daun teh yang dipilih dengan teliti, 
                hingga senyum pelanggan yang menjadi semangat kami.
              </p>
              <p className={aboutStyles.paragraph}>
                Bukan sekadar minuman, tapi pengalaman yang ingin kami bagikan 
                satu cangkir demi satu cangkir.
              </p>
            </div>
            
            {/* Stats */}
            <div className={aboutStyles.stats}>
              <div className={aboutStyles.statItem}>
                <span className={aboutStyles.statNumber}>20+</span>
                <span className={aboutStyles.statLabel}>Pelanggan Harian</span>
              </div>
              <div className={aboutStyles.statDivider}></div>
              <div className={aboutStyles.statItem}>
                <span className={aboutStyles.statNumber}>1</span>
                <span className={aboutStyles.statLabel}>Menu Favorit</span>
              </div>
              <div className={aboutStyles.statDivider}></div>
              <div className={aboutStyles.statItem}>
                <span className={aboutStyles.statNumber}>∞</span>
                <span className={aboutStyles.statLabel}>Cinta</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
