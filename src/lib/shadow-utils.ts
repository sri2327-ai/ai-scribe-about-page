
// Shadow utility constants for consistent styling across the application
export const shadowStyles = {
  // For cards and content boxes 
  card: "shadow-[0_8px_30px_rgb(0,0,0,0.06)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)] transition-shadow duration-300",
  
  // For elements that need subtle elevation
  subtle: "shadow-[0_4px_12px_rgb(0,0,0,0.05)] hover:shadow-[0_4px_15px_rgb(0,0,0,0.08)] transition-shadow duration-300",
  
  // For prominent UI elements like feature sections
  prominent: "shadow-[0_10px_40px_-5px_rgba(0,0,0,0.1)] hover:shadow-[0_15px_45px_-5px_rgba(0,0,0,0.15)] transition-shadow duration-300",
  
  // For floating elements like dropdowns and popovers
  floating: "shadow-[0_20px_50px_-12px_rgba(0,0,0,0.15)]",
  
  // For testimonial cards with softer appearance
  testimonial: "shadow-[0_6px_20px_rgba(0,0,0,0.07)]",

  // For carousel items
  carousel: "shadow-[0_5px_15px_rgba(0,0,0,0.08)]",

  // New style for hero elements
  hero: "shadow-[0_20px_60px_-15px_rgba(0,0,0,0.25)]",
  
  // New style for cards with hover effect
  cardHover: "shadow-[0_8px_30px_rgb(0,0,0,0.06)] hover:shadow-[0_15px_35px_rgb(0,0,0,0.15)] transition-all duration-300 hover:translate-y-[-5px]",

  // New style for buttons
  button: "shadow-[0_4px_10px_rgba(0,0,0,0.1)] hover:shadow-[0_6px_14px_rgba(0,0,0,0.15)] transition-all duration-300",
  
  // Glass effect shadows
  glass: "shadow-[0_8px_32px_rgba(0,0,0,0.05)] backdrop-blur-[8px]",
  
  // Feature card shadows
  featureCard: "shadow-[0_10px_30px_-5px_rgba(0,0,0,0.08)] hover:shadow-[0_15px_35px_-5px_rgba(0,0,0,0.12)] transition-all duration-300 hover:translate-y-[-3px]",
}
