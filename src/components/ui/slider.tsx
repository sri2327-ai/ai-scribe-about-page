
import * as React from "react"
import * as SliderPrimitive from "@radix-ui/react-slider"

import { cn } from "@/lib/utils"

const Slider = React.forwardRef<
  React.ElementRef<typeof SliderPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof SliderPrimitive.Root>
>(({ className, ...props }, ref) => {
  // Track if we're currently dragging to prevent slider from disappearing
  const [isDragging, setIsDragging] = React.useState(false);

  // Fixed minimum/maximum values to prevent slider from disappearing
  const safeThumbPosition = (value: number[]) => {
    // Ensure the slider thumb is always visible by clamping to 3-97% range
    const safeValue = [...value];
    if (safeValue.length > 0) {
      safeValue[0] = Math.max(3, Math.min(97, safeValue[0]));
    }
    return safeValue;
  };
  
  // Get the current value or default to [0]
  const currentValue = props.value ? safeThumbPosition(props.value as number[]) : 
                      props.defaultValue ? safeThumbPosition(props.defaultValue as number[]) : 
                      [0];
  
  return (
    <SliderPrimitive.Root
      ref={ref}
      className={cn(
        "relative flex w-full touch-none select-none items-center",
        className
      )}
      onValueChange={(val) => {
        if (props.onValueChange) {
          // Apply safety bounds before passing to user callback
          props.onValueChange(safeThumbPosition(val));
        }
      }}
      {...props}
      // Apply safety bounds to value/defaultValue
      value={props.value ? safeThumbPosition(props.value as number[]) : undefined}
      defaultValue={props.defaultValue ? safeThumbPosition(props.defaultValue as number[]) : undefined}
      onPointerDown={() => setIsDragging(true)}
      onPointerUp={() => setIsDragging(false)}
      onPointerLeave={() => setIsDragging(false)}
      onPointerCancel={() => setIsDragging(false)}
    >
      <SliderPrimitive.Track className="relative h-[1px] w-full grow overflow-hidden bg-neutral-200 dark:bg-neutral-800">
        <SliderPrimitive.Range className="absolute h-full bg-neutral-900 dark:bg-neutral-100" />
      </SliderPrimitive.Track>
      <SliderPrimitive.Thumb 
        className="block h-6 w-6 rounded-full border border-neutral-200 bg-black text-white shadow-md transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-neutral-950 disabled:pointer-events-none disabled:opacity-50 dark:border-neutral-800 dark:bg-neutral-950 dark:focus-visible:ring-neutral-300 flex items-center justify-center"
        style={{ 
          touchAction: 'none',
          opacity: 1, // Force the thumb to always be visible
          position: 'relative',
          zIndex: 50, // Ensure a high z-index so it's always on top
          minWidth: '24px',
          minHeight: '24px',
          // This ensures we can see the thumb even when at the edge
          transform: 'translate(-50%, -50%)',
          transition: isDragging ? 'none' : 'transform 0.2s ease-out'
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
