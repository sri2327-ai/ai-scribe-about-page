
import * as React from "react"
import * as SliderPrimitive from "@radix-ui/react-slider"

import { cn } from "@/lib/utils"
import { crushAIColors } from "@/theme/crush-ai-theme"

const Slider = React.forwardRef<
  React.ElementRef<typeof SliderPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof SliderPrimitive.Root>
>(({ className, ...props }, ref) => {
  // Track if we're currently dragging to prevent slider from disappearing
  const [isDragging, setIsDragging] = React.useState(false);
  const [bounceActive, setBounceActive] = React.useState(false);
  
  // Fixed minimum/maximum values to prevent slider from disappearing
  const safeThumbPosition = React.useCallback((value: number[]) => {
    // Ensure the slider thumb is always visible by clamping to 3-97% range
    const safeValue = [...value];
    if (safeValue.length > 0) {
      const originalValue = safeValue[0];
      safeValue[0] = Math.max(3, Math.min(97, safeValue[0]));
      
      // Trigger bounce animation if we hit the boundaries
      if (originalValue < 3 || originalValue > 97) {
        setBounceActive(true);
        setTimeout(() => setBounceActive(false), 500);
      }
    }
    return safeValue;
  }, []);
  
  // Apply safety bounds to value/defaultValue - but only once during initialization
  const safeValue = React.useMemo(() => 
    props.value ? safeThumbPosition(props.value as number[]) : undefined
  , [props.value, safeThumbPosition]);
  
  const safeDefaultValue = React.useMemo(() => 
    props.defaultValue ? safeThumbPosition(props.defaultValue as number[]) : undefined
  , [props.defaultValue, safeThumbPosition]);
  
  // Handle direct click on track
  const handleRootClick = React.useCallback((event: React.MouseEvent | React.TouchEvent) => {
    const root = event.currentTarget as HTMLDivElement;
    const rect = root.getBoundingClientRect();
    const thumbSize = 24; // Thumb width in px
    
    // Get clientX whether it's mouse or touch event
    let clientX: number;
    if ("touches" in event && event.touches.length > 0) {
      clientX = event.touches[0].clientX;
    } else if ("clientX" in event) {
      clientX = event.clientX;
    } else {
      return;
    }
    
    // Calculate percentage position, accounting for thumb size
    const effectiveTrackWidth = rect.width - thumbSize;
    const offsetX = clientX - rect.left - (thumbSize / 2);
    const percentPosition = (offsetX / effectiveTrackWidth) * 100;
    
    // Clamp to valid range and call onValueChange
    const clampedPercent = Math.max(3, Math.min(97, percentPosition));
    
    if (props.onValueChange && props.max !== undefined) {
      const actualValue = (clampedPercent / 100) * props.max;
      props.onValueChange([actualValue]);
    }
  }, [props.onValueChange, props.max]);
  
  const handleValueChange = React.useCallback((val: number[]) => {
    if (props.onValueChange) {
      // Apply safety bounds before passing to user callback
      props.onValueChange(safeThumbPosition(val));
    }
  }, [props.onValueChange, safeThumbPosition]);
  
  const handlePointerDown = React.useCallback((e: React.PointerEvent) => {
    setIsDragging(true);
    handleRootClick(e);
    if (props.onPointerDown) props.onPointerDown(e);
  }, [handleRootClick, props.onPointerDown]);
  
  const handlePointerUp = React.useCallback(() => {
    setIsDragging(false);
  }, []);
  
  const handleTouchStart = React.useCallback((e: React.TouchEvent) => {
    setIsDragging(true);
    handleRootClick(e);
    if (props.onTouchStart) props.onTouchStart(e);
  }, [handleRootClick, props.onTouchStart]);
  
  return (
    <SliderPrimitive.Root
      ref={ref}
      className={cn(
        "relative flex w-full touch-none select-none items-center",
        className
      )}
      onValueChange={handleValueChange}
      {...props}
      // Apply safety bounds to value/defaultValue
      value={safeValue}
      defaultValue={safeDefaultValue}
      onPointerDown={handlePointerDown}
      onPointerUp={handlePointerUp}
      onPointerLeave={handlePointerUp}
      onPointerCancel={handlePointerUp}
      onTouchStart={handleTouchStart}
      onTouchEnd={handlePointerUp}
      onClick={handleRootClick} // Add click handler for direct track clicks
    >
      <SliderPrimitive.Track 
        className="relative h-[1px] w-full grow overflow-hidden"
        style={{ backgroundColor: `${crushAIColors.tertiary}50` }}
      >
        <SliderPrimitive.Range 
          className="absolute h-full" 
          style={{ backgroundColor: crushAIColors.primary }}
        />
      </SliderPrimitive.Track>
      <SliderPrimitive.Thumb 
        className={cn(
          "block h-6 w-6 rounded-full border shadow-md transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-neutral-950 disabled:pointer-events-none disabled:opacity-50 dark:border-neutral-800 dark:bg-neutral-950 dark:focus-visible:ring-neutral-300 flex items-center justify-center",
          bounceActive && "animate-bounce-subtle"
        )}
        style={{ 
          touchAction: 'none',
          opacity: 1, // Force the thumb to always be visible
          position: 'relative',
          zIndex: 50, // Ensure a high z-index so it's always on top
          minWidth: '24px',
          minHeight: '24px',
          // This ensures we can see the thumb even when at the edge
          transform: 'translate(-50%, -50%)',
          transition: isDragging ? 'none' : 'transform 0.2s ease-out',
          backgroundColor: crushAIColors.primary,
          borderColor: `${crushAIColors.tertiary}50`
        }}
      >
        <div className="grid grid-cols-3 gap-[2px]">
          {Array.from({ length: 9 }).map((_, index) => (
            <div key={index} className="w-[2px] h-[2px] rounded-full bg-white/70"></div>
          ))}
        </div>
        {/* Enhanced touch target for better mobile interaction */}
        <div 
          style={{
            position: 'absolute',
            width: '44px', // Increased touch target size
            height: '44px',
            borderRadius: '50%',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            zIndex: -1,
            cursor: isDragging ? 'grabbing' : 'grab',
            backgroundColor: 'rgba(0,0,0,0.001)' // Nearly invisible but helps with touch events
          }}
        />
      </SliderPrimitive.Thumb>
    </SliderPrimitive.Root>
  )
})
Slider.displayName = SliderPrimitive.Root.displayName

export { Slider }
