import type { Metadata } from "next"
import { Plus_Jakarta_Sans } from "next/font/google"
import "./globals.css"

const plusJakarta = Plus_Jakarta_Sans({ 
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-plus-jakarta",
})

export const metadata: Metadata = {
  title: "OWO TEA - Premium Tea Shop",
  description: "Nikmati teh terbaik dengan kualitas premium dari OWO TEA",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="id" className={plusJakarta.variable}>
      <body className="font-plus-jakarta">{children}</body>
    </html>
  )
}
