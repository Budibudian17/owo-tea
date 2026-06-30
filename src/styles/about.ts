import { responsive } from "./shared"

/**
 * About Us section styles for OWO TEA
 */

export const aboutStyles = {
  section: `relative ${responsive.sectionPy} overflow-hidden bg-white`,
  diagonalOverlay:
    "absolute inset-0 bg-gradient-to-br from-green-50 via-transparent to-amber-50 transform -skew-y-3 origin-top-left scale-110",
  container: `relative z-10 ${responsive.container}`,
  content: "grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center",
  storySection: "space-y-6 sm:space-y-8 order-2 lg:order-none",
  yearBadge:
    "inline-block bg-green-600 text-white px-4 sm:px-6 py-2 text-xs sm:text-sm font-bold tracking-widest uppercase mb-2 sm:mb-4",
  title: `${responsive.headingSection} text-gray-900 leading-tight`,
  titleHighlight: "text-green-600 relative",
  storyText: "space-y-3 sm:space-y-4 text-gray-600 text-base sm:text-lg leading-relaxed",
  paragraph: "text-justify",
  stats:
    "flex flex-wrap items-center justify-center sm:justify-start gap-6 sm:gap-8 pt-6 sm:pt-8 border-t-2 border-gray-200",
  statItem: "text-center min-w-[80px]",
  statNumber: "block text-3xl sm:text-4xl font-bold text-green-600",
  statLabel: "text-xs sm:text-sm text-gray-500 uppercase tracking-wide",
  statDivider: "hidden sm:block w-px h-12 bg-gray-300",
  visualSection: "relative order-1 lg:order-none",
  imageContainer:
    "relative h-[320px] sm:h-[380px] md:h-[420px] lg:h-[500px] mx-auto max-w-md lg:max-w-none",
  imageFrame1:
    "absolute top-0 left-0 w-[72%] h-[62%] lg:top-[-50px] lg:left-[-50px] lg:w-4/5 lg:h-5/6",
  imageFrame2:
    "absolute bottom-0 right-0 w-[58%] h-[58%] lg:w-3/5 lg:h-3/4",
  floatingElement:
    "absolute top-8 sm:top-20 right-2 sm:right-10 bg-green-600 text-white px-3 sm:px-4 py-1.5 sm:py-2 font-bold text-xs sm:text-sm transform -rotate-12 shadow-lg",
  floatingElement2:
    "absolute bottom-12 sm:bottom-20 left-2 sm:left-10 bg-amber-600 text-white px-3 sm:px-4 py-1.5 sm:py-2 font-bold text-xs sm:text-sm transform rotate-12 shadow-lg",
  floatingText: "uppercase tracking-widest",
} as const

export type AboutStyles = typeof aboutStyles
