/**
 * Navbar styles for OWO TEA
 */

export const navbarStyles = {
  container:
    "flex flex-col lg:flex-row w-full bg-white shadow-sm lg:shadow-none lg:sticky lg:top-0 lg:z-50",
  logoArea:
    "w-full lg:w-64 xl:w-80 bg-white flex items-center justify-center py-3 lg:py-2 border-b lg:border-b-0 lg:border-r border-gray-200 shrink-0",
  logo: "relative w-28 h-16 sm:w-32 sm:h-20 lg:w-36 lg:h-24",
  content: "hidden lg:flex flex-1 flex-col min-w-0",
  topBarTablet: "hidden md:block lg:hidden bg-green-700 text-white py-2 w-full",
  topBar: "hidden lg:block bg-green-700 text-white py-2",
  topBarContent: "px-4 sm:px-6 lg:px-8 xl:px-12",
  topBarInner: "flex justify-between items-center text-xs sm:text-sm gap-4",
  jam: "flex items-center gap-2 min-w-0",
  jamText: "truncate",
  social: "flex items-center gap-3 sm:gap-4 shrink-0",
  socialLabel: "hidden lg:inline",
  socialIcons: "flex gap-2 sm:gap-3",
  socialLink: "text-white hover:text-green-200 transition-colors",
  mainDesktop: "relative bg-gray-900 shadow-md",
  navSpacer: "lg:hidden h-14 sm:h-16 w-full shrink-0",
  mainMobile:
    "lg:hidden relative bg-gray-900 shadow-md w-full h-14 sm:h-16",
  mainContent: "px-4 sm:px-6 lg:px-8 xl:px-12",
  mainInner: "flex justify-end lg:justify-between items-center h-14 sm:h-16 lg:h-24",
  menu: "hidden lg:flex gap-6 xl:gap-8",
  menuItem: "flex items-center gap-1",
  menuLink: "text-white font-medium hover:text-green-400 transition-colors text-sm xl:text-base",
  icons: "flex items-center gap-3 sm:gap-4",
  iconBtn:
    "text-white bg-none border-none cursor-pointer hover:text-green-400 transition-colors p-1",
  mobileBtn: "lg:hidden",
  mobileMenu:
    "lg:hidden absolute left-0 right-0 top-full bg-gray-900 border-t border-gray-700 shadow-xl z-50 max-h-[calc(100dvh-3.5rem)] sm:max-h-[calc(100dvh-4rem)] overflow-y-auto",
  mobileMenuInner: "px-4 sm:px-6 pt-2 pb-4",
  mobileMenuItem:
    "block px-3 py-3 text-white font-medium rounded-md hover:text-green-400 hover:bg-gray-800 border-b border-gray-800 last:border-0",
  mobileInfo: "md:hidden px-3 py-3 text-green-300 text-xs flex items-center gap-2 border-b border-gray-800",
  mobileBackdrop:
    "lg:hidden fixed inset-0 w-screen h-dvh min-h-dvh bg-black/60 z-40",
} as const

export type NavbarStyles = typeof navbarStyles
