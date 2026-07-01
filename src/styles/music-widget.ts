/**
 * Music widget styles for OWO TEA
 * Vinyl record style music player
 */

export const musicWidgetStyles = {
  // Container
  container: 'fixed bottom-6 right-6 z-50',
  
  // Tooltip notification
  tooltipWrapper: 'absolute bottom-full right-0 mb-4 flex items-center gap-3 animate-slide-up',
  tooltip: 'bg-gradient-to-r from-green-600 to-green-700 text-white px-5 py-3 rounded-2xl shadow-2xl flex items-center gap-3',
  tooltipIcon: 'w-10 h-10 bg-white/20 rounded-full flex items-center justify-center animate-pulse',
  tooltipText: 'font-semibold text-sm',
  tooltipSubtext: 'text-xs text-green-100 mt-0.5',
  tooltipPing: 'w-2 h-2 bg-white rounded-full animate-ping',
  tooltipArrow: 'w-0 h-0 border-l-[8px] border-l-transparent border-r-[8px] border-r-transparent border-t-[8px] border-t-green-600',
  
  // Button
  button: 'relative w-20 h-20 rounded-full shadow-2xl overflow-hidden transition-all duration-500 hover:scale-110',
  buttonPlaying: 'animate-spin-slow',
  
  // Circular progress
  progressSvg: 'absolute inset-0 w-full h-full -rotate-90 pointer-events-none z-10',
  progressBg: 'stroke-green-500/20',
  progressFill: 'stroke-green-500',
  
  // Vinyl record
  vinylBg: 'absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-black',
  vinylGroove: 'absolute inset-0 rounded-full border-2 border-gray-700/30',
  
  // Center label
  centerLabel: 'absolute inset-0 flex items-center justify-center',
  labelBg: 'w-12 h-12 rounded-full bg-gradient-to-br from-green-600 to-green-800 flex items-center justify-center shadow-lg',
  labelInner: 'w-10 h-10 rounded-full bg-white flex items-center justify-center p-1',
  
  // Center hole
  centerHole: 'absolute inset-0 flex items-center justify-center',
  hole: 'w-2 h-2 rounded-full bg-gray-900',
  
  // Play/Pause indicator
  playIndicator: 'absolute inset-0 flex items-center justify-center bg-black/50 opacity-0 hover:opacity-100 transition-opacity duration-300 z-20',
  pauseBars: 'flex gap-1',
  pauseBar: 'w-1 h-6 bg-white rounded-full',
  playTriangle: 'w-0 h-0 border-l-[12px] border-l-white border-t-[8px] border-t-transparent border-b-[8px] border-b-transparent ml-1',
  
  // Shine effect
  shine: 'absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent pointer-events-none',
} as const;

export type MusicWidgetStyles = typeof musicWidgetStyles;
