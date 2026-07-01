"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import Loading from "@/components/ui/loading"

export default function LoadingPage() {
  const router = useRouter()
  const [shouldRedirect, setShouldRedirect] = useState(false)

  useEffect(() => {
    // Check if user has visited within the last 24 hours
    const lastVisit = localStorage.getItem('lastVisit')
    const now = Date.now()
    const oneDay = 24 * 60 * 60 * 1000 // 24 hours in milliseconds

    if (lastVisit && (now - parseInt(lastVisit)) < oneDay) {
      // Visited within last 24 hours, redirect immediately
      setShouldRedirect(true)
    } else {
      // First visit or visited more than 24 hours ago
      // Update last visit time
      localStorage.setItem('lastVisit', now.toString())
      
      // Show loading for 3 seconds then redirect
      const timer = setTimeout(() => {
        router.push('/')
      }, 3000)

      return () => clearTimeout(timer)
    }
  }, [router])

  // Redirect if already visited recently
  if (shouldRedirect) {
    router.push('/')
    return null
  }

  return <Loading />
}
