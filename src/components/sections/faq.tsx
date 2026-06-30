"use client"

import { useState, useEffect } from "react"
import { faqStyles } from "@/styles/faq"
import Image from "next/image"

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)
  const [typingText, setTypingText] = useState("")
  const [showTitle, setShowTitle] = useState(false)
  const [showDescription, setShowDescription] = useState(false)

  const fullText = "Pertanyaan Umum"

  useEffect(() => {
    let index = 0
    const typingInterval = setInterval(() => {
      if (index < fullText.length) {
        setTypingText(fullText.slice(0, index + 1))
        index++
      } else {
        clearInterval(typingInterval)
        setShowTitle(true)
        setTimeout(() => setShowDescription(true), 500)
      }
    }, 100)

    return () => clearInterval(typingInterval)
  }, [])

  const faqs = [
    {
      question: "Apa jam operasional OWO TEA?",
      answer: "Untuk saat ini kami hanya berjualan di CFD Depok ( Minggu, 06.00 - 09.00 )"
    },
    {
      question: "Apakah ada menu non-sugar?",
      answer: "Ya, kami menyediakan opsi tanpa gula untuk semua menu teh. Cukup beritahu staff kami saat memesan."
    },
    {
      question: "Apakah bisa pesan untuk dibawa pulang?",
      answer: "Tentu saja! Kami menyediakan kemasan take-away untuk semua menu. Teh tetap segar meskipun dibawa pulang."
    },
    {
      question: "Apakah menerima pembayaran digital?",
      answer: "Ya, kami menerima berbagai metode pembayaran termasuk QRIS, e-wallet, dan transfer bank."
    }
  ]

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section id="faq" className={faqStyles.section}>
      <Image
        src="/images/backgroundsectionfaqs.webp"
        alt="FAQ Background"
        fill
        className={faqStyles.backgroundImage}
        priority
      />
      <div className={faqStyles.overlay}>
        <div className={faqStyles.container}>
          <div className={faqStyles.content}>
            {/* Left Side - Empty */}
            <div className={faqStyles.leftContent}></div>

            {/* Right Side - FAQ Content */}
            <div className={faqStyles.rightContent}>
              <h2 className={faqStyles.subtitle}>
                {typingText}
                <span className={faqStyles.cursor}>|</span>
              </h2>
              <h1 
                className={`${faqStyles.productName} ${showTitle ? faqStyles.fadeIn : faqStyles.hidden}`}
              >
                FAQ
              </h1>
              <p 
                className={`${faqStyles.description} ${showDescription ? faqStyles.slideUp : faqStyles.hidden}`}
              >
                Temukan jawaban untuk pertanyaan yang sering diajukan
              </p>

              {/* FAQ List */}
              <div className={faqStyles.faqList}>
                {faqs.map((faq, index) => (
                  <div key={index} className={faqStyles.faqItem}>
                    <button
                      className={faqStyles.faqButton}
                      onClick={() => toggleFAQ(index)}
                    >
                      <span className={faqStyles.faqQuestion}>{faq.question}</span>
                      <span className={faqStyles.faqIcon}>
                        {openIndex === index ? '−' : '+'}
                      </span>
                    </button>
                    <div 
                      className={`${faqStyles.faqAnswer} ${
                        openIndex === index ? faqStyles.faqAnswerOpen : faqStyles.faqAnswerClosed
                      }`}
                    >
                      {faq.answer}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
