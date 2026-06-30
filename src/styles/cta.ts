/**
 * CTA section styles for OWO TEA
 * Similar to Hero but with fixed height
 */

export const ctaStyles = {
  section: 'relative w-full h-[600px] overflow-hidden',
  backgroundImage: 'object-cover w-full h-full object-bottom',
  overlay: 'absolute inset-0 bg-black/40 z-10',
  container: 'relative z-20 max-w-7xl mx-auto px-8 h-full flex items-center',
  content: 'flex items-center justify-between w-full',
  leftContent: 'flex flex-col gap-6 w-1/2',
  subtitle: 'text-lg md:text-xl font-semibold text-green-300 mb-2 tracking-wider uppercase transition-all duration-300 hover:text-green-200',
  cursor: 'animate-pulse',
  productName: 'text-5xl md:text-7xl font-bold text-white mb-4 transition-all duration-300 hover:text-green-100 hover:scale-105 cursor-default',
  description: 'text-base md:text-lg text-gray-200 mb-6 leading-relaxed max-w-lg',
  fadeIn: 'animate-fade-in',
  slideUp: 'animate-slide-up',
  hidden: 'opacity-0',
  rightContent: 'w-1/2 flex justify-center',
  productImage: 'relative w-full h-[400px] md:h-[500px]',
  lemonContainer: 'absolute top-8 left-20 w-24 h-24 z-30',
  leaf1Container: 'absolute -bottom-10 left-0 w-48 h-48 z-30',
  leaf2Container: 'absolute -bottom-20 right-0 w-48 h-48 z-30',
} as const;

export type CTAStyles = typeof ctaStyles;
