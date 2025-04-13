
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
            className="text-5xl md:text-7xl font-normal font-wix-madefor tracking-tight leading-[1.2]"
          >
            <span className="text-transparent bg-clip-text"
              style={{
                backgroundImage: `linear-gradient(90deg, rgba(100,100,100,0.2) 0%, rgba(120,120,120,0.7) 50%, rgba(80,80,80,0.9) 100%)`,
                backgroundSize: "100%",
              }}
            >Smarter</span>{" "}
            <span className="text-transparent bg-clip-text"
              style={{
                backgroundImage: `linear-gradient(90deg, rgba(120,120,120,0.7) 0%, rgba(140,140,140,0.8) 50%, rgba(100,100,100,0.9) 100%)`,
                backgroundSize: "100%",
              }}
            >Healthcare</span>{" "}
            <span className="text-transparent bg-clip-text"
              style={{
                backgroundImage: `linear-gradient(90deg, rgba(100,100,100,0.2) 0%, rgba(120,120,120,0.7) 50%, rgba(80,80,80,0.9) 100%)`,
                backgroundSize: "100%",
              }}
            >Starts</span>{" "}
            <span className="text-transparent bg-clip-text"
              style={{
                backgroundImage: `linear-gradient(90deg, rgba(120,120,120,0.7) 0%, rgba(140,140,140,0.8) 50%, rgba(100,100,100,0.9) 100%)`,
                backgroundSize: "100%",
              }}
            >Here</span>
          </h1>
          <p className="mt-4 text-gray-400 max-w-lg font-normal font-wix-madefor">
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
