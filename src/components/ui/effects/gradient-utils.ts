
export const getGradient = (variant: "default" | "white" | "teal" = "default", intensity: number = 1) => {
  if (variant === "white") {
    return `repeating-conic-gradient(
      from 236.84deg at 50% 50%,
      var(--black),
      var(--black) calc(25% / var(--repeating-conic-gradient-times))
    )`;
  }

  if (variant === "teal") {
    // Enhanced teal gradient with more vibrant colors and animation-friendly structure
    return `
      radial-gradient(circle at 50% 50%, rgba(15, 118, 110, ${0.2 * intensity}) 10%, rgba(15, 118, 110, 0) 30%),
      radial-gradient(circle at 40% 40%, rgba(45, 212, 191, ${0.3 * intensity}) 10%, rgba(45, 212, 191, 0) 25%),
      radial-gradient(circle at 60% 60%, rgba(15, 118, 110, ${0.3 * intensity}) 10%, rgba(15, 118, 110, 0) 25%),
      repeating-conic-gradient(
        from 0deg,
        rgba(15, 118, 110, ${0.7 * intensity}) 0%,
        rgba(45, 212, 191, ${0.8 * intensity}) 25%,
        rgba(15, 118, 110, ${0.7 * intensity}) 50%,
        rgba(45, 212, 191, ${0.8 * intensity}) 75%,
        rgba(15, 118, 110, ${0.7 * intensity}) 100%
      )`;
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
