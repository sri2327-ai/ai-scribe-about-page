
import { useCallback, useRef, useEffect } from "react";
import { animate } from "framer-motion";

interface UseGlowEffectProps {
  inactiveZone?: number;
  proximity?: number;
  movementDuration?: number;
  disabled?: boolean;
}

export function useGlowEffect({
  inactiveZone = 0.7,
  proximity = 0,
  movementDuration = 2,
  disabled = false,
}: UseGlowEffectProps = {}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const lastPosition = useRef({ x: 0, y: 0 });
  const animationFrameRef = useRef<number>(0);
  const pulseTimeoutRef = useRef<number | null>(null);
  const hoverStateRef = useRef<boolean>(false);

  const handleMove = useCallback(
    (e?: MouseEvent | { x: number; y: number }) => {
      if (!containerRef.current || disabled) return;

      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }

      animationFrameRef.current = requestAnimationFrame(() => {
        const element = containerRef.current;
        if (!element) return;

        const { left, top, width, height } = element.getBoundingClientRect();
        const mouseX = e?.x ?? lastPosition.current.x;
        const mouseY = e?.y ?? lastPosition.current.y;

        if (e) {
          lastPosition.current = { x: mouseX, y: mouseY };
        }

        const center = [left + width * 0.5, top + height * 0.5];
        const distanceFromCenter = Math.hypot(
          mouseX - center[0],
          mouseY - center[1]
        );
        const inactiveRadius = 0.5 * Math.min(width, height) * inactiveZone;

        if (distanceFromCenter < inactiveRadius) {
          element.style.setProperty("--active", "0");
          hoverStateRef.current = false;
          return;
        }

        const isActive =
          mouseX > left - proximity &&
          mouseX < left + width + proximity &&
          mouseY > top - proximity &&
          mouseY < top + height + proximity;

        // Set active state
        element.style.setProperty("--active", isActive ? "1" : "0");
        
        // Only trigger animation effect when hover state changes
        if (isActive && !hoverStateRef.current) {
          // Entry animation - more intense for better visibility
          element.style.setProperty("--intensity", "2.0"); // Higher intensity for more visibility
          element.style.setProperty("--spread", "60"); // Wider spread on initial hover
          
          // Reset to normal values after initial effect
          if (pulseTimeoutRef.current) {
            clearTimeout(pulseTimeoutRef.current);
          }
          
          pulseTimeoutRef.current = window.setTimeout(() => {
            element.style.setProperty("--intensity", "1.6");
            element.style.setProperty("--spread", "40");
          }, 400);
          
          hoverStateRef.current = true;
        } else if (!isActive && hoverStateRef.current) {
          // Exit animation cleanup
          if (pulseTimeoutRef.current) {
            clearTimeout(pulseTimeoutRef.current);
          }
          element.style.setProperty("--intensity", "1");
          element.style.setProperty("--spread", "20");
          hoverStateRef.current = false;
        }

        if (!isActive) return;

        const currentAngle =
          parseFloat(element.style.getPropertyValue("--start")) || 0;
        let targetAngle =
          (180 * Math.atan2(mouseY - center[1], mouseX - center[0])) /
            Math.PI +
          90;

        // Make the angle change more dramatic for visibility
        const angleDiff = ((targetAngle - currentAngle + 180) % 360) - 180;
        const newAngle = currentAngle + angleDiff;

        animate(currentAngle, newAngle, {
          duration: movementDuration,
          ease: [0, 0.55, 0.45, 1], // Enhanced easing for more visible motion
          onUpdate: (value) => {
            element.style.setProperty("--start", String(value));
          },
        });

        // Create a more pronounced pulsing effect while hovering
        if (isActive && hoverStateRef.current) {
          const pulseIntensity = () => {
            if (!element || !hoverStateRef.current) return;
            
            const currentIntensity = parseFloat(element.style.getPropertyValue("--intensity") || "1.6");
            const newIntensity = currentIntensity === 1.6 ? 2.0 : 1.6;
            
            animate(currentIntensity, newIntensity, {
              duration: 1.2, // Faster pulsing
              ease: [0.4, 0, 0.6, 1],
              onUpdate: (value) => {
                element.style.setProperty("--intensity", String(value));
              },
              onComplete: pulseIntensity
            });
          };
          
          // Start the pulsing effect sooner
          if (!pulseTimeoutRef.current) {
            pulseTimeoutRef.current = window.setTimeout(pulseIntensity, 300);
          }
        }
      });
    },
    [inactiveZone, proximity, movementDuration, disabled]
  );

  useEffect(() => {
    if (disabled) return;

    const handleScroll = () => handleMove();
    const handlePointerMove = (e: PointerEvent) => handleMove(e);

    window.addEventListener("scroll", handleScroll, { passive: true });
    document.body.addEventListener("pointermove", handlePointerMove, {
      passive: true,
    });

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
      if (pulseTimeoutRef.current) {
        clearTimeout(pulseTimeoutRef.current);
      }
      window.removeEventListener("scroll", handleScroll);
      document.body.removeEventListener("pointermove", handlePointerMove);
    };
  }, [handleMove, disabled]);

  return containerRef;
}
