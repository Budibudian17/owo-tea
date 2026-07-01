"use client"

import { useState, useRef, useEffect } from "react"
import Image from "next/image"
import { Music, Play } from "lucide-react"

export default function MusicWidget() {
  const [isPlaying, setIsPlaying] = useState(false)
  const [showTooltip, setShowTooltip] = useState(true)
  const [progress, setProgress] = useState(0)
  const audioRef = useRef<HTMLAudioElement>(null)

  useEffect(() => {
    // Hide tooltip after 5 seconds
    const tooltipTimer = setTimeout(() => {
      setShowTooltip(false)
    }, 5000)

    return () => clearTimeout(tooltipTimer)
  }, [])

  useEffect(() => {
    const audio = audioRef.current
    if (!audio) return

    const updateProgress = () => {
      if (audio.duration) {
        setProgress((audio.currentTime / audio.duration) * 100)
      }
    }

    audio.addEventListener('timeupdate', updateProgress)
    audio.addEventListener('loadedmetadata', updateProgress)

    return () => {
      audio.removeEventListener('timeupdate', updateProgress)
      audio.removeEventListener('loadedmetadata', updateProgress)
    }
  }, [])

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause()
      } else {
        audioRef.current.play()
        setShowTooltip(false)
      }
      setIsPlaying(!isPlaying)
    }
  }

  const circumference = 2 * Math.PI * 36 // 36 is radius (slightly smaller than button)
  const strokeDashoffset = circumference - (progress / 100) * circumference

  return (
    <>
      <audio
        ref={audioRef}
        loop
        src="/audio/thememusic.mp3"
      />
      
      <div className="fixed bottom-6 right-6 z-50">
        {/* Dynamic notification tooltip */}
        {showTooltip && (
          <div className="absolute bottom-full right-0 mb-4 flex items-center gap-3 animate-slide-up">
            <div className="bg-gradient-to-r from-green-600 to-green-700 text-white px-5 py-3 rounded-2xl shadow-2xl flex items-center gap-3">
              <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center animate-pulse">
                <Music size={20} />
              </div>
              <div>
                <div className="font-semibold text-sm">Dengarkan musik kami</div>
                <div className="text-xs text-green-100 mt-0.5">Klik untuk play</div>
              </div>
              <div className="w-2 h-2 bg-white rounded-full animate-ping" />
            </div>
            {/* Arrow */}
            <div className="w-0 h-0 border-l-[8px] border-l-transparent border-r-[8px] border-r-transparent border-t-[8px] border-t-green-600" />
          </div>
        )}

        <button
          onClick={togglePlay}
          className={`relative w-20 h-20 rounded-full shadow-2xl overflow-hidden transition-all duration-500 hover:scale-110 ${
            isPlaying ? 'animate-spin-slow' : ''
          }`}
          style={{
            animationDuration: isPlaying ? '3s' : '0s',
          }}
        >
          {/* Circular progress indicator */}
          <svg className="absolute inset-0 w-full h-full -rotate-90 pointer-events-none z-10">
            <circle
              cx="40"
              cy="40"
              r="36"
              stroke="rgba(34, 197, 94, 0.2)"
              strokeWidth="4"
              fill="none"
            />
            <circle
              cx="40"
              cy="40"
              r="36"
              stroke="#22c55e"
              strokeWidth="4"
              fill="none"
              strokeLinecap="round"
              style={{
                strokeDasharray: circumference,
                strokeDashoffset,
                transition: 'stroke-dashoffset 0.3s ease',
              }}
            />
          </svg>

          {/* Vinyl record background */}
          <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-black" />
          
          {/* Vinyl grooves */}
          <div className="absolute inset-0 rounded-full border-2 border-gray-700/30" style={{ margin: '4px' }} />
          <div className="absolute inset-0 rounded-full border-2 border-gray-700/20" style={{ margin: '8px' }} />
          <div className="absolute inset-0 rounded-full border-2 border-gray-700/15" style={{ margin: '12px' }} />
          <div className="absolute inset-0 rounded-full border-2 border-gray-700/10" style={{ margin: '16px' }} />
          
          {/* Center label */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-green-600 to-green-800 flex items-center justify-center shadow-lg">
              <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center p-1">
                <Image
                  src="/images/owotealogolongs.webp"
                  alt="OWO TEA"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          </div>

          {/* Center hole */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-2 h-2 rounded-full bg-gray-900" />
          </div>

          {/* Play/Pause indicator on hover */}
          <div className="absolute inset-0 flex items-center justify-center bg-black/50 opacity-0 hover:opacity-100 transition-opacity duration-300 z-20">
            {isPlaying ? (
              <div className="flex gap-1">
                <div className="w-1 h-6 bg-white rounded-full" />
                <div className="w-1 h-6 bg-white rounded-full" />
              </div>
            ) : (
              <div className="w-0 h-0 border-l-[12px] border-l-white border-t-[8px] border-t-transparent border-b-[8px] border-b-transparent ml-1" />
            )}
          </div>

          {/* Shine effect */}
          <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent pointer-events-none" />
        </button>
      </div>
    </>
  )
}
