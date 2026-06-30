/**
 * Footer styles for OWO TEA
 * Clean, modern footer with creative layout
 */

export const footerStyles = {
  section: 'relative bg-gray-900 text-white py-8 pt-12',
  container: 'max-w-7xl mx-auto px-8',
  
  // Grid layout
  grid: 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12',
  
  // Left section - Logo & Description
  leftSection: 'lg:col-span-1',
  logoContainer: 'relative w-48 h-16 mb-6',
  description: 'text-gray-400 text-sm leading-relaxed mb-6',
  
  // Middle sections
  sectionTitle: 'text-lg font-bold mb-6 text-white',
  linkList: 'flex flex-col space-y-3',
  link: 'text-gray-400 hover:text-green-400 transition-colors duration-300 text-sm',
  
  // Contact info
  contactItem: 'flex items-center gap-3 text-gray-400 text-sm',
  contactIcon: 'text-green-500',
  
  // Social media
  socialLinks: 'flex gap-3',
  socialLink: 'w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center text-gray-400 hover:bg-green-600 hover:text-white transition-all duration-300 hover:scale-110',
  
  // Newsletter
  newsletter: 'mt-6',
  newsletterInput: 'w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-green-500 transition-colors',
  newsletterButton: 'w-full mt-3 px-4 py-3 bg-green-600 text-white font-medium rounded-lg hover:bg-green-700 transition-colors duration-300',
  
  // Bottom bar
  bottomBar: 'border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4',
  copyright: 'text-gray-500 text-sm',
  bottomLinks: 'flex gap-6',
  bottomLink: 'text-gray-500 hover:text-green-400 transition-colors duration-300 text-sm',
} as const;

export type FooterStyles = typeof footerStyles;
