import { responsive } from "./shared"

/**
 * CTA section styles for OWO TEA
 */

export const ctaStyles = {
  section: `relative w-full ${responsive.fixedSectionHeight}`,
  backgroundImage: "object-cover w-full h-full object-bottom",
  overlay: "absolute inset-0 bg-black/40 z-10",
  container: `relative z-20 ${responsive.containerWide} h-full flex items-center`,
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
    "relative w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-none h-[220px] sm:h-[280px] md:h-[350px] lg:h-[500px]",
  lemonContainer:
    "absolute top-4 left-4 w-12 h-12 sm:w-24 sm:h-24 sm:top-8 sm:left-20 z-30",
  leaf1Container:
    "absolute -bottom-5 left-0 w-20 h-20 md:w-32 md:h-32 lg:w-48 lg:h-48 z-30",
  leaf2Container:
    "absolute -bottom-10 right-0 w-20 h-20 md:w-32 md:h-32 lg:w-48 lg:h-48 z-30",
} as const

export type CTAStyles = typeof ctaStyles
