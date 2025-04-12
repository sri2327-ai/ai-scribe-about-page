
'use client'

import { SplineScene } from "@/components/ui/splite";
import { Spotlight } from "@/components/ui/spotlight"

export function SplineSceneBasic() {
  // Using the teal blue color from the lamp animation (#1EAEDB)
  return (
    <div className="w-full h-[500px] bg-black relative overflow-hidden border-0">
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="#1EAEDB"
      />

      <div className="flex h-full flex-col md:flex-row">
        {/* Left content */}
        <div className="flex-1 p-8 relative z-10 flex flex-col justify-center">
          <h1 className="text-4xl md:text-5xl font-bold font-wix-madefor relative">
            <span className="absolute inset-0 bg-gradient-to-b from-[#1EAEDB] via-[#7CD7F1] to-transparent bg-clip-text text-transparent blur-[2px] select-none">
              Smarter Healthcare Starts Here
            </span>
            <span className="bg-gradient-to-b from-[#1EAEDB] via-[#7CD7F1] to-transparent bg-clip-text text-transparent relative">
              Smarter Healthcare Starts Here
            </span>
          </h1>
          <p className="mt-4 text-[#E6F7FC] max-w-lg font-wix-madefor">
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
