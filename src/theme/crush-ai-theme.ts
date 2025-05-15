
// Theme file specific for Crush AI section
// This ensures color changes here don't affect other pages

export const crushAIColors = {
  primary: 'linear-gradient(90deg, #143151, #387E89)', // Primary gradient for headings or primary elements
  primaryFlat: '#143151', // Flat version of primary for when gradients can't be used
  primaryDark: '#0d1f31', // Dark end of the primary gradient
  secondary: '#387E89', // Medium Teal Blue for buttons and secondary elements
  tertiary: '#FFDEE2', // Changed to light pink for better contrast
  background: {
    white: '#FFFFFF', // Dominant white background
    light: '#F8F9FF', // A very light blue with slight pink undertone
    gradient: 'linear-gradient(90deg,#f8f9fa,#FFF0F3)', // Light gradient background with pink tone
  },
  text: {
    primary: '#143151', // Changed to dark blue for primary text
    secondary: '#333333', // Dark grey for secondary text 
    light: '#555555', // Dark grey for light text to ensure visibility
    white: '#FFFFFF', // White for text on colored backgrounds
    lightGrey: '#CCCCCC', // Light grey for secondary text on colored backgrounds
  },
  accent: {
    blue: '#387E89', // Medium Teal Blue for accents
    pink: '#FFDEE2', // Light pink for feminine accents
    purple: '#A5CCF3', // Light Sky Blue repurposed as a secondary accent
  },
  button: {
    gradient: 'linear-gradient(90deg, #143151, #387E89)', // Updated button gradient
    hover: 'linear-gradient(90deg, #0d1f31, #2c6269)', // Slightly darker for hover state
    pinkGradient: 'linear-gradient(90deg, #FFDEE2, #FFA9B7)', // Added pink gradient for buttons
    pinkHover: 'linear-gradient(90deg, #FFC4CC, #FF95A6)', // Hover state for pink buttons
  },
  icons: {
    primary: '#f06292', // Changed to pink
    secondary: '#143151', // Changed to dark blue
  }
};
