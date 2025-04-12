
'use client'

import { SplineScene } from "@/components/ui/splite";
import { Spotlight } from "@/components/ui/spotlight"
import { useIsMobile } from "@/hooks/use-mobile"

export function SplineSceneBasic() {
  const isMobile = useIsMobile();

  return (
    <div className="w-full h-full min-h-[500px] lg:min-h-[600px] bg-black relative overflow-hidden">
      <Spotlight fill="white" />
      
      <div className="flex flex-col md:flex-row h-full">
        {/* Left content */}
        <div className="flex-1 p-4 md:p-8 relative z-10 flex flex-col justify-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
            Revolutionizing Healthcare with AI
          </h1>
          <p className="mt-2 md:mt-4 text-sm sm:text-base text-neutral-300 max-w-lg">
            We're making life easier for clinicians with intelligent automation and cutting-edge AI technology.
          </p>
        </div>

        {/* Right content */}
        <div className={`${isMobile ? 'h-[300px]' : 'flex-1'} relative`}>
          <SplineScene 
            scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
            className="w-full h-full"
          />
        </div>
      </div>
    </div>
  )
}
