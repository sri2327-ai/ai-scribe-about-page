
import React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cn } from "@/lib/utils";

interface RainbowButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  asChild?: boolean;
}

export function RainbowButton({
  children,
  className,
  asChild = false,
  ...props
}: RainbowButtonProps) {
  const Comp = asChild ? Slot : "button";
  return (
    <Comp
      className={cn(
        "group relative inline-flex h-11 animate-rainbow cursor-pointer items-center justify-center rounded-xl border-0 bg-[length:200%] px-8 py-2 font-medium text-primary-foreground transition-colors [background-clip:padding-box,border-box,border-box] [background-origin:border-box] [border:calc(0.08*1rem)_solid_transparent] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50",

        // before styles - glow effect with brand gradient
        "before:absolute before:bottom-[-20%] before:left-1/2 before:z-0 before:h-1/5 before:w-3/5 before:-translate-x-1/2 before:animate-rainbow before:bg-[linear-gradient(90deg,hsl(var(--primary)),hsl(var(--secondary)),hsl(var(--accent)),hsl(var(--secondary)))] before:bg-[length:200%] before:[filter:blur(calc(0.8*1rem))]",

        // light mode colors - using brand gradient
        "bg-[linear-gradient(hsl(var(--background)),hsl(var(--background))),linear-gradient(hsl(var(--background))_50%,hsla(var(--background),0.6)_80%,hsla(var(--background),0)),linear-gradient(90deg,hsl(var(--primary)),hsl(var(--secondary)),hsl(var(--accent)),hsl(var(--secondary)))]",

        // dark mode colors - using brand gradient
        "dark:bg-[linear-gradient(hsl(var(--background)),hsl(var(--background))),linear-gradient(hsl(var(--background))_50%,hsla(var(--background),0.6)_80%,hsla(var(--background),0)),linear-gradient(90deg,hsl(var(--primary)),hsl(var(--secondary)),hsl(var(--accent)),hsl(var(--secondary)))]",

        className,
      )}
      {...props}
    >
      {children}
    </Comp>
  );
}
