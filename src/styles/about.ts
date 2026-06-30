/**
 * About Us section styles for OWO TEA
 * Anti-mainstream design with diagonal overlay and floating elements
 */

export const aboutStyles = {
  section: 'relative py-24 overflow-hidden bg-white',
  diagonalOverlay: 'absolute inset-0 bg-gradient-to-br from-green-50 via-transparent to-amber-50 transform -skew-y-3 origin-top-left scale-110',
  container: 'relative z-10 max-w-7xl mx-auto px-8',
  content: 'grid grid-cols-1 lg:grid-cols-2 gap-16 items-center',
  
  // Story section
  storySection: 'space-y-8',
  yearBadge: 'inline-block bg-green-600 text-white px-6 py-2 text-sm font-bold tracking-widest uppercase mb-4',
  title: 'text-5xl md:text-6xl font-bold text-gray-900 leading-tight',
  titleHighlight: 'text-green-600 relative',
  storyText: 'space-y-4 text-gray-600 text-lg leading-relaxed',
  paragraph: 'text-justify',
  
  // Stats
  stats: 'flex items-center gap-8 pt-8 border-t-2 border-gray-200',
  statItem: 'text-center',
  statNumber: 'block text-4xl font-bold text-green-600',
  statLabel: 'text-sm text-gray-500 uppercase tracking-wide',
  statDivider: 'w-px h-12 bg-gray-300',
  
  // Visual section
  visualSection: 'relative',
  imageContainer: 'relative h-[500px]',
  imageFrame1: 'absolute top-[-50px] left-[-50px] w-4/5 h-5/6',
  imageFrame2: 'absolute bottom-0 right-0 w-3/5 h-3/4',
  floatingElement: 'absolute top-20 right-10 bg-green-600 text-white px-4 py-2 font-bold text-sm transform -rotate-12 shadow-lg',
  floatingElement2: 'absolute bottom-20 left-10 bg-amber-600 text-white px-4 py-2 font-bold text-sm transform rotate-12 shadow-lg',
  floatingText: 'uppercase tracking-widest',
} as const;

export type AboutStyles = typeof aboutStyles;
