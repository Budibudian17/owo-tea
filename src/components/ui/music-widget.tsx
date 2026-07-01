"use client"

import { useState, useRef, useEffect } from "react"
import Image from "next/image"
import { Music } from "lucide-react"
import { musicWidgetStyles } from "@/styles/music-widget"

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

  const circumference = 2 * Math.PI * 36
  const strokeDashoffset = circumference - (progress / 100) * circumference

  return (
    <>
      <audio
        ref={audioRef}
        loop
        src="/audio/thememusic.mp3"
      />
      
      <div className={musicWidgetStyles.container}>
        {/* Dynamic notification tooltip */}
        {showTooltip && (
          <div className={musicWidgetStyles.tooltipWrapper}>
            <div className={musicWidgetStyles.tooltip}>
              <div className={musicWidgetStyles.tooltipIcon}>
                <Music size={20} />
              </div>
              <div>
                <div className={musicWidgetStyles.tooltipText}>Dengarkan musik kami</div>
                <div className={musicWidgetStyles.tooltipSubtext}>Klik untuk play</div>
              </div>
              <div className={musicWidgetStyles.tooltipPing} />
            </div>
            <div className={musicWidgetStyles.tooltipArrow} />
          </div>
        )}

        <button
          onClick={togglePlay}
          className={musicWidgetStyles.button}
        >
          {/* Circular progress indicator - stays fixed */}
          <svg className={musicWidgetStyles.progressSvg}>
            <circle
              cx="40"
              cy="40"
              r="36"
              className={musicWidgetStyles.progressBg}
              strokeWidth="4"
              fill="none"
            />
            <circle
              cx="40"
              cy="40"
              r="36"
              className={musicWidgetStyles.progressFill}
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

          {/* Vinyl record wrapper - rotates when playing */}
          <div 
            className={`absolute inset-0 ${isPlaying ? 'animate-spin-slow' : ''}`}
            style={{ animationDuration: '3s' }}
          >
            {/* Vinyl record background */}
            <div className={musicWidgetStyles.vinylBg} />
            
            {/* Vinyl grooves */}
            <div className={musicWidgetStyles.vinylGroove} style={{ margin: '4px' }} />
            <div className={musicWidgetStyles.vinylGroove} style={{ margin: '8px' }} />
            <div className={musicWidgetStyles.vinylGroove} style={{ margin: '12px' }} />
            <div className={musicWidgetStyles.vinylGroove} style={{ margin: '16px' }} />
            
            {/* Center label */}
            <div className={musicWidgetStyles.centerLabel}>
              <div className={musicWidgetStyles.labelBg}>
                <div className={musicWidgetStyles.labelInner}>
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
            <div className={musicWidgetStyles.centerHole}>
              <div className={musicWidgetStyles.hole} />
            </div>
          </div>

          {/* Play/Pause indicator on hover - stays fixed */}
          <div className={musicWidgetStyles.playIndicator}>
            {isPlaying ? (
              <div className={musicWidgetStyles.pauseBars}>
                <div className={musicWidgetStyles.pauseBar} />
                <div className={musicWidgetStyles.pauseBar} />
              </div>
            ) : (
              <div className={musicWidgetStyles.playTriangle} />
            )}
          </div>

          {/* Shine effect - stays fixed */}
          <div className={musicWidgetStyles.shine} />
        </button>
      </div>
    </>
  )
}
