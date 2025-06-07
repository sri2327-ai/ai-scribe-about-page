
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
      "relative flex w-full touch-none select-none items-center cursor-pointer",
      className
    )}
    {...props}
  >
    <SliderPrimitive.Track 
      className="relative h-4 w-full grow overflow-hidden rounded-full bg-gray-200 border border-gray-300 shadow-inner cursor-pointer"
    >
      <SliderPrimitive.Range 
        className="absolute h-full bg-gradient-to-r from-[#143151] to-[#387E89] shadow-md transition-all duration-200" 
      />
    </SliderPrimitive.Track>
    <SliderPrimitive.Thumb 
      className="block h-7 w-7 rounded-full border-3 border-[#143151] bg-white shadow-xl ring-offset-background transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#387E89] focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:border-[#387E89] hover:scale-110 cursor-grab active:cursor-grabbing active:scale-125"
    />
  </SliderPrimitive.Root>
))
Slider.displayName = SliderPrimitive.Root.displayName

export { Slider }
