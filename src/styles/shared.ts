/**
 * Shared responsive utilities for OWO TEA
 * Mobile-first: base → sm (640px) → md (768px) → lg (1024px) → xl (1280px)
 */

export const responsive = {
  container: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
  containerWide: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12",
  containerMenu: "max-w-6xl mx-auto px-4 sm:px-6 lg:px-8",

  sectionPy: "py-12 md:py-16 lg:py-24",
  sectionPySm: "py-10 md:py-14 lg:py-20",

  splitContent:
    "flex flex-col-reverse lg:flex-row items-center justify-between gap-8 lg:gap-12 w-full",
  splitLeft:
    "w-full lg:w-1/2 flex flex-col gap-4 md:gap-6 text-center lg:text-left items-center lg:items-start",
  splitRight: "w-full lg:w-1/2 flex justify-center",

  headingHero:
    "text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold",
  headingSection: "text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold",
  headingCard: "text-xl sm:text-2xl md:text-3xl font-bold",

  heroHeight: "min-h-[100svh] lg:h-screen",
  fixedSectionHeight:
    "min-h-0 h-auto py-16 sm:py-20 lg:h-[600px] lg:py-0 overflow-hidden",
} as const

export type ResponsiveStyles = typeof responsive
