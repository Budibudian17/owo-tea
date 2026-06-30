"use client"

import { useState, useEffect } from "react"
import Image from "next/image"

interface FloatingImage {
  id: number
  src: string
  top: string
  left: string
  size: number
  rotation: number
  opacity: number
  animationDelay: string
  animationDuration: string
}

const availableImages = [
  "/images/teabackground1.webp",
  "/images/teabackground2.webp",
]

// Seeded random function for consistent results
function seededRandom(seed: number) {
  const x = Math.sin(seed++) * 10000
  return x - Math.floor(x)
}

export default function MenuRandomBackground() {
  const [isMounted, setIsMounted] = useState(false)
  const [floatingImages, setFloatingImages] = useState<FloatingImage[]>([])

  useEffect(() => {
    setIsMounted(true)

    // Check if positions already exist in localStorage
    const storedPositions = localStorage.getItem('menuRandomBackgroundPositions')
    
    if (storedPositions) {
      // Use existing positions
      setFloatingImages(JSON.parse(storedPositions))
      return
    }

    // Generate random floating images with better coverage
    const images: FloatingImage[] = []
    const imageCount = 8 // More images for menu section
    const seed = 54321 // Fixed seed for consistent results

    // Define positions for better distribution across the section
    const positions = [
      { top: 5, left: 5 },   // Top-left
      { top: 5, left: 90 },  // Top-right
      { top: 25, left: 15 }, // Upper-middle-left
      { top: 25, left: 80 }, // Upper-middle-right
      { top: 50, left: 10 }, // Middle-left
      { top: 50, left: 85 }, // Middle-right
      { top: 75, left: 20 }, // Lower-middle-left
      { top: 75, left: 75 }, // Lower-middle-right
    ]

    for (let i = 0; i < imageCount; i++) {
      const imageIndex = Math.floor(seededRandom(seed + i) * availableImages.length)
      const randomImage = availableImages[imageIndex]
      
      // Use predefined positions for even distribution
      const posIndex = i % positions.length
      const offset = seededRandom(seed + i + 1000) * 10 - 5 // -5 to 5 offset
      const randomTop = `${(positions[posIndex].top + offset).toFixed(1)}%`
      const randomLeft = `${(positions[posIndex].left + offset).toFixed(1)}%`
      
      const randomSize = Math.floor(seededRandom(seed + i + 4000) * 60) + 80 // 80-140px
      const randomRotation = Math.floor(seededRandom(seed + i + 5000) * 360)
      const randomOpacity = parseFloat((seededRandom(seed + i + 6000) * 0.15 + 0.1).toFixed(2)) // 0.1-0.25
      
      // Random animation timing
      const animationDuration = `${(seededRandom(seed + i + 7000) * 4 + 3).toFixed(1)}s` // 3-7s
      const animationDelay = `${(seededRandom(seed + i + 8000) * 3).toFixed(1)}s` // 0-3s

      images.push({
        id: i,
        src: randomImage,
        top: randomTop,
        left: randomLeft,
        size: randomSize,
        rotation: randomRotation,
        opacity: randomOpacity,
        animationDelay,
        animationDuration,
      })
    }

    // Store in localStorage for persistence
    localStorage.setItem('menuRandomBackgroundPositions', JSON.stringify(images))
    setFloatingImages(images)
  }, [])

  if (!isMounted) {
    return null // Prevent hydration mismatch
  }

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {floatingImages.map((img) => (
        <div
          key={img.id}
          className="absolute animate-float"
          style={{
            top: img.top,
            left: img.left,
            width: `${img.size}px`,
            height: `${img.size}px`,
            transform: `rotate(${img.rotation}deg)`,
            opacity: img.opacity,
            animationDelay: img.animationDelay,
            animationDuration: img.animationDuration,
          }}
        >
          <Image
            src={img.src}
            alt="Background decoration"
            fill
            className="object-contain"
          />
        </div>
      ))}
    </div>
  )
}
