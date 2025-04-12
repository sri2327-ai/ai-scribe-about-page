
'use client'

import { SplineScene } from "@/components/ui/splite";
import { Spotlight } from "@/components/ui/spotlight"

export function SplineSceneBasic() {
  return (
    <div className="w-full h-[500px] bg-black relative overflow-hidden">
      <Spotlight fill="white" />
      
      <div className="flex h-full">
        {/* Left content */}
        <div className="flex-1 p-8 relative z-10 flex flex-col justify-center">
          <h1 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
            Revolutionizing Healthcare with AI
          </h1>
          <p className="mt-4 text-neutral-300 max-w-lg">
            We're making life easier for clinicians with intelligent automation and cutting-edge AI technology.
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
