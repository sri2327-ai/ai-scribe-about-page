
// Shadow utility constants for consistent styling across the application
export const shadowStyles = {
  // For cards and content boxes 
  card: "shadow-[0_8px_30px_rgb(0,0,0,0.08)] hover:shadow-[0_12px_35px_rgb(0,0,0,0.15)] transition-shadow duration-300",
  
  // For elements that need subtle elevation
  subtle: "shadow-[0_6px_15px_rgb(0,0,0,0.06)] hover:shadow-[0_8px_20px_rgb(0,0,0,0.11)] transition-shadow duration-300",
  
  // For prominent UI elements like feature sections
  prominent: "shadow-[0_15px_50px_-8px_rgba(0,0,0,0.12)] hover:shadow-[0_20px_60px_-10px_rgba(0,0,0,0.2)] transition-shadow duration-300",
  
  // For floating elements like dropdowns and popovers
  floating: "shadow-[0_25px_60px_-15px_rgba(0,0,0,0.25)]",
  
  // For testimonial cards with softer appearance
  testimonial: "shadow-[0_10px_30px_rgba(0,0,0,0.08)] hover:shadow-[0_15px_40px_rgba(0,0,0,0.15)] transition-all duration-300",

  // For carousel items
  carousel: "shadow-[0_8px_20px_rgba(0,0,0,0.09)] hover:shadow-[0_12px_25px_rgba(0,0,0,0.14)] transition-all duration-300",

  // New style for hero elements
  hero: "shadow-[0_25px_70px_-18px_rgba(0,0,0,0.28)]",
  
  // New style for cards with hover effect
  cardHover: "shadow-[0_8px_30px_rgb(0,0,0,0.08)] hover:shadow-[0_15px_40px_rgb(0,0,0,0.18)] transition-all duration-300 hover:translate-y-[-5px]",

  // New style for buttons
  button: "shadow-[0_5px_15px_rgba(0,0,0,0.12)] hover:shadow-[0_8px_20px_rgba(0,0,0,0.18)] transition-all duration-300",
  
  // Glass effect shadows
  glass: "shadow-[0_10px_40px_rgba(0,0,0,0.08)] backdrop-blur-[10px]",
  
  // Feature card shadows
  featureCard: "shadow-[0_12px_35px_-8px_rgba(0,0,0,0.1)] hover:shadow-[0_18px_45px_-8px_rgba(0,0,0,0.16)] transition-all duration-300 hover:translate-y-[-4px]",

  // New styles for landing page
  landingCard: "shadow-[0_10px_30px_rgba(20,49,81,0.08)] hover:shadow-[0_15px_40px_rgba(20,49,81,0.15)] transition-all duration-300",
  
  // 3D-like depth effect
  depthEffect: "shadow-[0_10px_30px_-10px_rgba(0,0,0,0.12),_0_1px_3px_0_rgba(0,0,0,0.05)] hover:shadow-[0_20px_40px_-12px_rgba(0,0,0,0.18),_0_1px_4px_0_rgba(0,0,0,0.08)] transition-all duration-300",
  
  // Colored shadows
  blueGlow: "shadow-[0_8px_25px_-5px_rgba(59,130,246,0.3)] hover:shadow-[0_15px_35px_-5px_rgba(59,130,246,0.4)] transition-shadow duration-300",
  greenGlow: "shadow-[0_8px_25px_-5px_rgba(52,211,153,0.3)] hover:shadow-[0_15px_35px_-5px_rgba(52,211,153,0.4)] transition-shadow duration-300",
  brandGlow: "shadow-[0_10px_30px_-5px_rgba(56,126,137,0.25)] hover:shadow-[0_18px_40px_-5px_rgba(56,126,137,0.35)] transition-shadow duration-300",
}
