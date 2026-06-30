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

export default function RandomBackground() {
  const [isMounted, setIsMounted] = useState(false)
  const [floatingImages, setFloatingImages] = useState<FloatingImage[]>([])

  useEffect(() => {
    setIsMounted(true)

    // Clear localStorage to regenerate with new positions
    localStorage.removeItem('randomBackgroundPositions')

    // Generate random floating images with better coverage
    const images: FloatingImage[] = []
    const imageCount = 2 // Only 2 images
    const seed = 12345 // Fixed seed for consistent results

    // Define positions for only 2 areas
    const positions = [
      { top: 10, left: 85 },  // Top-right area
      { top: 75, left: 2 },  // Bottom-left area
    ]

    for (let i = 0; i < imageCount; i++) {
      let imageIndex: number
      
      if (i === 0) {
        // First image - random selection
        imageIndex = Math.floor(seededRandom(seed + i) * availableImages.length)
      } else {
        // Second image - different from first
        const firstImageIndex = images[0].src === availableImages[0] ? 0 : 1
        imageIndex = firstImageIndex === 0 ? 1 : 0
      }
      
      const randomImage = availableImages[imageIndex]
      
      // Use predefined positions for even distribution
      const posIndex = i % positions.length
      const offset = seededRandom(seed + i + 1000) * 8 - 4 // -4 to 4 offset (smaller for less overlap)
      const randomTop = `${(positions[posIndex].top + offset).toFixed(1)}%`
      const randomLeft = `${(positions[posIndex].left + offset).toFixed(1)}%`
      
      const randomSize = Math.floor(seededRandom(seed + i + 4000) * 80) + 120 // 120-200px (larger)
      const randomRotation = Math.floor(seededRandom(seed + i + 5000) * 360)
      const randomOpacity = parseFloat((seededRandom(seed + i + 6000) * 0.2 + 0.15).toFixed(2)) // 0.15-0.35
      
      // Random animation timing
      const animationDuration = `${(seededRandom(seed + i + 7000) * 3 + 2).toFixed(1)}s` // 2-5s
      const animationDelay = `${(seededRandom(seed + i + 8000) * 2).toFixed(1)}s` // 0-2s

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
    localStorage.setItem('randomBackgroundPositions', JSON.stringify(images))
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
