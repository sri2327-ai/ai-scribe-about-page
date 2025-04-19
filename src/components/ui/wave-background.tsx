import React from "react";
import { Box } from "@mui/material";
import { styled } from "@mui/system";

interface WaveBackgroundProps {
  intensity?: "light" | "medium" | "strong";
  baseColor?: string;
  children?: React.ReactNode;
  height?: string | number;
  className?: string;
}

const WaveContainer = styled(Box)<{ intensity: string; baseColor: string; height?: string | number }>(
  ({ intensity, baseColor, height }) => ({
    position: "relative",
    width: "100%",
    height: height || "auto",
    background: `linear-gradient(135deg, 
      ${baseColor} 0%, 
      ${baseColor}40 30%, 
      ${baseColor}20 70%, 
      ${baseColor}10 100%)`,
    overflow: "hidden",
    zIndex: 0,
    
    "&::before, &::after": {
      content: '""',
      position: "absolute",
      width: "200%",
      height: "200%",
      top: "70%",
      left: "-50%",
      background: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 800 88.7'%3E%3Cpath d='M800 56.9c-155.5 0-204.9-50-405.5-49.9-200 0-250 49.9-394.5 49.9v31.8h800v-31.8z' fill='%23${baseColor.replace(
        "#",
        ""
      )}${intensity === "light" ? "20" : intensity === "medium" ? "30" : "40"}'/%3E%3C/svg%3E")`,
      backgroundRepeat: "repeat-x",
      backgroundPosition: "0 center",
      backgroundSize: "50% auto",
      transform: "rotate(-2deg)",
      zIndex: -1,
      animation: "wave 20s linear infinite",
    },
    
    "&::after": {
      top: "68%",
      animation: "wave 17s linear infinite",
      opacity: 0.6,
      backgroundSize: "40% auto",
    },
    
    "@keyframes wave": {
      "0%": {
        transform: "translateX(0) rotate(-2deg)",
      },
      "50%": {
        transform: "translateX(-25%) rotate(-2deg)",
      },
      "100%": {
        transform: "translateX(-50%) rotate(-2deg)",
      },
    },
  })
);

export const WaveBackground: React.FC<WaveBackgroundProps> = ({
  intensity = "medium",
  baseColor = "#A5CCF3",
  children,
  height,
  className,
}) => {
  return (
    <WaveContainer intensity={intensity} baseColor={baseColor} height={height} className={className}>
      {children}
    </WaveContainer>
  );
};
