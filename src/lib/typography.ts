
/**
 * Typography system for consistent text styling across the application
 */

export const typography = {
  // Headings
  h1: "text-3xl md:text-4xl lg:text-5xl font-bold leading-tight tracking-tight",
  h2: "text-2xl md:text-3xl lg:text-4xl font-bold leading-tight",
  h3: "text-xl md:text-2xl lg:text-3xl font-bold leading-snug",
  h4: "text-lg md:text-xl lg:text-2xl font-bold leading-snug",
  
  // Body text
  body: {
    lg: "text-lg leading-relaxed",
    base: "text-base leading-relaxed",
    sm: "text-sm leading-relaxed",
  },
  
  // Description text
  description: "text-base md:text-lg leading-relaxed text-gray-700",
  
  // Consistent spacing
  spacing: {
    section: "py-12 md:py-16 lg:py-20",
    sectionCompact: "py-8 md:py-10 lg:py-12",
    container: "px-4 sm:px-6 md:px-8 lg:px-12 max-w-7xl mx-auto",
  }
};

/**
 * Helper function to combine typography classes with additional classes
 */
export function withTypography(typographyClass: string, additionalClasses?: string) {
  return additionalClasses ? `${typographyClass} ${additionalClasses}` : typographyClass;
}
