"use client"

import { testimonialStyles } from "@/styles/testimonial"
import { Star } from "lucide-react"
import MenuRandomBackground from "../ui/menu-random-background"

export default function Testimonial() {
  const testimonials = [
    {
      quote: "Es teh di sini benar-benar beda! Segar, tidak terlalu manis, dan rasanya autentik. Sudah jadi langganan setiap minggu di CFD Depok.",
      author: "Budi Santoso",
      role: "Pelanggan Setia",
      rating: 5
    },
    {
      quote: "Pelayanan ramah dan tehnya selalu konsisten. Suka banget sama Es Teh Matcha-nya, unik dan tidak bikin eneg. Recommended!",
      author: "Siti Aminah",
      role: "Food Blogger",
      rating: 5
    },
    {
      quote: "Untuk harga segini, kualitas tehnya luar biasa. Bisa rasakan kualitas teh asli Indonesia di setiap tegukan. Mantap!",
      author: "Rizky Pratama",
      role: "Mahasiswa",
      rating: 5
    }
  ]

  const getInitials = (name: string) => {
    return name.split(' ').map(n => n[0]).join('').toUpperCase().slice(0, 2)
  }

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }).map((_, i) => (
      <Star
        key={i}
        size={18}
        className={i < rating ? testimonialStyles.star : testimonialStyles.starEmpty}
        fill={i < rating ? "currentColor" : "none"}
      />
    ))
  }

  return (
    <section id="testimonial" className={testimonialStyles.section}>
      <MenuRandomBackground />
      <div className={testimonialStyles.container}>
        {/* Header */}
        <div className={testimonialStyles.header}>
          <span className={testimonialStyles.badge}>TESTIMONI</span>
          <h2 className={testimonialStyles.title}>
            Apa Kata <span className={testimonialStyles.titleAccent}>Pelanggan</span>
          </h2>
          <p className={testimonialStyles.subtitle}>
            Pengalaman nyata dari pelanggan yang sudah mencicipi teh kami
          </p>
        </div>

        {/* Marquee Testimonial Cards */}
        <div className={testimonialStyles.marqueeContainer}>
          <div className={testimonialStyles.marqueeWrapper}>
            <div className={testimonialStyles.marqueeContent}>
              {testimonials.map((testimonial, index) => (
                <div key={index} className={testimonialStyles.card}>
                  {/* Quote Icon */}
                  <div className={testimonialStyles.quoteIcon}>"</div>
                  
                  {/* Rating */}
                  <div className={testimonialStyles.rating}>
                    {renderStars(testimonial.rating)}
                  </div>
                  
                  {/* Quote */}
                  <p className={testimonialStyles.quote}>
                    "{testimonial.quote}"
                  </p>
                  
                  {/* Author */}
                  <div className={testimonialStyles.author}>
                    <div className={testimonialStyles.authorAvatar}>
                      <span className={testimonialStyles.authorInitials}>
                        {getInitials(testimonial.author)}
                      </span>
                    </div>
                    <div className={testimonialStyles.authorInfo}>
                      <div className={testimonialStyles.authorName}>{testimonial.author}</div>
                      <div className={testimonialStyles.authorRole}>{testimonial.role}</div>
                    </div>
                  </div>
                </div>
              ))}
              {/* Duplicate for seamless loop */}
              {testimonials.map((testimonial, index) => (
                <div key={`dup-${index}`} className={testimonialStyles.card}>
                  {/* Quote Icon */}
                  <div className={testimonialStyles.quoteIcon}>"</div>
                  
                  {/* Rating */}
                  <div className={testimonialStyles.rating}>
                    {renderStars(testimonial.rating)}
                  </div>
                  
                  {/* Quote */}
                  <p className={testimonialStyles.quote}>
                    "{testimonial.quote}"
                  </p>
                  
                  {/* Author */}
                  <div className={testimonialStyles.author}>
                    <div className={testimonialStyles.authorAvatar}>
                      <span className={testimonialStyles.authorInitials}>
                        {getInitials(testimonial.author)}
                      </span>
                    </div>
                    <div className={testimonialStyles.authorInfo}>
                      <div className={testimonialStyles.authorName}>{testimonial.author}</div>
                      <div className={testimonialStyles.authorRole}>{testimonial.role}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
