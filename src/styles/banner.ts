/**
 * Banner section styles for OWO TEA
 * 3-column grid layout with dark textured background and wood floor effect
 */

export const bannerStyles = {
  section: 'relative py-16 overflow-hidden bg-[#F4F1EA]',
  container: 'relative z-10 w-full px-8',
  grid: 'grid grid-cols-1 lg:grid-cols-3 gap-6',
  
  // Card styles
  card: 'relative bg-gradient-to-br from-gray-800 to-gray-900 overflow-hidden shadow-2xl group hover:shadow-green-500/20 transition-all duration-300',
  cardBackground: 'absolute inset-0 z-0',
  woodFloor: 'absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-amber-900/40 to-transparent',
  
  // Card content layout
  cardContent: 'relative z-10 flex flex-row items-center justify-between p-6 h-full min-h-[200px]',
  
  // Left side - text content
  textContent: 'flex flex-col gap-3 flex-1',
  promo: 'text-green-400 text-xs font-bold tracking-widest uppercase',
  title: 'text-2xl md:text-3xl font-bold text-white',
  subtitle: 'text-gray-400 text-sm',
  ctaButton: 'mt-2 bg-green-600 hover:bg-green-500 text-white px-5 py-2.5 rounded-lg font-semibold flex items-center gap-2 transition-all duration-300 hover:scale-105',
  arrowIcon: 'text-white font-bold',
  
  // Right side - image content
  imageContent: 'relative flex-1 flex justify-center items-center h-32 md:h-40',
  circleAccent: 'absolute w-28 h-28 md:w-36 md:h-36 animate-pulse',
  discountBadge: 'absolute top-0 right-0 bg-green-600 text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-lg',
  productImage: 'relative w-24 h-24 md:w-32 md:h-32',
} as const;

export type BannerStyles = typeof bannerStyles;
