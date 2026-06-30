import { responsive } from "./shared"

/**
 * Team section styles for OWO TEA
 */

export const teamStyles = {
  section: `relative ${responsive.sectionPy} overflow-hidden bg-[#F4F1EA]`,
  container: `relative z-10 ${responsive.container}`,
  header: "text-center mb-10 sm:mb-12 lg:mb-16",
  badge:
    "inline-block px-4 sm:px-5 py-2 bg-green-600 text-white text-xs sm:text-sm font-bold tracking-widest uppercase rounded-full mb-4 sm:mb-6 animate-fade-in",
  title: `${responsive.headingSection} text-gray-900 mb-3 sm:mb-4 animate-slide-up`,
  titleAccent: "text-green-600",
  subtitle:
    "text-gray-600 text-base sm:text-lg max-w-2xl mx-auto px-4 animate-slide-up delay-100",
  grid: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8",
  card: "group relative bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 transform lg:hover:-translate-y-2 overflow-hidden",
  photoContainer: "relative w-full h-64 sm:h-72 lg:h-80 overflow-hidden",
  image:
    "w-full h-full object-cover transition-transform duration-700 lg:group-hover:scale-110",
  imageOverlay:
    "absolute inset-0 bg-black/40 opacity-100 lg:opacity-0 lg:group-hover:opacity-100 transition-opacity duration-500",
  contentOverlay:
    "absolute inset-x-0 bottom-0 top-auto lg:inset-0 lg:top-0 h-auto lg:h-full bg-gradient-to-t from-black/90 via-black/50 to-transparent lg:bg-transparent flex flex-col items-center justify-end lg:justify-center p-4 sm:p-6 opacity-100 lg:opacity-0 lg:group-hover:opacity-100 transition-opacity duration-500 delay-100",
  memberName: "text-lg sm:text-xl font-bold text-white mb-0.5 sm:mb-1 text-center",
  memberRole: "text-xs sm:text-sm text-gray-200 font-medium text-center",
  socialLinks: "flex items-center justify-center gap-2 mt-3 sm:mt-4",
  socialLink:
    "w-9 h-9 sm:w-10 sm:h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-green-600 transition-all duration-300 hover:scale-110",
} as const

export type TeamStyles = typeof teamStyles
