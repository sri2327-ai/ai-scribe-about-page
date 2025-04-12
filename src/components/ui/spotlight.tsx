
'use client'

import * as React from 'react'
import { cn } from '@/lib/utils'

interface SpotlightProps extends React.HTMLAttributes<HTMLDivElement> {
  fill?: string
}

export function Spotlight({
  className,
  fill = 'white',
  ...props
}: SpotlightProps) {
  const spotlightRef = React.useRef<HTMLDivElement>(null)

  React.useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      const { clientX, clientY } = event

      if (spotlightRef.current) {
        const { left, top } = spotlightRef.current.getBoundingClientRect()

        const x = clientX - left
        const y = clientY - top

        spotlightRef.current.style.setProperty('--x', `${x}px`)
        spotlightRef.current.style.setProperty('--y', `${y}px`)
      }
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <div
      ref={spotlightRef}
      className={cn(
        'pointer-events-none absolute inset-0 z-0 transition duration-300',
        className
      )}
      {...props}
    >
      <div
        className="absolute size-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full"
        style={{
          left: 'var(--x)',
          top: 'var(--y)',
          background: `radial-gradient(circle at center, ${fill}, transparent 80%)`,
          opacity: 0.2,
        }}
      />
    </div>
  )
}
