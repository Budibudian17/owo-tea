/**
 * Marquee Footer styles for OWO TEA
 */

export const marqueeFooterStyles = {
  container: "w-full overflow-hidden bg-[#F4F1EA] py-12 sm:py-16 lg:py-20",
  marqueeWrapper: "relative",
  marqueeContent: "flex items-center gap-8 sm:gap-12 lg:gap-16 animate-marquee hover:pause",
  marqueeItem:
    'text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-400 uppercase tracking-widest whitespace-nowrap hover:text-green-600 cursor-pointer transition-colors duration-300 relative after:content-[""] after:absolute after:bottom-[-10px] after:left-0 after:w-0 after:h-1 after:bg-green-600 after:transition-all after:duration-300 after:ease-in-out hover:after:w-full',
} as const

export type MarqueeFooterStyles = typeof marqueeFooterStyles
