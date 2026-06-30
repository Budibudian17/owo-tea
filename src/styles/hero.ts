/**
 * Hero section styles for OWO TEA
 */

export const heroStyles = {
  section: 'relative w-full h-screen overflow-hidden',
  backgroundImage: 'object-cover w-full h-full object-top',
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
  productImage: 'relative w-full h-[500px] md:h-[600px]',
} as const;

export type HeroStyles = typeof heroStyles;
