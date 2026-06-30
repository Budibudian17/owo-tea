/**
 * FAQ section styles for OWO TEA
 * Similar to CTA section with text on the right
 */

export const faqStyles = {
  section: 'relative w-full h-[600px] overflow-hidden',
  backgroundImage: 'object-cover w-full h-full object-bottom',
  overlay: 'absolute inset-0 bg-black/40 z-10',
  container: 'relative z-20 max-w-7xl mx-auto px-8 h-full flex items-center',
  content: 'flex items-center justify-between w-full',
  leftContent: 'w-1/2',
  rightContent: 'flex flex-col gap-2 w-1/2',
  subtitle: 'text-lg md:text-xl font-semibold text-green-300 mb-1 tracking-wider uppercase transition-all duration-300 hover:text-green-200',
  cursor: 'animate-pulse',
  productName: 'text-5xl md:text-7xl font-bold text-white mb-2 transition-all duration-300 hover:text-green-100 hover:scale-105 cursor-default',
  description: 'text-base md:text-lg text-gray-200 mb-2 leading-relaxed max-w-lg',
  fadeIn: 'animate-fade-in',
  slideUp: 'animate-slide-up',
  hidden: 'opacity-0',
  
  // FAQ List
  faqList: 'space-y-3 mt-2',
  faqItem: 'bg-white/10 backdrop-blur-sm rounded-lg overflow-hidden transition-all duration-300',
  faqButton: 'w-full px-4 py-3 text-left flex items-center justify-between gap-4 hover:bg-white/20 transition-colors duration-300',
  faqQuestion: 'text-white font-medium flex-1',
  faqIcon: 'text-green-300 text-xl font-bold transition-transform duration-300',
  faqAnswer: 'px-4 pb-3 text-gray-200 text-sm leading-relaxed overflow-hidden transition-all duration-300 ease-in-out',
  faqAnswerOpen: 'max-h-40 opacity-100',
  faqAnswerClosed: 'max-h-0 opacity-0',
} as const;

export type FaqStyles = typeof faqStyles;
