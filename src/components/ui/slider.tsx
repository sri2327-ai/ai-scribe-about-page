
import * as React from "react"
import * as SliderPrimitive from "@radix-ui/react-slider"

import { cn } from "@/lib/utils"

const Slider = React.forwardRef<
  React.ElementRef<typeof SliderPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof SliderPrimitive.Root>
>(({ className, ...props }, ref) => {
  // Track if we're currently dragging to prevent slider from disappearing
  const [isDragging, setIsDragging] = React.useState(false);
  
  return (
    <SliderPrimitive.Root
      ref={ref}
      className={cn(
        "relative flex w-full touch-none select-none items-center",
        className
      )}
      {...props}
      onPointerDown={() => setIsDragging(true)}
      onPointerUp={() => setIsDragging(false)}
      onPointerLeave={() => {
        // Don't reset dragging state on pointer leave to prevent disappearing
        // The state will be reset on pointerup which happens when the drag ends
      }}
      onPointerCancel={() => setIsDragging(false)}
    >
      <SliderPrimitive.Track className="relative h-[1px] w-full grow overflow-hidden bg-neutral-200 dark:bg-neutral-800">
        <SliderPrimitive.Range className="absolute h-full bg-neutral-900 dark:bg-neutral-100" />
      </SliderPrimitive.Track>
      <SliderPrimitive.Thumb 
        className="block h-6 w-6 rounded-full border border-neutral-200 bg-black text-white shadow-md transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-neutral-950 disabled:pointer-events-none disabled:opacity-50 dark:border-neutral-800 dark:bg-neutral-950 dark:focus-visible:ring-neutral-300 flex items-center justify-center"
        style={{ 
          touchAction: 'none',
          // Add a property to ensure thumb always stays visible
          opacity: '1',
          // Increase hit area for better mobile interaction
          position: 'relative'
        }}
      >
        <div className="grid grid-cols-3 gap-[2px]">
          {Array.from({ length: 9 }).map((_, index) => (
            <div key={index} className="w-[2px] h-[2px] rounded-full bg-white/70"></div>
          ))}
        </div>
        {/* Add an invisible larger touch target */}
        <div 
          style={{
            position: 'absolute',
            width: '40px',
            height: '40px',
            borderRadius: '50%',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            zIndex: -1,
            cursor: 'grab'
          }}
        />
      </SliderPrimitive.Thumb>
    </SliderPrimitive.Root>
  )
})
Slider.displayName = SliderPrimitive.Root.displayName

export { Slider }
