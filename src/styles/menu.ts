import { responsive } from "./shared"

/**
 * Menu section styles for OWO TEA
 */

export const menuStyles = {
  section: `relative ${responsive.sectionPySm} overflow-hidden bg-[#F4F1EA]`,
  container: `relative z-10 ${responsive.containerMenu}`,
  card: "bg-white rounded-2xl sm:rounded-3xl shadow-lg p-5 sm:p-8 md:p-12",
  header: "text-center mb-6 sm:mb-8",
  headerSubtitle: "flex items-center justify-center gap-3 sm:gap-4 mb-3 sm:mb-4",
  decorator: "text-green-600 text-lg sm:text-xl",
  subtitleText: "text-xs sm:text-sm font-bold tracking-widest uppercase text-green-600",
  title: `${responsive.headingSection} text-gray-900`,
  titleAccent: "text-green-600",
  tabsContainer: "mb-8",
  tabs: "flex items-center justify-center gap-4 md:gap-8 flex-wrap",
  tab: "flex items-center gap-2 px-6 py-3 text-gray-600 font-medium transition-all duration-300 hover:text-green-600",
  tabActive: "text-green-600",
  tabIcon: "w-5 h-5",
  tabText: "text-sm md:text-base",
  tabsDivider: "w-full h-px bg-gray-200 mt-6",
  grid: "grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4",
  menuItem:
    "flex flex-wrap sm:flex-nowrap items-center gap-3 sm:gap-4 p-3 sm:p-4 transition-all duration-300 rounded-xl hover:bg-gray-50",
  itemImage:
    "relative w-16 h-16 sm:w-20 sm:h-20 flex-shrink-0 rounded-full overflow-hidden shadow-md",
  itemContent: "flex-1 min-w-[140px]",
  itemName:
    "text-base sm:text-lg font-bold text-gray-900 mb-0.5 sm:mb-1 hover:text-green-600 transition-colors duration-300 cursor-pointer",
  itemDescription: "text-xs sm:text-sm text-gray-500",
  itemPrice: "text-base sm:text-lg font-bold text-green-600 ml-auto shrink-0",
  comingSoonBadge: "text-xs sm:text-sm font-bold text-gray-400 ml-auto shrink-0",
} as const

export type MenuStyles = typeof menuStyles
