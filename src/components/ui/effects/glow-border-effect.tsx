
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
  variant?: "default" | "white" | "teal";
  glow?: boolean;
  className?: string;
  disabled?: boolean;
  movementDuration?: number;
  borderWidth?: number;
  dualBorder?: boolean;
}

const GlowBorderEffect = memo(
  ({
    blur = 0,
    inactiveZone = 0.7,
    proximity = 0,
    spread = 20,
    variant = "default",
    glow = false,
    className,
    movementDuration = 2,
    borderWidth = 1,
    disabled = true,
    dualBorder = false,
  }: GlowBorderEffectProps) => {
    const containerRef = useGlowEffect({
      inactiveZone,
      proximity,
      movementDuration,
      disabled,
    });

    const gradient = getGradient(variant);

    return (
      <>
        {/* White border that's always visible */}
        <div
          className={cn(
            "pointer-events-none absolute -inset-px rounded-[inherit] border border-white/30 transition-opacity duration-300",
            disabled && "hidden"
          )}
        />
        
        {/* Second outline for dual border effect */}
        {dualBorder && (
          <div
            className={cn(
              "pointer-events-none absolute -inset-[3px] rounded-[inherit] border border-white/10 transition-opacity duration-300",
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
              "--active": "0",
              "--intensity": "1",
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
              "after:[background:var(--gradient)] after:[background-attachment:fixed]",
              "after:opacity-[var(--active)] after:transition-all after:duration-300",
              "after:[mask-clip:padding-box,border-box]",
              "after:[mask-composite:intersect]",
              "after:scale-[var(--intensity)]",
              "after:[mask-image:linear-gradient(#0000,#0000),conic-gradient(from_calc((var(--start)-var(--spread))*1deg),#00000000_0deg,#fff,#00000000_calc(var(--spread)*2deg))]"
            )}
          />
        </div>
      </>
    );
  }
);

GlowBorderEffect.displayName = "GlowBorderEffect";

export { GlowBorderEffect };
