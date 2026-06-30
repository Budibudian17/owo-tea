import { responsive } from "./shared"

/**
 * Hero section styles for OWO TEA
 */

export const heroStyles = {
  section: `relative w-full ${responsive.heroHeight} overflow-hidden`,
  backgroundImage: "object-cover w-full h-full object-top",
  overlay: "absolute inset-0 bg-black/40 z-10",
  container: `relative z-20 ${responsive.containerWide} h-full flex items-center py-24 sm:py-28 lg:py-0`,
  content: responsive.splitContent,
  leftContent: responsive.splitLeft,
  subtitle:
    "text-sm sm:text-base md:text-lg lg:text-xl font-semibold text-green-300 mb-1 sm:mb-2 tracking-wider uppercase transition-all duration-300 hover:text-green-200",
  cursor: "animate-pulse",
  productName: `${responsive.headingHero} text-white mb-2 sm:mb-4 transition-all duration-300 hover:text-green-100 lg:hover:scale-105 cursor-default`,
  description:
    "text-sm sm:text-base md:text-lg text-gray-200 mb-4 sm:mb-6 leading-relaxed max-w-lg mx-auto lg:mx-0",
  fadeIn: "animate-fade-in",
  slideUp: "animate-slide-up",
  hidden: "opacity-0",
  rightContent: responsive.splitRight,
  productImage:
    "relative w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-none h-[240px] sm:h-[300px] md:h-[400px] lg:h-[600px]",
} as const

export type HeroStyles = typeof heroStyles
