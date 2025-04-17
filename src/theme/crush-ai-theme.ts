
// Theme file specific for Crush AI section
// This ensures color changes here don't affect other pages

export const crushAIColors = {
  primary: 'linear-gradient(90deg,#046f90,#0d252b)', // Primary gradient for headings or primary elements
  primaryFlat: '#046f90', // Flat version of primary for when gradients can't be used
  primaryDark: '#0d252b', // Dark end of the primary gradient
  secondary: '#5192AE', // Medium Teal Blue for buttons and secondary elements
  tertiary: '#A5CCF3', // Light Sky Blue for hover states or tertiary elements
  background: {
    white: '#FFFFFF', // Dominant white background
    light: '#F5F9FF', // A very light blue
    gradient: 'linear-gradient(90deg,#f8f9fa,#e9ecef)', // Light gradient background
  },
  text: {
    primary: '#000000', // Black for primary text (headings)
    secondary: '#005477', // Secondary text color
    light: '#5192AE', // Medium Teal Blue for lighter text (e.g., captions)
    white: '#FFFFFF', // White for text on colored backgrounds (e.g., buttons)
  },
  accent: {
    blue: '#5192AE', // Medium Teal Blue for accents (icons, borders)
    purple: '#A5CCF3', // Light Sky Blue repurposed as a secondary accent
  },
  button: {
    gradient: 'linear-gradient(90deg,#009bca,#0d252b)', // Gradient for buttons
    hover: 'linear-gradient(90deg,#00b3e6,#0d252b)', // Slightly lighter for hover state
  }
};
