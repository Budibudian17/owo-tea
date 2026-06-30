"use client"

import { useState, useEffect } from "react"
import Image from "next/image"

export default function Loading() {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval)
          return 100
        }
        return prev + 2
      })
    }, 30)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="fixed inset-0 bg-[#F4F1EA] flex flex-col items-center justify-center z-50 px-6">
      {/* Logo */}
      <div className="relative w-48 sm:w-64 h-24 sm:h-32 mb-6 sm:mb-8 animate-bounce">
        <Image
          src="/images/owotealogolongs.webp"
          alt="OWO TEA Logo"
          fill
          className="object-contain"
        />
      </div>

      {/* Loading Text */}
      <div className="text-lg sm:text-2xl font-bold text-gray-800 mb-4 text-center">
        Menyeduh Teh Segar...
      </div>

      {/* Progress Bar */}
      <div className="w-full max-w-xs sm:max-w-sm h-2 bg-gray-300 rounded-full overflow-hidden">
        <div
          className="h-full bg-green-600 transition-all duration-300 ease-out"
          style={{ width: `${progress}%` }}
        />
      </div>

      {/* Progress Percentage */}
      <div className="text-sm text-gray-600 mt-2">
        {progress}%
      </div>

      {/* Tea Leaves Animation */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 text-6xl opacity-10 animate-float" style={{ animationDuration: '3s' }}>
          🍃
        </div>
        <div className="absolute top-3/4 right-1/4 text-6xl opacity-10 animate-float" style={{ animationDuration: '4s', animationDelay: '1s' }}>
          🍃
        </div>
        <div className="absolute top-1/2 left-1/2 text-6xl opacity-10 animate-float" style={{ animationDuration: '5s', animationDelay: '2s' }}>
          🍃
        </div>
      </div>
    </div>
  )
}
