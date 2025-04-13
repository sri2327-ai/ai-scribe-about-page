
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
          element.style.setProperty("--active", "1");
          hoverStateRef.current = true;
          return;
        }

        const isActive =
          mouseX > left - proximity &&
          mouseX < left + width + proximity &&
          mouseY > top - proximity &&
          mouseY < top + height + proximity;

        // X.ai style glow should be very subtle - set active to 1 but with lower intensity
        element.style.setProperty("--active", isActive ? "1" : "0.7");
        
        // Only trigger animation effect when hover state changes
        if (isActive && !hoverStateRef.current) {
          // Entry animation - subtle for the X.ai style
          element.style.setProperty("--intensity", "1.2");
          element.style.setProperty("--spread", "40"); // Narrower spread for X.ai style
          
          // Reset to normal values after initial effect
          if (pulseTimeoutRef.current) {
            clearTimeout(pulseTimeoutRef.current);
          }
          
          pulseTimeoutRef.current = window.setTimeout(() => {
            element.style.setProperty("--intensity", "1.0");
            element.style.setProperty("--spread", "30");
          }, 300);
          
          hoverStateRef.current = true;
        } else if (!isActive && hoverStateRef.current) {
          // Exit animation cleanup
          if (pulseTimeoutRef.current) {
            clearTimeout(pulseTimeoutRef.current);
          }
          element.style.setProperty("--intensity", "0.8");
          element.style.setProperty("--spread", "20");
          hoverStateRef.current = false;
        }

        if (!isActive) return;

        // Calculate and set the angle for the glow effect
        const currentAngle =
          parseFloat(element.style.getPropertyValue("--start")) || 0;
        let targetAngle =
          (180 * Math.atan2(mouseY - center[1], mouseX - center[0])) / Math.PI + 90;

        // Make the angle change more subtle for X.ai style
        const angleDiff = ((targetAngle - currentAngle + 180) % 360) - 180;
        const newAngle = currentAngle + angleDiff;

        animate(currentAngle, newAngle, {
          duration: movementDuration,
          ease: [0, 0.55, 0.45, 1], // Enhanced easing for more visible motion
          onUpdate: (value) => {
            element.style.setProperty("--start", String(value));
          },
        });
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
