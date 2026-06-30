/**
 * Team section styles for OWO TEA
 * Clean, anti-mainstream with full-width photo cards
 */

export const teamStyles = {
  section: 'relative py-24 overflow-hidden bg-[#F4F1EA]',
  container: 'relative z-10 max-w-7xl mx-auto px-8',
  
  // Header
  header: 'text-center mb-16',
  badge: 'inline-block px-5 py-2 bg-green-600 text-white text-sm font-bold tracking-widest uppercase rounded-full mb-6 animate-fade-in',
  title: 'text-5xl md:text-6xl font-bold text-gray-900 mb-4 animate-slide-up',
  titleAccent: 'text-green-600',
  subtitle: 'text-gray-600 text-lg max-w-2xl mx-auto animate-slide-up delay-100',
  
  // Grid
  grid: 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8',
  
  // Team Card
  card: 'group relative bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 overflow-hidden',
  
  // Full-width photo container
  photoContainer: 'relative w-full h-80 overflow-hidden',
  image: 'w-full h-full object-cover transition-transform duration-700 group-hover:scale-110',
  imageOverlay: 'absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500',
  
  // Content overlay (appears on hover)
  contentOverlay: 'absolute inset-0 flex flex-col items-center justify-center p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100',
  
  // Typography
  memberName: 'text-xl font-bold text-white mb-1',
  memberRole: 'text-sm text-gray-200 font-medium',
  
  // Social links
  socialLinks: 'flex items-center justify-center gap-2 mt-4',
  socialLink: 'w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-green-600 transition-all duration-300 hover:scale-110',
} as const;

export type TeamStyles = typeof teamStyles;
