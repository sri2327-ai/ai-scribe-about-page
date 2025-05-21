
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

const FallbackComponent = () => (
  <div className="w-full h-full flex items-center justify-center">
    <span className="loader"></span>
  </div>
);

const ErrorComponent = () => (
  <div className="p-4 text-center text-red-500">Failed to load 3D visualization</div>
);

export function SplineScene({ scene, className }: SplineSceneProps) {
  // Use dynamic import with simplified error handling
  const Spline = lazy(() => {
    return new Promise<{ default: ComponentType<SplineProps> }>((resolve) => {
      import('@splinetool/react-spline')
        .then(module => {
          resolve({ default: module.default as ComponentType<SplineProps> });
        })
        .catch(error => {
          console.error("Failed to load Spline component:", error);
          resolve({ 
            default: () => <ErrorComponent /> 
          });
        });
    });
  });

  return (
    <Suspense fallback={<FallbackComponent />}>
      <Spline
        scene={scene}
        className={className}
      />
    </Suspense>
  )
}
