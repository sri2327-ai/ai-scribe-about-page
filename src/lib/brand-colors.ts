
/**
 * Brand color constants for S10.AI application
 * These colors are used throughout the application to maintain consistent branding
 */

export const brandColors = {
  // Primary palette
  primary: '#143151', // Dark Navy Blue
  secondary: '#387E89', // Dark Teal Blue 
  tertiary: '#5192AE', // Medium Teal Blue
  accent: '#A5CCF3', // Light Sky Blue

  // Background colors
  background: {
    white: '#FFFFFF',
    light: '#F5F9FF',
    blue: '#EBF5FF',
    teal: '#E6F7F7',
  },

  // Gradients
  gradients: {
    primary: 'linear-gradient(to right, #143151, #387E89)',
    secondary: 'linear-gradient(to right, #387E89, #5192AE)',
    blue: 'linear-gradient(to right, #143151, #5192AE)',
  },

  // Feedback colors
  success: '#34D399',
  warning: '#FBBF24',
  error: '#F87171',
  info: '#60A5FA',
};

/**
 * Creates an rgba color with custom opacity
 * @param hex - Hex color code
 * @param alpha - Opacity value between 0 and 1
 * @returns RGBA color string
 */
export const hexToRgba = (hex: string, alpha: number = 1) => {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
};
