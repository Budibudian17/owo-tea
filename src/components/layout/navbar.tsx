"use client"

import { useState, useEffect, useRef, useCallback } from "react"
import { createPortal } from "react-dom"
import {
  Menu,
  X,
  Search,
  Facebook,
  Twitter,
  Youtube,
  Linkedin,
  Clock,
} from "lucide-react"
import Image from "next/image"
import { navbarStyles } from "@/styles/navbar"

const menuItems = [
  { name: "Beranda", href: "#" },
  { name: "Tentang Kami", href: "#about" },
  { name: "Menu", href: "#menu" },
  { name: "FAQ", href: "#faq" },
  { name: "Tim Kami", href: "#team" },
  { name: "Testimoni", href: "#testimonial" },
]

function TopBarContent() {
  return (
    <div className={navbarStyles.topBarContent}>
      <div className={navbarStyles.topBarInner}>
        <div className={navbarStyles.jam}>
          <Clock size={16} className="shrink-0" />
          <span className={navbarStyles.jamText}>
            Minggu, 06:00 - 09:00 (CFD Depok)
          </span>
        </div>

        <div className={navbarStyles.social}>
          <span className={navbarStyles.socialLabel}>Ikuti Kami:</span>
          <div className={navbarStyles.socialIcons}>
            <a href="#" className={navbarStyles.socialLink} aria-label="Facebook">
              <Facebook size={18} />
            </a>
            <a href="#" className={navbarStyles.socialLink} aria-label="Twitter">
              <Twitter size={18} />
            </a>
            <a href="#" className={navbarStyles.socialLink} aria-label="Youtube">
              <Youtube size={18} />
            </a>
            <a href="#" className={navbarStyles.socialLink} aria-label="LinkedIn">
              <Linkedin size={18} />
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

type NavBarProps = {
  isOpen: boolean
  onToggle: () => void
  onClose: () => void
}

function NavBarInner({ isOpen, onToggle, onClose }: NavBarProps) {
  return (
    <>
      <div className={navbarStyles.mainContent}>
        <div className={navbarStyles.mainInner}>
          <div className={navbarStyles.menu}>
            {menuItems.map((item) => (
              <div key={item.name} className={navbarStyles.menuItem}>
                <a href={item.href} className={navbarStyles.menuLink}>
                  {item.name}
                </a>
              </div>
            ))}
          </div>

          <div className={navbarStyles.icons}>
            <button className={navbarStyles.iconBtn} aria-label="Cari">
              <Search size={22} />
            </button>
            <button
              onClick={onToggle}
              className={`${navbarStyles.iconBtn} ${navbarStyles.mobileBtn}`}
              aria-label={isOpen ? "Tutup menu" : "Buka menu"}
              aria-expanded={isOpen}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className={navbarStyles.mobileMenu}>
          <div className={navbarStyles.mobileMenuInner}>
            <div className={navbarStyles.mobileInfo}>
              <Clock size={14} className="shrink-0" />
              <span>Minggu, 06:00 - 09:00 · CFD Depok</span>
            </div>
            {menuItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className={navbarStyles.mobileMenuItem}
                onClick={onClose}
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </>
  )
}

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [mounted, setMounted] = useState(false)
  const [headerHeight, setHeaderHeight] = useState(0)
  const [scrollY, setScrollY] = useState(0)
  const headerRef = useRef<HTMLElement>(null)

  const updateMetrics = useCallback(() => {
    setHeaderHeight(headerRef.current?.offsetHeight ?? 0)
    setScrollY(window.scrollY || document.documentElement.scrollTop)
  }, [])

  useEffect(() => {
    setMounted(true)
    updateMetrics()

    window.addEventListener("scroll", updateMetrics, { passive: true })
    window.addEventListener("resize", updateMetrics, { passive: true })

    return () => {
      window.removeEventListener("scroll", updateMetrics)
      window.removeEventListener("resize", updateMetrics)
    }
  }, [updateMetrics])

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : ""
    return () => {
      document.body.style.overflow = ""
    }
  }, [isOpen])

  const closeMenu = () => setIsOpen(false)
  const toggleMenu = () => setIsOpen((prev) => !prev)

  const navTop = Math.max(0, headerHeight - scrollY)

  return (
    <>
      <header ref={headerRef} className={navbarStyles.container}>
        <div className={navbarStyles.logoArea}>
          <div className={navbarStyles.logo}>
            <Image
              src="/images/owotealogolongs.webp"
              alt="OWO TEA Logo"
              fill
              style={{ objectFit: "contain" }}
              priority
            />
          </div>
        </div>

        <div className={navbarStyles.topBarTablet}>
          <TopBarContent />
        </div>

        <div className={navbarStyles.content}>
          <div className={navbarStyles.topBar}>
            <TopBarContent />
          </div>

          <nav className={navbarStyles.mainDesktop}>
            <NavBarInner
              isOpen={false}
              onToggle={toggleMenu}
              onClose={closeMenu}
            />
          </nav>
        </div>
      </header>

      {/* Reserve space in document flow so content doesn't jump */}
      <div className={navbarStyles.navSpacer} aria-hidden="true" />

      {mounted &&
        createPortal(
          <>
            <nav
              className={navbarStyles.mainMobile}
              style={{
                position: "fixed",
                top: navTop,
                left: 0,
                right: 0,
                zIndex: 9999,
              }}
            >
              <NavBarInner
                isOpen={isOpen}
                onToggle={toggleMenu}
                onClose={closeMenu}
              />
            </nav>

            {isOpen && (
              <div
                className={navbarStyles.mobileBackdrop}
                onClick={closeMenu}
                aria-hidden="true"
                style={{ zIndex: 9998 }}
              />
            )}
          </>,
          document.body
        )}
    </>
  )
}
