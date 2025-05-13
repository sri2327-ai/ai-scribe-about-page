
import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

// Enhanced utility to combine class names more efficiently
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// Media query breakpoints matching our design system
export const breakpoints = {
  mobile: 320,
  tablet: 768,
  laptop: 1024,
  desktop: 1200,
}

// Function to generate responsive font sizes
export function responsiveFontSize(basePx: number, minPx?: number, maxPx?: number) {
  const min = minPx || Math.max(12, basePx - 4);
  const max = maxPx || basePx + 4;
  
  return {
    fontSize: `clamp(${min / 16}rem, ${basePx / 16}rem + 1vw, ${max / 16}rem)`
  }
}

// Generate consistent shadow styles
export const shadows = {
  sm: "0px 1px 2px rgba(0, 0, 0, 0.05)",
  md: "0px 4px 12px rgba(0, 0, 0, 0.1)",
  lg: "0px 10px 30px rgba(0, 0, 0, 0.12)",
  xl: "0px 20px 40px rgba(0, 0, 0, 0.15)",
}

// Generate consistent spacing
export const spacing = {
  xs: "0.5rem",   // 8px
  sm: "0.75rem",  // 12px
  md: "1rem",     // 16px
  lg: "1.5rem",   // 24px
  xl: "2rem",     // 32px
  "2xl": "3rem",  // 48px
  "3xl": "4rem",  // 64px
  "4xl": "5rem",  // 80px
}

// Utility to check contrast ratio for accessibility
export function hasGoodContrast(foreground: string, background: string): boolean {
  // This is a simplified estimation - for production use a proper color contrast library
  const luminance = (r: number, g: number, b: number) => {
    const a = [r, g, b].map(v => {
      v /= 255;
      return v <= 0.03928 ? v / 12.92 : Math.pow((v + 0.055) / 1.055, 2.4);
    });
    return a[0] * 0.2126 + a[1] * 0.7152 + a[2] * 0.0722;
  };
  
  // Convert hex to rgb
  const hexToRgb = (hex: string) => {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? [
      parseInt(result[1], 16),
      parseInt(result[2], 16),
      parseInt(result[3], 16)
    ] : [0, 0, 0];
  };
  
  const rgb1 = hexToRgb(foreground);
  const rgb2 = hexToRgb(background);
  const l1 = luminance(rgb1[0], rgb1[1], rgb1[2]);
  const l2 = luminance(rgb2[0], rgb2[1], rgb2[2]);
  
  const ratio = (Math.max(l1, l2) + 0.05) / (Math.min(l1, l2) + 0.05);
  
  // WCAG 2.1 requires a contrast ratio of at least 4.5:1 for normal text
  return ratio >= 4.5;
}
