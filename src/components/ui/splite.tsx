
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
  // Fixed type assertion to avoid TypeScript errors
  const Spline = lazy(() => 
    import('@splinetool/react-spline')
      .then(module => ({ default: module.default as ComponentType<SplineProps> }))
      .catch(() => ({ 
        default: () => <div className="p-4 text-center text-red-500">Failed to load Spline</div> 
      }))
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
