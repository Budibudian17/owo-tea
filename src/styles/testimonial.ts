import { responsive } from "./shared"

/**
 * Testimonial section styles for OWO TEA
 */

export const testimonialStyles = {
  section: `relative ${responsive.sectionPy} overflow-hidden bg-[#F4F1EA]`,
  container: `relative z-10 ${responsive.container}`,
  header: "text-center mb-10 sm:mb-12 lg:mb-16",
  badge:
    "inline-block px-4 sm:px-5 py-2 bg-green-600 text-white text-xs sm:text-sm font-bold tracking-widest uppercase rounded-full mb-4 sm:mb-6 animate-fade-in",
  title: `${responsive.headingSection} text-gray-900 mb-3 sm:mb-4 animate-slide-up`,
  titleAccent: "text-green-600",
  subtitle:
    "text-gray-600 text-base sm:text-lg max-w-2xl mx-auto px-4 animate-slide-up delay-100",
  marqueeContainer: "w-full overflow-hidden",
  marqueeWrapper: "relative",
  marqueeContent: "flex gap-4 sm:gap-8 animate-marquee hover:pause",
  card: "group relative bg-white rounded-2xl p-5 sm:p-8 hover:shadow-xl transition-all duration-500 transform lg:hover:-translate-y-2 min-w-[280px] sm:min-w-[320px] md:min-w-[400px] h-[340px] sm:h-[380px] md:h-[400px] flex flex-col justify-between",
  quoteIcon: "text-4xl sm:text-6xl text-green-600/20 font-serif leading-none mb-2 sm:mb-4",
  quote: "text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed mb-4 sm:mb-6 italic line-clamp-5 sm:line-clamp-none",
  author: "flex items-center gap-3 sm:gap-4 mt-auto",
  authorAvatar:
    "w-12 h-12 sm:w-14 sm:h-14 rounded-full overflow-hidden bg-green-100 flex items-center justify-center shrink-0",
  authorInitials: "text-green-600 font-bold text-lg sm:text-xl",
  authorInfo: "flex-1 min-w-0",
  authorName: "font-bold text-gray-900 text-sm sm:text-base truncate",
  authorRole: "text-xs sm:text-sm text-gray-500 truncate",
  rating: "flex gap-1 mb-2 sm:mb-4",
  star: "text-green-600",
  starEmpty: "text-gray-300",
} as const

export type TestimonialStyles = typeof testimonialStyles
