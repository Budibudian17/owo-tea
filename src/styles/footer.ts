import { responsive } from "./shared"

/**
 * Footer styles for OWO TEA
 */

export const footerStyles = {
  section: "relative bg-gray-900 text-white py-8 sm:py-10 pt-10 sm:pt-12",
  container: responsive.container,
  grid: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 lg:gap-12",
  leftSection: "sm:col-span-2 lg:col-span-1",
  logoContainer: "relative w-40 sm:w-48 h-14 sm:h-16 mb-4 sm:mb-6",
  description: "text-gray-400 text-sm leading-relaxed mb-4 sm:mb-6",
  sectionTitle: "text-base sm:text-lg font-bold mb-4 sm:mb-6 text-white",
  linkList: "flex flex-col space-y-2 sm:space-y-3",
  link: "text-gray-400 hover:text-green-400 transition-colors duration-300 text-sm",
  contactItem: "flex items-start sm:items-center gap-3 text-gray-400 text-sm",
  contactIcon: "text-green-500 shrink-0 mt-0.5 sm:mt-0",
  socialLinks: "flex gap-3",
  socialLink:
    "w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center text-gray-400 hover:bg-green-600 hover:text-white transition-all duration-300 hover:scale-110",
  newsletter: "mt-4 sm:mt-6",
  newsletterInput:
    "w-full px-4 py-2.5 sm:py-3 bg-gray-800 border border-gray-700 rounded-lg text-white text-sm placeholder-gray-500 focus:outline-none focus:border-green-500 transition-colors",
  newsletterButton:
    "w-full mt-3 px-4 py-2.5 sm:py-3 bg-green-600 text-white font-medium text-sm rounded-lg hover:bg-green-700 transition-colors duration-300",
  bottomBar:
    "border-t border-gray-800 mt-8 sm:mt-12 pt-6 sm:pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left",
  copyright: "text-gray-500 text-xs sm:text-sm",
  bottomLinks: "flex flex-wrap justify-center gap-4 sm:gap-6",
  bottomLink:
    "text-gray-500 hover:text-green-400 transition-colors duration-300 text-xs sm:text-sm",
} as const

export type FooterStyles = typeof footerStyles
