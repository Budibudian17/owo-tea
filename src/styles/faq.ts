import { responsive } from "./shared"

/**
 * FAQ section styles for OWO TEA
 */

export const faqStyles = {
  section: `relative w-full ${responsive.fixedSectionHeight}`,
  backgroundImage: "object-cover w-full h-full object-bottom",
  overlay: "absolute inset-0 bg-black/40 z-10",
  container: `relative z-20 ${responsive.containerWide} h-full flex items-center`,
  content: "flex flex-col lg:flex-row items-center justify-between w-full gap-6 lg:gap-12",
  leftContent: "hidden lg:block lg:w-1/2",
  rightContent:
    "flex flex-col gap-2 w-full lg:w-1/2 text-center lg:text-left items-center lg:items-start",
  subtitle:
    "text-sm sm:text-base md:text-lg lg:text-xl font-semibold text-green-300 mb-1 tracking-wider uppercase transition-all duration-300 hover:text-green-200",
  cursor: "animate-pulse",
  productName: `${responsive.headingHero} text-white mb-1 sm:mb-2 transition-all duration-300 hover:text-green-100 lg:hover:scale-105 cursor-default`,
  description:
    "text-sm sm:text-base md:text-lg text-gray-200 mb-2 leading-relaxed max-w-lg mx-auto lg:mx-0",
  fadeIn: "animate-fade-in",
  slideUp: "animate-slide-up",
  hidden: "opacity-0",
  faqList: "space-y-2 sm:space-y-3 mt-2 w-full max-w-xl lg:max-w-none",
  faqItem:
    "bg-white/10 backdrop-blur-sm rounded-lg overflow-hidden transition-all duration-300",
  faqButton:
    "w-full px-3 sm:px-4 py-3 text-left flex items-center justify-between gap-3 sm:gap-4 hover:bg-white/20 transition-colors duration-300",
  faqQuestion: "text-white font-medium flex-1 text-sm sm:text-base",
  faqIcon: "text-green-300 text-lg sm:text-xl font-bold transition-transform duration-300 shrink-0",
  faqAnswer:
    "px-3 sm:px-4 pb-3 text-gray-200 text-xs sm:text-sm leading-relaxed overflow-hidden transition-all duration-300 ease-in-out text-left",
  faqAnswerOpen: "max-h-48 sm:max-h-40 opacity-100",
  faqAnswerClosed: "max-h-0 opacity-0",
} as const

export type FaqStyles = typeof faqStyles
