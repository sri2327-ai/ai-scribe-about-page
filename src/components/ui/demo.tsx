
'use client'

import { SplineScene } from "@/components/ui/splite";

export function SplineSceneBasic() {
  return (
    <div className="w-full h-[500px] relative overflow-hidden border-0">
      {/* Teal blue semi-circle gradient on black background */}
      <div 
        className="absolute inset-0 bg-black" 
        style={{
          background: 'radial-gradient(ellipse at 50% 0%, rgba(30, 174, 219, 0.25) 0%, rgba(18, 105, 132, 0.1) 50%, rgba(0, 0, 0, 0) 70%)',
        }}
      />
      
      <div className="flex h-full flex-col md:flex-row">
        {/* Left content */}
        <div className="flex-1 p-8 relative z-10 flex flex-col justify-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white font-wix-madefor">
            Smarter Healthcare Starts Here
          </h1>
          <p className="mt-4 text-[#999999] max-w-lg font-wix-madefor">
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
