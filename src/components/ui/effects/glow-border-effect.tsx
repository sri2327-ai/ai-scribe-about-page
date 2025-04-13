
"use client";

import { memo } from "react";
import { cn } from "@/lib/utils";
import { useGlowEffect } from "@/hooks/use-glow-effect";
import { getGradient } from "./gradient-utils";

interface GlowBorderEffectProps {
  blur?: number;
  inactiveZone?: number;
  proximity?: number;
  spread?: number;
  variant?: "default" | "white" | "teal" | "gray";
  glow?: boolean;
  className?: string;
  disabled?: boolean;
  movementDuration?: number;
  borderWidth?: number;
  dualBorder?: boolean;
}

const GlowBorderEffect = memo(
  ({
    blur = 10,
    inactiveZone = 0,
    proximity = 150,
    spread = 50,
    variant = "teal",
    glow = true,
    className,
    movementDuration = 3,
    borderWidth = 2,
    disabled = false,
    dualBorder = false,
  }: GlowBorderEffectProps) => {
    const containerRef = useGlowEffect({
      inactiveZone,
      proximity,
      movementDuration,
      disabled,
    });

    // X.ai style uses more subtle gradients with gray/white tones
    const gradient = variant === "gray" || variant === "white" 
      ? `linear-gradient(90deg, rgba(120,120,120,0.5) 0%, rgba(180,180,180,0.8) 50%, rgba(120,120,120,0.5) 100%)`
      : getGradient(variant, 1.0);

    return (
      <>
        {/* Transparent base that follows image contours */}
        <div
          className={cn(
            "pointer-events-none absolute inset-0 -m-[1px]",
            disabled && "hidden"
          )}
        >
          {/* Subtle border that follows the X.ai style */}
          <div
            className={cn(
              "pointer-events-none absolute inset-0 rounded-[inherit] border-[1px] border-gray-600/30 transition-opacity duration-300",
              disabled && "hidden"
            )}
          />
          
          {/* Second outline for dual border effect - more visible */}
          {dualBorder && (
            <div
              className={cn(
                "pointer-events-none absolute -inset-[1px] rounded-[inherit] border-[1px] border-gray-500/20 transition-opacity duration-300",
                disabled && "hidden"
              )}
            />
          )}
          
          {/* Glowing effect container */}
          <div
            ref={containerRef}
            style={
              {
                "--blur": `${blur}px`,
                "--spread": spread,
                "--start": "0",
                "--active": "1", 
                "--intensity": variant === "white" ? "1.2" : "1.5", 
                "--glowingeffect-border-width": `${borderWidth}px`,
                "--repeating-conic-gradient-times": "5",
                "--gradient": gradient,
              } as React.CSSProperties
            }
            className={cn(
              "pointer-events-none absolute inset-0 rounded-[inherit] opacity-100 transition-all duration-300",
              glow && "opacity-100",
              blur > 0 && "blur-[var(--blur)]",
              className,
              disabled && "!hidden"
            )}
          >
            <div
              className={cn(
                "glow",
                "rounded-[inherit]",
                'after:content-[""] after:rounded-[inherit] after:absolute after:inset-[calc(-1*var(--glowingeffect-border-width))]',
                "after:[border:var(--glowingeffect-border-width)_solid_transparent]",
                "after:[background:var(--gradient)]",
                "after:opacity-[var(--active)]", 
                "after:transition-all after:duration-300",
                "after:[mask-clip:padding-box,border-box]",
                "after:[mask-composite:intersect]",
                "after:scale-[var(--intensity)]",
                "after:[mask-image:linear-gradient(#0000,#0000),conic-gradient(from_calc((var(--start))*1deg),#00000000_0deg,#fff,#00000000_calc(var(--spread)*2deg))]"
              )}
            />
          </div>
        </div>
      </>
    );
  }
);

GlowBorderEffect.displayName = "GlowBorderEffect";

export { GlowBorderEffect };
