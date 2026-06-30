"use client"

import { marqueeStyles } from "@/styles/marquee-menu"

export default function MarqueeMenu() {
  const menuNames = [
    "Es Teh Manis",
    "Es Teh Lemon",
    "Es Teh Susu",
    "Es Teh Jahe",
    "Es Teh Melati",
    "Es Teh Matcha",
    "Es Teh Tarik",
    "Es Teh Thai",
    "Es Teh Leci",
    "Es Teh Premium"
  ]

  return (
    <div className={marqueeStyles.container}>
      <div className={marqueeStyles.marqueeWrapper}>
        <div className={marqueeStyles.marqueeContent}>
          {menuNames.map((name, index) => (
            <span key={index} className={marqueeStyles.marqueeItem}>
              {name}
            </span>
          ))}
          {/* Duplicate for seamless loop */}
          {menuNames.map((name, index) => (
            <span key={`dup-${index}`} className={marqueeStyles.marqueeItem}>
              {name}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}
