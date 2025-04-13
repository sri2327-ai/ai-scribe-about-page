
"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

interface PulseBeamsProps {
  className?: string;
  beams?: {
    path: string;
    animate?: {
      x1?: string;
      y1?: string;
      x2?: string;
      y2?: string;
    };
    gradientId?: string;
  }[];
  background?: React.ReactNode;
  children?: React.ReactNode;
  baseColor?: string;
  accentColor?: string;
  gradientColors?: string[];
}

export function PulseBeams({
  className,
  beams = defaultBeams,
  background,
  children,
  baseColor = "rgb(9, 9, 11)",
  accentColor = "rgb(168, 85, 247)",
  gradientColors = ["#4ECDC4", "#1EAEDB"],
}: PulseBeamsProps) {
  return (
    <div className={cn("w-full h-screen relative flex items-center justify-center overflow-hidden", className)}>
      {/* Background Element */}
      {background ? (
        background
      ) : (
        <div className="absolute inset-0 bg-black bg-opacity-95" />
      )}

      {/* SVG container for beams */}
      <svg
        className="absolute inset-0 w-full h-full z-0"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1000 1000"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          {beams.map((beam, idx) => (
            <linearGradient
              key={`grad-${idx}`}
              id={beam.gradientId || `beam-gradient-${idx}`}
              x1={beam.animate?.x1 || "0%"}
              y1={beam.animate?.y1 || "0%"}
              x2={beam.animate?.x2 || "100%"}
              y2={beam.animate?.y2 || "100%"}
            >
              <stop offset="0%" stopColor={gradientColors[0]} stopOpacity="0.5">
                <animate
                  attributeName="stop-color"
                  values={`${gradientColors[0]}; ${gradientColors[1]}; ${gradientColors[0]}`}
                  dur="10s"
                  repeatCount="indefinite"
                />
              </stop>
              <stop offset="100%" stopColor={gradientColors[1]} stopOpacity="0.2">
                <animate
                  attributeName="stop-color"
                  values={`${gradientColors[1]}; ${gradientColors[0]}; ${gradientColors[1]}`}
                  dur="10s"
                  repeatCount="indefinite"
                />
              </stop>
            </linearGradient>
          ))}
        </defs>

        <g className="opacity-30">
          {beams.map((beam, idx) => (
            <path
              key={`beam-${idx}`}
              d={beam.path}
              fill="none"
              stroke={`url(#${beam.gradientId || `beam-gradient-${idx}`})`}
              strokeWidth="2"
              strokeLinecap="round"
              className="transform origin-center"
            >
              <animate
                attributeName="opacity"
                values="0.3;0.6;0.3"
                dur={`${5 + idx * 0.5}s`}
                repeatCount="indefinite"
              />
            </path>
          ))}
        </g>
      </svg>

      {/* Central content */}
      <div className="relative z-10">{children}</div>
    </div>
  );
}

// Example beam patterns - you can customize these
const defaultBeams = [
  {
    path: "M500,200 C600,100 800,300 900,200 C950,150 950,50 900,0",
    gradientId: "beam-gradient-1",
    animate: {
      x1: "0%",
      y1: "0%",
      x2: "100%",
      y2: "100%",
    },
  },
  {
    path: "M500,200 C400,300 200,300 100,200 C50,150 50,50 100,0",
    gradientId: "beam-gradient-2",
    animate: {
      x1: "100%",
      y1: "0%",
      x2: "0%",
      y2: "100%",
    },
  },
  {
    path: "M500,800 C600,700 800,700 900,800 C950,850 950,950 900,1000",
    gradientId: "beam-gradient-3",
    animate: {
      x1: "0%",
      y1: "100%",
      x2: "100%",
      y2: "0%",
    },
  },
  {
    path: "M500,800 C400,700 200,700 100,800 C50,850 50,950 100,1000",
    gradientId: "beam-gradient-4",
    animate: {
      x1: "100%",
      y1: "100%",
      x2: "0%",
      y2: "0%",
    },
  },
  {
    path: "M500,500 C600,400 800,400 900,500 C950,550 950,650 900,700",
    gradientId: "beam-gradient-5",
    animate: {
      x1: "0%",
      y1: "50%",
      x2: "100%",
      y2: "50%",
    },
  },
  {
    path: "M500,500 C400,400 200,400 100,500 C50,550 50,650 100,700",
    gradientId: "beam-gradient-6",
    animate: {
      x1: "100%",
      y1: "50%",
      x2: "0%",
      y2: "50%",
    },
  },
  // Add more beams as needed for different effects
];
