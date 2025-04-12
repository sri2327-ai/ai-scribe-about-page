
export const getGradient = (variant: "default" | "white" | "teal" = "default", intensity: number = 1) => {
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
      radial-gradient(circle at 50% 50%, rgba(20, 184, 166, ${0.9 * intensity}) 10%, rgba(20, 184, 166, 0) 40%),
      radial-gradient(circle at 40% 40%, rgba(56, 226, 208, ${1.0 * intensity}) 10%, rgba(56, 226, 208, 0) 35%),
      radial-gradient(circle at 60% 60%, rgba(20, 184, 166, ${1.0 * intensity}) 10%, rgba(20, 184, 166, 0) 35%),
      repeating-conic-gradient(
        from 0deg,
        rgba(20, 184, 166, ${1.0 * intensity}) 0%,
        rgba(94, 234, 212, ${1.2 * intensity}) 25%,
        rgba(20, 184, 166, ${1.0 * intensity}) 50%,
        rgba(94, 234, 212, ${1.2 * intensity}) 75%,
        rgba(20, 184, 166, ${1.0 * intensity}) 100%
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
