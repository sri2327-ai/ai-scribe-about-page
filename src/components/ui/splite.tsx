
'use client'

import { Suspense, lazy, ComponentType } from 'react'

// Define the proper interface for Spline props
interface SplineProps {
  scene: string;
  className?: string;
  [key: string]: any; // Add this to accommodate any other props that Spline might accept
}

interface SplineSceneProps {
  scene: string
  className?: string
}

export function SplineScene({ scene, className }: SplineSceneProps) {
  // Use dynamic import with explicit error handling
  const Spline = lazy(() => 
    import('@splinetool/react-spline')
      .then(module => ({ default: module.default as ComponentType<SplineProps> }))
      .catch(error => {
        console.error("Failed to load Spline component:", error);
        return { 
          default: () => <div className="p-4 text-center text-red-500">Failed to load Spline visualization</div> 
        };
      })
  )

  return (
    <Suspense 
      fallback={
        <div className="w-full h-full flex items-center justify-center">
          <span className="loader"></span>
        </div>
      }
    >
      <Spline
        scene={scene}
        className={className}
      />
    </Suspense>
  )
}
