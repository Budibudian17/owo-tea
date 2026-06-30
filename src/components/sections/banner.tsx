"use client"


import { bannerStyles } from "@/styles/banner"
import Image from "next/image"

export default function Banner() {
  const banners = [
    {
      id: 1,
      promo: "MENU FAVORIT",
      title: "Es Teh Manis",
      subtitle: "Segar dan Nikmat",
      discount: "Rp 5.000",
      image: "/images/iceteahero.webp"
    },
    {
      id: 2,
      promo: "MENU BARU",
      title: "Es Teh Lemon",
      subtitle: "Segera Hadir",
      discount: "Segera Hadir",
      image: "/images/teabackground1white.webp"
    },
    {
      id: 3,
      promo: "TERLARIS",
      title: "Milk Tea",
      subtitle: "Segera Hadir",
      discount: "Segera Hadir",
      image: "/images/teabackground2white.webp"
    }
  ]

  return (
    <section className={bannerStyles.section}>
      <div className={bannerStyles.container}>
        <div className={bannerStyles.grid}>
          {banners.map((banner) => (
            <div key={banner.id} className={bannerStyles.card}>
              {/* Background Image */}
              <div className={bannerStyles.cardBackground}>
                <Image
                  src="/images/backgroundwallpaper.webp"
                  alt="Background"
                  fill
                  className="object-cover opacity-20"
                />
              </div>
              
              {/* Wood floor effect */}
              <div className={bannerStyles.woodFloor}></div>
              
              <div className={bannerStyles.cardContent}>
                {/* Left Side - Text */}
                <div className={bannerStyles.textContent}>
                  <span className={bannerStyles.promo}>{banner.promo}</span>
                  <h3 className={bannerStyles.title}>{banner.title}</h3>
                  <p className={bannerStyles.subtitle}>{banner.subtitle}</p>
                </div>

                {/* Right Side - Product Image */}
                <div className={bannerStyles.imageContent}>
                  {/* Hand-drawn circle accent */}
                  <div className={bannerStyles.circleAccent}>
                    <svg viewBox="0 0 100 100" className="w-full h-full">
                      <path
                        d="M10,50 Q25,20 50,10 Q75,20 90,50 Q75,80 50,90 Q25,80 10,50"
                        fill="none"
                        stroke="rgba(34, 197, 94, 0.3)"
                        strokeWidth="2"
                        strokeDasharray="5,5"
                      />
                    </svg>
                  </div>
                  
                  {/* Discount badge */}
                  <div className={bannerStyles.discountBadge}>
                    {banner.discount}
                  </div>

                  {/* Floating product image */}
                  <div className={bannerStyles.productImage}>
                    <Image
                      src={banner.image}
                      alt={banner.title}
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
