/**
 * Navbar styles for OWO TEA
 */

export const navbarStyles = {
  container: 'flex w-full',
  logoArea: 'w-64 lg:w-80 bg-white flex items-center justify-center py-2 border-r border-gray-200',
  logo: 'relative w-36 h-24',
  content: 'flex-1',
  topBar: 'bg-green-700 text-white py-2',
  topBarContent: 'px-6 sm:px-8 lg:px-12',
  topBarInner: 'flex justify-between items-center text-sm',
  jam: 'flex items-center gap-2',
  social: 'flex items-center gap-4',
  socialLabel: 'hidden sm:inline',
  socialIcons: 'flex gap-3',
  socialLink: 'text-white hover:text-green-200 transition-colors',
  main: 'bg-gray-900 shadow-md',
  mainContent: 'px-6 sm:px-8 lg:px-12',
  mainInner: 'flex justify-between items-center h-24',
  menu: 'hidden lg:flex gap-8',
  menuItem: 'flex items-center gap-1',
  menuLink: 'text-white font-medium hover:text-green-400 transition-colors',
  menuPlus: 'text-green-400 text-xs',
  icons: 'flex items-center gap-4',
  iconBtn: 'text-white bg-none border-none cursor-pointer hover:text-green-400 transition-colors',
  cartBtn: 'relative',
  cartBadge: 'absolute -top-2 -right-2 bg-green-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center',
  mobileBtn: 'lg:hidden',
  mobileMenu: 'lg:hidden',
  mobileMenuInner: 'bg-gray-900 border-t border-gray-700 px-6 pt-2 pb-4',
  mobileMenuItem: 'block px-3 py-2 text-white font-medium rounded-md hover:text-green-400 hover:bg-gray-800',
} as const;

export type NavbarStyles = typeof navbarStyles;
