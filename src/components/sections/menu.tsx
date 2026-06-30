"use client"

import { menuStyles } from "@/styles/menu"
import Image from "next/image"
import MenuRandomBackground from "@/components/ui/menu-random-background"

export default function Menu() {
  const menuItems = [
    {
      id: 1,
      name: "Es Teh Manis Original",
      description: "Teh manis klasik dengan es",
      price: "Rp 5.000",
      image: "/images/iceteaproduct.webp",
      isComingSoon: false
    },
    {
      id: 2,
      name: "Es Teh Lemon",
      description: "Teh lemon yang menyegarkan",
      price: "Rp 8.000",
      image: "/images/teabackground1.webp",
      isComingSoon: true
    },
    {
      id: 3,
      name: "Es Teh Susu",
      description: "Teh manis dengan susu krim",
      price: "Rp 7.000",
      image: "/images/teabackground2.webp",
      isComingSoon: true
    },
    {
      id: 4,
      name: "Es Teh Jahe",
      description: "Teh jahe hangat dengan es",
      price: "Rp 9.000",
      image: "/images/iceteahero.webp",
      isComingSoon: true
    },
    {
      id: 5,
      name: "Es Teh Melati",
      description: "Teh manis dengan aroma melati",
      price: "Rp 6.000",
      image: "/images/icetea2.webp",
      isComingSoon: true
    },
    {
      id: 6,
      name: "Es Teh Matcha",
      description: "Campuran teh hijau Jepang",
      price: "Rp 10.000",
      image: "/images/iceteaalot.webp",
      isComingSoon: true
    },
    {
      id: 7,
      name: "Es Teh Tarik",
      description: "Spesial teh tarik susu",
      price: "Rp 8.000",
      image: "/images/teabackground1white.webp",
      isComingSoon: true
    },
    {
      id: 8,
      name: "Es Teh Thai",
      description: "Teh susu gaya Thailand",
      price: "Rp 9.000",
      image: "/images/teabackground2white.webp",
      isComingSoon: true
    },
    {
      id: 9,
      name: "Es Teh Leci",
      description: "Teh manis leci",
      price: "Rp 7.000",
      image: "/images/iceteahero.webp",
      isComingSoon: true
    },
    {
      id: 10,
      name: "Es Teh Premium",
      description: "Campuran teh premium",
      price: "Rp 12.000",
      image: "/images/iceteaproduct.webp",
      isComingSoon: true
    }
  ]

  return (
    <section id="menu" className={menuStyles.section}>
      <MenuRandomBackground />
      <div className={menuStyles.container}>
        {/* Main Card */}
        <div className={menuStyles.card}>
          {/* Header */}
          <div className={menuStyles.header}>
            <div className={menuStyles.headerSubtitle}>
              <span className={menuStyles.decorator}>✦</span>
              <span className={menuStyles.subtitleText}>MENU KAMI</span>
              <span className={menuStyles.decorator}>✦</span>
            </div>
            <h2 className={menuStyles.title}>
              Menu <span className={menuStyles.titleAccent}>Teh</span> Spesial
            </h2>
          </div>

          {/* Menu Grid */}
          <div className={menuStyles.grid}>
            {menuItems.map((item) => (
              <div key={item.id} className={menuStyles.menuItem}>
                <div className={menuStyles.itemImage}>
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className={menuStyles.itemContent}>
                  <h3 className={menuStyles.itemName}>{item.name}</h3>
                  <p className={menuStyles.itemDescription}>{item.description}</p>
                </div>
                {item.isComingSoon ? (
                  <span className={menuStyles.comingSoonBadge}>Segera Hadir</span>
                ) : (
                  <span className={menuStyles.itemPrice}>{item.price}</span>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
