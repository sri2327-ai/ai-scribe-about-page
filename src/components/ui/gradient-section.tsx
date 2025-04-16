
import React from "react";
import { Box, SxProps, Theme } from "@mui/material";
import { crushAIColors } from "@/theme/crush-ai-theme";

interface GradientSectionProps {
  children: React.ReactNode;
  sx?: SxProps<Theme>;
  intensity?: "light" | "medium" | "strong";
  variant?: "radial" | "linear";
  direction?: string;
  colors?: string[];
}

export const GradientSection = ({
  children,
  sx = {},
  intensity = "medium",
  variant = "radial",
  direction = "135deg",
  colors,
}: GradientSectionProps) => {
  // Define opacity levels based on intensity
  const opacityLevels = {
    light: [0.15, 0.1, 0.05],
    medium: [0.3, 0.2, 0.1],
    strong: [0.5, 0.35, 0.15],
  };
  
  // Use default colors or custom colors
  const gradientColors = colors || [
    crushAIColors.tertiary, // Light Sky Blue
    crushAIColors.secondary, // Medium Teal Blue
    crushAIColors.background.white, // White
  ];
  
  // Convert hex to rgba for opacity
  const hexToRgba = (hex: string, opacity: number) => {
    const r = parseInt(hex.slice(1, 3), 16);
    const g = parseInt(hex.slice(3, 5), 16);
    const b = parseInt(hex.slice(5, 7), 16);
    return `rgba(${r}, ${g}, ${b}, ${opacity})`;
  };
  
  // Create gradient based on variant
  const createGradient = () => {
    const [color1, color2, color3] = gradientColors;
    const [opacity1, opacity2, opacity3] = opacityLevels[intensity];
    
    if (variant === "radial") {
      return `radial-gradient(
        circle at 50% 50%,
        ${hexToRgba(color1, opacity1)} 0%,
        ${hexToRgba(color2, opacity2)} 50%,
        ${hexToRgba(color3, opacity3)} 100%
      ), #FFFFFF`;
    } else {
      return `linear-gradient(
        ${direction},
        ${hexToRgba(color1, opacity1)} 0%,
        ${hexToRgba(color2, opacity2)} 50%,
        ${hexToRgba(color3, opacity3)} 100%
      ), #FFFFFF`;
    }
  };

  return (
    <Box
      sx={{
        position: "relative",
        background: createGradient(),
        "&::before": {
          content: '""',
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          opacity: 0.05,
          pointerEvents: "none",
          zIndex: 0
        },
        ...sx
      }}
    >
      {children}
    </Box>
  );
};
