
'use client'

import { SplineScene } from "@/components/ui/splite";
import { Spotlight } from "@/components/ui/spotlight"

export function SplineSceneBasic() {
  // Using the teal blue color from the lamp animation (#1EAEDB)
  return (
    <div className="w-full h-[500px] bg-black relative overflow-hidden">
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="#1EAEDB"
      />

      <div className="flex h-full flex-col md:flex-row">
        {/* Left content */}
        <div className="flex-1 p-8 relative z-10 flex flex-col justify-center">
          <h1 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-[#1EAEDB] to-[#7CD7F1]">
            Revolutionizing Healthcare with AI
          </h1>
          <p className="mt-4 text-[#E6F7FC] max-w-lg">
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
