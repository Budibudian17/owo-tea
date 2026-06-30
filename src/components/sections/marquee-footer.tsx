"use client"

import { marqueeFooterStyles } from "@/styles/marquee-footer"

export default function MarqueeFooter() {
  const footerText = [
    "OWO TEA",
    "Premium Quality",
    "Fresh & Delicious",
    "Indonesian Tea",
    "Best Taste",
    "Natural Ingredients",
    "Traditional Recipe",
    "Modern Twist",
    "CFD Depok",
    "Sunday 06:00 - 09:00"
  ]

  return (
    <div className={marqueeFooterStyles.container}>
      <div className={marqueeFooterStyles.marqueeWrapper}>
        <div className={marqueeFooterStyles.marqueeContent}>
          {footerText.map((text, index) => (
            <span key={index} className={marqueeFooterStyles.marqueeItem}>
              {text}
            </span>
          ))}
          {/* Duplicate for seamless loop */}
          {footerText.map((text, index) => (
            <span key={`dup-${index}`} className={marqueeFooterStyles.marqueeItem}>
              {text}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}
