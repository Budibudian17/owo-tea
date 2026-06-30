import { responsive } from "./shared"

/**
 * Best Drink section styles for OWO TEA
 */

export const bestDrinkStyles = {
  section: `relative ${responsive.sectionPySm} overflow-hidden bg-[#F4F1EA]`,
  container: `relative z-10 ${responsive.container}`,
  header: "text-center mb-8 sm:mb-10 lg:mb-12",
  headerBadge: "inline-block mb-3",
  badgeText:
    "bg-green-600 text-white px-3 py-1 rounded-full text-xs font-semibold tracking-wide uppercase",
  title: `${responsive.headingSection} text-gray-900 mb-2 sm:mb-3`,
  titleAccent: "text-green-600 relative inline-block",
  subtitle: "text-base sm:text-lg text-gray-600 max-w-2xl mx-auto px-2",
  grid: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6",
  card: "relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl cursor-pointer group",
  featuredCard:
    "ring-2 sm:ring-4 ring-green-500 shadow-xl lg:shadow-2xl lg:-translate-y-2.5 lg:scale-105 lg:animate-pulse-ring",
  comingSoonCard: "opacity-70 grayscale hover:grayscale-0 hover:opacity-100",
  cardImageWrapper: "relative h-44 sm:h-52 lg:h-56 overflow-hidden bg-gray-100",
  cardImage: "relative w-full h-full",
  comingSoonOverlay: "absolute inset-0 bg-black/60 flex items-center justify-center",
  comingSoonText: "text-white font-bold text-base sm:text-xl tracking-widest uppercase",
  cardTag:
    "absolute top-3 right-3 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-full",
  tagText: "text-green-600 font-semibold text-xs uppercase tracking-wider",
  cardContent: "p-4",
  productName:
    "text-lg sm:text-xl font-bold text-gray-900 mb-1 group-hover:text-green-600 transition-colors",
  productDescription: "text-sm text-gray-600 mb-3 line-clamp-2",
  cardFooter: "flex items-center justify-between",
  price: "text-base sm:text-lg font-bold text-green-600",
  cardButton:
    "w-8 h-8 bg-green-600 rounded-full flex items-center justify-center group-hover:bg-green-700 transition-colors",
  buttonIcon: "text-white font-bold text-sm",
  cardDecor1:
    "hidden sm:block absolute -top-8 -right-8 w-16 h-16 bg-green-200 rounded-full opacity-50 blur-xl group-hover:opacity-75 transition-opacity",
  cardDecor2:
    "hidden sm:block absolute -bottom-8 -left-8 w-12 h-12 bg-yellow-200 rounded-full opacity-50 blur-xl group-hover:opacity-75 transition-opacity",
} as const

export type BestDrinkStyles = typeof bestDrinkStyles
