
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
          >
            <span className="text-transparent bg-clip-text"
              style={{
                backgroundImage: getGradient("x-gray", 1.2),
                backgroundSize: "100%",
                backgroundPosition: "center",
              }}
            >Smarter</span>{" "}
            <span className="text-transparent bg-clip-text"
              style={{
                backgroundImage: `linear-gradient(90deg, rgba(220,220,220,0.9) 0%, rgba(240,240,240,1) 100%)`,
                backgroundSize: "100%",
              }}
            >Healthcare</span>{" "}
            <span className="text-transparent bg-clip-text"
              style={{
                backgroundImage: getGradient("x-gray", 1.2),
                backgroundSize: "100%",
                backgroundPosition: "center",
              }}
            >Starts</span>{" "}
            <span className="text-transparent bg-clip-text"
              style={{
                backgroundImage: `linear-gradient(90deg, rgba(220,220,220,0.9) 0%, rgba(240,240,240,1) 100%)`,
                backgroundSize: "100%",
              }}
            >Here</span>
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
