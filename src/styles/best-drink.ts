/**
 * Best Drink section styles for OWO TEA
 * Anti-mainstream, creative design with unique visual effects
 */

export const bestDrinkStyles = {
  section: 'relative py-16 overflow-hidden bg-[#F4F1EA]',
  backgroundPattern: 'absolute inset-0 opacity-5',
  container: 'relative z-10 max-w-7xl mx-auto px-8',
  
  // Header styles
  header: 'text-center mb-12',
  headerBadge: 'inline-block mb-3',
  badgeText: 'bg-green-600 text-white px-3 py-1 rounded-full text-xs font-semibold tracking-wide uppercase',
  title: 'text-4xl md:text-5xl font-bold text-gray-900 mb-3',
  titleAccent: 'text-green-600 relative inline-block',
  subtitle: 'text-lg text-gray-600 max-w-2xl mx-auto',
  
  // Grid layout
  grid: 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6',
  
  // Card styles
  card: 'relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl cursor-pointer group',
  featuredCard: 'ring-4 ring-green-500 shadow-2xl transform scale-105 animate-pulse-ring',
  comingSoonCard: 'opacity-70 grayscale hover:grayscale-0 hover:opacity-100',
  cardImageWrapper: 'relative h-56 overflow-hidden bg-gray-100',
  cardImage: 'relative w-full h-full',
  comingSoonOverlay: 'absolute inset-0 bg-black/60 flex items-center justify-center',
  comingSoonText: 'text-white font-bold text-xl tracking-widest uppercase',
  cardTag: 'absolute top-3 right-3 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-full',
  tagText: 'text-green-600 font-semibold text-xs uppercase tracking-wider',
  
  // Card content
  cardContent: 'p-4',
  productName: 'text-xl font-bold text-gray-900 mb-1 group-hover:text-green-600 transition-colors',
  productDescription: 'text-sm text-gray-600 mb-3 line-clamp-2',
  cardFooter: 'flex items-center justify-between',
  price: 'text-lg font-bold text-green-600',
  cardButton: 'w-8 h-8 bg-green-600 rounded-full flex items-center justify-center group-hover:bg-green-700 transition-colors',
  buttonIcon: 'text-white font-bold text-sm',
  
  // Decorative elements
  cardDecor1: 'absolute -top-8 -right-8 w-16 h-16 bg-green-200 rounded-full opacity-50 blur-xl group-hover:opacity-75 transition-opacity',
  cardDecor2: 'absolute -bottom-8 -left-8 w-12 h-12 bg-yellow-200 rounded-full opacity-50 blur-xl group-hover:opacity-75 transition-opacity',
} as const;

export type BestDrinkStyles = typeof bestDrinkStyles;
