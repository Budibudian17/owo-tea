"use client"

import { useState } from "react"
import { bestDrinkStyles } from "@/styles/best-drink"
import Image from "next/image"
import RandomBackground from "@/components/ui/random-background"

export default function BestDrink() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null)

  const products = [
    {
      id: 1,
      name: "Segera Hadir",
      description: "Minuman lezat lain segera hadir",
      price: "",
      image: "/images/teabackground1.webp",
      tag: "Segera",
      isComingSoon: true
    },
    {
      id: 2,
      name: "Es Teh Manis",
      description: "Teh manis klasik dengan es, segar dan abadi",
      price: "Rp 5.000",
      image: "/images/iceteaproduct.webp",
      tag: "Terlaris",
      isFeatured: true
    },
    {
      id: 3,
      name: "Segera Hadir",
      description: "Minuman lezat lain segera hadir",
      price: "",
      image: "/images/teabackground2.webp",
      tag: "Segera",
      isComingSoon: true
    }
  ]

  return (
    <section className={bestDrinkStyles.section}>
      <RandomBackground />
      
      <div className={bestDrinkStyles.container}>
        {/* Header */}
        <div className={bestDrinkStyles.header}>
          <div className={bestDrinkStyles.headerBadge}>
            <span className={bestDrinkStyles.badgeText}>Favorit Kami</span>
          </div>
          <h2 className={bestDrinkStyles.title}>
            Minuman <span className={bestDrinkStyles.titleAccent}>Terbaik</span>
          </h2>
          <p className={bestDrinkStyles.subtitle}>
            Minuman buatan tangan yang akan membuat lidah Anda bergoyang
          </p>
        </div>

        {/* Cards Grid */}
        <div className={bestDrinkStyles.grid}>
          {products.map((product, index) => (
            <div
              key={product.id}
              className={`${bestDrinkStyles.card} ${product.isFeatured ? bestDrinkStyles.featuredCard : ''} ${product.isComingSoon ? bestDrinkStyles.comingSoonCard : ''}`}
              style={{
                transform: hoveredCard === null 
                  ? `translateY(${product.isFeatured ? '-10px' : '0'}) scale(${product.isFeatured ? '1.05' : '1'})` 
                  : hoveredCard === product.id 
                    ? `translateY(-20px) scale(${product.isFeatured ? '1.08' : '1.02'})` 
                    : `translateY(10px) scale(0.98)`,
                transition: 'transform 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
              }}
              onMouseEnter={() => setHoveredCard(product.id)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              {/* Card Image */}
              <div className={bestDrinkStyles.cardImageWrapper}>
                <div className={bestDrinkStyles.cardImage}>
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover"
                  />
                  {product.isComingSoon && (
                    <div className={bestDrinkStyles.comingSoonOverlay}>
                      <span className={bestDrinkStyles.comingSoonText}>Segera Hadir</span>
                    </div>
                  )}
                  {!product.isComingSoon && (
                    <div className={bestDrinkStyles.cardTag}>
                      <span className={bestDrinkStyles.tagText}>{product.tag}</span>
                    </div>
                  )}
                </div>
              </div>

              {/* Card Content */}
              <div className={bestDrinkStyles.cardContent}>
                <h3 className={bestDrinkStyles.productName}>{product.name}</h3>
                <p className={bestDrinkStyles.productDescription}>{product.description}</p>
                {!product.isComingSoon && (
                  <div className={bestDrinkStyles.cardFooter}>
                    <span className={bestDrinkStyles.price}>{product.price}</span>
                    <div className={bestDrinkStyles.cardButton}>
                      <span className={bestDrinkStyles.buttonIcon}>→</span>
                    </div>
                  </div>
                )}
              </div>

              {/* Decorative Elements */}
              {!product.isComingSoon && (
                <>
                  <div className={bestDrinkStyles.cardDecor1}></div>
                  <div className={bestDrinkStyles.cardDecor2}></div>
                </>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
