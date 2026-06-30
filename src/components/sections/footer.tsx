"use client"

import { footerStyles } from "@/styles/footer"
import Image from "next/image"
import { MapPin, Phone, Mail, Clock, Facebook, Instagram, Twitter, Linkedin } from "lucide-react"

export default function Footer() {
  const quickLinks = [
    { name: "Beranda", href: "#" },
    { name: "Tentang Kami", href: "#about" },
    { name: "Menu", href: "#menu" },
    { name: "FAQ", href: "#faq" },
  ]

  const supportLinks = [
    { name: "Tim Kami", href: "#team" },
    { name: "Testimoni", href: "#testimonial" },
    { name: "Kebijakan Privasi", href: "#" },
    { name: "Syarat & Ketentuan", href: "#" },
  ]

  return (
    <footer className={footerStyles.section}>
      <div className={footerStyles.container}>
        <div className={footerStyles.grid}>
          {/* Left Section - Logo & Description */}
          <div className={footerStyles.leftSection}>
            <div className={footerStyles.logoContainer}>
              <Image
                src="/images/owotealogolongs.webp"
                alt="OWO TEA Logo"
                fill
                className="object-contain"
              />
            </div>
            <p className={footerStyles.description}>
              Segelas es teh yang dibuat dengan cinta dan resep rahasia turun temurun. Hadir untuk menemani hari-harimu dengan rasa yang tak terlupakan.
            </p>
            <div className={footerStyles.socialLinks}>
              <a href="#" className={footerStyles.socialLink}>
                <Facebook size={18} />
              </a>
              <a href="#" className={footerStyles.socialLink}>
                <Instagram size={18} />
              </a>
              <a href="#" className={footerStyles.socialLink}>
                <Twitter size={18} />
              </a>
              <a href="#" className={footerStyles.socialLink}>
                <Linkedin size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className={footerStyles.sectionTitle}>Navigasi</h3>
            <div className={footerStyles.linkList}>
              {quickLinks.map((link, index) => (
                <a key={index} href={link.href} className={footerStyles.link}>
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          {/* Support Links */}
          <div>
            <h3 className={footerStyles.sectionTitle}>Bantuan</h3>
            <div className={footerStyles.linkList}>
              {supportLinks.map((link, index) => (
                <a key={index} href={link.href} className={footerStyles.link}>
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          {/* Contact & Newsletter */}
          <div>
            <h3 className={footerStyles.sectionTitle}>Hubungi Kami</h3>
            <div className="space-y-3 mb-6">
              <div className={footerStyles.contactItem}>
                <MapPin size={16} className={footerStyles.contactIcon} />
                <span>CFD Depok, Jl. Margonda Raya</span>
              </div>
              <div className={footerStyles.contactItem}>
                <Clock size={16} className={footerStyles.contactIcon} />
                <span>Minggu, 06:00 - 09:00</span>
              </div>
              <div className={footerStyles.contactItem}>
                <Phone size={16} className={footerStyles.contactIcon} />
                <span>+62 858-8011-9197</span>
              </div>
              <div className={footerStyles.contactItem}>
                <Mail size={16} className={footerStyles.contactIcon} />
                <span>owotea@gmail.com</span>
              </div>
            </div>

            {/* Newsletter */}
            <div className={footerStyles.newsletter}>
              <input
                type="email"
                placeholder="Email kamu..."
                className={footerStyles.newsletterInput}
              />
              <button className={footerStyles.newsletterButton}>
                Berlangganan
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className={footerStyles.bottomBar}>
          <p className={footerStyles.copyright}>
            © 2026 OWO TEA |  Hilmi Farrel Firajtullah
          </p>
          <div className={footerStyles.bottomLinks}>
            <a href="#" className={footerStyles.bottomLink}>Privasi</a>
            <a href="#" className={footerStyles.bottomLink}>Syarat</a>
            <a href="#" className={footerStyles.bottomLink}>Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
