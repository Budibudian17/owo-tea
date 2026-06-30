"use client"

import { teamStyles } from "@/styles/team"
import Image from "next/image"
import { Facebook, Instagram, Twitter, Linkedin } from "lucide-react"

export default function Team() {
  const teamMembers = [
    {
      name: "Hilmi Farrel Firjatullah",
      role: "Founder",
      image: "/images/hilmifarrel.webp"
    },
    {
      name: "Raffi Raditya",
      role: "Co - Founder",
      image: "/images/raffi.webp"
    },
    {
      name: "Arhab Rizki Sabian",
      role: "Marketing",
      image: "/images/arhab.webp"
    },
    {
      name: "Adzan Arshall Fiqra",
      role: "Operations & Finance",
      image: "/images/adzan.webp"
    }
  ]

  return (
    <section id="team" className={teamStyles.section}>
      <div className={teamStyles.container}>
        {/* Header */}
        <div className={teamStyles.header}>
          <span className={teamStyles.badge}>TIM KAMI</span>
          <h2 className={teamStyles.title}>
            Bertemu dengan <span className={teamStyles.titleAccent}>Para Ahli</span>
          </h2>
          <p className={teamStyles.subtitle}>
            Orang-orang berbakat di balik setiap cangkir teh lezat yang kami sajikan
          </p>
        </div>

        {/* Team Grid */}
        <div className={teamStyles.grid}>
          {teamMembers.map((member, index) => (
            <div key={index} className={teamStyles.card}>
              {/* Full-width Photo */}
              <div className={teamStyles.photoContainer}>
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className={teamStyles.image}
                />
                {/* Black Overlay on Hover */}
                <div className={teamStyles.imageOverlay} />
                
                {/* Content Overlay (appears on hover) */}
                <div className={teamStyles.contentOverlay}>
                  <h3 className={teamStyles.memberName}>{member.name}</h3>
                  <p className={teamStyles.memberRole}>{member.role}</p>
                  
                  {/* Social Links */}
                  <div className={teamStyles.socialLinks}>
                    <a href="#" className={teamStyles.socialLink}>
                      <Facebook size={18} />
                    </a>
                    <a href="#" className={teamStyles.socialLink}>
                      <Instagram size={18} />
                    </a>
                    <a href="#" className={teamStyles.socialLink}>
                      <Twitter size={18} />
                    </a>
                    <a href="#" className={teamStyles.socialLink}>
                      <Linkedin size={18} />
                    </a>
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
