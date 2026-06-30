"use client"

import { useState, useRef, useEffect } from "react"
import { heroStyles } from "@/styles/hero"
import Image from "next/image"
import { useIsDesktop } from "@/hooks/use-media-query"

export default function Hero() {
  const [rotateX, setRotateX] = useState(0)
  const [rotateY, setRotateY] = useState(0)
  const [isHovering, setIsHovering] = useState(false)
  const [typingText, setTypingText] = useState("")
  const [showTitle, setShowTitle] = useState(false)
  const [showDescription, setShowDescription] = useState(false)
  const imageRef = useRef<HTMLDivElement>(null)
  const isDesktop = useIsDesktop()

  const fullText = "Kualitas Premium Sejak 2026"

  useEffect(() => {
    let index = 0
    const typingInterval = setInterval(() => {
      if (index < fullText.length) {
        setTypingText(fullText.slice(0, index + 1))
        index++
      } else {
        clearInterval(typingInterval)
        setShowTitle(true)
        setTimeout(() => setShowDescription(true), 500)
      }
    }, 100)

    return () => clearInterval(typingInterval)
  }, [])

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isDesktop || !imageRef.current) return

    const rect = imageRef.current.getBoundingClientRect()
    const centerX = rect.left + rect.width / 2
    const centerY = rect.top + rect.height / 2

    const mouseX = e.clientX - centerX
    const mouseY = e.clientY - centerY

    const rotateYValue = (mouseX / rect.width) * 30
    const rotateXValue = -(mouseY / rect.height) * 30

    setRotateX(rotateXValue)
    setRotateY(rotateYValue)
  }

  const handleMouseLeave = () => {
    setRotateX(0)
    setRotateY(0)
    setIsHovering(false)
  }

  const handleMouseEnter = () => {
    setIsHovering(true)
  }

  return (
    <section className={heroStyles.section}>
      <Image
        src="/images/herosectionbackground.webp"
        alt="OWO TEA Background"
        fill
        className={heroStyles.backgroundImage}
        priority
      />
      <div className={heroStyles.overlay}>
        <div className={heroStyles.container}>
          <div className={heroStyles.content}>
            {/* Left Side - Text */}
            <div className={heroStyles.leftContent}>
              <h2 className={heroStyles.subtitle}>
                {typingText}
                <span className={heroStyles.cursor}>|</span>
              </h2>
              <h1 
                className={`${heroStyles.productName} ${showTitle ? heroStyles.fadeIn : heroStyles.hidden}`}
              >
                Es Teh Spesial
              </h1>
              <p 
                className={`${heroStyles.description} ${showDescription ? heroStyles.slideUp : heroStyles.hidden}`}
              >
                Segarkan jiwa Anda dengan racikan teh premium kami, 
                dibuat dengan penuh cinta untuk memberikan pengalaman rasa yang tak terlupakan.
              </p>
            </div>

            {/* Right Side - Product Image */}
            <div className={heroStyles.rightContent}>
              <div
                ref={imageRef}
                className={heroStyles.productImage}
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
                onMouseEnter={handleMouseEnter}
                style={{
                  transform:
                    isDesktop && isHovering
                      ? `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.05)`
                      : "perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)",
                  transition: "transform 0.1s ease-out",
                }}
              >
                <Image
                  src="/images/iceteahero.webp"
                  alt="Ice Tea Product"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
