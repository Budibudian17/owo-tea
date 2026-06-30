"use client"

import { useState } from "react"
import { bestDrinkStyles } from "@/styles/best-drink"
import Image from "next/image"
import RandomBackground from "@/components/ui/random-background"
import { useIsDesktop } from "@/hooks/use-media-query"

export default function BestDrink() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null)
  const isDesktop = useIsDesktop()

  const products = [
    {
      id: 1,
      name: "Segera Hadir",
      description: "Minuman lezat lain segera hadir",
      price: "",
      image: "/images/teabackground1.webp",
      tag: "Segera",
      isComingSoon: true,
    },
    {
      id: 2,
      name: "Es Teh Manis",
      description: "Teh manis klasik dengan es, segar dan abadi",
      price: "Rp 5.000",
      image: "/images/iceteaproduct.webp",
      tag: "Terlaris",
      isFeatured: true,
    },
    {
      id: 3,
      name: "Segera Hadir",
      description: "Minuman lezat lain segera hadir",
      price: "",
      image: "/images/teabackground2.webp",
      tag: "Segera",
      isComingSoon: true,
    },
  ]

  const getCardTransform = (product: (typeof products)[0]) => {
    if (!isDesktop) return undefined

    if (hoveredCard === product.id) {
      return `translateY(-20px) scale(${product.isFeatured ? "1.08" : "1.02"})`
    }
    if (hoveredCard !== null) {
      return "translateY(10px) scale(0.98)"
    }
    return undefined
  }

  return (
    <section className={bestDrinkStyles.section}>
      <RandomBackground />

      <div className={bestDrinkStyles.container}>
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

        <div className={bestDrinkStyles.grid}>
          {products.map((product) => (
            <div
              key={product.id}
              className={`${bestDrinkStyles.card} ${product.isFeatured ? bestDrinkStyles.featuredCard : ""} ${product.isComingSoon ? bestDrinkStyles.comingSoonCard : ""}`}
              style={{
                transform: getCardTransform(product),
                transition:
                  "transform 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)",
              }}
              onMouseEnter={() => isDesktop && setHoveredCard(product.id)}
              onMouseLeave={() => isDesktop && setHoveredCard(null)}
            >
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
                      <span className={bestDrinkStyles.comingSoonText}>
                        Segera Hadir
                      </span>
                    </div>
                  )}
                  {!product.isComingSoon && (
                    <div className={bestDrinkStyles.cardTag}>
                      <span className={bestDrinkStyles.tagText}>
                        {product.tag}
                      </span>
                    </div>
                  )}
                </div>
              </div>

              <div className={bestDrinkStyles.cardContent}>
                <h3 className={bestDrinkStyles.productName}>{product.name}</h3>
                <p className={bestDrinkStyles.productDescription}>
                  {product.description}
                </p>
                {!product.isComingSoon && (
                  <div className={bestDrinkStyles.cardFooter}>
                    <span className={bestDrinkStyles.price}>
                      {product.price}
                    </span>
                    <div className={bestDrinkStyles.cardButton}>
                      <span className={bestDrinkStyles.buttonIcon}>→</span>
                    </div>
                  </div>
                )}
              </div>

              {!product.isComingSoon && (
                <>
                  <div className={bestDrinkStyles.cardDecor1} />
                  <div className={bestDrinkStyles.cardDecor2} />
                </>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
