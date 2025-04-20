
'use client'

import { Suspense, lazy } from 'react'

interface SplineSceneProps {
  scene: string
  className?: string
}

export function SplineScene({ scene, className }: SplineSceneProps) {
  // Use dynamic import instead to prevent loading issues
  const Spline = lazy(() => import('@splinetool/react-spline').catch(() => ({
    default: () => <div>Failed to load Spline</div>
  })))

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
