/**
 * Menu section styles for OWO TEA
 * Card-based layout with category tabs
 */

export const menuStyles = {
  section: 'relative py-20 overflow-hidden bg-[#F4F1EA]',
  container: 'relative z-10 max-w-6xl mx-auto px-8',
  
  // Main Card
  card: 'bg-white rounded-3xl shadow-lg p-8 md:p-12',
  
  // Header
  header: 'text-center mb-8',
  headerSubtitle: 'flex items-center justify-center gap-4 mb-4',
  decorator: 'text-green-600 text-xl',
  subtitleText: 'text-sm font-bold tracking-widest uppercase text-green-600',
  title: 'text-4xl md:text-5xl font-bold text-gray-900',
  titleAccent: 'text-green-600',
  
  // Tabs
  tabsContainer: 'mb-8',
  tabs: 'flex items-center justify-center gap-4 md:gap-8 flex-wrap',
  tab: 'flex items-center gap-2 px-6 py-3 text-gray-600 font-medium transition-all duration-300 hover:text-green-600',
  tabActive: 'text-green-600',
  tabIcon: 'w-5 h-5',
  tabText: 'text-sm md:text-base',
  tabsDivider: 'w-full h-px bg-gray-200 mt-6',
  
  // Grid
  grid: 'grid grid-cols-1 md:grid-cols-2 gap-4',
  
  // Menu Item
  menuItem: 'flex items-center gap-4 p-4 transition-all duration-300',
  itemImage: 'relative w-20 h-20 flex-shrink-0 rounded-full overflow-hidden shadow-md',
  itemContent: 'flex-1',
  itemName: 'text-lg font-bold text-gray-900 mb-1 hover:text-green-600 transition-colors duration-300 cursor-pointer',
  itemDescription: 'text-sm text-gray-500',
  itemPrice: 'text-lg font-bold text-green-600 ml-auto',
  comingSoonBadge: 'text-sm font-bold text-gray-400 ml-auto',
} as const;

export type MenuStyles = typeof menuStyles;
