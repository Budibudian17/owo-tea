"use client"

import { useState } from "react"
import { Menu, X, Search, ShoppingCart, Facebook, Twitter, Youtube, Linkedin, Clock } from "lucide-react"
import Image from "next/image"
import { navbarStyles } from "@/styles/navbar"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const menuItems = [
    { name: "Beranda", href: "#" },
    { name: "Tentang Kami", href: "#about" },
    { name: "Menu", href: "#menu" },
    { name: "FAQ", href: "#faq" },
    { name: "Tim Kami", href: "#team" },
    { name: "Testimoni", href: "#testimonial" },
  ]

  return (
    <>
      <div className={navbarStyles.container}>
        {/* Left Side - Logo Area */}
        <div className={navbarStyles.logoArea}>
          <div className={navbarStyles.logo}>
            <Image
              src="/images/owotealogolongs.webp"
              alt="OWO TEA Logo"
              fill
              style={{ objectFit: "contain" }}
            />
          </div>
        </div>

        {/* Right Side - Content */}
        <div className={navbarStyles.content}>
          {/* Top Bar */}
          <div className={navbarStyles.topBar}>
            <div className={navbarStyles.topBarContent}>
              <div className={navbarStyles.topBarInner}>
                {/* Jam Operasional */}
                <div className={navbarStyles.jam}>
                  <Clock size={16} />
                  <span>Minggu, 06:00 - 09:00 (CFD Depok)</span>
                </div>

                {/* Social Media */}
                <div className={navbarStyles.social}>
                  <span className={navbarStyles.socialLabel}>Ikuti Kami:</span>
                  <div className={navbarStyles.socialIcons}>
                    <a href="#" className={navbarStyles.socialLink}>
                      <Facebook size={18} />
                    </a>
                    <a href="#" className={navbarStyles.socialLink}>
                      <Twitter size={18} />
                    </a>
                    <a href="#" className={navbarStyles.socialLink}>
                      <Youtube size={18} />
                    </a>
                    <a href="#" className={navbarStyles.socialLink}>
                      <Linkedin size={18} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Main Navbar */}
          <nav className={navbarStyles.main}>
            <div className={navbarStyles.mainContent}>
              <div className={navbarStyles.mainInner}>
                {/* Desktop Menu */}
                <div className={navbarStyles.menu}>
                  {menuItems.map((item) => (
                    <div key={item.name} className={navbarStyles.menuItem}>
                      <a
                        href={item.href}
                        className={navbarStyles.menuLink}
                      >
                        {item.name}
                      </a>
                    </div>
                  ))}
                </div>

                {/* Right Icons */}
                <div className={navbarStyles.icons}>
                  <button className={navbarStyles.iconBtn}>
                    <Search size={22} />
                  </button>
                  {/* Mobile Menu Button */}
                  <button
                    onClick={() => setIsOpen(!isOpen)}
                    className={`${navbarStyles.iconBtn} ${navbarStyles.mobileBtn}`}
                  >
                    {isOpen ? <X size={24} /> : <Menu size={24} />}
                  </button>
                </div>
              </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
              <div className={navbarStyles.mobileMenu}>
                <div className={navbarStyles.mobileMenuInner}>
                  {menuItems.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className={navbarStyles.mobileMenuItem}
                      onClick={() => setIsOpen(false)}
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
              </div>
            )}
          </nav>
        </div>
      </div>
    </>
  )
}
