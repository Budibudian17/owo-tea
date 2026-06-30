/**
 * Testimonial section styles for OWO TEA
 * Clean, anti-mainstream with animations
 */

export const testimonialStyles = {
  section: 'relative py-24 overflow-hidden bg-[#F4F1EA]',
  container: 'relative z-10 max-w-7xl mx-auto px-8',
  
  // Header
  header: 'text-center mb-16',
  badge: 'inline-block px-5 py-2 bg-green-600 text-white text-sm font-bold tracking-widest uppercase rounded-full mb-6 animate-fade-in',
  title: 'text-5xl md:text-6xl font-bold text-gray-900 mb-4 animate-slide-up',
  titleAccent: 'text-green-600',
  subtitle: 'text-gray-600 text-lg max-w-2xl mx-auto animate-slide-up delay-100',
  
  // Marquee container for cards
  marqueeContainer: 'w-full overflow-hidden',
  marqueeWrapper: 'relative',
  marqueeContent: 'flex gap-8 animate-marquee hover:pause',
  
  // Testimonial Card
  card: 'group relative bg-white rounded-2xl p-8 hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 min-w-[350px] md:min-w-[400px] h-[400px] flex flex-col justify-between',
  
  // Quote icon
  quoteIcon: 'text-6xl text-green-600/20 font-serif leading-none mb-4',
  
  // Content
  quote: 'text-gray-700 text-lg leading-relaxed mb-6 italic',
  author: 'flex items-center gap-4 mt-6',
  authorAvatar: 'w-14 h-14 rounded-full overflow-hidden bg-green-100 flex items-center justify-center',
  authorInitials: 'text-green-600 font-bold text-xl',
  authorInfo: 'flex-1',
  authorName: 'font-bold text-gray-900',
  authorRole: 'text-sm text-gray-500',
  
  // Rating
  rating: 'flex gap-1 mb-4',
  star: 'text-green-600',
  starEmpty: 'text-gray-300',
} as const;

export type TestimonialStyles = typeof testimonialStyles;
