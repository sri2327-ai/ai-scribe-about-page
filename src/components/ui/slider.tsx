
"use client"

import * as React from "react"
import * as SliderPrimitive from "@radix-ui/react-slider"

import { cn } from "@/lib/utils"

interface SliderProps extends React.ComponentPropsWithoutRef<typeof SliderPrimitive.Root> {
  className?: string;
}

const Slider = React.forwardRef<
  React.ElementRef<typeof SliderPrimitive.Root>,
  SliderProps
>(({ className, ...props }, ref) => (
  <SliderPrimitive.Root
    ref={ref}
    className={cn(
      "relative flex w-full touch-none select-none items-center",
      className
    )}
    {...props}
  >
    <SliderPrimitive.Track 
      className="relative h-4 w-full grow overflow-hidden rounded-full bg-gray-200 border border-gray-300 shadow-inner"
    >
      <SliderPrimitive.Range 
        className="absolute h-full bg-gradient-to-r from-blue-500 to-indigo-600 shadow-md rounded-full" 
      />
    </SliderPrimitive.Track>
    <SliderPrimitive.Thumb 
      className="block h-7 w-7 rounded-full border-2 border-blue-500 bg-white shadow-lg ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:border-blue-600 cursor-pointer hover:shadow-xl"
    />
  </SliderPrimitive.Root>
))
Slider.displayName = SliderPrimitive.Root.displayName

export { Slider }
