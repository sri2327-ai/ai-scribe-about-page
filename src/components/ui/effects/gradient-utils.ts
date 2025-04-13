
export const getGradient = (variant: "default" | "white" | "teal" | "gray" | "x-gray" = "default", intensity: number = 1) => {
  if (variant === "white") {
    return `repeating-conic-gradient(
      from 236.84deg at 50% 50%,
      var(--black),
      var(--black) calc(25% / var(--repeating-conic-gradient-times))
    )`;
  }

  if (variant === "teal") {
    // Enhanced teal gradient with much more vibrant colors and animation-friendly structure
    return `
      radial-gradient(ellipse at 50% 0%, rgba(30, 174, 219, ${0.25 * intensity}) 0%, rgba(18, 105, 132, ${0.1 * intensity}) 30%, rgba(0, 0, 0, 0) 70%),
      radial-gradient(circle at 40% 40%, rgba(56, 226, 208, ${0.05 * intensity}) 10%, rgba(56, 226, 208, 0) 35%),
      radial-gradient(circle at 60% 60%, rgba(20, 184, 166, ${0.05 * intensity}) 10%, rgba(20, 184, 166, 0) 35%)`;
  }
  
  if (variant === "gray") {
    // X.ai style gray gradient for text
    return `linear-gradient(180deg, 
      rgba(85,85,85,${0.8 * intensity}) 0%, 
      rgba(51,51,51,${0.4 * intensity}) 100%)`;
  }

  if (variant === "x-gray") {
    // X.ai style horizontal gray gradient for text that fades out
    return `linear-gradient(90deg, 
      rgba(100,100,100,0.2) 0%, 
      rgba(120,120,120,${0.7 * intensity}) 50%, 
      rgba(80,80,80,${0.9 * intensity}) 100%)`;
  }

  // Default rainbow gradient
  return `
    radial-gradient(circle, #dd7bbb 10%, #dd7bbb00 20%),
    radial-gradient(circle at 40% 40%, #d79f1e 5%, #d79f1e00 15%),
    radial-gradient(circle at 60% 60%, #5a922c 10%, #5a922c00 20%), 
    radial-gradient(circle at 40% 60%, #4c7894 10%, #4c789400 20%),
    repeating-conic-gradient(
      from 236.84deg at 50% 50%,
      #dd7bbb 0%,
      #d79f1e 25%,
      #5a922c 50%, 
      #4c7894 75%,
      #dd7bbb 100%
    )`;
};
