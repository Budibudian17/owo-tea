import { responsive } from "./shared"

/**
 * Banner section styles for OWO TEA
 */

export const bannerStyles = {
  section: `relative ${responsive.sectionPySm} overflow-hidden bg-[#F4F1EA]`,
  container: `relative z-10 w-full ${responsive.container}`,
  grid: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6",
  card: "relative bg-gradient-to-br from-gray-800 to-gray-900 overflow-hidden shadow-2xl group hover:shadow-green-500/20 transition-all duration-300 rounded-xl lg:rounded-none",
  cardBackground: "absolute inset-0 z-0",
  woodFloor:
    "absolute bottom-0 left-0 right-0 h-12 sm:h-16 bg-gradient-to-t from-amber-900/40 to-transparent",
  cardContent:
    "relative z-10 flex flex-row items-center justify-between p-4 sm:p-6 h-full min-h-[140px] sm:min-h-[200px] gap-4 sm:gap-8",
  textContent: "flex flex-col gap-2 sm:gap-3 flex-1 text-left w-full sm:w-auto",
  promo: "text-green-400 text-xs font-bold tracking-widest uppercase",
  title: "text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-white whitespace-nowrap overflow-hidden text-ellipsis",
  subtitle: "text-gray-400 text-xs sm:text-sm",
  ctaButton:
    "mt-2 bg-green-600 hover:bg-green-500 text-white px-5 py-2.5 rounded-lg font-semibold flex items-center gap-2 transition-all duration-300 hover:scale-105",
  arrowIcon: "text-white font-bold",
  imageContent:
    "relative flex-1 flex justify-center items-center h-20 sm:h-32 md:h-40 w-24 sm:w-auto",
  circleAccent: "absolute w-16 h-16 sm:w-28 sm:h-28 md:w-36 md:h-36 animate-pulse",
  discountBadge:
    "absolute top-0 right-0 sm:right-4 bg-green-600 text-white text-xs font-bold px-2 sm:px-3 py-1 sm:py-1.5 rounded-full shadow-lg z-30",
  productImage: "relative w-24 h-24 sm:w-24 sm:h-24 md:w-32 md:h-32",
} as const

export type BannerStyles = typeof bannerStyles
