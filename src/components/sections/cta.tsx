"use client"

import { useState, useRef, useEffect } from "react"
import { ctaStyles } from "@/styles/cta"
import Image from "next/image"

export default function CTA() {
  const [typingText, setTypingText] = useState("")
  const [showTitle, setShowTitle] = useState(false)
  const [showDescription, setShowDescription] = useState(false)

  const fullText = "Nikmati Sekarang"

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

  return (
    <section className={ctaStyles.section}>
      <Image
        src="/images/backgrounds2.webp"
        alt="OWO TEA Background"
        fill
        className={ctaStyles.backgroundImage}
        priority
      />
      <div className={ctaStyles.overlay}>
        <div className={ctaStyles.container}>
          <div className={ctaStyles.content}>
            {/* Left Side - Text */}
            <div className={ctaStyles.leftContent}>
              <h2 className={ctaStyles.subtitle}>
                {typingText}
                <span className={ctaStyles.cursor}>|</span>
              </h2>
              <h1 
                className={`${ctaStyles.productName} ${showTitle ? ctaStyles.fadeIn : ctaStyles.hidden}`}
              >
                Kunjungi Kami
              </h1>
              <p 
                className={`${ctaStyles.description} ${showDescription ? ctaStyles.slideUp : ctaStyles.hidden}`}
              >
                Rasakan kehangatan teh asli Indonesia di setiap cangkir. 
                Datang dan nikmati suasana yang nyaman bersama kami.
              </p>
            </div>

            {/* Right Side - Product Image */}
            <div className={ctaStyles.rightContent}>
              <div className={ctaStyles.productImage}>
                <Image
                  src="/images/iceteaalot.webp"
                  alt="Ice Tea Product"
                  fill
                  className="object-contain animate-bounce-horizontal"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className={ctaStyles.lemonContainer}>
        <Image
          src="/images/lemon.webp"
          alt="Lemon"
          fill
          className="object-contain animate-bounce-horizontal"
        />
      </div>
      <div className={ctaStyles.leaf1Container}>
        <Image
          src="/images/leaf1.webp"
          alt="Leaf"
          fill
          className="object-contain animate-float"
        />
      </div>
      <div className={ctaStyles.leaf2Container}>
        <Image
          src="/images/leaf2.webp"
          alt="Leaf"
          fill
          className="object-contain animate-float"
        />
      </div>
    </section>
  )
}
