
import * as React from "react"
import * as SliderPrimitive from "@radix-ui/react-slider"

import { cn } from "@/lib/utils"

const Slider = React.forwardRef<
  React.ElementRef<typeof SliderPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof SliderPrimitive.Root>
>(({ className, ...props }, ref) => (
  <SliderPrimitive.Root
    ref={ref}
    className={cn(
      "relative flex w-full touch-none select-none items-center",
      className
    )}
    {...props}
  >
    <SliderPrimitive.Track className="relative h-[1px] w-full grow overflow-hidden bg-neutral-200 dark:bg-neutral-800">
      <SliderPrimitive.Range className="absolute h-full bg-neutral-900 dark:bg-neutral-100" />
    </SliderPrimitive.Track>
    <SliderPrimitive.Thumb className="block h-6 w-6 rounded-full border border-neutral-200 bg-black text-white shadow-md transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-neutral-950 disabled:pointer-events-none disabled:opacity-50 dark:border-neutral-800 dark:bg-neutral-950 dark:focus-visible:ring-neutral-300 flex items-center justify-center">
      <div className="grid grid-cols-3 gap-[2px]">
        {Array.from({ length: 9 }).map((_, index) => (
          <div key={index} className="w-[2px] h-[2px] rounded-full bg-white/70"></div>
        ))}
      </div>
    </SliderPrimitive.Thumb>
  </SliderPrimitive.Root>
))
Slider.displayName = SliderPrimitive.Root.displayName

export { Slider }
