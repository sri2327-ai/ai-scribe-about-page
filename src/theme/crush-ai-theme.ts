
// Theme file specific for Crush AI section
// This ensures color changes here don't affect other pages

export const crushAIColors = {
  primary: 'linear-gradient(90deg, #143151, #387E89)', // Primary gradient for headings or primary elements
  primaryFlat: '#143151', // Flat version of primary for when gradients can't be used
  primaryDark: '#0d1f31', // Dark end of the primary gradient
  secondary: '#387E89', // Medium Teal Blue for buttons and secondary elements
  tertiary: '#A5CCF3', // Light Sky Blue for hover states or tertiary elements
  background: {
    white: '#FFFFFF', // Dominant white background
    light: '#F5F9FF', // A very light blue
    gradient: 'linear-gradient(90deg,#f8f9fa,#e9ecef)', // Light gradient background
  },
  text: {
    primary: '#000000', // Black for primary text (headings)
    secondary: '#000000', // Black for secondary text 
    light: '#333333', // Dark grey for light text to ensure visibility
    white: '#FFFFFF', // White for text on colored backgrounds
    lightGrey: '#CCCCCC', // Light grey for secondary text on colored backgrounds
  },
  accent: {
    blue: '#387E89', // Medium Teal Blue for accents (icons, borders)
    purple: '#A5CCF3', // Light Sky Blue repurposed as a secondary accent
  },
  button: {
    gradient: 'linear-gradient(90deg, #143151, #387E89)', // Updated button gradient to match primary
    hover: 'linear-gradient(90deg, #0d1f31, #2c6269)', // Slightly darker for hover state
  },
  icons: {
    primary: '#888888', // Updated to grey for icons
    secondary: '#666666', // Updated to darker grey for secondary icons
  }
};
