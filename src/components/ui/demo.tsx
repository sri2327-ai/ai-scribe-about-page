
'use client'

import { SplineScene } from "@/components/ui/splite";
import { getGradient } from "@/components/ui/effects/gradient-utils";

export function SplineSceneBasic() {
  return (
    <div className="w-full h-[500px] relative overflow-hidden border-0 bg-black">
      <div className="flex h-full flex-col md:flex-row">
        {/* Left content */}
        <div className="flex-1 p-8 relative z-10 flex flex-col justify-center">
          <h1 
            className="text-4xl md:text-5xl font-bold font-wix-madefor tracking-tight"
            style={{
              background: getGradient("gray", 1.5), // Increased intensity for darker effect
              WebkitBackgroundClip: "text",
              backgroundClip: "text",
              color: "transparent",
              backgroundPosition: "left", 
              backgroundSize: "200%"
            }}
          >
            <span style={{ opacity: 0.6 }}>Smarter</span> Healthcare <span style={{ opacity: 0.6 }}>Starts</span> Here
          </h1>
          <p className="mt-4 text-gray-400 max-w-lg font-wix-madefor">
            We're simplifying clinical workflows with AI, robotic assistants, and smart agents.
          </p>
        </div>

        {/* Right content */}
        <div className="flex-1 relative">
          <SplineScene 
            scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
            className="w-full h-full"
          />
        </div>
      </div>
    </div>
  )
}
